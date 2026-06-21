import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pagination from "@/components/blog-mdx/Pagination";
import { getAllPosts } from "@/blog-mdx/loader";
import type { BlogPostMeta } from "@/blog-mdx/types";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";

/* ─── editorial design tokens ────────────────────────────────────────── */

const SITE_URL = "https://bizex4u.com";
const PAGE_SIZE = 9;

// Editorial Navy palette — 75% editorial, 20% soft gloss, 5% purple
const NAVY = "#0B2545";          // primary ink — Bloomberg navy
const NAVY_DEEP = "#071A33";     // hero floor
const NAVY_SOFT = "#1B3A66";     // hairline navy
const PAPER = "#F4EFE6";         // warm ivory paper
const PAPER_DEEP = "#EAE2D3";    // cardstock
const INK = "#0E0E0E";           // body ink
const INK_SOFT = "rgba(14,14,14,0.62)";
const RULE = "rgba(11,37,69,0.14)";
const RULE_LIGHT = "rgba(255,255,255,0.14)";
const GOLD = "#B8893B";          // subtle gloss accent
const PURPLE = "#6D3FD9";        // 5% accent

// Type stacks
const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";
const DISPLAY = "'Bricolage Grotesque', 'Manrope', sans-serif";
const SANS = "'Manrope', sans-serif";
const MONO = "'Geist Mono', ui-monospace, monospace";

const fmtDate = (d: string) =>
  d ? new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "";

const fmtIssue = (d: string) =>
  d ? new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, ".") : "";

const categoryTeaser = (cat: string): string => {
  const map: Record<string, string> = {
    "Airport Advertising": "Live airport campaign — Delhi & Mumbai",
    "Metro Branding": "DMRC station activation",
    "Barter Advertising": "FMCG barter programme",
    "Outdoor Advertising": "12-city OOH rollout",
    "DOOH Advertising": "Programmatic DOOH buy",
    "Strategy": "Multi-channel planning",
    "Inside Bizex4U": "From the Bizex4U desk",
  };
  return map[cat] ?? "From a live campaign";
};

/* ─── small primitives ───────────────────────────────────────────────── */

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex items-center gap-3">
    <span
      className="inline-block"
      style={{
        width: 28,
        height: 1,
        background: light ? "rgba(255,255,255,0.35)" : NAVY,
        opacity: light ? 1 : 0.5,
      }}
    />
    <span
      style={{
        fontFamily: MONO,
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.65)" : NAVY,
      }}
    >
      {children}
    </span>
  </div>
);

const SectionLabel = ({ n, label, light = false }: { n: string; label: string; light?: boolean }) => (
  <div className="flex items-baseline gap-4">
    <span style={{ fontFamily: MONO, fontSize: 11, color: light ? "rgba(255,255,255,0.5)" : NAVY, opacity: light ? 1 : 0.55, letterSpacing: "0.08em" }}>
      §{n}
    </span>
    <span
      style={{
        fontFamily: DISPLAY,
        fontWeight: 500,
        fontSize: 12,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.78)" : NAVY,
      }}
    >
      {label}
    </span>
    <span className="flex-1 h-px" style={{ background: light ? RULE_LIGHT : RULE }} />
  </div>
);

const SerifHead = ({
  children,
  size = "clamp(40px, 6vw, 88px)",
  color = INK,
}: {
  children: React.ReactNode;
  size?: string;
  color?: string;
}) => (
  <h2
    style={{
      fontFamily: SERIF,
      fontWeight: 500,
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: "-0.015em",
      color,
    }}
  >
    {children}
  </h2>
);

const PillLink = ({
  to,
  children,
  variant = "solid",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "paper";
  onClick?: () => void;
}) => {
  const styles: Record<string, React.CSSProperties> = {
    solid: { background: PAPER, color: NAVY, border: `1px solid ${PAPER}` },
    ghost: { background: "transparent", color: PAPER, border: `1px solid rgba(244,239,230,0.28)` },
    paper: { background: NAVY, color: PAPER, border: `1px solid ${NAVY}` },
  };
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{ ...styles[variant], fontFamily: DISPLAY }}
      className="group inline-flex items-center gap-2.5 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap transition-all hover:opacity-90 hover:gap-3.5"
    >
      {children}
      <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
};

