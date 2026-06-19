// After Vite build, duplicate dist/index.html into dist/blog/<slug>/index.html
// and dist/blog/index.html with per-page head tags patched in so that
// non-JS social-preview crawlers see real OG metadata.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";

const BASE_URL = "https://bizex4u.com";
const DIST = resolve("dist");
const TEMPLATE = join(DIST, "index.html");
const INDEX_FILE = resolve("src/generated/blog-index.json");

interface Entry {
  slug: string;
  title: string;
  description: string;
  image: string;
}

function patchHead(html: string, opts: { title: string; description: string; url: string; image?: string }): string {
  let out = html;
  const title = opts.title.replace(/</g, "&lt;");
  const desc = opts.description.replace(/"/g, "&quot;");

  // Replace <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  // Replace name="description"
  out = out.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${desc}">`);
  // Replace og:title / og:description / og:url / twitter equivalents
  out = out.replace(/<meta property="og:title"[^>]*>/g, `<meta property="og:title" content="${title}">`);
  out = out.replace(/<meta name="twitter:title"[^>]*>/g, `<meta name="twitter:title" content="${title}">`);
  out = out.replace(/<meta property="og:description"[^>]*>/g, `<meta property="og:description" content="${desc}">`);
  out = out.replace(/<meta name="twitter:description"[^>]*>/g, `<meta name="twitter:description" content="${desc}">`);
  out = out.replace(/<meta property="og:url"[^>]*>/g, `<meta property="og:url" content="${opts.url}">`);

  if (opts.image) {
    const img = opts.image.startsWith("http") ? opts.image : `${BASE_URL}${opts.image}`;
    out = out.replace(/<meta property="og:image"[^>]*>/g, `<meta property="og:image" content="${img}">`);
    out = out.replace(/<meta name="twitter:image"[^>]*>/g, `<meta name="twitter:image" content="${img}">`);
  }

  // Inject canonical right before </head>
  out = out.replace(/<\/head>/, `  <link rel="canonical" href="${opts.url}">\n</head>`);
  return out;
}

function build() {
  if (!existsSync(TEMPLATE)) {
    console.warn("dist/index.html not found; skipping postbuild blog html");
    return;
  }
  if (!existsSync(INDEX_FILE)) {
    console.warn("blog-index.json missing; skipping postbuild blog html");
    return;
  }
  const template = readFileSync(TEMPLATE, "utf8");
  const entries: Entry[] = JSON.parse(readFileSync(INDEX_FILE, "utf8"));

  // /blog index page
  const blogDir = join(DIST, "blog");
  mkdirSync(blogDir, { recursive: true });
  writeFileSync(
    join(blogDir, "index.html"),
    patchHead(template, {
      title: "Campaign notes | Bizex4U Journal",
      description: "Field notes from real advertising campaigns we run for Indian brands.",
      url: `${BASE_URL}/blog`,
    })
  );

  // /blog/<slug>
  for (const e of entries) {
    const dir = join(blogDir, e.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "index.html"),
      patchHead(template, {
        title: `${e.title} | Bizex4U`,
        description: e.description,
        url: `${BASE_URL}/blog/${e.slug}`,
        image: e.image,
      })
    );
  }

  console.log(`postbuild: wrote ${entries.length} static blog HTML files`);
}

build();
