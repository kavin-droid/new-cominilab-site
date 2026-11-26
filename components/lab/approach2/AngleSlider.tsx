"use client";

import { useState } from "react";
import { Coin, FONT, INK, Kid, Pencil, WOOD, WOOD_SH } from "./parts/art";
import "./art.css";

/**
 * "Keep the whole experience" (owner's comment on the approach redesign, 2026-11-25): one picture, drag across it. On
 * the left the bare exercise (an angle on a worksheet with a protractor laid on it, a ruler, a pencil), on the right the
 * same angle as the way to a treasure on an island. Drawn in the "four parts" cards' style (parts/art.tsx): flat
 * shapes, hard darker copies as shadows, the same palette, a 600x450 view. Both sides share one geometry (corner V, a
 * ground arm to A, a 40 degree arm to B), so the lines meet as the handle crosses. Moving parts are aa-* in art.css.
 */
const DEG = Math.PI / 180;
const V = { x: 165, y: 345 }; // the angle's corner
const A = { x: 540, y: 345 }; // along the ground
const pt = (r: number, deg: number) => ({ x: V.x + r * Math.cos(deg * DEG), y: V.y - r * Math.sin(deg * DEG) });
const B = pt(375, 40);
const f = (n: number) => n.toFixed(1);
const arc = (r: number) => { const e = pt(r, 40); return `M ${V.x + r} ${V.y} A ${r} ${r} 0 0 0 ${f(e.x)} ${f(e.y)}`; };
const LABEL = { x: V.x + 96, y: V.y - 30 }; // where the "?°" / "40°" tag sits, inside the angle

function View({ children }: { children: React.ReactNode }) {
  return <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{children}</svg>;
}

/** the angle's tag: white card, hard shadow */
function AngleTag({ text, color, sh }: { text: string; color: string; sh: string }) {
  return (
    <g transform={`translate(${LABEL.x} ${LABEL.y})`}>
      <rect x="-31" y="-19" width="62" height="38" fill={sh} transform="translate(-5 6)" />
      <rect x="-31" y="-19" width="62" height="38" fill="#FFFFFF" />
      <rect x="-31" y="-19" width="62" height="6" fill={color} />
      <text y="13" fontSize="24" fontWeight="800" textAnchor="middle" fill={color === INK ? INK : color} style={FONT}>{text}</text>
    </g>
  );
}

/* ---------- the bare exercise ---------- */

const PR = 132; // protractor radius
function Protractor() {
  const half = (r: number) => `M ${V.x - r} ${V.y} A ${r} ${r} 0 0 1 ${V.x + r} ${V.y}`;
  const body = `M ${V.x - PR} ${V.y + 14} V ${V.y} A ${PR} ${PR} 0 0 1 ${V.x + PR} ${V.y} V ${V.y + 14} Z M ${V.x - 56} ${V.y} A 56 56 0 0 1 ${V.x + 56} ${V.y} Z`;
  return (
    <g>
      <path d={body} fill="rgba(59,55,87,0.13)" fillRule="evenodd" transform="translate(-7 9)" />
      <path d={body} fill="#CFEFF5" fillOpacity="0.88" fillRule="evenodd" />
      <path d={half(PR - 9)} fill="none" stroke="#FFFFFF" strokeWidth="5" strokeDasharray="70 400" strokeLinecap="round" opacity="0.9" />
      {Array.from({ length: 37 }, (_, k) => {
        const d = k * 5, long = d % 10 === 0;
        const o = pt(PR - 2, d), i = pt(PR - (long ? 18 : 10), d);
        return <path key={d} d={`M${f(o.x)} ${f(o.y)} L${f(i.x)} ${f(i.y)}`} stroke={INK} strokeWidth={long ? 2.4 : 1.6} />;
      })}
      {[0, 30, 60, 90, 120, 150, 180].map((d) => {
        const p = pt(PR - 34, d);
        return <text key={d} x={f(p.x)} y={f(p.y)} transform={`rotate(${90 - d} ${f(p.x)} ${f(p.y)})`} fontSize="14" fontWeight="800" textAnchor="middle" dominantBaseline="central" fill="#2F9C98" style={FONT}>{d}</text>;
      })}
      <path d={`M ${V.x - PR + 10} ${V.y} H ${V.x + PR - 10}`} stroke={INK} strokeWidth="2" />
      <path d={`M ${V.x} ${V.y - 10} V ${V.y + 12} M ${V.x - 8} ${V.y + 6} H ${V.x + 8}`} stroke={INK} strokeWidth="2.4" />
    </g>
  );
}

