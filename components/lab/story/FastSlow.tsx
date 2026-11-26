"use client";

import { memo, useEffect, useRef, useState, type ReactNode } from "react";
import { KindIcon } from "./KindIcons";

// "Fast or slow, everyone gets there." (owner, 2026-11-24): two endless runners, one per child. Each child keeps moving
// towards you on their own road, forever. The fast one: the bear drives the map's red car down a city street; crossings
// go by and each is a milestone covered. The slower one: Pip the squirrel (Make a Way's squirrel) hops along a country
// road at an easy pace; a story, then a game, then the check go by as signposts.
// Both riders face us, so the scenery streams away from them towards the horizon (owner, 2026-11-25). The car races
// (speed streaks, a focused bear); Pip hops at an easy pace, looking about while birds cross the sky. Each stop passed
// is a milestone covered, and a heads-up says which.
// The scenery is drawn once; every frame only moves things (transforms set directly, no React render), the way the
// app's own carousels do.

const HZ = 96; // the horizon, in the 600 x 340 scene
const ZMAX = 1.3; // things travel between the horizon (0) and past the bottom edge (1.3)
const RIDER_Z = 0.8; // where the rider is on the road
const yOf = (z: number) => HZ + (300 - HZ) * Math.pow(Math.max(0, z), 1.35);
const sOf = (z: number) => 0.16 + 0.84 * z;
const frac = (v: number) => v - Math.floor(v);
const fadeIn = (z: number) => Math.min(1, z / 0.08);

type World = "city" | "country";
type Thing = { id: string; layer: number; b: number; side: -1 | 1; kind: string; art: ReactNode };
type Stop = { b: number; kind: "check" | "story" | "game"; text: string };

// how wide the road (and, in the city, the pavement) is at a depth: from the drawn road's edges
const roadHalf = (w: World, z: number) => {
  const k = (yOf(z) - HZ) / (340 - HZ);
  return w === "city" ? 13 + 267 * k : 9 + 257 * k;
};
const paveHalf = (z: number) => 34 + 386 * ((yOf(z) - HZ) / (340 - HZ));

/** where a thing of `kind` stands at depth z on its side */
function placeOf(w: World, kind: string, side: number, z: number) {
  const s = sOf(z), r = roadHalf(w, z);
  let off = 0;
  if (w === "city") {
    if (kind === "building") off = paveHalf(z) - 2 * s;
    else if (kind === "lamp") off = r + 10 * s;
    else if (kind === "tree") off = r + (paveHalf(z) - r) * 0.5;
    else if (kind === "light") off = r + 22 * s;
  } else {
    if (kind === "post") off = r + 16 * s;
    else if (kind === "tree") off = r * 1.2 + 44 * s;
    else if (kind === "bush") off = r + 36 * s;
    else if (kind === "flower") off = r * 1.08 + 26 * s;
    else if (kind === "sign") off = r + 26 * s;
  }
  return { x: 300 + side * off, y: yOf(z), s };
}

