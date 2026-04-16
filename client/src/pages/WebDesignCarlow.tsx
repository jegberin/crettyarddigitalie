import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, BadgeEuro, Quote, Search, MapPin, Wrench, TrendingUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function WebDesignCarlow() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn direction="up">
            <span className="eyebrow mb-4 inline-block">Web Design &mdash; County Carlow</span>
            <h1 className="display-heading text-white mb-6 leading-tight">
              Web Design for Carlow Businesses &mdash; Built by a Neighbour, Not a Dublin Agency
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
              I'm based in Crettyard &mdash; five minutes from the Carlow border. When I build a website for a Carlow business, I understand the local economy, I know the towns, and I can meet you face-to-face. Two of my most successful projects &mdash; BM Custom Furniture and Nurney Plant and Civil &mdash; are Carlow businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact#send-message">
                <Button size="lg">Get a Free Quote</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">See Carlow Projects &rarr;</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Carlow business landscape */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Carlow Market</span>
            <h2 className="text-3xl">Carlow's Economy Is Punching Above Its Weight. Your Website Should Too.</h2>
          </FadeIn>
          <FadeIn>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              Carlow may be Ireland's second-smallest county, but its business scene doesn't reflect that. Carlow town is a regional hub with a strong mix of construction, engineering, agriculture, and professional services. The IT campus and SETU presence brings a younger, tech-aware population. Tullow and Muinebheag are thriving market towns with active local economies.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans mb-6">
              The construction and trades sector is particularly strong in Carlow &mdash; plant hire, civil engineering, carpentry, plumbing, and electrical work. These businesses win work through reputation, but reputation alone doesn't appear on Google. When a homeowner searches "carpenter Carlow" or a main contractor looks up a subcontractor before awarding work, what they find (or don't find) matters.
            </p>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-bold">
              I've already helped Carlow businesses solve this exact problem. Here are two of them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Proof blocks */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Carlow Results</span>
            <h2 className="text-2xl">What I've Built for Carlow Businesses</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm">
                <h3 className="text-lg mb-3">BM Custom Furniture</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Barry makes stunning bespoke furniture &mdash; fitted wardrobes, wall panelling, custom cabinetry &mdash; but had no website. Zero Google visibility. I built a portfolio-led site with targeted local SEO.</p>
                <div className="flex items-start gap-2 mb-3">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">"Within weeks, we were getting enquiries from people who found us on Google."</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold">Barry &mdash; Carlow/Laois border</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm">
                <h3 className="text-lg mb-3">Nurney Plant and Civil</h3>
                <p className="text-foreground text-[15px] font-sans mb-3">Brian runs a substantial plant hire and civil engineering operation near Carlow. I built the website, set up Microsoft 365 for office-to-site email, and installed Wi-Fi across the premises.</p>
                <div className="flex items-start gap-2 mb-3">
                  <Quote className="text-accent shrink-0 mt-1" size={16} />
                  <p className="text-foreground text-sm font-sans italic">"Joey did the lot for us. Can't recommend him enough."</p>
                </div>
                <p className="text-xs text-muted-foreground font-headline font-bold">Brian &mdash; Nurney, Co. Carlow</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Carlow search terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <Search className="text-accent mx-auto mb-3" size={28} />
            <h2 className="text-2xl">What Carlow Customers Search For</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "\"builder Carlow\"",
              "\"plumber Tullow\"",
              "\"accountant Carlow town\"",
              "\"plant hire Carlow\"",
              "\"cleaner Muinebheag\"",
              "\"electrician Borris\"",
              "\"restaurant Carlow\"",
              "\"B&B Carlow\"",
              "\"solicitor Carlow\"",
              "\"landscaper Leighlinbridge\"",
              "\"carpenter near me\"",
              "\"web design Carlow\"",
            ].map((term, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center text-sm font-mono text-primary/80">{term}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why local */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl">Why a Local Web Designer Matters for Carlow</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: "I'm 5 Minutes Away", desc: "Based in Crettyard on the Laois-Carlow border. Face-to-face meetings, on-site visits, same-day response." },
              { icon: Wrench, title: "I Know the Carlow Market", desc: "I've worked with Carlow trades, construction firms, and service businesses. I understand the local economy and what drives enquiries." },
              { icon: Search, title: "Local SEO Expertise", desc: "I know which Carlow search terms have volume and competition. I build your site to target the terms that actually bring in work." },
              { icon: TrendingUp, title: "Proven Carlow Results", desc: "BM Custom Furniture and Nurney Plant and Civil are real Carlow businesses getting real results from websites I built." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl card-hover">
                  <item.icon className="text-accent mb-3" size={24} />
                  <h3 className="text-base font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Grant + pricing */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="mb-14">
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <BadgeEuro className="text-accent" size={24} />
                <h3 className="text-lg">Carlow LEO Grow Digital Voucher</h3>
              </div>
              <p className="text-foreground text-[15px] font-sans mb-2">
                Carlow LEO (based in Carlow town) administers the Grow Digital Voucher, which replaced the old TOV in December 2024. It covers 50% of new software subscriptions (M365, CRM, e-commerce platforms, cybersecurity) up to &euro;5,000. Bespoke website builds aren&rsquo;t eligible. A free Digital for Business consultation is required before applying.
              </p>
              <Link href="/grants-funding" className="text-accent font-headline font-bold inline-flex items-center text-sm mt-3 hover:text-primary transition-colors">
                Full grant details <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h3 className="text-xl mb-4">Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">&euro;799</p>
                <p className="text-xs text-muted-foreground">Starter (1&ndash;3 pages)</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-xl text-center border border-accent/20">
                <p className="font-headline font-bold text-accent text-lg">&euro;1,299</p>
                <p className="text-xs text-muted-foreground">Business (4&ndash;7 pages)</p>
              </div>
              <div className="bg-[#f3f4f5] p-4 rounded-xl text-center">
                <p className="font-headline font-bold text-accent text-lg">Custom</p>
                <p className="text-xs text-muted-foreground">E-commerce / redesign</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans mb-6">All websites include a mandatory care plan from &euro;49/month.</p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-2xl">Questions from Carlow Business Owners</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "wdc-1", q: "I'm a tradesperson in Carlow \u2014 do I really need a website?", a: "Your bigger clients are Googling you before awarding work. Under NIS2, main contractors increasingly ask about their subcontractors' online presence and security. A professional website and email address signals credibility \u2014 which translates directly into winning contracts." },
                { id: "wdc-2", q: "Is the Carlow LEO grant easy to get?", a: "Carlow LEO has a reputation for relatively efficient processing. The main requirements are attending an information session and providing a clear, itemised quote. I handle the quote side and walk you through the application." },
                { id: "wdc-3", q: "Can you meet me in person?", a: "Yes \u2014 I'm based five minutes from Carlow. I regularly meet clients in Carlow town, Tullow, and the surrounding area. Face-to-face is always an option." },
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
        heading="Join the Carlow Businesses Already Getting Results"
        subtext="BM Custom Furniture and Nurney Plant and Civil started with a free consultation. Book yours and I'll show you what's possible for your business."
        primaryText="Get a Free Quote"
        primaryHref="/contact#send-message"
        secondaryText="View Carlow Projects"
        secondaryHref="/portfolio"
      />
    </div>
  );
}
