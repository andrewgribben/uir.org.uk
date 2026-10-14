# ÚIR Consulting pattern library

The live examples are at [`dist/pattern-library.html`](../dist/pattern-library.html). Shared markup is rendered by [`dist/js/ui.js`](../dist/js/ui.js), with shared styling and design tokens in [`dist/css/site.css`](../dist/css/site.css).

## Brand architecture

- **ÚIR Consulting** is the parent identity and umbrella for the three service areas.
- **UIR Access** is digital accessibility consultancy.
- **UIR Form** is 3D modelling and 3D printer management.
- **UIR Studio** is app and website design and development.

UIR Form and UIR Studio are working names proposed for this first draft. The service labels explain each name wherever it appears.

## Foundations

| Token | Value | Use |
| --- | --- | --- |
| `--forest` | `#21332e` | Primary brand ground and high-emphasis surfaces |
| `--forest-deep` | `#182823` | Footer and deepest contrast |
| `--clay` | `#80674d` | Earth accent and section labels |
| `--clay-dark` | `#68523e` | Text labels on sand surfaces |
| `--paper` | `#f5f0e7` | Warm light surfaces |
| `--muted` | `#59635c` | Secondary body copy on light surfaces |
| `--moss` | `#78938a` | Secondary natural tone |
| `--sky` | `#78a8a0` | Small accent detail |
| `--focus` | `#b86339` | Visible keyboard focus |

Display typography uses a system serif stack; body typography uses a system sans stack. This avoids an external font request and keeps the pages resilient when a visitor is offline or blocks third-party services. Text colours are chosen for WCAG AA contrast on their intended surfaces; moss and sky are accents, not body-text colours. On clay and sand surfaces, labels use the darker clay token. The focus ring remains visible on both light and dark surfaces.

## Shared components

- `renderHeader(activePage)` renders the parent mark, responsive primary navigation and current-page state.
- `renderFooter()` renders service links, location and the pattern library link.
- `.button`, `.text-link`, `.section-kicker`, `.service-card`, `.offer-card` and `.portfolio-section` are shared styling patterns.
- Service pages keep the same sequence: introduction, what the service does, selected work, next step.
- The home page introduces the origin and all three areas before linking to each service page.

## Adding real portfolio entries

The service pages use a consistent selected-work card. UIR Access includes CIVIC UK; UIR Form includes the Mind Mesh Learning System. These summaries use the project details supplied by UIR. Add imagery or more outcome detail only when UIR has approved the materials for publication. UIR Studio's portfolio area remains ready for a confirmed project. Do not add invented testimonials, partner marks, outcomes or client details.

## Image handoff

The current hero is a CSS illustration that establishes the composition in the supplied mockup. Replace the `.hero-art` and `.subhero-art` treatment with the approved standing-stone photograph when it is added. Keep text contrast readable over the image, and preserve the site's image-free fallback colour.

## Change guidance

1. Prefer the existing token and component before adding a new one.
2. Keep shared structure in `ui.js`; keep visual rules and responsive behaviour in `site.css`.
3. Update this document and the live pattern page whenever a shared pattern changes.
4. Check the result at narrow (320 px), medium (768 px) and wide (1440 px) viewport widths, including 200% zoom and no horizontal scrolling.
5. Preserve skip navigation, landmarks, heading order, keyboard focus, reduced-motion support and readable contrast. Check keyboard-only navigation, mobile menu state, text resizing and link/button targets.
6. Verify normal text contrast at WCAG AA (4.5:1), large text and essential non-text indicators at 3:1, against each actual background.
