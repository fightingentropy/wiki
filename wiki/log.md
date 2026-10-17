---
title: Wiki Log
type: log
domain: personal
sources: []
related:
  - Wiki Index
  - Wiki Overview
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
tags:
  - log
  - operations
  - timeline
---

# Wiki Log

Chronological record of wiki operations. Each entry starts with `## [date] operation | details` for easy parsing.

---

## [2026-08-29] ingest | latest 25 pending source updates

Synced the live vault and ingested all 25 pending Markdown sources across bookmarks, misc notes, and markets. The batch added or changed 125 structured bookmark entries beyond the prior 499-entry snapshot, refreshed 19 raw files from the vault, and closed six earlier manifest-pending updates. Created source pages [[Stories]] and [[X-Takes]]; entity pages [[David Cifaldi]], [[Gloomberb]], [[Grok Bot]], [[Omarchy]], [[OnlyFans]], [[OpenShip]], [[PhoneLLM Alpha 1]], and [[TradeXYZ]]; and topic pages [[AI Agents]], [[AI Infrastructure Economics]], [[Digital Security]], [[Health Evidence]], [[Online Extremism and Evidence]], [[Repeated Games]], and [[Water Filtration]]. Updated source summaries and cross-domain pages for agent permissions, health-evidence boundaries, design references, developer tooling, AI capex and power, trading-system costs, backtest overfitting, funding-rate skepticism, leverage, relationship dynamics, incentives, and repeated games. Hostile racial, religious, and gender claims were retained as attributed rhetoric with explicit evidence boundaries rather than promoted as facts. Updated [[INDEX]] and [[Wiki Overview]].

---

## [2026-07-25] update | curated bookmark collection

Made the 499-entry topical collection the sole active [[X-Bookmarks]] source and removed the superseded raw export from the project. Routed six durable entries distilled from seven source bookmarks into four existing topics: Cloudflare Email Service migration and a lean self-hosted stack in [[Developer_Resources]]; the memory-capacity watchlist scenario in [[Equities]] and [[Market Cycles]]; the Series A investor outcome snapshot in [[Business_Strategy]]; and the _Off Campus_ and _Titanic_ dialogue references in [[Dating_and_Relationships]]. The recovery sweep ended with a verified live X bookmark count of zero.

---

## [2026-06-24] ingest | raw/misc/Peptides.md retatrutide reconstitution guide

