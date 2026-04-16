import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldAlert, Server, Network, CheckCircle, Users, Building2, Wrench, HelpCircle, ArrowRight, PiggyBank, Quote } from "lucide-react";
import serviceImg from "@assets/service-network-wifi.webp";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { FAQSchema } from "@/components/SEO";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";

const faqItems = [
  {
    q: "How do I know if I need a new network or just a fix?",
    a: "I'll start with a free review — looking at your current setup, your pain points, and what you need. Sometimes a tweak is all it takes; other times a proper redesign is the smarter long-term move. I'll give you an honest recommendation either way."
  },
  {
    q: "Can you work around our business hours?",
    a: "Absolutely. I regularly schedule installations and upgrades for evenings or weekends to minimise disruption. Your team shouldn't lose a day's work because of an IT upgrade."
  },
  {
    q: "Do you supply the hardware?",
    a: "Yes. I source and supply business-grade equipment from trusted brands like Ubiquiti, MikroTik, and TP-Link. I'll recommend the best options for your space and budget — no unnecessary upselling."
  },
  {
    q: "How long does a typical installation take?",
    a: "A small office setup can often be done in a day. Larger premises with cabling requirements may take 2–3 days. I'll give you a clear timeline before any work begins."
  },
  {
    q: "What about ongoing support?",
    a: "I offer optional support packages for monitoring, maintenance, and troubleshooting. But even without a package, I'm always just a call or message away if something goes wrong."
  },
  {
    q: "Do you cover areas outside Laois and Carlow?",
    a: "I'm based in the Laois/Carlow area but regularly work across the Midlands and South-East. Get in touch and we'll figure it out."
  },
];

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">
      <FAQSchema items={faqItems.map(f => ({ question: f.q, answer: f.a }))} />

      {/* Hero Section */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg relative overflow-hidden">
        <GridLines cols={8} rows={5} color="#002157" opacity={0.04} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Network &amp; Security</span>
              <h1 className="display-sm mb-6" data-testid="text-page-title">
                Business Network &amp; Wi&#8209;Fi Solutions for Offices and Workshops
              </h1>
              <p className="text-xl text-foreground mb-8 leading-relaxed font-sans font-normal">
                Dropped connections, Wi&#8209;Fi dead spots, and unreliable internet cost your business time and money every single day. I design, install, and secure networks using certified, business-grade equipment that actually covers your entire premises &mdash; and meets the security standards your business increasingly needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10" data-testid="button-hero-cta">
                    Book a Free Network Review
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="px-8" data-testid="link-pricing">
                    See Pricing &rarr;
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImg}
                  alt="Neatly organised network rack with ethernet cables in a professional office environment"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Common Issues</span>
            <h2 className="text-3xl mb-6">Solving Real-World Connectivity Problems</h2>
            <p className="text-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-normal">
              These are the everyday frustrations I help businesses eliminate — for good.
            </p>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                "Dead spots in the office",
                "Dropped video calls",
                "Poor workshop coverage",
                "Weak warehouse Wi‑Fi",
                "Card terminals dropping off",
                "Unreliable remote access",
                "No firewall or network security"
              ].map((painPoint, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center font-headline font-bold text-primary text-sm" data-testid={`text-pain-point-${i}`}>
                    {painPoint}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl mb-6">Built for Businesses That Rely on Connectivity</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              If your business depends on a reliable internet connection — and whose doesn't — this service is for you.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "Offices &amp; Co-Working Spaces", desc: "Multiple users, video calls, cloud apps — your network needs to handle it all without slowing down." },
              { icon: Wrench, title: "Workshops &amp; Warehouses", desc: "Card machines, security cameras, and devices that need coverage across large or awkward spaces." },
              { icon: Users, title: "Retail &amp; Hospitality", desc: "Customer Wi‑Fi, point-of-sale systems, and staff devices all running smoothly on separate, secure networks." },
              { icon: Server, title: "Home Offices &amp; Remote Workers", desc: "A professional-grade setup so your home office runs as reliably as any corporate network." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-who-for-${i}`}>
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">What's Included</span>
            <h2 className="text-3xl mb-6">Everything You Need for a Rock-Solid Network</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              From initial survey to ongoing support, I handle every part of the process so you don't have to.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Network className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Network Design &amp; Planning</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  I survey your premises and design a network that fits your space — proper cabling, switch placement, and access point positioning for full coverage.
                </p>
                <ul className="space-y-2">
                  {["Site survey &amp; coverage mapping", "Structured cabling plans", "VLAN segmentation", "Capacity planning for growth"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Wifi className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Wi&#8209;Fi Setup &amp; Optimisation</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Professional mesh Wi&#8209;Fi and access point placement to eliminate dead spots across offices, multi-story buildings, or tricky workshop layouts.
                </p>
                <ul className="space-y-2">
                  {["Mesh Wi‑Fi &amp; access point deployment", "Channel optimisation", "Guest network separation", "Seamless roaming between zones"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <ShieldAlert className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Security &amp; Firewalls</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Business-grade firewalls and security to protect your data and your customers' information. I only source hardware that meets EU Cyber Resilience Act (CRA) standards &mdash; no cheap, uncertified consumer gear.
                </p>
                <ul className="space-y-2">
                  {["Business-grade firewall setup", "Intrusion detection", "Guest Wi‑Fi isolation", "Security policy configuration"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Server className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Health Checks &amp; Remote Access</h3>
                <p className="text-foreground text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Ongoing network health checks plus secure VPN and remote access — so your team can work from anywhere without compromising security.
                </p>
                <ul className="space-y-2">
                  {["Network health audit &amp; reporting", "VPN setup for remote access", "Performance troubleshooting", "Ongoing monitoring &amp; support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Proof Block */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-foreground text-lg leading-relaxed font-sans italic mb-4">
                    "Joey sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can't recommend him enough."
                  </p>
                  <p className="font-headline font-bold text-primary">Brian, Nurney Plant and Civil</p>
                  <p className="text-sm text-muted-foreground">Patchy Wi-Fi with dead spots &rarr; full business-grade coverage across entire premises including workshop</p>
                </div>
              </div>
              <div className="mt-4 pl-0 md:pl-12">
                <Link href="/portfolio" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                  Read the full case study <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why This Saves You Money */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Why It Pays Off</span>
            <h2 className="text-3xl mb-6">Why Getting Your Network Right Saves You Money</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              A poorly set up network doesn't just cause frustration — it costs you real money in lost productivity, missed sales, and emergency call-outs.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fewer Emergency Call-Outs", desc: "A properly designed network rarely fails. You stop paying for reactive fixes and start enjoying reliable, predictable connectivity." },
              { title: "Less Downtime, More Revenue", desc: "Every hour your team spends waiting for pages to load or reconnecting to calls is money lost. A solid network keeps everyone productive." },
              { title: "Built to Grow With You", desc: "Adding new staff, devices, or locations is simple when your network is designed with growth in mind — no expensive rip-and-replace later." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-savings-${i}`}>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-28 bg-white" id="pricing">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <PiggyBank className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">Pricing Guidance</span>
            <h2 className="text-3xl mb-6">What Affects the Price</h2>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Every premises is different, so I quote after a proper survey. Here's what typically influences the cost:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Factors That Affect Cost</h3>
                <ul className="space-y-3">
                  {[
                    "Size and layout of the premises",
                    "Number of users and devices",
                    "Cabling requirements (new runs vs existing)",
                    "Equipment grade (home vs business-grade)",
                    "Security requirements (firewall, VPN, guest isolation)",
                    "Whether remote access or VPN is needed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Typical Starting Points</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Wi‑Fi health check &amp; optimisation", range: "From €150" },
                    { label: "Small office network setup", range: "From €400" },
                    { label: "Full network design &amp; install", range: "From €800" },
                    { label: "Firewall &amp; security configuration", range: "From €300" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm border-b border-white pb-3 last:border-0 last:pb-0" data-testid={`text-pricing-${i}`}>
                      <span className="text-foreground font-sans" dangerouslySetInnerHTML={{ __html: item.label }} />
                      <span className="font-headline font-bold text-primary">{item.range}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground mt-4 font-sans">
                  All prices are indicative. I'll provide a clear, fixed quote after an initial chat.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section — native details/summary for no-JS compatibility */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <HelpCircle className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">FAQ</span>
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-3" data-testid="faq-list">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                  data-testid={`faq-item-${i}`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-[15px] font-headline font-bold text-primary list-none select-none">
                    <span>{faq.q}</span>
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-[15px] text-foreground leading-relaxed font-sans">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl mb-4">Related Services</h2>
            <p className="text-foreground leading-relaxed font-sans font-normal">
              Most businesses need more than just a network. Here's how else I can help.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Link href="/managed-it-support">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Managed IT Support</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">
                    Proactive monitoring, updates, security, and compliance for a fixed monthly fee.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/microsoft-365">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Microsoft 365 &amp; Teams Phone</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">
                    Professional email, cloud storage, and a modern business phone system.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/cybersecurity">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Cybersecurity &amp; Compliance</h3>
                  <p className="text-foreground text-[15px] leading-relaxed font-sans">
                    NIS2, GDPR, and practical threat protection for your business.
                  </p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Get Started?"
        heading="Fix Your Network for Good"
        subtext="Book a free, no-obligation network review. I'll assess your setup, identify the problems, and give you a clear plan with a fixed price."
        primaryText="Book a Free Network Review"
        primaryHref="/contact#send-message"
        secondaryText="See Bundles &amp; Pricing"
        secondaryHref="/pricing"
      />
    </div>
  );
}
