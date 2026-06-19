import type { ComponentType } from "react";

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface LoadedBlogPost extends BlogPostMeta {
  Component: ComponentType;
}
