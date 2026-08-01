# ADS Opportunity Map

Private single-page strategy map for ADS. Built with The AGNTCY design language for screen-share walkthroughs.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Develop

```bash
npm install
npm run dev
```

## Content

All copy and TOC structure live in [`src/content/opportunity-map.ts`](src/content/opportunity-map.ts).

Brand tokens: [`src/app/globals.css`](src/app/globals.css) and [`src/lib/brand.ts`](src/lib/brand.ts).

## Assets

Drop real website screenshots into `public/ads/` when available. The before/after slider and portal frames ship with polished mocks until then.

## Privacy

This page is a private artefact. Deploy on a private Vercel project and/or an unguessable URL. Enable Vercel Deployment Protection before sharing. `robots` is set to noindex.
