import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { BlogPostCard, TagPill } from "@/components/BlogPostCard";
import { getAllPosts, getAllTags } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Notes &amp; Guides</span>
            <h1 className="display-sm text-white mb-6">Plain-English articles on websites, IT & compliance for small business</h1>
            <p className="text-lg md:text-xl text-white/80">
              Practical write-ups on Microsoft 365, cybersecurity, NIS2, Grow
              Digital Voucher, and running tech in a small business &mdash;
              drawn from the day-to-day work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tag filter bar */}
      {tags.length > 0 && (
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-headline font-bold uppercase tracking-wide text-muted-foreground mr-2">
                  Filter by topic:
                </span>
                {tags.map((t) => (
                  <TagPill key={t.slug} label={t.label} slug={t.slug} count={t.count} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-20 bg-[#f7f8fa] flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length === 0 ? (
            <FadeIn className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts yet &mdash; the first article is on the way. Check back
                shortly.
              </p>
            </FadeIn>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogPostCard post={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA */}
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
