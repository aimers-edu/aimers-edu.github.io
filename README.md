# aimers-edu.github.io

Website for AIMERS education coaching, built with Next.js and exported as a static site for GitHub Pages.

## Development

Install dependencies, then run the local Next.js server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Static Build

This project is configured with `output: "export"` in `next.config.ts`, so a production build writes static files to `out/`.

```bash
npm run build
```

Publish the generated `out/` folder with GitHub Pages. The `public/.nojekyll` file is included so GitHub Pages serves Next.js assets under `_next/`.

## Assets

Public images live in `public/images/` and are referenced from the app as `/images/<file>`.
