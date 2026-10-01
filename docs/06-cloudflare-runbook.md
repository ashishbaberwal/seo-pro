# 06 — Cloudflare DNS & SSL Runbook (rubric item 5)

*Status: ready to execute · requires registrar + Cloudflare account access.*

## Current state (verified 2026-10-01)

- DNS: Vercel DNS (`ns1/ns2.vercel-dns.com`)
- Apex A: `216.198.79.1`, `64.29.17.1` · `www`: Vercel CNAME chain
- SSL: Let's Encrypt via Vercel, valid to 2026-12-17, HSTS enabled
- Canonical host: `https://intlipredictoai.tech` (sitemap, robots, canonicals, OG, JSON-LD)

## Migration steps (free plan sufficient)

1. Cloudflare → Add domain `intlipredictoai.tech` → Free plan. Let it import
   existing records, then verify/correct to exactly:
   - `@` → `A` → `76.76.21.21`, proxied (orange cloud ON)
   - `www` → `CNAME` → `cname.vercel-dns.com`, proxied ON
2. Registrar → replace nameservers `ns1/ns2.vercel-dns.com` with the two
   Cloudflare-assigned nameservers.
3. Cloudflare SSL/TLS tab → mode **Full (strict)** (never Flexible) →
   enable **Always Use HTTPS** + **Automatic HTTPS Rewrites**.
4. Speed tab → Auto Minify (JS/CSS/HTML) + Brotli ON.
5. Security tab → Security Level Medium, Bot Fight Mode ON.

## Verification (from any terminal)

- `nslookup -type=NS intlipredictoai.tech` → Cloudflare nameservers
- `curl -sI https://intlipredictoai.tech/` → `server: cloudflare`,
  `cf-cache-status` header present
- `echo | openssl s_client -connect intlipredictoai.tech:443 -servername intlipredictoai.tech | openssl x509 -noout -issuer -dates` → Cloudflare edge cert

## Evidence to screenshot for the examiner

DNS records page · SSL overview (Full strict + edge cert Active) · Speed
settings · Security overview · `curl -I` headers showing `server: cloudflare`.

## Open stack question (unchanged)

This runbook covers the Cloudflare/DNS/SSL words of rubric item 5. The
**VPS + WordPress** wording still needs the instructor's ruling (functional
equivalence of the Next.js deployment vs. a literal WordPress-on-VPS build).
