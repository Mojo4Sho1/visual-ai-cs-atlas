# Agent Workflow

A public, sanitized guide for future assistant instances (Claude, ChatGPT, or
others) working in this repo. Read this before making any change. It is the
public-safe counterpart to private planning — nothing essential lives only in
the git-ignored `internal/` directory.

## Read first

1. **`README.md`** — project intent, how to run, and the contribution flow.
2. **`docs/`** — skim before editing. Most relevant:
   - [`SITE_STRUCTURE.md`](SITE_STRUCTURE.md) — directory layout.
   - [`PAGE_STANDARDS.md`](PAGE_STANDARDS.md) — page section order + statuses.
   - [`VISUAL_LANGUAGE.md`](VISUAL_LANGUAGE.md) — reusable visual primitives.
   - [`PROVENANCE_STANDARDS.md`](PROVENANCE_STANDARDS.md) — sourcing rules.
   - [`CONTENT_STATUS.md`](CONTENT_STATUS.md) — what exists / is planned.
3. **`docs/BRIEF_TO_PAGE_WORKFLOW.md`** — the staged brief → page process.

## Core rules

- **Preserve the stack.** Plain static HTML/CSS/JS. No framework, no build step,
  no package manager, no external CSS/font/JS dependencies.
- **No frameworks or build tooling without explicit approval.** If you think one
  is warranted, propose it and wait — do not add it unilaterally.
- **No research notes.** This atlas holds reusable conceptual learning pages.
  Project logs, paper summaries, and research-campaign notes belong in a
  separate research wiki — never here. Do not add a "Research Notes" section and
  do not reference the author's active research projects.
- **Use a design brief before building a real concept page.** Plan first, then
  build (see [`BRIEF_TO_PAGE_WORKFLOW.md`](BRIEF_TO_PAGE_WORKFLOW.md)). Filled
  briefs are private; the public blank template is
  [`templates/design-brief-template.md`](../templates/design-brief-template.md).
- **Keep factual claims sourced.** Do not invent facts. Every factual statement
  on a page must map to a source in its provenance block
  (see [`PROVENANCE_STANDARDS.md`](PROVENANCE_STANDARDS.md)).
- **Distinguish intuition from fact.** Analogies, mnemonics, and simplifications
  must be clearly framed as intuition (lossy), not stated as source-backed fact.
  Unverified items go to *Open questions*, not into the body as assertions.
- **Keep pages visual-first and recall-friendly.** Lead with the diagram /
  mental model; prose supports it. Reuse the visual primitives and the recall
  panel rather than inventing per-page structure.

## Public vs private

- **Public, tracked:** everything under `docs/`, `templates/`, `pages/`,
  `styles/`, `scripts/`, `assets/`, and the root files.
- **Private, git-ignored:** everything under `internal/` (filled design briefs,
  session logs, private assistant guidance, scratch plans).
- **Never copy private content into public files.** You may adapt the *structure*
  of a private template into a public blank one, but public files must contain no
  filled brief content, personal session notes, or references to private
  projects.

## Maintaining docs

- **Update public docs only when the repo convention changes** — not on every
  edit. Keep [`CONTENT_STATUS.md`](CONTENT_STATUS.md) current as page statuses
  move. Don't churn docs needlessly.
- **Keep filled / private briefs out of the public tree.** They belong under
  `internal/briefs/` or another git-ignored location.

## Verifying changes

- All internal links resolve. Track/concept pages link home via `../../index.html`.
- `internal/` is still ignored: `git status --short` must not list it.
- See [`templates/page-build-checklist.md`](../templates/page-build-checklist.md)
  after building or revising a page.
