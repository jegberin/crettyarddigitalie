import { useEffect, useRef } from "react";

// Source: Optimus template /components/landing/animated-tetrahedron.tsx
// Block-char aesthetic preserved; colours adapted for dark navy background.
// Responsive: fills whatever container it is placed in.

const CHARS = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";

const VERTICES = [
  { x: 0,      y:  1,     z:  0    }, // top
  { x: -0.943, y: -0.333, z: -0.5  }, // bottom-left-back
  { x:  0.943, y: -0.333, z: -0.5  }, // bottom-right-back
  { x:  0,     y: -0.333, z:  1    }, // bottom-front
] as const;

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3],
  [1, 2], [2, 3], [3, 1],
];

const FACES: [number, number, number][] = [
  [0, 1, 2],
  [0, 2, 3],
  [0, 3, 1],
  [1, 3, 2],
];

type Pt = { x: number; y: number; z: number };

const ry = (p: Pt, a: number): Pt => ({ x: p.x * Math.cos(a) - p.z * Math.sin(a), y: p.y,   z: p.x * Math.sin(a) + p.z * Math.cos(a) });
const rx = (p: Pt, a: number): Pt => ({ x: p.x,   y: p.y * Math.cos(a) - p.z * Math.sin(a), z: p.y * Math.sin(a) + p.z * Math.cos(a) });
const rz = (p: Pt, a: number): Pt => ({ x: p.x * Math.cos(a) - p.y * Math.sin(a), y: p.x * Math.sin(a) + p.y * Math.cos(a), z: p.z });

interface AnimatedTetrahedronProps {
  className?: string;
}

export function AnimatedTetrahedron({ className = "" }: AnimatedTetrahedronProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const applySize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      canvas.width  = Math.round(rect.width  * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    applySize();
    window.addEventListener("resize", applySize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width  || canvas.width;
      const h = rect.height || canvas.height;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.72;
      const cy = h / 2;
      // Scale so the shape comfortably fills but slightly bleeds off edges
      const sc = Math.min(w, h) * 0.58;

      ctx.font = "18px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const points: { x: number; y: number; z: number; ch: string }[] = [];

      // Points along edges
      for (const [i, j] of EDGES) {
        const v1 = VERTICES[i];
        const v2 = VERTICES[j];
        for (let t = 0; t <= 1; t += 0.05) {
          let p: Pt = {
            x: v1.x + (v2.x - v1.x) * t,
            y: v1.y + (v2.y - v1.y) * t,
            z: v1.z + (v2.z - v1.z) * t,
          };
          p = ry(rx(rz(p, time * 0.2), time * 0.3), time * 0.4);
          const depth = (p.z + 1.5) / 3;
          const ci = Math.min(Math.floor(depth * (CHARS.length - 1)), CHARS.length - 1);
          points.push({ x: cx + p.x * sc, y: cy - p.y * sc, z: p.z, ch: CHARS[ci] });
        }
      }

      // Points on faces
      for (const [i, j, k] of FACES) {
        const v1 = VERTICES[i];
        const v2 = VERTICES[j];
        const v3 = VERTICES[k];
        for (let u = 0; u <= 1; u += 0.12) {
          for (let v = 0; v <= 1 - u; v += 0.12) {
            const w2 = 1 - u - v;
            let p: Pt = {
              x: v1.x * u + v2.x * v + v3.x * w2,
              y: v1.y * u + v2.y * v + v3.y * w2,
              z: v1.z * u + v2.z * v + v3.z * w2,
            };
            p = ry(rx(rz(p, time * 0.2), time * 0.3), time * 0.4);
            const depth = (p.z + 1.5) / 3;
            const ci = Math.min(Math.floor(depth * (CHARS.length - 1)), CHARS.length - 1);
            points.push({ x: cx + p.x * sc, y: cy - p.y * sc, z: p.z, ch: CHARS[ci] });
          }
        }
      }

      // Back-to-front sort
      points.sort((a, b) => a.z - b.z);

      // Draw — teal (deep) → white (front) with depth-driven alpha
      for (const { x, y, z, ch } of points) {
        const depth = (z + 1.5) / 3;
        const alpha = Math.min(0.15 + depth * 0.75, 0.9);
        const r = Math.round(29  + (255 - 29)  * depth);
        const g = Math.round(180 + (255 - 180) * depth);
        const b = Math.round(143 + (255 - 143) * depth);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fillText(ch, x, y);
      }

      time += 0.015;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", applySize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
