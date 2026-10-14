# ÚIR Consulting pattern library

The live examples are generated at [`dist/pattern-library.html`](../dist/pattern-library.html) from [`src/pattern-library.md`](../src/pattern-library.md). Shared markup is rendered by the templates in [`src/_includes`](../src/_includes), with shared styling and design tokens in [`src/css/site.css`](../src/css/site.css).

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
| `--logo-blue` | `#2093e7` | Square accent in the UIR logo |
| `--focus` | `#b86339` | Visible keyboard focus |

Display typography uses a system serif stack; body typography uses a system sans stack. Hero service labels use Jura. Text colours are chosen for WCAG AA contrast on their intended surfaces; moss and sky are accents, not body-text colours. On clay and sand surfaces, labels use the darker clay token. The header uses a dark translucent band over imagery and a light surface on the pattern library. The focus ring remains visible on both light and dark surfaces.

## UIR logo construction

The standalone mark is the three-part U-I-r symbol in [`dist/assets/uir-logo.svg`](../dist/assets/uir-logo.svg). Its viewBox is 256 × 200 units:

Use the white form on dark surfaces and `src/assets/uir-logo-dark.svg` on light surfaces. Both versions preserve the blue and clay accent squares.

- The U and lowercase r each occupy a 100 × 100 unit square. Their strokes are 20 units thick.
- The I is 20 × 200 units, twice the height of either outer letter.
- The clear gaps between U–I and I–r are equal at 10 units.
- A 20 × 20 square in `--logo-blue` (`#2093e7`) sits at the top centre of the U, flush with its top edge.
- A 20 × 20 clay square sits flush with the bottom-right corner of the r.

Preserve these proportions, equal gaps and accent alignments when scaling or reproducing the mark. The circular hero treatment and its service label are separate from the standalone logo.

## Shared components

- `src/_includes/partials/header.njk` renders the UIR logo, responsive primary navigation and current-page state.
- `src/_includes/partials/footer.njk` renders a compact line with copyright, the pattern library link and “Rooted in County Armagh, Northern Ireland.”
- The home contact invitation links directly to the Contact page.
- `src/_includes/partials/service-card.njk` is the shared service-card component used on the home page and in the pattern library. Its content is maintained in `src/_data/serviceCards.js`; the pattern example renders the first service from that same data.
- `.button`, `.text-link`, `.section-kicker`, `.service-card`, `.offer-card` and `.portfolio-section` are shared styling patterns.
- Service pages keep the same sequence: introduction, what the service does, selected work, next step.
- The home page introduces the origin and all three areas before linking to each service page.

## Adding real portfolio entries

The service pages use a consistent selected-work card. UIR Access includes CIVIC UK; UIR Form includes the Mind Mesh Learning System. These summaries use the project details supplied by UIR. Add imagery or more outcome detail only when UIR has approved the materials for publication. UIR Studio's portfolio area remains ready for a confirmed project. Do not add invented testimonials, partner marks, outcomes or client details.

## Image handoff

The home, service and contact heroes use the approved standing-stone photograph with the brand mark in a circular treatment. The circle and service label are not part of the standalone logo. Use “Consulting” on Home and Contact, and the matching service name on Access, Form and Studio. Keep text contrast readable over the image, and preserve the site's image-free fallback colour.

## Change guidance

1. Prefer the existing token and component before adding a new one.
2. Keep shared structure in the templates under `src/_includes` and shared content in `src/_data`; keep visual rules and responsive behaviour in `src/css/site.css`.
3. Update this document and the live pattern page whenever a shared pattern changes.
4. Check the result at narrow (320 px), medium (768 px) and wide (1440 px) viewport widths, including 200% zoom and no horizontal scrolling.
5. Preserve skip navigation, landmarks, heading order, keyboard focus, reduced-motion support and readable contrast. Check keyboard-only navigation, mobile menu state, text resizing and link/button targets.
6. Verify normal text contrast at WCAG AA (4.5:1), large text and essential non-text indicators at 3:1, against each actual background.
