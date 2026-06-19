// Scans content/blog/*.mdx, parses frontmatter, computes reading time,
// and writes src/generated/blog-index.json. Used by the blog index page,
// related posts logic, the RSS feed, and the sitemap.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join, parse } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = resolve("content/blog");
const OUT_DIR = resolve("src/generated");
const OUT_FILE = join(OUT_DIR, "blog-index.json");

export interface BlogIndexEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  readingMinutes: number;
}

function build() {
  if (!existsSync(CONTENT_DIR)) {
    mkdirSync(CONTENT_DIR, { recursive: true });
  }
  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const entries: BlogIndexEntry[] = files.map((file) => {
    const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const slug = parse(file).name;
    const rt = readingTime(content);
    return {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      author: String(data.author ?? ""),
      category: String(data.category ?? ""),
      image: String(data.image ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingMinutes: Math.max(1, Math.round(rt.minutes)),
    };
  });

  entries.sort((a, b) => (a.date < b.date ? 1 : -1));

  writeFileSync(OUT_FILE, JSON.stringify(entries, null, 2));
  console.log(`blog-index.json written (${entries.length} posts)`);
  return entries;
}

build();
