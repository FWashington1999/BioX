import type { CSSProperties } from 'react';

interface Continent { cx: number; cy: number; rx: number; ry: number }

const CONTINENTS: Continent[] = [
  { cx: 175, cy: 135, rx: 95, ry: 65 },
  { cx: 215, cy: 200, rx: 35, ry: 18 },
  { cx: 280, cy: 295, rx: 50, ry: 80 },
  { cx: 360, cy: 70,  rx: 26, ry: 22 },
  { cx: 470, cy: 125, rx: 50, ry: 38 },
  { cx: 490, cy: 240, rx: 55, ry: 80 },
  { cx: 540, cy: 175, rx: 35, ry: 25 },
  { cx: 620, cy: 145, rx: 105, ry: 70 },
  { cx: 605, cy: 200, rx: 25, ry: 28 },
  { cx: 700, cy: 235, rx: 45, ry: 18 },
  { cx: 740, cy: 290, rx: 45, ry: 28 },
  { cx: 740, cy: 165, rx: 14, ry: 22 },
];

function inLand(x: number, y: number): boolean {
  for (const c of CONTINENTS) {
    const dx = (x - c.cx) / c.rx;
    const dy = (y - c.cy) / c.ry;
    if (dx * dx + dy * dy < 1) return true;
  }
  return false;
}

interface Dot { x: number; y: number; r: number; dim: boolean }

const DOTS: Dot[] = (() => {
  const out: Dot[] = [];
  const W = 800, H = 400;
  const step = 7;
  for (let y = 10; y < H - 10; y += step) {
    const offset = (Math.floor(y / step) % 2) * (step / 2);
    for (let x = 10 + offset; x < W - 10; x += step) {
      const jx = x + (Math.sin(x * 1.7 + y) * 0.6);
      const jy = y + (Math.cos(x + y * 1.3) * 0.6);
      if (inLand(jx, jy)) {
        let edge = false;
        for (const c of CONTINENTS) {
          const dx = (jx - c.cx) / c.rx;
          const dy = (jy - c.cy) / c.ry;
          const d = dx * dx + dy * dy;
          if (d > 0.7 && d < 1) edge = true;
        }
        out.push({ x: jx, y: jy, r: edge ? 0.9 : 1.25, dim: edge });
      }
    }
  }
  return out;
})();

export const HUBS = {
  brazil:  { x: 290, y: 305, label: 'BR' },
  usa:     { x: 165, y: 145, label: 'US' },
  germany: { x: 472, y: 118, label: 'DE' },
  switz:   { x: 472, y: 130, label: 'CH' },
  china:   { x: 660, y: 165, label: 'CN' },
  india:   { x: 605, y: 200, label: 'IN' },
  japan:   { x: 740, y: 160, label: 'JP' },
  korea:   { x: 715, y: 165, label: 'KR' },
};

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }, bend = 0.35): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  const cx = mx + (-dy / len) * len * bend;
  const cy = my + (dx / len) * len * bend;
  const finalCy = Math.min(cy, my) - Math.abs(len * bend * 0.4);
  return `M ${a.x} ${a.y} Q ${cx} ${finalCy} ${b.x} ${b.y}`;
}

const ROUTES = [
  { from: HUBS.usa,     to: HUBS.brazil, delay: 0   },
  { from: HUBS.germany, to: HUBS.brazil, delay: 1.2 },
  { from: HUBS.china,   to: HUBS.brazil, delay: 2.4 },
  { from: HUBS.india,   to: HUBS.brazil, delay: 3.6 },
  { from: HUBS.japan,   to: HUBS.brazil, delay: 4.8 },
];

interface WorldMapProps { style?: CSSProperties }

export function WorldMap({ style }: WorldMapProps) {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bxMapFade" cx="50%" cy="50%" r="60%">
          <stop offset="0%"  stopColor="#fff" stopOpacity="1"/>
          <stop offset="70%" stopColor="#fff" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
        <mask id="bxMapMask">
          <rect width="800" height="400" fill="url(#bxMapFade)"/>
        </mask>
        <filter id="bxGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <g mask="url(#bxMapMask)">
        <g fill="#5B7BB8">
          {DOTS.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} opacity={d.dim ? 0.45 : 0.85}/>
          ))}
        </g>

        <g stroke="rgba(122,170,255,0.06)" strokeWidth="0.5" fill="none">
          <line x1="0" y1="200" x2="800" y2="200"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="280" x2="800" y2="280"/>
        </g>

        <g fill="none" stroke="#00D4FF" strokeWidth="1" filter="url(#bxGlow)">
          {ROUTES.map((r, i) => (
            <path
              key={i}
              d={arcPath(r.from, r.to)}
              strokeDasharray="3 4"
              opacity="0.85"
              style={{ animation: `bx-dash 6s linear ${r.delay}s infinite` }}
            />
          ))}
        </g>

        <g>
          {Object.values(HUBS).map((h, i) => (
            <g key={i} transform={`translate(${h.x} ${h.y})`}>
              <circle r="6" fill="rgba(0,212,255,0.15)">
                <animate attributeName="r" values="4;14;4" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite"/>
              </circle>
              <circle r="2.4" fill="#00D4FF"/>
              <circle r="1" fill="#fff"/>
            </g>
          ))}
          <g transform={`translate(${HUBS.brazil.x} ${HUBS.brazil.y})`}>
            <circle r="9" fill="none" stroke="#5BE7FF" strokeWidth="1.2" opacity="0.6"/>
            <circle r="3.5" fill="#5BE7FF"/>
          </g>
        </g>
      </g>
    </svg>
  );
}