function Plain() {
  return (
    <View>
      {/* the desk */}
      <rect width="600" height="450" fill={WOOD} />
      <path d="M0 40 H130 M470 26 H600 M0 436 H120 M520 440 H600 M574 140 V300" stroke="#C98D57" strokeWidth="3" />
      {/* the worksheet, on a stack */}
      <rect x="44" y="22" width="512" height="404" fill="#E8E7F1" transform="rotate(2.4 300 224) translate(10 4)" />
      <rect x="44" y="22" width="512" height="404" fill={WOOD_SH} transform="translate(-12 14)" />
      <rect x="44" y="22" width="512" height="404" fill="#FFFFFF" />
      <rect x="44" y="22" width="512" height="48" fill="#8C88A2" />
      <text x="68" y="55" fontSize="24" fontWeight="800" fill="#FFFFFF" style={FONT}>Q4.</text>
      <rect x="124" y="40" width="120" height="11" fill="#A9A5BD" /><rect x="456" y="40" width="76" height="11" fill="#A9A5BD" />
      {Array.from({ length: 9 }, (_, i) => <rect key={i} x="66" y={104 + i * 36} width="468" height="2.5" fill="#EFEDF5" />)}
      <rect x="66" y="88" width="150" height="10" fill="#CFCDDA" /><rect x="66" y="108" width="96" height="10" fill="#CFCDDA" />

      {/* the angle, ruled in pencil */}
      <g stroke={INK} strokeWidth="6" strokeLinecap="round">
        <path d={`M${V.x} ${V.y} L${A.x} ${A.y}`} />
        <path d={`M${V.x} ${V.y} L${f(B.x)} ${f(B.y)}`} />
      </g>
      <circle cx={A.x} cy={A.y} r="7" fill={INK} />
      <circle cx={f(B.x)} cy={f(B.y)} r="7" fill={INK} />

      <Protractor />

      <path d={arc(40)} fill="none" stroke="#E25A4F" strokeWidth="5" strokeLinecap="round" />
      <AngleTag text="?°" color="#E25A4F" sh="#E8E7F1" />

      {/* the ruler */}
      <g transform="rotate(-5 410 400)">
        <rect x="262" y="384" width="300" height="38" fill={WOOD_SH} transform="translate(-8 10)" />
        <rect x="262" y="384" width="300" height="38" fill="#FFD34E" />
        <rect x="262" y="384" width="300" height="9" fill="#FFE58A" />
        <rect x="262" y="415" width="300" height="7" fill="#F0B92E" />
        {Array.from({ length: 27 }, (_, i) => <rect key={i} x={274 + i * 10.5} y="393" width="2" height={i % 5 === 0 ? 14 : 8} fill={INK} />)}
        {[0, 5, 10, 15, 20, 25].map((n, i) => <text key={n} x={275 + i * 52.5} y="417" fontSize="11" fontWeight="800" textAnchor="middle" fill={INK} style={FONT}>{n}</text>)}
      </g>
      <Pencil x={462} y={318} r={-68} s={1} />
      {/* the eraser */}
      <g transform="translate(470 160) rotate(14)">
        <rect x="-32" y="-15" width="64" height="30" fill="#E2E0EC" transform="translate(-6 7)" />
        <rect x="-32" y="-15" width="64" height="30" fill="#F4A3B4" />
        <rect x="-6" y="-15" width="38" height="30" fill="#4AC1BD" />
        <rect x="-6" y="-15" width="38" height="8" fill="#7AD6D2" />
      </g>
      {/* Ava, bored, peeking over the edge of the desk */}
      <Kid x={84} y={420} s={0.56} sp="raccoon" mood="flat" />
      <rect y="432" width="600" height="18" fill={WOOD_SH} />
    </View>
  );
}

