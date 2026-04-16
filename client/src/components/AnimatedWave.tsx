interface AnimatedWaveProps {
  fill?: string;
  className?: string;
}

export function AnimatedWave({ fill = "#002157", className = "" }: AnimatedWaveProps) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ lineHeight: 0, height: 80 }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2880 80"
        preserveAspectRatio="none"
        style={{ width: "200%", height: "100%", display: "block" }}
      >
        <path
          fill={fill}
          fillOpacity="0.45"
          d="M0,40 C360,80 720,0 1080,40 C1440,80 1800,0 2160,40 C2340,60 2520,20 2880,40 L2880,80 L0,80 Z"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-1440 0"
            dur="9s"
            repeatCount="indefinite"
          />
        </path>
        <path
          fill={fill}
          d="M0,40 C360,0 720,80 1080,40 C1440,0 1800,80 2160,40 C2340,20 2520,60 2880,40 L2880,80 L0,80 Z"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-1440 0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
