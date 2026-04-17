import { useEffect, useState } from "react";
import type { Pluggable } from "unified";
import { Link, useParams, Redirect } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { createHighlighterCore, type HighlighterCore } from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";
import rehypeSlug from "rehype-slug";
import { FadeIn } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { TagPill } from "@/components/BlogPostCard";
import { SEO, BlogPostingSchema } from "@/components/SEO";
import {
  formatBlogDate,
  getPostBySlug,
  slugifyTag,
} from "@/lib/blog";

// Fine-grained Shiki highlighter — only the langs / themes listed here are
// bundled. Rolldown statically analyses these import() calls and tree-shakes
// everything else from @shikijs/langs and @shikijs/themes.
let highlighterPromise: Promise<HighlighterCore> | null = null;
function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [import("@shikijs/themes/github-light")],
      langs: [
        import("@shikijs/langs/typescript"),
        import("@shikijs/langs/javascript"),
        import("@shikijs/langs/tsx"),
        import("@shikijs/langs/jsx"),
        import("@shikijs/langs/bash"),
        import("@shikijs/langs/shellscript"),
        import("@shikijs/langs/html"),
        import("@shikijs/langs/css"),
        import("@shikijs/langs/json"),
        import("@shikijs/langs/yaml"),
        import("@shikijs/langs/markdown"),
        import("@shikijs/langs/sql"),
        import("@shikijs/langs/python"),
        import("@shikijs/langs/docker"),
      ],
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighterPromise;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  const [highlighter, setHighlighter] = useState<HighlighterCore | null>(null);
  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((h) => {
      if (!cancelled) setHighlighter(h);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!post) return <Redirect to="/blog" />;

  const rehypePlugins: Pluggable[] = [rehypeSlug];
  if (highlighter) {
    rehypePlugins.unshift([
      rehypeShikiFromHighlighter,
      highlighter,
      { theme: "github-light" },
    ] as unknown as Pluggable);
  }

  const canonicalPath = `/blog/${post.slug}`;
  const canonicalUrl = `https://crettyarddigital.ie${canonicalPath}`;
  const ogImage = post.ogImage ?? post.coverImage;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={`${post.title} | Crettyard Digital`}
        description={post.description}
        canonicalPath={canonicalPath}
        noindex={post.draft}
        ogType="article"
        publishedTime={post.date}
        tags={post.tags}
        ogImage={ogImage}
      />
      <BlogPostingSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        author={post.author ?? "Joey"}
        url={canonicalUrl}
        coverImage={ogImage}
      />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-16 md:py-20">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <FadeIn direction="up">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-accent text-sm font-headline font-bold transition-colors"
              >
                <ArrowLeft size={14} />
                All posts
              </Link>
            </div>
            {post.draft && (
              <span className="inline-block px-2 py-0.5 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-4">
                Draft — not visible in production
              </span>
            )}
            <h1 className="display-sm text-white mb-5">{post.title}</h1>
            <p className="text-lg md:text-xl text-white/80 mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingMinutes} min read
              </span>
              <span>by {post.author ?? "Joey"}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <img
                src={post.coverImage}
                alt=""
                className="w-full h-auto rounded-2xl shadow-sm"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      )}

      {/* Body */}
      <section className="py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <article className="prose prose-navy prose-lg max-w-none font-sans">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={rehypePlugins}
              >
                {post.body}
              </ReactMarkdown>
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-xs font-headline font-bold uppercase tracking-wide text-muted-foreground mb-3">
                  Tagged
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <TagPill key={t} label={t} slug={slugifyTag(t)} />
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-accent font-headline font-bold hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to all posts
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Like what you read?"
        heading="Let's talk about your project"
        subtext="Free 15-minute consultation. I'll tell you straight what's worth doing and what isn't."
        primaryHref="/contact#send-message"
        primaryText="Book a Free Consultation"
        secondaryHref="/get-a-quote"
        secondaryText="Get a Quote"
      />
    </div>
  );
}
