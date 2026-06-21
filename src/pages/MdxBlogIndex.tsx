import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Download, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog-mdx/Breadcrumbs";
import Pagination from "@/components/blog-mdx/Pagination";
import { getAllPosts } from "@/blog-mdx/loader";
import type { BlogPostMeta } from "@/blog-mdx/types";
import {
  AISnapshot,
  GeoIntelligence,
  MediaCostRadar,
  CroDashboard,
  StickyNote,
} from "@/components/blog-mdx/editorial/IntelligenceModules";

const PAGE_SIZE = 12;
const SITE_URL = "https://bizex4u.com";

const NAVY = "#0F2340";
const IVORY = "#FAF8F4";
const CHARCOAL = "#1E1E1E";

const CLUSTERS: { label: string; categories: string[] }[] = [
  { label: "Airport Intelligence", categories: ["Airport Advertising"] },
  { label: "Metro Intelligence", categories: ["Metro Branding"] },
  { label: "OOH Trends", categories: ["Outdoor Advertising", "DOOH Advertising"] },
  { label: "Barter Playbooks", categories: ["Barter Advertising"] },
  { label: "Media Buying", categories: ["Media Buying"] },
  { label: "CMO Notes", categories: ["Strategy"] },
  { label: "Growth Diaries", categories: ["Inside Bizex4U"] },
];

const fmtDate = (d: string) =>
  d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";

const Polaroid = ({ post, rotate = 0, delay = 0 }: { post: BlogPostMeta; rotate?: number; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24, rotate: rotate - 2 }}
    whileInView={{ opacity: 1, y: 0, rotate }}
    whileHover={{ rotate: 0, y: -6 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className="block bg-white p-3 pb-5 shadow-[0_24px_50px_-24px_rgba(15,35,64,0.4)]"
  >
    <Link to={`/blog/${post.slug}`} className="block group">
      <div className="overflow-hidden bg-neutral-02 aspect-[4/3]">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="px-1 pt-3">
        <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: NAVY, opacity: 0.65 }}>
          {post.category} · {post.readingMinutes} min
        </p>
        <p className="mt-1.5 text-[14px] leading-snug font-semibold line-clamp-2" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
          {post.title}
        </p>
      </div>
    </Link>
  </motion.div>
);

const EditorialCard = ({ post, span = "tall" }: { post: BlogPostMeta; span?: "tall" | "wide" | "square" }) => {
  const aspect = span === "tall" ? "aspect-[3/4]" : span === "wide" ? "aspect-[16/10]" : "aspect-square";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className={`overflow-hidden rounded-[16px] ${aspect} mb-4 bg-neutral-02`}>
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: NAVY, opacity: 0.7 }}>
          {post.category} · {fmtDate(post.date)} · {post.readingMinutes} min
        </p>
        <h3 className="text-[20px] leading-tight font-semibold" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
          {post.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed line-clamp-2" style={{ color: "rgba(30,30,30,0.7)" }}>
          {post.description}
        </p>
      </Link>
    </motion.div>
  );
};

const InflationBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div>
    <div className="flex justify-between text-[12px] mb-1.5" style={{ color: "rgba(30,30,30,0.7)" }}>
      <span className="uppercase tracking-wide">{label}</span>
      <span className="tabular-nums font-medium" style={{ color: CHARCOAL }}>+{value}%</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(15,35,64,0.08)" }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min(value * 4, 100)}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  </div>
);

