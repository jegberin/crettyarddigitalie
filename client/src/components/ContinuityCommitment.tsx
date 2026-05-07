const ITEMS = [
  "No long lock-ins",
  "Documented exit",
  "Capacity assessed against scope",
  "Same person to contact in 2030",
];

export function ContinuityCommitment() {
  return (
    <p
      className="text-center text-[13px] font-headline font-semibold text-primary/70 tracking-wide"
      data-testid="continuity-commitment"
    >
      {ITEMS.map((item, i) => (
        <span key={item} className="inline-block">
          {item}
          {i < ITEMS.length - 1 && <span className="mx-3 text-accent" aria-hidden="true">·</span>}
        </span>
      ))}
    </p>
  );
}
