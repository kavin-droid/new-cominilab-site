"use client";

import { useEffect, useRef, useState } from "react";
import "./art.css";

/**
 * "Keep the whole experience" (owner, 2026-11-26, round 9: "the main visuals alone on the paper", "papers lying on the
 * table" so we can show we cover the offline parts too, container 4:3).
 * One picture, drag across it. Both halves are the same wooden table seen from above with one sheet lying on it, in the
 * same place and at the same tilt, so the handle only swaps what is printed on the sheet and which things lie around it.
 * Left: the angles to measure (numbers, arcs, answer boxes) with a pencil, an eraser and a protractor.
 * Right: the treasure map grid (one hunt from Start past a palm and a skull rock to a chest on an X, an angle at every
 * turn, a ship at sea) with coloured pencils, a toy compass, a magnifying glass and coins. Phones get their own layout: a bigger sheet, four angles, props only at the corners.
 * Moving parts are aa-*.
 * Round 10 (owner): hard flat shadows (black at 12%, no blur), no gradients, the protractor lies on both halves in the
 * same place, every route on the map runs straight at a marked angle and ends right on its treasure inside the grid,
 * and the picture builds itself once when the section scrolls into view (table, sheet, printing, then the props).
 * Entrance parts are aa-k (paused until the root gets aa-go); the timeline is in seconds, set per element as a delay.
 */
const FONT = { fontFamily: "var(--font-lab-sans), 'DM Sans', Arial, sans-serif" } as const;
const DEG = Math.PI / 180;
const W = 800;
const H = 600;
const INK = "#2B2838";
const f = (n: number) => n.toFixed(1);
const at = (x: number, y: number, r: number, d: number) => ({ x: x + r * Math.cos(d * DEG), y: y - r * Math.sin(d * DEG) });

type Variant = "wide" | "narrow";
// the sheet: same size, place and tilt on both halves of a variant
const SHEET: Record<Variant, { w: number; h: number; rot: number }> = {
  wide: { w: 500, h: 380, rot: -2 },
  narrow: { w: 680, h: 500, rot: -1.5 },
};

// hard shadow offset (drawing units) per variant: the phone drawing is shown smaller, so its offset is bigger
const SH: Record<Variant, number> = { wide: 6, narrow: 10 };

