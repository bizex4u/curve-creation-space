import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrushHighlight from "@/components/BrushHighlight";
import Breadcrumbs from "@/components/blog-mdx/Breadcrumbs";
import MdxBlogCard from "@/components/blog-mdx/MdxBlogCard";
import Pagination from "@/components/blog-mdx/Pagination";
import { getAllPosts } from "@/blog-mdx/loader";

const PAGE_SIZE = 9;
const SITE_URL = "https://bizex4u.com";

const MdxBlogIndex = () => {
  const { page } = useParams<{ page?: string }>();
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / PAGE_SIZE));
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = allPosts.slice(start, start + PAGE_SIZE);

  const canonical =
    currentPage === 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog/page/${currentPage}`;
  const title =
    currentPage === 1
      ? "Campaign notes | Bizex4U Journal"
      : `Campaign notes — page ${currentPage} | Bizex4U Journal`;
  const description =
    "Field notes from real advertising campaigns we run for Indian brands — what worked, what we'd change, and what it cost.";

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
      <main className="section">
        <div className="container">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          </div>

          <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-start mb-10 desktop:mb-16">
            <h1 className="text-h1 text-neutral-12">
              Campaign <BrushHighlight>notes</BrushHighlight>
            </h1>
            <p className="text-body-large text-neutral-10 mt-4 tablet:mt-0 tablet:w-[40%] tablet:text-right">
              {description}
            </p>
          </div>

          {visible.length === 0 ? (
            <p className="text-body text-neutral-10 text-center py-16">No posts yet.</p>
          ) : (
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-10">
              {visible.map((post) => (
                <MdxBlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          <Pagination current={currentPage} total={totalPages} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MdxBlogIndex;
