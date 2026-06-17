import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import {
  Loader2,
  Linkedin,
  Twitter,
  Link2,
  Check,
  ArrowRight,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import DOMPurify from "dompurify";
import FilledButton from "@/components/FilledButton";
import { useToast } from "@/hooks/use-toast";

/* ----------------------------- Reading Progress ---------------------------- */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[hsl(var(--theme-main-02))] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

/* --------------------------------- Share Bar -------------------------------- */
const ShareBar = ({ title, layout = "row" }: { title: string; layout?: "row" | "stack" }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copied" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Could not copy link", variant: "destructive" });
    }
  };

  const iconBtn =
    "w-10 h-10 rounded-full border border-neutral-03 bg-neutral-00 flex items-center justify-center text-neutral-11 hover:bg-[hsl(var(--theme-main-00))] hover:border-[hsl(var(--theme-main-02))] hover:text-[hsl(var(--theme-main-02))] transition-colors";

  const wrap =
    layout === "stack"
      ? "flex flex-col items-center gap-3"
      : "flex items-center gap-3";

  return (
    <div className={wrap}>
      <span className="text-label uppercase tracking-widest text-neutral-09">Share</span>
      <a
        className={iconBtn}
        href={`https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        className={iconBtn}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        className={iconBtn}
        href={`https://wa.me/?text=${enc(title + " " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
      <button onClick={copy} className={iconBtn} aria-label="Copy link">
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
};

/* ------------------------------ BlogPost Page ------------------------------ */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug || "");
  const { data: allPosts } = useBlogPosts(true);

  const relatedPosts = useMemo(() => {
    if (!post || !allPosts) return [];
    const explicit = allPosts.filter((p) => post.related_posts?.includes(p.id));
    if (explicit.length > 0) return explicit.slice(0, 3);
    // fallback — latest 3 other posts
    return allPosts.filter((p) => p.id !== post.id).slice(0, 3);
  }, [post, allPosts]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-00">
        <Navbar />
        <div className="flex justify-center items-center h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-neutral-00">
        <Navbar />
        <div className="page-header-top section">
          <div className="container text-center">
            <h1 className="text-neutral-12 mb-4">Post not found</h1>
            <Link to="/blog" className="text-[hsl(var(--theme-main-02))] hover:underline">
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const canonical = `/blog/${post.slug}`;
  const publishedISO = post.published_date
    ? new Date(post.published_date).toISOString()
    : undefined;

  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>{post.title} | BIZEX4U field notes</title>
        <meta name="description" content={post.brief_intro || post.title} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.brief_intro || post.title} />
        <meta property="og:url" content={canonical} />
        {post.thumbnail_url && <meta property="og:image" content={post.thumbnail_url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.brief_intro || post.title} />
        {post.thumbnail_url && <meta name="twitter:image" content={post.thumbnail_url} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.brief_intro,
            image: post.thumbnail_url ? [post.thumbnail_url] : undefined,
            datePublished: publishedISO,
            dateModified: post.updated_at,
            author: post.author?.name
              ? { "@type": "Person", name: post.author.name }
              : { "@type": "Organization", name: "BIZEX4U" },
            publisher: {
              "@type": "Organization",
              name: "BIZEX4U",
            },
            mainEntityOfPage: canonical,
          })}
        </script>
      </Helmet>

      <ReadingProgress />
      <Navbar />

      {/* ============================ HERO ============================ */}
      <header className="page-header-top pb-10 desktop:pb-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, hsl(var(--theme-main-00)) 0%, transparent 75%)",
          }}
        />
        <div className="container">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-body-small text-neutral-10 hover:text-[hsl(var(--theme-main-02))] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All field notes
          </Link>

          <div className="max-w-[820px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-label uppercase tracking-widest bg-neutral-00 border border-neutral-03 text-neutral-10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-main-02))]" />
              BIZEX4U field notes
            </div>

            <h1 className="text-h1 text-neutral-12 leading-tight">{post.title}</h1>

            {post.brief_intro && (
              <p className="text-body-large text-neutral-10 mt-6 max-w-[680px] mx-auto">
                {post.brief_intro}
              </p>
            )}

            {/* Meta strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-body-small text-neutral-10">
              {post.author && (
                <div className="flex items-center gap-2">
                  {post.author.photo_url && (
                    <img
                      src={post.author.photo_url}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover ring-2 ring-[hsl(var(--theme-main-01))]"
                    />
                  )}
                  <span className="text-neutral-12 font-medium">{post.author.name}</span>
                </div>
              )}
              {post.published_date && (
                <>
                  <span className="text-neutral-06">•</span>
                  <span>{format(new Date(post.published_date), "MMMM d, yyyy")}</span>
                </>
              )}
              {post.read_time && (
                <>
                  <span className="text-neutral-06">•</span>
                  <span>{post.read_time} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ============================ COVER IMAGE ============================ */}
      {post.thumbnail_url && (
        <div className="container">
          <div className="rounded-[24px] overflow-hidden bg-neutral-02 max-w-[1100px] mx-auto">
            <img
              src={post.thumbnail_url}
              alt={post.title}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>
        </div>
      )}

      {/* ============================ BODY ============================ */}
      <section className="pt-12 desktop:pt-20 pb-16 desktop:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10">
            {/* Sticky share rail (desktop) */}
            <aside className="hidden desktop:block desktop:col-span-2">
              <div className="sticky top-28">
                <ShareBar title={post.title} layout="stack" />
              </div>
            </aside>

            {/* Article */}
            <div className="desktop:col-span-8 mx-auto w-full max-w-[760px]">
              {post.content && (
                <article
                  className="blog-prose"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                  }}
                />
              )}

              {/* Gallery */}
              {post.gallery && post.gallery.length > 0 && (
                <div className="mt-12 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                  {post.gallery.map((url, i) => (
                    <div key={i} className="aspect-[3/2] rounded-[16px] overflow-hidden">
                      <img
                        src={url}
                        alt={`Campaign visual ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Author card */}
              {post.author && (
                <div className="mt-14 p-6 desktop:p-8 rounded-[20px] border border-neutral-03 bg-neutral-01 flex items-center gap-5">
                  {post.author.photo_url && (
                    <img
                      src={post.author.photo_url}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[hsl(var(--theme-main-01))] flex-shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <div className="text-label uppercase tracking-widest text-neutral-09 mb-1">
                      Written by
                    </div>
                    <div className="text-h6 text-neutral-12">{post.author.name}</div>
                    {post.author.position && (
                      <div className="text-body-small text-neutral-10 mt-0.5">
                        {post.author.position} · BIZEX4U
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Mobile share */}
              <div className="mt-10 desktop:hidden flex items-center justify-between py-5 border-y border-neutral-03">
                <span className="text-body text-neutral-10">Found this useful?</span>
                <ShareBar title={post.title} />
              </div>

              {/* CTA */}
              <div className="mt-14 rounded-[24px] p-8 tablet:p-12 bg-gradient-to-br from-[hsl(var(--theme-main-00))] via-[hsl(var(--theme-main-01)/0.5)] to-[hsl(var(--theme-main-00))] border border-[hsl(var(--theme-main-01))]">
                <p className="text-label uppercase tracking-widest text-[hsl(var(--theme-main-02))] mb-3">
                  Ready to run yours?
                </p>
                <h3 className="text-h3 text-neutral-12 mb-4">
                  Let's plan your next campaign — cash, barter, or both.
                </h3>
                <p className="text-body-large text-neutral-10 mb-8 max-w-xl">
                  Tell us the market, budget, and timeline. We'll come back with a media
                  plan built for Indian buyers.
                </p>
                <Link to="/contact">
                  <FilledButton icon={<ArrowRight className="w-4 h-4" />}>
                    Talk to a strategist
                  </FilledButton>
                </Link>
              </div>
            </div>

            {/* Right spacer for symmetry on desktop */}
            <div className="hidden desktop:block desktop:col-span-2" />
          </div>
        </div>
      </section>

      {/* ============================ RELATED ============================ */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-neutral-03 section">
          <div className="container">
            <div className="flex items-end justify-between mb-10 pb-4 border-b border-neutral-03">
              <h2 className="text-h3 text-neutral-12">Keep reading</h2>
              <Link
                to="/blog"
                className="hidden tablet:inline-flex items-center gap-2 text-button text-neutral-12 hover:text-[hsl(var(--theme-main-02))] transition-colors"
              >
                All posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-12">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group flex flex-col">
                  <div className="overflow-hidden rounded-[16px] bg-neutral-02 mb-5">
                    <img
                      src={rp.thumbnail_url || "/placeholder.svg"}
                      alt={rp.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-label uppercase tracking-widest text-neutral-09 mb-3">
                    {rp.published_date && (
                      <span>{format(new Date(rp.published_date), "MMM d, yyyy")}</span>
                    )}
                    {rp.read_time && <span>· {rp.read_time} min</span>}
                  </div>
                  <h3 className="text-h5 text-neutral-12 group-hover:text-[hsl(var(--theme-main-02))] transition-colors leading-snug">
                    {rp.title}
                  </h3>
                  {rp.brief_intro && (
                    <p className="text-body text-neutral-10 mt-3 line-clamp-3">
                      {rp.brief_intro}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
