# Portfolio 2026 refresh

Status: built on `feat/portfolio-2026-refresh`, awaiting Ammar's review. Not deployed.

## Goal
Align alzureiqi.dev with the 2026 job search (ML platform / MLOps / AI infrastructure / model serving) and remove anything inaccurate, gimmicky, or too revealing about the employer.

## Decisions (2026-10-21)
- **The day job is not described.** No employer name, team, dates, duties, metrics, or architecture anywhere public (site, metadata, README, commit messages). The current role appears only as "Software Engineer · ML platform & MLOps". (2026-10-22)
- **No resume on the site.** Resume PDF and all resume links removed (the old PDF included a phone number).
- Removed projects: Hirestack (team fork, dead demo), RetailPulse and CryoCast (not backed by the worklog). CensusX and NoteFlow are the projects; both repos are private and not linked.
- CensusX is a project, not employment, with no co-founder title.
- Redesign (2026-10-22): one-page "technical document" layout per `docs/design/design-direction.md`. Kept the warm palette and the typing effect (accurate phrases; "LS swapping the world" dropped). Removed the skills graph, spotlight cards, bento grid, scroll-reveal and badge pills; /experience/, /projects/, /about/ now redirect to sections.
- Removed: Konami/gravity, idle starfield, console art, ⌘K palette, `?` shortcuts modal, terminal 404, pulse dots, made-up project metrics.
- Theme follows the system preference; the toggle choice persists.
- SEO: per-page titles, descriptions, canonical URLs, Open Graph image (`public/og.png`), Person JSON-LD, sitemap.xml, robots.txt.

## Open questions
See `docs/status/decisions.md`.

## Later (not started)
- **New project: agentic operations platform for accounting and bookkeeping companies** (requested 2026-10-22). Add to Projects (and the home page cards) once Ammar provides the facts. Need before writing: name, dates, status (building / shipped), what's actually built vs planned, stack, his role, whether the repo is public, and how it relates to CensusX (separate project or a vertical of it). Nothing goes on the site that isn't confirmed.
