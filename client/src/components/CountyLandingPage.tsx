import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeEuro, Search, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StatsStrip } from "@/components/StatsStrip";
import type { CountyProfile } from "@/data/countyContent";

type Service = "web-design" | "it-support";

export type CountyLandingPageProps = {
  profile: CountyProfile;
  service: Service;
};

const SERVICE_COPY: Record<Service, {
  eyebrow: string;
  h1Lead: string;
  sectionEyebrow: string;
  searchHeading: string;
  whyHeading: string;
  relatedTitle: string;
  relatedDesc: string;
  otherServiceHref: (slug: string) => string;
  otherServiceTitle: string;
  pricing: {
    heading: string;
    tiers: { amount: string; label: string; highlighted?: boolean }[];
    footnote: string;
  };
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  spotlightHeading: string;
  spotlightPrimary: { label: string; href: string };
  spotlightSecondary: { label: string; href: string };
}> = {
  "web-design": {
    eyebrow: "Web Design",
    h1Lead: "Web Design for",
    sectionEyebrow: "The Market",
    searchHeading: "What Customers Search For",
    whyHeading: "Why Work With Crettyard Digital",
    relatedTitle: "IT Support in",
    relatedDesc: "Managed IT, Microsoft 365, and cybersecurity for the same county — fixed monthly pricing, plain-English support.",
    otherServiceHref: (slug) => `/it-support-${slug}`,
    otherServiceTitle: "Managed IT Support",
    pricing: {
      heading: "Website Pricing",
      tiers: [
        { amount: "€799", label: "Starter (1–3 pages)" },
        { amount: "€1,299", label: "Business (4–7 pages)", highlighted: true },
        { amount: "Custom", label: "E-commerce / redesign" },
      ],
      footnote: "All websites include a mandatory care plan from €49/month.",
    },
    ctaPrimary: { label: "Get a Free Quote", href: "/contact#send-message" },
    ctaSecondary: { label: "See the Portfolio →", href: "/portfolio" },
    spotlightHeading: "Let's Build Your Website",
    spotlightPrimary: { label: "Get a Free Quote", href: "/contact#send-message" },
    spotlightSecondary: { label: "See Bundles & Pricing", href: "/pricing" },
  },
  "it-support": {
    eyebrow: "Managed IT Support",
    h1Lead: "Managed IT Support for",
    sectionEyebrow: "The Market",
    searchHeading: "What Businesses Search For",
    whyHeading: "Why Work With Crettyard Digital",
    relatedTitle: "Web Design in",
    relatedDesc: "Professional websites built for the same county — fixed quotes, mandatory care plans, from €799.",
    otherServiceHref: (slug) => `/web-design-${slug}`,
    otherServiceTitle: "Web Design",
    pricing: {
      heading: "Managed IT Pricing",
      tiers: [
        { amount: "€45", label: "Essential (per user / mo)" },
        { amount: "€65", label: "Professional (per user / mo)", highlighted: true },
        { amount: "€95", label: "Comprehensive (per user / mo)" },
      ],
      footnote: "NIS2 supply-chain readiness included at Professional and Comprehensive tiers. DORA readiness at Comprehensive for regulated financial clients where it applies.",
    },
    ctaPrimary: { label: "Book a Free Consultation", href: "/contact#send-message" },
    ctaSecondary: { label: "Managed IT Details →", href: "/managed-it-support" },
    spotlightHeading: "Let's Talk About Your IT",
    spotlightPrimary: { label: "Book a Free Consultation", href: "/contact#send-message" },
    spotlightSecondary: { label: "See Managed IT Plans", href: "/managed-it-support" },
  },
};