Ingested raw/misc/Peptides.md — a practical how-to guide for reconstituting and dosing [[Retatrutide]] (LY3437943), an investigational GLP-1/GIP/glucagon triple-agonist peptide for weight loss. Source carries an explicit "investigational / not FDA-approved / educational reference only" disclaimer, preserved. Created source page [[Peptides]] (key takeaways + preserved dilution/titration/storage tables + common-mistakes list). Created 2 entity pages: [[Retatrutide]] (compound: triple-agonist mechanism, 5/10/30 mg lyophilized vials, appetite-suppression + GI side-effect profile, 1→2→4→6→9→12 mg titration over ~21+ weeks, once-weekly SubQ, 28-day reconstituted shelf life) and [[Bacteriostatic Water]] (0.9% benzyl alcohol preservative; BAC-vs-sterile-water 28-day vs 24-hour table; benzyl-alcohol allergy caveat). Created 1 topic page [[Peptide Reconstitution]] generalizing the reusable procedural knowledge: the concentration/units math (10 mg + 2 mL = 5 mg/mL → 1 mg = 20 units on a U-100 syringe), 7-step reconstitution procedure (room-temp, clean, draw, add-to-wall-not-powder, swirl-don't-shake, inspect, label), storage rules (never freeze/never shake reconstituted), SubQ injection technique, and the titrate-don't-jump principle. Cross-linked into existing health pages: added an "Injectable Peptides" section to [[Supplements]] and a "Peptides (Pharmacological Layer)" section to [[Body_Optimization]], with frontmatter related: updates on both. Updated [[INDEX]] under Sources ([[Peptides]]), Entities ([[Retatrutide]], [[Bacteriostatic Water]]), and Health & Body topics ([[Peptide Reconstitution]]). New domain coverage: GLP-1/metabolic peptides — first peptide-pharmacology material in the wiki.

---

## [2026-04-18] ingest | raw/misc/Women.md dating & gender dynamics

Ingested the Women file (~105KB personal archive on women, dating, attraction, gender dynamics, and "game"). Created source page [[Women]] preserving the human's voice verbatim per schema (red-pill-adjacent, Heartiste-heavy, DrDynamis-heavy, internally contradictory — contradictions flagged not sanitized), organized thematically: dominant voices, ten core theses (M/F cognitive asymmetry, motherhood as trajectory change, memoryless/present-tense frame, hypergamy/solipsism/Briffault, attraction as polarity, the nonchalance doctrine, proximity/logistics, female sexuality as narcissistic-self-regarding, birth control as distortion, breakup asymmetry, forehead-kiss), preserved frameworks (Heartiste's Sixteen Commandments, 19 Bad Boy Tricks, @WhySanaaWhy's 14-point female-voice advice, Tucker Max's love-your-work model, "before you get married" checklist, physical game playbook), a DrDynamis life-philosophy cluster, explicit contradictions list, and closing scripture + 1 Corinthians reading. Created new topic [[Gender_Dynamics]] for the structural/cognitive/polarity material that didn't fit [[Dating_and_Relationships]] (tactics) or [[Masculinity_and_Men]] (men-side). Created 2 new entity pages: [[Heartiste]] (pseudonymous game writer Roissy; the file's most-quoted external voice; authored the Sixteen Commandments — preserved verbatim with per-commandment summary) and [[DrDynamis]] (the @DrDynamis/@DrdynamisA/@dynamis_dr/@ArcadianRythms handle-cluster; Mediterranean-stoic moralist; anti-nerd/anti-soy/anti-fetish/pro-prayer/pro-lifting; documented as the "third pole" of masculinity discourse beyond sterile-optimizer and Tate-axis). Extended [[Dating_and_Relationships]] with nine new sections (nonchalance doctrine, attraction vs retention, hypergamy/solipsism/Briffault frame, breakup asymmetry, forehead-kiss & Kino, before-you-get-married checklist, Tucker Max love-your-work, Heartiste's Sixteen Commandments summary, pre-commitment scripture, cross-wiki contradictions); added Women.md to sources. Extended [[Masculinity_and_Men]] with cognitive-asymmetry cross-ref, DrDynamis third-pole section, fear-of-confrontation thesis, never-seem-too-perfect, ennui-misnamed-as-depression, respect>adoration, emotional-umbilical-cord; added Women.md to sources. Extended [[Andrew_Tate]] with the "triple bypass / bloodline" clip anecdote; added Women.md to sources. Flagged contradictions: presentism-vs-front-loading, rational-woman coded both attractive and terminal, women-do-things-for-themselves vs all-behaviour-is-strategy, physical-warmth vs oak-tree state control. Updated [[INDEX]] under Sources (Women), Entities (Heartiste, DrDynamis), Personal & Psychology topics (Gender_Dynamics).

---

## [2026-04-12] bootstrap | Initial wiki creation

**Operation:** Full bootstrap from existing Obsidian vault.

**What happened:**
- Moved all existing files into `raw/` as immutable sources (22 misc files, 5 markets files, 3 electrics files, 1 clipping)
- Created `CLAUDE.md` schema defining wiki conventions and workflows
- Ingested all raw sources into wiki pages

**Pages created:**
- 19 source summaries in `wiki/sources/`
- 19 entity pages in `wiki/entities/`
- 54 topic pages in `wiki/topics/`
- 1 unified index at `wiki/index.md`

**Domains covered:** personal, health, psychology, markets, electrics, culture, dev

**Raw sources ingested:**
- `raw/misc/` — Body, Medical, Psychology, Thoughts, Culture, Politics, Bizz & Finance, Design, Dev, Setup, Quotes, Stories, Funny, Jokes, Go Do, Top Pods, X takes, X-Bookmarks, Women, Pick up limes, Youtube
- `raw/markets/` — Articles, Brief, Handbook, Tools, Trading
- `raw/electrics/` — Resources, Inspection and Testing summary, PAT Testing summary
- `raw/clippings/` — Trump's 2nd Term article

**Notes:**
- Some raw files (Quotes, Go Do, Funny, Jokes, Stories, X-Bookmarks, Youtube, Women, Pick up limes) were not given dedicated source pages as their content was distributed into relevant topic and entity pages
- The markets domain produced the most granular topic breakdown (30+ pages) due to the structured nature of the source material
- Electrics domain preserved all technical data (formulas, regs, procedures) verbatim

---

## [2026-04-18] ingest | raw/misc/Youtube.md bookmark list

Ingested the Youtube bookmark file (14 links with short human commentary). Created source page [[Youtube]] preserving every link and comment, organized by theme (happiness/epic-shit, delusion, pragmatism, intimacy, inflation, beauty-toxicity). Created entity page [[Charles_Bukowski]]. Added "Do Epic Shit" and "Usefulness Over Truth" sections to [[Philosophy_and_Meaning]]; "Delusion as Tool" and "Motivation as Reframe" to [[Self_Improvement]]; "Delusion & Soul in the Game" to [[Trading_Psychology]]; "True Intimacy" to [[Dating_and_Relationships]]; "Beauty & Toxicity" to [[Design_and_Aesthetics]]. Extended [[Nassim_Taleb]] with the "soul in the game" framing. Added Youtube.md to the sources: frontmatter on all touched pages. Updated [[INDEX]] under Sources and Entities.

---

## [2026-04-18] ingest | raw/misc/Go Do.md bucket list & Japanese concepts

Ingested the Go Do file (bucket list of activities, travel, media to watch, and `@AlpacaAurelius`'s praise-list of Japanese cultural concepts). Created source page [[Go Do]] preserving every entry under four sections (Activities, Travel, Japanese Cultural Concepts, Media). Created entity pages [[Alex_Hormozi]] and [[Chris_Williamson]] — both flagged as significant via the human's explicit intention to "watch and analyse" the Hormozi × Williamson pod on imperfect action (video `Gk8EGWoGnEQ`, same ID that recurs in [[Youtube]] for "do epic shit" / "only way is through"). Created topic page [[Japanese_Philosophy]] with short factual definitions for ikigai, wabi-sabi, kaizen, kintsugi, omotenashi, onsen, forest bathing, tea ceremony, wagyu, tatami, kimono, and raw food — cross-linked to [[Philosophy_and_Meaning]], [[Self_Improvement]], [[Design_and_Aesthetics]], [[Body_Optimization]]. Extended [[Self_Improvement]]'s existing "Imperfect Action > Perfect Planning" section with the Hormozi source and kaizen cross-link; added Go Do.md to its sources. Updated [[INDEX]] under Sources (Go Do), Entities (Alex_Hormozi, Chris_Williamson), and Personal & Psychology topics (Japanese_Philosophy).

---

## [2026-04-18] ingest | raw/misc/Pick up limes.md crude humor collection

Ingested the Pick up limes file (~1.9KB of crude one-liners, pickup/comeback lines, Greek phrases, sexual innuendo, dating banter, and dark-comedic bits). Created source page [[Pick-up-limes]] preserving every line verbatim per schema (these are personal notes, the human's voice is load-bearing), with light thematic grouping: dick-size comebacks, absurd/dark one-liners, Greek phrases, sexual innuendo, dating banter, insults/roasts, and news-adjacent bits. No topic or entity pages warranted — content stands alone as amusement archive; cross-linked to existing [[Culture]] and [[Dating_and_Relationships]]. Updated [[INDEX]] under Sources.

---

## [2026-04-18] ingest | raw/misc/Jokes.md humor collection

Ingested the Jokes file (~30KB personal humor archive: Greek wordplay, name-puns, long-form set pieces, English absurd one-liners, pickup-line compendium, dark bits). Created source page [[Jokes]] preserving every entry verbatim per schema (crude/dark content kept as-is), structured into: long-form set pieces (call-girl Johnny, ancient-Greek Σ. griphos, chemistry *SiKW HORePSe KOUKLi MoU*, the palm/hand "Έμεινε χείρα" reveal, Tibidabo reverie, SVU: Special Mowing Unit, 12 rules to be an Italian), name-pun cluster (Irish/Italian/Arab/Japanese/etc.), Greek one-liners, English observational, Roman-numeral meta. Also noted recurring lines within the file (preserved as-is). Created a new topic page [[Humor]] as a unifying landing page for the two humor archives ([[Jokes]] and [[Pick-up-limes]]) — documents recurring registers (Greek wordplay, nationality puns, crude comebacks, shaggy-dog set pieces, observational absurd, meta/format jokes), tonal notes, and gaps. Back-linked [[Pick-up-limes]] to [[Jokes]] and [[Humor]]. No entity pages created — no recurring named comedian/creator rises above one-off mentions (@thanos1625 appears twice but not entity-worthy yet). Updated [[INDEX]] under Sources (Jokes) and Culture & Politics topics (Humor).

---

## [2026-04-18] ingest | raw/misc/Funny.md humor collection

Ingested the Funny file (~36KB personal humor archive, link-heavy). Created source page [[Funny]] preserving every entry verbatim per schema: ~30 embedded X/Twitter URLs and YouTube timestamps, crypto/markets shitpost cluster (including the full r/wsb "Everything is priced in" copypasta), long-form set pieces (Lt-Gen Carton de Wiart bio appears twice, Daft Punk/Kanye hallucination, Neapolitan duelist, emotional-baggage breakup, Pizza-Hut-WWF-No-Mercy time-warp, Jocko-parody motivational routine, porn-quitting misogyny essay, edibles LA vs. Amsterdam, "negative cash flow girlfriend"), hospitality/restaurant-worker observations (first-person material), Greek one-liners, Albanian/mixed-language fragments, English observational. Noted within-file repeats (Carton de Wiart, Greek taxi driver, negative-cash-flow breakup, Heimlich, Eminem riff) and cross-archive overlaps with [[Jokes]] and [[Pick-up-limes]]. Extended [[Humor]] topic page: added [[Funny]] to source archives with distinguishing description (largest/link-heavy/crypto-twitter/hospitality), added two new registers (crypto/markets shitpost, hospitality/restaurant-worker voice, link-bookmarks) to the recurring-registers taxonomy, noted cross-archive repeats and new cross-refs to [[Andrew_Huberman]] / [[Chris_Williamson]] / [[Joe_Rogan]] / [[Andrew_Tate]]. Updated Humor.md frontmatter sources to include Funny.md. Back-linked [[Pick-up-limes]] and [[Jokes]] to [[Funny]] (frontmatter related + bottom related line). No entity pages created — all ~30 linked handles are one-shot references. Updated [[INDEX]] under Sources (Funny).

---

## [2026-04-18] ingest | raw/misc/CT.md crypto trader takes

Ingested the CT (Crypto Takes) file (~52KB of verbatim quotes, tweets, and trader commentary from crypto-twitter). Created source page [[CT]] preserving all substantial quotes with attribution, grouped thematically: Price Discovery & Market Mechanics; Exchange Infrastructure & Microstructure; Macro & M2; Crypto Philosophy; Trading Psychology & Bag-Holding; Specific Trader Takes; Contradictions. Created 14 new entity pages: [[GCRClassic]], [[CryptoCred]], [[Pentosh1]], [[goodalexander]], [[trading_axe]], [[0xaporia]], [[Satoshi_Nakamoto]], [[HsakaTrades]], [[DegenSpartan]], [[jimtalbot]], [[GiganticRebirth]], [[insiliconot]], [[Rewkang]], [[ImperatorXBT]]. Extended existing entities: [[cobie]] (supercycle, low-conviction-money, grow-fast-protect-slow, VC bid-up, crypto-world bubble, sit-on-ass realization, decentralized machines), [[fejau_inc]] (M2 overlay), [[Hyperliquid]] (bandwidth/latency commentary, HYPE-margined collateral risk). Extended topic pages: [[Trading_Psychology]] (bag-holding test, take money off table, variance/strategy hopping, first-cycle psychology, bear-market PTSD, back-half-bull-fear, never flex, PvP vs PvE, narrative post-hoc), [[Crypto Trading]] (supercycle vs inverse supercycle, dilution, low-conviction money, PvP/PvE, cascades as secondary effect), [[Trading Philosophy]] (capital allocation asymmetry, sit-on-ass, decouple process from outcome, orderflow frontruns newsflow, poker discipline), [[Liquidations]] (GCR wealth transfer framing, cascade as secondary effect, Husslin_ bottom conditions, HYPE margin risk), [[Leverage]] (HYPE collateral risk, Rewkang funding extremes in bulls), [[Exchange Microstructure]] (price discovery refinement, Hyperliquid latency, orderflow frontruns newsflow, range→expansion, sell walls, volume-on-rally bearish, CryptoCred bloat), [[Macro Trading]] (M2 overlay, crypto as silent debt default, Bessent white-hat framing, crypto decorrelation contradictions, tide-out), [[Sentiment]] (post-hoc hallucination, schelling-point narratives, normies signal, flex-culture contra-indicator), [[Traders Directory]] (featured section expanded, full directory extended with ~25 new handles). Flagged contradictions between takes (crypto ingenuity vs degradation, narrative read ex-post vs ex-ante, tools vs instinct, sit-on-ass vs sacrifice-weekends, decorrelation as forward-looking vs flow artifact) rather than resolving them. Updated [[INDEX]] under Sources (CT), Entities (14 new additions).

---

## [2026-04-18] ingest | raw/misc/Top Pods.md youtube bookmarks

Ingested the Top Pods bookmark file (6 links, skewed toward masculinity discourse). Created source page [[Top-Pods]] preserving every title and link, grouped by theme (masculinity, health, celebrity conversations, Tate). Created entity pages [[Andrew_Tate]] and [[Joe_Rogan]]. Created a new topic page [[Masculinity_and_Men]] as a landing page that consolidates the "performative male epidemic" / "war on men" / sterile-optimization / two-poles discourse previously scattered across [[Dating_and_Relationships]], [[Andrew_Huberman]], [[Tim_Ferriss]], [[Lex_Fridman]], and [[Culture]]. Extended [[Andrew_Huberman]] with the "How to reclaim your brain in 2026" bookmark and added Top Pods.md to its sources. Added a "Fall of Empire (Tate)" section to [[Political_Commentary]] and a "Reclaiming Attention" section to [[Mental_Health]]. Cross-linked [[Dating_and_Relationships]] into the new masculinity page. Updated [[INDEX]] under Sources (Top-Pods), Entities (Andrew_Tate, Joe_Rogan), and Culture & Politics topics (Masculinity_and_Men).

---

## [2026-04-18] ingest | raw/misc/Quotes.md cross-domain quotes

Ingested the Quotes file (~34KB, long-running curated quote archive spanning philosophy, action, markets, love, self, time, politics, art, craft, plus Greek and Albanian fragments). Created source page [[Quotes]] (909 lines) organised by theme rather than author, with a "Themes across the collection" synthesis at the bottom (action-precedes-feeling, time-as-scarce-resource, self-betrayal as worst sin, usefulness-over-correspondence, obsession/soul-in-the-game, delusion-as-tool, antifragility, narrative-as-interface). Created 8 new entity pages for the most-quoted/most-substantive recurring authors: [[Nietzsche]] (8 quotes — habit-as-character, self-command, interpretation-as-power, herd morality), [[Dostoevsky]] (6 quotes — self-betrayal, overthinking-as-disease, lying-to-oneself, last-words-to-Anya), [[Carl_Jung]] (addiction as search for God, inferno of passions, thinking vs judging), [[Bruce_Lee]] (self-talk as spellcasting, be-like-water, agitated-mind), [[Marcus_Aurelius]] (perception, forgetting), [[Seneca]] (imagined suffering, wealth as slave vs master), [[Naval_Ravikant]] (@naval quoted 4× — intelligence-as-outcome, taste-of-freedom, projection→attraction), [[Javier_Milei]] (printing-diplomas, other-people's-asses, zero-compromise). Extended existing entity pages [[Nassim_Taleb]] (added Quotes.md to sources; added Quotes-cited section with the academia/decline lines; filed the Nietzsche option-value antifragility synthesis) and [[Charles_Bukowski]] (added Quotes.md to sources; added Quotes-cited section with the three curated Bukowski lines). Extended three topic pages with "Notable Quotes" sections citing (from [[Quotes]]): [[Philosophy_and_Meaning]] (mortality as orienting device, perception/interpretation, meaning through obsession, antifragility option-value, cardinal-sin-impatience), [[Self_Improvement]] (action/courage/agency, habit-as-character, self-betrayal/self-talk, create-not-consume, discomfort-and-growth), [[Trading_Psychology]] (concentration, right-vs-rich, tide framing, positioning over effort, risk as conserved quantity, wealth vs money, holding on vs cashing in). Added Quotes.md to those three topic pages' sources frontmatter. Skipped creating entity pages for 1–2 mention authors (Kafka, Garcia Marquez, Sylvia Plath, G K Chesterton, Peter Thiel, Steve Jobs, David Goggins) — budget-conscious prioritization; these remain as red wikilinks to be filled on future ingest if they recur. Updated [[INDEX]] under Sources (Quotes) and Entities (8 new additions).


---

## [2026-04-18] gap-fill | 43 new pages, 0 broken links

Closed all 78 broken wikilinks flagged by lint. Created 17 new entity pages ([[Kafka]], [[Sylvia_Plath]], [[Gabriel_Garcia_Marquez]], [[G_K_Chesterton]], [[Kornfield]], [[Steve_Jobs]], [[Peter_Thiel]], [[David_Goggins]], [[Zhu Su]], and 8 crypto X-account traders: [[AutismCapital]], [[CL207]], [[fewseethis]], [[HighStakesCap]], [[LomahCrypto]], [[OxHamz]], [[RJ_Killmex]], [[thiccythot]]). Created 21 new topic pages ([[Behavioral_Finance]], [[Capital_Allocation_Timing]], [[Decision-Making]], [[Economics]], [[Genius_and_Madness]], [[Market Cycles]], [[Stress_Management]], [[Circadian_Rhythm]], [[Neurodiversity]], [[Proximity_Infatuation]], [[Culture_and_Environment]], [[Business_Philosophy]], [[Political_Philosophy]], [[Technology_Critique]], [[Social_Commentary]], [[Media_Critique]], [[Self_Improvement_Culture_Critique]], [[Entropy_vs_Extropy]], [[Thoughts_and_Observations]], [[Catfish_Effect]], [[Design_Thinking]]). Created 5 new electrics topic pages for UK standards/regs: [[Part P]], [[EICR]], [[GS38]], [[BS EN 61010]], [[BS EN 61557]]. Fixed alias-mismatch wikilinks across source pages (Politics→Political Commentary, Philosophy→Philosophy_and_Meaning, Risk_Management→Risk Analysis, Crypto→Crypto Trading, Design_Tools/Web_Design→Design_and_Aesthetics). Removed literal-title and section-heading wikilinks that weren't real pages (OpenClaw setup guide title, Floors and Ceilings, Cable Routing, Structural Limits, Safe Addition Principle, Hyperliquid Latency Map, June 2028 scenario, Articles.md). Updated [[INDEX]] with all 43 new pages grouped under Entities, Personal & Psychology, Markets & Trading, Electrics, and Culture & Politics. Lint broken-link count: 78 → 0.

---

## [2026-09-22] ingest | September bookmark updates through 22 September

Ingested the current Brain bookmark index and every added or revised line across its ten categories. The collection grew from 624 to 921 structured entries: 297 net additions plus six revised annotations, giving 303 changed entries. This includes all 30 X bookmarks retained in the referenced bookmarks task on 22 September, the 17 September batch, the September Chrome additions, and the manually added ADHD/circadian source.

Preserved existing raw files byte-for-byte and added 11 dated source clippings under `raw/clippings/bookmark-updates-2026-09-22/`: a verbatim index and ten change clippings with original-source and baseline hashes. Created ten category source pages, four entity pages ([[Compositor]], [[Helium Browser]], [[Omarchy iCloud Photos]], [[Quicker]]), and three topic pages ([[Personal Knowledge Management]], [[3D Printing and Digital Fabrication]], [[Market Performance Measurement]]). Source registers preserve every changed entry, original links, unresolved visual context, and caveats.

Updated related developer, design, security, market, culture, personal-reference, and health pages. Explicitly corrected the obsolete reject-low-value retention rule, the universal circadian redefinition of ADHD, and clinical overstatements contradicted by the new health sources. Preserved opposing medication anecdotes and the Hyperliquid funding-trade author's own correction. Checked selected primary product documentation, the 2025 circadian perspective, NIMH's depression overview, and Hyperliquid's portfolio-margin documentation; the remaining linked posts remain attributed source records, not newly verified facts.

Updated [[X-Bookmarks]], [[INDEX]], and [[Wiki Overview]]. External cleanup counts are historical records from the source task; this ingest did not mutate X, Chrome, the iCloud Brain, or any connected account. It does not activate scheduled synchronization or publish a hosted deployment.

Validation: all 303 changed entries and the 30 latest X post IDs were preserved; 57 existing raw files and all 11 live Brain source hashes matched the pre-ingest snapshot. Content lint found no issues in the touched pages, no broken wikilinks, and no duplicate titles. The 219-page static build passed, and the ingest manifest records all 11 clippings as processed.

---

## [2026-09-22] improve | app navigation, source history and evidence corrections

Added individual records for all 934 current bookmarks (921 structured entries and 13 bare URLs), exact post-ID search, section links, a source viewer with preserved revisions, capture previews, pinned/recent pages, phone navigation, an accessible search menu, a focused graph and clearer error states. Source capture now appends immutable revisions instead of overwriting or deleting raw notes. Timeline entries sort by their date and render linked details. Review separates content edits from evidence checks and validates body links, related pages and source paths.

Recovered the original March X export from Git commit 554dd7e292b4811fe16f986e596c6df1fc66fede without changing existing raw files. Normalised source and related-page references. Recorded missing electrical webinar transcripts explicitly; original documents could not be recovered. [[Health Evidence Review - September 2026]] and [[Electrical Evidence Review - September 2026]] support the dated corrections to health claims, cable protection, Part P scope and publication editions.

Added [[Developer Tool Evaluation Map]], [[Trading Evidence and Review Framework]] and [[Electrical Study Map]]. The ten category source pages now link their complete September captures; indexing a retained bookmark is distinct from independently verifying its claims.

Captured two additional upstream revisions of [[Markets - Articles]] and [[Electrics - Resources]] through the new preview flow. Added the newly saved article, equipment and training leads to their source summaries without claiming their contents or suitability were evaluated. Original source files and images remain unchanged; the viewer and static export also resolve newly captured image versions.

Final coverage check found 13 bare design URLs outside the structured bullet list. These now have individual records with explicit unannotated-link labels, including three previously unindexed X posts. The catalog covers all 776 unique X post IDs present in the current category sources.

---

## [2026-09-25] ingest | Hereafter paternal-investment bookmark

Retained the manually supplied X post `2103150600753950923` in the canonical Brain Health & Psychology note and captured new immutable versions of that category and its index. Added the entry to [[Bookmarks - Health & Psychology]], connected its interpretation limits to [[Health Evidence]], and updated [[X-Bookmarks]], [[INDEX]], and [[Wiki Overview]]. The category now has 52 entries; the full catalog has 935 records (922 structured entries plus 13 bare links).

Read the post, its quoted post and all four attachments. Matched the paper to the university abstract and publisher's indexed methods excerpt. Recorded the evidence check separately from retention; the full paper and replication evidence remain unchecked. No existing raw source was edited, and X bookmark state was neither checked nor changed.

Validation: exact-ID lookup returns one catalog record containing both post IDs; all 84 existing raw files retain their original hashes. The 224-page content check found no broken references or duplicate titles, and the static build passed. Both new captures are recorded as ingested; the canonical vault and local captures are in sync.

---

## [2026-09-30] query | live X bookmark recommendations

Used authenticated Bird to read all 70 current bookmarks for @entropyholdings. The returned inventory contains 70 unique IDs and `nextCursor: null`. Read all available post and quoted text, the Codex Web GPT and Search author threads, and selected screenshots including Jeff's HFT notes and the four-edge graphic. Videos and every attachment remain unreviewed.

Compared exact saved-post IDs with all ten canonical Brain bookmark categories and their index. One saved post, the paternal-investment study, was already archived. Recorded a metadata-only immutable inventory and [[Live X Bookmark Inventory - 30 September 2026]], plus the full [[X Bookmark Review - 30 September 2026]]: 26 strong keeps, 16 research/watch leads, 13 personal or entertainment items, four to consolidate, one already archived and ten low-value references.

Checked selected primary tool documentation and repositories, NIMH/NHS health guidance, and the model-collapse and enamel-repair papers. Recorded product-release drift, unsupported health conclusions and verification limits rather than adopting claims. Created a searchable local review artifact. This query did not change X bookmarks, canonical Brain notes, or a hosted deployment.

Validation: all 70 saved IDs have one recommendation each; the 226-page content check found zero broken references and duplicate titles, and the static build passed. The review artifact passed TypeScript checking. Existing raw sources remain byte-for-byte unchanged; only the mutable ingest registry was updated to record the new inventory metadata source as processed.

---

## [2026-09-30] ingest | evergreen knowledge from live X bookmarks

The human narrowed the completed 70-post review to evergreen knowledge and explicitly requested clearing all live X bookmarks after retention. Saved 14 distilled entries from 15 posts in seven canonical Brain categories: one Culture & Ideas, four Markets & Crypto, three Developer Tools, two AI & Agents, one Design & Frontend, two Reference & Utilities and one Personal & Life. The VPN and encrypted-DNS references were combined. Product releases, forecasts, gossip, humour, entertainment queues and unsupported clinical claims were omitted from this new batch. Existing archive contents were preserved.

Captured eight immutable revisions: the index and seven changed categories. The design capture also preserves two bare links already present upstream, explicitly labelled unreviewed. Current catalog: 936 structured entries plus 15 bare links. Read the captures in full and reconciled the retained lines with the canonical notes. Created [[Evergreen Lessons from X - September 2026]], appended seven source registers, and connected eight topics. Updated retention-policy scope in [[Personal Knowledge Management]], [[X-Bookmarks]], [[Wiki Overview]], and [[INDEX]].

Scoped evidence checks cover mortgage prepayment, WebRTC and encrypted DNS, ordinary SSH over Tailscale, colourant labels, brown sugar and the earlier model-collapse abstract check. Practical and trading methods remain heuristics. No product benchmark, strategy performance, camera physics or clinical treatment was validated. Account cleanup remains pending a fresh pre-removal inventory and post-removal empty-list check.

---

## [2026-09-30] cleanup | clear X after evergreen retention

After the evergreen captures and wiki validation passed, fetched a fresh complete X inventory: the same 70 unique saved IDs, `nextCursor: null`. Removed all 70 bookmark markers from @entropyholdings in seven batches through Bird. Every request reported success; all batch commands exited 0. The authenticated X web interface, freshly loaded and reloaded with Bookmarks selected, displayed its empty state at 2026-09-30T21:51:47.209378+00:00. Bird after-reads could not discover current X client bundles, so UI verification was used instead.

Recorded an immutable operation receipt and [[X Bookmark Cleanup - 30 September 2026]]. Appended the completed outcome to the canonical Brain index and captured a new immutable index revision. Linked the receipt into [[Evergreen Lessons from X - September 2026]], the original review, live inventory, [[X-Bookmarks]], [[Personal Knowledge Management]], [[Wiki Overview]] and [[INDEX]]. Knowledge retention remains 14 distilled entries from 15 posts; existing historical archive contents and raw sources are preserved.

Validation: all 14 retained entries and 15 post IDs are represented once in the current catalog. Every canonical bookmark note matches its latest immutable capture. The 228-page content check has zero broken references and duplicate titles; the static build and review-artifact TypeScript check passed. All ten new evergreen/cleanup captures are marked processed. All 87 pre-existing immutable raw files preserve their hashes.

---

## [2026-10-15] overhaul | legibility rewrite of every page as a resource bank

Rewrote all 227 content and navigation pages so each one teaches its subject and describes every link it holds. Erlin asked for a real wiki archive and resource bank in place of pages dominated by process notes, and for nothing to be deleted. Process narration moved out of the pages: capture and retention dates, archive numbers, entry counts, per-line hedges, "the human", and dated sections such as "August 2026 additions". Every page is now organised by theme, opens with what the page is, carries a one-sentence summary, and ends with related pages.

The ten bookmark categories now list every entry of their latest capture, grouped by theme, each with a description and the author's handle. The link collections from the notes (Dev, Design, Setup, the five Markets notes, Electrics, Youtube and Top Pods) list every link in the raw note, including bare URLs that had never been described; links with no context say "Saved without a note". Note archives keep every quote, joke, take and table, grouped by theme, with their links attached. Topic and entity pages absorbed their dated sections into thematic ones and gained the links that back their quotes, so thin stubs such as [[Hyperliquid]], [[Nassim Taleb]] and [[0xaporia]] became usable pages. Corrections and source gaps stay explicit; review statuses were not changed. Rebuilt [[Wiki Index]] by subject with a line for every page, rewrote [[Wiki Overview]], and turned [[Markets Wiki Index]] into a reading order.

The retired March 2026 X export (`raw/misc/X-Bookmarks.md`) was not re-imported; its curated material already lives in the ten categories and the export stays viewable as a source. Page titles and file names are unchanged, so existing links still resolve. AGENTS.md now states the resource-bank writing rules. The reading interface underlines outbound links with a marker, collapses only very long source pages into themed sections, and links the index from the home page.

Method: each page was written against a fixed contract, checked by script, then reviewed by a second agent that compared it with the old page and the raw notes and fixed overstated descriptions.

Validation: every URL in every old page and every URL in each page's raw source is present in the new page, checked per page and across the whole wiki (689 unique URLs before, 1,983 after, none lost). Every old wikilink target is kept. All 224 rewritten pages passed both the script and the independent review. `bun run check` reports 228 pages, zero broken references and zero duplicate titles; 41 tests pass; the static build passes. Lint is unchanged: no orphans, no broken links, and the same 30 pages awaiting evidence review and 17 recorded source gaps. No raw source was modified.

---

## [2026-10-16] review | evidence review of the needs-review queue

Worked through the 30 pages lint flagged as needing review and the 17 pages with recorded source gaps. Each page's specific claims were checked against current primary sources: for electrics, BSI and the IET (edition pages, the free A4:2026 model forms, Wiring Matters), HSE (GS38 fourth edition, HSG85, HSG107, INDG236, INDG354 and the FAQs), GOV.UK Approved Documents P and A, legislation.gov.uk and IEC webstore abstracts; for health, the NHS, FDA and DailyMed labels, CDC, NIH, the Drinking Water Inspectorate, Lilly releases and ClinicalTrials.gov, and the PubMed or journal records of each cited study; for the two X analyses, official docs, release pages and repositories. Manufacturer and industry guides were used only as labelled support. Every page now carries `reviewed: 2026-10-16`, an honest `review_status` and a one-sentence `review_notes`; where a page had a `review_due`, it moved to 14 January 2027.

Outcome: 17 pages left the queue. [[Part P]], [[GN3 Guidance Note 3]] and [[Retatrutide]] are verified; [[BS 7671]], [[Electrical Safety]], [[Electrical Study Map]], [[ADHD]], [[Circadian Rhythm]], [[Stress Management]], [[Water Filtration]], [[Supplements|Supplements & Biohacking]], [[Body Optimization]], [[Fitness]], [[Bacteriostatic Water]], [[Peptide Reconstitution]], [[Evergreen Lessons from X - September 2026]] and [[X Bookmark Review - 30 September 2026]] are reviewed. Thirteen stay partial because what remains needs paid or lost texts: BS 7671 clause wording, GN3 chapter, table and page numbers, the in-service Code of Practice pass limits, exam formats, and the webinar transcripts. [[Health Evidence]] stays partial on one study detail (the paternal-investment sample) that only the paywalled full text can settle. The source-gap pages keep their gaps: the two Electrics Webinar 4 summaries still cannot be found, though most of their procedures are now backed by independent official sources.

68 dated corrections went onto the pages, beside the claims they correct; nothing was deleted. The main ones: BS 7671 Amendment 3 was withdrawn on 15 October 2026, so A4 is the only current edition; under the A4 model EICR an FI code is advisory and no longer makes a report unsatisfactory; England's electrical safety regulations now also cover social landlords; one MEIWC per existing circuit, not an EIC per circuit; GS38 gives no 19 mm probe figure, no plug size, no proving order and no record-retention period; Class II insulation is tested to accessible parts, not earth; the IET's V.3 has no yellow label and V.6 is the "test instrument record"; the bacteriostatic-water label contradicts the peptide guide's 28-day and 24-hour storage figures; blueberries showed no cognitive effect in a 2026 meta-analysis; the cold-water dopamine figure comes from an hour at 14 °C; high-rep training does build muscle; and Richter's swimming-rat times apply to whisker-trimmed rats. The September review's test-label point was attributed to HSE's PAT FAQ; the FAQ does not make it and HSE's INDG236 does, so the attribution was corrected on the September review and four other pages. The plug-fuse "follows the flex" rule is flagged as conflicting with fire-service consumer guidance, and the webinar's exam format as conflicting with City & Guilds 2392-10. Water Filtration gained the Drinking Water Inspectorate's position on reverse osmosis, and the BS 7671 summary, the Fitness intro and the PAT source-gap notes were brought up to date.

Recorded the dated research notes as `raw/clippings/evidence-review-2026-10-16/Electrics.md` and `Health.md`, summarised in [[Electrical Evidence Review - October 2026]] and [[Health Evidence Review - October 2026]], with every source link described. Linked both from every page they cover, from the September reviews, [[Wiki Index]] and [[Wiki Overview]]. Left for later, not changed: process narration on a few pages ("As checked on 22 September 2026" on Retatrutide and BS 7671), the peptide guide's dilution and titration tables on [[Peptides]], missing IEC 61557 parts in the BS EN 61557 table, and GOV.UK's July 2026 renaming of competent person schemes as self-certification schemes.

Validation: `bun run check` reports 230 pages, zero broken references and zero duplicate titles; `bun test` passes; lint shows 13 pages awaiting review (down from 30), 17 recorded source gaps, no orphans and no broken links. No existing raw source was modified.

---

## [2026-10-16] review | follow-ups from the evidence review

Closed the items the evidence review left unchanged on purpose.

Peptide guide: [[Peptides]] gained three dated corrections beside the tables they correct. The dilution chart lists a 12 mg dose from a 10 mg vial, which holds only 100 or 200 units of solution at the listed strengths; six cells of the doses-per-vial table (5 to 30 weeks) run past the guide's own 28-day use-by date; and Lilly's TRIUMPH-1, -2 and -3 releases (21 May and 23 July 2026) say phase 3 participants started at 2 mg once weekly, not the guide's 1 mg. The dilution and doses-per-vial arithmetic was recomputed. No dosing advice was added, and the page stays an archive.

Process narration: dropped "As checked on 22 September 2026" from [[Retatrutide]] and [[BS 7671]], the "Corrected on 22 September 2026" line from [[Body Optimization]] (its undated September corrections now carry the date), and the "earlier version of this page" wording from the September corrections on [[Peptide Reconstitution]], [[Peptides]] and [[Part P]], keeping each correction's substance. On [[Evergreen Lessons from X - September 2026]] the "Checked facts" bullet now says which lessons rest on official sources, and its section is titled "Evidence behind the lessons".

Standards: [[BS EN 61557]] now lists parts 11 (residual current monitors), 14 (machinery), 15 (functional safety of IT-system monitoring), 16 (IEC 62353 equipment testers) and 17 (non-contact voltage indicators, not for proving dead), each from its IEC webstore abstract with a described link.

Scheme name: GOV.UK guidance published 1 July 2026 by the Building Safety Regulator and MHCLG calls these "self-certification schemes", previously known as competent person schemes. GOV.UK's list of current schemes, last updated 17 September 2026, still uses the old name, and no GOV.UK page gives a date for the change, so the pages say what the July guidance calls them rather than giving a renaming date. [[Part P]] and [[EIC and MEIWC]] carry the one-clause note and a described link; [[Building Regulations]] does not name the schemes, so it was not changed.

Still open: the CAT voltage-rating definition on [[BS EN 61010]]; whether "only IEC 61557 instruments are suitable" on [[BS EN 61557]] overstates BS 7671; HydraSense's certifier on [[Water Filtration]]; ISO-timestamp `created:` values; the [[BS 7671]] summary's out-of-date Amendment 3 line; and "earlier version of this page" corrections on [[Fitness]], [[ADHD]], [[Circadian Rhythm]], [[Mental Health]] and [[Humor]].

---

## [2026-10-17] simplify | cut the wiki from 229 pages to 97 and about a quarter of the words

Erlin asked to deslopify the wiki: fewer words, no repetition, every link kept, and the large note archives turned into short digests that link to the original notes.

What changed:
- Merged 135 pages into others, leaving 94 content pages plus the index, overview and log. Sixteen narrow macro pages became five, twenty-one electrics pages became eleven, the trader and writer stubs became [[Traders Directory]], [[People Quoted]] and [[Podcast Hosts]], and the dated evidence reviews and X bookmark records folded into [[Health Evidence]], [[Electrical Study Map]] and [[Evergreen Lessons from X]]. Each merged page lists its former titles as `aliases`, so old wikilinks and `/page/<old-slug>` addresses still resolve.
- Each link is now described once, on a home page: its bookmark category, its link collection or the one page it belongs to. Descriptions are one line of at most 25 words; per-line hedges became one sentence per page.
- Note archives (Women, Quotes, Crypto Takes, Humor, X Takes and the others) are digests of at most about 900 words that link to the full original in the source viewer.
- Topic pages are short summaries; dated sections, body Related sections, note-attribution phrasing and 777 ad-hoc tags are gone (now 22 fixed tags, at most 3 per page, at most 5 related pages).
- The top bar is Home, Index and Bookmarks plus a More menu; the home page is a map of subjects; the index lists titles only.
- `bun run check` now enforces the size and style limits in `shape.ts`; AGENTS.md describes them.

Review statuses: merged pages keep the weaker status of their parts. Mental Health, Electrical Safety and the Electrical Study Map are now `partial`, because they absorbed material that was only partly checked.

Validation: words on pages 340,746 to 77,793 (log excluded). Every one of the 2,086 URLs in the previous wiki is on its home page (1,652 unique URLs on pages) or in an original note linked from its home page; none lost. `bun run check` reports 97 pages, zero broken references and no pages over the limits; 45 tests pass; the static build passes; no orphan pages. Pages awaiting evidence review: 11; recorded source gaps: 9 pages. No raw source was modified.

---

## [2026-10-17] ingest | October vault changes: 35 new entries, REA, vault path and ingest limits

The vault moved to iCloud Drive `Obsidian/Brain`; capture now defaults to that folder. Ingest now rejects any staged page over the size or style limits in `shape.ts` and accepts links to former titles listed in `aliases`.

Captured 11 revised or new vault notes as new immutable versions: nine bookmark categories and their index, `misc/Design.md`, and the new `misc/REA.md`. Filed the 35 new bookmark entries (29 from the 11 October X review, 6 from 16 October) one line each under the matching themes in [[Bookmarks - Developer Tools]], [[Bookmarks - AI & Agents]], [[Bookmarks - Design & Frontend]], [[Bookmarks - Health & Psychology]], [[Bookmarks - Markets & Crypto]], [[Bookmarks - Reference & Utilities]], [[Bookmarks - Business & Startups]] and [[Bookmarks - Personal & Life]], plus three bare design links. Created [[REA]] from the new project note and added a short "Worth trying next" list to [[X-Bookmarks]]. The index's Anthropic Fellows lead went to [[Bookmarks - Personal & Life]].

Two entries were deleted upstream and removed from their pages to match: the PS5 hardware-jailbreak post (Developer Tools) and the GPT-generated GTA demo (AI & Agents). Both remain in earlier captures.

The source index also records the 11 October review (142 bookmarks, 29 entries from 33 posts, 143 bookmarks then removed from X) and the 16 October review (57 bookmarks, 12 posts filed, all 57 then removed). Those records stay in the captured index, not on wiki pages.

The bookmark catalog now also reads the bold-title entry format these notes use, so all 35 appear as individual records in Bookmarks without changing any existing record's ID.

Validation: all 91 new URLs are on their home pages; `bun run check` reports 98 pages, zero broken references and no pages over the limits; 47 tests pass; nothing pending ingest.

---

## [2026-10-17] ingest | market brief playbook from the vault root

Capture now also takes Markdown notes kept directly in the vault root, stored under `raw/root/`; until now it only read the five subfolders. Captured `BRIEF.md`, the current market-brief playbook, and rewrote [[Markets - Brief]] around it: the update, brief and full-brief modes; the eight-section core brief; source order, the two-signal rule for actionable alpha and confidence tags; the fast news feeds; and the eight optional research modules. The playbook replaces the older seven-section template, which stays linked as the original. All eight playbook links are on the page.

Validation: `bun run check` passes with 98 pages; 48 tests pass; nothing pending ingest.
