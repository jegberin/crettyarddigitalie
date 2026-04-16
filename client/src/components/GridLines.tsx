interface GridLinesProps {
  cols?: number;
  rows?: number;
  className?: string;
  color?: string;
  opacity?: number;
}

export function GridLines({
  cols = 8,
  rows = 6,
  className = "",
  color = "currentColor",
  opacity = 0.06,
}: GridLinesProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${((i + 1) / (cols + 1)) * 100}%`,
              background: color,
              opacity,
            }}
          />
        ))}
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${((i + 1) / (rows + 1)) * 100}%`,
              background: color,
              opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
