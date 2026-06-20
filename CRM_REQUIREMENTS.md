# CRM Requirements — BIZEX4U Lead Management

**Date:** 2026-06-20  
**Scope:** Requirements only. No implementation. No Supabase schema changes.

---

## Context

Current leads flow: LeadForm → Supabase `leads` table → Resend email to team.  
All data is captured. CRM view is needed to manage, score and act on leads.

---

## Suggested Table Columns (existing + planned)

### Core Identity
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key (existing) |
| `name` | TEXT | Lead name (existing) |
| `email` | TEXT | Email address (existing) |
| `phone` | TEXT | Optional (existing) |
| `company` | TEXT | Company name (existing) |

### Campaign Context
| Column | Type | Notes |
|--------|------|-------|
| `source` | TEXT | Form source: `contact`, `lead_magnet_*` (existing) |
| `utm_source` | TEXT | UTM source (existing) |
| `utm_medium` | TEXT | UTM medium (existing) |
| `utm_campaign` | TEXT | Campaign name (existing) |
| `referrer` | TEXT | HTTP referrer (existing) |
| `landing_page` | TEXT | Page path where lead converted (existing) |

### Device
| Column | Type | Notes |
|--------|------|-------|
| `device` | TEXT | `"mobile"` or `"desktop"` (existing) |
| `screen_width` | INTEGER | Viewport width (existing) |

### Intent
| Column | Type | Notes |
|--------|------|-------|
| `budget` | TEXT | Budget range selected (existing) |
| `funding_model` | TEXT | Cash / Barter / Hybrid (existing) |
| `message` | TEXT | Free-text message (existing) |

### CRM Workflow (to be added)
| Column | Type | Default | Notes |
|--------|------|---------|-------|
| `status` | ENUM | `new` | Lead status (see Status Flow) |
| `score` | INTEGER | 0 | Lead score 0–100 |
| `owner` | TEXT | NULL | Team member assigned |
| `next_follow_up` | TIMESTAMP | NULL | Scheduled follow-up date |
| `notes` | TEXT | NULL | Internal team notes |
| `converted` | BOOLEAN | false | Did lead become a client? |
| `deal_value` | NUMERIC | NULL | Campaign value if converted |

---

## Status Flow

```
new → contacted → qualified → proposal_sent → negotiating → won | lost
              ↓
           no_response → archived
```

| Status | Description |
|--------|-------------|
| `new` | Lead submitted, not yet contacted |
| `contacted` | Initial outreach made |
| `qualified` | Discovery call done, intent confirmed |
| `proposal_sent` | Media plan or pricing sent |
| `negotiating` | Active discussion on scope/price |
| `won` | Campaign contracted and running |
| `lost` | Lead did not convert |
| `no_response` | No reply after 2+ follow-ups |
| `archived` | Removed from active pipeline |

---

## Lead Scoring Logic

### Score Components (0–100)

| Factor | Max Points | Rule |
|--------|-----------|------|
| Budget range | 30 | ₹50L+ = 30; ₹10–50L = 20; ₹1–10L = 10; unspecified = 5 |
| Funding model | 15 | Cash = 15; Hybrid = 10; Barter = 5 |
| Company provided | 10 | Non-empty = 10; empty = 0 |
| Phone provided | 10 | Provided = 10; missing = 0 |
| Source quality | 15 | `lead_magnet_*` = 15; `contact_section` = 12; `contact` = 8 |
| Message quality | 10 | > 50 chars = 10; > 10 chars = 5; empty = 0 |
| Device | 5 | Desktop = 5; Mobile = 2 (desktop = more considered) |
| UTM present | 5 | Any UTM = 5; no UTM = 0 |

**Score tiers:**
- 80–100: Hot lead → same-day contact
- 60–79: Warm lead → contact within 24h
- 40–59: Medium → contact within 48h
- 0–39: Cold → nurture sequence

---

## Suggested Filters

| Filter | Type | Values |
|--------|------|--------|
| Status | Multi-select | All status values |
| Score tier | Select | Hot / Warm / Medium / Cold |
| Source | Multi-select | All `source` values |
| Funding model | Multi-select | Cash / Barter / Hybrid |
| Budget range | Multi-select | Budget values |
| Date range | Date picker | `created_at` |
| Owner | Select | Team members |
| Converted | Toggle | true / false |
| Has phone | Toggle | true / false |

---

## CSV Export Plan

Exported columns:
```
id, name, email, phone, company, budget, funding_model, message,
source, utm_source, utm_medium, utm_campaign, landing_page,
referrer, device, created_at, status, score, owner, notes, converted, deal_value
```

Export format: UTF-8 CSV with BOM (for Excel compatibility).  
Filter before export: apply same filters as CRM view.  
No PII redaction needed (internal team use only).

---

## Implementation Notes (for future)

- Build as a protected `/admin/leads` route (same auth as `/admin/blog`)
- Use existing `ProtectedRoute requireEditor` HOC
- Data from existing `leads` table in Supabase
- Add `status`, `score`, `owner`, `notes`, `converted`, `deal_value`, `next_follow_up` columns via migration
- Score can be computed client-side from existing columns; no backend function needed initially
- CSV export: use `papaparse` or native browser download with `Blob`
