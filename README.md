# Sujata Pokhrel — Portfolio

A one-page scrapbook-style portfolio built with React, Vite, TypeScript and Tailwind CSS. It is a front-end only site; there is no backend to run.

## Setup
1. Install Node.js 20+ and pnpm (`npm i -g pnpm`).
2. `pnpm install`
3. `pnpm dev` — starts the dev server (set `WEB_PORT=3000` to choose a port).
4. `pnpm build` — creates the production build in `dist/`; host it on any static host.

## Structure
- `src/sections/` — Hero, About, Skills, Experience, Projects, Design, Contact
- `src/components/` — Tape, Star decorations
- `src/lib/` — smooth scroll and reveal-on-scroll helpers
- `public/img/` — images (cartoon portrait has a transparent background)
- `index.html` — page title and SEO tags

## Editing content
All text is inside the files in `src/sections/`. Replace the cartoon at `public/img/cartoon.png` to change the portrait.
