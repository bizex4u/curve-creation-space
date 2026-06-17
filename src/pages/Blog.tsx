import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { ArrowUpRight, Loader2, Search } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrushHighlight from "@/components/BrushHighlight";

const Blog = () => {
  const { data: posts, isLoading } = useBlogPosts(true);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!posts) return [];
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.brief_intro || "").toLowerCase().includes(q),
    );
  }, [posts, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>Field notes — campaign insights from India | BIZEX4U</title>
        <meta
          name="description"
          content="Practical playbooks on outdoor, transit, ATL/BTL and barter advertising in India — written by BIZEX4U's media planners and buyers."
        />
        <link rel="canonical" href="/blog" />
        <meta property="og:title" content="Field notes — campaign insights from India | BIZEX4U" />
        <meta property="og:description" content="Playbooks on outdoor, transit, ATL/BTL and barter advertising in India." />
        <meta property="og:url" content="/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "BIZEX4U Field Notes",
            description: "Campaign insights, barter playbooks and media-buying notes from India.",
            url: "/blog",
            publisher: { "@type": "Organization", name: "BIZEX4U" },
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Editorial masthead */}
      <header className="page-header-top pb-10 desktop:pb-14 border-b border-neutral-03 relative overflow-hidden">
        {/* soft gradient accent */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, hsl(var(--theme-main-00)) 0%, transparent 70%)",
          }}
        />
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-[820px] mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-label uppercase tracking-widest bg-neutral-00 border border-neutral-03 text-neutral-10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--theme-main-02))]" />
              Field notes · Vol. 01
            </span>
            <h1 className="text-h1 text-neutral-12">
              Honest playbooks from{" "}
              <BrushHighlight delay={300}>Indian</BrushHighlight>{" "}
              <BrushHighlight delay={500}>campaigns</BrushHighlight>
            </h1>
            <p className="text-body-large text-neutral-10 mt-5 max-w-[620px]">
              What worked, what we'd change, and what it actually cost. Written by the
              planners and buyers running outdoor, transit, ATL and BTL across India.
            </p>

            {/* Search */}
            <div className="mt-8 w-full max-w-[480px] relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-09" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts — outdoor, barter, ATL…"
                className="w-full h-12 pl-11 pr-4 rounded-full bg-neutral-00 border border-neutral-04 text-body text-neutral-12 placeholder:text-neutral-09 focus:outline-none focus:border-[hsl(var(--theme-main-02))] focus:ring-2 focus:ring-[hsl(var(--theme-main-01))] transition"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="section">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-body-large text-neutral-09">
                {query ? "No posts match that search." : "No posts yet. Check back soon."}
              </p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && !query && (
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group grid grid-cols-1 desktop:grid-cols-12 gap-6 desktop:gap-10 mb-16 desktop:mb-24"
                >
                  <div className="desktop:col-span-7 overflow-hidden rounded-[24px] bg-neutral-02">
                    <img
                      src={featured.thumbnail_url || "/placeholder.svg"}
                      alt={featured.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="desktop:col-span-5 flex flex-col justify-center">
                    <span className="text-label uppercase tracking-widest text-[hsl(var(--theme-main-02))] mb-4">
                      Featured · Latest issue
                    </span>
                    <h2 className="text-h2 text-neutral-12 leading-tight group-hover:text-[hsl(var(--theme-main-02))] transition-colors">
                      {featured.title}
                    </h2>
                    {featured.brief_intro && (
                      <p className="text-body-large text-neutral-10 mt-4 line-clamp-3">
                        {featured.brief_intro}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-6 text-body-small text-neutral-09">
                      {featured.author?.name && <span>{featured.author.name}</span>}
                      {featured.author?.name && featured.published_date && <span>·</span>}
                      {featured.published_date && (
                        <span>{format(new Date(featured.published_date), "MMM d, yyyy")}</span>
                      )}
                      {featured.read_time && <span>· {featured.read_time} min read</span>}
                    </div>
                    <span className="inline-flex items-center gap-2 mt-6 text-button text-neutral-12 group-hover:gap-3 transition-all">
                      Read the field note
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )}

              {/* Section label */}
              <div className="flex items-end justify-between mb-8 desktop:mb-10 pb-4 border-b border-neutral-03">
                <h3 className="text-h4 text-neutral-12">
                  {query ? `${filtered.length} result${filtered.length === 1 ? "" : "s"}` : "More from the field"}
                </h3>
                <span className="text-label uppercase tracking-widest text-neutral-09 hidden tablet:block">
                  {query ? "Filtered" : "Latest posts"}
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-12">
                {(query ? filtered : rest).map((post, idx) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col"
                  >
                    <div className="overflow-hidden rounded-[16px] bg-neutral-02 mb-5">
                      <img
                        src={post.thumbnail_url || "/placeholder.svg"}
                        alt={post.title}
                        loading={idx < 3 ? "eager" : "lazy"}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-label uppercase tracking-widest text-neutral-09 mb-3">
                      {post.published_date && (
                        <span>{format(new Date(post.published_date), "MMM d, yyyy")}</span>
                      )}
                      {post.read_time && <span>· {post.read_time} min</span>}
                    </div>
                    <h4 className="text-h5 text-neutral-12 group-hover:text-[hsl(var(--theme-main-02))] transition-colors leading-snug">
                      {post.title}
                    </h4>
                    {post.brief_intro && (
                      <p className="text-body text-neutral-10 mt-3 line-clamp-3">
                        {post.brief_intro}
                      </p>
                    )}
                    {post.author?.name && (
                      <div className="flex items-center gap-2 mt-5 pt-5 border-t border-neutral-03">
                        {post.author.photo_url && (
                          <img
                            src={post.author.photo_url}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        )}
                        <span className="text-body-small text-neutral-10">
                          {post.author.name}
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
