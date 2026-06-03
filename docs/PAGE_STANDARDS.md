# Page Standards

Every concept page should follow the same structure so that pages become
recognizable by shape — you should be able to recall a concept partly by
*where* things sat on its page.

The canonical structure lives in
[`templates/concept-page-template.html`](../templates/concept-page-template.html).
Copy it; do not reinvent the layout.

When possible, a real concept page should be created from a **design brief**
rather than improvised — plan the page first, then build to it. See
[`BRIEF_TO_PAGE_WORKFLOW.md`](BRIEF_TO_PAGE_WORKFLOW.md) and the blank
[`templates/design-brief-template.md`](../templates/design-brief-template.md).

## Standard concept page structure

In order:

1. **Title** — the concept name.
2. **One-sentence memory anchor** — the single thing to remember.
3. **Concept status metadata** — status, track, level, last reviewed,
   confidence.
4. **Visual mental model** — the primary diagram (the heart of the page).
5. **Step-by-step mechanism** — how it works, in ordered steps.
6. **Formal view** — equations / formal definitions.
7. **Tensor / data shapes** — what data flows through, with shapes.
8. **Code / API view** — a minimal, faithful code/API snippet.
9. **Common misconceptions** — wrong mental models and their corrections.
10. **Comparison table** — only if the concept has natural alternatives.
11. **Recall panel** — self-test prompts.
12. **Sources / provenance** — every factual claim maps to a source here
    (see [PROVENANCE_STANDARDS.md](PROVENANCE_STANDARDS.md)).
13. **Open questions** — what is still unclear or unverified.
14. **Links to related pages** — neighbors in the concept graph.

Keep the order stable. Omit a section only when it genuinely does not apply
(e.g. no comparison) rather than reordering.

## Page statuses

Use these status labels (rendered as pills via the `.pill--*` classes). The key
distinction early on is between a **shell that exists but has no real content**
and a **page with real educational content that is still being written**.
**Draft (placeholder)** is an explicit substatus of **Draft** for page shells;
it is not interchangeable with a substantive draft.

| Status               | Pill class        | Meaning |
|----------------------|-------------------|---------|
| **Coming Soon**      | `pill--soon`      | Planned concept with no substantive page yet — a navigational placeholder only (often "_not created yet_"). |
| **Draft (placeholder)** | `pill--draft`  | A page file/shell exists, but it does not yet contain substantive educational content — just the intended structure. |
| **Draft**            | `pill--draft`     | Real educational content exists, but it may still be incomplete or unverified. |
| **Needs Review**     | `pill--review`    | Substantively drafted, but factual claims, sources, provenance, or implementation details still need review. |
| **Verified**         | `pill--verified`  | Claims and sources have been checked against the cited references. |
| **Available**        | `pill--available` | Polished enough for normal learner use. |

A page generally moves: Coming Soon → Draft (placeholder) → Draft →
Needs Review → Verified → Available. "Available" is the public-ready bar;
"Verified" specifically asserts that provenance has been checked.

There is no separate pill for **Draft (placeholder)** — it reuses `pill--draft`,
and the page body must say plainly that it is a placeholder (see *Authoring
rules*). Track the substatus in
[`CONTENT_STATUS.md`](CONTENT_STATUS.md).

## Authoring rules

- **Visual-first.** Lead with the mental model. Prose supports the diagram, not
  the other way around.
- **Factual, sourced.** Do not invent claims. Anything factual needs a source
  in the provenance section.
- **Placeholder honestly.** A placeholder page must clearly say it is a
  placeholder and list its planned sections.
- **No research notes.** This atlas holds reusable conceptual pages, not project
  logs or paper notes.