/* ---------- the same angle, on a treasure island ---------- */

// the island in a 400x300 frame, drawn at 1.5x
const ISLAND = "M 70 282 C 50 262 44 236 50 208 C 54 180 48 150 66 124 C 88 92 120 82 150 72 C 190 58 230 40 272 34 C 310 28 342 36 356 60 C 368 82 384 100 386 140 C 388 180 392 214 384 246 C 376 274 344 288 300 292 C 240 297 160 296 112 292 C 92 290 80 290 70 282 Z";
const GRASS = "M 88 268 C 72 250 68 228 72 206 C 76 180 72 156 88 134 C 106 110 134 102 160 94 C 196 82 234 66 270 60 C 298 56 318 62 326 80 C 338 100 362 114 364 146 C 366 182 368 212 362 236 C 356 258 332 266 298 270 C 240 274 160 274 116 270 C 104 269 96 272 88 268 Z";

const Leaf = ({ d, r }: { d: string; r: number }) => (
  <g transform={`rotate(${r})`}>
    <path d={d} fill="#4FA046" transform="translate(-3 5)" />
    <path d={d} fill="#5FB24F" />
  </g>
);
const FROND = "M0 0 Q 22 -26 58 -14 Q 36 -10 30 -2 Q 18 -8 0 6 Z";
function Palm({ x, y, s = 1, cls = "aa-sway" }: { x: number; y: number; s?: number; cls?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="-8" cy="4" rx="30" ry="8" fill="#7CC46B" />
      <path d="M-8 0 Q -6 -44 6 -88 L 18 -88 Q 8 -44 8 0 Z" fill={WOOD_SH} transform="translate(-4 4)" />
      <path d="M-8 0 Q -6 -44 6 -88 L 18 -88 Q 8 -44 8 0 Z" fill={WOOD} />
      {[-14, -32, -50, -68].map((t, i) => <path key={t} d={`M ${-7 + i * 3} ${t} h ${14 - i}`} stroke={WOOD_SH} strokeWidth="3" />)}
      <g className={cls} transform="translate(12 -90)">
        <Leaf d={FROND} r={0} /><Leaf d={FROND} r={-50} /><Leaf d={FROND} r={180} /><Leaf d={FROND} r={-130} /><Leaf d={FROND} r={-90} />
        <circle cx="-5" cy="6" r="6" fill="#8A5A35" /><circle cx="6" cy="8" r="6" fill="#6B4226" />
      </g>
    </g>
  );
}
const Bush = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <g fill="#4FA046" transform="translate(-4 5)"><circle cx="-14" cy="-8" r="14" /><circle cx="14" cy="-8" r="14" /><circle cx="0" cy="-18" r="17" /></g>
    <g fill="#5FB24F"><circle cx="-14" cy="-8" r="14" /><circle cx="14" cy="-8" r="14" /><circle cx="0" cy="-18" r="17" /></g>
    <circle cx="-6" cy="-24" r="5" fill="#7CC46B" />
    <circle cx="-12" cy="-6" r="3.5" fill="#FF7EB6" /><circle cx="12" cy="-12" r="3" fill="#FFFFFF" />
  </g>
);
const Rock = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-18 4 Q -20 -12 -6 -16 Q 12 -20 18 -6 Q 20 4 14 4 Z" fill="#7C838C" transform="translate(-4 5)" />
    <path d="M-18 4 Q -20 -12 -6 -16 Q 12 -20 18 -6 Q 20 4 14 4 Z" fill="#A3AAB3" />
    <path d="M-6 -16 Q 12 -20 18 -6 Q 6 -8 -2 -4 Z" fill="#C3C8CE" />
  </g>
);
const Tuft = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x - 10} ${y} L${x - 6} ${y - 14} L${x} ${y} L${x + 4} ${y - 16} L${x + 8} ${y}`} stroke="#7DBF5E" strokeWidth="4" fill="none" strokeLinejoin="round" />
);
const Wave = ({ x, y, d = 0 }: { x: number; y: number; d?: number }) => (
  <path className="aa-wave" style={{ animationDelay: `${d}s` }} d={`M${x} ${y} q 8 -8 16 0 t 16 0`} fill="none" stroke="#A8E4F2" strokeWidth="4" strokeLinecap="round" />
);
const Spark = ({ x, y, s = 1, cls }: { x: number; y: number; s?: number; cls: string }) => (
  <path className={`aa-spark ${cls}`} transform={`translate(${x} ${y}) scale(${s})`} d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z" fill="#FFFFFF" />
);

function Treasure() {
  return (
    <View>
      {/* sea, and the shallows round the island */}
      <rect width="600" height="450" fill="#5CC4E0" />
      {[[24, 170, 0], [40, 250, 1.2], [210, 24, 0.3], [320, 16, 1.6], [12, 92, 2], [560, 300, 0.4], [548, 420, 0.9], [440, 440, 1.4]].map(([x, y, d], i) => <Wave key={i} x={x} y={y} d={d} />)}
      <g transform="scale(1.5)">
        <path d={ISLAND} fill="none" stroke="#8FDCEA" strokeWidth="22" strokeLinejoin="round" />
        <path d={ISLAND} fill="#D8B479" transform="translate(-6 8)" />
        <path d={ISLAND} fill="#F4DDB0" />
        <path d={GRASS} fill="#7CC46B" transform="translate(-3 5)" />
        <path d={GRASS} fill="#9ED67F" />
      </g>
      {[[132, 426], [470, 430], [560, 240], [440, 64], [180, 120]].map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="6" ry="4" fill="#ECCF98" />)}
      {[[230, 400], [390, 396], [300, 300], [470, 280], [150, 260], [500, 200], [360, 160], [240, 170]].map(([x, y]) => <Tuft key={x} x={x} y={y} />)}

      {/* a hill, rocks and bushes */}
      <g>
        <path d="M150 214 Q 176 140 236 132 Q 296 138 314 214 Z" fill="#6FB052" transform="translate(-6 6)" />
        <path d="M150 214 Q 176 140 236 132 Q 296 138 314 214 Z" fill="#8FCB6E" />
        <path d="M236 132 Q 296 138 314 214 H 262 Q 260 168 236 132 Z" fill="#7DBF5E" />
      </g>
      <Rock x={286} y={210} s={0.8} />
      <Rock x={132} y={300} />
      <Rock x={290} y={408} s={0.9} />
      <Bush x={450} y={398} />
      <Bush x={196} y={244} s={0.8} />
      <Palm x={130} y={226} s={0.8} cls="aa-sway2" />
      <Palm x={528} y={190} s={0.72} cls="aa-sway2" />

      {/* the route: walk to the big palm, then turn 40 degrees to the treasure */}
      <path d={`M${V.x} ${V.y} L${A.x - 20} ${A.y}`} stroke={INK} strokeWidth="5" strokeDasharray="12 10" strokeLinecap="round" />
      <path d={`M${V.x} ${V.y} L${f(B.x)} ${f(B.y)}`} stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" opacity="0.55" />
      <path className="aa-route" d={`M${V.x} ${V.y} L${f(B.x)} ${f(B.y)}`} stroke="#E8453C" strokeWidth="6" strokeDasharray="14 10" strokeLinecap="round" />
      <Palm x={A.x} y={A.y + 4} s={1.05} />

      {/* the start: a flag by the landing */}
      <g transform={`translate(${V.x} ${V.y})`}>
        <circle r="10" fill="#7CC46B" transform="translate(-3 4)" />
        <circle r="10" fill="#FFFFFF" />
        <circle r="4" fill={INK} />
        <rect x="-2" y="-52" width="5" height="46" fill={WOOD_SH} />
        <path className="aa-flag" d="M3 -52 L 32 -44 L 3 -35 Z" fill="#4AC1BD" />
      </g>

      {/* the angle, now meaning something */}
      <path d={arc(40)} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <AngleTag text="40°" color={INK} sh="#7CC46B" />

      {/* X marks the spot; the chest dug up beside it */}
      <g transform={`translate(${f(B.x)} ${f(B.y)})`}>
        <g className="aa-x">
          <path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke="#C7362E" strokeWidth="9" strokeLinecap="round" transform="translate(-3 4)" />
          <path d="M-14 -14 L14 14 M14 -14 L-14 14" stroke="#E8453C" strokeWidth="9" strokeLinecap="round" />
        </g>
        <g transform="translate(58 8)">
          <ellipse cx="-4" cy="10" rx="40" ry="9" fill="#D8B479" />
          {/* lid, thrown back */}
          <path d="M-28 -22 Q -28 -48 0 -48 Q 28 -48 28 -22 Z" fill="#8A5A35" transform="rotate(-16 -28 -22) translate(0 -2)" />
          <path d="M-28 -22 Q -28 -48 0 -48 Q 28 -48 28 -22" fill="none" stroke="#FFC93C" strokeWidth="4" transform="rotate(-16 -28 -22) translate(0 -2)" />
          <path d="M-26 -22 Q -12 -36 2 -30 Q 16 -38 26 -22 Z" fill="#FFD34E" />
          <rect x="-28" y="-22" width="56" height="34" fill={WOOD_SH} transform="translate(-5 6)" />
          <rect x="-28" y="-22" width="56" height="34" fill={WOOD} />
          <rect x="-28" y="-22" width="56" height="7" fill="#E2AE7B" />
          <rect x="-17" y="-22" width="6" height="34" fill="#FFC93C" /><rect x="11" y="-22" width="6" height="34" fill="#FFC93C" />
          <rect x="-6" y="-14" width="12" height="13" fill="#FFC93C" /><rect x="-2" y="-10" width="4" height="6" fill="#8A5A35" />
          <Coin x={36} y={10} r={9} sh="#D8B479" />
          <Coin x={-40} y={14} r={8} sh="#D8B479" />
          <Spark x={-14} y={-50} cls="s1" />
          <Spark x={16} y={-62} s={0.7} cls="s2" />
          <Spark x={34} y={-38} s={0.8} cls="s3" />
        </g>
      </g>

      {/* compass */}
      <g transform="translate(62 62)">
        <circle r="34" fill="#3F8FAA" transform="translate(-5 6)" />
        <circle r="34" fill="#FFFFFF" />
        <circle r="26" fill="#FFF8E6" />
        <g className="aa-needle">
          <path d="M0 -24 L7 0 L0 24 L-7 0 Z" fill={INK} />
          <path d="M0 -24 L7 0 L-7 0 Z" fill="#E8453C" />
        </g>
        <circle r="4" fill="#FFC93C" />
        <text y="-40" textAnchor="middle" fontSize="15" fontWeight="800" fill="#FFFFFF" style={FONT}>N</text>
      </g>

      {/* Ava rows in, thrilled */}
      <g transform="translate(76 424)">
        <path d="M-58 -6 H 58 Q 48 22 0 22 Q -48 22 -58 -6 Z" fill="#3F8FAA" transform="translate(-6 7)" />
        <Kid x={0} y={-26} s={0.56} sp="raccoon" mood="wow" className="aa-peek" />
        <path d="M-58 -6 H 58 Q 48 22 0 22 Q -48 22 -58 -6 Z" fill="#E8453C" />
        <rect x="-58" y="-6" width="116" height="7" fill="#FF7A6B" />
        <path d="M44 -2 L 74 -30" stroke={WOOD_SH} strokeWidth="5" strokeLinecap="round" />
      </g>
    </View>
  );
}

export function AngleSlider() {
  const [v, setV] = useState(55);
  return (
    <div className="as">
      <div className="as-pol">
        <div className="as-frame">
          <Treasure />
          <div className="as-left" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}><Plain /></div>
          <span className="as-handle" style={{ left: `${v}%` }} aria-hidden="true">
            <span className="as-knob"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-6 6 6 6" /><path d="M15 6l6 6-6 6" /></svg></span>
          </span>
          <input className="as-range" type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Slide between the plain angle and the treasure map" />
        </div>
      </div>
      <div className="as-caps">
        <span className={`as-cap${v > 50 ? " on" : ""}`}><i className="as-badge x" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" /></svg></i>Measure this angle.</span>
        <span className={`as-cap${v <= 50 ? " on" : ""}`}>Use angles to find the treasure.<i className="as-badge star" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#fff" /></svg></i></span>
      </div>
    </div>
  );
}