function View({ v, children }: { v: Variant; children: React.ReactNode }) {
  return (
    <svg className={`aa-v-${v}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={FONT}>
      {children}
    </svg>
  );
}

/** an entrance-animated group: kind is one of fade, pop, drop, sheet; t is its start in seconds */
function K({ kind, t, children }: { kind: string; t: number; children: React.ReactNode }) {
  return <g className={`aa-k aa-${kind}`} style={{ animationDelay: `${t.toFixed(2)}s` }}>{children}</g>;
}

/**
 * a thing lying on the table: a hard shadow (the same shape, flat black at 12%, no blur) always falls down-right
 * whatever its turn; it drops onto the table at t
 */
function Lie({ v, t, x, y, rot = 0, children }: { v: Variant; t: number; x: number; y: number; rot?: number; children: React.ReactNode }) {
  const o = SH[v];
  const place = `translate(${x} ${y}) rotate(${rot})`;
  return (
    <K kind="drop" t={t}>
      <g className="aa-shd" transform={`translate(${o} ${o})`} opacity="0.12"><g transform={place}>{children}</g></g>
      <g transform={place}>{children}</g>
    </K>
  );
}

/* ---------- the table (identical on both halves) ---------- */

const PLANK = 150;
function Table() {
  const grain: React.ReactNode[] = [];
  for (let p = 0; p < 4; p++) {
    const y0 = p * PLANK;
    [28, 62, 98, 124].forEach((dy, i) => {
      const y = y0 + dy;
      const w = (p * 3 + i) % 2 ? 5 : -5;
      grain.push(<path key={`${p}-${i}`} d={`M0 ${y} Q150 ${y + w} 300 ${y} T600 ${y} T${W} ${y + w / 2}`} stroke="#C98D57" strokeWidth={i % 2 ? 1.6 : 2.4} fill="none" opacity="0.55" />);
    });
  }
  return (
    <K kind="fade" t={0}>
      <rect width={W} height={H} fill="#D9A46E" />
      <rect y={PLANK} width={W} height={PLANK} fill="#D49E68" />
      <rect y={PLANK * 3} width={W} height={PLANK} fill="#D49E68" />
      {grain}
      {/* knots */}
      <g fill="none" stroke="#BF8550" strokeWidth="2" opacity="0.7">
        <ellipse cx="236" cy="72" rx="16" ry="6" /><ellipse cx="236" cy="72" rx="7" ry="2.6" />
        <ellipse cx="612" cy="372" rx="18" ry="7" /><ellipse cx="612" cy="372" rx="8" ry="3" />
        <ellipse cx="96" cy="520" rx="14" ry="5" />
      </g>
      {/* the joins between the planks */}
      {[1, 2, 3].map((p) => (
        <g key={p}>
          <path d={`M0 ${p * PLANK} H${W}`} stroke="#B07443" strokeWidth="3" />
          <path d={`M0 ${p * PLANK + 2.5} H${W}`} stroke="#E4B07C" strokeWidth="1.2" />
        </g>
      ))}
    </K>
  );
}

/** the sheet of paper lying in the middle of the table */
function Sheet({ v, children }: { v: Variant; children: React.ReactNode }) {
  const s = SHEET[v];
  const place = `translate(${W / 2} ${H / 2}) rotate(${s.rot}) translate(${-s.w / 2} ${-s.h / 2})`;
  const o = SH[v] + 3;
  return (
    <K kind="sheet" t={0.2}>
      <g transform={`translate(${o} ${o})`}><rect transform={place} width={s.w} height={s.h} rx="2" fill="#0D0D0D" fillOpacity="0.12" /></g>
      <g transform={place}>
        <rect width={s.w} height={s.h} rx="2" fill="#FFFFFF" />
        {children}
      </g>
    </K>
  );
}

/* ---------- props ---------- */

/** a pencil lying along +x from 0 to len, 16 wide; eraser end only when `rubber` */
function Pencil({ len, body, tip = "#3B3646", rubber = false }: { len: number; body: string; tip?: string; rubber?: boolean }) {
  const back = rubber ? 32 : 0;
  return (
    <g>
      {rubber && (
        <>
          <rect x="0" y="-8" width="20" height="16" rx="3" fill="#F49AB0" />
          <rect x="18" y="-8.5" width="15" height="17" fill="#C9CCD6" />
          <path d="M22 -8.5 V8.5 M26 -8.5 V8.5 M30 -8.5 V8.5" stroke="#A9ADBA" strokeWidth="1.2" />
        </>
      )}
      <rect x={back} y="-8" width={len - back - 34} height="16" fill={body} />
      <rect x={back} y="-8" width={len - back - 34} height="5" fill="#FFFFFF" opacity="0.3" />
      <rect x={back} y="3" width={len - back - 34} height="5" fill="#000000" opacity="0.1" />
      <path d={`M${len - 34} -8 L${len} 0 L${len - 34} 8 Z`} fill="#F3D3A1" />
      <path d={`M${len - 12} -2.8 L${len} 0 L${len - 12} 2.8 Z`} fill={tip} />
    </g>
  );
}

/** a see-through protractor, flat edge on y=0, arc above */
function Protractor({ r }: { r: number }) {
  const ri = r * 0.45;
  const ticks: string[] = [];
  for (let d = 0; d <= 180; d += 10) {
    const long = d % 30 === 0;
    const a = at(0, 0, r - 2, d), b = at(0, 0, r - (long ? 16 : 10), d);
    ticks.push(`M${f(a.x)} ${f(a.y)}L${f(b.x)} ${f(b.y)}`);
  }
  return (
    <g>
      <path d={`M${-r} 6 V0 A${r} ${r} 0 0 1 ${r} 0 V6 Z M${-ri} 0 A${ri} ${ri} 0 0 1 ${ri} 0 Z`} fill="#6FD0CC" fillOpacity="0.55" fillRule="evenodd" stroke="#2E8E8A" strokeWidth="1.6" />
      <path d={ticks.join("")} stroke="#2E8E8A" strokeWidth="1.5" />
      <g textAnchor="middle" fontSize="9" fontWeight="800" fill="#1F6F6B">
        {[30, 90, 150].map((d) => { const p = at(0, 0, r - 26, d); return <text key={d} x={f(p.x)} y={f(p.y + 3)}>{d}</text>; })}
      </g>
      <circle r="2.6" fill="#2E8E8A" />
    </g>
  );
}

function Eraser() {
  return (
    <g>
      <rect x="-37" y="-17" width="74" height="34" rx="6" fill="#F49AB0" />
      <path d="M2 -17 H31 Q37 -17 37 -11 V11 Q37 17 31 17 H2 Z" fill="#6FA8E8" />
      <rect x="-37" y="-17" width="74" height="9" rx="5" fill="#FFFFFF" opacity="0.28" />
    </g>
  );
}

/** a toy compass with a brass rim */
function ToyCompass({ r }: { r: number }) {
  return (
    <g>
      <circle cy={-r - 6} r="8" fill="none" stroke="#C99A3A" strokeWidth="4" />
      <circle r={r} fill="#E0A92A" />
      <circle r={r - 6} fill="#FFF8E6" />
      <circle r={r - 6} fill="none" stroke="#F0DDB0" strokeWidth="2" />
      <g fontSize="10" fontWeight="800" fill={INK} textAnchor="middle">
        <text y={-r + 19}>N</text><text y={r - 11}>S</text><text x={-r + 15} y="3.5">W</text><text x={r - 15} y="3.5">E</text>
      </g>
      <g className="aa-needle">
        <path d={`M0 ${-r + 22} L5 0 L0 0 Z`} fill="#E8453C" /><path d={`M0 ${-r + 22} L-5 0 L0 0 Z`} fill="#C7362E" />
        <path d={`M0 ${r - 22} L5 0 L0 0 Z`} fill="#7C838C" /><path d={`M0 ${r - 22} L-5 0 L0 0 Z`} fill="#5D636B" />
      </g>
      <circle r="3" fill="#FFC93C" stroke="#C99A3A" strokeWidth="1" />
    </g>
  );
}

function Coin() {
  return (
    <g>
      <circle r="14" fill="#F2B632" />
      <circle r="10.5" fill="#FFC93C" />
      <circle r="6.5" fill="none" stroke="#E0A92A" strokeWidth="1.6" />
      <path d="M-7 -4 A8 8 0 0 1 -2 -8" stroke="#FFF1C2" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Gem() {
  return (
    <g>
      <path d="M-12 -4 L-6 -11 H6 L12 -4 L0 12 Z" fill="#5FC3E4" />
      <path d="M-12 -4 H12 M-6 -11 L-3 -4 L0 12 M6 -11 L3 -4" stroke="#3FA3C8" strokeWidth="1.2" fill="none" />
      <path d="M-6 -11 H6 L3 -4 H-3 Z" fill="#9FE0F2" />
    </g>
  );
}

/** a magnifying glass, lens at 0,0, handle along +x */
function Magnifier() {
  return (
    <g>
      <rect x="24" y="-7" width="62" height="14" rx="7" fill="#B5763F" />
      <rect x="24" y="-7" width="62" height="5" rx="2.5" fill="#FFFFFF" opacity="0.22" />
      <circle r="32" fill="#C99A3A" />
      <circle r="25" fill="#DDF2F8" />
      <path d="M-14 -11 A18 18 0 0 1 2 -19" stroke="#FFFFFF" strokeWidth="4.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ---------- left: the angles ---------- */

/** an arrow from p along direction d (degrees, y up) of length len, with a filled head; t: draws in from then */
function Arrow({ x, y, d, len, w = 1.8, head = 9, c = INK, t }: { x: number; y: number; d: number; len: number; w?: number; head?: number; c?: string; t?: number }) {
  const e = at(x, y, len, d);
  const b = at(x, y, len - head, d);
  const n = { x: Math.sin(d * DEG), y: Math.cos(d * DEG) };
  const hw = head * 0.45;
  const line = `M${f(x)} ${f(y)} L${f(b.x)} ${f(b.y)}`;
  const tip = <path d={`M${f(e.x)} ${f(e.y)} L${f(b.x + hw * n.x)} ${f(b.y + hw * n.y)} L${f(b.x - hw * n.x)} ${f(b.y - hw * n.y)} Z`} fill={c} stroke={c} strokeWidth="1" strokeLinejoin="round" />;
  if (t === undefined) return <><path d={line} stroke={c} strokeWidth={w} strokeLinecap="round" />{tip}</>;
  return (
    <>
      <path className="aa-k aa-draw" style={{ animationDelay: `${t.toFixed(2)}s` }} pathLength={1} d={line} stroke={c} strokeWidth={w} strokeLinecap="round" fill="none" />
      <K kind="pop" t={t + DRAW - 0.05}>{tip}</K>
    </>
  );
}
const DRAW = 0.4; // how long one line takes to draw in

// each angle sits in a 150x105 box: its corner, and its two arms as [direction in degrees, length]
type Ang = { v: [number, number]; a: [number, number]; b: [number, number] };
const ANGLES: Ang[] = [
  { v: [25, 92], a: [0, 118], b: [40, 112] },
  { v: [78, 92], a: [0, 68], b: [125, 88] },
  { v: [32, 94], a: [0, 112], b: [90, 86] },
  { v: [18, 52], a: [22, 122], b: [-28, 108] },
  { v: [128, 94], a: [180, 112], b: [100, 84] },
  { v: [75, 36], a: [-20, 78], b: [-160, 78] },
];
const PHONE_ANGLES = [0, 1, 2, 5];

/** the angle mark between two directions from a corner: a square for 90, else a filled arc; small = map size */
function Corner({ x, y, d1: a1, d2: a2, small = false }: { x: number; y: number; d1: number; d2: number; small?: boolean }) {
  let d1 = a1;
  let d2 = a2;
  let diff = (((d2 - d1) % 360) + 360) % 360;
  if (diff > 180) { [d1, d2] = [d2, d1]; diff = 360 - diff; }
  if (Math.abs(diff - 90) < 0.5) {
    const s = small ? 9 : 14;
    const p1 = at(x, y, s, d1), p2 = at(x, y, s, d2), p3 = { x: p1.x + p2.x - x, y: p1.y + p2.y - y };
    return <path d={`M${f(p1.x)} ${f(p1.y)} L${f(p3.x)} ${f(p3.y)} L${f(p2.x)} ${f(p2.y)}`} fill="#FFE9A8" stroke="#E25A4F" strokeWidth="2" />;
  }
  const r = small ? 22 : diff < 50 ? 26 : 18;
  const p1 = at(x, y, r, d1), p2 = at(x, y, r, d2);
  return (
    <>
      <path d={`M${f(x)} ${f(y)} L${f(p1.x)} ${f(p1.y)} A ${r} ${r} 0 0 0 ${f(p2.x)} ${f(p2.y)} Z`} fill="#FFE9A8" />
      <path d={`M${f(p1.x)} ${f(p1.y)} A ${r} ${r} 0 0 0 ${f(p2.x)} ${f(p2.y)}`} fill="none" stroke="#E25A4F" strokeWidth={small ? 2 : 2.2} strokeLinecap="round" />
    </>
  );
}

/** one question: number, angle, answer box. cw x ch is the cell, s scales the 150x105 angle box; t its start */
function Question({ g, n, x, y, cw, s, num, box, t }: { g: Ang; n: number; x: number; y: number; cw: number; s: number; num: number; box: [number, number]; t: number }) {
  const ax = (cw - 150 * s) / 2;
  const by = 10 + 112 * s;
  return (
    <g transform={`translate(${x} ${y})`}>
      <K kind="fade" t={t}><text x="2" y={num + 2} fontSize={num} fontWeight="800" fill="#2E6FC9">{n}.</text></K>
      <g transform={`translate(${f(ax)} 10) scale(${s})`}>
        <K kind="pop" t={t + 0.1 + DRAW}><Corner x={g.v[0]} y={g.v[1]} d1={g.a[0]} d2={g.b[0]} /></K>
        <Arrow x={g.v[0]} y={g.v[1]} d={g.a[0]} len={g.a[1]} w={2.4} head={10} t={t + 0.05} />
        <Arrow x={g.v[0]} y={g.v[1]} d={g.b[0]} len={g.b[1]} w={2.4} head={10} t={t + 0.15} />
        <K kind="pop" t={t}><circle cx={g.v[0]} cy={g.v[1]} r="3" fill={INK} /></K>
      </g>
      {/* the answer box */}
      <K kind="fade" t={t + 0.5}>
        <g transform={`translate(${(cw - box[0]) / 2} ${f(by)})`}>
          <rect width={box[0]} height={box[1]} rx={box[1] / 2} fill="#FFFFFF" stroke="#BDB9CC" strokeWidth="1.8" />
          <path d={`M${box[1] * 0.5} ${box[1] * 0.72} H${box[0] - box[1] * 0.9}`} stroke="#9E9AB0" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx={box[0] - box[1] * 0.5} cy={box[1] * 0.32} r={box[1] * 0.1} fill="none" stroke="#5D5970" strokeWidth="1.6" />
        </g>
      </K>
    </g>
  );
}

// props drop onto the table one after another from PROPS on (same timing on both halves)
const PROPS = 1.55;
const GAP = 0.11;
// the protractor lies in the same place on both halves, so it reads across the handle
const PROTRACTOR: Record<Variant, { x: number; y: number; rot: number; r: number }> = {
  wide: { x: 128, y: 300, rot: -82, r: 80 },
  narrow: { x: 128, y: 593, rot: 2, r: 62 },
};
function LyingProtractor({ v }: { v: Variant }) {
  const p = PROTRACTOR[v];
  return <Lie v={v} t={PROPS} x={p.x} y={p.y} rot={p.rot}><Protractor r={p.r} /></Lie>;
}

function Plain({ v }: { v: Variant }) {
  const wide = v === "wide";
  return (
    <View v={v}>
      <Table />
      {wide ? (
        <>
          <Sheet v={v}>
            {ANGLES.map((g, i) => (
              <Question key={i} g={g} n={i + 1} x={22 + (i % 3) * 152} y={24 + Math.floor(i / 3) * 172} cw={152} s={1} num={18} box={[96, 28]} t={0.72 + i * 0.12} />
            ))}
          </Sheet>
          <LyingProtractor v={v} />
          <Lie v={v} t={PROPS + GAP} x={683} y={112} rot={78}><Pencil len={214} body="#FFC93C" rubber /></Lie>
          <Lie v={v} t={PROPS + GAP * 2} x={714} y={452} rot={-18}><Eraser /></Lie>
        </>
      ) : (
        <>
          <Sheet v={v}>
            {PHONE_ANGLES.map((k, i) => (
              <Question key={k} g={ANGLES[k]} n={i + 1} x={30 + (i % 2) * 310} y={26 + Math.floor(i / 2) * 230} cw={310} s={1.5} num={30} box={[150, 42]} t={0.72 + i * 0.15} />
            ))}
          </Sheet>
          <LyingProtractor v={v} />
          <Lie v={v} t={PROPS + GAP} x={64} y={40} rot={-16}><Eraser /></Lie>
          <Lie v={v} t={PROPS + GAP * 2} x={520} y={566} rot={-10}><Pencil len={300} body="#FFC93C" rubber /></Lie>
        </>
      )}
    </View>
  );
}

/* ---------- right: the treasure map ---------- */

// the grid: 19 columns, 14 rows, 24 units a square, drawn in a 456x336 box
const SQ = 24;
const COLS = 19;
const ROWS = 14;
const gx = (c: number) => c * SQ;
const gy = (r: number) => (ROWS - r) * SQ;

// round 11 (owner: "there is no treasure inside the map to find"): one hunt. A Start ring, three straight legs that turn
// at a palm and a skull rock, and a chest on a big X at the end. Every turn (and the first leg against the grid line)
// carries its angle, so the picture reads "follow the angles, find the treasure". Points are grid crossings [col, row].
const HUNT: [number, number][] = [[2, 2], [7, 7], [10, 4], [14, 4]];
const dirOf = (a: [number, number], b: [number, number]) => Math.atan2(b[1] - a[1], b[0] - a[0]) / DEG;
const lenOf = (a: [number, number], b: [number, number]) => Math.hypot(b[0] - a[0], b[1] - a[1]) * SQ;
/** the smaller angle between two directions: its size and the direction halfway through it */
function spread(a1: number, a2: number) {
  let d1 = a1;
  let diff = (((a2 - a1) % 360) + 360) % 360;
  if (diff > 180) { d1 = a2; diff = 360 - diff; }
  return { diff, mid: d1 + diff / 2 };
}

/** the treasure chest, sitting on its base at 0,0: open, gold and a gem heaped up. It pops in as one piece. */
function MapChest({ t }: { t: number }) {
  return (
    <g>
      <K kind="pop" t={t}>
        {/* the lid tipped back */}
        <path d="M-30 -34 L-26 -62 H26 L30 -34 Z" fill="#8C5A2E" />
        <path d="M-26 -62 H26 L27.5 -55 H-27.5 Z" fill="#C98A4A" />
        {/* gold and a gem */}
        <path d="M-30 -34 Q-24 -48 -12 -43 Q-4 -54 6 -45 Q18 -52 30 -34 Z" fill="#FFC93C" />
        <circle cx="-14" cy="-40" r="5" fill="#F2B632" stroke="#E0A92A" strokeWidth="1.2" />
        <circle cx="13" cy="-41" r="5" fill="#F2B632" stroke="#E0A92A" strokeWidth="1.2" />
        <path d="M-5 -46 L-1 -51 H5 L9 -46 L2 -38 Z" fill="#5FC3E4" stroke="#3FA3C8" strokeWidth="1.2" strokeLinejoin="round" />
        {/* body */}
        <rect x="-30" y="-34" width="60" height="34" rx="3" fill="#B5763F" />
        <path d="M-30 -20 H30" stroke="#9C6232" strokeWidth="2" />
        <path d="M-30 -34 H30" stroke="#8C5A2E" strokeWidth="2" />
        <path d="M-19 -34 V0 M19 -34 V0" stroke="#E0A92A" strokeWidth="5" />
        <rect x="-6" y="-36" width="12" height="12" rx="2" fill="#FFC93C" stroke="#C99A3A" strokeWidth="1.4" />
      </K>
      {/* a little sparkle over the gold */}
      {([[-34, -58, 1, ""], [36, -64, 0.8, " s2"], [2, -76, 0.9, " s3"]] as [number, number, number, string][]).map(([x, y, s, c]) => (
        <K key={x} kind="fade" t={t + 0.3}>
          <g transform={`translate(${x} ${y}) scale(${s})`}>
            <path className={`aa-spark${c}`} d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#FFC93C" stroke="#E0A92A" strokeWidth="1" strokeLinejoin="round" />
          </g>
        </K>
      ))}
    </g>
  );
}

// round 12 (owner): lettered spots like the earlier map's route tags, one at each stop of the hunt, beside it
// [dx, dy] in squares from the stop, clear of the path, the angle labels, the palm, the skull and the chest
const SPOTS: [string, number, number][] = [["A", -1.1, 0.4], ["B", 1.9, 0.3], ["C", -1.3, -0.2], ["D", 1.45, -0.65]];

/** a boxed letter printed on the map, with a hard flat shadow */
function Spot({ k, x, y, tag }: { k: string; x: number; y: number; tag: number }) {
  const b = tag + 9;
  return (
    <g transform={`translate(${f(x)} ${f(y)})`}>
      <rect x={-b / 2 + 2.5} y={-b / 2 + 2.5} width={b} height={b} rx="4" fill="#0D0D0D" fillOpacity="0.12" />
      <rect x={-b / 2} y={-b / 2} width={b} height={b} rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="1.8" />
      <text y={tag * 0.36} textAnchor="middle" fontSize={tag} fontWeight="800" fill={INK}>{k}</text>
    </g>
  );
}

/** the hunt: Start, the legs drawing in one after another with their angles, then the X and the chest */
function Hunt({ tag, lab, t }: { tag: number; lab: number; t: number }) {
  const marks: React.ReactNode[] = [];
  const legs: React.ReactNode[] = [];
  const dots: React.ReactNode[] = [];
  let tt = t + 0.15;
  const arrive: number[] = [t];
  HUNT.slice(1).forEach((b, i) => {
    const a = HUNT[i];
    const d = dirOf(a, b);
    const last = i === HUNT.length - 2;
    const ax = gx(a[0]), ay = gy(a[1]);
    const from = i === 0 ? 0 : dirOf(a, HUNT[i - 1]);
    const { diff, mid } = spread(from, d);
    const lp = at(ax, ay, Math.abs(diff - 90) < 0.5 ? 27 : 38, mid);
    marks.push(
      <K key={i} kind="pop" t={tt + 0.25}>
        {i === 0 && <path d={`M${f(ax)} ${f(ay)} h40`} stroke={INK} strokeOpacity="0.55" strokeWidth="1.8" strokeDasharray="3 3" />}
        <Corner x={ax} y={ay} d1={from} d2={d} small />
        <text x={f(lp.x)} y={f(lp.y + lab * 0.36)} textAnchor="middle" fontSize={lab} fontWeight="800" fill="#C7362E" stroke="#EEF6E2" strokeWidth="4" strokeLinejoin="round" paintOrder="stroke">{Math.round(diff)}°</text>
      </K>,
    );
    // only the last leg has a head (it points at the X); a head on every leg would hide the angle at the turn
    if (last) legs.push(<Arrow key={i} x={ax} y={ay} d={d} len={lenOf(a, b) - 16} w={3} head={12} t={tt} />);
    else legs.push(<path key={i} className="aa-k aa-draw" style={{ animationDelay: `${tt.toFixed(2)}s` }} pathLength={1} d={`M${f(ax)} ${f(ay)} L${f(gx(b[0]))} ${f(gy(b[1]))}`} stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none" />);
    if (i > 0) dots.push(<K key={i} kind="pop" t={tt - 0.05}><circle cx={ax} cy={ay} r="4.5" fill={INK} /></K>);
    tt += DRAW + 0.12;
    arrive.push(tt - 0.1);
  });
  const [s, e] = [HUNT[0], HUNT[HUNT.length - 1]];
  const sx = gx(s[0]), sy = gy(s[1]);
  const ex = gx(e[0]), ey = gy(e[1]);
  const sw = tag * 3.2;
  return (
    <g>
      {marks}
      {legs}
      {dots}
      <K kind="pop" t={t}>
        <circle cx={sx} cy={sy} r="9" fill="#FFFFFF" stroke={INK} strokeWidth="2.4" />
        <circle cx={sx} cy={sy} r="3.5" fill={INK} />
        <rect x={sx - sw / 2} y={sy + 13} width={sw} height={tag + 8} rx="5" fill="#FFFFFF" stroke={INK} strokeWidth="1.8" />
        <text x={sx} y={sy + 13 + 4 + tag * 0.86} textAnchor="middle" fontSize={tag} fontWeight="800" fill={INK}>Start</text>
      </K>
      {/* X marks the spot, the chest sits on it */}
      <K kind="pop" t={tt - 0.1}>
        <path d={`M${ex - 14} ${ey - 12} L${ex + 14} ${ey + 12} M${ex + 14} ${ey - 12} L${ex - 14} ${ey + 12}`} stroke="#E8453C" strokeWidth="6" strokeLinecap="round" />
      </K>
      <g transform={`translate(${ex} ${ey - 13}) scale(1.12)`}><MapChest t={tt} /></g>
      {SPOTS.map(([k, dx, dy], i) => (
        <K key={k} kind="pop" t={arrive[i]}><Spot k={k} x={gx(HUNT[i][0] + dx)} y={gy(HUNT[i][1] + dy)} tag={tag} /></K>
      ))}
    </g>
  );
}

const Tuft = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <path transform={`translate(${f(x)} ${f(y)}) scale(${s})`} d="M-5 0 Q-6 -6 -9 -9 M0 0 Q0 -8 1 -11 M5 0 Q6 -6 9 -8" stroke="#8DBA5A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
);

function Palm({ x, y }: { x: number; y: number }) {
  const fronds: [number, number][] = [[-26, -6], [-18, -18], [0, -24], [18, -18], [26, -6]];
  return (
    <g transform={`translate(${f(x)} ${f(y)})`}>
      <ellipse cx="0" cy="2" rx="30" ry="8" fill="#F6E7C4" />
      <Tuft x={-18} y={2} s={0.8} /><Tuft x={20} y={3} s={0.7} />
      <g className="aa-sway">
        <path d="M-3 2 Q-8 -24 2 -48 L6 -47 Q-2 -24 3 2 Z" fill="#B57C42" />
        <path d="M-3 -10 h6 M-4 -22 h6 M-2 -34 h6" stroke="#9C6A3D" strokeWidth="1.4" />
        {fronds.map(([dx, dy]) => <path key={dx} d={`M4 -48 Q${dx / 2 + 4} ${-48 + dy - 8} ${dx + 4} ${-48 + dy + 10} Q${dx / 2 + 6} ${-48 + dy} 4 -48 Z`} fill={dx % 2 ? "#4FAE5F" : "#5FBE6C"} />)}
        <circle cx="1" cy="-46" r="3" fill="#8C6244" /><circle cx="7" cy="-45" r="3" fill="#8C6244" />
      </g>
    </g>
  );
}

function Ship({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${f(x)} ${f(y)}) scale(0.9)`}>
      <path className="aa-ripple" d="M-38 12 q6 -4 12 0 q6 4 12 0 M14 12 q6 -4 12 0 q6 4 12 0 M-22 18 q6 -3 12 0 M8 18 q6 -3 12 0" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
      <g className="aa-bob">
        <path d="M-30 0 H30 L22 11 H-22 Z" fill="#B5763F" />
        <path d="M-30 0 H30 L28 3 H-28 Z" fill="#8C5A2E" />
        <rect x="-1" y="-42" width="2.4" height="42" fill="#6E4A2A" />
        <path d="M3 -38 Q22 -24 20 -5 H3 Z" fill="#FFFFFF" stroke="#E2E0EC" strokeWidth="1" />
        <path d="M-3 -32 Q-20 -20 -18 -5 H-3 Z" fill="#FFF8E6" stroke="#E2E0EC" strokeWidth="1" />
        <path d="M1 -42 L14 -38 L1 -34 Z" fill="#E8453C" />
      </g>
    </g>
  );
}

