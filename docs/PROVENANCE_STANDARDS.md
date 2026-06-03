# Provenance Standards

The atlas must stay trustworthy: **do not invent factual claims.** Every concept
page carries a *Sources / provenance* section, and every factual statement on the
page should be traceable to it.

## Why

This is a learning resource that may later be adapted for a public academic
website. Unsourced claims that turn out to be wrong are worse than no claim. When
in doubt, mark something as an open question rather than asserting it.

## Claim types

Label or mentally classify each statement as one of the following. The first two
require sources; the rest are clearly framed as not-yet-fact.

| Type | What it is | Sourcing requirement |
|------|------------|----------------------|
| **Source-backed fact** | A claim presented as true about how something works. | **Must** cite a specific, reputable source (paper, official docs, primary reference). |
| **Implementation detail** | "Library/framework X does it this way." | **Must** cite the docs or source code / version it refers to (behavior can change across versions). |
| **Intuition / analogy** | A simplification or metaphor to aid recall. | Mark as intuition. State that it is lossy; do not present as exact truth. |
| **Open question** | Something unverified or unknown to the author. | No source needed — but it must live in the *Open questions* section, not be stated as fact. |
| **Personal learning note** | The author's own framing or mnemonic. | No source needed — clearly mark as a personal note so it isn't mistaken for an external fact. |

## How to cite

In the provenance block, list sources with enough detail to find them again:

- Paper: title, authors, year, and a stable link (e.g. arXiv) where possible.
- Docs / code: project, page or symbol, and the **version** observed.
- Prefer primary sources over blog summaries.

Keep claims and sources mappable — if a page makes five factual claims, a reader
should be able to tell which source backs each.

## Status interaction

- A page can only reach **Verified** / **Available**
  (see [PAGE_STANDARDS.md](PAGE_STANDARDS.md)) once its factual claims have been
  checked against the cited sources.
- A drafted page with unchecked claims should be **Needs Review**.

## Not in scope

This is about sourcing *conceptual facts*. It is **not** a place for research
notes, paper summaries, or project logs — those belong in the separate research
wiki, not this atlas.
