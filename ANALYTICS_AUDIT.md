# Analytics Audit — BIZEX4U Phase 3

**Date:** 2026-06-20  
**File:** `src/lib/analytics.ts`

---

## Function Inventory

| Function | Event Name | Props | Status |
|----------|-----------|-------|--------|
| `track(event, props?)` | base fn | any | ✅ |
| `trackCta(label, destination?)` | `cta_click` | `label`, `destination?` | ✅ defined |
| `trackWhatsApp(source?)` | `whatsapp_click` | `source?` | ✅ wired |
| `trackPhone(source?)` | `phone_click` | `source?` | ✅ wired |
| `trackEmail(source?)` | `email_click` | `source?` | ✅ wired |
| `trackDownload(assetName)` | `download_click` | `asset` | ✅ wired |

---

## Provider Support

| Provider | Implemented | Notes |
|----------|-------------|-------|
| Plausible | ✅ | `window.plausible(event, { props })` |
| GA4 | ✅ | `window.gtag("event", event, props)` |
| Console (dev) | ✅ | `console.debug` in `import.meta.env.DEV` |
| Error boundary | ✅ | try/catch swallows all analytics errors |

---

## Usage Audit

### `trackWhatsApp` ✅
| Location | Source value |
|----------|-------------|
| `WhatsAppCTA.tsx` | `source` prop (passed by caller) |
| ServiceHero → WhatsAppCTA | `"service_hero"` (fixed this session) |
| FinalCTA → WhatsAppCTA | `"final_cta"` (fixed this session) |

### `trackPhone` ✅
| Location | Source value |
|----------|-------------|
| `Footer.tsx` | `"footer"` |
| `ContactSection.tsx` | `"contact_section"` |

### `trackEmail` ✅
| Location | Source value |
|----------|-------------|
| `Footer.tsx` | `"footer"` |
| `ContactSection.tsx` | `"contact_section"` |

### `trackDownload` ✅
| Location | Asset value |
|----------|------------|
| `LeadMagnet.tsx` (onSuccess) | `assetName` prop (dynamic) |

Values fired:
- `"Airport Advertising Media Kit India 2026"`
- `"Metro Branding Media Kit India 2026"`
- `"DOOH Advertising Media Kit India 2026"`
- `"Barter Advertising Playbook — India 2026"`

### `trackCta` ⚠️ Defined, not yet called
`trackCta` exists in `analytics.ts` but is not yet imported or called anywhere.  
**Recommendation:** Wire to primary CTA `<FilledButton>` in `HeroSection`, `FinalCTA` and `CTASection` in a future pass.  
**Not blocking production** — function is silent if uncalled.

### LeadForm analytics ✅
| Event | Trigger |
|-------|---------|
| `lead_submit` | Form submit attempt |
| `lead_submit_error` | Supabase insert error |
| `lead_success` | Successful DB insert |
| `lead_email_sent` | Resend email sent |
| `lead_email_failed` | Resend email failed |

All `source` values from Phase 3:
- `contact` (default)
- `contact_section`
- `lead_magnet_airport_kit`
- `lead_magnet_metro_kit`
- `lead_magnet_dooh_kit`
- `lead_magnet_barter_playbook`

---

## Issues Fixed This Session

1. `WhatsAppCTA` called without `source` prop in `ServiceHero` → added `source="service_hero"`
2. `WhatsAppCTA` called without `source` prop in `FinalCTA` → added `source="final_cta"`
3. `LeadMagnet` — `trackDownload` not called on form success → added to `onSuccess` handler
4. `LeadForm` — local `track()` function replaced with import from `@/lib/analytics`

---

## Recommended Future Enhancements

1. Wire `trackCta(label, destination)` to hero CTA buttons
2. Add `trackCta("whatsapp_float", "whatsapp")` if a floating WhatsApp button is added
3. Implement Plausible or GA4 via `index.html` script tag (required for events to fire in production)
4. Add `pageview` events if SPA navigation is not auto-tracked by provider
