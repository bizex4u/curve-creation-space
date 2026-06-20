# Lead Magnet Audit — BIZEX4U Phase 3

**Date:** 2026-06-20

---

## Assets

| Asset | Route | Source Tag | Status |
|-------|-------|-----------|--------|
| Airport Advertising Media Kit | `/resources/airport-advertising-media-kit` | `lead_magnet_airport_kit` | ✅ |
| Metro Branding Media Kit | `/resources/metro-branding-media-kit` | `lead_magnet_metro_kit` | ✅ |
| DOOH Advertising Media Kit | `/resources/dooh-advertising-media-kit` | `lead_magnet_dooh_kit` | ✅ |
| Barter Advertising Playbook | `/resources/barter-advertising-playbook` | `lead_magnet_barter_playbook` | ✅ |

---

## Per-Asset Audit

### Airport Media Kit
- **Route:** `/resources/airport-advertising-media-kit` ✅
- **Meta title:** "Free Airport Advertising Media Kit India 2026 | BIZEX4U" ✅
- **Meta desc:** 160 chars ✅
- **Canonical:** `https://bizex4u.com/resources/airport-advertising-media-kit` ✅
- **OG + Twitter:** ✅
- **LeadForm source:** `lead_magnet_airport_kit` ✅
- **Bullet count:** 7 ✅
- **Related links:** airport-advertising, airport-advertising-delhi, airport-advertising-mumbai, blog post ✅
- **trackDownload fires:** ✅ (on form success)

### Metro Media Kit
- **Route:** `/resources/metro-branding-media-kit` ✅
- **Meta title:** "Free Metro Branding Media Kit India 2026 | BIZEX4U" ✅
- **Meta desc:** 161 chars ✅
- **Canonical:** absolute ✅
- **OG + Twitter:** ✅
- **LeadForm source:** `lead_magnet_metro_kit` ✅
- **Bullet count:** 7 ✅
- **Related links:** metro-branding, delhi-metro-advertising, mumbai-metro-advertising, blog post ✅
- **trackDownload fires:** ✅

### DOOH Media Kit
- **Route:** `/resources/dooh-advertising-media-kit` ✅
- **Meta title:** "Free DOOH Advertising Media Kit India 2026 | BIZEX4U" ✅
- **Meta desc:** 159 chars ✅
- **Canonical:** absolute ✅
- **OG + Twitter:** ✅
- **LeadForm source:** `lead_magnet_dooh_kit` ✅
- **Bullet count:** 7 ✅
- **Related links:** dooh-advertising, gurgaon-dooh-advertising, bangalore-dooh-advertising, blog post ✅
- **trackDownload fires:** ✅

### Barter Playbook
- **Route:** `/resources/barter-advertising-playbook` ✅
- **Meta title:** "Free Barter Advertising Playbook for Indian Brands | BIZEX4U" ✅
- **Meta desc:** 160 chars ✅
- **Canonical:** absolute ✅
- **OG + Twitter:** ✅
- **LeadForm source:** `lead_magnet_barter_playbook` ✅
- **Bullet count:** 8 ✅
- **Related links:** barter-advertising, advertising-for-fmcg-brands, blog posts ✅
- **trackDownload fires:** ✅

---

## Form Flow

```
User submits LeadForm
  → Supabase insert (leads table)
  → source = "lead_magnet_*"
  → UTM attrs captured (utm_source, utm_medium, utm_campaign)
  → device + referrer + screen_width captured
  → Resend email notification to team
  → trackDownload(assetName) fires → Plausible/GA4
  → onSuccess → setSubmitted(true)
  → Thank you state shown
```

---

## Issues Fixed This Session

1. Dead `title` and `subtitle` props removed from `LeadMagnet` component and all 4 call sites
2. `trackDownload` wired to `onSuccess` callback in `LeadMagnet`

---

## Recommendations

1. **Actual asset delivery** — currently "sent to your email" is a UI promise; no PDF is actually attached to Resend email. Team should manually send assets or configure Resend template with attachment. **Not a code bug — operational process gap.**
2. Consider adding lead magnet links to the `/channels` page as a sidebar resource section.
3. Add lead magnet CTAs to relevant blog posts (partially done via "Related:" lines).