function Skull({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${f(x)} ${f(y)}) scale(0.9)`}>
      <ellipse cx="0" cy="14" rx="40" ry="8" fill="#EFE3BE" />
      <ellipse cx="-30" cy="12" rx="7" ry="4.5" fill="#C8BFA8" /><ellipse cx="32" cy="11" rx="6" ry="4" fill="#C8BFA8" />
      <path d="M-22 6 Q-24 -24 0 -25 Q24 -24 22 6 Q20 13 12 13 H-12 Q-20 13 -22 6 Z" fill="#F7F1E3" />
      <path d="M8 -23 Q22 -18 22 2 Q20 12 12 13 H6 Q16 0 8 -23 Z" fill="#E6DCC7" />
      <ellipse cx="-9" cy="-4" rx="6.5" ry="7.5" fill="#4A4038" /><ellipse cx="9" cy="-4" rx="6.5" ry="7.5" fill="#4A4038" />
      <path d="M0 3 L-3 8 H3 Z" fill="#4A4038" />
      <path d="M-8 13 V7 M-3 13 V7 M2 13 V7 M7 13 V7" stroke="#C8BFA8" strokeWidth="1.6" />
    </g>
  );
}

/** the map: grid, sea, landmarks and the hunt, in a 456x336 box */
function MapPrint({ tag, lab }: { tag: number; lab: number }) {
  const gw = COLS * SQ, gh = ROWS * SQ;
  const sea = `M${gx(12.6)} 0 Q${gx(13)} ${gy(11.6)} ${gx(15.4)} ${gy(10.9)} Q${gx(17.6)} ${gy(10.2)} ${gx(COLS)} ${gy(9)} V0 Z`;
  return (
    <g>
      <K kind="fade" t={0.7}>
      <rect width={gw} height={gh} fill="#EEF6E2" />
      <path d={sea} fill="#CDEBF5" />
      <path d={`M${gx(12.6)} 0 Q${gx(13)} ${gy(11.6)} ${gx(15.4)} ${gy(10.9)} Q${gx(17.6)} ${gy(10.2)} ${gx(COLS)} ${gy(9)}`} fill="none" stroke="#F6E7C4" strokeWidth="6" strokeLinecap="round" />
      <path
        d={[
          ...Array.from({ length: COLS - 1 }, (_, i) => `M${gx(i + 1)} 0 V${gh}`),
          ...Array.from({ length: ROWS - 1 }, (_, i) => `M0 ${gy(i + 1)} H${gw}`),
        ].join("")}
        stroke="#9DB98A" strokeOpacity="0.32" strokeWidth="1"
      />
      <rect width={gw} height={gh} fill="none" stroke="#B9CDA8" strokeWidth="2" />
      </K>
      <K kind="pop" t={0.85}><Ship x={gx(16.6)} y={gy(12)} /></K>
      <K kind="pop" t={0.95}><Palm x={gx(7)} y={gy(7.6)} /></K>
      <K kind="pop" t={1.05}><Skull x={gx(10)} y={gy(2.55)} /></K>
      <K kind="fade" t={0.9}>
        <Tuft x={gx(5.2)} y={gy(10.4)} /><Tuft x={gx(4.6)} y={gy(8.4)} /><Tuft x={gx(1.2)} y={gy(6.4)} />
        <Tuft x={gx(18)} y={gy(5)} /><Tuft x={gx(4.4)} y={gy(1)} /><Tuft x={gx(12.6)} y={gy(1.6)} />
      </K>
      <Hunt tag={tag} lab={lab} t={1.0} />
    </g>
  );
}

function Treasure({ v }: { v: Variant }) {
  const wide = v === "wide";
  const s = SHEET[v];
  const k = wide ? 1 : 1.36;
  const mx = (s.w - 456 * k) / 2, my = (s.h - 336 * k) / 2;
  return (
    <View v={v}>
      <Table />
      <Sheet v={v}>
        <g transform={`translate(${f(mx)} ${f(my)}) scale(${k})`}><MapPrint tag={wide ? 15 : 17} lab={wide ? 14 : 16} /></g>
      </Sheet>
      <LyingProtractor v={v} />
      {wide ? (
        <>
          <Lie v={v} t={PROPS + GAP} x={724} y={150}><ToyCompass r={42} /></Lie>
          <Lie v={v} t={PROPS + GAP * 2} x={694} y={404} rot={38}><Magnifier /></Lie>
          <Lie v={v} t={PROPS + GAP * 3} x={30} y={526} rot={-3}><Pencil len={176} body="#E8453C" tip="#C7362E" /></Lie>
          <Lie v={v} t={PROPS + GAP * 3.5} x={38} y={551} rot={-1}><Pencil len={176} body="#3F86D9" tip="#2E6FC9" /></Lie>
          <Lie v={v} t={PROPS + GAP * 4} x={26} y={577} rot={1}><Pencil len={176} body="#4FAE5F" tip="#3C8F4B" /></Lie>
          <Lie v={v} t={PROPS + GAP * 4.5} x={640} y={530}><Coin /></Lie>
          <Lie v={v} t={PROPS + GAP * 5} x={672} y={548}><Coin /></Lie>
          <Lie v={v} t={PROPS + GAP * 5.5} x={712} y={526} rot={14}><Gem /></Lie>
        </>
      ) : (
        <>
          <Lie v={v} t={PROPS + GAP} x={752} y={52}><ToyCompass r={40} /></Lie>
          <Lie v={v} t={PROPS + GAP * 2} x={640} y={566}><Coin /></Lie>
          <Lie v={v} t={PROPS + GAP * 2.5} x={674} y={580}><Coin /></Lie>
          <Lie v={v} t={PROPS + GAP * 3} x={712} y={566} rot={-12}><Gem /></Lie>
        </>
      )}
    </View>
  );
}

export function AngleSlider() {
  const [v, setV] = useState(50);
  const [go, setGo] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  // build the picture once, when the section first scrolls into view
  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") { setGo(true); return; }
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setGo(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`as${go ? " aa-go" : ""}`} ref={root}>
      <div className="as-pol">
        <div className="as-frame">
          <Treasure v="wide" />
          <Treasure v="narrow" />
          <div className="as-left" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}><Plain v="wide" /><Plain v="narrow" /></div>
          <span className="as-handle" style={{ left: `${v}%` }} aria-hidden="true">
            <span className="as-knob"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-6 6 6 6" /><path d="M15 6l6 6-6 6" /></svg></span>
          </span>
          <input className="as-range" type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Slide between the angles worksheet and the treasure map, both lying on a table" />
        </div>
      </div>
      <div className="as-caps">
        <span className={`as-cap${v > 50 ? " on" : ""}`}><i className="as-badge x" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" /></svg></i>Measure this angle.</span>
        <span className={`as-cap${v <= 50 ? " on" : ""}`}>Use angles to find the treasure.<i className="as-badge star" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#fff" /></svg></i></span>
      </div>
    </div>
  );
}
