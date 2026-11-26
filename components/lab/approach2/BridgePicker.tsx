"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PolaroidArc } from "../story/PolaroidArc";
import "./art.css";
import "./bridge-ticker.css";

/**
 * "Every child needs a different bridge" (owner's comment on the approach redesign, 2026-11-25): each child's world
 * is a little scene drawn like the concept games, and in every one the same addition happens: 3, and 2 more join,
 * make 5. Dinosaurs walk home to their nest, the cricket scoreboard goes from 3 runs to 5, an astronaut gathers
 * stars, a block tower grows, cupcakes arrive at a party table. The lines under it are the page's own.
 * `bg` is the still scenery; `three` pops in; `two` joins it (the page's .bp-two animation, or a world's own in
 * art.css under .bpw-*).
 */
const FONT = { fontFamily: "var(--font-lab-sans), 'DM Sans', Arial, sans-serif" };
const Shadow = ({ x, y, rx, ry = 4, o = 0.16 }: { x: number; y: number; rx: number; ry?: number; o?: number }) => <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#1D2B1A" opacity={o} />;

/* ---------- dinosaurs ---------- */
const Dino = ({ x, y, c, d, belly = "#FFF3C9", walk = false, s = 1 }: { x: number; y: number; c: string; d: string; belly?: string; walk?: boolean; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${-s} ${s})`}>
    <Shadow x={0} y={1} rx={28} ry={5} />
    <g className={walk ? "bpx-bob" : undefined}>
      {/* far legs */}
      <rect x="-12" y="-14" width="10" height="15" rx="4" fill={d} />
      <rect x="10" y="-14" width="10" height="15" rx="4" fill={d} />
      {/* tail and body */}
      <path d="M-12 -26 Q -34 -26 -46 -40 Q -40 -16 -14 -12 Z" fill={c} />
      <ellipse cx="0" cy="-22" rx="22" ry="15" fill={c} />
      <path d="M-20 -18 Q -4 -6 18 -16 Q 14 -8 0 -8 Q -14 -8 -20 -18 Z" fill={d} opacity="0.55" />
      <ellipse cx="4" cy="-16" rx="12" ry="7" fill={belly} />
      {/* back plates */}
      {[[-16, -33], [-6, -37], [5, -37]].map(([px, py], i) => <path key={i} d={`M${px - 5} ${py + 3} L${px} ${py - 6} L${px + 5} ${py + 3} Z`} fill={d} />)}
      {/* neck and head */}
      <path d="M8 -30 Q 12 -44 20 -50 L 30 -44 Q 22 -38 20 -26 Z" fill={c} />
      <ellipse cx="26" cy="-52" rx="13" ry="11" fill={c} />
      <ellipse cx="35" cy="-48" rx="9" ry="7" fill={c} />
      <path d="M30 -44 Q 36 -41 42 -45" fill="none" stroke="#26232F" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="40" cy="-51" r="1" fill="#26232F" opacity="0.6" />
      <circle cx="27" cy="-55" r="4.6" fill="#FFFFFF" />
      <circle cx="28.4" cy="-55" r="2.8" fill="#26232F" />
      <circle cx="29.4" cy="-56.2" r="1" fill="#FFFFFF" />
      <circle cx="30" cy="-46" r="2.6" fill="#FF8FB1" opacity="0.6" />
      {/* spots */}
      <circle cx="-10" cy="-26" r="3" fill={d} opacity="0.5" /><circle cx="-2" cy="-30" r="2" fill={d} opacity="0.5" /><circle cx="-16" cy="-20" r="2" fill={d} opacity="0.5" />
      <path d="M-8 -34 Q 2 -38 12 -32" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
      {/* near legs */}
      <rect x="-16" y="-12" width="11" height="13" rx="4" fill={c} />
      <rect x="6" y="-12" width="11" height="13" rx="4" fill={c} />
      <path d="M-16 0 h11 M6 0 h11" stroke={d} strokeWidth="2.4" strokeLinecap="round" />
    </g>
  </g>
);
const Fern = ({ x, y, s = 1, flip = false }: { x: number; y: number; s?: number; flip?: boolean }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
    {[[-40, "#3E9E4A"], [-12, "#4DB357"], [16, "#3E9E4A"], [42, "#5CC165"]].map(([r, col], i) => (
      <g key={i} transform={`rotate(${r})`}>
        <path d="M0 0 Q 4 -24 0 -46" fill="none" stroke={col as string} strokeWidth="3" strokeLinecap="round" />
        {[-10, -18, -26, -34, -41].map((t) => <g key={t}><ellipse cx="-6" cy={t} rx="6" ry="2.6" fill={col as string} transform={`rotate(-24 -6 ${t})`} /><ellipse cx="6" cy={t} rx="6" ry="2.6" fill={col as string} transform={`rotate(24 6 ${t})`} /></g>)}
      </g>
    ))}
  </g>
);
const Egg = ({ x, y, r = 0 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <path d="M-9 0 Q -10 -14 0 -16 Q 10 -14 9 0 Z" fill="#FFF8E8" />
    <path d="M-9 0 L -9 -6 L -5 -2 L -1 -8 L 3 -3 L 7 -9 L 9 -5 L 9 0 Z" fill="#F2E3BF" />
    <circle cx="-3" cy="-4" r="1.6" fill="#9ED39A" />
  </g>
);
const dinoBg = (
  <>
    <rect width="480" height="260" fill="#CFEFF4" />
    <circle cx="300" cy="44" r="22" fill="#FFF4C9" /><circle cx="300" cy="44" r="32" fill="#FFF4C9" opacity="0.4" />
    {/* volcano with smoke */}
    <path d="M10 160 L 78 64 Q 92 56 106 64 L 178 160 Z" fill="#8C7A9E" />
    <path d="M92 60 L 106 64 L 178 160 H 120 Z" fill="#76668A" />
    <path d="M78 64 Q 92 56 106 64 L 100 80 Q 94 72 88 84 Q 84 74 80 78 Z" fill="#FF8A3D" />
    <g className="bpx-smoke"><circle cx="92" cy="44" r="11" fill="#FFFFFF" opacity="0.8" /><circle cx="104" cy="32" r="9" fill="#FFFFFF" opacity="0.7" /><circle cx="96" cy="18" r="7" fill="#FFFFFF" opacity="0.55" /></g>
    {/* far hills and trees */}
    <path d="M0 150 Q 70 118 150 138 Q 240 110 330 134 Q 410 112 480 132 V 190 H 0 Z" fill="#9ED78E" />
    <path d="M200 132 Q 206 98 212 132 Z M380 128 Q 388 88 396 128 Z M430 128 Q 436 104 442 128 Z" fill="#5FAE5A" />
    <path d="M206 132 V 140 M388 128 V 138 M436 128 V 136" stroke="#7A5A3A" strokeWidth="2.4" />
    <rect y="172" width="480" height="88" fill="#B8DE6F" />
    <path d="M0 172 Q 120 160 240 170 Q 360 180 480 166 V 182 H 0 Z" fill="#A6D25E" />
    <path d="M150 260 Q 200 212 300 196 Q 380 186 480 190 V 216 Q 380 214 320 222 Q 240 236 210 260 Z" fill="#E7CC8E" />
    <path d="M220 252 Q 260 222 320 212" fill="none" stroke="#F3DEAE" strokeWidth="3" strokeLinecap="round" />
    {[[46, 236], [440, 246], [120, 248], [360, 250]].map(([x, y], i) => <path key={i} d={`M${x} ${y} l -4 -8 M${x} ${y} l 0 -10 M${x} ${y} l 4 -8`} stroke="#7FB648" strokeWidth="2" strokeLinecap="round" />)}
    {/* the nest */}
    <Shadow x={62} y={222} rx={56} ry={8} o={0.2} />
    <path d="M10 206 Q 12 230 62 230 Q 112 230 114 206 Z" fill="#9C6A3A" />
    <path d="M14 208 Q 40 216 62 214 Q 90 216 110 208" fill="none" stroke="#C48E57" strokeWidth="3" strokeLinecap="round" />
    <path d="M18 218 Q 50 226 104 216 M24 224 Q 62 230 96 222" fill="none" stroke="#7A4E26" strokeWidth="2" strokeLinecap="round" />
    <Egg x={44} y={208} r={-14} /><Egg x={66} y={207} r={6} /><Egg x={86} y={209} r={18} />
    <ellipse cx="62" cy="206" rx="52" ry="7" fill="#B67E47" />
    <path d="M12 206 Q 62 196 112 206" fill="none" stroke="#7A4E26" strokeWidth="2" />
    <Fern x={4} y={262} s={1.1} />
    <Fern x={472} y={262} s={0.9} flip />
  </>
);

/* ---------- cricket ---------- */
const Ball = ({ x, y, r = 9 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r={r} fill="#D63A32" />
    <path d={`M${-r * 0.35} ${-r * 0.93} Q ${r * 0.2} 0 ${-r * 0.35} ${r * 0.93}`} fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeDasharray="2 1.6" />
    <circle cx={-r * 0.35} cy={-r * 0.4} r={r * 0.25} fill="#FFFFFF" opacity="0.45" />
  </g>
);
const Stumps = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <Shadow x={2} y={1} rx={12} ry={2.5} />
    {[-6, 0, 6].map((sx) => <rect key={sx} x={sx - 1.6} y="-34" width="3.2" height="34" rx="1.4" fill="#F4E2B8" stroke="#C9A66B" strokeWidth="0.8" />)}
    <path d="M-7 -35 h6 M1 -35 h6" stroke="#C9A66B" strokeWidth="2.4" strokeLinecap="round" />
  </g>
);
const Crowd = () => {
  const cols = ["#FF7EB6", "#FDBE35", "#4AC1BD", "#A98BFF", "#FFFFFF", "#E8453C", "#7ED957"];
  const out: ReactNode[] = [];
  for (let r = 0; r < 3; r++) for (let i = 0; i < 34; i++) {
    const x = 6 + i * 14 + (r % 2) * 7, y = 50 + r * 13;
    out.push(<g key={`${r}-${i}`}><circle cx={x} cy={y} r="4.6" fill={cols[(i * 3 + r * 5) % cols.length]} /><circle cx={x} cy={y - 6} r="3.2" fill={["#F1C9A0", "#C68B5E", "#8D5A3B"][(i + r) % 3]} /></g>);
  }
  return <g>{out}</g>;
};
const cricketBg = (
  <>
    <rect width="480" height="260" fill="#BEE8F7" />
    <path d="M300 26 q 10 -12 24 -4 q 14 -8 22 4 q 12 2 6 10 h -54 q -8 -6 2 -10 Z" fill="#FFFFFF" opacity="0.9" />
    {/* the stand */}
    <rect y="36" width="480" height="52" fill="#6F7FA6" />
    {[40, 53, 66].map((y) => <rect key={y} y={y + 6} width="480" height="3" fill="#5A6A90" />)}
    <Crowd />
    <path d="M0 34 H 480 V 40 H 0 Z" fill="#4E5C82" />
    {/* boundary boards */}
    <rect y="86" width="480" height="14" fill="#FFFFFF" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={i * 60 + 4} y="88" width="52" height="10" fill={["#4AC1BD", "#FDBE35", "#FF7EB6", "#A98BFF"][i % 4]} />)}
    {/* the field */}
    <rect y="100" width="480" height="160" fill="#6CC24A" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${i * 80 - 40} 100 h 40 l -30 160 h -40 Z`} fill="#7DCE58" />)}
    <path d="M-10 118 Q 240 96 490 118" fill="none" stroke="#FFFFFF" strokeWidth="2.4" opacity="0.85" />
    {/* the pitch */}
    <path d="M206 112 H 274 L 318 258 H 162 Z" fill="#E5CD94" />
    <path d="M206 112 H 274 L 278 124 H 202 Z" fill="#D9BE80" />
    <path d="M196 132 H 284 M168 236 H 312" stroke="#FFFFFF" strokeWidth="2.4" />
    <path d="M214 140 L 206 236 M266 140 L 274 236" stroke="#D2B677" strokeWidth="1.4" opacity="0.8" />
    <Stumps x={240} y={130} s={0.65} />
    <Stumps x={240} y={238} />
    {/* the scoreboard */}
    <g>
      <rect x="18" y="16" width="146" height="116" rx="6" fill="#26232F" opacity="0.25" transform="translate(5 5)" />
      <rect x="40" y="120" width="8" height="40" fill="#4E5C82" /><rect x="134" y="120" width="8" height="40" fill="#4E5C82" />
      <rect x="18" y="16" width="146" height="116" rx="6" fill="#1F5A45" stroke="#163F31" strokeWidth="4" />
      <rect x="26" y="24" width="130" height="18" rx="3" fill="#163F31" />
      <text x="91" y="38" textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFF186" letterSpacing="2" style={FONT}>RUNS</text>
      <rect x="62" y="48" width="58" height="50" rx="4" fill="#0F2C22" />
      {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={39 + i * 26} cy="114" r="10" fill="#163F31" />)}
    </g>
  </>
);
const Batter = () => (
  <g transform="translate(360 212)">
    <Shadow x={0} y={2} rx={26} ry={5} />
    {/* legs with pads */}
    <rect x="-13" y="-34" width="11" height="34" rx="4" fill="#FFFFFF" stroke="#D9D9D9" strokeWidth="1.2" />
    <rect x="3" y="-34" width="11" height="34" rx="4" fill="#FFFFFF" stroke="#D9D9D9" strokeWidth="1.2" />
    {[-26, -18, -10].map((y) => <path key={y} d={`M-11 ${y} h7 M5 ${y} h7`} stroke="#D9D9D9" strokeWidth="1.2" />)}
    <path d="M-15 0 h14 M2 0 h14" stroke="#26232F" strokeWidth="4" strokeLinecap="round" />
    {/* body */}
    <path d="M-16 -34 Q -18 -66 0 -68 Q 18 -66 16 -34 Z" fill="#2C66C8" />
    <path d="M-4 -66 L 0 -56 L 4 -66" fill="none" stroke="#FFFFFF" strokeWidth="2" />
    <text x="0" y="-42" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FDBE35" style={FONT}>7</text>
    {/* head and helmet */}
    <circle cx="0" cy="-80" r="13" fill="#C68B5E" />
    <circle cx="-4" cy="-80" r="1.8" fill="#26232F" /><circle cx="5" cy="-80" r="1.8" fill="#26232F" />
    <path d="M-3 -74 Q 1 -71 5 -74" fill="none" stroke="#26232F" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M-15 -82 Q -15 -98 0 -98 Q 15 -98 16 -84 L 20 -82 H -15 Z" fill="#1E3F8A" />
    <path d="M-8 -94 Q 0 -97 8 -94" fill="none" stroke="#4F7BD8" strokeWidth="2" strokeLinecap="round" />
    <path d="M-12 -74 Q 1 -66 14 -74" fill="none" stroke="#9EA6B5" strokeWidth="1.6" />
    {/* the bat, swinging */}
    <g className="bpx-swing">
      <circle cx="-10" cy="-50" r="5" fill="#FFFFFF" stroke="#D9D9D9" />
      <rect x="-13" y="-56" width="6" height="16" rx="2" fill="#26232F" transform="rotate(-40 -10 -50)" />
      <path d="M-10 -50 L -46 -86 L -38 -94 L -6 -58 Z" fill="#E3B877" transform="translate(0 0)" />
      <path d="M-46 -86 L -38 -94 L -36 -92 L -44 -84 Z" fill="#C99A55" />
    </g>
  </g>
);