// ---------- the drawings (each drawn at the origin, standing on it) ----------
const FACADES = [["#F6C7A8", "#E9A985"], ["#BFD8F2", "#9DBFE3"], ["#F9E3A1", "#EBCB76"], ["#CDE6C4", "#A9D29C"], ["#E8CDF3", "#CFAEE2"], ["#F4B9B2", "#E3968D"]];
const AWNING = ["#E8453C", "#4AC1BD", "#8B74D2", "#F2B21E", "#E0559A", "#3A9C98"];
const TALL = [150, 112, 196, 128, 172, 120, 160, 140];
function BuildingArt({ side, i }: { side: -1 | 1; i: number }) {
  const w = 108, h = TALL[(i + (side > 0 ? 3 : 0)) % TALL.length];
  const [fill, dark] = FACADES[(i * 2 + (side > 0 ? 1 : 0)) % FACADES.length];
  const aw = AWNING[(i + (side > 0 ? 2 : 0)) % AWNING.length];
  const rows = Math.max(1, Math.floor((h - 62) / 30));
  const roof = (i + (side > 0 ? 1 : 0)) % 3;
  return (
    <g transform={`translate(${side < 0 ? -w : 0} ${-h})`}>
      <path d={side < 0 ? `M${w} 0 L${w + 9} 6 L${w + 9} ${h} L${w} ${h} Z` : `M0 0 L-9 6 L-9 ${h} L0 ${h} Z`} fill={dark} />
      <rect width={w} height={h} fill={fill} />
      <rect x="-3" y="-6" width={w + 6} height="9" fill={dark} />
      {roof === 0 ? <g transform={`translate(${w * 0.68} -6)`}><rect x="-2" y="-14" width="3" height="14" fill="#6B7280" /><rect x="14" y="-14" width="3" height="14" fill="#6B7280" /><rect x="-4" y="-34" width="24" height="22" rx="3" fill="#A8B3C2" /><rect x="-4" y="-36" width="24" height="5" rx="2" fill="#8C98A9" /></g> : null}
      {roof === 1 ? <g transform={`translate(${w * 0.3} -6)`}><path d="M0 0 V-30 M-8 -22 H8 M-5 -14 H5" stroke="#6B7280" strokeWidth="2.4" strokeLinecap="round" /><circle cy="-31" r="2.6" fill="#E8453C" /></g> : null}
      {Array.from({ length: rows }, (_, r) => Array.from({ length: 3 }, (_, c) => {
        const lit = (r * 3 + c + i) % 5 === 0;
        return (
          <g key={`${r}-${c}`} transform={`translate(${13 + c * 30} ${16 + r * 30})`}>
            <rect width="22" height="20" fill="#FFFFFF" />
            <rect x="2.5" y="2.5" width="17" height="15" fill={lit ? "#FFE9A6" : "#DCEBFA"} />
            <path d="M11 2.5 V17.5" stroke="#FFFFFF" strokeWidth="1.6" />
            {(r + c + i) % 4 === 1 ? <path d="M2.5 2.5 H9 Q7 10 2.5 12 Z M19.5 2.5 H13 Q15 10 19.5 12 Z" fill={aw} opacity=".55" /> : null}
            <rect x="-1.5" y="19" width="25" height="3" fill={dark} />
          </g>
        );
      }))}
      <g transform={`translate(0 ${h - 40})`}>
        <rect x="6" y="12" width={w - 44} height="26" fill="#DCEBFA" stroke="#FFFFFF" strokeWidth="2.4" />
        <rect x={w - 32} y="10" width="22" height="30" fill="#7A5236" />
        <circle cx={w - 15} cy="26" r="1.6" fill="#F2C94C" />
        {Array.from({ length: 6 }, (_, k) => <path key={k} d={`M${2 + k * ((w - 4) / 6)} 0 h${(w - 4) / 6} v8 q${-(w - 4) / 12} 6 ${-(w - 4) / 6} 0 Z`} fill={k % 2 ? "#FFFFFF" : aw} />)}
      </g>
      <rect y={h - 2} width={w} height="2" fill="#000" opacity=".12" />
    </g>
  );
}
const LampArt = ({ side }: { side: number }) => (
  <g>
    <rect x="-2.5" y="-74" width="5" height="74" fill="#4B5563" /><rect x="-4" y="-6" width="8" height="6" fill="#374151" />
    <path d={`M0 -72 Q${-side * 14} -80 ${-side * 20} -72`} stroke="#4B5563" strokeWidth="4" fill="none" />
    <path d={`M${-side * 20 - 8} -70 h16 l-3 4 h-10 Z`} fill="#374151" /><ellipse cx={-side * 20} cy="-65" rx="5" ry="2.2" fill="#FFF3C4" />
  </g>
);
const StreetTreeArt = () => (
  <g>
    <ellipse cy="1" rx="13" ry="3.4" fill="#000" opacity=".12" />
    <rect x="-9" y="-9" width="18" height="10" rx="2" fill="#B9A58C" />
    <rect x="-2.2" y="-40" width="4.4" height="32" fill="#8A6A4A" />
    <circle cy="-50" r="17" fill="#6DB35A" /><circle cx="-9" cy="-42" r="11" fill="#5DA34B" /><circle cx="9" cy="-44" r="11" fill="#7CC268" /><circle cx="-4" cy="-56" r="6" fill="#8FD07B" />
  </g>
);
const LightArt = () => (
  <g>
    <rect x="-2.5" y="-82" width="5" height="82" fill="#3B4252" />
    <rect x="-11" y="-114" width="22" height="42" rx="5" fill="#2B303B" />
    <circle className="fs-red" cy="-102" r="6.5" />
    <circle className="fs-green" cy="-84" r="6.5" />
  </g>
);
const TreeArt = ({ kind }: { kind: "round" | "pine" }) => (
  <g>
    <ellipse cy="1" rx="24" ry="5" fill="#5E8C3A" opacity=".25" />
    {kind === "round" ? (
      <><rect x="-5" y="-32" width="10" height="33" fill="#8A6A4A" /><circle cy="-50" r="26" fill="#86C26A" /><circle cx="-13" cy="-40" r="16" fill="#74B15A" /><circle cx="12" cy="-44" r="15" fill="#97CF7B" /><circle cx="-6" cy="-62" r="9" fill="#A6D98A" /><circle cx="8" cy="-52" r="2.6" fill="#E8453C" /><circle cx="-10" cy="-46" r="2.6" fill="#E8453C" /></>
    ) : (
      <><rect x="-4" y="-16" width="8" height="17" fill="#7A5A3C" /><path d="M0 -78 L22 -30 H-22 Z" fill="#4E9A58" /><path d="M0 -62 L26 -14 H-26 Z" fill="#5BAA64" /><path d="M0 -78 L-22 -30 H-8 Z" fill="#3F8A4A" opacity=".6" /></>
    )}
  </g>
);
const BushArt = () => <g><circle cx="-8" cy="-6" r="9" fill="#7DBA5E" /><circle cx="6" cy="-7" r="10" fill="#8CC86B" /><circle cx="0" cy="-12" r="8" fill="#9AD27A" /></g>;
const FlowerArt = ({ k }: { k: number }) => {
  const cols = ["#FF7EB6", "#FFC93C", "#FFFFFF", "#A98BFF"];
  return <g>{[[-10, 0], [0, -4], [10, 1], [4, 4], [-5, 5]].map(([dx, dy], j) => <g key={j}><path d={`M${dx} ${dy} v-8`} stroke="#5E9E45" strokeWidth="1.4" /><circle cx={dx} cy={dy - 9} r="3.2" fill={cols[(j + k) % 4]} /><circle cx={dx} cy={dy - 9} r="1.2" fill="#F2B21E" /></g>)}</g>;
};
const PostArt = () => <rect x="-2.4" y="-20" width="4.8" height="20" fill="#A97E4A" />;
const SignArt = ({ kind }: { kind: Stop["kind"] }) => {
  const col = kind === "check" ? "#F2B21E" : kind === "story" ? "#8B74D2" : "#3A9C98";
  return (
    <g>
      <rect x="-2.5" y="-44" width="5" height="44" fill="#8A6A4A" />
      <circle cy="-50" r="13" fill="#FFFFFF" stroke={col} strokeWidth="4" />
      {kind === "check" ? <path d="M0 -58 l2.4 5 5.4 .6 -4 3.7 1.1 5.3 -4.9 -2.7 -4.9 2.7 1.1 -5.3 -4 -3.7 5.4 -.6 Z" fill={col} /> : kind === "story" ? <path d="M-7 -56 h6 q1 0 1 1 v10 h-7 Z M7 -56 h-6 q-1 0 -1 1 v10 h7 Z" fill={col} /> : <g fill={col}><rect x="-8" y="-54" width="16" height="9" rx="4.5" /><circle cx="-3.5" cy="-49.5" r="1.4" fill="#FFFFFF" /><circle cx="3.5" cy="-49.5" r="1.4" fill="#FFFFFF" /></g>}
    </g>
  );
};

