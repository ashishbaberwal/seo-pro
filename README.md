<div align="center"><h3>Crawl-Smart Catalogue</h3><p>An SEO-ready e-commerce catalogue prototype for sustainable desk accessories. TypeScript + Next.js + Prisma + TailwindCSS.</p></div>

> **Class prototype — catalogue browsing only, transactions disabled.** All products, prices and content are fictional demo data written for coursework.

Live: **https://seo-pro-ashishbaberwal.vercel.app** (also served on a custom domain).

## 👋 Introduction

This is a browse-only catalogue of sustainable desk accessories (bamboo laptop stands, recycled paper organizers, cork desk mats, cable and lighting accessories) built for a technical-SEO mini-project: crawlable architecture, one-intent-per-page mapping, internal linking, structured data and Core Web Vitals measurement.

There is a single app, `apps/storefront` (dev port `7777`). There is no cart, checkout, wishlist, user account, or admin panel — anything transactional was removed on purpose. The Prisma schema still carries the legacy shop tables; only Brand, Product, Category, Author, Blog and Banner are used.

## 🥂 Features

-  [x] [**Next.js 16**](https://nextjs.org) App Router and React Server Components.
-  [x] SEO-friendly slug product URLs (`/products/bamboo-fold-laptop-stand-1316-inch`) with server-side 308 redirects from legacy id URLs and true 404s for unknown slugs.
-  [x] Static prerendering (`generateStaticParams`) for all product, category and blog pages; dynamic sitemap + `robots.txt`.
-  [x] Category landing pages with clean slugs (`/categories/laptop-stands`).
-  [x] Product pages with specs, breadcrumbs and per-product metadata.
-  [x] Self-hosted Open Graph image (`/opengraph-image`) and `metadataBase` canonicals.
-  [x] Database-stored blogs powered by **MDX** templates.
-  [x] Vercel Analytics + Speed Insights for Core Web Vitals measurement.
-  [x] Prototype banner on every page; About/Contact pages stating the fictional nature.
-  [x] [**TailwindCSS v4**](https://tailwindcss.com/) for utility-first CSS.
-  [x] UI built with [**Radix**](https://www.radix-ui.com/) primitives and [**shadcn/ui**](https://ui.shadcn.com/) components.
-  [x] [**Next Metadata API**](https://nextjs.org/docs/api-reference/metadata) for SEO handling.
-  [x] GitHub Actions CI (`bun install` + `tsc --noEmit`); Vercel auto-deploys `master`.
-  [ ] Comprehensive implementations for i18n.

## 🗂 Catalogue structure

```
/                       home (hero, categories, featured, guides)
/products               full catalogue with brand/category/availability filters
/products/[slug]        product detail with specs (legacy cuid URLs 308 here)
/categories             all five sections
/categories/[slug]      one page per category (one intent per page)
/blog, /blog/[slug]     buying guides and comparisons (MDX)
/about, /contact, /privacy
```

Public read APIs: `/api/products`, `/api/products/[productId]` (id-based, unchanged).

## 👁‍🗨 Environment variables

Environment variables are stored in `.env` files. `.env.example` is committed and lists every key; real values live in the untracked `.env.local` (and in Vercel Project Settings for production).

The catalogue needs `DATABASE_URL` (PostgreSQL, e.g. Neon) and `NEXT_PUBLIC_URL` (canonical base URL used by the sitemap/robots — set to the production URL). Seed demo data with:

```sh
bun --env-file=.env.local prisma/seed.ts
```

The seed is idempotent (upserts by slug/title) and uses the self-hosted images in `public/images/`. Re-running it never duplicates rows.

You can [read more about environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

## 🏃‍♂️ Getting Started Locally

```sh
bun install
bun --env-file=.env.local prisma/seed.ts
bun run dev        # http://localhost:7777
bun run typecheck  # tsc --noEmit
bun run build      # production build (needs DATABASE_URL for prerendering)
```
