import { readdir, readFile, stat } from "node:fs/promises";
import { basename, join } from "node:path";
import { createHash } from "node:crypto";
import { plainText } from "./search";

export const RAW_ROOT = join(import.meta.dir, "raw");
export interface RawSource {
  id: string; path: string; logicalPath: string; title: string;
  capturedAt: string | null; sha256: string; size: number; content: string;
}
export interface Bookmark {
  id: string; title: string; url: string; annotation: string; markdown: string;
  category: string; domain: string; sourceId: string; sourcePath: string;
  capturedAt: string | null; identifiers: string[];
}
export const digest = (value: string | Uint8Array) => createHash("sha256").update(value).digest("hex");

// Resolve the latest captured image while keeping earlier bytes in raw/.
// The map is also the allowlist for HTTP serving and static exports.
export async function loadAssetFiles(root = RAW_ROOT): Promise<Map<string, string>> {
  const files = new Map<string, string>();
  async function add(dir: string, prefix = "") {
    let entries;
    try { entries = await readdir(dir, { withFileTypes: true }); }
    catch (e: any) { if (e.code === "ENOENT") return; throw e; }
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const path = join(dir, entry.name), name = prefix + entry.name;
      if (entry.isDirectory()) await add(path, name + "/");
      else if (entry.isFile()) files.set(name, path);
    }
  }
  await add(join(root, "assets"));
  let captures;
  try { captures = await readdir(join(root, "snapshots"), { withFileTypes: true }); }
  catch (e: any) { if (e.code === "ENOENT") return files; throw e; }
  for (const capture of captures.filter(e => e.isDirectory() && /^\d+-[a-f0-9]+$/.test(e.name)).sort((a, b) => Number(a.name.split("-")[0]) - Number(b.name.split("-")[0]))) {
    await add(join(root, "snapshots", capture.name, "assets"));
  }
  return files;
}

// Only regular files: links in raw/ must not expose other folders.
export async function loadRawSources(root = RAW_ROOT): Promise<RawSource[]> {
  const out: RawSource[] = [];
  async function walk(dir: string, prefix = "") {
    let entries;
    try { entries = await readdir(dir, { withFileTypes: true }); }
    catch (error: any) { if (error.code === "ENOENT") return; throw error; }
    for (const entry of entries) {
      if (entry.name.startsWith(".") || entry.name === "assets") continue;
      const path = prefix + entry.name;
      if (entry.isDirectory()) await walk(join(dir, entry.name), path + "/");
      else if (entry.isFile() && entry.name.endsWith(".md")) {
        const content = await readFile(join(root, path), "utf8");
        const version = path.match(/^snapshots\/(\d+)-[a-f0-9]+\/(.+)$/);
        const logicalPath = version?.[2] || path;
        out.push({ id: digest(path).slice(0, 20), path, logicalPath, title: basename(logicalPath, ".md"),
          capturedAt: version ? new Date(Number(version[1])).toISOString() : null,
          sha256: digest(content), size: (await stat(join(root, path))).size, content });
      }
    }
  }
  await walk(root);
  return out.sort((a, b) => a.path.localeCompare(b.path));
}

export function latestSources(sources: RawSource[]): RawSource[] {
  const latest = new Map<string, RawSource>();
  for (const source of sources) {
    const old = latest.get(source.logicalPath);
    if (!old || (source.capturedAt || "") > (old.capturedAt || "")) latest.set(source.logicalPath, source);
  }
  return [...latest.values()];
}