// ---------- what streams past, per world ----------
const STOPS: Record<World, Stop[]> = {
  // the city stops are checks one after another, each a step further (owner, 2026-11-25: the cards show the sequence)
  city: [{ b: 0, kind: "check", text: "To 20: passed" }, { b: 1 / 4, kind: "check", text: "To 50: passed" }, { b: 2 / 4, kind: "check", text: "To 100: passed" }, { b: 3 / 4, kind: "check", text: "In tens: passed" }],
  country: [{ b: 0, kind: "story", text: "Back as a story" }, { b: 1 / 3, kind: "game", text: "And as a game" }, { b: 2 / 3, kind: "check", text: "Check passed" }],
};
const SPEED: Record<World, number> = { city: 0.15, country: 0.06 }; // cycles of the road per second
function thingsOf(w: World): Thing[] {
  const out: Thing[] = [];
  const add = (layer: number, n: number, kind: string, art: (k: number, side: -1 | 1) => ReactNode, shift = 0, sides: (-1 | 1)[] = [-1, 1]) => {
    for (const side of sides) for (let k = 0; k < n; k++) out.push({ id: `${kind}${side}${k}`, layer, b: frac(k / n + shift + (side > 0 ? 0.5 / n : 0)), side, kind, art: art(k, side) });
  };
  if (w === "city") {
    add(0, 8, "building", (k, side) => <BuildingArt side={side} i={k} />);
    add(1, 4, "tree", () => <StreetTreeArt />, 0.06);
    add(1, 6, "lamp", (_, side) => <LampArt side={side} />, 0.02);
    out.push({ id: "light", layer: 1, b: 0.012, side: 1, kind: "light", art: <LightArt /> });
  } else {
    add(0, 6, "flower", (k) => <FlowerArt k={k} />, 0.03);
    add(1, 5, "tree", (k, side) => <TreeArt kind={(k + (side > 0 ? 1 : 0)) % 2 ? "pine" : "round"} />, 0.08);
    add(1, 4, "bush", () => <BushArt />, 0.2);
    add(2, 14, "post", () => <PostArt />, 0, [-1, 1]);
    STOPS.country.forEach((s, i) => out.push({ id: `sign${i}`, layer: 2, b: frac(s.b + 0.012), side: 1, kind: "sign", art: <SignArt kind={s.kind} /> }));
  }
  return out;
}

