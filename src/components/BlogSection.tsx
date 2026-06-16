import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HomeBlogPostCard from "./HomeBlogPostCard";
import OutlineButton from "./OutlineButton";
import BrushHighlight from "./BrushHighlight";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSection = () => {
  const { data: blogPosts, isLoading, isError } = useBlogPosts(true);
  const displayPosts = blogPosts?.slice(0, 3) || [];
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Determine what to render inside
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col tablet:flex-row gap-y-10 tablet:gap-x-3 tablet:gap-y-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 space-y-4">
              <Skeleton className="w-full aspect-[4/3] rounded-xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <div className="text-center py-10">
          <p className="text-body text-neutral-10">Unable to load blog posts.</p>
        </div>
      );
    }

    if (displayPosts.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-body text-neutral-10">No posts published yet.</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col tablet:flex-row gap-y-10 tablet:gap-x-3 tablet:gap-y-0">
        {displayPosts.map((post) => (
          <div key={post.slug} className="flex-1">
            <HomeBlogPostCard
              slug={post.slug}
              thumbnailUrl={post.thumbnail_url || "/placeholder.svg"}
              title={post.title}
              briefIntro={post.brief_intro || ""}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section 
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        {/* Header - same layout as PricingSection */}
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-start mb-10 desktop:mb-16">
          <h2 className="text-h2 text-neutral-12">Insights and <BrushHighlight>resources</BrushHighlight></h2>
          <p className="text-body-large text-neutral-10 mt-4 tablet:mt-0 tablet:w-[33%] tablet:text-right">
            Explore our latest articles and guides to help you manage your finances better.
          </p>
        </div>

        {/* Blog posts content */}
        {renderContent()}

        {/* Read more button */}
        <div className="flex justify-center mt-8">
          <Link to="/blog">
            <OutlineButton icon={<ArrowRight className="w-4 h-4" />}>
              Read more
            </OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