const MdxBlogIndex = () => {
  const { page } = useParams<{ page?: string }>();
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = allPosts.slice(start, start + PAGE_SIZE);
  const isFirstPage = currentPage === 1;

  const [featured, ...rest] = visible;

  const canonical = isFirstPage ? `${SITE_URL}/blog` : `${SITE_URL}/blog/page/${currentPage}`;
  const title = isFirstPage
    ? "Campaign Intelligence | Bizex4U Journal"
    : `Campaign Intelligence — page ${currentPage} | Bizex4U Journal`;
  const description =
    "Field notes from media transactions, barter deals, airport campaigns, metro branding and growth experiments across India.";

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
      </Helmet>

      <Navbar />

      <main style={{ background: IVORY }}>
        {/* Masthead */}
        <section
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${IVORY} 0%, ${IVORY} 60%, rgba(15,35,64,0.04) 100%)`,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15,35,64,1) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="container relative">
            <div className="page-header-top">
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal" }]} />
            </div>

            <div className="pb-12 desktop:pb-20 pt-6">
              <div className="grid grid-cols-1 desktop:grid-cols-12 gap-8 items-end">
                <div className="desktop:col-span-8">
                  <p className="text-[11px] uppercase tracking-[0.32em] mb-6 inline-flex items-center gap-3" style={{ color: NAVY }}>
                    <span className="w-8 h-px" style={{ background: NAVY }} />
                    Bizex4U Journal · Vol. 02 · 2026
                  </p>
                  <h1
                    className="font-semibold tracking-tight"
                    style={{
                      color: CHARCOAL,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "clamp(44px, 7vw, 96px)",
                      lineHeight: 0.98,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Campaign{" "}
                    <span style={{ fontStyle: "italic", fontWeight: 400, color: NAVY }}>
                      Intelligence
                    </span>
                  </h1>
                </div>
                <div className="desktop:col-span-4 desktop:pl-8 desktop:border-l" style={{ borderColor: "rgba(15,35,64,0.15)" }}>
                  <p className="text-[16px] leading-[1.5]" style={{ color: "rgba(30,30,30,0.78)" }}>
                    {description}
                  </p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.22em]" style={{ color: NAVY, opacity: 0.6 }}>
                    Written for CMOs · COOs · CEOs · CROs
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-b py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em]"
              style={{ borderColor: "rgba(15,35,64,0.15)", color: NAVY }}>
              {CLUSTERS.map((c) => (
                <span key={c.label} className="opacity-80 hover:opacity-100 transition-opacity">{c.label}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured story 70/30 */}
        {isFirstPage && featured && (
          <section className="container py-16 desktop:py-24">
            <div className="grid grid-cols-1 desktop:grid-cols-10 gap-8 desktop:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="desktop:col-span-7"
              >
                <Link to={`/blog/${featured.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-[24px] aspect-[16/10] bg-neutral-02">
                    <img
                      src={featured.image || "/placeholder.svg"}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-5 left-5">
                      <StickyNote rotate={-4}>Lead story · this week</StickyNote>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.22em]" style={{ color: NAVY }}>
                    <span className="px-2.5 py-1 rounded-full" style={{ background: NAVY, color: IVORY }}>
                      {featured.category}
                    </span>
                    <span>{fmtDate(featured.date)}</span>
                    <span>· {featured.readingMinutes} min report</span>
                  </div>
                  <h2
                    className="mt-4 font-semibold"
                    style={{
                      color: CHARCOAL,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "clamp(28px, 3.6vw, 48px)",
                      lineHeight: 1.08,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-relaxed max-w-[640px]" style={{ color: "rgba(30,30,30,0.75)" }}>
                    {featured.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] border-b pb-1 transition-all group-hover:gap-3"
                    style={{ color: NAVY, borderColor: NAVY }}>
                    Read report <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Intelligence summary */}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="desktop:col-span-3"
              >
                <div className="sticky top-24 rounded-[20px] p-7 border" style={{ background: "#FFFFFF", borderColor: "rgba(15,35,64,0.1)" }}>
                  <p className="text-[10px] uppercase tracking-[0.24em] mb-1" style={{ color: NAVY, opacity: 0.7 }}>
                    Intelligence Summary
                  </p>
                  <p className="text-[12px] italic mb-6" style={{ color: "rgba(30,30,30,0.55)" }}>
                    Market context for this report
                  </p>
                  <div className="space-y-4 mb-7">
                    <InflationBar label="Airport CPM" value={18} color={NAVY} />
                    <InflationBar label="Metro inventory" value={12} color="#5b3a8a" />
                    <InflationBar label="DOOH demand" value={22} color={NAVY} />
                    <InflationBar label="Print spend" value={4} color="#5b3a8a" />
                  </div>
                  <ul className="space-y-3 text-[13px] pt-5 border-t" style={{ color: "rgba(30,30,30,0.78)", borderColor: "rgba(15,35,64,0.1)" }}>
                    <li className="flex gap-2"><span style={{ color: NAVY }}>—</span> Airport demand still climbing in Q1.</li>
                    <li className="flex gap-2"><span style={{ color: NAVY }}>—</span> Metro occupancy at 92% across DMRC.</li>
                    <li className="flex gap-2"><span style={{ color: NAVY }}>—</span> DOOH inventory tightening before festive.</li>
                  </ul>
                </div>
              </motion.aside>
            </div>
          </section>
        )}

        {/* Intelligence modules masonry */}
        {isFirstPage && (
          <section className="container pb-16 desktop:pb-24">
            <div className="flex items-end justify-between mb-10 pb-4 border-b" style={{ borderColor: "rgba(15,35,64,0.15)" }}>
              <h2 className="font-semibold" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif", fontSize: "clamp(24px, 3vw, 36px)" }}>
                The newsroom <span style={{ fontStyle: "italic", fontWeight: 400, color: NAVY }}>dashboard</span>
              </h2>
              <span className="hidden tablet:block text-[11px] uppercase tracking-[0.22em]" style={{ color: NAVY, opacity: 0.7 }}>
                Live signals · updated weekly
              </span>
            </div>

            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-12 gap-6 auto-rows-auto">
              <div className="desktop:col-span-4">
                <AISnapshot />
              </div>
              <div className="desktop:col-span-4">
                <GeoIntelligence />
              </div>
              <div className="desktop:col-span-4">
                <MediaCostRadar />
              </div>

              {rest[0] && (
                <div className="desktop:col-span-7 desktop:row-span-2">
                  <EditorialCard post={rest[0]} span="wide" />
                </div>
              )}
              <div className="desktop:col-span-5">
                <CroDashboard />
              </div>
              {rest[1] && (
                <div className="desktop:col-span-5">
                  <EditorialCard post={rest[1]} span="square" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Polaroid wall */}
        {isFirstPage && rest.length > 2 && (
          <section
            className="py-20 desktop:py-28 relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, rgba(15,35,64,0.04) 0%, rgba(15,35,64,0.08) 100%)`,
            }}
          >
            <div className="container">
              <div className="flex flex-col tablet:flex-row tablet:items-end tablet:justify-between gap-4 mb-12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] mb-3" style={{ color: NAVY }}>
                    From the cutting room floor
                  </p>
                  <h2 className="font-semibold max-w-[720px]" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                    Field notes, <span style={{ fontStyle: "italic", fontWeight: 400, color: NAVY }}>captured on site</span>
                  </h2>
                </div>
                <StickyNote rotate={2}>Pinned by the editors</StickyNote>
              </div>

              <div
                className="columns-1 tablet:columns-2 desktop:columns-3 gap-6"
                style={{ columnFill: "balance" }}
              >
                {rest.slice(2, 8).map((post, i) => (
                  <div key={post.slug} className="mb-6 break-inside-avoid">
                    <Polaroid post={post} rotate={(i % 2 === 0 ? -2 : 2) + (i % 3) * 0.5} delay={i * 0.05} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content clusters */}
        {isFirstPage && (
          <section className="container py-20 desktop:py-28">
            <div className="mb-12">
              <p className="text-[11px] uppercase tracking-[0.32em] mb-3" style={{ color: NAVY }}>
                Content clusters
              </p>
              <h2 className="font-semibold" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif", fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                Read by <span style={{ fontStyle: "italic", fontWeight: 400, color: NAVY }}>discipline</span>
              </h2>
            </div>

            <div className="space-y-10">
              {CLUSTERS.map((cluster) => {
                const items = allPosts.filter((p) => cluster.categories.includes(p.category)).slice(0, 3);
                if (items.length === 0) return null;
                return (
                  <div key={cluster.label} className="grid grid-cols-1 desktop:grid-cols-12 gap-6 pb-10 border-b" style={{ borderColor: "rgba(15,35,64,0.12)" }}>
                    <div className="desktop:col-span-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] mb-2" style={{ color: NAVY, opacity: 0.6 }}>
                        Cluster
                      </p>
                      <h3 className="text-[22px] font-semibold leading-tight" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
                        {cluster.label}
                      </h3>
                      <p className="mt-2 text-[13px]" style={{ color: "rgba(30,30,30,0.65)" }}>
                        {items.length} report{items.length === 1 ? "" : "s"}
                      </p>
                    </div>
                    <div className="desktop:col-span-9 grid grid-cols-1 tablet:grid-cols-3 gap-x-6 gap-y-6">
                      {items.map((post) => (
                        <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                          <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: NAVY, opacity: 0.7 }}>
                            {fmtDate(post.date)} · {post.readingMinutes} min
                          </p>
                          <h4 className="text-[16px] font-semibold leading-snug transition-colors group-hover:text-[#0F2340]" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
                            {post.title}
                          </h4>
                          <p className="mt-2 text-[13px] line-clamp-2" style={{ color: "rgba(30,30,30,0.65)" }}>
                            {post.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <Pagination current={currentPage} total={totalPages} />
          </section>
        )}

        {/* Subsequent pages — simpler editorial grid */}
        {!isFirstPage && (
          <section className="container py-16 desktop:py-24">
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-12">
              {visible.map((post) => (
                <EditorialCard key={post.slug} post={post} span="wide" />
              ))}
            </div>
            <Pagination current={currentPage} total={totalPages} />
          </section>
        )}
      </main>

      {/* ── DOWNLOAD CENTRE ─────────────────────────────────────────── */}
      <DownloadCentre />

      {/* ── NEWSLETTER ──────────────────────────────────────────────── */}
      <NewsletterSection />

      <Footer />
    </>
  );
};

const DOWNLOADS = [
  { tag: "Airport", title: "Airport Advertising Media Kit", desc: "CPMs, formats, booking windows, T1–T3 reach data.", href: "/resources/airport-advertising-media-kit" },
  { tag: "Metro", title: "Metro Branding Playbook", desc: "Station selection, format mix, dwell-time strategy.", href: "/resources/metro-branding-media-kit" },
  { tag: "Barter", title: "Barter Advertising Handbook", desc: "How inventory-for-media deals work. Step-by-step.", href: "/resources/barter-advertising-playbook" },
  { tag: "DOOH", title: "DOOH Advertising Toolkit", desc: "Programmatic OOH, CPM benchmarks, creative specs.", href: "/resources/dooh-advertising-media-kit" },
];

const DownloadCentre = () => (
  <section className="py-16 desktop:py-24" style={{ background: IVORY }}>
    <div className="container">
      <div className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.32em] mb-3" style={{ color: NAVY }}>Download Centre</p>
        <h2 className="font-semibold" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
          Free media planning guides.
        </h2>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-5">
        {DOWNLOADS.map((dl, i) => (
          <motion.div
            key={dl.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <Link
              to={dl.href}
              className="group flex flex-col gap-4 p-5 h-full rounded-[20px] border transition-all duration-200 hover:shadow-[0_4px_20px_rgba(15,35,64,0.08)]"
              style={{ background: "#FFFFFF", borderColor: "rgba(15,35,64,0.1)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full" style={{ background: "rgba(15,35,64,0.08)", color: NAVY }}>
                  {dl.tag}
                </span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full transition-colors" style={{ background: "rgba(15,35,64,0.05)" }}>
                  <Download size={13} style={{ color: NAVY }} />
                </div>
              </div>
              <div className="flex-1">
                <h6 className="text-[15px] font-semibold leading-snug mb-1.5" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>{dl.title}</h6>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(30,30,30,0.65)" }}>{dl.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-[12px] uppercase tracking-[0.16em] transition-colors" style={{ color: NAVY }}>
                Download free <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^\S+@\S+\.\S+$/.test(trimmed)) {
      toast({ title: "Enter a valid email" });
      return;
    }
    setSubmitting(true);
    track("lead_submit", { source: "blog_newsletter" });
    const { error } = await supabase.from("leads").insert({
      name: "Newsletter subscriber",
      email: trimmed,
      source: "blog_newsletter",
      funding_model: "Not sure yet",
      landing_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setSubmitting(false);
    if (error) { toast({ title: "Something went wrong. Try again." }); return; }
    track("lead_success", { source: "blog_newsletter" });
    toast({ title: "You're in. First brief lands Friday." });
    setEmail("");
  };

  return (
    <section className="py-16 desktop:py-24 border-t" style={{ background: NAVY, borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="container">
        <div className="flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-10">
          <div className="max-w-[520px]">
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-xl mb-5" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
              <Mail size={12} style={{ color: "rgba(255,255,255,0.7)" }} />
              <span className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.7)" }}>Weekly Media Brief</span>
            </div>
            <h2 className="font-semibold mb-4" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
              India's media intel,<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(255,255,255,0.65)" }}>in your inbox.</span>
            </h2>
            <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              CPMs, barter deals, OOH trends and campaign breakdowns — every Friday morning.
            </p>
          </div>

          <div className="flex flex-col gap-4 desktop:w-[420px]">
            <form onSubmit={handleSubmit} className="flex flex-col tablet:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="flex-1 px-4 py-3 rounded-[10px] text-[15px] focus:outline-none"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF" }}
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-3 rounded-[10px] font-semibold text-[14px] whitespace-nowrap transition-opacity hover:opacity-90"
                style={{ background: "#FFFFFF", color: NAVY }}
              >
                {submitting ? "Subscribing…" : "Get the brief"}
              </button>
            </form>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              <span>✓ 320+ brand marketers read this</span>
              <span>✓ No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MdxBlogIndex;