/* ─── newsletter inline ──────────────────────────────────────────────── */

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
    toast({ title: "Subscribed. First brief lands Friday." });
    setEmail("");
  };

  const border = light ? "rgba(244,239,230,0.22)" : "rgba(11,37,69,0.16)";
  const bg = light ? "transparent" : "#FFFFFF";
  const textColor = light ? PAPER : INK;

  return (
    <form onSubmit={submit} className="flex flex-col tablet:flex-row gap-0 w-full max-w-[480px]">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@work.email"
        style={{
          background: bg,
          borderTop: `1px solid ${border}`,
          borderBottom: `1px solid ${border}`,
          borderLeft: `1px solid ${border}`,
          borderRight: `1px solid ${border}`,
          color: textColor,
          fontFamily: MONO,
        }}
        className="flex-1 px-4 py-3.5 text-[13px] tablet:border-r-0 focus:outline-none placeholder:opacity-40"
      />
      <button
        type="submit"
        disabled={busy}
        style={{
          background: light ? PAPER : NAVY,
          color: light ? NAVY : PAPER,
          fontFamily: DISPLAY,
        }}
        className="px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {busy ? "Sending…" : "Subscribe →"}
      </button>
    </form>
  );
};

/* ─── 0. masthead ribbon ─────────────────────────────────────────────── */

const Masthead = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);
  const date = now.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const issue = `Vol. ${now.getFullYear() - 2014} · Issue ${Math.ceil(((+now - +new Date(now.getFullYear(), 0, 1)) / 86400000) / 7)}`;

  return (
    <div style={{ background: NAVY_DEEP, color: PAPER, borderBottom: `1px solid ${RULE_LIGHT}` }}>
      <div className="container">
        <div
          className="flex items-center justify-between gap-6 py-2.5"
          style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          <span style={{ opacity: 0.7 }}>{date}</span>
          <span className="hidden tablet:inline" style={{ opacity: 0.55 }}>The Bizex4U Journal · Campaign Intelligence</span>
          <span style={{ opacity: 0.7 }}>{issue}</span>
        </div>
      </div>
    </div>
  );
};

/* ─── 1. hero ────────────────────────────────────────────────────────── */

const HeroSection = ({ featured }: { featured: BlogPostMeta | null }) => (
  <section style={{ background: NAVY_DEEP, color: PAPER }} className="relative overflow-hidden">
    {/* gloss layer */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(120% 70% at 85% 0%, rgba(184,137,59,0.10) 0%, transparent 55%), radial-gradient(80% 50% at 0% 100%, rgba(109,63,217,0.08) 0%, transparent 60%)",
      }}
    />

    <div className="container relative pt-16 pb-20 desktop:pt-24 desktop:pb-28">
      <Eyebrow light>The Bizex4U Journal — Est. 2014</Eyebrow>

      <div className="mt-10 desktop:mt-14 grid grid-cols-1 desktop:grid-cols-12 gap-12 desktop:gap-16 items-end">
        <div className="desktop:col-span-8">
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(56px, 9vw, 132px)",
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: PAPER,
            }}
          >
            Campaign
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(244,239,230,0.7)" }}>intelligence,</span>
            <br />
            written from
            <br />
            the buy-side.
          </h1>
        </div>

        <div className="desktop:col-span-4 flex flex-col gap-8">
          <p
            style={{
              fontFamily: SANS,
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(244,239,230,0.78)",
              maxWidth: 360,
            }}
          >
            A private-briefing journal for marketing leaders. Airport CPMs, metro benchmarks, barter
            economics, DOOH signals — only from media we have invoiced.
          </p>

          <div className="flex flex-wrap gap-3">
            <PillLink to="#newsletter" variant="solid" onClick={() => track("cta_click", { cta: "hero_subscribe" })}>
              Get Friday brief
            </PillLink>
            <PillLink to="/resources/barter-advertising-playbook" variant="ghost" onClick={() => track("cta_click", { cta: "hero_download_playbook" })}>
              Download playbook
            </PillLink>
          </div>
        </div>
      </div>

      {/* Ticker / proof rail */}
      <div
        className="mt-16 desktop:mt-20 pt-6 grid grid-cols-2 tablet:grid-cols-4 gap-y-6 gap-x-8"
        style={{ borderTop: `1px solid ${RULE_LIGHT}` }}
      >
        {[
          { k: "₹150Cr+", v: "Media transacted" },
          { k: "320+", v: "Brands served" },
          { k: "40+", v: "Cities covered" },
          { k: "17", v: "Reports published" },
        ].map((s) => (
          <div key={s.v} className="flex flex-col gap-1.5">
            <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 38, lineHeight: 1, color: PAPER, letterSpacing: "-0.02em" }}>
              {s.k}
            </span>
            <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,239,230,0.55)" }}>
              {s.v}
            </span>
          </div>
        ))}
      </div>

      {/* Featured slip-tab */}
      {featured && (
        <Link
          to={`/blog/${featured.slug}`}
          className="group mt-14 flex flex-col tablet:flex-row tablet:items-center gap-5 tablet:gap-8 p-5 tablet:p-6 transition-colors"
          style={{
            background: "rgba(244,239,230,0.04)",
            border: `1px solid ${RULE_LIGHT}`,
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
            Currently reading
          </span>
          <span className="hidden tablet:block w-px self-stretch" style={{ background: RULE_LIGHT }} />
          <span
            style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.2, color: PAPER }}
            className="flex-1"
          >
            “{featured.title}”
          </span>
          <span
            style={{ fontFamily: DISPLAY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: PAPER }}
            className="inline-flex items-center gap-2 opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all whitespace-nowrap"
          >
            Open report <ArrowUpRight size={13} />
          </span>
        </Link>
      )}
    </div>
  </section>
);

