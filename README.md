# Aprés Rentals — Owners Portal

The landing page and community resource hub for `owners.apresrentals.com`, the portal Aprés
Rentals' property owners use to check statements, bookings, and community-specific information.

## Structure

- `/` — owners landing page with an overview of services and portfolio stats.
- `/communities` — index of every community Aprés Rentals manages properties in.
- `/communities/deer-crest` — example community page (HOA contacts, parking, access rules).
  Use this as the template for additional community pages as they're added.

## Tech

Built with [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) and
Tailwind CSS 4, deployed on Netlify.

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` (or via `netlify dev` for full Netlify feature
emulation).

## Adding a community page

See the "Routing Convention" section in `AGENTS.md` — new community pages are a single new
route file plus one entry in the communities list.
