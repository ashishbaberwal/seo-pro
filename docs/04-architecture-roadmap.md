# 04 — Project Design & SEO Implementation Roadmap

*Milestone I, item 4 · Crawl-Smart Catalogue · October 2026*

## 1. Site architecture (built as designed)

```
/                          home: hero → 5 category cards → featured → guides
/products                  catalogue + filters (brand/category/available, query-string only)
/products/[slug]           ★ static product detail (specs, breadcrumbs, metadata)
/categories                all 5 sections
/categories/[slug]         ★ static category landing (one intent per page)
/blog, /blog/[slug]        ★ static MDX guides → link up to categories
/about, /contact, /privacy static trust pages
/api/products              public read API (powers edge redirect lookup)
```

Internal-linking flow: **guides → categories → products**, plus breadcrumbs on
every product page and category cards on home. No orphan pages: every indexable
URL is reachable within 2 clicks of `/` and listed in `/sitemap.xml`.

## 2. URL & status-code map (implemented)

| Pattern | Example | Status |
|---|---|---|
| `/products/[slug]` | `/products/large-cork-desk-mat-90-x-40-cm` | 200, static HTML |
| legacy `/products/<cuid>` | `/products/cmuoj1oev…` | **308** → slug URL (edge proxy) |
| unknown slug | `/products/nope` | **404** + branded page (`dynamicParams: false`) |
| `/sitemap.xml`, `/robots.txt` | dynamic, DB-driven | 200 |
| legacy `/product` | — | 301 → `/products` |

## 3. Roadmap status

| Phase | Item | State |
|---|---|---|
| Research | niche/problem (doc 01), keyword map (doc 02), SERP work (doc 03) | ✅ done |
| Design | this architecture doc, URL map | ✅ done |
| Build | Next 16 + Prisma 7 + Neon Postgres; slug URLs; static prerender; sitemap/robots; OG image; Analytics/Speed Insights | ✅ done, live |
| Deploy | Vercel production + custom domain + auto-SSL; GitHub Actions CI; auto-deploy on `master` | ✅ done, live |
| Measure | Lighthouse lab audit (doc 05); field CWV via Speed Insights (collecting) | ✅ lab done / field pending traffic |
| Milestone II (planned) | structured data (Product/BreadcrumbList/FAQ JSON-LD), `llms.txt`, review/rating content, Search Console + indexing | ⬜ next |

## 4. Deployment note (rubric item 5)

The rubric's reference stack is VPS + Cloudflare + WordPress. This project was
implemented on **Vercel (hosting/CDN/auto-SSL) + Vercel DNS + Neon Postgres**
with a custom domain — functionally equivalent for "deployed, secure, DNS
managed" (HTTPS 200 verified, see doc 05), but **not** a VPS, **not**
Cloudflare-fronted, and **not** WordPress. If the examiner requires that exact
stack, a WordPress-on-VPS track must be added (see report §6).