export function resolveSource(reference: string, sources: RawSource[]): RawSource | undefined {
  const path = reference.replace(/^raw\//, "");
  const exact = sources.find(s => s.path === path);
  if (exact) return exact; // Citations pin a captured version.
  if (path.includes("/")) return undefined;
  const matches = sources.filter(s => basename(s.path) === path && s.path === s.logicalPath);
  return matches.length === 1 ? matches[0] : undefined;
}

const domains: Record<string, string> = {
  "AI & Agents": "dev", "Developer Tools": "dev", "Design & Frontend": "dev", "Reference & Utilities": "dev",
  "Health & Psychology": "health", "Markets & Crypto": "markets", "Business & Startups": "markets",
  "Culture & Ideas": "culture", "Media & Inspiration": "culture", "Personal & Life": "personal",
};

function firstLink(line: string): { title: string; url: string; end: number; bare?: boolean } | null {
  const match = line.match(/^\s*[-*]\s+\[(.*?)\]\(/);
  if (!match) {
    const value = line.trim();
    if (!/^https?:\/\/\S+$/.test(value)) return null;
    try {
      const url = new URL(value);
      const post = /^(?:www\.)?(?:x|twitter)\.com$/.test(url.hostname) && url.pathname.match(/^\/([^/]+)\/status\/\d+/);
      const title = post ? `X post by @${post[1]}` : url.hostname.replace(/^www\./, "") + (url.pathname === "/" ? "" : url.pathname);
      return {title, url:value, end:line.length, bare:true};
    } catch { return null; }
  }
  const start = match[0].length;
  let depth = 1, end = start;
  for (; end < line.length; end++) {
    if (line[end] === "(") depth++;
    if (line[end] === ")") { depth--; if (depth === 0) break; }
  }
  const url = line.slice(start, end);
  if (depth !== 0 || !/^https?:\/\//.test(url)) return null;
  return { title: plainText(match[1]), url, end: end + 1 };
}

// Distilled entries written since October 2026 use a bold title and labelled
// sub-bullets instead of a leading link:
//   - **Title** — what it is
//   - **Evidence:** [label](https://primary.source)
//   - **Discovery:** [X source #1](https://x.com/…). Reviewed …
// Each block becomes one record whose URL is its first evidence link, falling
// back to the first discovery link.
const DISTILLED_TITLE = /^\s*[-*]\s+\*\*([^*]+?)\*\*\s*[—–-]\s*(.+)$/;
const DISTILLED_FIELD = /^\s*[-*]\s+\*\*([^*:]+(?:\s+\d{4}-\d{2}-\d{2})?):\*\*\s*(.*)$/;
function distilledEntries(content: string): { title: string; annotation: string; url: string; markdown: string }[] {
  const out: { title: string; annotation: string; url: string; markdown: string }[] = [];
  let current: { title: string; annotation: string; lines: string[]; evidence: string[]; discovery: string[] } | null = null;
  const firstUrl = (text: string) => [...text.matchAll(/\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s)>\]]+)/g)].map(m => m[1] || m[2])[0];
  const flush = () => {
    if (!current) return;
    const url = current.evidence.map(firstUrl).find(Boolean) || current.discovery.map(firstUrl).find(Boolean);
    if (url) out.push({ title: plainText(current.title), annotation: plainText(current.annotation), url, markdown: current.lines.join("\n") });
    current = null;
  };
  for (const line of content.split(/\r?\n/)) {
    const field = line.match(DISTILLED_FIELD);
    const title = !field && line.match(DISTILLED_TITLE);
    if (title) { flush(); current = { title: title[1], annotation: title[2], lines: [line.replace(/^\s*[-*]\s+/, "")], evidence: [], discovery: [] }; continue; }
    if (field && current) {
      current.lines.push(line.replace(/^\s*[-*]\s+/, ""));
      const label = field[1].toLowerCase();
      if (label.startsWith("evidence")) current.evidence.push(field[2]);
      else if (label.startsWith("discovery") || label.startsWith("follow-up")) current.discovery.push(field[2]);
      continue;
    }
    if (/^\s*#/.test(line) || (/^\s*[-*]\s+\[/.test(line))) flush();
  }
  flush();
  return out;
}

export function buildBookmarks(sources: RawSource[]): Bookmark[] {
  const bookmarks: Bookmark[] = [], seen = new Map<string, number>();
  for (const source of latestSources(sources)) {
    if (!source.logicalPath.startsWith("bookmarks/") || /^index$/i.test(source.title)) continue;
    const push = (title: string, url: string, annotation: string, markdown: string) => {
      const key = digest(source.logicalPath + "\0" + url).slice(0, 20), occurrence = seen.get(key) || 0;
      seen.set(key, occurrence + 1);
      bookmarks.push({ id: occurrence ? `${key}-${occurrence}` : key, title, url, annotation, markdown,
        category: source.title, domain: domains[source.title] || "personal", sourceId: source.id, sourcePath: source.path,
        capturedAt: source.capturedAt,
        identifiers: [...markdown.matchAll(/(?:x|twitter)\.com\/[^/\s]+\/status\/(\d+)/g)].map(m => m[1]) });
    };
    for (const line of source.content.split(/\r?\n/)) {
      if (DISTILLED_FIELD.test(line)) continue; // already part of a distilled entry
      const link = firstLink(line);
      if (!link) continue;
      const key = digest(source.logicalPath + "\0" + link.url).slice(0, 20), occurrence = seen.get(key) || 0;
      seen.set(key, occurrence + 1);
      bookmarks.push({ id: occurrence ? `${key}-${occurrence}` : key, title: link.title, url: link.url,
        annotation: link.bare ? "Saved as a link without an annotation." : plainText(line.slice(link.end).replace(/^\s*[—–-]\s*/, "")), markdown: line.replace(/^\s*[-*]\s+/, ""),
        category: source.title, domain: domains[source.title] || "personal", sourceId: source.id, sourcePath: source.path,
        capturedAt: source.capturedAt,
        identifiers: [...line.matchAll(/(?:x|twitter)\.com\/[^/\s]+\/status\/(\d+)/g)].map(m => m[1]) });
    }
    // After the one-line entries, so adding a distilled entry never changes an existing record's ID.
    for (const entry of distilledEntries(source.content)) push(entry.title, entry.url, entry.annotation, entry.markdown);
  }
  return bookmarks;
}
