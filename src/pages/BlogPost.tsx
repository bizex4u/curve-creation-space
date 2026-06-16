import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeBlogPostCard from "@/components/HomeBlogPostCard";
import SectionHeader from "@/components/SectionHeader";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import DOMPurify from "dompurify";
import OutlineButtonBack from "@/components/OutlineButtonBack";
import BlogContentContainer from "@/components/blog/BlogContentContainer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug || "");
  const { data: allPosts } = useBlogPosts(true);
  
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1, key: slug });
  const { ref: relatedRef, isVisible: relatedVisible } = useScrollAnimation({ threshold: 0.1, key: slug });

  // Reset animation states when slug changes
  useEffect(() => {
    setIsLoaded(false);
  }, [slug]);

  useEffect(() => {
    if (post && !isLoading) {
      // Small delay to ensure smooth animation start
      const timer = setTimeout(() => setIsLoaded(true), 50);
      return () => clearTimeout(timer);
    }
  }, [post, isLoading, slug]);

  const relatedPosts = allPosts?.filter(
    (p) => post?.related_posts?.includes(p.id)
  ) ?? [];

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
      <Navbar />

      <main className="page-header-top">
        <div className="container flex flex-col items-center">
          {/* Header Section */}
          <header 
            className="w-full max-w-[550px] tablet:w-[77%] tablet:max-w-[800px] desktop:w-[66%]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
            }}
          >
            {/* Back Button */}
            <OutlineButtonBack href="/blog" className="mb-8">
              All posts
            </OutlineButtonBack>

            {/* Title */}
            <h3 className="text-neutral-12 mb-4">{post.title}</h3>

            {/* Subtitle */}
            {post.brief_intro && (
              <p className="text-body-large text-neutral-10 mb-6">{post.brief_intro}</p>
            )}

            {/* Blog Info - Author and Date/Read Time */}
            {(post.author || post.published_date || post.read_time) && (
              <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between tablet:items-center">
                {/* Left: Author Info */}
                {post.author && (
                  <div className="flex items-center gap-3">
                    {post.author.photo_url && (
                      <img
                        src={post.author.photo_url}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="text-body font-medium text-neutral-12">
                        {post.author.name}
                      </span>
                      {post.author.position && (
                        <span className="text-body text-neutral-10">
                          {post.author.position}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Right: Date and Read Time */}
                {(post.published_date || post.read_time) && (
                  <div className="flex items-center gap-1.5 text-body text-neutral-10">
                    {post.published_date && (
                      <span>{format(new Date(post.published_date), "MMM d, yyyy")}</span>
                    )}
                    {post.published_date && post.read_time && (
                      <span className="text-neutral-06">•</span>
                    )}
                    {post.read_time && (
                      <span>{post.read_time} min read</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </header>

          {/* Thumbnail - Full width with left-to-right reveal */}
          {post.thumbnail_url && (
            <div 
              className="w-full mt-10 rounded-2xl overflow-hidden h-[300px] tablet:h-[450px] desktop:h-[550px]"
              style={{
                clipPath: isLoaded ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                transition: 'clip-path 0.8s ease-in-out 0.2s',
              }}
            >
              <img
                src={post.thumbnail_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content and Gallery wrapper with bottom padding */}
          <div 
            ref={contentRef}
            className="w-full pb-16 desktop:pb-20"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
            }}
          >
            {/* Content Section */}
            {post.content && (
              <BlogContentContainer className="mt-10">
              <div
                  className="prose prose-neutral max-w-none [&_p]:mb-8 [&_h1]:pb-1 [&_h2]:pb-1 [&_h3]:pb-1 [&_h4]:pb-1 [&_h5]:pb-1 [&_h6]:pb-1"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />
              </BlogContentContainer>
            )}

            {/* Gallery Section */}
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
          </div>
        </div>

        {/* Related Posts - divider outside container */}
        {relatedPosts.length > 0 && (
          <>
            <div className="w-full border-t border-neutral-03" />
            
            <section 
              ref={relatedRef}
              className="section"
              style={{
                opacity: relatedVisible ? 1 : 0,
                transform: relatedVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
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
