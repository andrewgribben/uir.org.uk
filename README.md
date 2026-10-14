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

Shared layouts live in `src/_includes/`. Static assets, CSS and JavaScript live under `src/assets/`, `src/css/` and `src/js/`, then copy into `dist/` during the build. Site configuration is in `.openai/hosting.json`, which is copied into `dist/.openai/hosting.json` for hosting compatibility.

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

GitHub Pages deployment is configured in `.github/workflows/pages.yml`. The workflow builds the site and publishes the generated `dist/` directory.

In the GitHub repository settings, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**. After that one-time setting is in place, pushes to `main` deploy the site.

A custom domain and `CNAME` file are intentionally not configured yet, so this repository does not assume a production domain.

## Design system

Read [`docs/PATTERN_LIBRARY.md`](docs/PATTERN_LIBRARY.md) before changing shared components. The generated live reference is [the pattern library page](dist/pattern-library.html).

## Content to add

- Add real, approved examples to the selected-work area on each service page.
- Add the preferred public contact method.
- Confirm or revise the working names UIR Form and UIR Studio.
