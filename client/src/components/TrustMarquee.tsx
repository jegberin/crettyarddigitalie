const TRUST_ITEMS = [
  { label: "GDPR-Aware Setup",             sub: "Data Protection by Default" },
  { label: "EU Data Residency",            sub: "M365 Tenant in EU Region" },
  { label: "MFA by Default",               sub: "All Admin & User Accounts" },
  { label: "Full-Disk Encryption",         sub: "BitLocker on Every Device" },
  { label: "Monitored Backups",            sub: "Tested & Recoverable" },
  { label: "NIS2 Supply-Chain Ready",      sub: "Controls Documented for Audit" },
  { label: "WCAG-Aligned Websites",        sub: "EAA Accessibility Standards" },
  { label: "Microsoft Security Baselines", sub: "Recommended Hardening Applied" },
  { label: "15+ Years Enterprise IT",      sub: "Experience That Translates" },
  { label: "26 Industry Certifications",   sub: "Microsoft · Cloud · Security · Networking" },
  { label: "Cloud Architect Background",   sub: "Enterprise-Scale Design, SME-Scale Delivery" },
  { label: "Long-Term Client Relationships", sub: "Built to Stay, Not to Invoice and Disappear" },
  { label: "Plain-English Service",        sub: "No Jargon, No Runaround" },
  { label: "One Point of Contact",         sub: "You Call Me, Not a Helpdesk" },
  { label: "Grow Digital Voucher Ready",   sub: "LEO-Aligned Software Supplier" },
];

export function TrustMarquee() {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div
      className="w-full overflow-hidden bg-white border-t border-b border-gray-100 py-5"
      aria-label="Crettyard Digital trust signals and service standards"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="flex flex-col px-10">
              <span className="font-headline font-extrabold text-sm tracking-tight text-primary uppercase whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-[10px] font-headline font-semibold tracking-widest text-accent uppercase whitespace-nowrap">
                {item.sub}
              </span>
            </span>
            <span className="text-accent text-lg select-none" aria-hidden="true">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
