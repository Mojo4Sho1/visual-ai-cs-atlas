# Site Structure

How the Visual AI & CS Atlas is laid out, and what belongs where. The site is
plain static HTML/CSS/JS — no framework, no build step, no package manager.

## Directory map

```
visual-ai-cs-atlas/
├── index.html              # Homepage: tracks, current focus, coming soon
├── README.md               # Project overview + how to run / contribute
├── .gitignore              # Ignores internal/, OS files, local artifacts
├── styles/
│   ├── base.css            # Design tokens (CSS variables), resets, base elements
│   ├── layout.css          # Page shell, top nav, grids, footer
│   └── components.css      # Reusable components (cards, pills, panels, tables…)
├── scripts/
│   ├── main.js             # Site-wide progressive enhancement (e.g. footer year)
│   └── visual-components.js# Scaffolding for future diagrams/steppers
├── pages/
│   ├── llms/               # Large Language Models track (current focus)
│   │   ├── index.html
│   │   ├── transformer-overview.html
│   │   ├── qkv-attention.html
│   │   └── attention-variants.html
│   ├── gnns/index.html
│   ├── gpu-systems/index.html
│   └── cs-foundations/index.html
├── templates/
│   └── concept-page-template.html   # Standard concept page structure to copy
├── assets/
│   ├── icons/              # SVG icons
│   └── diagrams/           # Diagram source/exports
├── docs/                   # Public documentation (this folder)
└── internal/               # PRIVATE — git-ignored (see README)
```

## What belongs where

- **Root `index.html`** — the homepage. Links to every track.
- **`styles/`** — three layers, in load order: tokens (`base`), structure
  (`layout`), components (`components`). Add new theme values as CSS variables in
  `base.css` rather than hard-coding colors elsewhere.
- **`scripts/`** — vanilla JS only. Everything must be progressive: the site
  must work with JS disabled. Future diagram logic goes in
  `visual-components.js`.
- **`pages/<track>/`** — one folder per track. `index.html` is the track
  landing page; concept pages sit alongside it.
- **`templates/`** — public, tracked templates: `concept-page-template.html` to
  start a new page, `design-brief-template.md` (blank design brief), and
  `page-build-checklist.md`. Keep section order stable; keep these blank.
- **`assets/`** — static images/icons/diagrams.
- **`docs/`** — public-facing standards, references, and workflow docs
  (`AGENT_WORKFLOW.md`, `BRIEF_TO_PAGE_WORKFLOW.md`).
- **`internal/`** — private Claude guidance, **filled** design briefs
  (`internal/briefs/`), and planning. Git ignores this directory; nothing here is
  published. Public blank templates live in `templates/`; private filled briefs
  live here.

## Relative path conventions

- Root pages reference `styles/…`, `scripts/…`, `pages/…`.
- Track + concept pages live two levels deep and reference `../../styles/…`,
  `../../scripts/…`, and link home via `../../index.html`.
- The concept template assumes a page one level below `pages/` (uses `../../`).