export function CountyLandingPage({ profile, service }: CountyLandingPageProps) {
  const copy = SERVICE_COPY[service];
  const heroSubline = service === "web-design" ? profile.heroAngleWebDesign : profile.heroAngleItSupport;
  const faqs = service === "web-design" ? profile.faqsWebDesign : profile.faqsItSupport;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">{copy.eyebrow} &mdash; {profile.name}</span>
              <h1 className="display-sm text-white mb-6">
                {copy.h1Lead} {profile.shortName} &mdash; {heroSubline}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                {profile.marketContext}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={copy.ctaPrimary.href}>
                  <Button size="lg">{copy.ctaPrimary.label}</Button>
                </Link>
                <Link href={copy.ctaSecondary.href}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    {copy.ctaSecondary.label}
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={profile.heroImage}
                alt={profile.heroImageAlt}
                width={940}
                height={650}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* Economic anchor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">{copy.sectionEyebrow} &mdash; {profile.shortName}</span>
            <h2 className="text-3xl">{profile.shortName}&rsquo;s SME Economy at a Glance</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              {profile.economicAnchor}
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans">
              Main towns I regularly work with: {profile.mainTowns.join(", ")}. Dominant commercial mix: {profile.dominantSectors}.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search terms */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <Search className="text-accent mx-auto mb-3" size={28} />
            <h2 className="text-2xl">{copy.searchHeading} in {profile.shortName}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {profile.searchTerms.map((term, i) => (
              <StaggerItem key={`${profile.slug}-term-${i}`}>
                <div className="bg-white px-4 py-3 rounded-xl text-center text-sm font-mono text-primary/80">{term}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl">{copy.whyHeading}</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {profile.whyUsAngles.map((angle, i) => (
              <StaggerItem key={`${profile.slug}-why-${i}`}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                  <MapPin className="text-accent mb-3" size={22} />
                  <h3 className="text-base font-headline font-bold mb-2">{angle.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{angle.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* LEO / grants */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <BadgeEuro className="text-accent" size={24} />
                <h3 className="text-lg">{profile.leo.headline}</h3>
              </div>
              <p className="text-foreground text-[15px] font-sans mb-2">
                {profile.leo.detail}
              </p>
              <Link href="/grants-funding" className="text-accent font-headline font-bold inline-flex items-center text-sm mt-3 hover:text-primary transition-colors">
                Full Grow Digital Voucher details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center">
            <h3 className="text-xl mb-6">{copy.pricing.heading}</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              {copy.pricing.tiers.map((tier, i) => (
                <div
                  key={`${profile.slug}-tier-${i}`}
                  className={
                    tier.highlighted
                      ? "bg-accent/10 p-4 rounded-xl text-center border border-accent/20"
                      : "bg-[#f3f4f5] p-4 rounded-xl text-center"
                  }
                >
                  <p className="font-headline font-bold text-accent text-lg">{tier.amount}</p>
                  <p className="text-xs text-muted-foreground">{tier.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-sans">{copy.pricing.footnote}</p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl">Common Questions from {profile.shortName} Businesses</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={`${profile.slug}-faq-${i}`}
                  value={`${profile.slug}-faq-${i}`}
                  className="border border-gray-100 rounded-xl px-6 bg-white"
                >
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">More Ways I Can Help</span>
            <h2 className="text-2xl">Other Services for {profile.shortName} Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Link href={copy.otherServiceHref(profile.slug)} className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">{copy.relatedTitle} {profile.shortName}</h3>
                <p className="text-foreground text-sm font-sans mb-3">{copy.relatedDesc}</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/microsoft-365-setup-ireland" className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">Microsoft 365 Setup</h3>
                <p className="text-foreground text-sm font-sans mb-3">Remote-first Microsoft 365 setup, Teams Phone, and Copilot for Irish small businesses. Migration, EU data residency, MFA-by-default.</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/grants-funding" className="block bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                <h3 className="text-base mb-2">Grants & Funding</h3>
                <p className="text-foreground text-sm font-sans mb-3">Full honest guide to the Grow Digital Voucher &mdash; what qualifies, what doesn&rsquo;t, and where I fit in.</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow={`Based in ${profile.shortName}?`}
        heading={copy.spotlightHeading}
        subtext={profile.ctaLine}
        primaryText={copy.spotlightPrimary.label}
        primaryHref={copy.spotlightPrimary.href}
        secondaryText={copy.spotlightSecondary.label}
        secondaryHref={copy.spotlightSecondary.href}
      />
    </div>
  );
}
