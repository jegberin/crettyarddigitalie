import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Cloud, Mail, Phone, Shield, Users, BadgeEuro } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";

export default function Microsoft365Ireland() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Microsoft 365 Setup &mdash; Ireland</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              Microsoft 365 Setup for Irish Small Businesses &mdash; Done Properly, Done Securely
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Professional email, cloud file storage, Teams, and a business phone system &mdash; all set up with EU data residency, GDPR compliance, and proper security from day one. I work with small businesses across Ireland, with on-site support available across Laois, Carlow, Kilkenny, and the Midlands.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free Consultation</Button>
              </Link>
              <Link href="/microsoft-365">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Full M365 Details &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Why It Matters for Irish Businesses</span>
            <h2 className="text-3xl">Most Irish Small Businesses Are Still on Free Email and Scattered Files</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-lg text-foreground mb-8 leading-relaxed font-sans font-normal text-center">
              If you're sending quotes from a Gmail address, sharing files by USB or email attachment, and have no real security on your business email &mdash; you're not alone. Most small businesses in Ireland are in the same position. But it's costing you credibility, productivity, and potentially exposing you to GDPR risk.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-14">
            {[
              { icon: Mail, title: "Professional @yourbusiness.ie Email", desc: "Every email builds credibility. 50GB+ mailbox, shared calendars, contacts. Configured with EU data residency so your data stays in Ireland/EU." },
              { icon: Cloud, title: "Cloud Files That Just Work", desc: "OneDrive for personal files, SharePoint for team files. Accessible from any device, version-controlled, properly backed up. No more USB sticks." },
              { icon: Phone, title: "Teams Phone", desc: "Replace your landline with a modern business phone system. Calls from mobile, laptop, or desk phone &mdash; all integrated with your calendar and email." },
              { icon: Shield, title: "GDPR-Compliant from Day One", desc: "MFA, encrypted email, EU data residency, data retention policies. Not an add-on &mdash; it's how I set up every single Irish business tenant." },
              { icon: Users, title: "Full Migration &mdash; Zero Data Loss", desc: "Every email, contact, and calendar entry migrated safely from Gmail, POP, IMAP, or legacy Exchange. Often done overnight." },
              { icon: BadgeEuro, title: "Grow Digital Voucher Ready", desc: "M365 is a strong fit for the voucher \u2014 50% of setup plus first-year licences may qualify, up to \u20ac5,000. A free Digital for Business consultation is required before applying." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover">
                  <item.icon className="text-accent mb-3" size={24} />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <h3 className="text-xl mb-4">Setup Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;350</p>
                <p className="text-xs text-muted-foreground">Basic (1-5 users)</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;600</p>
                <p className="text-xs text-muted-foreground">Full migration (5-20 users)</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;7.50</p>
                <p className="text-xs text-muted-foreground">Teams Phone / user / mo</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-4">Microsoft licence fees are separate. I recommend the most cost-effective plan for your needs.</p>
            <Link href="/microsoft-365" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See full Microsoft 365 details <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Get Your Irish Business on Microsoft 365 &mdash; Properly"
        subtext="Book a free consultation. I'll assess your current email and file setup, recommend the right plan, and give you a clear quote &mdash; including any grants you're eligible for."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
