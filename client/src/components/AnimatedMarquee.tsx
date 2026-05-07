const ITEMS = [
  { label: "Managed IT Support",     sub: "Your IT Department" },
  { label: "Microsoft 365 & Teams",  sub: "Email · Phone · Cloud" },
  { label: "Cybersecurity",          sub: "NIS2 · GDPR · EAA" },
  { label: "Network & Wi-Fi",        sub: "No More Dead Spots" },
  { label: "AI & Copilot",           sub: "Practical Productivity" },
  { label: "Web Design & SEO",       sub: "Get Found Online" },
  { label: "Government Grants",      sub: "Up to 50% Funded" },
  { label: "Ireland-Wide Coverage",  sub: "32 Counties · Remote-First" },
];

export function AnimatedMarquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden bg-white border-t border-b border-gray-100 py-5"
      aria-hidden="true"
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
            <span className="text-accent text-lg select-none" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