// ---------- the still backgrounds ----------
const Cloud = ({ x, y, k, d }: { x: number; y: number; k: number; d: number }) => (
  <g className="fs-cloud" style={{ animationDelay: `${d}s` }}>
    <g transform={`translate(${x} ${y}) scale(${k})`}><ellipse cx="0" cy="2" rx="38" ry="10" fill="#FFFFFF" /><ellipse cx="-14" cy="-6" rx="17" ry="13" fill="#FFFFFF" /><ellipse cx="10" cy="-10" rx="20" ry="16" fill="#FFFFFF" /><ellipse cx="26" cy="-1" rx="12" ry="9" fill="#FFFFFF" /></g>
  </g>
);
const Birds = ({ y, d }: { y: number; d: number }) => (
  <g className="fs-birds" style={{ animationDelay: `${d}s` }}>
    {[[0, 0, 1], [18, -7, 0.8], [30, 4, 0.7]].map(([x, dy, k], i) => <path key={i} className="fs-bird" style={{ animationDelay: `${i * 0.13}s` }} d={`M${x - 6 * k} ${y + dy} q${3 * k} ${-4 * k} ${6 * k} 0 q${3 * k} ${-4 * k} ${6 * k} 0`} stroke="#4B5563" strokeWidth="1.6" fill="none" strokeLinecap="round" />)}
  </g>
);
const Banner = () => (
  <g transform="translate(300 16)"><rect x="-58" y="0" width="116" height="23" fill="#FFF186" /><rect x="-58" y="23" width="116" height="3" fill="#000" opacity=".08" /><text y="16.5" textAnchor="middle" fontSize="13" fontWeight="800" fill="#26232F" fontFamily="DM Sans, sans-serif">Counting in tens</text></g>
);
const CitySky = memo(function CitySky() {
  return (
    <svg className="fs-land" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="fsCitySky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#BFE1F8" /><stop offset="1" stopColor="#EAF6FD" /></linearGradient>
        <radialGradient id="fsCitySun"><stop offset="0" stopColor="#FFF4C2" /><stop offset=".55" stopColor="#FFE58A" stopOpacity=".55" /><stop offset="1" stopColor="#FFE58A" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="600" height="340" fill="url(#fsCitySky)" />
      <circle cx="470" cy="46" r="40" fill="url(#fsCitySun)" /><circle cx="470" cy="46" r="15" fill="#FFE27A" />
      <Cloud x={70} y={36} k={1} d={0} /><Cloud x={330} y={26} k={0.75} d={-9} /><Cloud x={560} y={52} k={1.1} d={-17} />
      <Birds y={58} d={0} />
      {[[118, 38, 26], [146, 26, 22], [170, 52, 18], [190, 30, 28], [220, 44, 20], [366, 36, 24], [392, 58, 18], [412, 28, 30], [444, 46, 22], [468, 30, 26]].map(([x, h, w], k) => (
        <g key={k}><rect x={x} y={HZ - h} width={w} height={h} fill="#C9D8E8" />{Array.from({ length: Math.floor(h / 9) }, (_, r) => <rect key={r} x={x + 4} y={HZ - h + 4 + r * 9} width={w - 8} height="2.4" fill="#E4EDF6" />)}</g>
      ))}
      <rect x="402" y={HZ - 74} width="3" height="18" fill="#A9BACD" />
      {[[140, 22, 30], [200, 18, 26], [236, 28, 22], [356, 24, 26], [384, 16, 30], [436, 22, 24]].map(([x, h, w], k) => <rect key={k} x={x} y={HZ - h} width={w} height={h} fill="#B3C6DA" />)}
      <path d={`M266 ${HZ} L334 ${HZ} L720 340 L-120 340 Z`} fill="#E3DED5" />
      <path d={`M283 ${HZ} L317 ${HZ} L594 340 L6 340 Z`} fill="#B7AFA3" />
      <path d={`M287 ${HZ} L313 ${HZ} L580 340 L20 340 Z`} fill="#6E7480" />
      <path d={`M290 ${HZ} L44 340 M310 ${HZ} L556 340`} stroke="#FFFFFF" strokeWidth="2" opacity=".75" />
    </svg>
  );
});
const CountrySky = memo(function CountrySky() {
  return (
    <svg className="fs-land" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="fsFarmSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFEFC9" /><stop offset="1" stopColor="#FDF7E6" /></linearGradient>
        <radialGradient id="fsFarmSun"><stop offset="0" stopColor="#FFF0B0" /><stop offset=".5" stopColor="#FFD86B" stopOpacity=".5" /><stop offset="1" stopColor="#FFD86B" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="600" height="340" fill="url(#fsFarmSky)" />
      <circle cx="110" cy="44" r="46" fill="url(#fsFarmSun)" />
      <g className="fs-rays">{Array.from({ length: 12 }, (_, k) => <path key={k} d="M110 18 V8" stroke="#FFD25A" strokeWidth="3" strokeLinecap="round" transform={`rotate(${k * 30} 110 44)`} />)}</g>
      <circle cx="110" cy="44" r="17" fill="#FFD25A" />
      <Cloud x={250} y={34} k={0.9} d={-4} /><Cloud x={470} y={24} k={1.1} d={-13} /><Cloud x={40} y={70} k={0.6} d={-20} />
      <Birds y={50} d={-6} />
      <Birds y={30} d={-14} />
      <Birds y={66} d={-3} />
      <path d={`M0 ${HZ - 2} C80 ${HZ - 40} 170 ${HZ - 30} 240 ${HZ - 18} C310 ${HZ - 6} 360 ${HZ - 44} 450 ${HZ - 40} C520 ${HZ - 36} 570 ${HZ - 20} 600 ${HZ - 24} V${HZ + 10} H0 Z`} fill="#CFE4AE" />
      <path d={`M0 ${HZ + 4} C60 ${HZ - 18} 150 ${HZ - 20} 220 ${HZ - 4} C300 ${HZ + 10} 380 ${HZ - 22} 470 ${HZ - 14} C540 ${HZ - 8} 580 ${HZ - 2} 600 ${HZ} V${HZ + 12} H0 Z`} fill="#BCDA96" />
      <g transform={`translate(176 ${HZ - 20}) scale(.55)`}>
        <rect x="-26" y="-30" width="52" height="34" fill="#D9534A" /><path d="M-32 -28 L0 -52 L32 -28 Z" fill="#9E3A33" /><rect x="-10" y="-14" width="20" height="18" fill="#FFF3E6" /><path d="M-10 -14 L10 4 M10 -14 L-10 4" stroke="#D9534A" strokeWidth="2.4" /><rect x="30" y="-40" width="14" height="44" rx="7" fill="#E9E1D3" /><path d="M30 -40 q7 -9 14 0" fill="#B9AE9B" />
      </g>
      <g transform={`translate(456 ${HZ - 26}) scale(.85)`}>
        <path d="M-7 0 L-4 -46 H4 L7 0 Z" fill="#F2EDE4" /><rect x="-3" y="-12" width="6" height="12" fill="#B99A78" />
        <g transform="translate(0 -46)"><g className="fs-mill">{[0, 90, 180, 270].map((a) => <path key={a} d="M0 0 L-3 -30 L3 -30 Z" fill="#FFFFFF" stroke="#C9BCA8" strokeWidth="1" transform={`rotate(${a})`} />)}<circle r="3" fill="#8A6A4A" /></g></g>
      </g>
      <rect y={HZ + 8} width="600" height={340 - HZ - 8} fill="#B4D88E" />
      <path d={`M0 ${HZ + 8} H600 V${HZ + 30} C420 ${HZ + 22} 180 ${HZ + 34} 0 ${HZ + 24} Z`} fill="#A8D083" />
      <path d={`M291 ${HZ + 4} L309 ${HZ + 4} L566 340 L34 340 Z`} fill="#D7B377" />
      <path d={`M294 ${HZ + 4} L306 ${HZ + 4} L546 340 L54 340 Z`} fill="#EBD3A0" />
    </svg>
  );
});

