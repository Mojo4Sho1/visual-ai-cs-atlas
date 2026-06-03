# AGENTS.md

Guidance for any agent or human contributor working in this repo. It is
model-agnostic on purpose: the public, tracked docs below are the single source
of truth for durable repo conventions.

## Read these, in order

1. [`README.md`](README.md) — project overview and how to run the site.
2. [`docs/AGENT_WORKFLOW.md`](docs/AGENT_WORKFLOW.md) — contribution workflow and
   behavioral rules.
3. [`docs/SITE_STRUCTURE.md`](docs/SITE_STRUCTURE.md) — repository layout.
4. [`docs/PAGE_STANDARDS.md`](docs/PAGE_STANDARDS.md) — page requirements.
5. [`docs/VISUAL_LANGUAGE.md`](docs/VISUAL_LANGUAGE.md) — visual conventions.
6. [`templates/design-brief-template.md`](templates/design-brief-template.md) —
   blank design brief structure.

## The public / private boundary

- **Public tracked docs are the single source of truth** for durable repo
  conventions, contributor and agent instructions, templates, and standards.
- **`internal/` is not a source of durable instructions.** Nothing required to
  understand or contribute to the repo should live only there.
- `internal/` may hold private *filled* design briefs or scratch notes, but
  those are private working artifacts — not public project standards. It is
  git-ignored and may not exist until private work is created.
- **Do not create hidden, model-specific guidance** (e.g. under `.claude/`) when
  the public docs already cover the topic. Improve the public docs instead.
