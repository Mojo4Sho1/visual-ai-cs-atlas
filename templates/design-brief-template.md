# Design Brief — <Concept Title>

Plan a concept page before building it. **Copy this template into a private,
git-ignored location** (e.g. `internal/briefs/<track>-<concept>.md`) and fill it
in there. This file in `templates/` is the public **blank** template — keep it
blank; never commit a filled brief to the public tree.

See [`docs/BRIEF_TO_PAGE_WORKFLOW.md`](../docs/BRIEF_TO_PAGE_WORKFLOW.md),
[`docs/PAGE_STANDARDS.md`](../docs/PAGE_STANDARDS.md), and
[`docs/PROVENANCE_STANDARDS.md`](../docs/PROVENANCE_STANDARDS.md).

---

## Concept title
The page's name as it will appear.

## Track
Which track this belongs to (LLMs / GNNs / GPU Systems / CS Foundations).

## Intended page path
Where the page will live, e.g. `pages/<track>/<concept>.html`.

## Status
Target status for the first commit (Draft / Needs Review). See page statuses.

## Learning goals
What the reader should be able to do / recall afterward. 2–4 bullets.
- …

## Prerequisite concepts
Pages or ideas the reader should know first (link to existing atlas pages).
- …

## Target audience level
Intro / Core / Advanced — and any assumed background.

## One-sentence memory anchor
The single takeaway (the page's memory anchor).

## Visual mental model
The primary picture the page is built around — what it must make obvious.

## Required diagrams
Each visual and the [visual-language primitive(s)](../docs/VISUAL_LANGUAGE.md) it
uses (tensor block, flow arrow, stage pipeline, heatmap, split/merge, etc.).
- Diagram 1 — purpose, primitives, what it must make clear.
- …

## Possible animation / interaction
Optional, lightweight only (e.g. stepper stages to reveal). Note none if N/A.
- …

## Tensor / data shapes
The shapes that flow through the concept, with symbols and meanings.
- …

## Code / API trace
The minimal, faithful snippet to show, and the data shapes it traces line by line.
- …

## Common misconceptions
Wrong mental models to explicitly correct.
- …

## Comparison table needs
Natural alternatives/variants to compare, if any (omit the section if none).
- …

## Recall panel
Self-test prompts the page should end with.
- …

## Key factual claims
Every factual claim the page will assert. Each must map to a source below.
- Claim → (source ref)
- …

## Sources to consult
Primary references (papers with year + link, official docs + version, source
code) to cite. Prefer primary sources. See provenance standards.
- …

## Open questions
Anything unverified or unknown — carry these into the page's Open questions.
- …

## Acceptance criteria
How we know the page is done and correct.
- [ ] Follows the standard section order (`PAGE_STANDARDS.md`).
- [ ] Primary diagram present and clear.
- [ ] Every factual claim sourced in the provenance block.
- [ ] Intuition/analogy clearly separated from source-backed fact.
- [ ] Recall panel has useful self-test prompts.
- [ ] Status pill set honestly; `docs/CONTENT_STATUS.md` updated.
- [ ] All links resolve.

## Implementation notes for the assistant
Build hints: which template to copy, components/primitives to reuse, page path,
and anything non-obvious for whoever builds the page.
- …

## Verification checklist
Cross-reference [`templates/page-build-checklist.md`](page-build-checklist.md)
after building.
- …
