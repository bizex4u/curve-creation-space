import { useState, useRef, useEffect } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import FilledButton from "./FilledButton";

// Minimum ms between page mount and submit — blocks instant-submit bots
const MIN_SUBMIT_DELAY_MS = 3000;

// Read UTM params + landing page once at module load (URL won't change within a SPA visit)
function getAttribution() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
  return {
    landing_page:  window.location.pathname || null,
    utm_source:    p.get("utm_source")   || null,
    utm_medium:    p.get("utm_medium")   || null,
    utm_campaign:  p.get("utm_campaign") || null,
    referrer:      document.referrer || null,
    device:        isMobile ? "mobile" : "desktop",
    screen_width:  window.screen.width || null,
  };
}

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  funding_model: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

interface LeadFormProps {
  source?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

const fieldClass =
  "w-full bg-neutral-00 border border-neutral-04 rounded-[10px] px-4 py-3 text-body text-neutral-12 placeholder:text-neutral-09 focus:outline-none focus:border-[hsl(var(--theme-main-02))] transition-colors";

const labelClass = "text-label text-neutral-10 mb-1.5 block";

// Minimal analytics — wraps window.gtag / plausible if present, otherwise no-op
function track(event: string, props?: Record<string, string>) {
  try {
    if (typeof window === "undefined") return;
    // Plausible
    if ((window as any).plausible) {
      (window as any).plausible(event, { props });
    }
    // GA4
    if ((window as any).gtag) {
      (window as any).gtag("event", event, props);
    }
    console.debug(`[analytics] ${event}`, props);
  } catch {
    // Never let analytics break the form
  }
}

const LeadForm = ({ source = "contact", compact = false, onSuccess }: LeadFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    funding_model: "Hybrid",
    message: "",
  });

  // Honeypot field — bots fill it, humans don't see it
  const [honeypot, setHoneypot] = useState("");

  // Track mount time for minimum delay enforcement
  const mountedAt = useRef(Date.now());

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — silently succeed for bots
    if (honeypot) {
      toast({ title: "Thanks! Our strategist will reach out within 1 business day." });
      return;
    }

    // Minimum delay check
    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < MIN_SUBMIT_DELAY_MS) {
      toast({ title: "Please review your details before submitting." });
      return;
    }

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: parsed.error.errors[0]?.message ?? "Please check the form" });
      return;
    }

    track("lead_submit", { source });
    setSubmitting(true);

    const attribution = getAttribution();

    // Step 1: Insert lead — this is the source of truth
    const { error: insertError } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      budget: parsed.data.budget || null,
      funding_model: parsed.data.funding_model || null,
      message: parsed.data.message || null,
      source,
      ...attribution,
    });

    setSubmitting(false);

    if (insertError) {
      track("lead_submit_error", { source, error: insertError.message });
      toast({ title: "Something went wrong. Please try again." });
      return;
    }

    // Lead saved — show success immediately, never block on email
    track("lead_success", { source });
    toast({ title: "Thanks! Our strategist will reach out within 1 business day." });
    setForm({ name: "", email: "", phone: "", company: "", budget: "", funding_model: "Hybrid", message: "" });
    onSuccess?.();

    // Step 2: Fire-and-forget email notification — failure must never affect UX
    supabase.functions
      .invoke("notify-lead", {
        body: {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          company: parsed.data.company || null,
          budget: parsed.data.budget || null,
          funding_model: parsed.data.funding_model || null,
          message: parsed.data.message || null,
          source,
          ...attribution,
          created_at: new Date().toISOString(),
        },
      })
      .then(({ error: emailError }) => {
        if (emailError) {
          console.error("[LeadForm] notify-lead failed:", emailError);
          track("lead_email_failed", { source, error: emailError.message });
        } else {
          track("lead_email_sent", { source });
        }
      })
      .catch((err) => {
        console.error("[LeadForm] notify-lead threw:", err);
        track("lead_email_failed", { source, error: String(err) });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      {/* Honeypot — visually hidden, must NOT be aria-hidden (bots check that) */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
        aria-hidden="true"
        tabIndex={-1}
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className={`grid grid-cols-1 ${compact ? "" : "tablet:grid-cols-2"} gap-4`}>
        <div>
          <label className={labelClass}>Your name</label>
          <input className={fieldClass} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Priya Sharma" />
        </div>
        <div>
          <label className={labelClass}>Work email</label>
          <input type="email" className={fieldClass} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@brand.com" />
        </div>
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input className={fieldClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98xxxxxxxx" />
        </div>
        <div>
          <label className={labelClass}>Brand / company</label>
          <input className={fieldClass} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Your brand" />
        </div>
        <div>
          <label className={labelClass}>Monthly budget</label>
          <select className={fieldClass} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
            <option value="">Select budget</option>
            <option>Under ₹5L</option>
            <option>₹5L – ₹15L</option>
            <option>₹15L – ₹50L</option>
            <option>₹50L+</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Funding model</label>
          <select className={fieldClass} value={form.funding_model} onChange={(e) => update("funding_model", e.target.value)}>
            <option>Cash</option>
            <option>Barter</option>
            <option>Hybrid</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Tell us about the campaign</label>
        <textarea
          className={`${fieldClass} min-h-[110px] resize-y`}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Markets, channels, timeline, goals…"
        />
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="text-label text-neutral-10">We reply within 1 business day. No spam, ever.</p>
        <FilledButton type="submit" disabled={submitting} showArrow>
          {submitting ? "Sending…" : "Get my plan"}
        </FilledButton>
      </div>
    </form>
  );
};

export default LeadForm;
