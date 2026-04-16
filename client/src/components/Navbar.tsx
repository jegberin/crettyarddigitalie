import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import logoImg from "@assets/crettyard-digital-logo.webp";

const serviceLinks = [
  { label: "Web Design", path: "/web-design", desc: "Professional websites that win customers" },
  { label: "Microsoft 365 & Teams Phone", path: "/microsoft-365", desc: "Email, cloud tools, and business phone" },
  { label: "Managed IT Support", path: "/managed-it-support", desc: "Your outsourced IT department" },
  { label: "Managed Hardware", path: "/managed-hardware", desc: "Turnkey PCs & servers, ready to use" },
  { label: "Network & Wi\u2011Fi", path: "/network-wifi-security", desc: "Reliable business connectivity" },
  { label: "Cybersecurity & Compliance", path: "/cybersecurity", desc: "NIS2, GDPR, and threat protection" },
  { label: "AI & Microsoft Copilot", path: "/ai-readiness", desc: "Practical AI for small business" },
  { label: "Website Care Plans", path: "/website-care-plans", desc: "Hosting, security, and maintenance" },
];

const industryLinks = [
  { label: "Trades & Construction", path: "/trades", desc: "Websites & IT for tradespeople" },
  { label: "Professional Services", path: "/professional-services", desc: "IT & compliance for accountants, solicitors" },
];

const moreLinks = [
  { label: "Bundles & Pricing", path: "/pricing" },
  { label: "Grants & Funding", path: "/grants-funding" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isServiceActive = serviceLinks.some((l) => location === l.path);
  const isIndustryActive = industryLinks.some((l) => location === l.path);
  const isGetAQuote = location === "/get-a-quote";

  const linkClass = (active: boolean) =>
    `font-headline text-[13px] font-bold transition-all duration-200 hover:text-accent pb-0.5 ${
      active ? "text-accent border-b-2 border-accent" : "text-primary/80"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "py-2 bg-transparent" : "py-0 bg-transparent"
      }`}
    >
      <nav aria-label="Main navigation">
        <div
          className={`nav-pill flex items-center justify-between h-14 ${
            isScrolled
              ? "max-w-5xl mx-auto px-5 bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-gray-100"
              : "container mx-auto px-4"
          }`}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Crettyard Digital — home">
            <img src={logoImg} alt="Crettyard Digital logo" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
            {/* Services dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`${linkClass(isServiceActive)} flex items-center gap-1`}
                aria-expanded={openDropdown === "services"}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-[340px]">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 px-2">Services</p>
                    <ul className="list-none m-0 p-0">
                      {serviceLinks.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <span className="font-headline text-sm font-bold text-primary">{item.label}</span>
                            <span className="text-xs text-muted-foreground">{item.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 px-2">Industries</p>
                      <ul className="list-none m-0 p-0">
                        {industryLinks.map((item) => (
                          <li key={item.path}>
                            <Link
                              href={item.path}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors"
                            >
                              <span className="font-headline text-sm font-bold text-primary">{item.label}</span>
                              <span className="text-xs text-muted-foreground">{item.desc}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Direct links */}
            <li>
              <Link href="/pricing" className={linkClass(location === "/pricing")}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/grants-funding" className={linkClass(location === "/grants-funding")}>
                Grants
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={linkClass(location === "/portfolio")}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass(location === "/about")}>
                About
              </Link>
            </li>

            {/* Action buttons */}
            <li>
              <a
                href="https://client.crettyarddigital.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="font-headline text-[13px] font-bold transition-all duration-200 hover:text-accent text-primary/80"
                data-testid="link-nav-client-login"
              >
                Login
              </a>
            </li>
            <li>
              <Link href="/get-a-quote">
                <Button
                  size="sm"
                  variant={isGetAQuote ? "default" : "outline"}
                  className="px-5 h-9 text-[13px]"
                  data-testid="button-nav-get-quote"
                >
                  Quote
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contact#send-message">
                <Button size="sm" className="px-5 h-9 text-[13px]" data-testid="button-nav-contact">
                  Contact
                </Button>
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            data-mobile-toggle=""
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu size={24} style={{ display: isMobileMenuOpen ? "none" : "block" }} />
            <X size={24} style={{ display: isMobileMenuOpen ? "block" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          data-mobile-menu=""
          className="lg:hidden absolute top-full left-0 w-full bg-white/97 backdrop-blur-md p-4 shadow-xl flex-col gap-2 border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          style={{ display: isMobileMenuOpen ? "flex" : "none" }}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="flex flex-col gap-0.5 list-none m-0 p-0">
            <li>
              <Link
                href="/"
                className={`block font-headline font-bold p-2.5 hover:bg-secondary rounded-xl text-sm ${
                  location === "/" ? "text-accent" : "text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services accordion */}
            <li>
              <button
                className={`w-full flex items-center justify-between font-headline font-bold p-2.5 hover:bg-secondary rounded-xl text-sm ${
                  isServiceActive ? "text-accent" : "text-primary"
                }`}
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "services" && (
                <ul className="list-none m-0 p-0 pl-3 pb-1">
                  {serviceLinks.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`block p-2 rounded-lg text-sm hover:bg-secondary ${
                          location === item.path ? "text-accent font-bold" : "text-primary/80"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Industries accordion */}
            <li>
              <button
                className={`w-full flex items-center justify-between font-headline font-bold p-2.5 hover:bg-secondary rounded-xl text-sm ${
                  isIndustryActive ? "text-accent" : "text-primary"
                }`}
                onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
              >
                Industries
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileExpanded === "industries" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileExpanded === "industries" && (
                <ul className="list-none m-0 p-0 pl-3 pb-1">
                  {industryLinks.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`block p-2 rounded-lg text-sm hover:bg-secondary ${
                          location === item.path ? "text-accent font-bold" : "text-primary/80"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Direct links */}
            {moreLinks.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block font-headline font-bold p-2.5 hover:bg-secondary rounded-xl text-sm ${
                    location === item.path ? "text-accent" : "text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="https://client.crettyarddigital.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary font-headline font-bold p-2.5 hover:bg-secondary rounded-xl text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="link-mobile-client-login"
              >
                Login
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-2 mt-3">
            <Link href="/get-a-quote" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full" data-testid="button-mobile-get-quote">
                Quote
              </Button>
            </Link>
            <Link href="/contact#send-message" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full" data-testid="button-mobile-contact">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
