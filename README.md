# Brain Wiki

A personal knowledge wiki built from an Obsidian vault. Raw notes are pulled in,
an LLM turns them into cross-linked wiki pages, and a Bun server renders them as a
browsable site with a complete bookmark catalog, original source history, search,
graph, tags, timeline, backlinks and an evidence review queue.

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.3
- An authenticated [`claude` CLI](https://docs.claude.com/en/docs/claude-code) on
  `PATH` (used for ingest; auth comes from `~/.claude/`)
- `AGENTS.md` present in the repo root — it is the load-bearing wiki schema the
  staged ingest step follows.

## Quick start

```bash
bun install
bun run dev          # http://localhost:3000  (loopback only)
```

The server binds to `127.0.0.1`. Mutating routes are POST-only and require a
per-process HttpOnly session, a separate CSRF token, and same-origin Fetch
Metadata. It is intended for **local use only**.

## Scripts

| Script | What it does |
|--------|--------------|
| `bun run dev` | Server with auto-restart on code changes |
| `bun run start` | Server (no watch) |
| `bun run sync` | Capture new or revised vault files without changing earlier captures |
| `bun run sync -- --preview` | Preview source changes without writing files |
| `bun run refresh` | Sync, then print the pending-ingest count (no auto-ingest) |
| `bun run build` | Build the static site into `dist/` (for Cloudflare Pages) |
| `bun run check` | Fail on broken body links, related-page links or source paths |
| `bun test` | Source capture, search, graph, content derivation and ingest boundary tests |

## The pipeline

```
Obsidian vault  ──①sync──▶  raw/  ──②ingest──▶  wiki/  ──③serve──▶  browser
(source of truth)         (immutable versions)            (LLM pages)   (Bun + fs.watch)
```

1. **Capture** (`sync.ts`, `POST /api/sync`): read the vault folders, including the curated
   `bookmarks/` collection, plus Markdown notes at the vault root (stored under `root/`). New files and changes are saved under
   `raw/snapshots/<timestamp>-<hash>/<original-path>`. Existing captures are never
   overwritten or deleted, including when a source disappears upstream. Empty or
   missing folders are reported. `GET /api/sync/preview` shows changes without
   writing; the app previews this list before the Capture action. `BRAIN_PATH`
   selects the vault. The local `.capture-manifest.json` can be rebuilt from the
   snapshot directories and is separate from the synthesis manifest.
2. **Ingest** (`ingest.ts`, `POST /api/ingest`): canonicalizes and limits selected
   Markdown sources, copies only those sources plus `wiki/` into a private staging
   workspace, and runs `claude` there with an empty home, an environment allowlist,
   fail-closed OS sandbox settings, path-scoped `dontAsk` permissions, and no shell,
   web, MCP, user-setting, or session-persistence tools. A diff is generated and the full staged tree is validated before
   changed pages are atomically published. Prompt-injection text in a source is
   explicitly treated as untrusted data. The published `wiki/` is also snapshotted
   first (recover with `git checkout <sha> -- wiki/`).
3. **Serve** (`server.ts` + `lib.ts`): renders the wiki, captured source records and
   individual bookmarks. Citations pin a particular raw file; the bookmark catalog
   uses the latest capture of each category. Search prioritises exact titles and
   post IDs, returns clean snippets and links to matching sections. Derived data
   is cached between reloads. Pins, recent pages and collapsed navigation groups
   are saved in this browser. The static build contains the same reading data;
   capture and ingest actions require the local server.

## Automation (optional)

For a hands-off pull, `bun run refresh` syncs the vault and then prints how many
`raw/` files are pending ingest — it **never** auto-ingests (ingest spawns the
`claude` CLI with your credentials, so it stays a manual click).

To run that on a schedule, a macOS `launchd` template lives at
`scripts/com.brainwiki.sync.plist`. It is **opt-in** — nothing runs until you
copy it into `~/Library/LaunchAgents/`, fill in the absolute paths it documents,
and `launchctl load` it:

```bash
cp scripts/com.brainwiki.sync.plist ~/Library/LaunchAgents/com.brainwiki.sync.plist
# edit the copy: set __BUN_BIN__, __REPO_DIR__, __BRAIN_PATH__
launchctl load ~/Library/LaunchAgents/com.brainwiki.sync.plist   # unload to disable
```

It runs daily at 09:00 by default (editable in the plist) and logs to
`raw/.refresh.{out,err}.log`.

## Configuration

| Env var | Default | Purpose |
|---------|---------|---------|
| `BRAIN_PATH` | iCloud Drive `Obsidian/Brain/` | Obsidian vault to capture from |
| `PORT` | `3000` | Local server port; for example `PORT=3001 bun server.ts` |

## Deploy

`bun run build` emits a static `dist/`. CI (`.github/workflows/deploy.yml`) pins Bun,
uses the frozen lockfile, and runs tests, content checks, and the production build
on pull requests and pushes. Only validated pushes to `main` deploy to Cloudflare
Pages.

## Evidence and source metadata

`updated` is the content edit date. `reviewed` records the date of a scoped evidence
check; `review_status`, `review_notes` and `review_due` describe its limits and next
review. Use `source_gaps` for unavailable historical documents and keep their
original names there. Do not put an invented path in `sources`.

The Review view prioritises source gaps, broken references, unresolved health or
electrical claims and overdue recorded reviews. Source archives do not become
stale simply because they are old. A capture, synthesis and evidence verification
are distinct events.
