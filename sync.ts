import { join, dirname } from "node:path";
import { readdir, mkdir, readFile, writeFile, stat, rename } from "node:fs/promises";
import { digest, RAW_ROOT } from "./sources";

const BRAIN_PATH = process.env.BRAIN_PATH || "/Users/erlinhoxha/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/Brain";
const SYNC_MAP: Record<string, string> = { misc: "misc", markets: "markets", bookmarks: "bookmarks", electrics: "electrics", img: "assets" };
export interface CaptureChange { source: string; destination: string; kind: "new" | "revision"; sha256: string; }
export interface CaptureStatus { lastCapturedAt: string | null; files: Record<string, { path: string; sha256: string; capturedAt: string }>; }
export interface SyncResult { synced: string[]; errors: string[]; deleted: number; backupDir: null; changes: CaptureChange[]; capturedAt: string | null; }
const statusFile = (root: string) => join(root, ".capture-manifest.json");

export async function readCaptureStatus(root = RAW_ROOT): Promise<CaptureStatus> {
  try { return JSON.parse(await readFile(statusFile(root), "utf8")); }
  catch (e: any) {
    if (e.code !== "ENOENT") throw e;
    // Snapshots are authoritative; the local manifest can be rebuilt on a fresh checkout.
    const status: CaptureStatus = {lastCapturedAt:null,files:{}};
    let paths:string[]=[];
    try { paths=await inventory(join(root,'snapshots')); } catch (error:any) {if(error.code!=='ENOENT')throw error;}
    for (const path of paths) {
      const match=path.match(/^(\d+)-[a-f0-9]+\/(.+)$/); if(!match)continue;
      const capturedAt=new Date(Number(match[1])).toISOString(), logical=match[2];
      if(status.files[logical] && status.files[logical].capturedAt>=capturedAt)continue;
      status.files[logical]={path:'snapshots/'+path,sha256:digest(await readFile(join(root,'snapshots',path))),capturedAt};
      if(!status.lastCapturedAt||capturedAt>status.lastCapturedAt)status.lastCapturedAt=capturedAt;
    }
    return status;
  }
}
async function inventory(root: string, prefix = ""): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(join(root, prefix), { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const path = prefix + entry.name;
    if (entry.isDirectory()) files.push(...await inventory(root, path + "/"));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}
let running = false;
// Markdown notes kept directly in the vault root (for example BRIEF.md) are
// captured under this raw folder; subfolders are handled by SYNC_MAP.
const ROOT_TARGET = "root";
export async function sync(options: { brainPath?: string; rawDir?: string; folders?: Record<string, string>; rootTarget?: string | false; preview?: boolean } = {}): Promise<SyncResult> {
  if (running) throw new Error("A source capture is already running");
  running = true;
  try {
    const brain = options.brainPath || BRAIN_PATH, raw = options.rawDir || RAW_ROOT;
    const status = await readCaptureStatus(raw);
    const result: SyncResult = { synced: [], errors: [], deleted: 0, backupDir: null, changes: [], capturedAt: status.lastCapturedAt };
    const stamp = Math.max(Date.now(), (Date.parse(status.lastCapturedAt || '') || 0) + 1), capturedAt = new Date(stamp).toISOString();
    const capture = async (sourceFile: string, logical: string) => {
      const content = await readFile(sourceFile);
      const sha256 = digest(content);
      const currentPath = status.files[logical]?.path || logical;
      let current: Buffer | null = null;
      try { current = await readFile(join(raw, currentPath)); } catch (e: any) { if (e.code !== "ENOENT") throw e; }
      if (current && digest(current) === sha256) return;
      const baselineExists = await stat(join(raw, logical)).then(() => true, e => { if (e.code === "ENOENT") return false; throw e; });
      const destination = `snapshots/${stamp}-${sha256.slice(0, 12)}/${logical}`;
      if (!options.preview) {
        await mkdir(dirname(join(raw, destination)), { recursive: true });
        await writeFile(join(raw, destination), content, { flag: "wx" });
        status.files[logical] = { path: destination, sha256, capturedAt };
      }
      result.changes.push({ source: logical, destination, kind: current || baselineExists ? "revision" : "new", sha256 });
    };
    for (const [folder, target] of Object.entries(options.folders || SYNC_MAP)) {
      try {
        const entries = await inventory(join(brain, folder));
        if (!entries.length) throw new Error("folder is empty or unavailable; retained all existing sources");
        for (const entry of entries) await capture(join(brain, folder, entry), `${target}/${entry}`);
      } catch (e: any) { result.errors.push(`${folder}: ${e.message}`); }
    }
    const rootTarget = options.rootTarget === undefined ? ROOT_TARGET : options.rootTarget;
    if (rootTarget) {
      try {
        const notes = (await readdir(brain, { withFileTypes: true }))
          .filter(e => e.isFile() && !e.name.startsWith(".") && e.name.toLowerCase().endsWith(".md")).map(e => e.name).sort();
        for (const name of notes) await capture(join(brain, name), `${rootTarget}/${name}`);
      } catch (e: any) { result.errors.push(`vault root: ${e.message}`); }
    }
    result.synced = result.changes.map(c => `${c.source} (${c.kind})`);
    if (!options.preview) {
      if (result.changes.length) status.lastCapturedAt = capturedAt;
      await mkdir(raw, { recursive: true });
      const temporary = statusFile(raw) + ".tmp";
      await writeFile(temporary, JSON.stringify(status, null, 2) + "\n");
      await rename(temporary, statusFile(raw));
      result.capturedAt = status.lastCapturedAt;
    }
    return result;
  } finally { running = false; }
}
if (import.meta.main) {
  const result = await sync({ preview: process.argv.includes("--preview") });
  console.log(JSON.stringify(result, null, 2));
  if (result.errors.length) process.exitCode = 1;
}
