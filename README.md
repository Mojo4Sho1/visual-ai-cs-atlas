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

## Workflow for adding concept pages

Real concept pages are planned with a **design brief**, then built to it. The
process and the supporting files are public:

- [`docs/AGENT_WORKFLOW.md`](docs/AGENT_WORKFLOW.md) — what any future assistant
  should read and follow before modifying the repo.
- [`docs/BRIEF_TO_PAGE_WORKFLOW.md`](docs/BRIEF_TO_PAGE_WORKFLOW.md) — the staged
  brief → page process (discuss → brief → review → build → verify → status).
- [`templates/design-brief-template.md`](templates/design-brief-template.md) —
  blank design brief to copy.
- [`templates/page-build-checklist.md`](templates/page-build-checklist.md) —
  post-build verification checklist.

Public **blank** templates are tracked here. **Filled** design briefs may be
kept private and git-ignored (e.g. under `internal/briefs/`) — they are not
published. As always, this repo **does not contain research notes**.

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
