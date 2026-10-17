# Brain Wiki - Schema

This is a personal knowledge wiki maintained by an LLM. The human curates sources and asks questions. The LLM writes and maintains all wiki pages.

## Directory Structure

```text
raw/                   # Immutable source documents. LLM reads, never modifies.
  misc/                # Personal notes, bookmarks, takes, observations
  markets/             # Trading, macro, crypto, finance
  electrics/           # Electrical safety, building regs, study notes
  root/                # Notes kept at the vault root, such as BRIEF.md
  clippings/           # Web clips and dated research notes
  snapshots/           # Immutable dated revisions captured from the vault
  assets/              # Images referenced by sources
wiki/                  # LLM-generated pages. LLM owns this entirely.
  INDEX.md             # Content catalog - every wiki page listed with summary
  log.md               # Chronological record of operations (parsed by the UI timeline)
  overview.md          # High-level summary of the wiki, its themes and gaps
  sources/             # One summary page per ingested raw source
  entities/            # Pages about specific people, tools, accounts, resources
  topics/              # Pages about broader subjects
  analyses/            # Synthesised answers to queries (comparisons, frameworks)
AGENTS.md              # This file - schema and conventions
```

## Page Types

### Entity Pages (`wiki/entities/`)

Pages about specific people, tools, accounts, or resources. Examples: a trader you follow, a supplement, a podcast, a software tool.

### Topic Pages (`wiki/topics/`)

Pages about broader subjects. Examples: trading psychology, ADHD, electrical safety, body optimization, crypto market structure.

### Source Summaries (`wiki/sources/`)

One page per ingested raw source. Contains: key takeaways, notable quotes, links to entity/topic pages it touches. Named after the source file.

### Comparisons & Analyses (`wiki/analyses/`)

Pages generated from queries - comparisons, syntheses, timelines, frameworks. Good answers get filed here so they compound.

### Overview (`wiki/overview.md`)

A single page summarizing the entire wiki: what domains it covers, what the key themes are, what's well-developed and what has gaps. Updated periodically.

## Frontmatter Convention

Every wiki page starts with YAML frontmatter:

```yaml
---
title: Page Title
type: entity | topic | source | analysis | overview
domain: personal | markets | electrics | culture | dev | health | psychology
sources: [list of raw source files this page draws from]
related: [list of wiki pages this page links to]
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [1-3 from the fixed list below]
summary: "One sentence, at most 25 words"
aliases: [former titles of pages merged into this one]
reviewed: YYYY-MM-DD     # Only after a scoped evidence check
review_status: reviewed | verified | partial | unverified | archive
review_notes: What was checked and what remains uncertain
review_due: YYYY-MM-DD   # Optional explicit review deadline
source_gaps: []          # Historical source names that cannot currently be found
---
```

## Cross-Linking

Use Obsidian-style wikilinks: `[[Page Name]]`. Every page should link to related pages. When creating or updating a page, check if new cross-links are needed to other existing pages. Orphan pages with no inbound links are a lint issue.

## Workflows

### Ingest

Capture revisions as new files under `raw/snapshots/`; never overwrite or delete an existing raw source. Cite a raw-relative file path to pin a version. Capture, synthesis and evidence review are separate events.

When the human adds a new source to `raw/`:

1. Read the source file completely.
2. Discuss key takeaways with the human if they want.
3. Add each new link to its home page (bookmark category or link collection) with a one-line description, under the right theme.
4. Create or update entity pages for any people, tools, or resources mentioned.
5. Create or update topic pages for concepts and themes.
6. Update cross-links across all touched pages.
7. Update `wiki/INDEX.md` with new/changed pages.
8. Append an entry to `log.md`.

Fold new material into the existing thematic sections; never append a dated section. Touch only the pages the source really changes, and keep each within its size limit.

### Query

When the human asks a question:

