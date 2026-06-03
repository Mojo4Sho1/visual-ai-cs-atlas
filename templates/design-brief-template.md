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
Target status for the first commit (Draft (placeholder) / Draft / Needs Review).
See the status ladder in [`PAGE_STANDARDS.md`](../docs/PAGE_STANDARDS.md).

## Learning goals
What the reader should be able to do / recall afterward. 2–4 bullets.
- …

## Prerequisite concepts
Pages or ideas the reader should know first (link to existing atlas pages).
- …

## Place in learning sequence
Where this page sits in the broad-to-deep progression, so each page owns one
altitude and pages don't re-explain each other.
- **Previous page:** …
- **This page owns:** …
- **Next page:** …
- **Explicitly deferred topics:** …

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

## Concrete running example
Pick one tiny set of numbers and carry it through every diagram, shape, and code
snippet on the page. A single consistent example is far easier to recall than
abstract symbols. **These are illustrative values, not universal model
defaults** — say so on the page.

For LLM-internals pages, this might be a tiny sequence with named dimensions
such as `B`, `T`, `D`, `H`, and `d_head`; for non-LLM pages, choose the smallest
example that can appear consistently in diagrams, shapes, and code.
- Tiny example chosen for this page: …
- Symbols / dimensions used by the example: …
- Where the example appears in the page: …

## Tensor / data shapes
The shapes that flow through the concept, with symbols and meanings.
- …

### Shape ledger
A row-by-row trace of how the data's shape changes from input to output. Use the
concrete running example so shapes are real numbers, not just symbols. This is a
template — keep, drop, or add rows to fit the page.

| Stage | Object | Shape | What changed | Why it changed |
|-------|--------|-------|--------------|----------------|
| … | … | … | … | … |

Compact flow:
`… -> … -> …`

## Computation trace
Name the operation at each step, so the page can show *what kind of thing* is
happening — not just the before/after shape. For each step, note:

- **Operation** — e.g. matrix multiplication, learned projection, reshape/view,
  transpose, masking, scaling, softmax, weighted sum, concatenation, projection,
  cache read/write, sampling, or another page-specific operation.
- **Which axes interact** — the axes the operation actually combines.
- **Dimensions preserved** — what passes through unchanged.
- **Dimensions created / split / merged / reduced** — how the shape is
  reorganized.
- **Values vs layout** — whether the step *changes the numbers* (e.g. matmul,
  softmax) or only *reorganizes existing numbers* (e.g. reshape, transpose).

| Step | Operation | Axes / objects involved | Shape before | Shape after | Values, view, copy, or layout detail |
|------|-----------|-------------------------|--------------|-------------|--------------------------------------|
| … | … | … | … | … | … |

## Data movement and layout notes
Lightweight, but present — later pages may connect these internals to GPU /
system behavior, and it helps to separate the levels early. For the key steps,
distinguish:

- **Conceptual transformation** — what it means for the reader's mental model.
- **Mathematical operation** — the math actually performed.
- **Logical view / reshape** — a reinterpretation of the same underlying data
  (no new numbers).
- **Actual memory copy** — when data is genuinely moved/duplicated.
- **Implementation-dependent layout detail** — anything that varies by
  framework/version (flag it as such; cite per provenance standards).
- **Hardware-relevant data movement** — anything that matters for how it runs on
  real hardware (note it; full GPU detail belongs on a GPU-track page).

- …

## Code / API trace
The minimal, faithful snippet to show, and the data shapes it traces line by line.
- …

## Common misconceptions
Wrong mental models to explicitly correct.
- …

## Abstraction boundaries
Label the page's key explanations so intuitive teaching aids are never mistaken
for implementation facts. Tag each important statement as one or more of:

- conceptual model,
- mathematical operation,
- tensor-shape fact,
- implementation detail,
- hardware / layout detail,
- intuition / metaphor,
- source-backed factual claim,
- open question or unresolved design choice.

Source-backed facts and implementation details must be cited (see
[`PROVENANCE_STANDARDS.md`](../docs/PROVENANCE_STANDARDS.md)); intuition and
metaphor must be clearly framed as lossy; open questions go to the *Open
questions* section, not the body.
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
- [ ] Place in learning sequence is clear (previous page, owned material, next
  page, deferred topics).
- [ ] A single concrete running example is carried through the page.
- [ ] Primary diagram present and clear.
- [ ] Shape ledger and computation trace are consistent with each other.
- [ ] Data movement / layout levels are not conflated with each other.
- [ ] Key explanations are labelled by abstraction boundary.
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
