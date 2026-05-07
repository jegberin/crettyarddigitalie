import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Monitor, Server, ShieldCheck, Package, Clock, Phone, Zap, Lock, HardDrive, CheckCircle, Truck, UserCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { GridLines } from "@/components/GridLines";
import { SpotlightCTA } from "@/components/SpotlightCTA";
import { ContinuityCommitment } from "@/components/ContinuityCommitment";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroFreshInstall from "@assets/hardware-hero-fresh-install.webp";
import imgBusinessDesktop from "@assets/hardware-business-desktop.webp";
import imgOnsiteServer from "@assets/hardware-onsite-server.webp";

export default function ManagedHardware() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 md:py-28">
        <GridLines cols={12} rows={8} color="#ffffff" opacity={0.05} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="up">
              <span className="eyebrow mb-4 inline-block">Managed Hardware</span>
              <h1 className="display-sm text-white mb-6">
                Modern Business PCs &amp; Servers &mdash; Delivered Ready to Use, Anywhere in Ireland
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Hardware as part of a coherent IT setup &mdash; not boxes shipped to your office hoping someone in the team can figure it out. Your new systems arrive fully configured, licensed, encrypted, and with your data already moved across &mdash; via Windows Autopilot and Microsoft Intune device enrolment done before the kit leaves me. The Intune policies and security baseline match the rest of your tenant, so day-one fits the standards already running on your other devices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#send-message">
                  <Button size="lg">Book a Free Consultation</Button>
                </Link>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    See How It Works &darr;
                  </Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src={heroFreshInstall}
                alt="A compact modern mini-PC behind a slim monitor showing Windows 11 with Microsoft 365, on a tidy Irish small-office desk on install day with keyboard, mouse and cables cleanly routed"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl md:text-4xl mb-6">If Any of This Sounds Familiar, Read On</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Running PCs from 2018?", desc: "Hardware that groans when you open a browser. Machines still on Windows 10 (unsupported since October 2025). Starting to crash or slow to a crawl by mid-morning." },
              { title: "Shared drive on someone\u2019s PC?", desc: "Critical business files stored on one person\u2019s laptop. No real backup. When they\u2019re out sick, everything grinds to a halt. One dropped laptop away from disaster." },
              { title: "Keep meaning to sort it?", desc: "You know the setup needs an overhaul. You\u2019ve been putting it off because the thought of picking kit, installing software, migrating data, and training staff feels like a fortnight\u2019s worth of misery." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl h-full">
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground text-[15px] font-sans leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Outcome - Main value prop */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Outcome</span>
            <h2 className="text-3xl md:text-4xl mb-6">Systems That Arrive Ready to Work. Not Boxes You Have to Figure Out.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Anyone can sell you a PC. The hard part is everything that comes after &mdash; licensing, setup, encryption, moving your files across, connecting it to your printer, email, Wi-Fi, and everything else you rely on. I do all of that <em>before</em> it reaches you.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Productive from day one", desc: "Your new PC or server arrives with Windows, your apps, your files, your email, your printer \u2014 everything. Log in, open your browser, you\u2019re working. No setup wizard, no day lost to configuration." },
              { icon: HardDrive, title: "Your data is already there", desc: "I handle the data migration from your old machines. Documents, photos, mail archives, bookmarks \u2014 it\u2019s all where you expect it. You don\u2019t lift a finger and you don\u2019t lose a file." },
              { icon: Lock, title: "Secure from the first login", desc: "Full-disk encryption enabled. Strong admin controls. Multi-factor authentication on your accounts. Microsoft Defender for Endpoint baseline enforced via Intune. Proper business-grade setup, not the out-of-the-box defaults that leave you exposed." },
              { icon: Phone, title: "One person to contact when something\u2019s wrong", desc: "If anything ever goes sideways, you message me directly. I already know your setup because I built it. No ticketing queue, no explaining your environment to a stranger, no waiting days for a callback." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-7 rounded-2xl card-hover shadow-sm flex gap-5">
                  <item.icon className="text-accent shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground text-[15px] font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12">
            <div className="bg-primary p-8 rounded-2xl text-center">
              <p className="text-white text-lg md:text-xl font-headline leading-relaxed">
                <span className="text-accent font-bold">You focus on your business.</span> I do the tech.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What I Supply */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What I Supply</span>
            <h2 className="text-3xl md:text-4xl mb-6">Compact, Quiet, Fast. Built for Work.</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Two straightforward categories, chosen to fit how small Irish businesses actually operate.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Desktop */}
            <FadeIn>
              <div className="bg-[#f3f4f5] rounded-2xl h-full flex flex-col overflow-hidden" data-testid="card-desktop">
                <img
                  src={imgBusinessDesktop}
                  alt="Compact business desktop mini-PC with Windows 11 Pro running a small Irish-office workstation"
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <Monitor className="text-accent mb-5" size={32} />
                  <h3 className="text-xl mb-3">Business Desktop</h3>
                  <p className="text-foreground text-[15px] font-sans leading-relaxed mb-5">
                    A compact, modern PC that sits neatly behind your monitor or under your desk. Fast enough for anything a small business needs &mdash; browser work, Microsoft 365, accounting software, video calls, design tools, the lot.
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Compact form factor (fits behind a monitor)",
                      "Quiet enough for a shared office",
                      "Significantly lower power draw than old towers",
                      "Multiple monitor support",
                      "Windows 11 Pro, properly licensed",
                      "Full-disk encryption enabled",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] font-sans">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground font-sans border-t border-gray-200 pt-4">
                    Ideal for: office staff, professional services, admin roles, anyone working across browser apps and productivity tools.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* On-Site Server / NAS */}
            <FadeIn delay={0.1}>
              <div className="bg-[#f3f4f5] rounded-2xl h-full flex flex-col overflow-hidden" data-testid="card-server">
                <img
                  src={imgOnsiteServer}
                  alt="A compact on-site small-business server / NAS unit with multi-drive storage for shared files and automated backups"
                  width={1000}
                  height={750}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <Server className="text-accent mb-5" size={32} />
                  <h3 className="text-xl mb-3">On-Site Server &amp; NAS</h3>
                  <p className="text-foreground text-[15px] font-sans leading-relaxed mb-5">
                    A small-footprint server for shared files, automated backups, and light business apps. Fits in a cupboard, not a server room. Replaces that dodgy shared drive on Mary&rsquo;s laptop with something proper.
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Shared files accessible from any device",
                      "Automated, monitored backups",
                      "Multi-drive storage with redundancy",
                      "Fast internal networking",
                      "Choice of Linux, flexible NAS, or Windows Server",
                      "Encryption at rest, user access controls",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] font-sans">
                        <CheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground font-sans border-t border-gray-200 pt-4">
                    Ideal for: shared drives, line-of-business apps, on-site backup target, small teams that need reliable file storage without the cloud-only cost.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-10 text-center">
            <p className="text-sm text-muted-foreground font-sans max-w-2xl mx-auto">
              I supply current-generation, business-grade hardware from trusted European suppliers &mdash; not consumer kit, not gaming rigs, not old stock. Exact specifications depend on what you actually need, which we&rsquo;ll work out together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Security &amp; Compliance</span>
            <h2 className="text-3xl md:text-4xl mb-6">Built In, Not Bolted On</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Every device I supply ships with the security controls small businesses are increasingly being asked about &mdash; by larger clients, by insurers, by auditors. Not because I&rsquo;m ticking boxes, but because it&rsquo;s how systems should be built in 2026.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Full-disk encryption", desc: "Every drive encrypted (BitLocker on Windows, LUKS on Linux). Lose a laptop? The data on it is unreadable. Recovery keys stored centrally and securely, managed via Microsoft Intune." },
              { title: "Multi-factor authentication", desc: "MFA on all administrative access and business cloud accounts. No more \u201Cpassword123\u201D standing between attackers and your business." },
              { title: "Automated monitored backups", desc: "Workstations back up to the on-site NAS and/or cloud. Ransomware, hardware failure, or a deleted folder doesn\u2019t mean permanent data loss." },
              { title: "Hardened baseline + Defender for Endpoint", desc: "Current patches applied via Intune / Autopilot. Legacy protocols disabled. Local firewall active. Microsoft Defender for Endpoint enrolled. Secure remote management set up. The defaults most suppliers leave open." },
              { title: "Documented controls", desc: "You get a written record of what\u2019s been configured \u2014 useful when larger customers send you supply-chain security questionnaires under NIS2 or ask about EU Cyber Resilience Act (CRA) posture." },
              { title: "Supports your compliance obligations", desc: "Technical controls that support your GDPR, NIS2, and (where relevant) DORA obligations. I\u2019ll tell you plainly what this does and doesn\u2019t cover." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-3 mb-2">
                    <ShieldCheck className="text-accent shrink-0 mt-0.5" size={20} />
                    <h3 className="text-base font-headline font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-foreground text-[15px] font-sans leading-relaxed ml-8">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-8">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl">
              <p className="text-sm text-muted-foreground font-sans text-center leading-relaxed">
                <strong>Honest disclaimer:</strong> These controls <em>support</em> your NIS2, GDPR, and DORA obligations &mdash; they don&rsquo;t replace the policies, incident response procedures, and organisational measures you also need. Compliance is never just about hardware. If you want the full picture, see the <Link href="/cybersecurity" className="text-accent hover:text-primary transition-colors underline">cybersecurity &amp; compliance</Link> page.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl mb-6">From First Chat to Fully Operational</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              One conversation, one quote, one delivery day. Here&rsquo;s how a typical hardware refresh runs.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {[
              { num: "01", icon: Phone, title: "Free discovery call", desc: "We talk about what you\u2019re running now, what\u2019s causing you grief, how many people need kit, what apps you rely on, and where you want to be. About 30 minutes." },
              { num: "02", icon: Package, title: "Fixed-price proposal", desc: "Within 48 hours I come back with a fixed-price proposal: exactly what you\u2019re getting, how much it costs, and when it\u2019ll be delivered. No surprises, no \u201Cplus VAT on request\u201D nonsense." },
              { num: "03", icon: CheckCircle, title: "You approve, I order", desc: "Once you\u2019re happy, I place the hardware order and start preparing your configuration via Windows Autopilot. You get a delivery date up front." },
              { num: "04", icon: ShieldCheck, title: "Build, harden, migrate", desc: "I build each system: install Windows properly licensed, apply all updates, enrol into Intune, configure Defender baselines, install your apps, and migrate your data from old machines \u2014 all before it ever reaches your office." },
              { num: "05", icon: Truck, title: "On-site install day", desc: "I come to you, set up the equipment, connect it to your network and peripherals, and run through the basics. Your team starts working on the new kit the same day." },
              { num: "06", icon: UserCheck, title: "Handover & quick training", desc: "A short walkthrough so your team knows what\u2019s changed, where files are, and how backups work. Written summary left with you for reference." },
              { num: "07", icon: Clock, title: "Ongoing support (optional)", desc: "Add Hardware Care or a Managed IT plan for ongoing monitoring, updates, and priority support. One person to contact, year after year." },
            ].map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-6 rounded-2xl flex gap-5 items-start">
                  <span className="text-2xl font-headline font-extrabold text-primary/30 shrink-0 w-12 pt-1">{step.num}</span>
                  <step.icon className="text-accent shrink-0 mt-1" size={22} />
                  <div className="flex-grow">
                    <h3 className="text-base font-headline font-bold text-primary mb-1">{step.title}</h3>
                    <p className="text-foreground text-[15px] font-sans leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl md:text-4xl mb-6">Transparent &ldquo;From&rdquo; Pricing</h2>
            <p className="text-foreground text-[15px] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
              Final pricing depends on your exact specification &mdash; RAM, storage, and scope of data migration. Every quote is fixed-price before we start. Nothing added afterwards.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col" data-testid="pricing-desktop">
                <Monitor className="text-accent mb-4" size={28} />
                <h3 className="text-lg mb-2">Business Desktop</h3>
                <p className="text-3xl font-headline font-extrabold text-primary mb-3">from &euro;899</p>
                <p className="text-sm text-muted-foreground font-sans mb-5">per device, delivered &amp; installed</p>
                <ul className="space-y-2 text-[14px] font-sans flex-grow">
                  <li>&bull; 16 GB RAM, 512 GB SSD, current-gen CPU</li>
                  <li>&bull; Windows 11 Pro licence included</li>
                  <li>&bull; Full-disk encryption configured</li>
                  <li>&bull; Your apps pre-installed</li>
                  <li>&bull; Data migration from old device</li>
                  <li>&bull; On-site install within 60km of Crettyard</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-primary p-7 rounded-2xl shadow-sm h-full flex flex-col text-white relative" data-testid="pricing-desktop-plus">
                <span className="absolute top-4 right-4 bg-accent text-white text-xs font-headline font-bold px-3 py-1 rounded-full">Most Popular</span>
                <Monitor className="text-accent mb-4" size={28} />
                <h3 className="text-lg mb-2 text-white">Business Plus Desktop</h3>
                <p className="text-3xl font-headline font-extrabold mb-3 text-white">from &euro;1,199</p>
                <p className="text-sm text-white/70 font-sans mb-5">per device, delivered &amp; installed</p>
                <ul className="space-y-2 text-[14px] font-sans flex-grow text-white/90">
                  <li>&bull; 32 GB RAM, 1 TB NVMe SSD, faster CPU</li>
                  <li>&bull; Windows 11 Pro licence included</li>
                  <li>&bull; Full-disk encryption configured</li>
                  <li>&bull; Dual-monitor ready</li>
                  <li>&bull; Your apps pre-installed</li>
                  <li>&bull; Data migration from old device</li>
                  <li>&bull; On-site install within 60km of Crettyard</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col" data-testid="pricing-server">
                <Server className="text-accent mb-4" size={28} />
                <h3 className="text-lg mb-2">On-Site Server / NAS</h3>
                <p className="text-3xl font-headline font-extrabold text-primary mb-3">from &euro;2,499</p>
                <p className="text-sm text-muted-foreground font-sans mb-5">per unit, installed &amp; configured</p>
                <ul className="space-y-2 text-[14px] font-sans flex-grow">
                  <li>&bull; Multi-drive chassis with redundancy</li>
                  <li>&bull; OS licensing included (Linux, NAS, or Windows Server)</li>
                  <li>&bull; Shared drives configured for your team</li>
                  <li>&bull; Automated backup schedule set up</li>
                  <li>&bull; Data migration from existing shares</li>
                  <li>&bull; User access controls configured</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="mt-10">
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl text-center">
              <h3 className="text-lg mb-2">Optional: Hardware Care</h3>
              <p className="text-foreground text-[15px] font-sans mb-3 leading-relaxed">
                Priority swap-out of failed devices, monitoring, and proactive maintenance. Keeps your kit working so you don&rsquo;t have to think about it.
              </p>
              <p className="text-xl font-headline font-bold text-accent">From &euro;19/device/month &middot; &euro;49/month per server</p>
            </div>
          </FadeIn>

          <FadeIn className="mt-6 text-center">
            <p className="text-sm text-muted-foreground font-sans">
              Need a volume quote? Rolling out kit for 5+ users? <Link href="/contact#send-message" className="text-accent font-headline font-bold hover:text-primary transition-colors">Let&rsquo;s talk pricing</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl mb-6">What People Usually Ask</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { id: "mh-1", q: "What happens to my old data?", a: "I migrate it before delivery. Documents, mail archives, browser bookmarks \u2014 everything that matters moves across to the new machine. When you log in on day one, it\u2019s all where you expect it. Your old kit is wiped securely or returned to you, whichever you prefer." },
                { id: "mh-2", q: "How long does my team lose to the rollout?", a: "Effectively nothing. I do the build and configuration off-site. We can swap and install the new systems in an evening. Typically takes a few hours for a small office. Your team goes home and comes in the next day to meet the new systems \u2014 ready to work." },
                { id: "mh-3", q: "What if the hardware fails?", a: "Every device ships with manufacturer warranty. With optional Hardware Care, I handle the swap-out myself: priority replacement, I keep spare units on hand, and you\u2019re back up the same or next business day. Without Hardware Care, warranty claims go direct to the manufacturer (I\u2019ll help you with the process). Either way, your data is backed up \u2014 a hardware failure doesn\u2019t mean lost work." },
                { id: "mh-4", q: "Do you supply the Windows licence?", a: "Yes. Every desktop includes a proper, full OEM Windows 11 Pro licence sourced from an authorised EU distributor. Not grey-market, not pre-activated keys of dubious origin. If you\u2019re ever audited, your licences are legitimate." },
                { id: "mh-5", q: "Can I buy the hardware myself and just pay you to set it up?", a: "I don\u2019t work that way, and here\u2019s why: the outcome I\u2019m selling is \u201carrives ready to work, properly configured, properly supported.\u201d If you source your own hardware, I can\u2019t guarantee compatibility, licence legitimacy, warranty terms, or ongoing support. For set-up-only work on existing kit, see the Managed IT service page instead." },
                { id: "mh-6", q: "What about hybrid or remote workers?", a: "Desktops are delivered to wherever the user is based. Full remote setup is included \u2014 VPN access can be configured, cloud file sync, Microsoft 365 integration." },
                { id: "mh-7", q: "Is this suitable for heavy workloads like CAD, video editing, or large datasets?", a: "The Business Plus tier handles most professional workloads comfortably. For specialist needs (CAD, 3D modelling, video production, scientific computing) we\u2019d spec something more powerful \u2014 just ask. What I don\u2019t do is gaming PCs, crypto mining rigs, or hardware outside the business-computing remit." },
                { id: "mh-8", q: "Does this help with NIS2 / GDPR compliance?", a: "Yes, as a supporting measure \u2014 not as the whole solution. Every system ships with technical controls (encryption, MFA, backups, hardened configuration, documented setup) that larger customers will ask about in supply-chain questionnaires. But compliance is about policies and processes too, not just hardware. See the cybersecurity & compliance page for the full picture." },
                { id: "mh-9", q: "What\u2019s the minimum or maximum order?", a: "Minimum is one device. For initial engagements I cap the rollout at around 10 devices per site \u2014 past that we\u2019d phase it across a few weeks to keep disruption low. Larger rollouts need a separate scoping conversation." },
                { id: "mh-10", q: "Can I fund this through the Grow Digital Voucher?", a: "No. The Grow Digital Voucher explicitly excludes hardware. It funds new software subscriptions only. You can see the full breakdown on the grants page." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-gray-100 rounded-xl px-6 bg-[#f3f4f5]/30">
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed font-sans text-[15px] pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Nurney Plant and Civil proof block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-[#f3f4f5] p-8 md:p-10 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-[13px] font-headline font-bold uppercase tracking-wider text-accent mb-2">Hardware + server + network in one rollout</p>
                  <p className="text-foreground text-lg leading-relaxed font-sans mb-4">
                    For County Carlow plant-hire firm Nurney Plant and Civil, a single engagement delivered the full Digital Foundation: business desktops, an on-site server for shared files and backups, Microsoft 365, and hardened business Wi-Fi &mdash; all configured, migrated, and supported end-to-end.
                  </p>
                  <p className="font-headline font-bold text-primary text-sm">Brian, Nurney Plant and Civil &mdash; Co. Carlow</p>
                </div>
              </div>
              <div className="mt-4 pl-0 md:pl-12">
                <Link href="/portfolio#project-nurney-plant-civil" className="text-accent font-headline font-bold inline-flex items-center text-sm hover:text-primary transition-colors">
                  View full case study &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cross-links to related services */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-10">
            <span className="eyebrow mb-5 inline-block">Works With</span>
            <h2 className="text-3xl mb-3">Part of a Complete Setup</h2>
            <p className="text-foreground text-[15px] font-sans max-w-2xl mx-auto">
              New hardware is one piece. These work alongside it for a complete business IT setup.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/managed-it-support", title: "Managed IT Support", desc: "Ongoing monitoring, Intune management, patching, and priority support for your new kit \u2014 and everything else." },
              { href: "/microsoft-365", title: "Microsoft 365", desc: "Professional email, cloud file storage, Teams, and Copilot \u2014 pre-configured on your new devices." },
              { href: "/network-wifi-security", title: "Network & Wi-Fi", desc: "Business-grade networks and Wi-Fi 6/6E/7 that your new hardware plugs straight into." },
              { href: "/cybersecurity", title: "Cybersecurity & Compliance", desc: "The full security layer: threat protection, NIS2 documentation, staff training." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-2xl card-hover shadow-sm h-full cursor-pointer">
                    <h3 className="text-base font-headline font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground text-[14px] font-sans mb-3">{item.desc}</p>
                    <span className="text-accent font-headline font-bold text-sm">Learn more &rarr;</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <ContinuityCommitment />
        </div>
      </section>

      <SpotlightCTA
        eyebrow="Ready to Stop Dreading the Refresh?"
        heading="Let&rsquo;s Talk About Your Setup"
        subtext="Book a free 30-minute call. I&rsquo;ll review what you&rsquo;re running now and recommend what you actually need &mdash; no upselling, no jargon. Fixed-price quote within 48 hours."
        primaryText="Book a Free Consultation"
        primaryHref="/contact#send-message"
        secondaryText="See All Services"
        secondaryHref="/pricing"
      />
    </div>
  );
}
