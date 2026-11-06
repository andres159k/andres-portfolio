# Andrés Finol — Portfolio

Personal portfolio built as a **living case study**: a clean, Apple-inspired interface (light + dark), high-motion scroll storytelling and an editorial case-study engine.

> Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP · Lenis**

---

## Quick start

```bash
yarn install
yarn dev          # http://localhost:3000  → redirects to /en
```

### Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `yarn dev`         | Dev server (Turbopack)               |
| `yarn build`       | Production build                     |
| `yarn start`       | Run the production build             |
| `yarn lint`        | ESLint (flat config)                 |
| `yarn typecheck`   | `tsc --noEmit`, strict mode          |
| `yarn test`        | Vitest unit tests                    |
| `yarn format`      | Prettier write                       |

### Quality gates

```bash
yarn typecheck && yarn lint && yarn test && yarn build
```

---

## Architecture

```
app/
  [locale]/              # en (default) + es — all pages live here
    layout.tsx           # root layout: fonts, SEO, header/footer, providers
    page.tsx             # home
    work/page.tsx         # work index
    work/[slug]/page.tsx  # case study (SSG, one per project × locale)
    about/ contact/ privacy/ not-found.tsx
  sitemap.ts robots.ts
proxy.ts                 # locale routing (Next 16 "proxy" convention)
components/
  ui/                    # design-system primitives
  layout/                # header, footer, command palette, smooth scroll…
  sections/              # page sections + case study
content/projects.ts      # typed, bilingual case-study data
i18n/                    # locales, dictionaries, loader
lib/                     # cn, motion tokens, seo, analytics, site config
styles/                  # tokens.css + base.css + utilities.css
tests/                   # Vitest unit tests
proxy.ts
```

### Pages (24 static routes)

- `/{en,es}` — hero, stack marquee, selected work, stats, capabilities, contact CTA
- `/{en,es}/work` — full work index + other work
- `/{en,es}/work/[slug]` — 5 case studies per locale
- `/{en,es}/about` — bio, skills, experience timeline
- `/{en,es}/contact` — form (mailto) + direct channels
- `/{en,es}/privacy`

---

## Design system — Apple-inspired

A neutral, high-contrast system with a single accent and full light/dark theming:

- **Palette:** neutral `ink` scale (white → black), a single Apple-blue accent (`#0071e3` in light, `#2997ff` in dark), plus state colors.
- **Theming:** light by default; dark via `data-theme="dark"` on `<html>` (system-aware, persisted in `localStorage`, no flash on load).
- **Surfaces:** frosted `glass`, `glass-strong`, `glass-subtle`, `glass-sheen` (backdrop blur + soft shadow).
- **Semantic aliases:** `--color-bg`, `--color-foreground`, `--color-muted`, `--color-accent`…
- **Motion tokens:** `lib/motion.ts` (`EASE`, `DURATION`, variants) as the single source of truth.
- **A11y:** skip link, `:focus-visible`, `prefers-reduced-motion` (Lenis and animations both respect it).

Edit tokens in `styles/tokens.css`.

### Narrative

The copy follows one thesis: **interfaces that feel expensive — and convert.** Three pillars: **Convert** (growth, checkout, A/B), **Craft** (motion, design systems), **Scale** (performance as a product constraint, accessibility, i18n). Performance and Lighthouse scores appear as evidence inside case studies, not as headline metrics.

### Motion

- **Lenis** smooth scroll (`components/layout/SmoothScroll.tsx`), disabled under reduced motion.
- **Framer Motion** for reveals, page transitions, magnetic buttons, animated counters.
- **GSAP** is available for heavier scroll timelines if needed.

---

## Editing content

- **Projects / case studies:** `content/projects.ts` — bilingual (`copy.en` / `copy.es`), typed. Add a project to the array and it automatically gets a page, a sitemap entry and a command-palette entry. Each project can define a `cover` and a `gallery` (images live in `public/work/<slug>/`); projects without images fall back to a typographic cover.
- **Copy / UI strings:** `i18n/dictionaries/{en,es}.ts`. The `es` dictionary is typed against `en`, so a missing key fails `yarn typecheck`.
- **Identity / socials:** `lib/site.ts` (update `url` and `email` before deploying).

### Adding a language

1. Add the locale to `i18n/config.ts`.
2. Add a dictionary in `i18n/dictionaries/`.
3. Register it in `i18n/get-dictionary.ts`.

---

## SEO & performance

- Metadata API with per-page titles, canonical URLs and `hreflang` alternates.
- JSON-LD `Person` + `WebSite`, `sitemap.xml`, `robots.txt`.
- All routes prerendered (`generateStaticParams`) for fast, static delivery; images optimised on the fly.
- Real project screenshots in `public/work/` served through `next/image` (auto AVIF/WebP + resizing); typographic covers as fallback.

---

## Deployment

Built to deploy anywhere Next.js runs (Vercel recommended). Set `site.url` in `lib/site.ts` to your production domain so canonical URLs, sitemap and JSON-LD are correct.

---

## Tests

Vitest covers utility behavior, content integrity (unique slugs, bilingual completeness, metric labels) and dictionary parity between locales.

```bash
yarn test
```
