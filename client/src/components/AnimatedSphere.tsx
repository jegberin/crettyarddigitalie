import { useEffect, useRef } from "react";

interface AnimatedSphereProps {
  size?: number;
  className?: string;
}

export function AnimatedSphere({ size = 440, className = "" }: AnimatedSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.44;

    // Build a uniform lat/lon point cloud on unit sphere
    const LAT = 32;
    const LON = 64;
    const pts: Array<[number, number, number]> = [];

    for (let i = 0; i <= LAT; i++) {
      const phi = (i / LAT) * Math.PI; // 0..PI
      for (let j = 0; j < LON; j++) {
        const theta = (j / LON) * 2 * Math.PI;
        pts.push([
          Math.sin(phi) * Math.cos(theta),
          Math.cos(phi),
          Math.sin(phi) * Math.sin(theta),
        ]);
      }
    }

    const DOT_W = 2;
    const DOT_H = 6;

    // Fixed slight X-tilt (matching Optimus camera angle)
    const TILT = 0.22;
    const cosX = Math.cos(TILT);
    const sinX = Math.sin(TILT);

    let rotY = 0;
    let animId: number;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      rotY += 0.004;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected: Array<{ sx: number; sy: number; z: number }> = [];

      for (const [x0, y0, z0] of pts) {
        // Y-axis rotation
        const x1 = x0 * cosY + z0 * sinY;
        const z1 = -x0 * sinY + z0 * cosY;
        // X-axis tilt
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        projected.push({ sx: cx + x1 * R, sy: cy - y2 * R, z: z2 });
      }

      // Painter's sort — back to front
      projected.sort((a, b) => a.z - b.z);

      for (const { sx, sy, z } of projected) {
        if (z < -0.35) continue; // skip dots fully behind

        // Map z (-0.35 → 1.0) to alpha (dim → bright)
        const t = (z + 0.35) / 1.35;
        const alpha = 0.06 + t * 0.62;

        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fillRect(sx - DOT_W / 2, sy - DOT_H / 2, DOT_W, DOT_H);
      }

      animId = requestAnimationFrame(frame);
    }

    frame();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={className}
      aria-hidden="true"
    />
  );
}
