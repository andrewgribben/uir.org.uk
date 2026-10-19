# AGENTS.md - uir.org.uk

## Summary
Website for ÚIR Consulting Ltd: parent brand plus three service areas (UIR Access, UIR Form, UIR Studio).
Incomplete: much of the content is placeholder. Live at https://uir.org.uk (GitHub Pages).

## Layout
- src/*.md: pages (index, access, form, studio, contact, pattern-library), Markdown with YAML front matter
- src/_includes/: shared layouts; src/css, src/js, src/assets: static files
- src/projects/{access,form,studio}/: one Markdown file per project example (see docs/ADDING_PROJECTS.md)
- docs/PATTERN_LIBRARY.md: read before changing shared components
- dist/: build output

## Commands
- `npm install`, `npm run build` (Eleventy to dist/), `npm run dev` (local server with rebuilds), `npm run serve` (serve dist/)
- `npm run deploy:pages` PUBLISHES THE LIVE SITE (builds, pushes gh-pages). Agents must never run it.

## Deployment (owner rule)
- Merging to the main branch must never publish the site.
- Agents never deploy, publish, push to the publishing branch, trigger deploy workflows or change DNS or hosting settings.
- Publishing happens only through a Deploy card on the Kanban board. The owner approves it; then the operator deploys, checks the live site and attaches evidence (URL, HTTP status, screenshot) to the card.

## Rules
- Work on branches and open pull requests. Never push to main.
- Many pages contain placeholder content. Never invent facts about the business, clients, prices or people: mark gaps clearly and block the card with a question.
- No new analytics, trackers or third-party scripts without owner approval.
- Never commit secrets, API tokens or .env files.
- Report with evidence: commands run, build output, screenshots of changed pages at 375 px and 1280 px wide.
- UK English. No em dashes.
