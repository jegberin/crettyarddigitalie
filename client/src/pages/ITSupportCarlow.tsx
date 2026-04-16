import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, ServerCog, Shield, HardHat, Quote, FileCheck, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ITSupportCarlow() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">IT Support &mdash; County Carlow</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              IT Support for Carlow Businesses &mdash; Especially Construction, Trades, and Growing Firms
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              Carlow's construction and trades sector is one of the strongest in the Southeast. But here's what's changed: your bigger clients are now asking about your IT security. Under NIS2, main contractors must ensure their supply chain is secure &mdash; and that includes you. I help Carlow businesses get their IT sorted, their security documented, and their compliance ready for when the question comes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Book a Free IT &amp; Security Review</Button>
              </Link>
              <Link href="/managed-it-support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">See Full IT Plans &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Carlow Reality</span>
            <h2 className="text-3xl">Carlow's Construction Sector Is Booming. The IT Hasn't Caught Up.</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Carlow has a thriving construction, plant hire, and engineering sector. Businesses like Nurney Plant and Civil operate at a scale that demands professional technology &mdash; but many still rely on personal email accounts, unsecured file sharing, and ad-hoc IT fixes.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              The NIS2 directive has changed the game for these businesses. Main contractors and council bodies now have a legal obligation to verify their suppliers' IT security. If a Carlow subcontractor can't demonstrate basic cybersecurity measures &mdash; MFA, encrypted email, proper backup &mdash; they risk being dropped from tender lists.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-bold">
              I've already helped Carlow businesses solve this. I'm five minutes from the county border, I understand the local industry, and I provide the IT infrastructure that keeps you competitive and compliant.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Proof block */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-foreground text-lg leading-relaxed font-sans italic mb-4">
                    "Joey did the lot for us &mdash; a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. Can't recommend him enough."
                  </p>
                  <p className="font-headline font-bold text-primary">Brian, Nurney Plant and Civil &mdash; Co. Carlow</p>
                  <p className="text-sm text-muted-foreground">Gmail &rarr; professional email, patchy Wi-Fi &rarr; full premises coverage, no website &rarr; professional online presence</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl">What Carlow Businesses Get</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: ServerCog, title: "Proactive IT Management", desc: "Systems monitored, updates applied, problems prevented. When issues do occur, I fix them fast because I already know your setup \u2014 no starting from scratch." },
              { icon: Shield, title: "NIS2-Ready Security", desc: "MFA, email protection, endpoint security, and documented compliance. When a main contractor or council asks about your security posture, you have the answer ready." },
              { icon: HardHat, title: "Office-to-Site Connectivity", desc: "Proper email and file sharing between the office and field crews. Microsoft 365 configured so quotes, photos, and documents flow seamlessly between locations." },
              { icon: FileCheck, title: "Supply Chain Documentation", desc: "I provide the IT security documentation that larger clients increasingly require from their Carlow subcontractors. Audit-ready, current, and comprehensive." },
              { icon: Wrench, title: "On-Site Support", desc: "Five minutes from Carlow. Network installs, hardware setup, and troubleshooting that requires someone physically present." },
              { icon: CheckCircle, title: "Fixed Monthly Pricing", desc: "No surprise bills. No hourly rates. Predictable costs so you can budget with confidence." },
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
        </div>
      </section>

      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h3 className="text-xl mb-4">Plans for Carlow Businesses</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="font-headline font-bold text-accent text-lg">&euro;45</p>
                <p className="text-xs text-muted-foreground">Essential / user / month</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;75</p>
                <p className="text-xs text-muted-foreground">Professional / user / month</p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <p className="font-headline font-bold text-accent text-lg">&euro;110</p>
                <p className="text-xs text-muted-foreground">Comprehensive / user / month</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "itc-1", q: "My main contractor is asking about IT security. Can you help?", a: "This is exactly why many Carlow construction firms come to me. I implement the security measures (MFA, email encryption, backup, endpoint protection) and provide documentation that proves compliance. When the question comes, you\u2019re ready." },
                { id: "itc-2", q: "We're a small crew \u2014 is managed IT really for us?", a: "Even a 3-person operation with email, a laptop, and an internet connection benefits. At \u20ac45/user on the Essential plan, it costs less than a single emergency call-out \u2014 and prevents most emergencies." },
                { id: "itc-3", q: "Can you do on-site work in Tullow or Muinebheag?", a: "Yes. I cover all of Carlow \u2014 Carlow town, Tullow, Muinebheag (Bagenalstown), Borris, Leighlinbridge, and everywhere in between." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 bg-white">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Based in Carlow?"
        heading="Get Your Carlow Business IT-Ready and Compliant"
        subtext="Book a free IT and security review. Whether you need basic support or supply chain compliance documentation, I'll show you exactly what's needed."
        primaryText="Book a Free IT Review"
        primaryHref="/contact#send-message"
        secondaryText="See All Bundles"
        secondaryHref="/pricing"
      />
    </div>
  );
}
