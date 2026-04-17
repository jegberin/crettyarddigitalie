// Build-time sitemap generator.
// Scans client/content/blog/*.md, combines with the hand-maintained static URL
// set below, and writes sitemap.xml to both client/public/ and docs/ so the
// runtime server and the optional static export stay aligned.
//
// Runs automatically at the start of `npm run build` (see script/build.ts).

import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";

function splitFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  try {
    const data = (yaml.load(match[1]) ?? {}) as Record<string, unknown>;
    return { data, content: match[2] };
  } catch {
    return { data: {}, content: match[2] };
  }
}

const ROOT = path.resolve(process.cwd());
const BLOG_DIR = path.join(ROOT, "client", "content", "blog");
const OUTPUTS = [
  path.join(ROOT, "client", "public", "sitemap.xml"),
  path.join(ROOT, "docs", "sitemap.xml"),
];
const BASE_URL = "https://crettyarddigital.ie";

type StaticEntry = {
  loc: string;
  priority: string;
  changefreq: "monthly" | "yearly" | "weekly";
  comment?: string;
};

// Hand-maintained set of non-blog URLs. Kept in one place — edit here when
// adding or removing a service/landing page.
const STATIC_ENTRIES: StaticEntry[] = [
  { loc: "/", priority: "1.0", changefreq: "monthly", comment: "Core pages" },
  { loc: "/contact", priority: "0.9", changefreq: "monthly" },
  { loc: "/pricing", priority: "0.9", changefreq: "monthly" },
  { loc: "/portfolio", priority: "0.9", changefreq: "monthly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/how-it-works", priority: "0.8", changefreq: "monthly" },

  { loc: "/web-design", priority: "0.9", changefreq: "monthly", comment: "Service pages" },
  { loc: "/microsoft-365", priority: "0.9", changefreq: "monthly" },
  { loc: "/managed-it-support", priority: "0.9", changefreq: "monthly" },
  { loc: "/managed-hardware", priority: "0.9", changefreq: "monthly" },
  { loc: "/network-wifi-security", priority: "0.9", changefreq: "monthly" },
  { loc: "/cybersecurity", priority: "0.9", changefreq: "monthly" },
  { loc: "/ai-readiness", priority: "0.8", changefreq: "monthly" },
  { loc: "/website-care-plans", priority: "0.8", changefreq: "monthly" },
  { loc: "/grants-funding", priority: "0.8", changefreq: "monthly" },

  { loc: "/dora-compliance", priority: "0.7", changefreq: "monthly", comment: "Compliance" },

  { loc: "/trades", priority: "0.8", changefreq: "monthly", comment: "Sector pages" },
  { loc: "/professional-services", priority: "0.8", changefreq: "monthly" },

  { loc: "/web-design-laois", priority: "0.7", changefreq: "monthly", comment: "Local SEO: Web Design" },
  { loc: "/web-design-carlow", priority: "0.7", changefreq: "monthly" },
  { loc: "/web-design-kilkenny", priority: "0.7", changefreq: "monthly" },

  { loc: "/it-support-laois", priority: "0.7", changefreq: "monthly", comment: "Local SEO: IT Support" },
  { loc: "/it-support-carlow", priority: "0.7", changefreq: "monthly" },
  { loc: "/it-support-kilkenny", priority: "0.7", changefreq: "monthly" },

  { loc: "/microsoft-365-setup-ireland", priority: "0.7", changefreq: "monthly", comment: "Local SEO: Other services" },
  { loc: "/network-wifi-laois-carlow", priority: "0.7", changefreq: "monthly" },
];

function slugifyTag(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normaliseDate(input: unknown): string {
  if (input instanceof Date) return input.toISOString().slice(0, 10);
  if (typeof input === "string") return input;
  return "";
}

async function scanBlogPosts(): Promise<Array<{ slug: string; date: string; tags: string[] }>> {
  let entries: string[];
  try {
    entries = await fs.readdir(BLOG_DIR);
  } catch (err: any) {
    if (err?.code === "ENOENT") {
      console.log(`[sitemap] No blog directory at ${BLOG_DIR} — skipping blog URLs.`);
      return [];
    }
    throw err;
  }

  const posts: Array<{ slug: string; date: string; tags: string[] }> = [];
  for (const file of entries) {
    if (!file.endsWith(".md")) continue;
    const filePath = path.join(BLOG_DIR, file);
    const raw = await fs.readFile(filePath, "utf-8");
    const fm = splitFrontmatter(raw).data;

    if (fm.draft === true) {
      console.log(`[sitemap] Skipping draft: ${file}`);
      continue;
    }
    const slug = typeof fm.slug === "string" ? fm.slug : "";
    const date = normaliseDate(fm.date);
    if (!slug || !date) {
      console.warn(`[sitemap] Skipping ${file} — missing required frontmatter (slug/date).`);
      continue;
    }
    posts.push({
      slug,
      date,
      tags: Array.isArray(fm.tags) ? fm.tags.filter((t): t is string => typeof t === "string") : [],
    });
  }
  return posts;
}

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildXml(
  staticEntries: StaticEntry[],
  blogPosts: Array<{ slug: string; date: string; tags: string[] }>,
): string {
  const lines: string[] = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  let lastComment: string | undefined;
  for (const e of staticEntries) {
    if (e.comment && e.comment !== lastComment) {
      lines.push(`  <!-- ${xmlEscape(e.comment)} -->`);
      lastComment = e.comment;
    }
    const loc = BASE_URL + e.loc;
    lines.push(
      `  <url><loc>${xmlEscape(loc)}</loc><priority>${e.priority}</priority><changefreq>${e.changefreq}</changefreq></url>`,
    );
  }

  if (blogPosts.length > 0) {
    lines.push("");
    lines.push("  <!-- Blog -->");
    lines.push(
      `  <url><loc>${BASE_URL}/blog</loc><priority>0.7</priority><changefreq>weekly</changefreq></url>`,
    );

    const sortedPosts = [...blogPosts].sort((a, b) =>
      a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
    );
    for (const post of sortedPosts) {
      lines.push(
        `  <url><loc>${BASE_URL}/blog/${xmlEscape(post.slug)}</loc><lastmod>${xmlEscape(post.date)}</lastmod><priority>0.6</priority><changefreq>monthly</changefreq></url>`,
      );
    }

    const tagSlugs = new Set<string>();
    for (const post of blogPosts) {
      for (const tag of post.tags) tagSlugs.add(slugifyTag(tag));
    }
    if (tagSlugs.size > 0) {
      lines.push("");
      lines.push("  <!-- Blog tag filters -->");
      for (const slug of [...tagSlugs].sort()) {
        lines.push(
          `  <url><loc>${BASE_URL}/blog/tag/${xmlEscape(slug)}</loc><priority>0.4</priority><changefreq>weekly</changefreq></url>`,
        );
      }
    }
  }

  lines.push("</urlset>");
  return lines.join("\n") + "\n";
}

export async function generateSitemap(): Promise<void> {
  const posts = await scanBlogPosts();
  const xml = buildXml(STATIC_ENTRIES, posts);
  for (const out of OUTPUTS) {
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, xml, "utf-8");
    console.log(`[sitemap] wrote ${out} (${STATIC_ENTRIES.length} static + ${posts.length} posts)`);
  }
}

// Allow direct invocation: `tsx script/generate-sitemap.ts`
const entry = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entry && entry === path.resolve(import.meta.filename ?? "")) {
  generateSitemap().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
