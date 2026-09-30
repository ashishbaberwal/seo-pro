<div align="center"><h3>Crawl-Smart Catalogue</h3><p>An SEO-ready e-commerce catalogue prototype for sustainable desk accessories. TypeScript + Next.js + Prisma + TailwindCSS.</p></div>

> **Class prototype — catalogue browsing only, transactions disabled.** All products, prices and content are fictional demo data written for coursework.

## 👋 Introduction

This is a browse-only catalogue of sustainable desk accessories (bamboo laptop stands, recycled paper organizers, cork desk mats, cable and lighting accessories) built for a technical-SEO mini-project: crawlable architecture, one-intent-per-page mapping, internal linking, structured data and Core Web Vitals measurement.

There is a single app, `apps/storefront` (dev port `7777`). There is no cart, checkout, wishlist, user account, or admin panel — anything transactional was removed on purpose.

## 🥂 Features

-  [x] [**Next.js 14**](https://nextjs.org) App Router and React Server Components.
-  [x] Custom dynamic `Sitemap.xml` generation (products, categories, blog, static routes) + `robots.txt` with sitemap reference.
-  [x] Category landing pages with clean slugs (`/categories/laptop-stands`).
-  [x] Product pages with specs, breadcrumbs and per-product metadata.
-  [x] Database-stored blogs powered by **MDX** templates.
-  [x] Prototype banner on every page; About/Contact pages stating the fictional nature.
-  [x] [**TailwindCSS**](https://tailwindcss.com/) for utility-first CSS.
-  [x] UI built with [**Radix**](https://www.radix-ui.com/) and stunning UI components, all thanks to [**shadcn/ui**](https://ui.shadcn.com/).
-  [x] Type-validation with **Zod** on the remaining write APIs.
-  [x] [**Next Metadata API**](https://nextjs.org/docs/api-reference/metadata) for SEO handling.
-  [ ] Comprehensive implementations for i18n.

## 🗂 Catalogue structure

```
 /                        home (hero, categories, featured, guides)
 /products                full catalogue with brand/category/availability filters
 /products/[productId]    product detail with specs
 /categories              all five sections
 /categories/[slug]       one page per category (one intent per page)
 /blog, /blog/[slug]      buying guides and comparisons (MDX)
 /about, /contact, /privacy
```

Public read APIs: `/api/products`, `/api/products/[productId]`.

## 👁‍🗨 Environment variables

Environment variables are stored in `.env` files. By default the `.env.example` file is included in source control and contains
settings and defaults to get the app running. Any secrets or local overrides of these values should be placed in a
`.env` file, which is ignored from source control.

Remember, never commit and store `.env` in the source control, just only `.env.example` without any data specified.

The catalogue needs only `DATABASE_URL` (PostgreSQL) and `NEXT_PUBLIC_URL` (canonical base URL used by the sitemap). Seed demo data with:

```sh
bun --env-file=.env.local prisma/seed.ts
```

You can [read more about environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

## 🏃‍♂️ Getting Started Locally

```sh
bun install
bun --env-file=.env.local prisma/seed.ts
bun run dev   # http://localhost:7777
```
