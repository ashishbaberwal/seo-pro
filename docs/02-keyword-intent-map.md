# 02 — Keyword Research, LSI & Search Intent Mapping

*Milestone I, item 2 · Crawl-Smart Catalogue · October 2026*

Seed keyword universe: material + product + modifier combinations observed in
competitor titles/descriptions (Amazon.in, IKEA India, eco-D2C stores) during
SERP research, October 2026. Every keyword below is implemented — either in a
page's `keywords[]` metadata, its title/description copy, or a guide.

Intent key: **T** = transactional (buy/price) · **C** = commercial/browse
(best/compare) · **I** = informational (how/what) · **N** = navigational.

## Category 1 — Laptop stands → `/categories/laptop-stands` (owns C)

| Primary keyword | LSI / variants | Intent | Target URL |
|---|---|---|---|
| bamboo laptop stand | foldable laptop stand, ergonomic laptop riser, laptop stand for small desk | C/T | category + `/products/bamboo-fold-laptop-stand-1316-inch` |
| laptop riser shelf | bamboo monitor riser, desk riser with phone dock | C | category + `/products/bamboo-riser-shelf-with-phone-dock` |

## Category 2 — Desk organizers → `/categories/desk-organizers` (owns C)

| Primary keyword | LSI / variants | Intent | Target URL |
|---|---|---|---|
| recycled desk organizer | paper drawer organizer, A4 desk tray, plastic-free organizer | C/T | category + `/products/recycled-paper-drawer-organizer-a4` |
| pen holder / desk caddy | recycled pen stand, gadget organizer | T | `/products/recycled-pen-and-gadget-caddy` |

## Category 3 — Desk mats → `/categories/desk-mats` (owns C)

| Primary keyword | LSI / variants | Intent | Target URL |
|---|---|---|---|
| cork desk mat | large desk mat, natural desk pad, eco desk mat | C/T | category + `/products/large-cork-desk-mat-90-x-40-cm` |
| small desk mat | laptop desk pad, roll-up desk mat | T | `/products/small-cork-desk-mat-60-x-30-cm` |

## Category 4 — Cable management → `/categories/cable-management` (owns C)

| Primary keyword | LSI / variants | Intent | Target URL |
|---|---|---|---|
| cable management box | bamboo cable organizer, hide charger cables | C/T | category + `/products/bamboo-cable-box-with-clips-set-of-8` |
| under desk cable tray | cable management tray, no-drill cable organizer | C | `/products/under-desk-bamboo-cable-tray` |

## Category 5 — Desk lighting → `/categories/desk-lighting` (owns C)

| Primary keyword | LSI / variants | Intent | Target URL |
|---|---|---|---|
| bamboo desk lamp | rechargeable study lamp, LED desk light for hostel | C/T | category + `/products/usb-rechargeable-bamboo-desk-lamp` |
| clip on study light | LED reading light, hostel desk light | T | `/products/clip-on-led-study-light` |

## Guides → `/blog/[slug]` (own I, support C pages)

| Guide | Query pattern | Intent | Links to |
|---|---|---|---|
| `how-to-organize-cables-on-a-small-study-table` | how to organize cables / hide charger cables hostel | I | `/categories/cable-management` |
| `cork-desk-mat-vs-plastic-desk-mat` | cork vs plastic desk mat / which desk mat | I/C | `/categories/desk-mats` |
| `small-desk-setup-ideas-for-hostel-rooms` | small desk setup ideas / budget study setup India | I | category pages |

## Anti-cannibalisation rule (enforced)

- Head/material terms (`cork desk mat`, `bamboo laptop stand`) → **category page**.
- Long-tail transactional terms (`large cork desk mat 90 x 40`, price/buy
  modifiers) → **product page only**.
- Question/comparison terms → **guides only**, which link up to the owning
  category page. No two indexable pages target the same primary keyword.
