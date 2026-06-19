// Generates public/rss.xml from src/generated/blog-index.json.

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://bizex4u.com";
const INDEX_FILE = resolve("src/generated/blog-index.json");
const OUT_FILE = resolve("public/rss.xml");

interface Entry {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
}

function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!)
  );
}

function build() {
  if (!existsSync(INDEX_FILE)) {
    console.warn("blog-index.json missing; run build-blog-index first");
    return;
  }
  const entries: Entry[] = JSON.parse(readFileSync(INDEX_FILE, "utf8"));

  const items = entries
    .map((e) => {
      const pubDate = e.date ? new Date(e.date).toUTCString() : new Date().toUTCString();
      return [
        `    <item>`,
        `      <title>${escapeXml(e.title)}</title>`,
        `      <link>${BASE_URL}/blog/${e.slug}</link>`,
        `      <guid isPermaLink="true">${BASE_URL}/blog/${e.slug}</guid>`,
        `      <description>${escapeXml(e.description)}</description>`,
        `      <pubDate>${pubDate}</pubDate>`,
        e.author ? `      <author>noreply@bizex4u.com (${escapeXml(e.author)})</author>` : "",
        e.category ? `      <category>${escapeXml(e.category)}</category>` : "",
        `    </item>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    `  <channel>`,
    `    <title>Bizex4U Journal</title>`,
    `    <link>${BASE_URL}/blog</link>`,
    `    <description>Field notes from real advertising campaigns we run for Indian brands.</description>`,
    `    <language>en-IN</language>`,
    `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
    `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items,
    `  </channel>`,
    `</rss>`,
  ].join("\n");

  writeFileSync(OUT_FILE, xml);
  console.log(`rss.xml written (${entries.length} items)`);
}

build();
