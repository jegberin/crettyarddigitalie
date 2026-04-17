import { Link, useParams, Redirect } from "wouter";
import { ArrowLeft } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { BlogPostCard, TagPill } from "@/components/BlogPostCard";
import { SEO } from "@/components/SEO";
import { getAllTags, getPostsByTag } from "@/lib/blog";

export default function BlogTag() {
  const params = useParams<{ tag: string }>();
  const tagSlug = params?.tag ?? "";
  const allTags = getAllTags();
  const thisTag = allTags.find((t) => t.slug === tagSlug);
  const posts = getPostsByTag(tagSlug);

  if (!thisTag) {
    return <Redirect to="/blog" />;
  }

  const label = thisTag.label;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={`Posts tagged ${label} | Crettyard Digital`}
        description={`Blog posts tagged ${label} from Crettyard Digital — practical notes on websites, IT, and compliance for small business in Ireland.`}
        canonicalPath={`/blog/tag/${tagSlug}`}
      />

      <section className="relative bg-primary overflow-hidden py-16 md:py-24">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <FadeIn direction="up">
            <div className="mb-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-accent text-sm font-headline font-bold transition-colors"
              >
                <ArrowLeft size={14} />
                All posts
              </Link>
            </div>
            <span className="eyebrow mb-4 inline-block">Topic</span>
            <h1 className="display-sm text-white mb-4">{label}</h1>
            <p className="text-white/80">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Other tags */}
      {allTags.length > 1 && (
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-headline font-bold uppercase tracking-wide text-muted-foreground mr-2">
                  Browse other topics:
                </span>
                {allTags
                  .filter((t) => t.slug !== tagSlug)
                  .map((t) => (
                    <TagPill key={t.slug} label={t.label} slug={t.slug} count={t.count} />
                  ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <section className="py-20 bg-[#f7f8fa] flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogPostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Need help with any of this?"
        heading="Let's have a quick chat"
        subtext="Free 15-minute consultation. I'll tell you straight what's worth doing and what isn't."
        primaryHref="/contact#send-message"
        primaryText="Book a Free Consultation"
        secondaryHref="/get-a-quote"
        secondaryText="Get a Quote"
      />
    </div>
  );
}
