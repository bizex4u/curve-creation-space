import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HomeBlogPostCard from "./HomeBlogPostCard";
import OutlineButton from "./OutlineButton";
import BrushHighlight from "./BrushHighlight";
import { getAllPosts } from "@/blog-mdx/loader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogSection = () => {
  const displayPosts = getAllPosts().slice(0, 3);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const renderContent = () => {
    if (displayPosts.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-body text-neutral-10">No posts published yet.</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col tablet:flex-row gap-y-6 tablet:gap-x-6 tablet:gap-y-0">
        {displayPosts.map((post) => (
          <div key={post.slug} className="flex-1">
            <HomeBlogPostCard
              slug={post.slug}
              thumbnailUrl={post.image || "/placeholder.svg"}
              title={post.title}
              briefIntro={post.description || ""}
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
          <h2 className="text-h2 text-neutral-12">Campaign <BrushHighlight>notes</BrushHighlight></h2>
          <p className="text-body-large text-neutral-10 mt-4 tablet:mt-0 tablet:w-[33%] tablet:text-right">
            Field notes from real campaigns we've run for Indian brands — what worked, what we'd change, and what it cost.
          </p>

        </div>

        {/* Blog posts content */}
        {renderContent()}

        {/* Read more button */}
        <div className="flex justify-center mt-8">
          <Link to="/blog">
            <OutlineButton icon={<ArrowRight className="w-4 h-4" />}>
              Read all articles on barter & media buying
            </OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
