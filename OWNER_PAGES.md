# owners.apresrentals.com · owner pages

Owner-facing pages for APRÈS Vacation Homes. Plain HTML, no build step.

**Where it lives:** GitHub repo `apresvacationhomes/owners.apresrentals.com`, folder `site/`. Netlify project `cerulean-chimera-734745` builds from `main` and publishes `site/` (see `netlify.toml`). A merge to `main` is a production deploy; a pull request gets a Deploy Preview first.

**Do not remove:** `site/communities/` and `site/assets/styles.css`, `apres-logo.png`, `favicon.ico`. They serve the Deer Crest direct-mail campaign page (`/communities/deer-crest`), which printed QR codes point to.

Classification: landing page `Owner Communications · Signature · Responsive Web`; report pages `Owner Communications · Executive · Responsive Web`. Every page passes
`python scripts/brand_check.py <page> --medium responsive-web --artifact marketing` (apres-design-standard skill) before it merges.

## Layout (inside `site/`)
- `index.html` — the single landing page: typographic hero with the brand promise, purpose, the five pillars, owner support line. Non-seasonal on purpose; no links out.
- `market-report/<season>-<year>/index.html` — one page per edition: title block, Save PDF and Print, then the report pages as images.
- `market-report/<season>-<year>.pdf` — the PDF for that edition (what Save PDF downloads).
- `market-report/<season>-<year>/pages/p-N.jpg` — report pages at 170 dpi (`pdftoppm -jpeg -r 170 -jpegopt quality=86,progressive=y <pdf> pages/p`).
- `assets/fonts/` bundled fonts (OFL) · `assets/logo/` registry SVGs (byte-identical to portal.apresrentals.com/brand/) · `assets/og-owners.jpg` share image.
- `_redirects` — short email-friendly forms (`/market-report-autumn-2026`) to the real path.
- `_headers` — noindex everywhere, long cache on fonts and report page images.

## Adding the next edition
1. Copy `market-report/autumn-2026/` to `market-report/<season>-<year>/`.
2. Add the PDF at `market-report/<season>-<year>.pdf` and render its pages into `pages/`.
3. Edit `index.html`: title, eyebrow (edition number), lead, data-as-of date, page count and alt text, the `download` filename, the og:image.
4. Add the short redirect line to `_redirects`.
5. Brand check, look at 1280 and 390, open a pull request, check the Deploy Preview, merge.

Owner support line 435-266-1101 (call or text). Office: 1960 Sidewinder Drive, Suite 104, Park City, Utah 84060.