/* ---------- space ---------- */
const Star = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r="20" fill="#FFE27A" opacity="0.12" className="bpx-glow" />
    <path d="M0 -17 L5 -6 17 -5.4 8 2.6 11 15 0 8.4 -11 15 -8 2.6 -17 -5.4 -5 -6 Z" fill="#FDBE35" stroke="#E8A21C" strokeWidth="2" strokeLinejoin="round" />
    <path d="M0 -11 L3 -4 -4 -2 Z" fill="#FFF3B0" />
    <circle cx="-3.4" cy="2" r="1.4" fill="#7A4E10" /><circle cx="3.4" cy="2" r="1.4" fill="#7A4E10" />
    <path d="M-2 5 Q 0 6.6 2 5" fill="none" stroke="#7A4E10" strokeWidth="1.1" strokeLinecap="round" />
  </g>
);
const spaceBg = (
  <>
    <rect width="480" height="260" fill="#1B2148" />
    <defs><radialGradient id="bpx-neb"><stop offset="0" stopColor="#6A4FC8" stopOpacity="0.55" /><stop offset="1" stopColor="#6A4FC8" stopOpacity="0" /></radialGradient><radialGradient id="bpx-neb2"><stop offset="0" stopColor="#3D7AD0" stopOpacity="0.45" /><stop offset="1" stopColor="#3D7AD0" stopOpacity="0" /></radialGradient></defs>
    <circle cx="320" cy="90" r="140" fill="url(#bpx-neb)" />
    <circle cx="120" cy="50" r="110" fill="url(#bpx-neb2)" />
    {[[30, 30, 1.6], [200, 20, 1.2], [260, 60, 1.8], [350, 120, 1.3], [440, 90, 1.5], [180, 100, 1], [20, 140, 1.4], [400, 16, 1.2], [320, 20, 1], [110, 120, 1.2], [470, 150, 1.4], [230, 140, 1]].map(([x, y, r], i) => <circle key={i} className={i % 3 === 0 ? "bpx-tw" : undefined} style={{ animationDelay: `${(i % 4) * 0.5}s` }} cx={x} cy={y} r={r} fill="#FFFFFF" />)}
    {/* ringed planet */}
    <g transform="translate(212 56)">
      <ellipse rx="56" ry="13" fill="none" stroke="#F7C7E0" strokeWidth="5" transform="rotate(-14)" opacity="0.9" />
      <circle r="32" fill="#FF9F6B" />
      <path d="M-30 -10 Q 0 -4 31 -12 L 32 -4 Q 0 4 -32 -2 Z" fill="#F07F4C" />
      <path d="M-28 12 Q 0 18 29 10 L 26 18 Q 0 24 -24 18 Z" fill="#F07F4C" />
      <path d="M-14 26 A 32 32 0 0 0 30 10 A 34 34 0 0 1 -14 26 Z" fill="#D9663A" opacity="0.6" />
      <circle cx="-12" cy="-16" r="6" fill="#FFC9A3" opacity="0.7" />
      <path d="M-50 22 Q 0 4 52 -16" fill="none" stroke="#F7C7E0" strokeWidth="5" strokeLinecap="round" />
    </g>
    <circle cx="62" cy="40" r="12" fill="#C9C3E6" /><circle cx="58" cy="37" r="3" fill="#A79FD0" /><circle cx="66" cy="45" r="2" fill="#A79FD0" />
    <path className="bpx-shoot" d="M330 50 l 40 -14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    {/* moon ground */}
    <path d="M0 196 Q 120 176 240 190 Q 360 204 480 184 V 260 H 0 Z" fill="#B9B2DE" />
    <path d="M0 196 Q 120 176 240 190 Q 360 204 480 184 V 194 Q 360 214 240 200 Q 120 186 0 206 Z" fill="#D3CDF0" />
    {[[60, 230, 22], [200, 240, 14], [300, 222, 10], [420, 236, 18], [140, 214, 8]].map(([x, y, r], i) => <g key={i}><ellipse cx={x} cy={y} rx={r} ry={r * 0.36} fill="#958CC6" /><ellipse cx={x} cy={y + r * 0.08} rx={r * 0.8} ry={r * 0.26} fill="#A79FD0" /></g>)}
    {/* the rocket */}
    <g transform="translate(446 206)">
      <Shadow x={0} y={2} rx={26} ry={4} o={0.3} />
      <path d="M-14 -20 L -26 2 L -12 -4 Z M14 -20 L 26 2 L 12 -4 Z" fill="#E8453C" />
      <path d="M-14 -4 Q -18 -60 0 -84 Q 18 -60 14 -4 Z" fill="#F3F1FA" />
      <path d="M0 -84 Q 18 -60 14 -4 H 4 Q 8 -56 0 -84 Z" fill="#D6D2E8" />
      <path d="M-9 -70 Q 0 -86 9 -70 Z" fill="#E8453C" />
      <circle cy="-46" r="8" fill="#4AC1BD" stroke="#8E89AE" strokeWidth="3" />
      <circle cx="-2.6" cy="-48.6" r="2.4" fill="#FFFFFF" opacity="0.8" />
      <path d="M-4 -4 L 0 4 L 4 -4 Z" fill="#8E89AE" />
    </g>
  </>
);
const Astronaut = () => (
  <g transform="translate(96 214)">
    <Shadow x={0} y={2} rx={30} ry={5} o={0.3} />
    <rect x="-28" y="-62" width="18" height="38" rx="5" fill="#C9C3E6" />
    <rect x="-16" y="-22" width="13" height="22" rx="4" fill="#F3F1FA" /><rect x="3" y="-22" width="13" height="22" rx="4" fill="#F3F1FA" />
    <path d="M-17 0 h15 M2 0 h15" stroke="#8E89AE" strokeWidth="4" strokeLinecap="round" />
    <path d="M-20 -20 Q -22 -64 0 -66 Q 22 -64 20 -20 Z" fill="#F3F1FA" />
    <path d="M6 -64 Q 22 -60 20 -20 H 10 Q 14 -50 6 -64 Z" fill="#DAD6EC" />
    <rect x="-10" y="-50" width="20" height="14" rx="3" fill="#7F86B8" />
    <circle cx="-4" cy="-43" r="2.4" fill="#E8453C" /><circle cx="3" cy="-43" r="2.4" fill="#4AC1BD" />
    <path d="M-20 -22 H 20" stroke="#FDBE35" strokeWidth="3" />
    {/* arm raised, reaching for the stars */}
    <path d="M14 -58 Q 34 -66 40 -88" fill="none" stroke="#F3F1FA" strokeWidth="11" strokeLinecap="round" />
    <circle cx="41" cy="-92" r="7" fill="#FDBE35" />
    <path d="M-16 -56 Q -30 -42 -24 -30" fill="none" stroke="#F3F1FA" strokeWidth="11" strokeLinecap="round" />
    {/* helmet with a friend inside */}
    <circle cx="0" cy="-86" r="27" fill="#F3F1FA" />
    <circle cx="0" cy="-86" r="21" fill="#2B4A8A" />
    <image href="/lab/cast/roster/penguinHappy.svg" x="-19" y="-105" width="38" height="40" />
    <path d="M-14 -98 A 18 18 0 0 1 4 -104" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" opacity="0.7" />
    <circle cx="0" cy="-86" r="21" fill="none" stroke="#C9C3E6" strokeWidth="3" />
    <rect x="-3" y="-118" width="6" height="8" rx="2" fill="#C9C3E6" /><circle cx="0" cy="-120" r="3.4" fill="#E8453C" />
  </g>
);

