# Page Build Checklist

Run through this after building or revising a concept page. It maps to Stage 5 of
[`docs/BRIEF_TO_PAGE_WORKFLOW.md`](../docs/BRIEF_TO_PAGE_WORKFLOW.md). Copy it
into a brief or a PR description if useful.

## Location & structure
- [ ] Page is at the correct path: `pages/<track>/<concept>.html`.
- [ ] Follows the standard section order (`docs/PAGE_STANDARDS.md`).

## Links & assets
- [ ] All internal links resolve (home, track, related pages, breadcrumb).
- [ ] CSS paths work (`../../styles/base.css`, `layout.css`, `components.css`).
- [ ] JS paths work (`../../scripts/main.js`, `visual-components.js`).
- [ ] A card linking to the page exists on the track's `index.html`.

## Content integrity
- [ ] No research notes, paper summaries, or project logs included.
- [ ] No references to private projects or `internal/` content.
- [ ] No unsourced factual claims — every fact maps to the provenance block.
- [ ] Intuition/analogy is clearly marked as intuition, not stated as fact.
- [ ] Open/unverified items live in the *Open questions* section.

## Brief alignment (deep / internals pages)
For pages that explain how tensors move through a computation, check the
design-brief scaffolding made it onto the page (see
[`templates/design-brief-template.md`](design-brief-template.md)):
- [ ] **Place in learning sequence** — the page owns one altitude; it links to
  the previous/next pages and doesn't re-explain deferred material.
- [ ] **Concrete running example** — one small set of numbers (e.g. `B,T,D,H,
  d_head`) is carried through diagrams, shapes, and code, and flagged as
  illustrative.
- [ ] **Shape ledger** — stage → object → shape → what/why changed is traceable
  end to end.
- [ ] **Computation trace** — each step names its operation and which axes
  interact / are preserved / created / split / merged / reduced.
- [ ] **Data movement / layout notes** — conceptual vs mathematical vs
  view/reshape vs memory copy vs hardware movement are not conflated.
- [ ] **Abstraction boundaries** — intuition/metaphor is not presented as an
  implementation fact; each is labelled.

## Visual & recall
- [ ] Visual anchor (primary mental model / diagram) is present.
- [ ] Recall panel with useful self-test prompts is present.
- [ ] Sources / provenance section is present and populated.

## Status
- [ ] The page's status pill is set honestly, per the
  [status ladder](../docs/PAGE_STANDARDS.md) (a shell with no real content is
  **Draft (placeholder)**, not **Draft**).
- [ ] Status / provenance are consistent: a page only reaches **Verified** /
  **Available** once its claims are checked (see
  [`PROVENANCE_STANDARDS.md`](../docs/PROVENANCE_STANDARDS.md)).
- [ ] `docs/CONTENT_STATUS.md` is updated to match.

## Sanity
- [ ] Mobile / readability sanity check (narrow viewport reads fine).
- [ ] No framework, build step, package manager, or external dependency added.
- [ ] No private `internal/` content was copied into any public file.
- [ ] `git status --short` does not list anything under `internal/`.
