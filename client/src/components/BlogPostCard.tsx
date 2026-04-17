import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate, slugifyTag } from "@/lib/blog";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="block bg-white rounded-2xl shadow-sm card-hover group h-full overflow-hidden flex flex-col"
      >
        {post.coverImage && (
          <div className="aspect-video overflow-hidden bg-secondary">
            <img
              src={post.coverImage}
              alt={post.coverImageAlt ?? ""}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-7 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-3 text-xs font-headline font-bold uppercase tracking-wide text-muted-foreground mb-3">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span aria-hidden="true">&bull;</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
            {post.draft && (
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px]">
                Draft
              </span>
            )}
          </div>
          <h3 className="font-headline font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-foreground text-[15px] font-sans mb-4 leading-relaxed">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-secondary text-primary text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-accent text-sm font-headline font-bold inline-flex items-center mt-auto">
            Read article
            <ArrowRight
              size={14}
              className="ml-1 group-hover:translate-x-0.5 transition-transform"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function TagPill({ label, slug, count }: { label: string; slug: string; count?: number }) {
  return (
    <Link
      href={`/blog/tag/${slug}`}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-primary text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
    >
      {label}
      {typeof count === "number" && (
        <span className="text-[10px] text-muted-foreground">({count})</span>
      )}
    </Link>
  );
}

// Convenience pass-through so callers don't need to import slugifyTag separately.
export { slugifyTag };
