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

Use these status labels (rendered as pills via the `.pill--*` classes):

| Status         | Pill class         | Meaning |
|----------------|--------------------|---------|
| **Coming Soon**| `pill--soon`       | Planned, no real content yet — placeholder only. |
| **Draft**      | `pill--draft`      | Being written; content incomplete or unverified. |
| **Needs Review**| `pill--review`    | Drafted but factual claims/sources not yet checked. |
| **Verified**   | `pill--verified`   | Claims checked against cited sources. |
| **Available**  | `pill--available`  | Complete and ready to learn from. |

A page generally moves: Coming Soon → Draft → Needs Review → Verified →
Available. "Available" is the public-ready bar; "Verified" specifically asserts
that provenance has been checked.

## Authoring rules

- **Visual-first.** Lead with the mental model. Prose supports the diagram, not
  the other way around.
- **Factual, sourced.** Do not invent claims. Anything factual needs a source
  in the provenance section.
- **Placeholder honestly.** A placeholder page must clearly say it is a
  placeholder and list its planned sections.
- **No research notes.** This atlas holds reusable conceptual pages, not project
  logs or paper notes.