/* ─── 2. featured story ──────────────────────────────────────────────── */

const FeaturedSection = ({ post }: { post: BlogPostMeta }) => (
  <section style={{ background: PAPER }} className="py-20 desktop:py-28">
    <div className="container">
      <SectionLabel n="01" label="Featured Report" />

      <div className="mt-12 desktop:mt-16 grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-16">
        {/* Left — image + meta */}
        <div className="desktop:col-span-7">
          <Link to={`/blog/${post.slug}`} className="group block">
            <div className="relative overflow-hidden aspect-[5/4] tablet:aspect-[16/11]" style={{ background: PAPER_DEEP }}>
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.025]"
              />
              <div
                className="absolute top-5 left-5 px-3 py-1.5"
                style={{ background: NAVY, color: PAPER, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase" }}
              >
                {post.category}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-1.5" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: NAVY, opacity: 0.6 }}>
              <span>Issue {fmtIssue(post.date)}</span>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
              <span>·</span>
              <span>By Yash Mehrotra</span>
            </div>

            <h3
              className="mt-5 transition-opacity group-hover:opacity-75"
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(32px, 4.4vw, 56px)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                color: INK,
              }}
            >
              {post.title}
            </h3>

            <p
              className="mt-6 max-w-[620px]"
              style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.6, color: INK_SOFT }}
            >
              {post.description}
            </p>

            <span
              className="mt-8 inline-flex items-center gap-2 pb-1 transition-all group-hover:gap-3"
              style={{
                fontFamily: DISPLAY,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: NAVY,
                borderBottom: `1.5px solid ${NAVY}`,
              }}
            >
              Read the report <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        {/* Right — desk note */}
        <aside className="desktop:col-span-5">
          <div className="sticky top-28">
            <div style={{ background: NAVY, color: PAPER }} className="p-8 desktop:p-10">
              <Eyebrow light>From the editor's desk</Eyebrow>
              <p
                className="mt-6"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.35,
                  color: PAPER,
                }}
              >
                “We publish only what we have actually invoiced. No estimates, no industry-report
                averages — just numbers from live buys.”
              </p>
              <p
                className="mt-6"
                style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD }}
              >
                Yash Mehrotra · Founder
              </p>
            </div>

            <div className="mt-px" style={{ background: PAPER_DEEP, border: `1px solid ${RULE}` }}>
              {[
                { label: "Brands served", stat: "320+" },
                { label: "Media transacted", stat: "₹150Cr+" },
                { label: "Cities covered", stat: "40+" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between px-7 py-5"
                  style={{ borderBottom: i < 2 ? `1px solid ${RULE}` : "none" }}
                >
                  <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: NAVY, opacity: 0.7 }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 28, color: NAVY, letterSpacing: "-0.02em" }}>
                    {s.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

/* ─── 3. media benchmarks ────────────────────────────────────────────── */

const BENCHMARKS = [
  { medium: "Airport", stat: "₹18–42", unit: "CPM (T1 metros)", delta: "+12% YoY", context: "Cost per 1,000 impressions at CSIA, DEL & BLR. Lightboxes, aerobridge, baggage belt." },
  { medium: "Metro",   stat: "4.5M",   unit: "Daily reach",     delta: "stable",    context: "Unduplicated commuters across Mumbai & Delhi networks. Station-domination available." },
  { medium: "Cinema",  stat: "₹3–9",   unit: "Per screen-second", delta: "−6% YoY", context: "PVR/INOX national buy. Pre-roll, branded content, foyer. High dwell, captive." },
  { medium: "DOOH",    stat: "+34%",   unit: "YoY growth",      delta: "tightening", context: "India programmatic OOH FY25. Premium digital inventory in metros tightening fast." },
];

const BenchmarksSection = () => (
  <section style={{ background: "#FFFFFF" }} className="py-20 desktop:py-28">
    <div className="container">
      <SectionLabel n="02" label="Media Benchmarks · Q1 2026" />

      <div className="mt-12 desktop:mt-16 grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-16 items-end mb-14 desktop:mb-20">
        <div className="desktop:col-span-7">
          <SerifHead size="clamp(36px, 5vw, 72px)">
            Only what we have <span style={{ fontStyle: "italic", color: "rgba(14,14,14,0.45)" }}>actually transacted.</span>
          </SerifHead>
        </div>
        <div className="desktop:col-span-5">
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: INK_SOFT }}>
            Sourced from 320+ FY25 campaigns. Refreshed every quarter. No estimates, no syndicated reports —
            invoiced media only.
          </p>
        </div>
      </div>

      {/* Editorial ledger table */}
      <div style={{ borderTop: `1px solid ${NAVY}` }}>
        {BENCHMARKS.map((b, i) => (
          <div
            key={b.medium}
            className="grid grid-cols-12 gap-4 desktop:gap-8 items-baseline py-7 desktop:py-9"
            style={{ borderBottom: `1px solid ${RULE}` }}
          >
            <div className="col-span-12 tablet:col-span-2 flex items-baseline gap-3">
              <span style={{ fontFamily: MONO, fontSize: 11, color: NAVY, opacity: 0.55 }}>0{i + 1}</span>
              <span style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 16, color: INK, letterSpacing: "-0.01em" }}>
                {b.medium}
              </span>
            </div>

            <div className="col-span-7 tablet:col-span-3">
              <div style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 0.95, color: NAVY, letterSpacing: "-0.025em" }}>
                {b.stat}
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: INK_SOFT, marginTop: 6 }}>
                {b.unit}
              </div>
            </div>

            <div className="col-span-5 tablet:col-span-2">
              <span
                className="inline-flex items-center px-2.5 py-1"
                style={{
                  fontFamily: MONO,
                  fontSize: 10.5,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  background: b.delta.startsWith("+") ? "rgba(184,137,59,0.12)" : b.delta.startsWith("−") ? "rgba(109,63,217,0.10)" : "rgba(11,37,69,0.08)",
                  color: b.delta.startsWith("+") ? GOLD : b.delta.startsWith("−") ? PURPLE : NAVY,
                }}
              >
                {b.delta}
              </span>
            </div>

            <p
              className="col-span-12 tablet:col-span-5"
              style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: INK_SOFT }}
            >
              {b.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 4. recent campaign notes ───────────────────────────────────────── */

const RecentNotesSection = ({ posts }: { posts: BlogPostMeta[] }) => {
  const [a, b, c] = posts;
  return (
    <section style={{ background: PAPER }} className="py-20 desktop:py-28">
      <div className="container">
        <SectionLabel n="03" label="Recent Campaign Notes" />

        <div className="mt-12 desktop:mt-16 grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-12">
          {/* Lead card */}
          {a && (
            <Link to={`/blog/${a.slug}`} className="group desktop:col-span-7 flex flex-col">
              <div className="relative overflow-hidden aspect-[16/10]" style={{ background: PAPER_DEEP }}>
                <img
                  src={a.image || "/placeholder.svg"}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.025]"
                />
              </div>
              <p className="mt-6" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: NAVY, opacity: 0.6 }}>
                {a.category} · {fmtDate(a.date)} · {a.readingMinutes} min
              </p>
              <h3
                className="mt-3 transition-opacity group-hover:opacity-70"
                style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.015em", color: INK }}
              >
                {a.title}
              </h3>
              <p className="mt-4" style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.6, color: INK_SOFT }}>
                {a.description}
              </p>
              <p className="mt-4" style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD }}>
                {categoryTeaser(a.category)}
              </p>
            </Link>
          )}

          {/* Right stack */}
          <div className="desktop:col-span-5 flex flex-col">
            {[b, c].filter(Boolean).map((p, i) => (
              <Link
                key={p!.slug}
                to={`/blog/${p!.slug}`}
                className="group grid grid-cols-12 gap-5 py-7 desktop:py-8"
                style={{
                  borderTop: i === 0 ? `1px solid ${NAVY}` : `1px solid ${RULE}`,
                  borderBottom: i === 1 ? `1px solid ${NAVY}` : "none",
                }}
              >
                <div className="col-span-4 overflow-hidden aspect-square" style={{ background: PAPER_DEEP }}>
                  <img
                    src={p!.image || "/placeholder.svg"}
                    alt={p!.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="col-span-8 flex flex-col">
                  <p style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: NAVY, opacity: 0.55 }}>
                    {p!.category} · {p!.readingMinutes} min
                  </p>
                  <h4
                    className="mt-2 transition-opacity group-hover:opacity-70"
                    style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(20px, 1.8vw, 26px)", lineHeight: 1.1, letterSpacing: "-0.01em", color: INK }}
                  >
                    {p!.title}
                  </h4>
                  <span
                    className="mt-auto pt-3 inline-flex items-center gap-1.5 self-start"
                    style={{ fontFamily: DISPLAY, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY }}
                  >
                    Read <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <PillLink to="/blog/page/2" variant="paper">All field notes</PillLink>
        </div>
      </div>
    </section>
  );
};

