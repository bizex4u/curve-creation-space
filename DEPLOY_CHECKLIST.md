# Deployment Checklist — BIZEX4U Phase 3

**Date:** 2026-06-20  
**Branch:** service-pages-v1  
**Target:** production (bizex4u.com)

---

## Pre-Deploy: Build Verification

- [ ] `npm run build` passes with zero TypeScript errors
- [ ] Zero unresolved lazy import paths (all 13 geo pages, 4 resource pages resolve)
- [ ] No console errors on `npm run dev` cold start
- [ ] Bundle output in `dist/` — verify chunk count is reasonable (no giant monolith)

---

## Geo Pages (13 routes)

- [ ] `/airport-advertising-delhi` — loads, H1 visible, LeadForm present
- [ ] `/airport-advertising-mumbai` — loads, H1 visible, LeadForm present
- [ ] `/airport-advertising-bangalore` — loads, H1 visible, LeadForm present
- [ ] `/delhi-metro-advertising` — loads, H1 visible, LeadForm present
- [ ] `/mumbai-metro-advertising` — loads, H1 visible, LeadForm present
- [ ] `/gurgaon-hoardings` — loads, H1 visible, LeadForm present
- [ ] `/noida-hoardings` — loads, H1 visible, LeadForm present
- [ ] `/delhi-billboard-advertising` — loads, H1 visible, LeadForm present
- [ ] `/gurgaon-dooh-advertising` — loads, H1 visible, LeadForm present
- [ ] `/bangalore-dooh-advertising` — loads, H1 visible, LeadForm present
- [ ] `/advertising-for-fmcg-brands` — loads, H1 visible, LeadForm present
- [ ] `/advertising-for-d2c-brands` — loads, H1 visible, LeadForm present
- [ ] `/advertising-for-real-estate` — loads, H1 visible, LeadForm present

---

## Blog Posts (17 articles)

- [ ] `/blog` hub page loads and shows all 17 cards
- [ ] `/blog/airport-advertising-cost-india-2026` — loads, "Related:" links visible
- [ ] `/blog/airport-advertising-roi` — loads, "Related:" links visible
- [ ] `/blog/dooh-advertising-india-guide` — loads, "Related:" links visible
- [ ] `/blog/barter-advertising-india-guide` — loads, "Related:" links visible
- [ ] `/blog/outdoor-advertising-india-buyers-playbook` — loads, "Related:" links visible
- [ ] `/blog/how-brands-save-costs-using-inventory-barter` — loads
- [ ] `/blog/transit-advertising-india` — loads
- [ ] All 17 slugs return 200 (no 404s)

---

## Lead Magnet Pages (4 routes)

- [ ] `/resources/airport-advertising-media-kit` — page loads, form visible
- [ ] `/resources/metro-branding-media-kit` — page loads, form visible
- [ ] `/resources/dooh-advertising-media-kit` — page loads, form visible
- [ ] `/resources/barter-advertising-playbook` — page loads, form visible
- [ ] CTA button label on each reads "Get Free Media Kit" / "Get Free Playbook" (not generic)

---

## Lead Forms (end-to-end)

- [ ] Submit test lead on `/contact` — row appears in Supabase `leads` table
- [ ] Submit test lead on any geo page — `source` column matches page (e.g. `contact`)
- [ ] Submit lead magnet form (`/resources/airport-advertising-media-kit`) — `source = lead_magnet_airport_kit`
- [ ] Submit lead magnet form (`/resources/barter-advertising-playbook`) — `source = lead_magnet_barter_playbook`
- [ ] Resend email notification received by team for each test submission
- [ ] Error state renders correctly if Supabase is unreachable (network off test)
- [ ] Thank-you state renders after successful submission on all form locations

---

## Emails

- [ ] Resend notification email received within 30s of form submit
- [ ] Email contains: name, email, company, budget, source, message
- [ ] `RESEND_API_KEY` set as server-side env var (NOT `VITE_` prefixed) in production environment
- [ ] Team confirms actual media kit / playbook PDFs are emailed manually (operational gap — no auto-attachment)

---

## Analytics

- [ ] Plausible OR GA4 script tag present in `index.html` for production
- [ ] WhatsApp button click fires `whatsapp_click` event with `source` property
- [ ] Phone link click fires `phone_click` event
- [ ] Email link click fires `email_click` event
- [ ] Lead magnet form submit fires `download_click` event with `asset` property
- [ ] LeadForm fires `lead_submit`, `lead_success` events
- [ ] Verify in Plausible / GA4 Real-Time panel during smoke test

---

## SEO

