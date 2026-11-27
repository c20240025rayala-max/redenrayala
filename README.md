# Reden Rayala Portfolio

A static portfolio site built with Astro, Tailwind CSS, and GSAP.

## Development

```sh
npm install
npm run dev
```

The local development server runs at `http://127.0.0.1:5501`.

## Validation and build

```sh
npm run astro -- check
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Project structure

```text
public/                 Static assets
src/
  components/           Shared UI and page sections
  layouts/              Shared page layouts
  pages/                Astro routes
  scripts/              Client-side behavior and animations
  styles/               Global styles
astro.config.mjs        Astro and Tailwind configuration
vercel.json             Vercel build configuration
```

## Deploy to Vercel

Import the repository with the project root set to the repository root. Vercel uses
`npm run build` and publishes the generated `dist/` directory.
