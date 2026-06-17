import { useBlogPosts } from "@/hooks/useBlogPosts";
import HomeBlogPostCard from "@/components/HomeBlogPostCard";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import readingVideo from "@/assets/Reading_in_Focus_Video.mp4";
import BrushHighlight from "@/components/BrushHighlight";
import LazyVideo from "@/components/ui/LazyVideo";

const Blog = () => {
  const { data: posts, isLoading } = useBlogPosts(true);
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-neutral-00">
      <Navbar />
      
      <PageHeader
        heading={
          <>
            Field notes from{" "}
            <BrushHighlight delay={400}>real</BrushHighlight>{" "}
            <BrushHighlight delay={600}>campaigns</BrushHighlight>{" "}
            across India
          </>
        }
        media={
          <LazyVideo
            src={readingVideo}
            className="w-full h-full"
          />
        }
      />

      <main className="section pt-8 desktop:pt-10">
        <div 
          ref={postsRef}
          className="container"
          style={{
            opacity: postsVisible ? 1 : 0,
            transform: postsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
          }}
        >
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-3 gap-y-10">
              {posts.map((post) => (
                <HomeBlogPostCard
                  key={post.id}
                  slug={post.slug}
                  thumbnailUrl={post.thumbnail_url || "/placeholder.svg"}
                  title={post.title}
                  briefIntro={post.brief_intro || ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-body-large text-neutral-08">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
