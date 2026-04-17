import yaml from "js-yaml";

function splitFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  try {
    const data = (yaml.load(match[1]) ?? {}) as Record<string, unknown>;
    return { data, content: match[2] };
  } catch (err) {
    console.warn("[blog] frontmatter parse error:", err);
    return { data: {}, content: match[2] };
  }
}

export interface BlogFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  tags: string[];
  author?: string;
  coverImage?: string;
  ogImage?: string;
  draft?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  body: string;
  readingMinutes: number;
}

export interface TagRef {
  label: string; // display form ("Microsoft 365")
  slug: string; // URL form ("microsoft-365")
  count: number;
}

// Vite inlines every .md file under client/content/blog as raw text at build
// time. This lib lives at client/src/lib/blog.ts, so posts are two dirs up.
// Eager so we can parse once at module load and memoise.
const rawPosts = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function slugifyTag(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function computeReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function normaliseDate(input: unknown): string {
  // YAML parsers treat unquoted YYYY-MM-DD as a Date object. Accept both.
  if (input instanceof Date) return input.toISOString().slice(0, 10);
  if (typeof input === "string") return input;
  return "";
}

function parsePost(filePath: string, raw: string): BlogPost | null {
  const parsed = splitFrontmatter(raw);
  const data = parsed.data;
  const body = parsed.content;

  const slug = typeof data.slug === "string" ? data.slug : "";
  const title = typeof data.title === "string" ? data.title : "";
  const description = typeof data.description === "string" ? data.description : "";
  const date = normaliseDate(data.date);

  if (!slug || !title || !description || !date) {
    console.warn(
      `[blog] Skipping ${filePath} — missing required frontmatter (slug/title/date/description).`
    );
    return null;
  }

  return {
    slug,
    title,
    description,
    date,
    tags: Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : [],
    author: typeof data.author === "string" ? data.author : "Joey",
    coverImage: typeof data.coverImage === "string" ? data.coverImage : undefined,
    ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined,
    draft: data.draft === true,
    body,
    readingMinutes: computeReadingMinutes(body),
  };
}

const ALL_POSTS: BlogPost[] = Object.entries(rawPosts)
  .map(([path, raw]) => parsePost(path, raw))
  .filter((p): p is BlogPost => p !== null)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

function visiblePosts(): BlogPost[] {
  if (import.meta.env.DEV) return ALL_POSTS;
  return ALL_POSTS.filter((p) => !p.draft);
}

export function getAllPosts(): BlogPost[] {
  return visiblePosts();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return visiblePosts().find((p) => p.slug === slug);
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return visiblePosts().filter((p) =>
    p.tags.some((t) => slugifyTag(t) === tagSlug)
  );
}

export function getAllTags(): TagRef[] {
  const counts = new Map<string, { label: string; count: number }>();
  for (const post of visiblePosts()) {
    for (const raw of post.tags) {
      const slug = slugifyTag(raw);
      const existing = counts.get(slug);
      if (existing) existing.count += 1;
      else counts.set(slug, { label: raw, count: 1 });
    }
  }
  return [...counts.entries()]
    .map(([slug, v]) => ({ slug, label: v.label, count: v.count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function formatBlogDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-IE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
