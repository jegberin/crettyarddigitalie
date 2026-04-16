import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight, Shield, Clock, TrendingUp, MessageCircle, BadgeEuro, Briefcase, Monitor, MapPin, Users } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TrustBadges } from "@/components/TrustBadges";
import { AnimatedTetrahedron } from "@/components/AnimatedTetrahedron";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import project1 from "@assets/portfolio-bm-custom-furniture.webp";
import project2 from "@assets/portfolio-go-green-steam-clean.webp";
import project3 from "@assets/portfolio-nurney-plant-civil.webp";
import project4 from "@assets/portfolio-more-than-points.webp";
import project5 from "@assets/portfolio-crettyard-ie.webp";
import joeyPhoto from "@assets/joey-profile-photo.webp";
import getFoundIllustration from "@assets/concept-your-business-found.webp";
import serviceIconWebDesign from "@assets/service-icon-web-design.webp";
import serviceIconMicrosoft365 from "@assets/service-icon-microsoft-365.webp";
import serviceIconManagedIT from "@assets/service-icon-managed-it.webp";
import serviceIconNetworkWifi from "@assets/service-icon-network-wifi.webp";
import serviceIconCybersecurity from "@assets/service-icon-cybersecurity.webp";
import serviceIconAICopilot from "@assets/service-icon-ai-copilot.webp";

const services = [
  {
    num: "01",
    image: serviceIconWebDesign,
    imageAlt: "Glass-effect illustration of a computer monitor displaying code brackets",
    title: "Web Design",
    desc: "Professional, mobile-friendly websites built to rank on Google for your area, turn visitors into enquiries, and make your business look as good online as the work you do. Every site includes a care plan.",
    price: "From \u20ac799",
    href: "/web-design",
    linkLabel: "Learn what's included",
    testId: "card-service-webdesign",
    linkTestId: "link-webdesign",
  },
  {
    num: "02",
    image: serviceIconMicrosoft365,
    imageAlt: "Glass cloud with @ symbol, email, and document icons",
    title: "Microsoft 365 & Teams Phone",
    desc: "Professional @yourbusiness.ie email, cloud file storage, Teams for collaboration, and a modern business phone system \u2014 replacing old landlines. Set up securely with GDPR compliance from day one.",
    price: "Setup from \u20ac350",
    href: "/microsoft-365",
    linkLabel: "See how it works",
    testId: "card-service-microsoft365",
    linkTestId: "link-microsoft365",
  },
  {
    num: "03",
    image: serviceIconManagedIT,
    imageAlt: "Glass cogwheel gears with server storage blocks",
    title: "Managed IT Support",
    desc: "Your outsourced IT department. I monitor your systems, keep everything updated and secure, manage compliance, and fix problems before they cost you time or money. Fixed monthly pricing.",
    price: "From \u20ac45/user/month",
    href: "/managed-it-support",
    linkLabel: "Explore managed IT plans",
    testId: "card-service-managedit",
    linkTestId: "link-managedit",
  },
  {
    num: "04",
    image: serviceIconNetworkWifi,
    imageAlt: "Glass Wi-Fi signal icon against a network of connected nodes",
    title: "Network & Wi\u2011Fi",
    desc: "Business-grade network design, Wi-Fi installation, and security for offices, workshops, warehouses, and retail spaces. Dead spots eliminated, card machines connected, teams productive.",
    price: "Health checks from \u20ac150",
    href: "/network-wifi-security",
    linkLabel: "Book a free network review",
    testId: "card-service-network",
    linkTestId: "link-network",
  },
  {
    num: "05",
    image: serviceIconCybersecurity,
    imageAlt: "Glass shield with a keyhole symbolising cybersecurity protection",
    title: "Cybersecurity & Compliance",
    desc: "Practical protection against phishing, ransomware, and data breaches \u2014 plus NIS2, GDPR, and European Accessibility Act compliance. Security audits, staff training, and ongoing monitoring.",
    price: "Audits from \u20ac200",
    href: "/cybersecurity",
    linkLabel: "See cybersecurity options",
    testId: "card-service-cybersecurity",
    linkTestId: "link-cybersecurity",
  },
  {
    num: "06",
    image: serviceIconAICopilot,
    imageAlt: "Glass brain with neural-network connections",
    title: "AI & Microsoft Copilot",
    desc: "Practical AI that saves your team real hours every week. I help you understand what AI can do for your business and implement tools like Microsoft Copilot for genuine productivity gains.",
    price: "Consultations from \u20ac150",
    href: "/ai-readiness",
    linkLabel: "Explore AI readiness",
    testId: "card-service-ai",
    linkTestId: "link-ai",
  },
];

