import type { BlogPostMeta } from "@/blog-mdx/types";
import MdxBlogCard from "./MdxBlogCard";

const RelatedPosts = ({ posts }: { posts: BlogPostMeta[] }) => {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16 pt-12 border-t border-neutral-03">
      <h3 className="text-h4 text-neutral-12 mb-8">Related reading</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {posts.map((p) => (
          <MdxBlogCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