1. Read `wiki/INDEX.md` to find relevant pages.
2. Read those pages.
3. Synthesize an answer with `[[wikilinks]]` as citations.
4. If the answer is substantial or reusable, file it as a new page in `wiki/analyses/`.
5. Update `wiki/INDEX.md` and `log.md`.

### Lint

Periodic health check. The UI's `/lint` view automatically surfaces:

- Orphan pages (no inbound wikilinks)
- Broken wikilinks (pointing at non-existent pages)
- Pages with missing `type`, `domain`, or `tags` in frontmatter
- Broken `related` references and missing raw source paths
- Explicit historical source gaps
- Unreviewed health/electrical claims and pages marked partial or unverified
- Overdue evidence reviews (`review_due`, or 90 days for health/electrics and 365 days elsewhere after `reviewed`); source archives are exempt from age alone
- Duplicate titles (where wikilinks may resolve ambiguously)

These can be resolved automatically; the LLM should additionally watch for issues the UI can't detect:

- Contradictions between pages
- Stale claims superseded by newer sources
- Concepts mentioned but lacking their own page
- Duplicate content across pages
- Data gaps worth investigating (suggest sources to find)

## Writing Style

The wiki should be short. A reader learns the subject from a page and opens a saved link knowing what it is. Pages carry knowledge; `log.md` carries process. `bun run check` enforces the limits below (see `shape.ts`).

- Plain English, short sentences. Say a thing once.
- Organise by theme, never by ingest date or batch. A date appears only when the date is the fact.
- No process narration on pages: nothing about captures, retention, reviews, entry counts or how a page was made. That goes in `log.md`.
- **Each link is described once**, on its home page: its bookmark category, its link-collection page, or the one topic it belongs to. Elsewhere, mention it inline or link to the page that holds it.
- Link bullets: `- [Title](URL) — what it is, in one sentence.` Optional `_(@handle)_` at the end. At most 25 words of description. Links with nothing to say go in one `## Other saved links` list without descriptions.
- No hedge on every line. A page of saved posts gets one sentence near the top saying the claims are the authors' own. Do not write "verify before", "not a recommendation", "author-reported", "time-sensitive".
- No `## Related` section in the body; the page footer shows the frontmatter `related` list (at most 5).
- `(from [[Page]])` only after a direct quote. The whole wiki is Erlin's notes, so do not write "the note says" or "Erlin's notes".
- Note archives are digests: the best ideas and quotes in the original voice, at most about 900 words, with a link to the original note in the source viewer (`/source/<id>`).
- Size limits: topic pages 1,400 words, entities 450, analyses 1,000, prose source pages 1,200. Aim well under them: a topic is the 5–10 ideas worth keeping, not a list of every post.
- Before adding a page, check whether an existing page covers the subject. Merge rather than split; when a page is merged away, list its old title under `aliases` on the surviving page so old links keep working.
- Flag contradictions plainly, once. Keep corrections as one line: "Correction, <date>: …".
- Every page has a one-sentence `summary:` (at most 25 words, in double quotes), 1–3 tags from the fixed list, and at most 5 related pages. Keep `review_status`, `reviewed`, `review_due` and `source_gaps` honest.

Tags (fixed list): markets, crypto, macro, trading, business, health, fitness, adhd, electrics, regulations, dev, ai, design, security, psychology, relationships, philosophy, politics, culture, humor, people, bookmarks.

## Domains

The wiki currently spans these domains (expect this list to grow):

- **personal** - thoughts, psychology, self-improvement, identity
- **health** - body optimization, supplements, medical notes, ADHD
- **markets** - trading, macro, crypto, market structure, specific traders
- **electrics** - electrical safety, building regs, Part P, study notes
- **culture** - observations on society, dating, aesthetics, politics
- **dev** - tools, setup, bookmarks, technical resources
- **psychology** - behavioral patterns, motivation, detachment, compounding decisions

## Local Dev

- `wiki`: run `bun server.ts`.
- The local dev server defaults to port 3000; use `PORT=3001 bun server.ts` when another project occupies it.
