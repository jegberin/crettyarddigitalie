import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";

interface SpotlightCTAProps {
  eyebrow?: string;
  heading: string;
  subtext: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  isExternal?: boolean;
  isSecondaryExternal?: boolean;
  showSocial?: boolean;
}

export function SpotlightCTA({
  eyebrow = "Let's Get Started",
  heading,
  subtext,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  isExternal = false,
  isSecondaryExternal = false,
  showSocial = false,
}: SpotlightCTAProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const box = boxRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    box.style.setProperty("--sx", `${x}%`);
    box.style.setProperty("--sy", `${y}%`);
  }

  const PrimaryButton = (
    <Button
      size="lg"
      className="px-10 bg-accent text-white hover:bg-[#18a07e]"
      data-testid="button-spotlight-primary"
    >
      {primaryText}
    </Button>
  );

  const SecondaryButton = secondaryText && secondaryHref ? (
    <Button
      size="lg"
      variant="outline"
      className="px-8 border-white/30 text-white hover:bg-white/10"
      data-testid="button-spotlight-secondary"
    >
      {secondaryText}
    </Button>
  ) : null;

  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          ref={boxRef}
          onMouseMove={handleMouseMove}
          className="relative rounded-3xl border border-white/10 overflow-hidden cursor-default"
          style={
            {
              background:
                "radial-gradient(circle at var(--sx, 50%) var(--sy, 50%), rgba(29,180,143,0.18) 0%, transparent 55%)",
              "--sx": "50%",
              "--sy": "50%",
            } as React.CSSProperties
          }
        >
          {showSocial ? (
            <div className="relative z-10 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* CTA column */}
              <div className="p-10 md:p-14">
                <span className="eyebrow mb-5 inline-block">{eyebrow}</span>
                <h2 className="text-white mb-5">{heading}</h2>
                <p className="text-white text-base font-sans font-normal leading-relaxed mb-8">
                  {subtext}
                </p>
                <div className="flex flex-wrap gap-3">
                  {isExternal ? <a href={primaryHref}>{PrimaryButton}</a> : <Link href={primaryHref}>{PrimaryButton}</Link>}
                  {SecondaryButton && (
                    isSecondaryExternal
                      ? <a href={secondaryHref!}>{SecondaryButton}</a>
                      : <Link href={secondaryHref!}>{SecondaryButton}</Link>
                  )}
                </div>
              </div>

              {/* Social column */}
              <div className="p-10 md:p-14">
                <span className="eyebrow mb-5 inline-block">Stay Connected</span>
                <h3 className="text-white text-xl md:text-2xl mb-3">Follow Us for Tips, Offers &amp; Updates</h3>
                <p className="text-white font-sans font-normal text-sm leading-relaxed mb-8">
                  Get helpful digital tips for small businesses, behind-the-scenes updates, and exclusive offers — straight to your feed.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579447734496"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-follow-facebook"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#1877F2] text-white font-semibold text-sm hover:bg-[#1565d8] transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                    Follow on Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/crettyarddigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-follow-instagram"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-white font-semibold text-sm transition-colors shadow-sm"
                    style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 p-10 md:p-20 text-center">
              <span className="eyebrow mb-5 inline-block">{eyebrow}</span>
              <h2 className="text-white mb-6">{heading}</h2>
              <p className="text-white text-lg max-w-2xl mx-auto mb-10 font-sans font-normal leading-relaxed">
                {subtext}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {isExternal ? <a href={primaryHref}>{PrimaryButton}</a> : <Link href={primaryHref}>{PrimaryButton}</Link>}
                {SecondaryButton && (
                  isSecondaryExternal
                    ? <a href={secondaryHref!}>{SecondaryButton}</a>
                    : <Link href={secondaryHref!}>{SecondaryButton}</Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
