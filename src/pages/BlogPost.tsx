import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeBlogPostCard from "@/components/HomeBlogPostCard";
import SectionHeader from "@/components/SectionHeader";
import { format } from "date-fns";
import { Loader2, Linkedin, Twitter, Link2, Check, ArrowRight, MessageCircle } from "lucide-react";
import DOMPurify from "dompurify";
import OutlineButtonBack from "@/components/OutlineButtonBack";
import BlogContentContainer from "@/components/blog/BlogContentContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FilledButton from "@/components/FilledButton";
import { useToast } from "@/hooks/use-toast";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
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

const ShareBar = ({ title }: { title: string }) => {
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
    "w-10 h-10 rounded-full border border-neutral-03 bg-neutral-00 flex items-center justify-center text-neutral-11 hover:bg-[hsl(var(--theme-main-00))] hover:border-[hsl(var(--theme-main-01))] hover:text-[hsl(var(--theme-main-02))] transition-colors";

  return (
    <div className="flex items-center gap-3">
      <span className="text-body text-neutral-10 hidden tablet:inline">Share</span>
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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug || "");
  const { data: allPosts } = useBlogPosts(true);

  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1, key: slug });
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollAnimation({ threshold: 0.1, key: slug });

  useEffect(() => {
    setIsLoaded(false);
  }, [slug]);

  useEffect(() => {
    if (post && !isLoading) {
      const timer = setTimeout(() => setIsLoaded(true), 50);
      return () => clearTimeout(timer);
    }
  }, [post, isLoading, slug]);

  const relatedPosts = allPosts?.filter((p) => post?.related_posts?.includes(p.id)) ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-00">
        <Navbar />
        <div className="flex justify-center items-center h-[50vh]">
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
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-00">
      <ReadingProgress />
      <Navbar />

      <main className="page-header-top">
        <div className="container flex flex-col items-center">
          {/* Header */}
          <header
            className="w-full max-w-[550px] tablet:w-[77%] tablet:max-w-[800px] desktop:w-[66%]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
            }}
          >
            <OutlineButtonBack href="/blog" className="mb-8">
              All posts
            </OutlineButtonBack>

            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--theme-main-00))] text-[hsl(var(--theme-main-02))] border border-[hsl(var(--theme-main-01))]">
                BIZEX4U Insights
              </span>
            </div>

            <h1 className="text-h2 text-neutral-12 mb-4">{post.title}</h1>

            {post.brief_intro && (
              <p className="text-body-large text-neutral-10 mb-8">{post.brief_intro}</p>
            )}

            {/* Meta row */}
            <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between tablet:items-center pb-6 border-b border-neutral-03">
              {post.author ? (
                <div className="flex items-center gap-3">
                  {post.author.photo_url && (
                    <img
                      src={post.author.photo_url}
                      alt={post.author.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-[hsl(var(--theme-main-01))]"
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="text-body font-medium text-neutral-12">{post.author.name}</span>
                    <div className="flex items-center gap-1.5 text-body text-neutral-10 text-sm">
                      {post.published_date && (
                        <span>{format(new Date(post.published_date), "MMM d, yyyy")}</span>
                      )}
                      {post.published_date && post.read_time && <span className="text-neutral-06">•</span>}
                      {post.read_time && <span>{post.read_time} min read</span>}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-body text-neutral-10">
                  {post.published_date && <span>{format(new Date(post.published_date), "MMM d, yyyy")}</span>}
                  {post.published_date && post.read_time && <span className="text-neutral-06">•</span>}
                  {post.read_time && <span>{post.read_time} min read</span>}
                </div>
              )}

              <ShareBar title={post.title} />
            </div>
          </header>

          {/* Thumbnail */}
          {post.thumbnail_url && (
            <div
              className="w-full mt-10 rounded-2xl overflow-hidden h-[300px] tablet:h-[450px] desktop:h-[550px]"
              style={{
                clipPath: isLoaded ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                transition: "clip-path 0.8s ease-in-out 0.2s",
              }}
            >
              <img src={post.thumbnail_url} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div
            ref={contentRef}
            className="w-full pb-16 desktop:pb-20"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
            }}
          >
            {post.content && (
              <BlogContentContainer className="mt-10">
                <article
                  className="blog-prose"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />
              </BlogContentContainer>
            )}

            {post.gallery && post.gallery.length > 0 && (
              <BlogContentContainer className="mt-10">
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
                  {post.gallery.map((url, index) => (
                    <div key={index} className="aspect-[3/2] rounded-[16px] overflow-hidden">
                      <img
                        src={url}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </BlogContentContainer>
            )}

            {/* End-of-post share + CTA */}
            <BlogContentContainer className="mt-12">
              <div className="flex items-center justify-between py-6 border-y border-neutral-03">
                <span className="text-body text-neutral-10">Found this useful?</span>
                <ShareBar title={post.title} />
              </div>

              <div className="mt-10 rounded-[24px] p-8 tablet:p-12 bg-gradient-to-br from-[hsl(var(--theme-main-00))] via-[hsl(var(--theme-main-01)/0.6)] to-[hsl(var(--theme-main-00))] border border-[hsl(var(--theme-main-01))]">
                <p className="text-body text-[hsl(var(--theme-main-02))] font-medium mb-3">
                  Ready to run yours?
                </p>
                <h3 className="text-h3 text-neutral-12 mb-4">
                  Let's plan your next campaign — cash, barter, or both.
                </h3>
                <p className="text-body-large text-neutral-10 mb-8 max-w-xl">
                  Tell us the market, budget, and timeline. We'll come back with a media plan
                  built for Indian buyers.
                </p>
                <Link to="/contact">
                  <FilledButton icon={<ArrowRight className="w-4 h-4" />}>
                    Talk to a strategist
                  </FilledButton>
                </Link>
              </div>
            </BlogContentContainer>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <>
            <div className="w-full border-t border-neutral-03" />
            <section
              ref={relatedRef}
              className="section"
              style={{
                opacity: relatedVisible ? 1 : 0,
                transform: relatedVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
              }}
            >
              <div className="container">
                <SectionHeader
                  title="More to explore"
                  subtitle=""
                  align="center"
                  className="!max-w-full tablet:!max-w-[66%] desktop:!max-w-[50%] mx-auto"
                  maxWidth="100%"
                />
                <div className="section-header grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-3 gap-y-10">
                  {relatedPosts.map((relatedPost) => (
                    <HomeBlogPostCard
                      key={relatedPost.id}
                      slug={relatedPost.slug}
                      thumbnailUrl={relatedPost.thumbnail_url || "/placeholder.svg"}
                      title={relatedPost.title}
                      briefIntro={relatedPost.brief_intro || ""}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