const HERO_PHRASES = ["Get Found.", "Win Clients.", "Stand Out.", "Stay Secure."];

function CharReveal({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  let charIndex = 0;
  return (
    <>
      {text.split("").map((ch, i) => {
        if (ch === " ") return <span key={i}>&nbsp;</span>;
        const delay = startDelay + charIndex++ * 40;
        return (
          <span key={i} className="animate-char-in" style={{ animationDelay: `${delay}ms` }}>
            {ch}
          </span>
        );
      })}
    </>
  );
}

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-primary overflow-hidden flex flex-col" style={{ minHeight: "88vh" }}>
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />

        <div className="absolute inset-0 z-0" aria-hidden="true">
          <AnimatedTetrahedron />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex-1 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20 w-full">
            <FadeIn direction="up">
              <span className="eyebrow mb-6 inline-block" data-testid="text-eyebrow">Crettyard Digital &mdash; Laois, Carlow &amp; Kilkenny</span>
              <h1
                className="display-heading text-white mb-8 leading-none"
                data-testid="text-hero-heading"
              >
                <span className="sr-only">Web Design, Microsoft 365 &amp; Managed IT for Small Businesses in Laois, Carlow &amp; Kilkenny &mdash; </span>
                <CharReveal text="Help Your" startDelay={200} /><br />
                <CharReveal text="Business" startDelay={580} /><br />
                <span
                  key={phraseIndex}
                  className="text-accent inline-block whitespace-nowrap"
                  data-testid="text-hero-rotating"
                >
                  <CharReveal text={HERO_PHRASES[phraseIndex]} startDelay={0} />
                </span>
              </h1>
              <p className="text-white text-lg mb-10 leading-relaxed font-sans font-normal max-w-lg" data-testid="text-hero-subheading">
                I build websites, set up professional email, and manage IT for small businesses across Laois, Carlow, Kilkenny, and the Midlands. Enterprise-grade quality. Plain-English service. One person to call &mdash; no runaround.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10 bg-accent hover:bg-[#18a07e] text-white" data-testid="button-book-consultation">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="px-8 border-white/30 text-white hover:bg-white/10" data-testid="button-get-quote">
                    See What I've Built &rarr;
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="relative z-10 pb-8 pt-2">
          <div className="container mx-auto px-4 max-w-6xl" data-testid="section-trust-badges">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { target: 15, suffix: "+", label: "Years Enterprise IT", icon: Briefcase },
              { target: 10, suffix: "+", label: "Websites Launched", icon: Monitor },
              { target: 6, suffix: "", label: "Counties Served", icon: MapPin },
              { target: 100, suffix: "%", label: "Small Business Focus", icon: Users },
              { target: 50, suffix: "%", label: "Grant Funding Available", icon: BadgeEuro },
            ].map((stat, i) => (
              <StaggerItem key={i} className="flex flex-col items-center">
                <stat.icon className="text-accent mb-2" size={28} aria-hidden="true" />
                <span className="display-counter text-primary" data-testid={`stat-counter-${i}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="eyebrow mt-2">{stat.label}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── The Problem ───────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center">
            <span className="eyebrow mb-5 inline-block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl mb-6" data-testid="text-presence-heading">If Customers Can't Find You Online, They're Finding Your Competitors</h2>
            <p className="text-lg text-foreground mb-10 leading-relaxed font-sans font-normal">
              Someone in your area just searched Google for exactly what you do &mdash; "plumber Carlow," "furniture maker Laois," "cleaner near me." They didn't find you. They found a competitor whose website looked professional, had a proper email address, and had a phone number they could tap. That competitor got the job. You didn't even know you were in the running.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "Potential customers find your competitors on Google instead of you",
              "A Gmail or Yahoo email address makes you look like a hobby, not a business",
              "No website means no way to show your work or explain what makes you different",
              "Word-of-mouth alone eventually slows down \u2014 and you have no backup plan",
              "New EU regulations mean your technology may need to meet legal standards",
              "Every month without a proper online presence is a month of lost work",
            ].map((point, i) => (
              <StaggerItem key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-foreground font-medium text-[15px] font-sans">{point}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Comparison ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5] relative overflow-hidden">
        <GridLines cols={6} rows={4} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">The Difference</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-comparison-heading">Doing Nothing vs Getting It Right</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">A professional digital foundation changes everything for a local business.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-8">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl p-8 bg-red-50/60 h-full">
                <h3 className="text-xl mb-6 text-red-800 flex items-center gap-2">
                  <XCircle size={22} className="text-red-500" />
                  Without a Proper Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "Customers searching Google find your competitors, not you",
                    "A Gmail address makes prospects question your professionalism",
                    "No way to showcase your best work or explain what sets you apart",
                    "Files on USB sticks, personal laptops, and scattered email attachments",
                    "No security \u2014 one phishing email could compromise your whole business",
                    "Missing enquiries every month that could fill your calendar",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                      <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl p-8 bg-green-50/60 h-full">
                <h3 className="text-xl mb-6 text-green-800 flex items-center gap-2">
                  <CheckCircle2 size={22} className="text-green-600" />
                  With a Digital Foundation
                </h3>
                <ul className="space-y-4">
                  {[
                    "You appear in local searches for \u2018plumber Laois\u2019 or \u2018cleaner Carlow\u2019",
                    "Professional website and @yourbusiness.ie email builds instant trust",
                    "Your best work on display 24/7 \u2014 even while you sleep",
                    "All files in one secure cloud, accessible from any device",
                    "Proper security and compliance protecting your data from day one",
                    "New enquiries arriving while you\u2019re out on the job",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground text-[15px] font-sans">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="md:col-span-2 lg:col-span-1 justify-self-center self-center">
              <img
                src={getFoundIllustration}
                alt="Glass illustration of an Irish small business being found on Google with a professional business email"
                className="w-40 lg:w-44"
                loading="lazy"
                width="1000"
                height="1000"
                data-testid="img-get-found-online"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Smart Investment ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Smart Investment</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-investment-heading">Why Getting It Right the First Time Saves You Thousands</h2>
            <p className="text-foreground max-w-2xl mx-auto font-sans font-normal">
              Going cheap upfront is tempting, but it nearly always costs more in the long run &mdash; in wasted money, missed customers, security risks, and the cost of starting over.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock size={24} />, title: "Avoid Costly Rebuilds", desc: "A \u20ac300 website needs replacing within a year. Getting it right means a site that lasts and grows with your business." },
              { icon: <TrendingUp size={24} />, title: "Stop Missing Leads", desc: "Every month without a proper online presence is a month of lost enquiries going to a competitor who bothered to invest." },
              { icon: <Shield size={24} />, title: "Avoid Security & Legal Risks", desc: "Poorly configured setups leave security gaps. With NIS2 and GDPR enforcement tightening, that\u2019s now a legal problem too." },
              { icon: <MessageCircle size={24} />, title: "No More Patchwork Fixes", desc: "Stop paying different people to bodge the same problems. One integrated setup replaces years of expensive firefighting." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-5 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-[#f3f4f5] relative overflow-hidden">
        <GridLines cols={6} rows={4} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn className="mb-16">
            <span className="eyebrow mb-5 inline-block">What I Do</span>
            <h2 className="text-3xl md:text-4xl mb-3" data-testid="text-services-heading">One Trusted Partner for Your Website, Email, IT, and Security</h2>
            <p className="text-foreground max-w-2xl font-sans font-normal">
              Most agencies build you a website and disappear. Most IT companies don't do websites. I handle everything under one roof &mdash; so it all works together and you have one person to call.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.num}>
                <div
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col"
                  data-testid={service.testId}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-36 h-36 rounded-xl object-contain mb-6"
                    loading="lazy"
                    width="600"
                    height="600"
                  />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal flex-1 mb-4">
                    {service.desc}
                  </p>
                  <p className="text-sm font-headline font-bold text-primary/60 mb-4">{service.price}</p>
                  <Link
                    href={service.href}
                    className="text-accent font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    data-testid={service.linkTestId}
                  >
                    {service.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                See Digital Foundation Bundles &rarr;
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Government Grants ─────────────────────────────────────── */}
      <section className="py-20 bg-accent/5 border-y border-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BadgeEuro className="text-accent" size={24} />
                </div>
                <span className="eyebrow">Government Grants</span>
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Grow Digital Voucher: Up to &euro;5,000 for Digital Tools</h2>
              <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-4">
                If you're a small business in Ireland rolling out new digital tools — Microsoft 365, CRM, e-commerce platforms, or cybersecurity software — the Grow Digital Voucher may cover 50% of the cost up to &euro;5,000. It doesn't cover bespoke website builds, but it does cover a lot of what I help clients set up. I'll be straight with you about what qualifies and what doesn't.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-headline font-bold text-primary">
                <span><span className="text-accent">Up to &euro;5,000</span> — 50% of eligible costs</span>
                <span><span className="text-accent">1–50 employees</span> — broader eligibility than the old TOV</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex flex-col gap-3">
              <Link href="/grants-funding">
                <Button size="lg" className="w-full">See How It Works</Button>
              </Link>
              <Link href="/contact#send-message">
                <Button size="lg" variant="outline" className="w-full">Ask Me About Grants</Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet Joey */}
      <section className="py-24 bg-white" aria-labelledby="meet-joey-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-14 items-center">
              <div className="flex justify-center md:justify-start">
                <img
                  src={joeyPhoto}
                  alt="Joey, founder of Crettyard Digital"
                  className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-md ring-4 ring-accent/10"
                  width="240"
                  height="240"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="eyebrow mb-5 inline-block">Meet Joey</span>
                <h2 id="meet-joey-heading" className="text-3xl md:text-4xl mb-5" data-testid="text-meet-joey-heading">Hi, I&rsquo;m Joey &mdash; and I&rsquo;ll be the one building your site and supporting your IT.</h2>
                <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal mb-5">
                  Fifteen years inside Microsoft, Intel, and Dell taught me how enterprise IT actually works. Now I bring that experience to small businesses in Laois, Carlow, and Kilkenny &mdash; in plain English, with one person to call, and no runaround.
                </p>
                <Link href="/about" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors" data-testid="link-meet-joey-about">
                  More about me <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl" data-testid="text-process-heading">Four Simple Steps. No Jargon. No Pressure.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {[
              { num: "01", title: "We Talk", desc: "A free, no-obligation call about your business and what you need. I'll flag any grants you're eligible for." },
              { num: "02", title: "I Build", desc: "I design and build your complete solution \u2014 website, email, phone, network \u2014 as one integrated package." },
              { num: "03", title: "We Launch", desc: "Everything goes live. I train your team and make sure everyone is confident before I step back." },
              { num: "04", title: "I Manage It", desc: "Your website, email, IT, and security stay monitored and maintained. One call away \u2014 always." },
            ].map((step, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="text-5xl font-headline font-extrabold text-primary/10 mb-4 tracking-tight">{step.num}</div>
                <h4 className="text-base mb-2">{step.title}</h4>
                <p className="text-foreground text-sm leading-relaxed font-sans">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn className="text-center mt-10">
            <Link href="/how-it-works" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
              See the full process in detail <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────── */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4">
          <FadeIn className="flex justify-between items-end mb-14">
            <div>
              <span className="eyebrow mb-5 inline-block">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl mb-3" data-testid="text-projects-heading">Real Websites. Real Businesses. Real Results.</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex text-accent font-headline font-bold items-center hover:text-primary transition-colors text-sm" data-testid="link-view-all-projects">
              View all projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { href: "https://bmcustomfurniture.ie", img: project1, alt: "BM Custom Furniture bespoke fitted furniture website designed by Crettyard Digital", title: "BM Custom Furniture", url: "bmcustomfurniture.ie", desc: "Bespoke furniture \u2014 Google enquiries within 3 weeks", cta: "Visit BM Custom Furniture", ariaLabel: "Visit BM Custom Furniture website (opens in new tab)", testId: "card-project-bm" },
              { href: "https://gogreensteamclean.ie", img: project2, alt: "Go Green Steam Clean eco-friendly steam cleaning business website designed by Crettyard Digital", title: "Go Green Steam Clean", url: "gogreensteamclean.ie", desc: "Eco-cleaning \u2014 new bookings every week via Google", cta: "See Go Green Steam Clean", ariaLabel: "Visit Go Green Steam Clean website (opens in new tab)", testId: "card-project-gogreen" },
              { href: "https://nurneyplantandcivil.ie", img: project3, alt: "Nurney Plant and Civil plant hire and civil engineering website designed by Crettyard Digital", title: "Nurney Plant and Civil", url: "nurneyplantandcivil.ie", desc: "Website + M365 + Wi-Fi \u2014 full digital foundation", cta: "View Nurney Plant and Civil", ariaLabel: "Visit Nurney Plant and Civil website (opens in new tab)", testId: "card-project-nurney" },
              { href: "https://morethanpoints.ie", img: project4, alt: "More Than Points teen and parent coaching website designed by Crettyard Digital", title: "More Than Points", url: "morethanpoints.ie", desc: "Coaching service \u2014 trust-building for families", cta: "Visit More Than Points", ariaLabel: "Visit More Than Points coaching website (opens in new tab)", testId: "card-project-morethanpoints" },
              { href: "https://crettyard.ie", img: project5, alt: "Crettyard.ie community website designed by Crettyard Digital", title: "Crettyard.ie", url: "crettyard.ie", desc: "Community hub \u2014 local business directory", cta: "Explore Crettyard.ie", ariaLabel: "Visit Crettyard.ie community website (opens in new tab)", testId: "card-project-crettyardie" },
            ].map((p) => (
              <StaggerItem key={p.testId}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block" data-testid={p.testId} aria-label={p.ariaLabel}>
                  <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                    <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                  </div>
                  <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-xs font-medium text-muted-foreground mb-2">{p.url}</p>
                  <p className="text-sm text-foreground mb-3 font-sans">{p.desc}</p>
                  <span className="text-accent font-headline font-bold inline-flex items-center text-sm">{p.cta} <ArrowRight size={14} className="ml-1" /></span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" data-testid="link-view-all-mobile">View all projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl" data-testid="text-faq-heading">Answered in Plain English</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3" data-testid="faq-accordion">
              {[
                { q: "I already have a Facebook page \u2014 do I really need a website?", a: "Facebook is useful for engagement, but it won\u2019t help you appear on Google when someone searches \u2018plumber near me\u2019 or \u2018furniture maker Carlow.\u2019 A website is something you own and control \u2014 it works around the clock, ranks on search engines, and gives potential customers the confidence to call you." },
                { q: "I\u2019m not very technical \u2014 will this be complicated?", a: "That\u2019s exactly why I do what I do. I handle all the technical work and explain everything in plain English. You don\u2019t need to know anything about hosting, DNS, code, or compliance regulations. My entire approach is built for people who\u2019d rather focus on running their business." },
                { q: "How much does a website cost?", a: "Most small business websites start from around \u20ac799 for a simple site and \u20ac1,299 for a full business site. Every website includes an ongoing care plan for hosting, security, and maintenance. I provide a clear, fixed quote after a free consultation. Bespoke website builds aren\u2019t eligible for the Grow Digital Voucher, but if your project also includes new software subscriptions like M365 or e-commerce platforms, those elements may qualify." },
                { q: "What are the Digital Foundation Bundles?", a: "Instead of buying a website, email, and IT support separately, bundles give you everything as one integrated package \u2014 with one setup cost and one predictable monthly fee. Most clients save money compared to buying piecemeal, and everything works together because it\u2019s all built by the same person." },
                { q: "Do I need to worry about NIS2 or GDPR?", a: "If you collect customer data (contact forms, email lists, invoices), GDPR applies to you. If you\u2019re part of a supply chain for a larger company, NIS2 may apply too. If you sell online, the European Accessibility Act probably applies. I handle all of this as part of my services \u2014 you don\u2019t need to become an expert." },
                { q: "Can you help with government grants?", a: "I\u2019m Grow Digital Voucher Ready \u2014 my invoicing is prepared to meet scheme requirements. The voucher covers 50% of new software subscriptions (M365, CRM, e-commerce platforms, cybersecurity) up to \u20ac5,000. It doesn\u2019t cover bespoke websites or hardware. You must complete a free Digital for Business consultation with your LEO first, then apply yourself \u2014 I can\u2019t apply for you, but I can make sure my documentation supports your claim." },
                { q: "What is Microsoft Teams Phone?", a: "A business phone system that works through the Microsoft Teams app. Instead of a traditional landline, your team makes and receives business calls from their laptop, mobile, or desk phone \u2014 all integrated with your email and calendar. Simpler, cheaper, and far more flexible." },
                { q: "What\u2019s AI and Copilot about?", a: "Microsoft Copilot is an AI assistant built into Microsoft 365 that helps draft emails, summarise documents, create presentations, and answer questions about your business data. I help businesses understand what it can realistically do, set it up properly, and train teams to use it effectively. No hype \u2014 just practical tools." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-100 rounded-xl px-6" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="font-headline font-bold text-primary text-[15px] py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground font-sans text-[15px] leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* ── Spotlight CTA ─────────────────────────────────────────── */}
      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Let's Build Your Digital Foundation"
        subtext="Book a free, no-obligation consultation. I'll listen to what you need, give you honest advice, and show you the most cost-effective way to get sorted &mdash; plus any grant opportunities for software elements of your project. No pressure, no jargon, no surprises."
        primaryText="Book Your Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles & Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
