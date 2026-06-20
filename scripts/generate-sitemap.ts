// Writes public/sitemap.xml. Static routes + one entry per MDX blog post.

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://bizex4u.com";
const INDEX_FILE = resolve("src/generated/blog-index.json");
const OUT_FILE = resolve("public/sitemap.xml");

interface BlogEntry {
  slug: string;
  date: string;
}

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

function build() {
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/channels", changefreq: "monthly", priority: "0.8" },
    { path: "/how-it-works", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
    { path: "/trust", changefreq: "yearly", priority: "0.4" },
    { path: "/blog", changefreq: "weekly", priority: "0.9" },
    { path: "/barter-advertising", changefreq: "monthly", priority: "0.9" },
    { path: "/outdoor-advertising", changefreq: "monthly", priority: "0.9" },
    { path: "/metro-branding", changefreq: "monthly", priority: "0.9" },
    { path: "/airport-advertising", changefreq: "monthly", priority: "0.9" },
    { path: "/dooh-advertising", changefreq: "monthly", priority: "0.9" },
    // Geo / industry landing pages
    { path: "/airport-advertising-delhi", changefreq: "monthly", priority: "0.85" },
    { path: "/airport-advertising-mumbai", changefreq: "monthly", priority: "0.85" },
    { path: "/airport-advertising-bangalore", changefreq: "monthly", priority: "0.85" },
    { path: "/delhi-metro-advertising", changefreq: "monthly", priority: "0.85" },
    { path: "/mumbai-metro-advertising", changefreq: "monthly", priority: "0.85" },
    { path: "/gurgaon-hoardings", changefreq: "monthly", priority: "0.85" },
    { path: "/noida-hoardings", changefreq: "monthly", priority: "0.85" },
    { path: "/delhi-billboard-advertising", changefreq: "monthly", priority: "0.85" },
    { path: "/gurgaon-dooh-advertising", changefreq: "monthly", priority: "0.85" },
    { path: "/bangalore-dooh-advertising", changefreq: "monthly", priority: "0.85" },
    { path: "/advertising-for-fmcg-brands", changefreq: "monthly", priority: "0.85" },
    { path: "/advertising-for-d2c-brands", changefreq: "monthly", priority: "0.85" },
    { path: "/advertising-for-real-estate", changefreq: "monthly", priority: "0.85" },
    // Lead magnet resource pages
    { path: "/resources/airport-advertising-media-kit", changefreq: "monthly", priority: "0.8" },
    { path: "/resources/metro-branding-media-kit", changefreq: "monthly", priority: "0.8" },
    { path: "/resources/barter-advertising-playbook", changefreq: "monthly", priority: "0.8" },
    { path: "/resources/dooh-advertising-media-kit", changefreq: "monthly", priority: "0.8" },
  ];

  if (existsSync(INDEX_FILE)) {
    const posts: BlogEntry[] = JSON.parse(readFileSync(INDEX_FILE, "utf8"));
    for (const p of posts) {
      entries.push({
        path: `/blog/${p.slug}`,
        lastmod: p.date || undefined,
        changefreq: "yearly",
        priority: "0.7",
      });
    }
  }

  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");

  writeFileSync(OUT_FILE, xml);
  console.log(`sitemap.xml written (${entries.length} entries)`);
}

build();