/* ─── 5. planning intelligence downloads ─────────────────────────────── */

const DOWNLOADS = [
  { tag: "Airport", title: "Airport Advertising Media Kit", desc: "CPMs, format specs, booking timelines and T1–T3 reach data from live buys.", href: "/resources/airport-advertising-media-kit", pages: "42 pp", updated: "Q2 · 2026" },
  { tag: "Metro",   title: "Metro Branding Playbook",       desc: "Station selection logic, format mix and dwell-time conversion.",                  href: "/resources/metro-branding-media-kit", pages: "31 pp", updated: "Q2 · 2026" },
  { tag: "Barter",  title: "Barter Advertising Handbook",   desc: "How inventory-for-media structures work. Deal flow, valuation, execution.",       href: "/resources/barter-advertising-playbook", pages: "27 pp", updated: "Q1 · 2026" },
  { tag: "DOOH",    title: "DOOH Advertising Toolkit",      desc: "Programmatic OOH primer, CPM benchmarks, creative specifications.",               href: "/resources/dooh-advertising-media-kit",  pages: "18 pp", updated: "Q2 · 2026" },
];

const DownloadsSection = () => (
  <section style={{ background: "#FFFFFF" }} className="py-20 desktop:py-28">
    <div className="container">
      <SectionLabel n="04" label="Planning Intelligence" />

      <div className="mt-12 desktop:mt-16 grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-16 items-end mb-14">
        <div className="desktop:col-span-7">
          <SerifHead size="clamp(36px, 5vw, 72px)">
            For the brief <span style={{ fontStyle: "italic", color: "rgba(14,14,14,0.45)" }}>before</span> the brief.
          </SerifHead>
        </div>
        <div className="desktop:col-span-5">
          <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: INK_SOFT }}>
            Reference dossiers used by marketing teams ahead of their planning conversations with us.
            Download what fits your channel.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4" style={{ borderTop: `1px solid ${NAVY}`, borderLeft: `1px solid ${RULE}` }}>
        {DOWNLOADS.map((dl) => (
          <Link
            key={dl.href}
            to={dl.href}
            className="group flex flex-col gap-6 p-7 desktop:p-8 transition-colors hover:bg-[--paper]"
            style={{
              ["--paper" as never]: PAPER,
              background: "#FFFFFF",
              borderRight: `1px solid ${RULE}`,
              borderBottom: `1px solid ${RULE}`,
              minHeight: 280,
            }}
            onClick={() => track("cta_click", { cta: `download_${dl.tag.toLowerCase()}` })}
          >
            <div className="flex items-start justify-between gap-2">
              <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY }}>
                /{dl.tag.toLowerCase()}
              </span>
              <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: INK_SOFT }}>
                {dl.pages}
              </span>
            </div>

            <h5
              className="transition-opacity group-hover:opacity-75"
              style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.015em", color: INK }}
            >
              {dl.title}
            </h5>

            <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: INK_SOFT }} className="flex-1">
              {dl.desc}
            </p>

            <div className="flex items-end justify-between pt-2" style={{ borderTop: `1px solid ${RULE}` }}>
              <span
                className="inline-flex items-center gap-1.5 mt-3 transition-all group-hover:gap-3"
                style={{ fontFamily: DISPLAY, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY }}
              >
                Download <ArrowUpRight size={11} />
              </span>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: INK_SOFT, marginTop: 12 }}>
                {dl.updated}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 6. friday media brief — newsletter ─────────────────────────────── */

