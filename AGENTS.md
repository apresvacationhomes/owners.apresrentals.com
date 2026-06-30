# AGENTS.md

Overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

The owners portal for Aprés Rentals (`owners.apresrentals.com`), a property management company for short-term rentals in mountain resort communities. The site is the landing page owners see, with a top-level "Communities" section that holds one page per community/property cluster.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/                          # Static assets (favicon, etc.)
├── src
│   ├── routes
│   │   ├── __root.tsx                # Root layout: site header, footer, global <head>
│   │   ├── index.tsx                 # Owners landing page (/)
│   │   ├── communities.tsx           # Layout route for everything under /communities
│   │   ├── communities.index.tsx     # /communities — index of all communities
│   │   └── communities.deer-crest.tsx # /communities/deer-crest — example community page
│   ├── router.tsx                    # TanStack Router setup
│   └── styles.css                    # Tailwind import + theme CSS variables + fonts
├── netlify.toml                      # Build command, publish dir, dev server settings
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Routing Convention — Adding a New Community Page

Routes use TanStack Router's flat (dot-notation) file-based routing. `communities.tsx` is the
layout route for the `/communities` segment; every file named `communities.<slug>.tsx` becomes
a page at `/communities/<slug>` automatically — no router config to touch.

To add a new community page (e.g. `owners.apresrentals.com/communities/aspen-grove`):

1. Create `src/routes/communities.aspen-grove.tsx`, modeled on `communities.deer-crest.tsx`.
2. Use `createFileRoute('/communities/aspen-grove')({ component: ... })`.
3. Add an entry to the `communities` array in `communities.index.tsx` and mark it `live: true`
   so it shows up as a clickable card instead of a "Coming soon" placeholder.

Deeper nesting (e.g. `/communities/deer-crest/maintenance`) follows the same pattern:
`communities.deer-crest.maintenance.tsx`.

## Key Concepts

### File-Based Routing (TanStack Router)

- `__root.tsx` — root layout wrapping all pages (header, footer, fonts, meta)
- `index.tsx` — route for `/`
- `communities.tsx` + `communities.*.tsx` — the `/communities` section described above

### Styling

- Tailwind CSS v4 utility classes throughout
- Theme tokens (palette, fonts) defined as CSS variables in `src/styles.css`
- Display font: Fraunces (serif). Body font: Archivo (grotesk sans). Both loaded via Google Fonts in `styles.css`.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Domain

This project is intended to be served at `owners.apresrentals.com`. Configure that hostname as
a custom domain (or domain alias) on the Netlify site once DNS is ready — no code change is
required for that step.