- [ ] `<title>` tag renders correctly on each page (not default "Vite App")
- [ ] `<meta name="description">` 140–160 chars on all pages
- [ ] `<link rel="canonical">` is absolute URL (`https://bizex4u.com/...`) on all pages
- [ ] `og:image` set on all pages (`https://bizex4u.com/og-image.jpg`)
- [ ] `twitter:card`, `twitter:title`, `twitter:image` present on all pages
- [ ] JSON-LD `<script type="application/ld+json">` present on all geo, service, and blog pages
- [ ] No duplicate `<title>` or `<meta name="description">` tags (react-helmet-async handles this)

---

## Sitemap

- [ ] `public/sitemap.xml` accessible at `https://bizex4u.com/sitemap.xml`
- [ ] Sitemap contains 46 URLs (verified via SITEMAP_AUDIT.md)
- [ ] No admin/auth routes in sitemap (`/admin/*` must be absent)
- [ ] `lastmod` dates are correct and recent for Phase 3 pages
- [ ] Sitemap submitted to Google Search Console

---

## llms.txt

- [ ] Verify `/llms.txt` exists at project root or `public/` (check if previously created)
- [ ] If absent: create `public/llms.txt` with site name, description, and list of key routes
- [ ] Accessible at `https://bizex4u.com/llms.txt`

---

## Schema / Structured Data

- [ ] Google Rich Results Test on `/airport-advertising-delhi` — BreadcrumbList + LocalBusiness pass
- [ ] Google Rich Results Test on `/blog/airport-advertising-cost-india-2026` — BlogPosting pass
- [ ] Google Rich Results Test on `/` — Organization schema pass
- [ ] No schema validation errors on any page
- [ ] `areaServed`, `telephone`, `address` fields populated in LocalBusiness schemas

---

## Accessibility

- [ ] All images have `alt` attributes (no empty `alt=""` on meaningful images)
- [ ] All form inputs have associated `<label>` elements
- [ ] Keyboard navigation works through nav, forms, and CTAs
- [ ] Focus indicators visible on interactive elements
- [ ] Color contrast ratio ≥ 4.5:1 for body text (verify on dark sections)
- [ ] WhatsApp CTA button has accessible label (not icon-only)

---

## Lighthouse (run against preview URL)

| Metric | Target | Actual |
|--------|--------|--------|
| Performance | > 90 | ☐ |
| Accessibility | > 95 | ☐ |
| Best Practices | > 90 | ☐ |
| SEO | > 98 | ☐ |
| FCP | < 1.5s | ☐ |
| LCP | < 2.5s | ☐ |
| CLS | < 0.1 | ☐ |

Run: Chrome DevTools → Lighthouse tab → Desktop mode on production URL.

---

## Google Search Console (GSC)

- [ ] GSC property verified for `bizex4u.com`
- [ ] Sitemap submitted: GSC → Sitemaps → `https://bizex4u.com/sitemap.xml`
- [ ] Request indexing for top 5 geo pages manually after deploy
- [ ] No coverage errors on Phase 3 URLs after 48h
- [ ] No manual actions or security issues flagged

---

## Environment Variables (Production)

| Variable | Where | Required |
|----------|-------|----------|
| `VITE_SUPABASE_URL` | Client | ✅ |
| `VITE_SUPABASE_ANON_KEY` | Client | ✅ |
| `VITE_WHATSAPP_NUMBER` | Client | ✅ (renders null if missing) |
| `RESEND_API_KEY` | Server / Edge Function | ✅ (never VITE_ prefixed) |

- [ ] All 4 variables set in production hosting environment
- [ ] `VITE_WHATSAPP_NUMBER` verified — WhatsApp button appears on site

---

## Post-Deploy Smoke Test (5 min)

1. Open `https://bizex4u.com` — homepage renders
2. Open `https://bizex4u.com/airport-advertising-delhi` — page renders, no 404
3. Open `https://bizex4u.com/resources/barter-advertising-playbook` — form visible
4. Open `https://bizex4u.com/blog/dooh-advertising-india-guide` — content renders
5. Submit contact form with test data — email received, Supabase row created
6. Check browser console — zero JS errors on any of the above pages
7. Verify WhatsApp button visible and `VITE_WHATSAPP_NUMBER` is set

---

## Rollback Plan

- Previous stable commit: `feat(growth): launch geo landing pages, content hub and commercial SEO expansion`
- To rollback: `git revert HEAD` or redeploy from previous commit hash via hosting dashboard
- No database schema changes in Phase 3 — rollback is safe with no DB migration needed

---

## Sign-off

| Check | Owner | Status |
|-------|-------|--------|
| Build passes | Dev | ☐ |
| Smoke test complete | Dev | ☐ |
| Lighthouse > 90 | Dev | ☐ |
| Forms end-to-end verified | Dev | ☐ |
| Sitemap submitted to GSC | SEO | ☐ |
| Analytics provider script live | Dev | ☐ |
| PDF delivery process confirmed | Ops | ☐ |
