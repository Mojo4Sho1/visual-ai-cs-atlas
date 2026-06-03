# Brief → Page Workflow

How a concept goes from an idea to a finished concept page. Planning happens in a
**design brief** (private); the result is a **concept page** (public). This keeps
pages factual, visual, and consistent — and keeps half-formed planning out of the
published site.

> Read [`AGENT_WORKFLOW.md`](AGENT_WORKFLOW.md) first. This document assumes the
> core rules there (static stack, no research notes, sourced facts).

## The stages

| Stage | Name | Output |
|-------|------|--------|
| 1 | Discuss concept and learning goals | shared understanding of scope |
| 2 | Write a design brief | a filled brief under `internal/briefs/` (private) |
| 3 | Review the brief | a brief checked for factuality + visual clarity |
| 4 | Build or update the concept page | an HTML page under `pages/<track>/` |
| 5 | Verify the page | links, layout, sources, visual clarity confirmed |
| 6 | Update content status | page pill + `docs/CONTENT_STATUS.md` updated |

### Stage 1 — Discuss concept and learning goals
Agree on *what the page is for* before writing anything: the concept, who it's
for, the prerequisite ideas, and the one thing a reader should remember. Surface
open questions early. No files change yet.

### Stage 2 — Write a design brief
Copy [`templates/design-brief-template.md`](../templates/design-brief-template.md)
into a **private, git-ignored** location (e.g.
`internal/briefs/<track>-<concept>.md`) and fill it in. The brief plans the page:
learning goals, mental anchor, required diagrams, data shapes, code trace, key
factual claims, sources to consult, and acceptance criteria. Filled briefs are
**not** published.

### Stage 3 — Review the brief
Before any HTML, check the brief for:
- **Factuality** — is every key claim backed by a real source you can cite? Is
  intuition clearly separated from source-backed fact?
- **Visual clarity** — is there a primary mental model? Do the required diagrams
  map to the [visual primitives](VISUAL_LANGUAGE.md)?
- **Scope** — is it a reusable concept page, not research notes?

Resolve or explicitly park open questions before building.

### Stage 4 — Build or update the concept page
Copy `templates/concept-page-template.html` into `pages/<track>/<concept>.html`
and fill it to the brief. Keep the [standard section order](PAGE_STANDARDS.md);
reuse CSS components and visual primitives. Add a card linking to it on the
track's `index.html`.

### Stage 5 — Verify the page
Walk [`templates/page-build-checklist.md`](../templates/page-build-checklist.md):
links and asset paths resolve, sources map to claims, the visual anchor and
recall panel are present, no research notes, no new dependencies.

### Stage 6 — Update content status
Set the page's status pill honestly and update
[`docs/CONTENT_STATUS.md`](CONTENT_STATUS.md) so the snapshot stays accurate.

## What belongs where

| In the **design brief** (private) | In the **concept page** (public) | Stays **private** |
|-----------------------------------|----------------------------------|-------------------|
| Planning notes, scope decisions | The finished visual explanation | Filled briefs |
| Candidate sources to consult | Final cited sources | Session logs |
| Draft claims to verify | Verified, sourced claims | Scratch / working notes |
| Acceptance criteria | Recall panel, open questions | References to private projects |

## "Done enough" for a first draft

A first draft is good enough to commit as **Draft** when:
- the primary diagram (visual mental model) exists, even if rough;
- the memory anchor and step-by-step mechanism are written;
- key claims have *candidate* sources noted (full verification can follow);
- the recall panel has at least a couple of useful prompts.

It does **not** need every section perfect. It does need to be honest about its
status and must not assert unsourced facts as settled.

## Handling open questions

- If something is unverified or unknown, put it in the page's **Open questions**
  section — do not state it as fact in the body.
- If a claim can't be sourced, either cut it or demote it to an open question.
- Carry unresolved brief questions forward into the page's Open questions so they
  aren't lost.

## Marking page status

Statuses are defined in [`PAGE_STANDARDS.md`](PAGE_STANDARDS.md). The ones this
workflow leans on:

| Status | Use when |
|--------|----------|
| **Draft** | Being written; content incomplete or claims unverified. |
| **Needs Review** | Drafted, but factual claims / sources not yet checked. |
| **Verified** | Claims checked against the cited sources. |

Move a page to **Verified** only after Stage 5 confirms its provenance.
