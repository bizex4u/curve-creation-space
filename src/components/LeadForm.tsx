import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import FilledButton from "./FilledButton";

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

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: parsed.error.errors[0]?.message ?? "Please check the form" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      budget: parsed.data.budget || null,
      funding_model: parsed.data.funding_model || null,
      message: parsed.data.message || null,
      source,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Something went wrong. Please try again." });
      return;
    }
    toast({ title: "Thanks! Our strategist will reach out within 1 business day." });
    setForm({ name: "", email: "", phone: "", company: "", budget: "", funding_model: "Hybrid", message: "" });
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
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
