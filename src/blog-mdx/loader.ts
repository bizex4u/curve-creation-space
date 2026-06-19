import type { ComponentType } from "react";
import blogIndex from "@/generated/blog-index.json";
import type { BlogPostMeta, LoadedBlogPost } from "./types";

// Eager-import every MDX file so they're compiled at build time and
// available synchronously (needed for SSR/prerender and instant nav).
const modules = import.meta.glob<{ default: ComponentType }>(
  "/content/blog/*.mdx",
  { eager: true }
);

const componentBySlug = new Map<string, ComponentType>();
for (const [path, mod] of Object.entries(modules)) {
  const slug = path.split("/").pop()!.replace(/\.mdx$/, "");
  componentBySlug.set(slug, mod.default);
}

const indexedPosts: BlogPostMeta[] = blogIndex as BlogPostMeta[];

export function getAllPosts(): BlogPostMeta[] {
  return indexedPosts;
}

export function getPost(slug: string): LoadedBlogPost | null {
  const meta = indexedPosts.find((p) => p.slug === slug);
  const Component = componentBySlug.get(slug);
  if (!meta || !Component) return null;
  return { ...meta, Component };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = indexedPosts.find((p) => p.slug === slug);
  if (!current) return [];
  return indexedPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tagOverlap = p.tags.filter((t) => current.tags.includes(t)).length;
      const categoryMatch = p.category === current.category ? 1 : 0;
      return { post: p, score: tagOverlap * 2 + categoryMatch };
    })
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.post);
}
