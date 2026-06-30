# APRÈS — Deer Crest Campaign Site

A short, plain-English guide for reviewing and publishing this site. You do **not**
need to be a developer to follow it. Take it one step at a time.

---

## 1. What was built

A small, fast, three-page static website for the Deer Crest direct-mail campaign.
It is plain HTML and CSS — there is **no app to build, no Node, no React**. It loads
instantly, which matters because most people arrive by scanning the QR code on the
letter with their phone.

Everything lives in a new top-level folder named **`site/`**:

```
site/
├── index.html                      → the root brand page
├── communities/
│   ├── index.html                  → the communities directory
│   └── deer-crest/
│       └── index.html              → the Deer Crest campaign page
└── assets/
    ├── styles.css                  → all the styling for all three pages
    ├── apres-logo.png              → the approved APRÈS logo
    └── favicon.ico                 → the little browser-tab icon
```

## 2. The three URLs

Once published, these are the live addresses:

| URL | What it is |
|-----|------------|
| `https://owners.apresrentals.com/` | Quiet brand cover page (logo + "Park City, Utah") |
| `https://owners.apresrentals.com/communities` | Directory with the Deer Crest card |
| `https://owners.apresrentals.com/communities/deer-crest` | **The campaign page** — where the QR code points |

## 3. The old application is kept as a backup

The previous TanStack/React app (the `src/`, `public/`, `package.json`,
`vite.config.ts`, etc. files) is **still in the repository, untouched, as a backup**.
It is simply no longer published. Netlify now publishes only the `site/` folder.

## 4. Netlify publishes only `site/`

The `netlify.toml` file has been updated so Netlify:

- publishes only the `site/` folder,
- runs **no build step** (just prints a harmless message),
- adds sensible security headers,
- keeps the Deer Crest page out of Google's search results.

There is nothing for you to configure here — it is already set.

---

## 5. Preview it on your own computer (optional but recommended)

You already have Python 3 installed. In Terminal, from inside the project folder, run:

```bash
python3 -m http.server 8000 --directory site
```

Then open these in your browser:

- http://localhost:8000/
- http://localhost:8000/communities/
- http://localhost:8000/communities/deer-crest/
- http://localhost:8000/communities/deer-crest/?utm_source=thanksio&utm_medium=direct_mail&utm_campaign=deer_crest_wave_1

When you're done, go back to Terminal and press **Ctrl + C** to stop the preview.

## 6. Review the files

Open the files in `site/` in any text editor to read the exact wording, or just
review them in the local preview above. Nothing is hidden — what you see is what
ships.

---

## 7. Save (commit) the changes to the `deer-crest` branch

The work is currently **uncommitted** so you can review it first. When you're happy,
save it to the branch:

```bash
git add site/ DEPLOYMENT_README.md netlify.toml
git commit -m "Add static Deer Crest campaign site"
```

> The old app files are intentionally left in place; the commands above only stage
> the new and changed files.

## 8. Publish the branch to GitHub

```bash
git push -u origin deer-crest
```

This uploads the `deer-crest` branch to GitHub. It does **not** touch `main` or
production.

## 9. Open a Pull Request (deer-crest → main)

1. Go to the repository on GitHub.
2. You'll see a prompt to "Compare & pull request" for `deer-crest` — click it.
3. Make sure the base is **`main`** and the compare branch is **`deer-crest`**.
4. Click **Create pull request**.

## 10. Get a free Netlify Deploy Preview (no effect on production)

As soon as the Pull Request exists, Netlify automatically builds a **Deploy Preview**
— a private, temporary copy of the site at its own URL. Your live site is **not**
affected. Netlify posts the preview link as a comment on the Pull Request (and on the
"Deploys" tab in your Netlify dashboard).

## 11. Do not merge until the preview is approved

**Important:** leave the Pull Request open until you have fully tested the Deploy
Preview (next step). Merging is what sends it to production — only do that once you're
satisfied.

---

## 12. Test the Deploy Preview URLs

On the preview link Netlify gives you, check each page:

- `<preview-url>/`
- `<preview-url>/communities`
- `<preview-url>/communities/deer-crest`

## 13. Test the campaign (UTM) version

- `<preview-url>/communities/deer-crest?utm_source=thanksio&utm_medium=direct_mail&utm_campaign=deer_crest_wave_1`

It should look **exactly** the same as the plain Deer Crest page — the tracking tags
in the address are just for analytics and do not change the page.

## 14. Test the "Schedule a Private Conversation" button

Click it. It should open your Google Calendar appointment scheduling page in a new
tab. (It's the long calendar.google.com link.)

## 15. Test the "Text Cameron Directly" button (use a phone)

On a phone, tap it. It should open the phone's text-message app with **435-800-9801**
already filled in as the recipient. (On a computer with no messaging app, nothing may
happen — that's normal; always confirm on a phone.)

## 16. Test the email link

In the footer/contact area of the Deer Crest page, tap **cameron@apresrentals.com**.
It should open a new email to you with the subject line **"Deer Crest Home"** already
filled in.

---

## 17. How to roll back if needed

Two easy options:

- **Restore the previous version in Netlify:** open your Netlify site → **Deploys** →
  find the earlier working deploy → **"Publish deploy"**. This instantly puts the old
  version back live.
- **Revert the merge in Git:** if you already merged, you can revert the merge commit
  on `main` and push, which undoes the change.

## 18. ⚠️ Do not point thanks.io at the new page yet

Keep thanks.io pointed at whatever it currently uses until you have published to
**production** and tested the real live page end-to-end (all three URLs, both buttons,
and the email link) on an actual phone. Only switch the QR destination after that.

## 19. The final thanks.io destination (for later)

When everything is tested and live, set the QR / thanks.io link to:

```
https://owners.apresrentals.com/communities/deer-crest?utm_source=thanksio&utm_medium=direct_mail&utm_campaign=deer_crest_wave_1
```

---

### Quick summary

1. Review locally (steps 5–6).
2. Commit and push the `deer-crest` branch (steps 7–8).
3. Open the Pull Request and let Netlify build a Deploy Preview (steps 9–10).
4. Test the preview thoroughly (steps 12–16).
5. Only then merge to publish, and only then update thanks.io (steps 11, 18–19).
