import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StatsStrip } from "@/components/StatsStrip";
import iconHospitality from "@assets/concept-hospitality-dining.webp";
import iconProfessional from "@assets/concept-professional-services.webp";
import iconRetail from "@assets/concept-retail-craft.webp";
import iconTrades from "@assets/concept-trades-construction.webp";

export default function ITSupportKilkenny() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">IT Support &mdash; County Kilkenny</span>
            <h1 className="display-sm text-white mb-6">
              IT Support for Kilkenny &mdash; From Hospitality to Professional Firms
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Kilkenny businesses have unique IT needs. Restaurants and hotels need reliable POS systems and guest Wi-Fi. Professional firms need secure email and GDPR compliance. Craft and retail businesses need online and in-store technology working together. I provide managed IT support that understands these different requirements &mdash; all for a fixed monthly fee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free IT Review</Button>
              </Link>
              <Link href="/managed-it-support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">See Full IT Plans &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <StatsStrip />

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Kilkenny's IT Challenge</span>
            <h2 className="text-3xl">Different Kilkenny Businesses, Different IT Needs &mdash; One Provider</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              A restaurant on the Medieval Mile has completely different IT needs to a solicitor's office in Castlecomer or a craft business in Thomastown. But they share one thing: when their technology stops working, their business stops working. And most don't have anyone to call who understands their specific setup.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Kilkenny's hospitality sector faces additional pressure from the <Link href="/web-design-kilkenny" className="text-accent hover:underline">European Accessibility Act</Link>, which requires accessible digital services. Professional firms face GDPR and <Link href="/cybersecurity" className="text-accent hover:underline">NIS2</Link> obligations that many haven't fully addressed. Tourism businesses need technology that can handle seasonal peaks without breaking.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-bold">
              I provide IT support that's tailored to how Kilkenny actually works &mdash; not generic IT from a company that's never visited the county.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl">IT Support Tailored to Kilkenny Sectors</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { img: iconHospitality, alt: "Glass plate with fork and knife representing hospitality and tourism IT support", title: "Hospitality & Tourism", desc: "POS system support, guest Wi-Fi setup and isolation, booking system integration, and compliance with the European Accessibility Act for digital services. Your technology needs to handle Friday evening and August bank holiday peaks without flinching." },
              { img: iconProfessional, alt: "Glass briefcase representing IT for professional firms in Kilkenny", title: "Professional Firms", desc: "Secure Microsoft 365 with GDPR-compliant data handling, encrypted email, and proper document management. Solicitors, accountants, and consultants in Kilkenny need IT that protects client confidentiality and meets regulatory requirements." },
              { img: iconRetail, alt: "Glass shopping bag representing retail and craft IT support", title: "Retail & Craft", desc: "In-store and online technology working together. E-commerce support, inventory systems, payment processing, and reliable connectivity. Kilkenny's craft businesses need technology that supports rather than complicates their work." },
              { img: iconTrades, alt: "Glass construction hard hat representing IT for trades and construction", title: "Trades & Construction", desc: "Office-to-site connectivity, professional email, file sharing, and the security documentation that larger clients now require from their supply chain." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm">
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-20 h-20 mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-2xl">What Every Kilkenny Plan Includes</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Proactive system monitoring and maintenance",
              "Microsoft 365 administration and support",
              "Endpoint security (business-grade antivirus)",
              "Cloud backup and recovery",
              "GDPR compliance checks",
              "Direct access to me \u2014 not a helpdesk queue",
              "On-site visits across Kilkenny when needed",
              "Fixed monthly pricing \u2014 no surprise bills",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-2 bg-[#f3f4f5] p-4 rounded-xl">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span className="text-foreground text-[14px] font-sans">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mb-10">
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;45</p>
                <p className="text-xs text-muted-foreground">Essential / user / month</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;75</p>
                <p className="text-xs text-muted-foreground">Professional / user / month</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;110</p>
                <p className="text-xs text-muted-foreground">Comprehensive / user / month</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "itk-1", q: "Do you support POS systems for restaurants?", a: "I support the IT infrastructure that POS systems run on \u2014 network connectivity, Wi-Fi, security, and integration with your other business systems. If your POS drops out on a busy Friday, the first thing to check is usually the network \u2014 and that\u2019s exactly what I manage." },
                { id: "itk-2", q: "Can you set up separate guest Wi-Fi for my hotel or caf\u00e9?", a: "Yes. Guest Wi-Fi should be completely isolated from your business network for security and compliance. I set this up with proper bandwidth management so guests get reliable access without slowing down your staff systems." },
                { id: "itk-3", q: "I'm a solicitor in Kilkenny \u2014 what compliance do I need?", a: "At minimum: GDPR for client data handling, secure email with encryption, proper document management with access controls, and regular backup. Law Society practice management requirements apply to client funds and records. If larger corporate clients audit your supply chain under NIS2, I help you respond. I assess all of this in a free review." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-[#f3f4f5] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-3 inline-block">Related Services</span>
            <h2 className="text-2xl">More Ways I Help Kilkenny Businesses</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Full IT Plans", desc: "See the Essential / Professional / Comprehensive managed IT tiers in full detail, with complete feature lists." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Secure email, Teams, OneDrive, SharePoint and Teams Phone for Kilkenny professional firms \u2014 administered as part of your IT plan." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "NIS2, GDPR, phishing protection and EAA accessibility audits for Kilkenny hospitality and professional firms." },
              { href: "/web-design-kilkenny", title: "Web Design in Kilkenny", desc: "Sector-tailored web design with built-in EAA accessibility for Kilkenny hospitality, retail, accommodation, and trades." },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer h-full">
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

      <SpotlightCTA
        eyebrow="Based in Kilkenny?"
        heading="Get IT Support That Understands Kilkenny Business"
        subtext="Whether you run a restaurant, a professional firm, or a craft business \u2014 book a free IT review and I'll show you how managed support works for your sector."
        primaryText="Book a Free IT Review"
        primaryHref="/contact#send-message"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