const NewsletterSection = () => (
  <section id="newsletter" style={{ background: NAVY }} className="py-20 desktop:py-28 relative overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(60% 60% at 100% 0%, rgba(184,137,59,0.15) 0%, transparent 55%), radial-gradient(50% 50% at 0% 100%, rgba(109,63,217,0.10) 0%, transparent 60%)",
      }}
    />
    <div className="container relative">
      <SectionLabel n="05" label="The Friday Media Brief" light />

      <div className="mt-12 desktop:mt-16 grid grid-cols-1 desktop:grid-cols-12 gap-12 desktop:gap-16 items-end">
        <div className="desktop:col-span-7">
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(40px, 6vw, 92px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: PAPER,
            }}
          >
            One insight.<br />
            <span style={{ fontStyle: "italic", color: "rgba(244,239,230,0.65)" }}>Every Friday.</span><br />
            From live media.
          </h2>
        </div>

        <div className="desktop:col-span-5 flex flex-col gap-7">
          <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.6, color: "rgba(244,239,230,0.75)" }}>
            Airport CPMs, barter windows, OOH signals. No padding. One clear insight, under 90 seconds to read.
          </p>
          <NewsletterInline light />
          <p style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,230,0.45)" }}>
            Read by 320+ brand marketers · Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── archive card (page 2+) ─────────────────────────────────────────── */

