import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { MonitorSmartphone, Cloud, Wifi, MessageSquare, Shield, MapPin, Languages, Wrench, Briefcase, Store, HardHat, CheckCircle2, ArrowRight, ServerCog, BrainCircuit, FileCheck, BadgeEuro, Anchor, Award } from "lucide-react";
import joeyImg from "@assets/joey-profile-photo.webp";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { CredentialBand } from "@/components/CredentialBand";
import { ContinuityCommitment } from "@/components/ContinuityCommitment";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">About Crettyard Digital</span>
            <h1 className="display-sm mb-6">
              Built on Enterprise Standards. Run for Small Irish Businesses. Here for the Long Haul.
            </h1>
            <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto font-sans font-normal">
              Fifteen years inside Microsoft, Intel and Dell. 26 industry certifications. A cloud architect background and the operating discipline that large enterprises run on &mdash; applied, in plain English, to small Irish businesses with 1 to 50 staff. Headquartered in Crettyard on the Laois&ndash;Carlow border; serving every county in Ireland.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10" data-testid="button-hero-cta">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/pricing" className="text-accent font-headline font-bold hover:text-primary transition-all duration-200 flex items-center justify-center gap-1 text-sm" data-testid="link-services">
                See Services &amp; Pricing <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CredentialBand />

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* ── Who I Help ──────────────────────────────────────────── */}
          <FadeIn className="mb-14">
            <span className="eyebrow mb-5 inline-block">Who I Help</span>
            <h2 className="text-3xl mb-4">Built for Businesses Like Yours</h2>
            <p className="text-foreground max-w-2xl font-sans font-normal">
              I specialise in helping small businesses that are brilliant at what they do &mdash; but need a hand getting their online presence, technology, and compliance sorted properly.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-20">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-tradespeople">
                <HardHat className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Tradespeople &amp; Contractors</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Electricians, plumbers, builders, carpenters, landscapers &mdash; if you win work locally and need to be found on Google. Many trade clients also find their larger clients now asking about IT security &mdash; I help with that too.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-professional">
                <Briefcase className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Professional Services</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Accountants, solicitors, consultants, financial advisors &mdash; businesses where trust matters from the first impression, and where data security and regulatory compliance (<Link href="/cybersecurity" className="text-accent hover:underline">GDPR, NIS2</Link>, <Link href="/dora-compliance" className="text-accent hover:underline">DORA</Link>) aren't optional.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-retail">
                <Store className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Retailers &amp; Hospitality</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Shops, caf&eacute;s, restaurants, and B&amp;Bs who want to attract visitors, show up in local searches, and look inviting online. The European Accessibility Act now means many online businesses need accessible websites &mdash; I build with that in mind.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-service">
                <Wrench className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Service Businesses</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">Cleaners, pest control, skip hire, vehicle recovery, tutors, therapists &mdash; businesses that depend on local enquiries to keep the diary full. A properly built website turns Google searches into phone calls.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* ── Meet Joey ───────────────────────────────────────────── */}
          <FadeIn className="mb-20">
            <span className="eyebrow mb-5 inline-block">Meet Joey</span>
            <h2 className="text-3xl mb-6">The Person Behind Crettyard Digital</h2>

            {/* Photo floats right on md+, so text wraps around it. Stacks normally on mobile. */}
            <div className="md:float-right md:ml-10 md:mb-4 md:w-[220px] mx-auto mb-8 max-w-[200px]">
              <div className="aspect-square rounded-full overflow-hidden shadow-sm">
                <img
                  src={joeyImg}
                  alt="Joey — founder of Crettyard Digital, based in Crettyard, Co. Laois"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-joey"
                  width="200"
                  height="200"
                  loading="eager"
                />
              </div>
              <p className="text-center mt-3 text-sm font-headline font-bold text-primary">Joey</p>
              <p className="text-center text-sm text-muted-foreground font-sans">Founder, Crettyard Digital</p>
            </div>

            <p className="text-lg mb-6 text-foreground leading-relaxed font-sans font-normal">
              I'm Joey &mdash; the person behind Crettyard Digital, and the person you'll deal with directly on every project.
            </p>
            <p className="mb-6 text-foreground leading-relaxed font-sans font-normal">
              Before starting this business, I spent over 15 years in enterprise IT &mdash; Senior Solution Engineer at Microsoft, Infrastructure and Platforms Manager at Intel, and Senior System Engineer at Dell EMC. Most of that time was on cloud architecture and enterprise infrastructure. 26 industry certifications, including Microsoft Azure Solutions Architect Expert. I&rsquo;ve seen how large organisations build and manage their technology: the standards they follow, the security they insist on, the reliability they demand. I&rsquo;ve also seen the rapid evolution of AI tools, cloud platforms, and cybersecurity frameworks &mdash; and I understand what it takes to implement them properly.
            </p>
            <p className="mb-6 text-foreground leading-relaxed font-sans font-normal">
              I started Crettyard Digital because I saw too many small businesses getting a raw deal. Poorly built websites that needed replacing within a year. Email setups that left businesses vulnerable to phishing. Patchy Wi-Fi that dropped out at the worst moment. And when new regulations like NIS2 and stricter GDPR enforcement arrived, these businesses had no one to turn to who could explain what it meant in plain English. The same standards work at any scale &mdash; they just need translating.
            </p>
            <p className="text-foreground leading-relaxed font-sans font-normal">
              When you work with me, you talk to the person doing the work. There are no account managers, no support tickets, no being passed between departments. Just honest, direct communication from someone who knows your setup because they built it.
            </p>

            <div className="clear-both" />
          </FadeIn>

          {/* ── How I Work ──────────────────────────────────────────── */}
          <FadeIn className="mb-8">
            <span className="eyebrow mb-5 inline-block">How I Work</span>
            <h2 className="text-3xl mb-4">What "No Jargon" Actually Means in Practice</h2>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl font-sans font-normal">
              "No jargon" isn't a marketing slogan &mdash; it's how I run every single project.
            </p>
          </FadeIn>

          <FadeIn className="mb-20">
            <div className="rounded-2xl p-8 bg-[#f3f4f5]" data-testid="section-no-jargon">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-foreground leading-relaxed mb-4 font-sans font-normal">
                    Most of my clients aren't technical &mdash; and they don't need to be. You know your business better than anyone. My job is to handle the technology so you can focus on what you do best.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4 font-sans font-normal">
                    I explain every decision in plain English before I make it. I'll tell you what I'm doing, why it matters, and how much it costs &mdash; before anything is agreed.
                  </p>
                  <p className="text-foreground leading-relaxed font-sans font-normal">
                    If something can wait, I'll say so. If I think a project isn't worth your money right now, I'll tell you. You deserve a partner who tells you the truth, not just what gets the invoice signed.
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {[
                      "Everything explained in plain English \u2014 no acronyms, no buzzwords",
                      "No pressure to buy things you don\u2019t need",
                      "You stay in control of your own website and accounts",
                      "I guide you step by step through every decision",
                      "One point of contact \u2014 no being passed around",
                      "Compliance made simple \u2014 GDPR, NIS2, cookies handled for you",
                      "Honest advice even if it means recommending you wait",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-foreground font-sans">
                        <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Built to Stay ────────────────────────────────────────── */}
          <FadeIn className="mb-20">
            <div className="flex items-start gap-4 mb-6">
              <Anchor className="text-accent shrink-0 mt-1" size={28} />
              <div>
                <span className="eyebrow mb-3 inline-block">Built to Stay</span>
                <h2 className="text-3xl mb-2">A Partner, Not a Transaction</h2>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-5 font-sans">
              Most digital vendors in Ireland make their margin on the first invoice and lose interest after. That model does not work for an IT partner &mdash; and it is the wrong fit for a small business that wants the same person to contact in 2030 as in 2026.
            </p>
            <p className="text-foreground leading-relaxed mb-5 font-sans">
              Crettyard Digital is built differently. The recurring side of the business &mdash; managed IT, care plans, Microsoft 365 administration, ongoing security and compliance &mdash; is the main business, not a bolt-on. Capacity to onboard new clients is assessed against scope, so existing clients keep getting the attention they are paying for.
            </p>
            <p className="text-foreground leading-relaxed mb-5 font-sans">
              My longest single client relationship ran nine years before naturally concluding; my longest active client relationship is going on four years and counting. Either way, the work was steady &mdash; not a launch followed by silence.
            </p>
            <p className="text-foreground leading-relaxed mb-8 font-sans">
              If you want to leave, you can. There are no long lock-ins on managed IT. Documentation, credentials, and accounts are yours and stay yours. A confident provider tells you how to leave them; only a weak position hides the exit.
            </p>
            <ContinuityCommitment />
          </FadeIn>

          {/* ── 26 Industry Certifications ───────────────────────────── */}
          <FadeIn className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <Award className="text-accent shrink-0 mt-1" size={28} />
              <div>
                <span className="eyebrow mb-3 inline-block">Credentials</span>
                <h2 className="text-3xl mb-2">26 Industry Certifications</h2>
                <p className="text-foreground text-[15px] font-sans">Certifications kept current. Skills earned, not claimed.</p>
              </div>
            </div>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { count: 7, vendor: "Microsoft",  detail: "Azure Solutions Architect Expert, Azure Network Engineer, Azure AI Engineer, Azure Architect, Windows Server" },
                { count: 4, vendor: "Intel",      detail: "Multi-Cloud Strategies, AI in The Cloud, Cloud Security, Gaudi AI Accelerator" },
                { count: 2, vendor: "AWS",        detail: "Solutions Architect Associate, Cloud Practitioner" },
                { count: 9, vendor: "Dell",       detail: "Infrastructure Security, PowerEdge, VxRail, Cloud Platform, Converged Systems" },
                { count: 3, vendor: "VMware",     detail: "Data Center Virtualization, vSAN, vSphere Foundations" },
                { count: 1, vendor: "Cisco",      detail: "CCNA Service Provider Operations" },
              ].map((cat) => (
                <StaggerItem key={cat.vendor}>
                  <div className="bg-[#f3f4f5] rounded-2xl p-5 text-center h-full" data-testid={`cert-vendor-${cat.vendor.toLowerCase()}`}>
                    <p className="display-counter text-primary text-3xl">{cat.count}</p>
                    <p className="font-headline font-bold text-primary text-sm mt-1">{cat.vendor}</p>
                    <p className="text-[11px] text-foreground font-sans mt-2 leading-tight">{cat.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* ── Areas Served ─────────────────────────────────────────── */}
          <FadeIn className="mb-20">
            <div className="rounded-2xl p-8 bg-primary text-white" data-testid="section-areas-served">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h2 className="text-2xl text-white mb-2">Where I Work</h2>
                  <p className="text-white font-sans font-normal leading-relaxed">
                    I work with small businesses in every county in Ireland. Websites, Microsoft 365, managed IT, cybersecurity, AI and Copilot projects all run nationwide as standard &mdash; no location surcharge, no &ldquo;we don&rsquo;t cover that area&rdquo; conversations.
                  </p>
                </div>
              </div>
              <p className="text-white text-sm font-sans leading-relaxed">
                My home base is Crettyard, Co. Laois &mdash; so if you&rsquo;d prefer to meet in person, I&rsquo;m easy to reach from anywhere in the Midlands, South-East, and Greater Dublin. For clients further afield, a Teams or WhatsApp call works just as well as a site visit for most of what I do.
              </p>
            </div>
          </FadeIn>

          {/* ── Why Work With Me ─────────────────────────────────────── */}
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Why Work With Me</span>
            <h2 className="text-3xl mt-4 mb-8">What Makes Crettyard Digital Different</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Shield, title: "Enterprise Background, Applied Locally", desc: "Years of experience at Microsoft, Intel, and Dell \u2014 applied to your small business. You get the quality of a corporate IT department, at a price that works for you.", testId: "card-trust-enterprise" },
              { icon: Anchor, title: "Built to Stay \u2014 Long-Term Partnership", desc: "The recurring side of the business is the main business. Care plans, managed IT, ongoing relationships. The same person to contact in 2030 as in 2026 \u2014 not a launch followed by silence.", testId: "card-trust-built-to-stay" },
              { icon: Languages, title: "Plain English, Always", desc: "I explain what I\u2019m doing, why it matters, and what it costs \u2014 in language you can actually understand. If you don\u2019t need something, I\u2019ll tell you.", testId: "card-trust-plain-english" },
              { icon: ServerCog, title: "Everything Under One Roof", desc: "Website, email, phone, network, security, compliance, and AI tools \u2014 all from one person who makes sure it all works together. No juggling multiple providers.", testId: "card-trust-one-roof" },
              { icon: MessageSquare, title: "Direct Access, Always", desc: "You deal directly with Joey \u2014 the person doing the work. No call centres, no ticketing systems, no waiting days for a reply from someone who doesn\u2019t know your setup.", testId: "card-trust-direct" },
              { icon: FileCheck, title: "Compliance Without Complexity", desc: "GDPR, NIS2, the Accessibility Act, cookie regulations \u2014 I translate what these mean for your business and implement what\u2019s needed. You stay compliant without becoming an expert.", testId: "card-trust-compliance" },
              { icon: BadgeEuro, title: "Transparent, Predictable Pricing", desc: "Clear, fixed quotes before work starts. No hidden fees. Recurring subscriptions for Microsoft 365 and managed IT with no setup costs \u2014 so you always know what technology costs.", testId: "card-trust-pricing" },
            ].map((item) => (
              <StaggerItem key={item.testId}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid={item.testId}>
                  <item.icon className="text-accent mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ── Testimonials ─────────────────────────────────────────── */}
          <FadeIn className="mb-20">
            <span className="eyebrow mb-5 inline-block">What Clients Say</span>
            <h2 className="text-3xl mb-8">Real Words From Real Clients</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/portfolio#project-bm-custom-furniture" className="block bg-[#f3f4f5] p-7 rounded-2xl card-hover group" data-testid="card-testimonial-barry">
                <p className="text-foreground text-[15px] leading-relaxed font-sans italic mb-4">
                  &ldquo;Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google &mdash; that never happened before.&rdquo;
                </p>
                <p className="font-headline font-bold text-primary text-sm">Barry &mdash; BM Custom Furniture</p>
                <p className="text-xs text-muted-foreground mb-3">Carlow/Laois border</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Read the case study <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
              <Link href="/portfolio#project-nurney-plant-civil" className="block bg-[#f3f4f5] p-7 rounded-2xl card-hover group" data-testid="card-testimonial-brian">
                <p className="text-foreground text-[15px] leading-relaxed font-sans italic mb-4">
                  &ldquo;Joey did the lot for us &mdash; a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. Can&rsquo;t recommend him enough.&rdquo;
                </p>
                <p className="font-headline font-bold text-primary text-sm">Brian &mdash; Nurney Plant and Civil</p>
                <p className="text-xs text-muted-foreground mb-3">Co. Carlow</p>
                <span className="text-accent text-sm font-headline font-bold inline-flex items-center">Read the case study <ArrowRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
            </div>
            <p className="text-center mt-6">
              <Link href="/portfolio" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                See the full portfolio <ArrowRight size={14} className="ml-1" />
              </Link>
            </p>
          </FadeIn>

          {/* ── Services Overview ────────────────────────────────────── */}
          <FadeIn className="mb-14">
            <span className="eyebrow mb-5 inline-block">Services</span>
            <h2 className="text-3xl mb-4">How I Can Help Your Business</h2>
            <p className="text-foreground max-w-2xl font-sans font-normal">Everything you need to get online, stay secure, look professional, and meet compliance requirements &mdash; from one trusted partner.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { href: "/web-design", icon: MonitorSmartphone, title: "Web Design", desc: "Professional websites that get found on Google and win customers. From \u20ac799. Care plan included.", testId: "card-service-web" },
              { href: "/microsoft-365", icon: Cloud, title: "Microsoft 365 & Teams Phone", desc: "Professional email, cloud storage, Teams, and a modern business phone system.", testId: "card-service-m365" },
              { href: "/managed-it-support", icon: ServerCog, title: "Managed IT Support", desc: "Your outsourced IT department. Fixed monthly fee. Compliance included.", testId: "card-service-managedit" },
              { href: "/network-wifi-security", icon: Wifi, title: "Network & Wi\u2011Fi", desc: "Reliable connectivity for offices, workshops, warehouses, and retail.", testId: "card-service-network" },
              { href: "/cybersecurity", icon: Shield, title: "Cybersecurity & Compliance", desc: "NIS2, GDPR, accessibility audits, and practical threat protection.", testId: "card-service-security" },
              { href: "/ai-readiness", icon: BrainCircuit, title: "AI & Microsoft Copilot", desc: "Practical AI tools that save your team real hours every week.", testId: "card-service-ai" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover text-center cursor-pointer" data-testid={item.testId}>
                    <item.icon className="text-accent mx-auto mb-4" size={24} />
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-foreground text-[13px] leading-relaxed font-sans">{item.desc}</p>
                    <span className="text-accent text-xs font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <SpotlightCTA
        eyebrow="Ready to Talk?"
        heading="Let's Have a Conversation About Your Business"
        subtext="Whether you need a new website, better email, a security audit, or just want an honest opinion on your current technology &mdash; book a free consultation. No obligation, no jargon, no pressure."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Full Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
