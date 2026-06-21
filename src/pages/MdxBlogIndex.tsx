import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pagination from "@/components/blog-mdx/Pagination";
import { getAllPosts } from "@/blog-mdx/loader";
import type { BlogPostMeta } from "@/blog-mdx/types";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ─── constants ──────────────────────────────────────────────────────── */

const SITE_URL = "https://bizex4u.com";
const PAGE_SIZE = 9;
const NAVY = "#0F2340";
const IVORY = "#F8F6F1";
const INK = "#141414";

const fmtDate = (d: string) =>
  d
    ? new Date(d).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
    : "";

const categoryTeaser = (cat: string): string => {
  const map: Record<string, string> = {
    "Airport Advertising": "From a Delhi & Mumbai airport campaign",
    "Metro Branding": "From a metro activation across DMRC",
    "Barter Advertising": "From an FMCG barter program",
    "Outdoor Advertising": "From an OOH campaign across 12 cities",
    "DOOH Advertising": "From a programmatic DOOH buy",
    "Strategy": "From a multi-channel media planning engagement",
    "Inside Bizex4U": "From the Bizex4U media desk",
  };
  return map[cat] ?? "From a live campaign";
};

/* ─── micro newsletter ───────────────────────────────────────────────── */

const NewsletterInline = ({ light = false }: { light?: boolean }) => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^\S+@\S+\.\S+$/.test(v)) {
      toast({ title: "Valid email required." });
      return;
    }
    setBusy(true);
    track("lead_submit", { source: "blog_newsletter" });
    const { error } = await supabase.from("leads").insert({
      name: "Newsletter subscriber",
      email: v,
      source: "blog_newsletter",
      funding_model: "Not sure yet",
      landing_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setBusy(false);
    if (error) { toast({ title: "Something went wrong." }); return; }
    track("lead_success", { source: "blog_newsletter" });
    toast({ title: "Done. First brief this Friday." });
    setEmail("");
  };

  const border = light ? "rgba(255,255,255,0.2)" : "rgba(20,20,20,0.15)";
  const bg = light ? "rgba(255,255,255,0.08)" : "#FFFFFF";
  const textColor = light ? "#FFFFFF" : INK;
  const btnBg = light ? "#FFFFFF" : NAVY;
  const btnText = light ? NAVY : "#FFFFFF";

  return (
    <form onSubmit={submit} className="flex flex-col tablet:flex-row gap-3 w-full max-w-[440px]">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Work email"
        style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
        className="flex-1 px-4 py-3 text-[15px] rounded-[8px] focus:outline-none placeholder:opacity-50"
      />
      <button
        type="submit"
        disabled={busy}
        style={{ background: btnBg, color: btnText }}
        className="px-5 py-3 rounded-[8px] text-[13px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-opacity hover:opacity-85"
      >
        {busy ? "…" : "Subscribe"}
      </button>
    </form>
  );
};

