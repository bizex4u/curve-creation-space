## Goal

Replace the `/blog` and `/blog/:slug` routes with a Git-based MDX blog that ships fully pre-rendered HTML, an RSS feed, and an updated sitemap. The existing Supabase `blog_posts` data, admin editor, and tables are left untouched (safe rollback) but no longer wired into public routes.

## Content authoring

New folder `content/blog/` at the repo root. Each post is an `.mdx` file. Filename (without extension) becomes the slug.

Required frontmatter:

```yaml
---
title: "Post title"
description: "One-line summary used for cards and meta description"
date: "2026-06-19"
author: "Name"
category: "Strategy"
image: "/blog-images/cover.jpg"   # path under public/
tags: ["barter", "outdoor"]
---
```

Two starter posts are seeded so `/blog` is not empty.

## Routes

- `/blog` — index, 9 posts per page, pagination via `/blog/page/2`, etc.
- `/blog/:slug` — full post.
- `/rss.xml` — generated.
- `/sitemap.xml` — extended to include every post.

The existing Supabase-backed `Blog`, `BlogPost`, and the home `BlogSection` keep working but `BlogSection` is left alone; the public `/blog` route now points at the MDX index. Admin routes (`/admin/blog/*`) and Supabase code are untouched.

## Features per post

- SEO `<title>`, `<meta name="description">`, canonical via `react-helmet-async`.
- Open Graph + Twitter card tags (uses `image` frontmatter; falls back to sitewide).
- JSON-LD `Article` + `BreadcrumbList`.
- Reading time (computed from MDX source at build time with `reading-time`).
- Breadcrumbs: Home › Blog › Post title.
- Related articles: up to 3 posts sharing the most tags / same category.
- Pagination on the index.

## Design

Cards reuse the existing visual language: `HomeBlogPostCard` styling (rounded 16, dot pattern panel, `text-h6` title, `text-body` excerpt, `BrushHighlight` headline on the index). Container, section padding, typography tokens, neutral palette — all existing. No hero / navbar / footer / channels changes.

## Pre-rendering (true static HTML)

Add `vite-react-ssg` (works with the existing `BrowserRouter` and React 18) to emit one static `.html` per route. Build flow becomes:

1. `prebuild` runs `scripts/build-blog-index.ts` — scans `content/blog/*.mdx`, parses frontmatter with `gray-matter`, computes reading time, writes `src/generated/blog-index.json` (used by index/related/RSS/sitemap).
2. `prebuild` runs `scripts/generate-rss.ts` → `public/rss.xml`.
3. `prebuild` runs the updated `scripts/generate-sitemap.ts` (if absent, created) which reads the same index JSON and emits one `<url>` per post.
4. `vite build` + `vite-react-ssg build` pre-renders `/`, `/blog`, `/blog/page/N`, `/blog/:slug` to static HTML so crawlers and social previews see real markup. The SPA hydrates on top.

MDX is compiled via `@mdx-js/rollup`; posts are imported with `import.meta.glob('/content/blog/*.mdx', { eager: true })` so they ship as compiled React components, not runtime-parsed strings.

## Technical details

**Dependencies added:** `@mdx-js/rollup`, `@mdx-js/react`, `gray-matter`, `reading-time`, `vite-react-ssg`, `react-helmet-async`, `remark-gfm`, `rehype-slug`.

**New files**

```text
content/blog/welcome-to-bizex4u.mdx
content/blog/cash-vs-barter-explained.mdx
src/generated/.gitkeep
src/blog-mdx/loader.ts            // glob + frontmatter typing
src/blog-mdx/types.ts
src/pages/MdxBlogIndex.tsx        // new route component
src/pages/MdxBlogPost.tsx         // new route component
src/components/blog-mdx/MdxBlogCard.tsx
src/components/blog-mdx/Breadcrumbs.tsx
src/components/blog-mdx/RelatedPosts.tsx
src/components/blog-mdx/Pagination.tsx
src/components/blog-mdx/MdxComponents.tsx   // h1/h2/p/img mappings to design tokens
scripts/build-blog-index.ts
scripts/generate-rss.ts
scripts/generate-sitemap.ts       // create if missing; otherwise extend
```

**Edited files**

- `src/App.tsx` — `/blog` → `MdxBlogIndex`, `/blog/page/:page` → `MdxBlogIndex`, `/blog/:slug` → `MdxBlogPost`. (Old `Blog`/`BlogPost` imports removed from the public routes; admin routes unchanged.)
- `src/main.tsx` — wrap with `HelmetProvider`; switch entry to `vite-react-ssg` createRoot helper.
- `vite.config.ts` — register `@mdx-js/rollup` plugin and `vite-react-ssg`.
- `package.json` — `predev` + `prebuild` scripts chained: `bunx tsx scripts/build-blog-index.ts && bunx tsx scripts/generate-rss.ts && bunx tsx scripts/generate-sitemap.ts`. Build command becomes `vite-react-ssg build`.
- `index.html` — remove `<link rel="canonical">` so per-route Helmet owns it.
- `public/robots.txt` — append `Sitemap: https://bizex4u.com/sitemap.xml`.

**Out of scope (will not touch)**

- HeroSection, ChannelsSection / `/channels`, Footer, Navbar.
- Supabase `blog_posts` table, hooks, or `/admin/blog/*`.
- Home `BlogSection` (still pulls from Supabase).

## Caveats to flag

- Switching to `vite-react-ssg` changes the build command and entry; if it fails on Lovable's build runner I'll fall back to a lighter prerender (post-build puppeteer pass) and let you know.
- Social preview crawlers will now see real per-post OG tags once the new build deploys; cached previews on LinkedIn/Slack need a manual refresh in their debuggers.
- Home blog section keeps reading from Supabase; if you'd like it to also pull MDX, that's a follow-up.
