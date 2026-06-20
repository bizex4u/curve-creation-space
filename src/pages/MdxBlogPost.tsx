import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog-mdx/Breadcrumbs";
import RelatedPosts from "@/components/blog-mdx/RelatedPosts";
import { mdxComponents } from "@/components/blog-mdx/MdxComponents";
import { getPost, getRelatedPosts } from "@/blog-mdx/loader";

const SITE_URL = "https://bizex4u.com";

const MdxBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/blog" replace />;
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`
    : undefined;

  const related = getRelatedPosts(post.slug, 3);

  const ogImage = image ?? `${SITE_URL}/og-image.jpg`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: image ? [image] : [`${SITE_URL}/og-image.jpg`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author ?? "BIZEX4U",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "BIZEX4U",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const PostComponent = post.Component;
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <Helmet>
        <title>{post.title} | Bizex4U</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />
        {post.author && <meta name="author" content={post.author} />}
        <meta property="article:published_time" content={post.date} />
        {post.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />
      <main className="section">
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>

          <article className="w-full max-w-[550px] tablet:w-[74%] tablet:max-w-[800px] desktop:w-[66%] desktop:max-w-[800px] mx-auto">
            <header className="mb-10">
              {post.category && (
                <p className="text-caption text-neutral-09 uppercase tracking-wide mb-3">
                  {post.category}
                </p>
              )}
              <h1 className="text-h1 text-neutral-12 mb-5">{post.title}</h1>
              <p className="text-body-large text-neutral-10 mb-6">{post.description}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-neutral-09">
                {post.author && <span>{post.author}</span>}
                {formattedDate && <span>·</span>}
                {formattedDate && <span>{formattedDate}</span>}
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </header>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover rounded-[16px] mb-10"
              />
            )}

            <div className="mdx-content">
              <MDXProvider components={mdxComponents}>
                <PostComponent />
              </MDXProvider>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-neutral-03">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-neutral-01 text-caption text-neutral-10"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            <RelatedPosts posts={related} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MdxBlogPost;
