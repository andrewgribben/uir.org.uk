# ÚIR Consulting website

Static website for ÚIR Consulting Ltd. The first draft introduces the parent brand and three service areas: UIR Access, UIR Form and UIR Studio.

The site is generated with [Eleventy](https://www.11ty.dev/) from Markdown page sources with YAML front matter. Generated files are written to `dist/` for static hosting and GitHub Pages.

## Pages

- `src/index.md` -> `dist/index.html` — company overview and service directory
- `src/access.md` -> `dist/access.html` — UIR Access
- `src/form.md` -> `dist/form.html` — UIR Form
- `src/studio.md` -> `dist/studio.html` — UIR Studio
- `src/contact.md` -> `dist/contact.html` — contact information
- `src/pattern-library.md` -> `dist/pattern-library.html` — shared design system examples

Shared layouts live in `src/_includes/`. Static assets, CSS and JavaScript live under `src/assets/`, `src/css/` and `src/js/`, then copy into `dist/` during the build. Local hosting configuration can be kept in `.openai/hosting.json`; it is ignored by Git and is not included in the public site build.

## Local development

Install dependencies:

```sh
npm install
```

Run a local development server with rebuilds:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Serve the generated `dist/` directory over HTTP:

```sh
npm run serve
```

## GitHub Pages deployment

GitHub Pages serves the prebuilt files from the `gh-pages` branch. Build and publish locally with:

```sh
npm run deploy:pages
```

The command builds Eleventy, copies `dist/` to `gh-pages`, writes `.nojekyll` and `CNAME`, and pushes that branch. Source changes go to `main`; publishing the site is a separate, explicit step. The repository's Pages source must be set to **Deploy from a branch**, `gh-pages`, `/`.

## Design system

Read [`docs/PATTERN_LIBRARY.md`](docs/PATTERN_LIBRARY.md) before changing shared components. The generated live reference is [the pattern library page](dist/pattern-library.html).

## Adding project examples

Add one Markdown file per client or product example under `src/projects/access/`, `src/projects/form/` or `src/projects/studio/`. See [`docs/ADDING_PROJECTS.md`](docs/ADDING_PROJECTS.md) for the fields, ordering and rebuild steps.

## Content to add

- Add real, approved examples to the selected-work area on each service page.
- Add the preferred public contact method.
- Confirm or revise the working names UIR Form and UIR Studio.
