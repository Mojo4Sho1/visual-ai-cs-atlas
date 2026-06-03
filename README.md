# Visual AI & CS Atlas

A personal, browser-viewable visual knowledge base for **AI and computer
science** concepts. The goal is to learn and recall technical ideas *visually* —
through diagrams, spatial layouts, code-to-data traces, and (eventually) light
animations.

This is a learning atlas, not a research log. **It does not contain research
notes** — those live in a separate wiki repo. Pages here are reusable,
recall-friendly explanations of concepts.

## Status

Early scaffold. The structure, styling, documentation, and placeholder pages
exist; full concept content is being added one page at a time. **Current focus:
Large Language Models.**

## Tracks

| Track | Status | What it covers |
|-------|--------|----------------|
| **Large Language Models** | Draft (current focus) | Transformers, attention machinery, positional encodings, KV cache, decoding |
| **Graph Neural Networks** | Coming Soon | Message passing, aggregation, GCN/GAT, readout |
| **GPU Systems for AI** | Coming Soon | CUDA vs Tensor Cores, memory hierarchy, batching, kernels |
| **CS Foundations** | Coming Soon | Complexity analysis, data structures, memory models |

## Viewing the site locally

No build step, no dependencies. Two options:

**1. Open directly** — open `index.html` in a browser
(`file://` works for browsing pages and links).

**2. Run a local server** (recommended; avoids any `file://` quirks):

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C` when done.

## Adding a new concept page

1. Copy the template:
   ```bash
   cp templates/concept-page-template.html pages/<track>/<concept>.html
   ```
2. Fill in the sections in order (keep the order stable — see
   [`docs/PAGE_STANDARDS.md`](docs/PAGE_STANDARDS.md)).
3. Add a card linking to it on the track's `index.html`.
4. Source every factual claim in the *Sources / provenance* section
   (see [`docs/PROVENANCE_STANDARDS.md`](docs/PROVENANCE_STANDARDS.md)).
5. Update the page's status pill and
   [`docs/CONTENT_STATUS.md`](docs/CONTENT_STATUS.md).

The relative paths in the template assume a page one level below `pages/`
(it references `../../styles/…`). Adjust if you place a page elsewhere.

## Using design briefs

Before building a *real* concept page (not a placeholder), write a design brief
so the page is planned before it is coded. Copy
`internal/briefs/DESIGN_BRIEF_TEMPLATE.md`, fill it in (learning goals, required
diagrams, key claims, sources to consult, acceptance criteria), then build to it.
Briefs live under `internal/` and are **not** published.

## Documentation

Public standards live in [`docs/`](docs/):

- [`SITE_STRUCTURE.md`](docs/SITE_STRUCTURE.md) — directory layout
- [`PAGE_STANDARDS.md`](docs/PAGE_STANDARDS.md) — page structure + statuses
- [`VISUAL_LANGUAGE.md`](docs/VISUAL_LANGUAGE.md) — reusable visual primitives
- [`CONTENT_STATUS.md`](docs/CONTENT_STATUS.md) — what exists / is planned
- [`PROVENANCE_STANDARDS.md`](docs/PROVENANCE_STANDARDS.md) — sourcing rules

## Private / internal

The `internal/` directory holds private Claude instructions, design briefs, and
local planning. **It is intentionally git-ignored and never published.** Don't
rely on it for anything that should ship publicly.

## Future direction

The site is personal-learning-first, but kept clean enough that selected pages
could later be adapted for a personal academic website. No framework or build
step is planned — it should stay simple static HTML/CSS/JS.