// ---------- the riders ----------
const BearCar = memo(function BearCar() {
  return (
    <svg className="fs-car" viewBox="0 0 160 124" aria-hidden="true">
      <ellipse cx="80" cy="118" rx="70" ry="7" fill="rgba(13, 13, 13, .22)" />
      <rect x="20" y="92" width="24" height="26" rx="6" fill="#2F343C" />
      <rect x="116" y="92" width="24" height="26" rx="6" fill="#2F343C" />
      <g className="fs-carbody">
        <path d="M38 62 L50 18 Q52 10 60 10 H100 Q108 10 110 18 L122 62 Z" fill="#E8453C" />
        <path d="M46 60 L56 22 Q57 18 61 18 H99 Q103 18 104 22 L114 60 Z" fill="#BFE8EC" />
        <g transform="translate(80 46)">
          <circle cx="-15" cy="-17" r="7" fill="#B07A4E" /><circle cx="15" cy="-17" r="7" fill="#B07A4E" />
          <circle cx="-15" cy="-17" r="3.4" fill="#8A5A36" /><circle cx="15" cy="-17" r="3.4" fill="#8A5A36" />
          <circle r="18" fill="#B07A4E" />
          <ellipse cy="6" rx="9.5" ry="7" fill="#E9CBA0" />
          {/* focused: eyes narrowed under brows drawn down, mouth set */}
          <ellipse cx="-6.5" cy="-3.6" rx="2.5" ry="1.7" fill="#1D2433" /><ellipse cx="6.5" cy="-3.6" rx="2.5" ry="1.7" fill="#1D2433" />
          <path d="M-11 -10 L-3 -7 M11 -10 L3 -7" stroke="#5A3E28" strokeWidth="2.6" strokeLinecap="round" />
          <ellipse cy="3" rx="3" ry="2.3" fill="#1D2433" />
          <path d="M-4 9.5 Q0 10.5 4 9.5" stroke="#5A3E28" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </g>
        <path d="M62 62 Q80 50 98 62" stroke="#3B4252" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="66" cy="58" r="4.6" fill="#B07A4E" /><circle cx="94" cy="58" r="4.6" fill="#B07A4E" />
        <path d="M58 24 L64 22 L56 52" stroke="#FFFFFF" strokeWidth="3" opacity=".55" fill="none" strokeLinecap="round" />
        <rect x="26" y="52" width="14" height="9" rx="3" fill="#B8322B" /><rect x="120" y="52" width="14" height="9" rx="3" fill="#B8322B" />
        <path d="M16 72 Q16 60 30 60 H130 Q144 60 144 72 V100 Q144 106 138 106 H22 Q16 106 16 100 Z" fill="#E8453C" />
        <path d="M24 66 H136" stroke="#F47E74" strokeWidth="3" strokeLinecap="round" />
        <circle cx="34" cy="80" r="9" fill="#FFF3C4" stroke="#B8322B" strokeWidth="2.5" />
        <circle cx="126" cy="80" r="9" fill="#FFF3C4" stroke="#B8322B" strokeWidth="2.5" />
        <rect x="56" y="74" width="48" height="14" rx="4" fill="#B8322B" />
        <path d="M62 78 H98 M62 84 H98" stroke="#8E2420" strokeWidth="2" />
        <rect x="12" y="94" width="136" height="10" rx="5" fill="#B8322B" />
        <rect x="66" y="92" width="28" height="12" rx="2" fill="#FFF186" stroke="#8E2420" strokeWidth="1.5" />
        <path d="M80 93.6 l1.5 3 3.3 .4 -2.4 2.3 .6 3.3 -3 -1.6 -3 1.6 .6 -3.3 -2.4 -2.3 3.3 -.4 Z" fill="#E0A92A" />
      </g>
    </svg>
  );
});