/* ─── section 1: hero ────────────────────────────────────────────────── */

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section
      ref={ref}
      className="page-header-top pb-20 desktop:pb-28"
      style={{
        background: NAVY,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="container">
        {/* Eyebrow rule */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-px" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span
            className="text-[11px] uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Bizex4U · Campaign Intelligence
          </span>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-16 items-end">
          {/* Headline */}
          <div className="desktop:col-span-8">
            <h1
              style={{
                color: "#FFFFFF",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 6.5vw, 88px)",
                lineHeight: 0.97,
                letterSpacing: "-0.025em",
              }}
            >
              Field notes<br />
              from India's<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.55)" }}>
                media market.
              </span>
            </h1>
          </div>

          {/* Right column — descriptor + CTAs */}
          <div className="desktop:col-span-4 flex flex-col gap-7">
            <div
              className="text-[15px] leading-[1.65]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Airport trends. Metro benchmarks.<br />
              Barter opportunities. Campaign economics.<br />
              Written for CMOs, COOs and founders.
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] text-[13px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-85"
                style={{ background: "#FFFFFF", color: NAVY }}
                onClick={() => track("cta_click", { cta: "hero_subscribe" })}
              >
                Subscribe
              </a>
              <Link
                to="/resources/barter-advertising-playbook"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] text-[13px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-85"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.2)" }}
                onClick={() => track("cta_click", { cta: "hero_download_playbook" })}
              >
                Download Playbook
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom ticker — proof only */}
        <div
          className="mt-16 pt-6 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.22em]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)" }}
        >
          {["17 reports published", "₹150Cr+ media transacted", "320+ brands", "40+ cities"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── section 2: featured intelligence ──────────────────────────────── */

const FeaturedSection = ({ post }: { post: BlogPostMeta }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section
      ref={ref}
      className="py-20 desktop:py-28"
      style={{
        background: IVORY,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease-out 0.05s, transform 0.65s ease-out 0.05s",
      }}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-8 h-px" style={{ background: NAVY, opacity: 0.3 }} />
          <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY, opacity: 0.5 }}>
            Featured Intelligence
          </span>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-10 gap-10 desktop:gap-14">
          {/* Left — 70 */}
          <div className="desktop:col-span-7">
            <Link to={`/blog/${post.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-[4px] mb-8 aspect-[16/10] bg-neutral-03">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
                />
                {/* Category stamp */}
                <div
                  className="absolute bottom-5 left-5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ background: NAVY, color: "#FFFFFF" }}
                >
                  {post.category}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-5 text-[11px] uppercase tracking-[0.22em]" style={{ color: NAVY, opacity: 0.55 }}>
                <span>{fmtDate(post.date)}</span>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
                <span>·</span>
                <span>By Yash Mehrotra</span>
              </div>

              <h2
                className="mb-5 transition-opacity group-hover:opacity-75"
                style={{
                  color: INK,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.02em",
                }}
              >
                {post.title}
              </h2>

              <p className="text-[16px] leading-[1.65] max-w-[580px] mb-7" style={{ color: "rgba(20,20,20,0.65)" }}>
                {post.description}
              </p>

              <span
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] border-b pb-1 transition-all group-hover:gap-3"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                Read Report <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          {/* Sidebar — 30 */}
          <aside className="desktop:col-span-3">
            <div
              className="sticky top-28 p-7 rounded-[4px]"
              style={{ background: "#FFFFFF", border: `1px solid rgba(20,20,20,0.08)` }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] mb-6" style={{ color: NAVY, opacity: 0.55 }}>
                Agency at a glance
              </p>

              <div className="space-y-6">
                {[
                  { label: "Brands Served", stat: "320+", note: "Across FMCG, real estate, F&B, fintech and retail." },
                  { label: "Media Transacted", stat: "₹150Cr+", note: "Cash, barter and hybrid campaigns combined." },
                  { label: "Cities Covered", stat: "40+", note: "Airport, metro, outdoor and cinema across India." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="pb-6"
                    style={{ borderBottom: i < 2 ? "1px solid rgba(20,20,20,0.07)" : "none" }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.15em]" style={{ color: INK }}>
                        {item.label}
                      </span>
                      <span className="text-[14px] font-bold" style={{ color: NAVY, fontFamily: "Manrope, sans-serif" }}>
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-[13px] leading-[1.55]" style={{ color: "rgba(20,20,20,0.6)" }}>
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <Link
                  to="/contact"
                  className="block text-center py-3 text-[12px] font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-75"
                  style={{ background: NAVY, color: "#FFFFFF", borderRadius: "4px" }}
                  onClick={() => track("cta_click", { cta: "intelligence_brief_contact" })}
                >
                  Get a media brief
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

/* ─── section 3: media benchmarks ───────────────────────────────────── */

const BENCHMARKS = [
  {
    medium: "Airport",
    stat: "₹18–42",
    unit: "CPM",
    context: "Cost per 1,000 impressions at T1 airports (CSIA, DEL, BLR). Formats: lightboxes, aerobridge, baggage belt.",
  },
  {
    medium: "Metro",
    stat: "4.5M+",
    unit: "Daily Reach",
    context: "Unduplicated daily commuters across Mumbai & Delhi metro networks. Station domination packages available.",
  },
  {
    medium: "Cinema",
    stat: "₹3–9",
    unit: "Per Screen-Second",
    context: "PVR/INOX national buy. Pre-roll, branded content and foyer branding. High dwell, captive audience.",
  },
  {
    medium: "DOOH",
    stat: "+34%",
    unit: "YoY Growth",
    context: "India programmatic OOH spend growth FY25. Premium digital inventory in metros tightening fast.",
  },
];

const BenchmarksSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section
      ref={ref}
      className="py-20 desktop:py-28"
      style={{
        background: "#FFFFFF",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease-out 0.05s, transform 0.65s ease-out 0.05s",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-14 mb-16">
          <div className="desktop:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px" style={{ background: NAVY, opacity: 0.3 }} />
              <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY, opacity: 0.5 }}>
                Media Benchmarks
              </span>
            </div>
            <h2
              style={{
                color: INK,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Only what we've<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(20,20,20,0.45)" }}>actually transacted.</span>
            </h2>
          </div>
          <div className="desktop:col-span-6 desktop:flex desktop:items-end">
            <p className="text-[15px] leading-[1.65]" style={{ color: "rgba(20,20,20,0.6)" }}>
              Based on FY25 campaigns across 320+ brands. Updated quarterly. No estimates, no benchmarking reports — only invoiced media.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-px" style={{ background: "rgba(20,20,20,0.08)" }}>
          {BENCHMARKS.map((b, i) => (
            <div
              key={b.medium}
              className="flex flex-col gap-6 p-8 desktop:p-10"
              style={{
                background: i % 2 === 0 ? "#FFFFFF" : IVORY,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease-out ${0.1 + i * 0.08}s, transform 0.5s ease-out ${0.1 + i * 0.08}s`,
              }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] mb-4" style={{ color: NAVY, opacity: 0.55 }}>
                  {b.medium}
                </p>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(36px, 4.5vw, 56px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color: INK,
                  }}
                >
                  {b.stat}
                </div>
                <p className="mt-2 text-[12px] uppercase tracking-[0.2em]" style={{ color: "rgba(20,20,20,0.45)" }}>
                  {b.unit}
                </p>
              </div>
              <p className="text-[13px] leading-[1.6] mt-auto" style={{ color: "rgba(20,20,20,0.6)" }}>
                {b.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── section 4: recent notes ────────────────────────────────────────── */

const RecentNotesSection = ({ posts }: { posts: BlogPostMeta[] }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [a, b, c] = posts;

  return (
    <section
      ref={ref}
      className="py-20 desktop:py-28"
      style={{
        background: IVORY,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease-out 0.05s, transform 0.65s ease-out 0.05s",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px" style={{ background: NAVY, opacity: 0.3 }} />
            <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY, opacity: 0.5 }}>
              Recent Notes
            </span>
          </div>
          <Link
            to="/blog"
            className="hidden tablet:flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
            style={{ color: NAVY }}
          >
            All articles <ArrowRight size={11} />
          </Link>
        </div>

        {/* Asymmetric 3-column layout */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-12 gap-6">
          {/* Large card — col 1–7 */}
          {a && (
            <Link
              to={`/blog/${a.slug}`}
              className="group desktop:col-span-7 flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
              }}
            >
              <div className="overflow-hidden rounded-[4px] mb-5 aspect-[16/10] bg-neutral-03">
                <img
                  src={a.image || "/placeholder.svg"}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: NAVY, opacity: 0.55 }}>
                {a.category} · {fmtDate(a.date)} · {a.readingMinutes} min
              </p>
              <h3
                className="mb-4 transition-opacity group-hover:opacity-65"
                style={{
                  color: INK,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.4vw, 30px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                {a.title}
              </h3>
              <p className="text-[14px] leading-[1.6] mb-4" style={{ color: "rgba(20,20,20,0.6)" }}>
                {a.description}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] mb-5" style={{ color: NAVY, opacity: 0.5 }}>
                {categoryTeaser(a.category)}
              </p>
              <span
                className="mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] border-b pb-0.5 self-start transition-all group-hover:gap-3"
                style={{ color: NAVY, borderColor: NAVY }}
              >
                Read article <ArrowRight size={11} />
              </span>
            </Link>
          )}

          {/* Tall right column — col 8–12 */}
          <div className="desktop:col-span-5 flex flex-col gap-8">
            {[b, c].filter(Boolean).map((post, i) => (
              <Link
                key={post!.slug}
                to={`/blog/${post!.slug}`}
                className="group flex flex-col pb-8"
                style={{
                  borderBottom: i === 0 ? "1px solid rgba(20,20,20,0.1)" : "none",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${0.18 + i * 0.1}s, transform 0.5s ease-out ${0.18 + i * 0.1}s`,
                }}
              >
                <div className="overflow-hidden rounded-[4px] mb-4 aspect-[16/9] bg-neutral-03">
                  <img
                    src={post!.image || "/placeholder.svg"}
                    alt={post!.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] mb-2.5" style={{ color: NAVY, opacity: 0.55 }}>
                  {post!.category} · {post!.readingMinutes} min
                </p>
                <h4
                  className="mb-2.5 transition-opacity group-hover:opacity-65"
                  style={{
                    color: INK,
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(17px, 1.8vw, 22px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post!.title}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.18em] mb-3" style={{ color: NAVY, opacity: 0.5 }}>
                  {categoryTeaser(post!.category)}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] self-start border-b pb-0.5 transition-all group-hover:gap-2.5"
                  style={{ color: NAVY, borderColor: NAVY }}
                >
                  Read article <ArrowRight size={10} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── section 5: downloads ───────────────────────────────────────────── */

const DOWNLOADS = [
  {
    tag: "Airport",
    title: "Airport Advertising Media Kit",
    desc: "CPMs, format specs, booking timelines and T1–T3 reach data from live buys.",
    href: "/resources/airport-advertising-media-kit",
    pages: "42 pages",
    updated: "Updated Q2 2026",
  },
  {
    tag: "Metro",
    title: "Metro Branding Playbook",
    desc: "Station selection logic, format mix rationale and dwell-time conversion data.",
    href: "/resources/metro-branding-media-kit",
    pages: "31 pages",
    updated: "Updated Q2 2026",
  },
  {
    tag: "Barter",
    title: "Barter Advertising Handbook",
    desc: "How inventory-for-media structures work. Deal flow, valuation and execution.",
    href: "/resources/barter-advertising-playbook",
    pages: "27 pages",
    updated: "Updated Q1 2026",
  },
  {
    tag: "DOOH",
    title: "DOOH Advertising Toolkit",
    desc: "Programmatic OOH primer, CPM benchmarks, creative specifications.",
    href: "/resources/dooh-advertising-media-kit",
    pages: "18 pages",
    updated: "Updated Q2 2026",
  },
];

const DownloadsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section
      ref={ref}
      className="py-20 desktop:py-28"
      style={{
        background: "#FFFFFF",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease-out 0.05s, transform 0.65s ease-out 0.05s",
      }}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-8 h-px" style={{ background: NAVY, opacity: 0.3 }} />
          <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY, opacity: 0.5 }}>
            Downloads
          </span>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-14 mb-14">
          <div className="desktop:col-span-5">
            <h2
              style={{
                color: INK,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 44px)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
              }}
            >
              Planning<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(20,20,20,0.4)" }}>
                Intelligence.
              </span>
            </h2>
          </div>
          <div className="desktop:col-span-7 desktop:flex desktop:items-end">
            <p className="text-[15px] leading-[1.65]" style={{ color: "rgba(20,20,20,0.6)" }}>
              Built from real buys — not generic media theory. Used by marketing teams before their first brief with us.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-px"
          style={{ background: "rgba(20,20,20,0.08)" }}
        >
          {DOWNLOADS.map((dl, i) => (
            <Link
              key={dl.href}
              to={dl.href}
              className="group flex flex-col gap-5 p-8 desktop:p-9 transition-colors"
              style={{
                background: "#FFFFFF",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease-out ${0.08 + i * 0.08}s, transform 0.5s ease-out ${0.08 + i * 0.08}s`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = IVORY)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
              onClick={() => track("cta_click", { cta: `download_${dl.tag.toLowerCase()}` })}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="self-start text-[10px] font-semibold uppercase tracking-[0.22em] px-2.5 py-1"
                  style={{ background: NAVY, color: "#FFFFFF" }}
                >
                  {dl.tag}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-right" style={{ color: "rgba(20,20,20,0.35)" }}>
                  {dl.pages}
                </span>
              </div>
              <h5
                className="leading-tight"
                style={{
                  color: INK,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {dl.title}
              </h5>
              <p className="text-[13px] leading-[1.6] flex-1" style={{ color: "rgba(20,20,20,0.6)" }}>
                {dl.desc}
              </p>
              <div className="flex items-center justify-between gap-2">
                <span
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] border-b pb-0.5 transition-all group-hover:gap-3"
                  style={{ color: NAVY, borderColor: NAVY }}
                >
                  Download <ArrowRight size={10} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.12em]" style={{ color: "rgba(20,20,20,0.3)" }}>
                  {dl.updated}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── section 6: newsletter ──────────────────────────────────────────── */

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  return (
    <section
      ref={ref}
      id="newsletter"
      className="py-20 desktop:py-28"
      style={{
        background: NAVY,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease-out 0.05s, transform 0.65s ease-out 0.05s",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-14 items-center">
          <div className="desktop:col-span-6">
            <p
              className="text-[11px] uppercase tracking-[0.3em] mb-5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Weekly Media Brief
            </p>
            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 44px)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
              }}
            >
              One insight.<br />
              Every Friday.<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                From ₹150Cr+ of live media.
              </span>
            </h2>
            <p className="text-[13px] uppercase tracking-[0.18em] mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              Written by Yash Mehrotra · Founder, Bizex4U
            </p>
          </div>
          <div className="desktop:col-span-6 flex flex-col gap-5">
            <p className="text-[15px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Airport CPMs, barter windows, OOH inventory signals. No padding. One clear insight. Under 90 seconds to read.
            </p>
            <NewsletterInline light />
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              No spam. Read by 320+ brand marketers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── paginated archive (page 2+) ────────────────────────────────────── */

const ArchiveCard = ({ post }: { post: BlogPostMeta }) => (
  <Link to={`/blog/${post.slug}`} className="group flex flex-col gap-4">
    <div className="overflow-hidden rounded-[4px] aspect-[16/10] bg-neutral-03">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] mb-2.5" style={{ color: NAVY, opacity: 0.55 }}>
        {post.category} · {fmtDate(post.date)} · {post.readingMinutes} min
      </p>
      <h4
        className="mb-3 transition-opacity group-hover:opacity-65"
        style={{
          color: INK,
          fontFamily: "Manrope, sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {post.title}
      </h4>
      <p className="text-[13px] leading-[1.6] mb-4" style={{ color: "rgba(20,20,20,0.6)" }}>
        {post.description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] self-start border-b pb-0.5 transition-all group-hover:gap-2.5"
        style={{ color: NAVY, borderColor: NAVY }}
      >
        Read <ArrowRight size={10} />
      </span>
    </div>
  </Link>
);

/* ─── root component ─────────────────────────────────────────────────── */

const MdxBlogIndex = () => {
  const { page } = useParams<{ page?: string }>();
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const isFirstPage = currentPage === 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = allPosts.slice(start, start + PAGE_SIZE);

  // Featured: pick highest commercial-value category, never welcome/about posts
  const FEATURED_PRIORITY = [
    "Airport Advertising",
    "Metro Branding",
    "Barter Advertising",
    "Outdoor Advertising",
    "DOOH Advertising",
    "Strategy",
  ];
  const featuredPost =
    FEATURED_PRIORITY.reduce<BlogPostMeta | null>((found, cat) => {
      if (found) return found;
      return allPosts.find((p) => p.category === cat) ?? null;
    }, null) ?? allPosts[0] ?? null;

  // Recent: next 3 posts excluding featured
  const recentPosts = allPosts
    .filter((p) => p.slug !== featuredPost?.slug)
    .slice(0, 3);

  const canonical = isFirstPage ? `${SITE_URL}/blog` : `${SITE_URL}/blog/page/${currentPage}`;
  const title = isFirstPage
    ? "Campaign Intelligence | Bizex4U"
    : `Campaign Intelligence — page ${currentPage} | Bizex4U`;
  const description =
    "Field notes from India's media market. Airport CPMs, metro benchmarks, barter economics and campaign data for CMOs and marketing heads.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
        <link rel="alternate" type="application/rss+xml" title="Bizex4U Journal" href={`${SITE_URL}/rss.xml`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Bizex4U Campaign Intelligence",
          "description": description,
          "url": `${SITE_URL}/blog`,
          "publisher": {
            "@type": "Organization",
            "name": "Bizex4U",
            "url": SITE_URL,
            "logo": { "@type": "ImageObject", "url": `${SITE_URL}/og-image.jpg` },
          },
        })}</script>
      </Helmet>

      <Navbar />

      {isFirstPage ? (
        <>
          <HeroSection />
          {featuredPost && <FeaturedSection post={featuredPost} />}
          <BenchmarksSection />
          {recentPosts.length > 0 && <RecentNotesSection posts={recentPosts} />}
          <DownloadsSection />
          <NewsletterSection />
        </>
      ) : (
        <main className="py-24 desktop:py-32" style={{ background: IVORY }}>
          <div className="container">
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-5">
                <span className="w-8 h-px" style={{ background: NAVY, opacity: 0.3 }} />
                <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: NAVY, opacity: 0.5 }}>
                  Campaign Intelligence · Page {currentPage}
                </span>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                style={{ color: NAVY }}
              >
                ← Back to Intelligence
              </Link>
            </div>

            {visible.length === 0 ? (
              <p className="text-[16px]" style={{ color: "rgba(20,20,20,0.5)" }}>No posts on this page.</p>
            ) : (
              <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-8 gap-y-14">
                {visible.map((post) => (
                  <ArchiveCard key={post.slug} post={post} />
                ))}
              </div>
            )}

            <div className="mt-16">
              <Pagination current={currentPage} total={totalPages} />
            </div>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
};

export default MdxBlogIndex;
