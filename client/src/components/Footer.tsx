import { Link } from "wouter";
import logoImg from "@assets/crettyard-digital-logo.webp";
import { AnimatedMarquee } from "./AnimatedMarquee";

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer>
      <AnimatedMarquee />
      <div className="bg-primary text-white pt-14 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <section aria-label="Crettyard Digital info" className="lg:col-span-1 lg:pr-16">
              <img src={logoImg} alt="Crettyard Digital logo" className="h-10 mb-6 bg-white p-2 rounded-xl" />
              <address className="not-italic">
                <p className="text-white text-sm leading-relaxed mb-4">
                  Crettyard Digital<br />
                  Crettyard, Co. Laois, Ireland
                </p>
                <p className="text-white text-sm mb-5">
                  <a href="mailto:info@crettyarddigital.ie" className="hover:text-accent transition-colors" data-testid="link-footer-email">info@crettyarddigital.ie</a>
                </p>
              </address>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                Serving Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary, and beyond.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Remote services available across Ireland.
              </p>
              <p className="text-white font-semibold text-xs mb-5 bg-accent/20 rounded-lg px-3 py-2 leading-relaxed">
                Grow Digital Voucher Ready
                <br />
                scheme-compliant invoicing
              </p>
              <Link href="/contact" className="inline-flex items-center text-accent hover:text-white font-bold text-sm transition-colors">
                Book a free consultation &gt;
              </Link>
            </section>

            {/* Services column */}
            <section aria-label="Services navigation">
              <h4 className="font-headline font-bold text-base mb-5 text-accent">Services</h4>
              <nav aria-label="Services links">
                <ul className="space-y-2.5 list-none m-0 p-0">
                  <li><Link href="/web-design" className="text-white/80 hover:text-white transition-colors text-sm">Web Design</Link></li>
                  <li><Link href="/microsoft-365" className="text-white/80 hover:text-white transition-colors text-sm">Microsoft 365 &amp; Teams Phone</Link></li>
                  <li><Link href="/managed-it-support" className="text-white/80 hover:text-white transition-colors text-sm">Managed IT Support</Link></li>
                  <li><Link href="/managed-hardware" className="text-white/80 hover:text-white transition-colors text-sm">Managed Hardware</Link></li>
                  <li><Link href="/network-wifi-security" className="text-white/80 hover:text-white transition-colors text-sm">Network &amp; Wi-Fi</Link></li>
                  <li><Link href="/cybersecurity" className="text-white/80 hover:text-white transition-colors text-sm">Cybersecurity &amp; Compliance</Link></li>
                  <li><Link href="/ai-readiness" className="text-white/80 hover:text-white transition-colors text-sm">AI &amp; Microsoft Copilot</Link></li>
                  <li><Link href="/website-care-plans" className="text-white/80 hover:text-white transition-colors text-sm">Website Care Plans</Link></li>
                </ul>
              </nav>
            </section>

            {/* Industries & Compliance column */}
            <section aria-label="Industries and compliance">
              <h4 className="font-headline font-bold text-base mb-5 text-accent">Industries</h4>
              <nav aria-label="Industry links">
                <ul className="space-y-2.5 list-none m-0 p-0 mb-6">
                  <li><Link href="/trades" className="text-white/80 hover:text-white transition-colors text-sm">Trades &amp; Construction</Link></li>
                  <li><Link href="/professional-services" className="text-white/80 hover:text-white transition-colors text-sm">Professional Services</Link></li>
                </ul>
              </nav>
              <h4 className="font-headline font-bold text-base mb-5 text-accent">Compliance</h4>
              <nav aria-label="Compliance links">
                <ul className="space-y-2.5 list-none m-0 p-0">
                  <li><Link href="/cybersecurity" className="text-white/80 hover:text-white transition-colors text-sm">NIS2 &amp; GDPR</Link></li>
                  <li><Link href="/dora-compliance" className="text-white/80 hover:text-white transition-colors text-sm">DORA (Financial Sector)</Link></li>
                </ul>
              </nav>
            </section>

            {/* Company column */}
            <section aria-label="Company navigation">
              <h4 className="font-headline font-bold text-base mb-5 text-accent">Company</h4>
              <nav aria-label="Company links">
                <ul className="space-y-2.5 list-none m-0 p-0">
                  <li><Link href="/" className="text-white/80 hover:text-white transition-colors text-sm">Home</Link></li>
                  <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-sm">Bundles &amp; Pricing</Link></li>
                  <li><Link href="/grants-funding" className="text-white/80 hover:text-white transition-colors text-sm">Grants &amp; Funding</Link></li>
                  <li><Link href="/how-it-works" className="text-white/80 hover:text-white transition-colors text-sm">How It Works</Link></li>
                  <li><Link href="/portfolio" className="text-white/80 hover:text-white transition-colors text-sm">Portfolio</Link></li>
                  <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">Blog</Link></li>
                  <li><Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">About</Link></li>
                  <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</Link></li>
                  <li><a href="https://client.crettyarddigital.ie" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="link-footer-client-login">Client Login</a></li>
                </ul>
              </nav>
            </section>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/70 shrink-0">
              &copy; {new Date().getFullYear()} Crettyard Digital. All rights reserved.
            </p>

            <div className="flex flex-row gap-2 shrink-0">
              <a
                href="https://www.facebook.com/profile.php?id=61579447734496"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-facebook"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1877F2] text-white font-semibold text-xs hover:bg-[#1565d8] transition-colors shadow-sm"
              >
                <FacebookIcon />
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/crettyarddigital"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white font-semibold text-xs transition-colors shadow-sm"
                style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
              >
                <InstagramIcon />
                Follow on Instagram
              </a>
            </div>

            <nav aria-label="Legal links" className="shrink-0">
              <ul className="flex gap-4 text-xs text-white/60 list-none m-0 p-0">
                <li><Link href="/privacy-policy" className="hover:text-accent transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-accent transition-colors" data-testid="link-footer-terms">Terms &amp; Conditions</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-accent transition-colors" data-testid="link-footer-cookies">Cookie Policy</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
