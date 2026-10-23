# alzureiqi.dev

Source for my personal site, **[alzureiqi.dev](https://alzureiqi.dev)**.

## Stack

- Next.js 14 (App Router, static export)
- Tailwind CSS
- Newsreader, DM Sans, Geist Mono
- GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # writes out/ (plus .nojekyll and CNAME)
```

One-page layout (`app/page.tsx`); /experience/, /projects/ and /about/ redirect to its sections. Content lives in `lib/content.ts` and `lib/site.ts`. Design notes: `docs/design/design-direction.md`. Don't describe the day job (employer, team, dates, duties).

## Deploy

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).