const ArchiveCard = ({ post }: { post: BlogPostMeta }) => (
  <Link to={`/blog/${post.slug}`} className="group flex flex-col gap-5">
    <div className="overflow-hidden aspect-[16/10]" style={{ background: PAPER_DEEP }}>
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.025]"
      />
    </div>
    <p style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY, opacity: 0.6 }}>
      {post.category} · {fmtDate(post.date)} · {post.readingMinutes} min
    </p>
    <h4
      className="transition-opacity group-hover:opacity-70"
      style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.015em", color: INK }}
    >
      {post.title}
    </h4>
    <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: INK_SOFT }}>{post.description}</p>
    <span
      className="self-start pt-1 pb-0.5 inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5"
      style={{ fontFamily: DISPLAY, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY, borderBottom: `1.5px solid ${NAVY}` }}
    >
      Read <ArrowRight size={10} />
    </span>
  </Link>
);

/* ─── root ───────────────────────────────────────────────────────────── */

const MdxBlogIndex = () => {
  const { page } = useParams<{ page?: string }>();
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const isFirstPage = currentPage === 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = allPosts.slice(start, start + PAGE_SIZE);

  const FEATURED_PRIORITY = ["Airport Advertising", "Metro Branding", "Barter Advertising", "Outdoor Advertising", "DOOH Advertising", "Strategy"];
  const featuredPost =
    FEATURED_PRIORITY.reduce<BlogPostMeta | null>((found, cat) => {
      if (found) return found;
      return allPosts.find((p) => p.category === cat) ?? null;
    }, null) ?? allPosts[0] ?? null;

  const recentPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 3);

  const canonical = isFirstPage ? `${SITE_URL}/blog` : `${SITE_URL}/blog/page/${currentPage}`;
  const title = isFirstPage
    ? "The Bizex4U Journal — Campaign Intelligence"
    : `The Bizex4U Journal — page ${currentPage}`;
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
          <Masthead />
          <HeroSection featured={featuredPost} />
          {featuredPost && <FeaturedSection post={featuredPost} />}
          <BenchmarksSection />
          {recentPosts.length > 0 && <RecentNotesSection posts={recentPosts} />}
          <DownloadsSection />
          <NewsletterSection />
        </>
      ) : (
        <main className="py-24 desktop:py-32" style={{ background: PAPER }}>
          <div className="container">
            <div className="mb-14">
              <Eyebrow>Campaign Intelligence · Page {currentPage}</Eyebrow>
              <Link
                to="/blog"
                className="mt-5 inline-flex items-center gap-1.5 transition-opacity hover:opacity-60"
                style={{ fontFamily: DISPLAY, fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY }}
              >
                ← Back to the journal
              </Link>
            </div>

            {visible.length === 0 ? (
              <p style={{ fontFamily: SANS, fontSize: 16, color: INK_SOFT }}>No posts on this page.</p>
            ) : (
              <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-10 gap-y-16">
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
