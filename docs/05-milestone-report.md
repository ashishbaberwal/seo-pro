# 05 — Milestone I Report: Research, Strategy & Cloud Deployment

*Crawl-Smart Catalogue · October 2026 · repo: `ashishbaberwal/seo-pro` (`master`)*

## 1. What was delivered

- **Strategy docs:** `docs/01` niche/audience/problem · `docs/02` keyword→LSI→
  intent→URL map (10 products, 5 categories, 3 guides) · `docs/03` competitor
  & SERP snapshot (15+ real competitors with price bands) · `docs/04`
  architecture, URL/status map and roadmap.
- **Functional deployment:** https://seo-pro-ashishbaberwal.vercel.app
  (custom domain live; Vercel DNS `ns1/ns2.vercel-dns.com`; auto-SSL, HTTPS 200).
- **SEO implementation:** slug product URLs, edge 308s from legacy id URLs,
  true 404s, static prerendering of all 18 detail pages, dynamic sitemap +
  robots, self-hosted OG image, canonical `metadataBase`, Analytics/Speed
  Insights mounted.
- **Process evidence:** GitHub Actions CI green (`bun install` + `tsc`),
  Vercel auto-deploys `master` on push.

## 2. Measured evidence (Lighthouse lab, 2026-10-01, production URLs)

| Page | Perf (mob) | SEO | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|
| Home (desktop) | 98 | 100 | 0.6 s | 0.9 s | 10 ms | 0 |
| Home (mobile, simulated) | 93 | 100 | 0.9 s | 2.3 s | 270 ms | 0 |
| Product (mobile, simulated) | 98 | 100 | 0.9 s | 2.4 s | 30 ms | 0 |

Method: `lighthouse` CLI against live production URLs (PSI API was
rate-limited); mobile = simulated throttling, i.e. lab not field data. Field
CWV is now collecting via Speed Insights.

## 3. Verification checklist (reproducible)

- `curl -sI …/products/bamboo-fold-laptop-stand-1316-inch` → 200
- legacy cuid URL → **308** to slug URL · bogus slug → **404** + branded page
- `/sitemap.xml` lists all products/categories/blogs/static routes · `/robots.txt` references sitemap
- `/api/products` returns 10 seeded products · DB: 10 products / 5 categories / 3 blogs
- `gh run list` → latest CI **success** · `git log` → clean linear history on `master`

## 4. Demonstration script (5 min)

1. Open `/` — category cards (one intent each) + featured + guides.
2. Open a category → filter `/products` → open a product: breadcrumbs, spec
   table, per-product metadata.
3. Show `/sitemap.xml` and a 308 redirect (legacy URL) in DevTools network tab.
4. Show a guide linking up to its category (internal-linking flow).
5. Show Actions tab (green CI) + Vercel production deployment + Lighthouse SEO 100.

## 5. Known limitation

Rubric item 5 names VPS + Cloudflare + WordPress; this build is Vercel +
Vercel DNS + Next.js (see `04-architecture-roadmap.md` §4 and
`06-cloudflare-runbook.md` for the executable Cloudflare migration). Everything
that item functionally requires (public deployment, managed DNS, valid SSL) is
demonstrated above — only the named stack differs, pending instructor ruling.

## 6. Post-report updates (2026-10-01)

- Canonical host consolidated to `https://intlipredictoai.tech` (sitemap,
  robots, canonicals, OG, JSON-LD all match the Search Console property).
- GA4 live (`G-560HC9FY3H` firing on all pages, verified in HTML).
- Search Console property verified via meta tag; `sitemap.xml` submitted.
- Structured data live: Organization, WebSite, Product+Offer, BreadcrumbList,
  ItemList, BlogPosting (verified in rendered HTML).
- One H1 per page; canonical link on all 10 page types; 4th guide
  (`bamboo-vs-plastic-desk-accessories`) published.
