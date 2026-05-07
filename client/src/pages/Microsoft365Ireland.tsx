import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import heroIreland from "@assets/m365-ireland-hero-nationwide.webp";
import iconEmailPro from "@assets/concept-email-pro.webp";
import iconCloudStorage from "@assets/concept-cloud-storage.webp";
import iconBusinessPhone from "@assets/concept-business-phone.webp";
import iconGdprShield from "@assets/concept-gdpr-shield.webp";
import iconMigrationSafe from "@assets/concept-migration-safe.webp";
import iconGrantEuro from "@assets/concept-grant-euro.webp";

export default function Microsoft365Ireland() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Microsoft 365 Setup &mdash; Ireland</span>
              <h1 className="display-sm text-white mb-6">
                Microsoft 365 Setup for Irish Small Businesses &mdash; Done Properly, Done Securely, Done Remotely
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Professional email, cloud file storage, Microsoft Teams, Teams Phone, and optional Microsoft 365 Copilot &mdash; all set up with EU data residency, GDPR compliance, Microsoft Entra ID, and proper security from day one. Remote-first delivery means I work with small businesses anywhere in Ireland &mdash; Dublin, Cork, Galway, Limerick, Waterford, and every county in between &mdash; with on-site support available across Laois, Carlow, Kilkenny, and the Midlands.
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
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroIreland}
                alt="Microsoft 365 business email and Teams open on a laptop and phone on a windowsill overlooking a typical Irish town at golden hour"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
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
              { img: iconEmailPro, alt: "Glass envelope with an @-symbol representing professional business email", title: "Professional @yourbusiness.ie Email", desc: "Every email builds credibility. 50GB+ mailbox, shared calendars, contacts. Configured with EU data residency so your data stays in Ireland/EU." },
              { img: iconCloudStorage, alt: "Glass cloud cradling a folder representing OneDrive and SharePoint cloud storage", title: "Cloud Files That Just Work", desc: "OneDrive for personal files, SharePoint for team files. Accessible from any device, version-controlled, properly backed up. No more USB sticks." },
              { img: iconBusinessPhone, alt: "Glass telephone handset representing Microsoft Teams Phone", title: "Teams Phone", desc: "Replace your landline with a modern business phone system. Calls from mobile, laptop, or desk phone \u2014 all integrated with your calendar and email." },
              { img: iconGdprShield, alt: "Glass shield with a tick and EU stars representing GDPR-compliant security", title: "GDPR-Compliant from Day One", desc: "Microsoft Entra ID (formerly Azure AD), MFA, encrypted email, EU data residency, and data retention policies. Business Premium adds Intune device management for regulated sectors. Not an add-on \u2014 it\u2019s how I set up every single Irish business tenant." },
              { img: iconMigrationSafe, alt: "Two glass folders connected by an arrow representing a safe data migration", title: "Full Migration \u2014 Zero Data Loss", desc: "Every email, contact, and calendar entry migrated safely from Gmail, Google Workspace, POP, IMAP, or legacy Exchange 2016/2019. Often done overnight." },
              { img: iconGrantEuro, alt: "Glass euro coin with a checkmark representing Grow Digital Voucher eligibility", title: "Grow Digital Voucher Ready", desc: "M365 is a strong fit for the voucher \u2014 50% of setup plus first-year licences may qualify, up to \u20ac5,000. A free Digital for Business consultation is required before applying.", href: "/grants-funding" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover h-full">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-16 h-16 mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                  {item.href && (
                    <Link href={item.href} className="text-accent font-headline font-bold inline-flex items-center text-sm mt-3 hover:text-primary transition-colors">
                      Full grant details <ArrowRight size={14} className="ml-1" />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mb-14">
            <div className="bg-accent/5 border border-accent/20 p-7 rounded-2xl">
              <h3 className="text-xl mb-4">How Remote Microsoft 365 Setup Works Across Ireland</h3>
              <p className="text-foreground text-[15px] font-sans mb-4">
                Remote setup isn&rsquo;t a compromise &mdash; for most Microsoft 365 deployments, it&rsquo;s faster and less disruptive than on-site. Here&rsquo;s how it runs:
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Free discovery call", desc: "A short video call so I understand your current email, file storage, and any existing Microsoft or Google tenant. I confirm the right plan (Business Basic, Standard, or Premium) and whether Copilot makes sense for you." },
                  { title: "Tenant build + hardening", desc: "I provision your tenant with EU data residency, Entra ID identity, MFA, Conditional Access, and retention policies before a single mailbox is touched." },
                  { title: "Scheduled migration", desc: "Whether you\u2019re moving from Gmail, Google Workspace, POP/IMAP, or legacy Exchange, I run the migration overnight where possible. You log in the next morning to a working inbox." },
                  { title: "Remote handover + training", desc: "Screen-share training with your team covering email, OneDrive, Teams, and (if applicable) Teams Phone and Copilot. Recordings shared so new hires can onboard themselves." },
                ].map((step) => (
                  <li key={step.title} className="flex items-start gap-3 text-[15px] font-sans">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                    <span>
                      <span className="font-headline font-bold">{step.title}:</span> <span className="text-foreground">{step.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground text-[15px] font-sans mt-4">
                If you&rsquo;re in Laois, Carlow, Kilkenny or the Midlands and want face-to-face, I&rsquo;m happy to come on-site &mdash; everywhere else in Ireland runs remote-first without compromise.
              </p>
            </div>
          </FadeIn>

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

      {/* Related services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Related Services</span>
            <h2 className="text-2xl">More Ways I Help Irish Small Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/ai-readiness", title: "Microsoft Copilot & AI", desc: "Copilot sits on top of your new Microsoft 365 tenant. I configure it securely and train your team to get real productivity gains." },
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Nationwide remote IT support with fixed monthly pricing. Your Microsoft 365 stays patched, secure, and monitored." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "NIS2, GDPR, DORA readiness and phishing protection for Irish businesses \u2014 plain-English, no hype." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer h-full">
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-foreground text-sm font-sans mb-3">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Learn more <ArrowRight size={14} className="ml-1" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* By county */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Local Coverage</span>
            <h2 className="text-2xl">Looking for Web Design or IT Support in Your County?</h2>
            <p className="text-foreground text-[15px] font-sans mt-3 max-w-2xl mx-auto">
              Beyond Microsoft 365, I also run county-specific web design and managed IT for the Laois / Carlow / Kilkenny corridor.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: "/web-design-laois", label: "Web Design \u2014 Laois" },
              { href: "/web-design-carlow", label: "Web Design \u2014 Carlow" },
              { href: "/web-design-kilkenny", label: "Web Design \u2014 Kilkenny" },
              { href: "/it-support-laois", label: "IT Support \u2014 Laois" },
              { href: "/it-support-carlow", label: "IT Support \u2014 Carlow" },
              { href: "/it-support-kilkenny", label: "IT Support \u2014 Kilkenny" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href} className="block bg-white px-5 py-4 rounded-xl text-primary font-headline font-bold text-sm hover:bg-accent/10 hover:text-accent transition-colors flex items-center justify-between">
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Get Your Irish Business on Microsoft 365 &mdash; Properly"
        subtext="Book a free consultation. I'll assess your current email and file setup, recommend the right plan, and give you a clear quote &mdash; including any grants you're eligible for."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
