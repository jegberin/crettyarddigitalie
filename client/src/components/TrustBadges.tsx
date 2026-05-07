const badges = [
  {
    id: "enterprise-experience",
    label: "Enterprise Experience",
    description: "15+ years \u2014 Microsoft, Intel, Dell",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "26 Industry Certifications",
    description: "Microsoft \u00b7 Cloud \u00b7 Security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="8" r="6" />
        <polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: "no-jargon",
    label: "Plain English, Always",
    description: "No jargon, no runaround",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    ),
  },
  {
    id: "grow-digital-ready",
    label: "Grow Digital Voucher Ready",
    description: "Scheme-compliant invoicing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "compliance-ready",
    label: "Compliance Ready",
    description: "NIS2, GDPR & EAA expertise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "one-person",
    label: "One Person to Call",
    description: "Direct access to Joey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export function TrustBadges() {
  return (
    <ul
      className="flex flex-wrap justify-center gap-3 list-none m-0 p-0"
      aria-label="Why choose Crettyard Digital"
    >
      {badges.map((badge) => (
        <li
          key={badge.id}
          className="flex items-center gap-2 bg-white border border-white rounded-xl px-4 py-2.5 shadow-sm"
          data-testid={`badge-trust-${badge.id}`}
        >
          <span className="text-accent shrink-0">{badge.icon}</span>
          <div>
            <p className="font-headline font-bold text-primary text-[13px] leading-tight">{badge.label}</p>
            <p className="text-foreground text-[11px] font-sans leading-tight">{badge.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
