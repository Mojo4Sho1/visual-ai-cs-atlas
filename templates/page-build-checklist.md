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

## Visual & recall
- [ ] Visual anchor (primary mental model / diagram) is present.
- [ ] Recall panel with useful self-test prompts is present.
- [ ] Sources / provenance section is present and populated.

## Status
- [ ] The page's status pill is set honestly.
- [ ] `docs/CONTENT_STATUS.md` is updated to match.

## Sanity
- [ ] Mobile / readability sanity check (narrow viewport reads fine).
- [ ] No framework, build step, package manager, or external dependency added.
- [ ] No private `internal/` content was copied into any public file.
- [ ] `git status --short` does not list anything under `internal/`.