// ---------- one runner ----------
// the milestones each child covers on the way, one per stop they pass
const WHO: Record<World, string> = { city: "Sara", country: "Arjun" };
const MILES: Record<World, string[]> = {
  city: ["Counting to 20", "Counting to 50", "Counting to 100", "Counting in tens"],
  country: ["Counting on, as a story", "Counting on, as a game", "Counting on, check passed"],
};
const HOP = 680; // Pip's hop, ms: an easy pace

function Runner({ world, running, still }: { world: World; running: boolean; still: boolean }) {
  const things = useRef<Thing[]>(thingsOf(world));
  const els = useRef<Record<string, SVGGElement | null>>({});
  const layers = useRef<(SVGGElement | null)[]>([]);
  const road = useRef<SVGPathElement>(null);
  const marks = useRef<SVGPathElement>(null);
  const rails = useRef<(SVGPathElement | null)[]>([]);
  const chips = useRef<(HTMLSpanElement | null)[]>([]);
  const pip = useRef<HTMLSpanElement>(null);
  const pipShadow = useRef<HTMLSpanElement>(null);
  const [note, setNote] = useState(false);
  const [mile, setMile] = useState(0);
  const [happy, setHappy] = useState(false);
  const d = useRef(0.18); // how far along the road the world has come (in road cycles)
  const lastU = useRef<Record<string, number>>({});
  const noteT = useRef(0);

  // draw far things first: each layer ordered by where it starts, fixed at mount (after that the frame loop moves a thing
  // to the front of its layer when it comes round again, so React never has to reorder them)
  const [order] = useState(() => [0, 1, 2].map((L) => things.current.filter((t) => t.layer === L).sort((a, b) => frac(a.b + d.current) - frac(b.b + d.current))));

  useEffect(() => {
    const stops = STOPS[world];
    const riderU = RIDER_Z / ZMAX;
    const place = (dt: number, t: number) => {
      d.current -= SPEED[world] * dt; // the riders face us, so the road runs away under them, towards the horizon
      const D = d.current;
      // the roadside things
      for (const th of things.current) {
        const el = els.current[th.id];
        if (!el) continue;
        const u = frac(th.b + D);
        const prev = lastU.current[th.id];
        if (prev !== undefined && u > prev) el.parentNode?.appendChild(el); // came round again: back in at the front
        lastU.current[th.id] = u;
        const z = u * ZMAX;
        const p = placeOf(world, th.kind, th.side, z);
        el.setAttribute("transform", `translate(${p.x.toFixed(2)} ${p.y.toFixed(2)}) scale(${p.s.toFixed(4)})`);
        el.style.opacity = String(fadeIn(z));
        if (th.kind === "light") el.classList.add("go"); // the car races through on green
      }
      // the road: dashes (and the city's crossings, the country's pebbles)
      const dash: string[] = [];
      for (let k = 0; k < 10; k++) {
        const z0 = frac(k / 10 + D) * ZMAX, z1 = Math.min(ZMAX, z0 + 0.05);
        const y0 = yOf(z0), y1 = yOf(z1), w0 = 1 + 3 * z0, w1 = 1 + 3 * z1;
        dash.push(`M${300 - w0} ${y0} L${300 + w0} ${y0} L${300 + w1} ${y1} L${300 - w1} ${y1} Z`);
      }
      road.current?.setAttribute("d", dash.join(" "));
      const m: string[] = [];
      if (world === "city") {
        const cz = frac(D) * ZMAX;
        const half = roadHalf(world, cz) - 4 * sOf(cz), y = yOf(cz), h = 4 + 14 * cz;
        for (let k = 0; k < 8; k++) { const x0 = 300 - half + ((k + 0.2) / 8) * half * 2, w = ((half * 2) / 8) * 0.6; m.push(`M${x0} ${y - h} h${w} v${h} h${-w} Z`); }
      } else {
        [[0.1, -0.5], [0.24, 0.6], [0.38, -0.3], [0.52, 0.45], [0.66, -0.6], [0.8, 0.3], [0.92, -0.2]].forEach(([b, f]) => {
          const z = frac(b + D) * ZMAX, half = roadHalf(world, z) * 0.9, y = yOf(z), rx = 1 + 2.6 * z, ry = 0.6 + 1.4 * z;
          const x = 300 + f * half;
          m.push(`M${x - rx} ${y} a${rx} ${ry} 0 1 0 ${rx * 2} 0 a${rx} ${ry} 0 1 0 ${-rx * 2} 0 Z`);
        });
      }
      marks.current?.setAttribute("d", m.join(" "));
      // the country fences' rails, through the posts
      if (world === "country") {
        [-1, 1].forEach((side, si) => {
          const pts = things.current.filter((th) => th.kind === "post" && th.side === side).map((th) => frac(th.b + D) * ZMAX).sort((a, b) => a - b);
          [14, 6].forEach((hgt, hi) => {
            const dd = pts.map((z, k) => { const p = placeOf(world, "post", side, z); return `${k ? "L" : "M"}${p.x.toFixed(1)} ${(p.y - hgt * p.s).toFixed(1)}`; }).join(" ");
            rails.current[si * 2 + hi]?.setAttribute("d", dd);
          });
        });
      }
      // the stops' chips: grey until the rider is level with them, lit once passed; a heads-up for each milestone
      stops.forEach((s, i) => {
        const chip = chips.current[i];
        const u = frac(s.b + 0.012 + D);
        const z = u * ZMAX;
        const p = placeOf(world, world === "city" ? "light" : "sign", world === "city" ? -1 : 1, z);
        // kept inside the frame when close (the chip is about 120 wide at the front)
        const x = world === "city" ? Math.max(70, 300 - (roadHalf(world, z) + 30 * p.s)) : Math.min(526, p.x);
        const y = p.y - (world === "city" ? 10 : 70) * p.s;
        if (chip) {
          chip.style.left = `${(x / 600) * 100}%`;
          chip.style.top = `${(y / 340) * 100}%`;
          chip.style.setProperty("--k", String(Math.max(0.55, p.s)));
          chip.style.opacity = String(fadeIn(z) * (z > 1.18 ? Math.max(0, (ZMAX - z) / 0.12) : 1));
          const passed = u < riderU;
          if (chip.classList.contains("on") !== passed) chip.classList.toggle("on", passed);
        }
        const prev = lastU.current[`stop${i}`];
        // each stop the rider goes past is a milestone covered: the heads-up says which
        if (prev !== undefined && prev >= riderU && u < riderU) {
          setMile(i); // each stop is its own milestone, in order
          setNote(true);
          window.clearTimeout(noteT.current);
          noteT.current = window.setTimeout(() => setNote(false), 2800);
        }
        lastU.current[`stop${i}`] = u;
      });
      // Pip's hop: up and forward together, a stretch in the air, a soft squash on landing
      if (world === "country" && pip.current) {
        const hu = (t % HOP) / HOP;
        const lift = Math.pow(Math.sin(Math.PI * hu), 0.85);
        const land = Math.exp(-Math.pow(hu / 0.1, 2)) + Math.exp(-Math.pow((1 - hu) / 0.1, 2));
        const sy = 1 + 0.07 * lift - 0.12 * land, sx = 1 / Math.sqrt(sy);
        // Pip takes it easy, looking about as it hops: a slow turn of the head one way, then the other
        const look = Math.sin(t / 1700) * Math.max(0, Math.abs(Math.sin(t / 3400)) - 0.25) * 1.3;
        pip.current.style.transform = `translate3d(${(look * 5).toFixed(2)}%, ${(-lift * 24).toFixed(2)}%, 0) rotate(${(look * 11).toFixed(2)}deg) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
        if (pipShadow.current) { pipShadow.current.style.transform = `scale(${(1 - lift * 0.35).toFixed(3)})`; pipShadow.current.style.opacity = String(1 - lift * 0.45); }
      }
    };
    place(0, 0);
    if (!running || still) return;
    let raf = 0, last = performance.now(), t = 0;
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt * 1000;
      place(dt, t);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [world, running, still]);

  // Pip smiles for a moment as each stop goes by
  useEffect(() => {
    if (world !== "country" || !running || still) return;
    const iv = window.setInterval(() => {
      const riderU = RIDER_Z / ZMAX;
      const near = STOPS.country.some((s) => { const u = frac(s.b + 0.012 + d.current); return u < riderU && u > riderU - 0.08; });
      setHappy(near);
    }, 200);
    return () => window.clearInterval(iv);
  }, [world, running, still]);

  const layerCount = world === "city" ? 2 : 3;
  return (
    <div className="fs-card lab-card">
      <span className={`fs-scene ${world}`}>
        {world === "city" ? <CitySky /> : <CountrySky />}
        <svg className="fs-land" viewBox="0 0 600 340" preserveAspectRatio="none" aria-hidden="true">
          <path ref={marks} fill={world === "city" ? "#FFFFFF" : "#C9A66A"} opacity={world === "city" ? 0.92 : 1} />
          <path ref={road} fill="#FFFFFF" />
          {Array.from({ length: layerCount }, (_, L) => (
            <g key={L} ref={(el) => { layers.current[L] = el; }}>
              {L === layerCount - 1 && world === "country" ? [0, 1, 2, 3].map((k) => <path key={`r${k}`} ref={(el) => { rails.current[k] = el; }} stroke="#C49A62" strokeWidth="1.8" fill="none" />) : null}
              {order[L].map((th) => <g key={th.id} ref={(el) => { els.current[th.id] = el; }}>{th.art}</g>)}
            </g>
          ))}
          <Banner />
        </svg>
        {STOPS[world].map((s, i) => (
          <span key={s.text} ref={(el) => { chips.current[i] = el; }} className={`fs-stop ${s.kind}`}>
            <span className="fs-chip">{s.kind === "check" ? <b>★</b> : <KindIcon kind={s.kind} size={18} />}{s.text}</span>
          </span>
        ))}
        <span className={`fs-rider ${world === "city" ? "car go" : "pip"}`} style={{ top: `${(yOf(RIDER_Z) / 340) * 100}%`, ["--k" as string]: sOf(RIDER_Z) }}>
          {world === "city" ? <BearCar /> : (
            <span className="fs-pip">
              <span className="fs-pip-body" ref={pip}><img src={happy ? "/lab/cast/pip-happy.svg" : "/lab/cast/pip.svg"} alt="" width={353} height={398} draggable={false} /></span>
              <span className="fs-pip-shadow" ref={pipShadow} />
            </span>
          )}
          {world === "city" ? <span className="fs-streaks" aria-hidden="true">{[0, 1, 2, 3, 4, 5, 6, 7].map((k) => <i key={k} style={{ ["--k" as string]: k }} />)}</span> : null}
        </span>
        <span className={`fs-note${note ? " on" : ""}`} role="status">
          <span className="fs-note-k"><b className="fs-note-tick" aria-hidden="true">✓</b>{WHO[world]} reached a milestone</span>
          <b className="fs-note-t">{MILES[world][mile]}</b>
          <span className="fs-note-steps" aria-label={`${mile + 1} of ${MILES[world].length}`}>{MILES[world].map((m, i) => <i key={m} className={i <= mile ? "on" : ""} />)}</span>
        </span>
      </span>
    </div>
  );
}

export function FastSlow() {
  const box = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); return; }
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="fs" ref={box} role="img" aria-label="Two endless roads. A bear drives a red car fast down a city street, racing past crossing after crossing, each a milestone covered. Pip the squirrel hops along a country road at an easy pace, looking about, past a story, a game and then a check, and keeps going.">
      <Runner world="city" running={seen} still={still} />
      <Runner world="country" running={seen} still={still} />
    </div>
  );
}
