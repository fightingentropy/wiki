---
title: Markets - Brief
type: source
domain: markets
summary: "How to produce a global-macro market brief: three modes, the eight-section core brief, sourcing and confidence rules, and optional research modules."
tags: [markets, macro, trading]
related: [Macro Trading, Stanley Druckenmiller, Positioning and Sentiment, Rates and Credit, Markets - Handbook]
sources:
  - markets/Brief.md
  - snapshots/1792256524911-54b1e0396485/root/BRIEF.md
created: '2026-04-12'
updated: '2026-10-17'
review_status: archive
---

# Markets - Brief

The playbook an agent follows to write a market brief in a direct, decisive but calibrated global-macro PM style, in the spirit of [[Stanley Druckenmiller]]. It leads with the verdict, puts signal over narrative, separates facts from interpretation and positioning, and never manufactures conviction. The current playbook (`BRIEF.md`) replaces the older seven-section template. [Read the playbook](/source/5c6da94e3ac8a9d8e9c5) · [Read the original template](/source/9f2a736132f8ceb45ebb).

## Modes

| Ask | Output | Length |
|---|---|---:|
| `update` / "what changed?" | Only the changes since the last brief | 250–450 words |
| `brief` / "what's happening?" | The core brief below | 700–1,000 words |
| `full brief` | Core brief plus the research modules, saved as `market-overview-YYYY-MM-DD.md` | 1,800–3,500 words |
| "brief, focus on X" | Any mode, weighted to the topic | Mode target |

Every brief opens with the time generated (Europe/London), the market state and the data cutoff. On weekends and holidays it is a next-session setup, not a live read. Never mix pre-market, intraday and closing prices without labels. Yields are quoted in basis points; crypto as a 24-hour change.

## The core brief

1. **Market verdict** — one or two sentences: the dominant regime or shock, risk-on or risk-off, and why it matters.
2. **What changed** — 4–7 bullets: fact, why it matters, conditional implication.
3. **Regime** — growth, inflation, liquidity and volatility, an overall call with confidence, and the signal that would invalidate it. See [[Macro Trading]].
4. **Cross-asset read** — one or two bullets per asset that moved, using the table below; say whether a move is narrow rotation, broad risk appetite or a macro shock.
5. **Risk and opportunity radar** — 2–3 upside and 2–3 downside items, with real levels or dated events, never invented ones.
6. **What matters next** — 3–5 catalysts in the next 72 hours: time, consensus, and the likely reaction to a beat or miss.
7. **PM bottom line** — base, alternative and tail cases with probabilities adding to 100%, each with its trigger.
8. **Data caveats** — only when something material is stale, missing or conflicting.

| Asset | What to cover |
|---|---|
| Rates | Front end, long end, curve, real yields, implied policy path. See [[Rates and Credit]] |
| FX | Broad USD, key crosses, carry and EM stress. See [[FX]] |
| Equities | Indices, equal weight, small caps, breadth, sectors, leadership. See [[Equities]] |
| Credit | IG and HY spreads or labelled proxies; refinancing stress |
| Commodities | Oil, gas, gold, copper. See [[Commodities]] |
| Crypto | BTC and ETH when they say something about liquidity. See [[Crypto Trading]] |

## Sourcing and confidence

- **Source order:** primary sources (central banks, statistics agencies, filings, exchanges), then market data, then Reuters, AP, FT or Bloomberg, then prediction markets and social posts. Social posts measure attention, not facts.
- **Actionable alpha** needs two independent kinds of evidence, such as price action plus primary data. Two tweets repeating one report count once.
- **Confidence:** High needs three independent kinds of evidence including primary or market data; Med needs two; Low is one signal or mostly inference.
- Never invent dealer gamma, CTA levels or fund flows. Say the data is unavailable instead.

## Fast feeds

A discovery layer for news that conventional reporting hasn't caught yet. Follow every item back to the original before calling it confirmed. Several channels repeating one story are one source. Whale-alert and wallet-transfer feeds are excluded.

- [@tradfi_t3](https://t.me/tradfi_t3) — Telegram channel of traditional-finance headlines.
- [@trad_fin](https://t.me/trad_fin) — Telegram channel of traditional-finance headlines.
- [@WatcherGuru](https://t.me/WatcherGuru) — Telegram headline feed; fast but aggregated.
- [@dbnewsdelayed](https://t.me/dbnewsdelayed) — Delayed Telegram newswire headlines.
- [@hyperliquid_announcements](https://t.me/hyperliquid_announcements) — Official Hyperliquid announcements; platform news only.
- [Digg Tech](https://digg.com/tech) — Technology news discovery for AI, chips, security and platform stories, fetched through the TradingView project's adapter.
- [Paste Trade](https://app.paste.trade) — Named traders' long and short theses; views, not positioning data.
- [CT list](https://x.com/i/lists/1933193197817135501) — The crypto-Twitter list behind the CT pulse module.

## Research modules (full brief)

- **A. Positioning and flow** — crowded trades, options skew, ETF flows, Paste Trade theses; sourced or labelled as proxies.
- **B. Regime shifts** — up to five, each with what would confirm or invalidate it.
- **C. Polymarket** — 3–5 macro-relevant markets with probability, 24-hour change, volume and timestamp; a snapshot is not flow.
- **D. CT pulse** — the `./scripts/ct-pulse.mjs` collector samples the CT list, Following and Home feeds; read posts for stance, deduplicate, and weight account diversity.
- **E. Key accounts** — @citrini, @DonAlt, @ezcontra and @lBattleRhino, when they have a material recent view.
- **F. Calendar** — the next seven days, grouped by day, high-impact events marked 🔥.
- **G. Podcast** — the latest All-In episode, only with a reliable transcript.
- **H. Earnings** — AAPL, MSFT, NVDA, AMZN, GOOGL, META, TSLA plus JPM, UNH, XOM and WMT; detail only for reports in the last seven days.

A failed optional tool never blocks the core brief, and a source that could not be reached is never described as checked.

## Polymarket query

```bash
curl -s "https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false" \
| jq '[ .[] as $e | ($e.markets // [])[] | { title: (($e.title // "Untitled Event") + " - " + (.question // "Untitled Market")), volume24h: ((.volume24hr // .volume_24h // 0) | tonumber), liquidity: ((.liquidity // 0) | tonumber), slug: $e.slug } ] | sort_by(-.volume24h) | .[:10]'
```

Fetches up to 200 active events by volume, flattens their markets, and keeps the top 10 by 24-hour volume. Match each price to the outcome labelled Yes rather than assuming the first one.

- [Polymarket Gamma API](https://gamma-api.polymarket.com/events?active=true&closed=false&limit=200&offset=0&order=volume&ascending=false) — Public events endpoint, filtered to active open events sorted by volume.