/* ---------- blocks ---------- */
const BlockCube = ({ x, y, c, d, t, n }: { x: number; y: number; c: string; d: string; t: string; n: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M-22 -40 L -12 -48 H 32 L 22 -40 Z" fill={t} />
    <path d="M22 -40 L 32 -48 V -8 L 22 0 Z" fill={d} />
    <rect x="-22" y="-40" width="44" height="40" fill={c} />
    <rect x="-15" y="-33" width="30" height="26" rx="4" fill="#FFFFFF" opacity="0.92" />
    <text x="0" y="-12" textAnchor="middle" fontSize="22" fontWeight="800" fill={d} style={FONT}>{n}</text>
    <path d="M-22 -40 H 22" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.5" />
  </g>
);
const blocksBg = (
  <>
    <rect width="480" height="260" fill="#FFEFC7" />
    {Array.from({ length: 13 }, (_, i) => <rect key={i} x={i * 40} y="0" width="18" height="190" fill="#FFE5AE" />)}
    {/* window */}
    <g>
      <rect x="26" y="26" width="104" height="92" rx="4" fill="#FFFFFF" />
      <rect x="32" y="32" width="92" height="80" fill="#A8E0F2" />
      <circle cx="104" cy="50" r="11" fill="#FFE27A" />
      <path d="M40 92 q 8 -10 18 -4 q 8 -8 16 0 q 8 2 2 8 h -34 Z" fill="#FFFFFF" />
      <path d="M32 106 Q 70 88 124 102 V 112 H 32 Z" fill="#9ED78E" />
      <path d="M78 32 V 112 M32 72 H 124" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M18 20 Q 40 70 22 128 H 14 V 20 Z M138 20 Q 116 70 134 128 H 142 V 20 Z" fill="#FF7EB6" />
      <rect x="10" y="16" width="136" height="6" rx="3" fill="#B67E47" />
    </g>
    {/* shelf with toys */}
    <rect x="246" y="96" width="100" height="8" fill="#B67E47" /><rect x="246" y="104" width="100" height="4" fill="#8A5A2B" />
    <g transform="translate(262 96)"><rect x="-8" y="-22" width="16" height="22" rx="3" fill="#4AC1BD" /><circle cy="-28" r="8" fill="#4AC1BD" /><circle cx="-3" cy="-29" r="1.5" fill="#26232F" /><circle cx="3" cy="-29" r="1.5" fill="#26232F" /></g>
    <g transform="translate(296 96)"><path d="M-14 0 L 0 -26 L 14 0 Z" fill="#A98BFF" /><path d="M0 -26 L 14 0 H 4 Z" fill="#8B6FE0" /></g>
    <g transform="translate(328 96)"><circle cy="-12" r="12" fill="#FDBE35" /><path d="M-12 -12 H 12 M0 -24 V 0" stroke="#E8A21C" strokeWidth="2" /></g>
    {/* floor and rug */}
    <rect y="190" width="480" height="70" fill="#D9A469" />
    <rect y="190" width="480" height="6" fill="#B9834B" />
    {[226, 250].map((y) => <path key={y} d={`M0 ${y} H 480`} stroke="#C48E57" strokeWidth="2" />)}
    {[60, 180, 300, 420, 120, 240, 360].map((x, i) => <path key={i} d={`M${x} ${i < 4 ? 196 : 226} v ${i < 4 ? 30 : 24}`} stroke="#C48E57" strokeWidth="2" />)}
    <ellipse cx="200" cy="232" rx="118" ry="20" fill="#4AC1BD" />
    <ellipse cx="200" cy="232" rx="100" ry="15" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="8 6" opacity="0.8" />
    <ellipse cx="200" cy="232" rx="70" ry="9" fill="#7AD6D2" />
    {/* toy box with a friend peeking */}
    <image href="/lab/cast/roster/bunnyHappy.svg" x="355" y="66" width="62" height="95" />
    <g>
      <rect x="330" y="160" width="112" height="70" rx="4" fill="#E8453C" />
      <rect x="330" y="160" width="112" height="12" fill="#C9302A" />
      <rect x="326" y="154" width="120" height="10" rx="3" fill="#FF6B5E" />
      <circle cx="386" cy="198" r="14" fill="#FDBE35" /><path d="M379 198 l 5 5 9 -10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <Shadow x={386} y={232} rx={60} ry={4} />
    </g>
    {/* a ball and a toy car on the floor */}
    <g transform="translate(64 226)"><Shadow x={0} y={10} rx={14} ry={3} /><circle r="13" fill="#FFFFFF" /><path d="M-13 0 A 13 13 0 0 1 0 -13 V 13 A 13 13 0 0 1 -13 0 Z" fill="#FF7EB6" /><path d="M0 -13 A 13 13 0 0 1 13 0 H 0 Z" fill="#A98BFF" /><circle cx="-5" cy="-6" r="3" fill="#FFFFFF" opacity="0.6" /></g>
    <g transform="translate(300 244)"><Shadow x={0} y={4} rx={22} ry={3} /><path d="M-20 0 V -10 Q -18 -14 -10 -14 L -4 -22 H 10 L 16 -14 Q 20 -14 20 -8 V 0 Z" fill="#2C66C8" /><path d="M-2 -20 H 8 L 12 -14 H -6 Z" fill="#BFE6F5" /><circle cx="-10" cy="0" r="5" fill="#26232F" /><circle cx="10" cy="0" r="5" fill="#26232F" /><circle cx="-10" cy="0" r="2" fill="#B9BECB" /><circle cx="10" cy="0" r="2" fill="#B9BECB" /></g>
  </>
);

/* ---------- treats ---------- */
const Cupcake = ({ x, y, c, d, w = "#4AC1BD", wd = "#2E9E99" }: { x: number; y: number; c: string; d: string; w?: string; wd?: string }) => (
  <g transform={`translate(${x} ${y})`}>
    <Shadow x={0} y={1} rx={22} ry={4} o={0.18} />
    <path d="M-20 -28 L -15 0 H 15 L 20 -28 Z" fill={w} />
    {[-14, -7, 0, 7, 14].map((px) => <path key={px} d={`M${px} -28 L ${px * 0.78} 0`} stroke={wd} strokeWidth="2.6" />)}
    <path d="M-20 -28 H 20" stroke={wd} strokeWidth="2" />
    <ellipse cx="0" cy="-30" rx="23" ry="9" fill={c} />
    <ellipse cx="0" cy="-38" rx="18" ry="8" fill={c} />
    <ellipse cx="0" cy="-45" rx="12" ry="6.5" fill={c} />
    <path d="M-23 -30 Q 0 -20 23 -30 Q 22 -24 0 -22 Q -22 -24 -23 -30 Z" fill={d} />
    <path d="M-16 -40 Q -10 -45 -4 -46" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" />
    {[[-12, -32, 30, "#FDBE35"], [8, -34, -40, "#4AC1BD"], [-4, -40, 70, "#A98BFF"], [14, -28, 10, "#E8453C"], [4, -46, -20, "#7ED957"], [-16, -28, -60, "#FFFFFF"]].map(([sx, sy, r, col], i) => <rect key={i} x={(sx as number) - 2.4} y={(sy as number) - 0.9} width="4.8" height="1.8" rx="0.9" fill={col as string} transform={`rotate(${r} ${sx} ${sy})`} />)}
    <path d="M1 -56 Q 4 -64 9 -66" fill="none" stroke="#3E9E4A" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="0" cy="-54" r="5.4" fill="#D63A32" /><circle cx="-1.8" cy="-56" r="1.6" fill="#FFFFFF" opacity="0.7" />
  </g>
);
const Balloon = ({ x, y, c, d, k }: { x: number; y: number; c: string; d: string; k: number }) => (
  <g className="bpx-float" style={{ animationDelay: `${k * 0.6}s` }}>
    <path d={`M${x} ${y + 26} q -6 20 2 40 q 6 20 -2 46`} fill="none" stroke="#B9BECB" strokeWidth="1.2" />
    <ellipse cx={x} cy={y} rx="18" ry="22" fill={c} />
    <path d={`M${x + 6} ${y - 20} A 18 22 0 0 1 ${x + 8} ${y + 19} A 22 22 0 0 0 ${x + 6} ${y - 20} Z`} fill={d} />
    <path d={`M${x - 3} ${y + 21} l 3 6 3 -6 Z`} fill={d} />
    <ellipse cx={x - 7} cy={y - 8} rx="4" ry="7" fill="#FFFFFF" opacity="0.5" transform={`rotate(20 ${x - 7} ${y - 8})`} />
  </g>
);
const treatsBg = (
  <>
    <rect width="480" height="260" fill="#FFE6F0" />
    {Array.from({ length: 16 }, (_, i) => <rect key={i} x={i * 32} y="0" width="14" height="200" fill="#FFDCEA" />)}
    {/* bunting */}
    <path d="M-4 12 Q 160 52 340 14" fill="none" stroke="#B67E47" strokeWidth="1.6" />
    {Array.from({ length: 10 }, (_, i) => {
      const t = (i + 0.5) / 10, u = 1 - t, x = u * u * -4 + 2 * t * u * 160 + t * t * 340, y = u * u * 12 + 2 * t * u * 52 + t * t * 14;
      return <path key={i} d={`M${x - 11} ${y - 2} L ${x + 11} ${y - 2} L ${x} ${y + 20} Z`} fill={["#FF7EB6", "#FDBE35", "#4AC1BD", "#A98BFF", "#7ED957"][i % 5]} />;
    })}
    <Balloon x={44} y={70} c="#A98BFF" d="#8B6FE0" k={0} />
    <Balloon x={78} y={92} c="#FDBE35" d="#E8A21C" k={1} />
    <Balloon x={436} y={110} c="#4AC1BD" d="#2E9E99" k={2} />
    {/* the table */}
    <rect x="0" y="186" width="480" height="74" fill="#FFFFFF" />
    <path d={`M0 198 ${Array.from({ length: 16 }, (_, i) => `Q ${i * 30 + 15} 214 ${i * 30 + 30} 198`).join(" ")} V 186 H 0 Z`} fill="#FF9EC4" />
    <rect x="0" y="180" width="480" height="10" fill="#FFC1D9" />
    {Array.from({ length: 30 }, (_, i) => <circle key={i} cx={(i % 10) * 50 + (Math.floor(i / 10) % 2) * 25 + 12} cy={222 + Math.floor(i / 10) * 16} r="3.6" fill="#FFC1D9" />)}
    <rect x="0" y="256" width="480" height="4" fill="#F3D3E0" />
    {/* a gift at the end of the table */}
    <g transform="translate(446 184)">
      <Shadow x={0} y={0} rx={24} ry={3} />
      <rect x="-20" y="-34" width="40" height="34" fill="#4AC1BD" />
      <rect x="-23" y="-42" width="46" height="10" fill="#7AD6D2" />
      <rect x="-4" y="-42" width="8" height="42" fill="#FDBE35" />
      <path d="M0 -42 Q -16 -58 -14 -44 Z M0 -42 Q 16 -58 14 -44 Z" fill="#FDBE35" stroke="#E8A21C" strokeWidth="1.2" />
    </g>
  </>
);

type World = { tag: string; key: string; caption: string; bg: string; scene: ReactNode; three: ReactNode; two: ReactNode };
const WORLDS: World[] = [
  {
    tag: "Dinosaurs", key: "dino", caption: "Learns addition through dinosaurs and stories.", bg: "#CFEFF4", scene: dinoBg,
    three: <><Dino x={150} y={214} c="#7ED957" d="#4FAE3A" /><Dino x={214} y={208} c="#4AC1BD" d="#2E8E8A" s={0.94} /><Dino x={276} y={214} c="#FDBE35" d="#D99A12" /></>,
    two: <><Dino x={346} y={220} c="#FF7EB6" d="#D9558E" walk /><Dino x={414} y={216} c="#A98BFF" d="#7D5FD8" walk s={0.94} /></>,
  },
  {
    tag: "Cricket", key: "cricket", caption: "Learns the same addition through cricket scores.", bg: "#BEE8F7", scene: cricketBg,
    three: <><g className="bpx-from"><text x="91" y="88" textAnchor="middle" fontSize="40" fontWeight="800" fill="#FFF186" style={FONT}>3</text></g>{[0, 1, 2].map((i) => <Ball key={i} x={39 + i * 26} y={114} />)}<Batter /></>,
    two: <><g className="bpx-to"><text x="91" y="88" textAnchor="middle" fontSize="40" fontWeight="800" fill="#FFF186" style={FONT}>5</text></g><g className="bpx-pop p1"><Ball x={117} y={114} /></g><g className="bpx-pop p2"><Ball x={143} y={114} /></g><path className="bpx-arc" d="M322 130 Q 270 40 190 78" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeDasharray="6 6" strokeLinecap="round" /></>,
  },
  {
    tag: "Space", key: "space", caption: "Learns the same addition as an astronaut.", bg: "#1B2148", scene: spaceBg,
    three: <><Astronaut /><Star x={180} y={138} /><Star x={228} y={124} /><Star x={276} y={138} /></>,
    two: <><Star x={324} y={124} /><Star x={372} y={138} /></>,
  },
  {
    tag: "Blocks", key: "blocks", caption: "Learns the same addition using blocks.", bg: "#FFEFC7", scene: blocksBg,
    three: <><Shadow x={205} y={236} rx={40} ry={5} o={0.2} /><BlockCube x={200} y={236} n={1} c="#4AC1BD" d="#2E8E8A" t="#7AD6D2" /><BlockCube x={200} y={196} n={2} c="#FDBE35" d="#C98A0E" t="#FFD873" /><BlockCube x={200} y={156} n={3} c="#FF7EB6" d="#D9558E" t="#FFA9CF" /></>,
    two: <><BlockCube x={200} y={116} n={4} c="#A98BFF" d="#7D5FD8" t="#C6B3FF" /><BlockCube x={200} y={76} n={5} c="#7ED957" d="#4FAE3A" t="#A6E88A" /></>,
  },
  {
    tag: "Treats", key: "treats", caption: "Learns the same addition with treats.", bg: "#FFE6F0", scene: treatsBg,
    three: <><Cupcake x={120} y={190} c="#FFFFFF" d="#F0E6EE" /><Cupcake x={180} y={190} c="#FF9EC4" d="#E97BA8" w="#FDBE35" wd="#E39E14" /><Cupcake x={240} y={190} c="#8B5A3C" d="#6E4228" w="#A98BFF" wd="#8467E0" /></>,
    two: <><Cupcake x={320} y={190} c="#C6B3FF" d="#A891F0" w="#FF7EB6" wd="#E2588F" /><Cupcake x={380} y={190} c="#FFF186" d="#EAD85C" /></>,
  },
];

// "Every child needs a different bridge" as a ticker like One idea's (owner, 2026-11-25): the five worlds run past
// on the arc; the card passing the middle plays its little sum (the two join the three, then 3 + 2 = 5 shows); hovering
// a card holds the ticker and plays that one. The five, twice over, so the loop turns out of sight.
const SLOTS = WORLDS.length * 2;

function BridgeCard({ w, i, playing, onHover }: { w: World; i: number; playing: boolean; onHover: (i: number | null) => void }) {
  const dark = w.tag === "Space";
  return (
    <div className={`is-item bt-item${playing ? " playing" : ""}`} onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(null)}>
      <figure className="pol bt-card">
        <span className="pol-pic bt-pic" style={{ background: w.bg }}>
          <svg key={playing ? `p${w.key}` : w.key} className={`bpw-${w.key}${playing ? " bt-play" : " bt-still"}`} viewBox="0 0 480 260" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${w.tag}: three, and two more join them, make five`}>
            <g className="bpx-scene">{w.scene}</g>
            <g className="bp-three">{w.three}</g>
            <g className={`bp-two${w.tag === "Blocks" ? " down" : ""}`}>{w.two}</g>
          </svg>
          {playing ? <span className={`bp-sum${dark ? " dark" : ""}`}>3 + 2 = 5</span> : null}
        </span>
        <figcaption className="bt-cap"><b>{w.tag}</b><span>{w.caption}</span></figcaption>
      </figure>
    </div>
  );
}

export function BridgePicker() {
  const box = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [centre, setCentre] = useState(2);
  const [seen, setSeen] = useState(false);
  const rest = useRef(0);
  const onHover = (i: number | null) => {
    window.clearTimeout(rest.current);
    if (i === null) return setHover(null);
    rest.current = window.setTimeout(() => setHover(i), 220);
  };
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const playing = seen ? hover ?? centre : null;
  return (
    <div className="bt" ref={box}>
      <PolaroidArc
        className="is-arc bt-arc"
        label="The same addition, five children’s worlds"
        n={SLOTS}
        wrap
        drift={0.07}
        start={2}
        onCentre={setCentre}
        render={(i) => <BridgeCard w={WORLDS[i % WORLDS.length]} i={i} playing={playing === i} onHover={onHover} />}
      />
      <p className="bt-note"><span className="lab-note">Different bridge, same maths</span></p>
    </div>
  );
}
