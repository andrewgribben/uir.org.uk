# Adding client and product examples

The Access, Form and Studio pages build their **Selected work** cards from one Markdown file per example. Add a file to the matching folder:

| Page | Folder | Example type |
| --- | --- | --- |
| UIR Access | `src/projects/access/` | Accessibility client or engagement |
| UIR Form | `src/projects/form/` | 3D modelling, print management or physical product |
| UIR Studio | `src/projects/studio/` | App, website or digital product |

Use a lowercase, hyphenated filename, such as `src/projects/studio/example-product.md`. Create the service folder if it does not exist yet; Studio has no published entries at present. The filename is for editors; the title and card order come from front matter.

## Add a card

Create a Markdown file with this structure:

```md
---
layout: false
permalink: false
order: 10
index: STUDIO / 01
eyebrow: WEBSITE DESIGN & DEVELOPMENT
title: Example client or product
href: https://example.com/
linkLabel: Visit Example
---

Write a short, factual description of the work here. Keep it to one paragraph for the current card design.
```

The folder determines which page displays the card. The page displays entries in ascending `order`. Use increments of 10 (`10`, `20`, `30`) so another card can later be placed between existing entries. Update `index` to match the service and display position, for example `FORM / 02`.

The front matter fields are:

- `layout: false` and `permalink: false` keep the entry as card data rather than publishing it as a separate page.
- `order` controls the card order.
- `index` is the small label at the top of the card.
- `eyebrow` is the category label.
- `title` is the client or product name.
- `href` and `linkLabel` define the card link.
- The Markdown body is the card description.

If a link should not be shown, omit `href` and `linkLabel` only after updating the shared card template to support cards without links. For now, each project card needs a destination.

## Edit or remove an example

Edit the matching file to update its description or card details. To remove a card, delete its source Markdown file. The `dist/` copy is generated; don’t edit the built HTML directly.

Only publish details approved for public use. Use confirmed client names, project descriptions, links and outcomes; do not add confidential details, unapproved logos, testimonials or claims.

For Access, describe the confirmed client or accessibility engagement. For Form, describe the modelling, print management or physical product work. For Studio, describe the website, app or other digital product and ÚIR’s part in it. Keep descriptions factual and specific to the work being shared.

## Rebuild and preview

From the repository root, run:

```sh
npm run build
npm run serve
```

Open `http://127.0.0.1:8080/` and check the relevant service page. The build writes the finished static site to the tracked `dist/` folder.

To publish the updated site on GitHub Pages, run `npm run deploy:pages` from the repository root. This builds locally and pushes the generated site to `gh-pages`; it does not run the Eleventy build in GitHub Actions.

## Current entries

- Access: `src/projects/access/civic-uk.md`
- Form: `src/projects/form/mind-mesh-learning-system.md`
- Studio: no published examples yet
