# 01 — Niche, Target Audience & SEO Problem Identification

*Milestone I, item 1 · Crawl-Smart Catalogue · October 2026*

## 1. Niche

**Sustainable desk accessories for small study spaces in India.** Five catalogue
sections, each one a distinct product niche:

| Section | Slug | Example products |
|---|---|---|
| Bamboo Laptop Stands | `/categories/laptop-stands` | Fold-flat bamboo stand, riser shelf with phone dock |
| Recycled Desk Organizers | `/categories/desk-organizers` | A4 drawer organizer, pen & gadget caddy |
| Cork Desk Mats | `/categories/desk-mats` | 90×40 cm full-desk mat, 60×30 cm half-desk mat |
| Cable Management | `/categories/cable-management` | Bamboo cable box + clips, under-desk tray |
| Desk Lighting | `/categories/desk-lighting` | USB rechargeable bamboo lamp, clip-on LED light |

The niche is deliberately narrow: eco-material (bamboo, cork, recycled board)
× desk-accessory × Indian hostel/home-desk context. Narrow enough that a new
domain can plausibly rank for long-tail queries (see `02-keyword-map.md`),
broad enough for 10 products, 5 category pages and 3 guides.

## 2. Target audience

Primary: **Indian college/hostel students (18–24)** setting up a ~90 cm study
desk with one wall socket, warden inspections, and a ₹500–₹2,000 per-item
budget. Secondary: work-from-home buyers in small apartments with the same
space constraints.

Audience evidence baked into the catalogue: INR pricing, hostel vocabulary
("warden rounds", "power cuts during exam week", "checkout-safe"), no-drill /
reversible products, and guides written for single-socket rooms.

## 3. SEO problem identification

New domains in this space face four concrete problems, each mapped to a
site feature that addresses it:

1. **Crawlability on a thin catalogue.** 10 products cannot earn crawl budget
   with faceted/filter spaghetti URLs. → One URL per entity: `/products/[slug]`,
   `/categories/[slug]`, `/blog/[slug]`; filters live in query strings that are
   never linked and never enter the sitemap.
2. **Keyword cannibalisation.** "desk mat" could rank the home, category and
   product pages against each other. → One-intent-per-page mapping
   (`02-keyword-map.md`): category pages own *browse/comparison* intent,
   product pages own *transactional* intent, guides own *informational* intent.
3. **Zero authority vs marketplaces.** Amazon, Flipkart, IKEA and IndiaMART
   dominate head terms (see `03-competitor-serp.md`). → Compete on long-tail
   specificity (material + use-case + audience modifiers) instead of head terms.
4. **Core Web Vitals on image-heavy catalogue pages.** → Static prerendering
   of all detail pages, self-hosted optimized images, zero blocking third
   parties. Measured lab results in `05-milestone-report.md`
   (mobile Performance 93–98, SEO 100, CLS 0).
