# Visual Language

A small, consistent set of visual primitives. Reusing the same shapes across
pages makes the atlas recall-friendly: the same idea always looks the same.

These are intentions and conventions — most are not fully built yet. Where a
CSS/JS hook already exists, it is noted. Build new primitives as plain
SVG/canvas/DOM; do not add a charting library without approval.

## Primitives

### Tensor block
A labeled rectangle representing a tensor, annotated with its shape
(e.g. `[B, T, D]`). Stacks/grids of blocks show batching or multi-head splits.
Use a monospace label for the shape.

### Flow arrow
A directional arrow showing data movement between blocks/stages. Keep arrow
direction consistent (left→right for forward flow, top→down for sublayers).

### Stage pipeline
A horizontal sequence of stages with flow arrows between them. Pair with the
**stepper** (see below) to reveal one stage at a time.
Hook: `[data-diagram]` containers with `[data-stage]` children, wired by
`scripts/visual-components.js`.

### Heatmap
A grid of cells shaded by value — for attention weights, similarity matrices,
etc. Include a small legend mapping color → magnitude.

### Split / merge diagram
Shows one tensor splitting into parallel paths (e.g. multi-head) and merging
back. Use symmetric fan-out/fan-in so split and merge are visually mirrored.

### Comparison table
A side-by-side table of options/variants and their trade-offs.
Hook: `table.compare` inside `.table-wrap` (see `components.css`).

### Code-to-data trace
A code snippet paired with the data shapes it produces at each line — connecting
the **Code / API view** to the **Tensor / data shapes** section.
Hook: `.code-trace` panel (bar + `<pre>`).

### Recall panel
A boxed set of self-test prompts at the end of a page.
Hook: `.recall` / `.recall__title`.

## Supporting components (in `components.css`)

| Component            | Class(es)                      |
|----------------------|--------------------------------|
| Visual placeholder   | `.viz`, `.viz__label`, `.viz__hint` |
| Stepper controls     | `.stepper` + `[data-step-prev/next]`, `[data-stage-status]` |
| Status pill          | `.pill`, `.pill--*`            |
| Memory anchor        | `.anchor`                      |
| Metadata strip       | `.meta` (`<dl>`)               |
| Provenance block     | `.provenance`                  |
| Callout              | `.callout`                     |

## Conventions

- One primary diagram per page (the "visual mental model").
- Reuse colors from the CSS variables in `base.css`; don't introduce one-off
  colors per page.
- Prefer SVG for diagrams (crisp, themeable, diffable).
- Animation is opt-in and lightweight — reveal/step, not motion for its own sake.
