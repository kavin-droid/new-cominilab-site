"use client";

import { PIG_PATHS } from "./pig-data";
import type { CSSProperties, ReactNode } from "react";

/**
 * Scene illustrations for "Learning has four parts" (FourParts) and the kit the AngleSlider borrows, drawn in the relief
 * cards' style (public/lab/img/worry-*): flat, top-down or straight-on objects, a hard darker copy as the shadow, the same purple/teal/yellow/wood palette.
 * Every card picture is a 400x400 square. Classes pa-* are animated in parts.css.
 */

export const FONT = { fontFamily: "var(--font-lab-sans), 'DM Sans', Arial, sans-serif" } as const;
export const INK = "#3B3757";
export const WOOD = "#D49A64";
export const WOOD_SH = "#B97F4B";

function Svg({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <svg viewBox="0 0 400 400" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} preserveAspectRatio="xMidYMid slice">
      {children}
    </svg>
  );
}

/* ---------- small things ---------- */

/** used by world-art.tsx (WorldGames) */
export function Strawberry({ x, y, s = 1, r = 0, sh = WOOD_SH }: { x: number; y: number; s?: number; r?: number; sh?: string }) {
  const body = "M-13 -6 Q-12 -14 0 -14 Q12 -14 13 -6 Q14 8 0 19 Q-14 8 -13 -6 Z";
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d={body} fill={sh} transform="translate(-3 4)" />
      <path d={body} fill="#E8453C" />
      <path d="M-9 -6 Q-9 5 -2 13 Q-12 7 -11 -4 Z" fill="#FF7A6B" />
      <path d="M2 -5 Q10 -2 10 6 Q8 10 3 14 Q8 6 2 -5 Z" fill="#C7362E" />
      <g fill="#FFE08A">
        <ellipse cx="-5" cy="-2" rx="1.3" ry="2" /><ellipse cx="4" cy="-3" rx="1.3" ry="2" /><ellipse cx="-1" cy="5" rx="1.3" ry="2" />
        <ellipse cx="7" cy="4" rx="1.3" ry="2" /><ellipse cx="-7" cy="6" rx="1.3" ry="2" /><ellipse cx="2" cy="11" rx="1.3" ry="2" />
      </g>
      <path d="M0 -12 L-11 -17 L-5 -11 L-13 -9 L-3 -9 L0 -4 L3 -9 L13 -9 L5 -11 L11 -17 Z" fill="#4FA046" />
      <rect x="-1.5" y="-21" width="3" height="8" fill="#3A7D34" />
    </g>
  );
}

export function Coin({ x, y, r = 16, sh = WOOD_SH }: { x: number; y: number; r?: number; sh?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} cx={-3} cy={4} fill={sh} />
      <circle r={r} fill="#FFC93C" />
      <circle r={r * 0.7} fill="none" stroke="#E0A92A" strokeWidth={r * 0.16} />
      <path d={`M${-r * 0.55} ${-r * 0.2} A${r * 0.6} ${r * 0.6} 0 0 1 ${-r * 0.15} ${-r * 0.58}`} stroke="#FFF1B8" strokeWidth={r * 0.16} fill="none" strokeLinecap="round" />
    </g>
  );
}

export function Tick({ x, y, r = 15, className = "" }: { x: number; y: number; r?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={className}>
        <circle r={r} cx={-2} cy={3} fill="rgba(31,111,108,0.25)" />
        <circle r={r} fill="#4AC1BD" />
        <path d={`M${-r * 0.45} 0 L${-r * 0.1} ${r * 0.35} L${r * 0.5} ${-r * 0.35}`} stroke="#FFFFFF" strokeWidth={r * 0.26} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>
  );
}

export type KidMood = "happy" | "look" | "wow" | "flat" | "think";
export type Species = "squirrel" | "bunny" | "raccoon" | "bear";
const KID = {
  squirrel: { head: "#D68455", earIn: "#7B482B", face: "#F2B48A", nose: "#3B2A20" },
  bunny: { head: "#D8E0E3", earIn: "#F4C6CF", face: "#FFFFFF", nose: "#3B2A20" },
  raccoon: { head: "#A3AAB3", earIn: "#4A4F57", face: "#EEF0F2", nose: "#2B2F35" },
  bear: { head: "#C08A5B", earIn: "#8A5A35", face: "#EBCBA5", nose: "#3B2A20" },
};
/** a child's face in the roster's style (public/lab/cast/roster), drawn so it can change expression */
export function Kid({ x, y, s = 1, sp = "squirrel", mood = "happy", className = "" }: { x: number; y: number; s?: number; sp?: Species; mood?: KidMood; className?: string }) {
  const c = KID[sp];
  const eye = "#2B2233";
  const ex = 17, ey = -2;
  const eyes = (dx: number) => {
    const cx = dx * ex;
    if (mood === "happy") return <path d={`M${cx - 8} ${ey + 3} Q${cx} ${ey - 7} ${cx + 8} ${ey + 3}`} stroke={sp === "raccoon" ? "#FFFFFF" : eye} strokeWidth="4.5" fill="none" strokeLinecap="round" />;
    if (mood === "flat")
      return (
        <g>
          <path d={`M${cx - 7} ${ey} A7 7 0 0 0 ${cx + 7} ${ey} Z`} fill={eye} />
          <path d={`M${cx - 10} ${ey - 1} H${cx + 9}`} stroke={sp === "raccoon" ? "#FFFFFF" : eye} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );
    const r = mood === "wow" ? 8 : 6.5;
    const up = mood === "think" ? -4 : 0;
    const side = mood === "think" ? 3 : 0;
    return (
      <g>
        {sp === "raccoon" ? <circle cx={cx} cy={ey} r={r + 3.5} fill="#FFFFFF" /> : null}
        <circle cx={cx + side} cy={ey + up} r={r} fill={eye} />
        <circle cx={cx + side - 2.2} cy={ey + up - 2.4} r={r * 0.33} fill="#FFFFFF" />
      </g>
    );
  };
  const mouth =
    mood === "happy" ? <path d="M-11 19 Q0 31 11 19 Z" fill="#7A2E3A" stroke={eye} strokeWidth="3" strokeLinejoin="round" />
    : mood === "wow" ? <ellipse cx="0" cy="24" rx="6" ry="7.5" fill="#7A2E3A" stroke={eye} strokeWidth="3" />
    : mood === "flat" ? <path d="M-8 24 H8" stroke={eye} strokeWidth="3.5" strokeLinecap="round" />
    : mood === "think" ? <path d="M-7 24 Q-2 20 3 24 T10 23" stroke={eye} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    : <path d="M-8 21 Q0 28 8 21" stroke={eye} strokeWidth="3.5" fill="none" strokeLinecap="round" />;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className}>
        {sp === "squirrel" ? (
          <g>
            <path d="M-46 -18 L-40 -66 Q-30 -62 -12 -44 Z" fill={c.head} /><path d="M-38 -26 L-36 -56 L-20 -42 Z" fill={c.earIn} />
            <path d="M46 -18 L40 -66 Q30 -62 12 -44 Z" fill={c.head} /><path d="M38 -26 L36 -56 L20 -42 Z" fill={c.earIn} />
          </g>
        ) : sp === "bunny" ? (
          <g>
            <ellipse cx="-19" cy="-62" rx="13" ry="36" fill={c.head} transform="rotate(-10 -19 -62)" /><ellipse cx="-19" cy="-60" rx="6" ry="26" fill={c.earIn} transform="rotate(-10 -19 -60)" />
            <ellipse cx="19" cy="-62" rx="13" ry="36" fill={c.head} transform="rotate(10 19 -62)" /><ellipse cx="19" cy="-60" rx="6" ry="26" fill={c.earIn} transform="rotate(10 19 -60)" />
          </g>
        ) : sp === "raccoon" ? (
          <g>
            <path d="M-48 -14 L-38 -58 L-10 -46 Z" fill="#7C838C" /><path d="M-38 -24 L-33 -48 L-20 -42 Z" fill={c.earIn} />
            <path d="M48 -14 L38 -58 L10 -46 Z" fill="#7C838C" /><path d="M38 -24 L33 -48 L20 -42 Z" fill={c.earIn} />
          </g>
        ) : (
          <g>
            <circle cx="-34" cy="-38" r="17" fill={c.head} /><circle cx="-34" cy="-38" r="9" fill={c.earIn} />
            <circle cx="34" cy="-38" r="17" fill={c.head} /><circle cx="34" cy="-38" r="9" fill={c.earIn} />
          </g>
        )}
        <circle r="50" fill={c.head} />
        {sp === "squirrel" ? <path d="M-8 -48 Q2 -62 14 -52 Q6 -50 4 -44 Z" fill="#E9A06F" /> : null}
        {sp === "raccoon" ? <path d="M-46 -12 Q-24 -24 0 -10 Q24 -24 46 -12 Q44 12 22 10 Q8 6 0 12 Q-8 6 -22 10 Q-44 12 -46 -12 Z" fill="#3F4650" /> : null}
        <ellipse cx="0" cy="22" rx={sp === "bear" ? 24 : 32} ry={sp === "bear" ? 20 : 24} fill={c.face} />
        {eyes(-1)}
        {eyes(1)}
        <ellipse cx="0" cy="11" rx="6.5" ry="4.8" fill={c.nose} />
        {mouth}
        {mood !== "flat" ? (
          <g fill="#F48FA6" opacity="0.6"><ellipse cx="-31" cy="15" rx="8" ry="5" /><ellipse cx="31" cy="15" rx="8" ry="5" /></g>
        ) : null}
      </g>
    </g>
  );
}

export function Pencil({ x, y, r = 0, s = 1, sh = WOOD_SH }: { x: number; y: number; r?: number; s?: number; sh?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <g transform="translate(-4 6)" fill={sh}><rect x="0" y="-9" width="110" height="18" /><path d="M110 -9 L134 0 L110 9 Z" /></g>
      <rect x="0" y="-9" width="22" height="18" fill="#F4A3B4" />
      <rect x="16" y="-9" width="13" height="18" fill="#A5A9B8" />
      <rect x="29" y="-9" width="81" height="18" fill="#FFD34E" />
      <rect x="29" y="-9" width="81" height="5" fill="#FFE58A" />
      <path d="M110 -9 L134 0 L110 9 Z" fill="#FBE3B8" />
      <path d="M127 -3 L134 0 L127 3 Z" fill={INK} />
    </g>
  );
}

/* ---------- the toy-saving things (object-only: no people in these pictures) ---------- */

/** a ₹10 coin */
export function Coin10({ x, y, r = 22, sh = WOOD_SH, className = "", style }: { x: number; y: number; r?: number; sh?: string; className?: string; style?: CSSProperties }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={className} style={style}>
        <Coin x={0} y={0} r={r} sh={sh} />
        <text y={r * 0.3} textAnchor="middle" fontSize={r * 0.82} fontWeight="800" fill="#9A6A00" style={FONT}>10</text>
      </g>
    </g>
  );
}

/** the toy car; (x, y) is the middle of where its wheels touch the ground */
export function ToyCar({ x, y, s = 1, sh = WOOD_SH, className = "" }: { x: number; y: number; s?: number; sh?: string; className?: string }) {
  const body = "M-84 -14 V-46 Q-84 -54 -74 -56 L-44 -60 L-26 -88 H30 L52 -60 L78 -56 Q86 -54 86 -44 V-14 Z";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className}>
        <path d={body} fill={sh} transform="translate(-8 8)" />
        <path d={body} fill="#E8453C" />
        <path d="M-84 -30 H86 V-14 H-84 Z" fill="#C7362E" />
        <path d="M-74 -52 L-46 -56 L-40 -50 H-80 Z" fill="#FF7A6B" />
        <path d="M-36 -60 L-22 -80 H-2 V-60 Z" fill="#BFE6F5" />
        <path d="M6 -60 V-80 H26 L42 -60 Z" fill="#BFE6F5" />
        <path d="M-30 -64 L-24 -74 H-18 L-26 -64 Z" fill="#FFFFFF" opacity="0.8" />
        <rect x="-4" y="-46" width="12" height="4" fill="#C7362E" />
        <rect x="70" y="-50" width="12" height="9" fill="#FFE08A" />
        <rect x="-84" y="-50" width="9" height="9" fill="#FFF8E6" />
        {[-50, 52].map((wx) => (
          <g key={wx}>
            <circle cx={wx} cy="-12" r="18" fill="#2B2233" />
            <circle cx={wx} cy="-12" r="8" fill="#A5A9B8" />
          </g>
        ))}
      </g>
    </g>
  );
}

/** a white price tag on a string; (x, y) is where the string hangs from */
export function PriceTag({ x, y, text, s = 1, r = 8, sh = WOOD_SH }: { x: number; y: number; text: string; s?: number; r?: number; sh?: string }) {
  const tag = "M-40 30 H40 V100 H-40 Z";
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0 V34" stroke={INK} strokeWidth="3" />
      <path d={tag} fill={sh} transform="translate(-7 8)" />
      <path d={tag} fill="#FFFFFF" />
      <circle cy="41" r="5" fill="#E2E0EC" />
      <text y="86" textAnchor="middle" fontSize="31" fontWeight="800" fill={INK} style={FONT}>{text}</text>
    </g>
  );
}

/** the piggy bank (the Piggy Banks concept game's own pig, owner 2026-11-26); (x, y) is the middle of its feet. sh is
 * the shadow it casts on what it stands on */
export function Piggy({ x, y, s = 1, label, sh = WOOD_SH, className = "" }: { x: number; y: number; s?: number; label?: string; sh?: string; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s * 0.42})`}>
      <g className={className}>
        <g transform="translate(-214 -312)">
          <ellipse cx="218" cy="306" rx="176" ry="16" fill={sh} />
          {PIG_PATHS.map((p, i) => <path key={i} d={p.d} fill={p.pink} fillRule={p.rule ?? undefined} clipRule={p.rule ?? undefined} />)}
          {label ? (
            <g transform="translate(200 150) rotate(-4)">
              <rect x="-96" y="-50" width="192" height="100" rx="6" fill="#FDE68A" />
              <text y="24" textAnchor="middle" fontSize="68" fontWeight="800" fill={INK} style={FONT}>{label}</text>
            </g>
          ) : null}
        </g>
      </g>
    </g>
  );
}

/** a round push pin, seen from the front */

function Heart({ x, y, s = 1, c = "#E0559A", className = "", style }: { x: number; y: number; s?: number; c?: string; className?: string; style?: CSSProperties }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className={className} style={style}>
        <path d="M0 -6 c-6 -12 -24 -8 -20 6 c3 8 20 18 20 18 s17 -10 20 -18 c4 -14 -14 -18 -20 -6 Z" fill={c} />
      </g>
    </g>
  );
}

/* ---------- the card pictures: one clear subject each, on a soft colour, lots of air (owner, 2026-11-26: like the
   relief cards on the home page; visuals need not be literal). Every picture is a 400x400 square. ---------- */

/** the soft card colour and a big round spot behind the subject */
function Ground({ bg, spot }: { bg: string; spot: string }) {
  return (
    <g>
      <rect width="400" height="400" fill={bg} />
      <circle cx="200" cy="214" r="148" fill={spot} />
    </g>
  );
}

const LILAC = { bg: "#EFEAFB", spot: "#E3DAF8", sh: "#CDC1F0" };
const PINK = { bg: "#FFE9F2", spot: "#FFD8E8", sh: "#F4BCD3" };
const TEAL = { bg: "#E0F4F3", spot: "#CBECEA", sh: "#A9D9D6" };
const SUN = { bg: "#FFF3D1", spot: "#FFE8A6", sh: "#F0D184" };
const DULL = { bg: "#EEEFF3", spot: "#E3E5EC", sh: "#C9CCD8" };

/** Meaning: the toy car, with its ₹50 tag */
export function MyraToy() {
  return (
    <Svg>
      <Ground bg={LILAC.bg} spot={LILAC.spot} />
      <PriceTag x={292} y={0} text="₹50" s={1.05} r={9} sh={LILAC.sh} />
      <ToyCar x={196} y={312} s={1.32} sh={LILAC.sh} />
    </Svg>
  );
}

/** Motivation: the piggy bank, and a heart: she wants it */
export function MyraWant() {
  return (
    <Svg>
      <Ground bg={PINK.bg} spot={PINK.spot} />
      <Heart x={204} y={104} s={2.6} className="pa-pop" style={{ ["--d" as string]: "0.45s" }} />
      <Heart x={286} y={66} s={1.1} c="#F48FB8" className="pa-pop" style={{ ["--d" as string]: "0.7s" }} />
      <Piggy x={196} y={330} s={1.22} sh={PINK.sh} />
    </Svg>
  );
}

/** Mechanics: a ₹10 coin dropping in, +10 */
export function MyraAdd() {
  return (
    <Svg>
      <Ground bg={TEAL.bg} spot={TEAL.spot} />
      <Piggy x={200} y={344} s={1.22} sh={TEAL.sh} />
      <Coin10 x={198} y={126} r={36} sh={TEAL.sh} className="pa-drop-in" style={{ ["--d" as string]: "0.4s" }} />
      <text x="292" y="118" textAnchor="middle" fontSize="46" fontWeight="800" fill="#2F9C98" style={FONT} className="pa-pop">+10</text>
    </Svg>
  );
}

/** a stack of coins seen from the side; (x, y) is the middle of the bottom coin's top face */
function CoinStack({ x, y, n, sh }: { x: number; y: number; n: number; sh: string }) {
  const rx = 72, ry = 19, t = 16, step = 22;
  const top = y - (n - 1) * step;
  return (
    <g transform={`translate(${x} 0)`}>
      <path d={`M${-rx} ${top} V${y + t} A${rx} ${ry} 0 0 0 ${rx} ${y + t} V${top} Z`} fill={sh} transform="translate(-10 10)" />
      <ellipse cx="-10" cy={top + 10} rx={rx} ry={ry} fill={sh} />
      {Array.from({ length: n }, (_, i) => {
        const cy = y - i * step;
        return (
          <g key={i}>
            <path d={`M${-rx} ${cy} V${cy + t} A${rx} ${ry} 0 0 0 ${rx} ${cy + t} V${cy} Z`} fill="#E0A92A" />
            <ellipse cy={cy} rx={rx} ry={ry} fill="#FFC93C" />
            <ellipse cy={cy} rx={rx * 0.68} ry={ry * 0.6} fill="none" stroke="#E0A92A" strokeWidth="4" />
          </g>
        );
      })}
    </g>
  );
}

/** Measurement: five coins counted, and a tick */
export function MyraCheck() {
  return (
    <Svg>
      <Ground bg={SUN.bg} spot={SUN.spot} />
      <CoinStack x={192} y={300} n={5} sh={SUN.sh} />
      <Tick x={292} y={132} r={34} className="pa-pop" />
    </Svg>
  );
}

/* ---------- school's way: the same four parts, flat and grey ---------- */

/** Mechanics first: one bare sum on the board */
export function SchoolBoard({ sum = "30 + 20 = ?" }: { sum?: string }) {
  return (
    <Svg>
      <Ground bg={DULL.bg} spot={DULL.spot} />
      <rect x="62" y="112" width="276" height="180" fill={DULL.sh} transform="translate(-10 10)" />
      <rect x="62" y="112" width="276" height="180" fill={WOOD} />
      <rect x="74" y="124" width="252" height="156" fill="#2F5D50" />
      <text x="200" y="216" textAnchor="middle" fontSize="44" fontWeight="800" fill="#F4F1E6" style={FONT}>{sum}</text>
      <rect x="250" y="292" width="40" height="8" fill="#FFFFFF" />
    </Svg>
  );
}

/** Measurement next: a test, 5 out of 10 */
export function SchoolTest({ score = "5/10" }: { score?: string }) {
  return (
    <Svg>
      <Ground bg={DULL.bg} spot={DULL.spot} />
      <g transform="rotate(-4 200 210)">
        <rect x="112" y="78" width="176" height="252" fill={DULL.sh} transform="translate(-10 10)" />
        <rect x="112" y="78" width="176" height="252" fill="#FFFFFF" />
        <rect x="112" y="78" width="176" height="30" fill="#B9B5CC" />
        {[[140, 124], [176, 100], [212, 124], [248, 84]].map(([ly, w]) => <rect key={ly} x="134" y={ly} width={w} height="10" fill="#E2E0EC" />)}
      </g>
      <g transform="translate(278 282) rotate(-10)" className="pa-stamp">
        <circle r="50" fill="#FFFFFF" stroke="#E8453C" strokeWidth="7" />
        <text y="13" textAnchor="middle" fontSize="36" fontWeight="800" fill="#E8453C" style={FONT}>{score}</text>
      </g>
    </Svg>
  );
}

/** Meaning comes last: the toy is a small picture on the book's last page */
export function SchoolWord() {
  return (
    <Svg>
      <Ground bg={DULL.bg} spot={DULL.spot} />
      <rect x="56" y="104" width="288" height="200" fill={DULL.sh} transform="translate(-10 10)" />
      <rect x="56" y="104" width="288" height="200" fill="#7A86B8" />
      <rect x="66" y="112" width="130" height="184" fill="#FFFFFF" />
      <rect x="204" y="112" width="130" height="184" fill="#FFFFFF" />
      <rect x="196" y="112" width="8" height="184" fill="#E2E0EC" />
      {[136, 160, 184, 208, 232, 256].map((ly) => <rect key={ly} x="82" y={ly} width={ly === 256 ? 60 : 98} height="8" fill="#E2E0EC" />)}
      {[136, 160].map((ly) => <rect key={ly} x="220" y={ly} width="98" height="8" fill="#E2E0EC" />)}
      <ToyCar x={268} y={262} s={0.42} sh="#E2E0EC" />
      <text x="318" y="288" textAnchor="end" fontSize="13" fontWeight="700" fill="#A5A3B8" style={FONT}>94</text>
    </Svg>
  );
}

/** Motivation never comes: an empty frame */
export function SchoolNever() {
  return (
    <Svg>
      <rect width="400" height="400" fill="#F6F5FB" />
      <rect x="112" y="112" width="176" height="176" fill="none" stroke="#C9BEF3" strokeWidth="6" strokeDasharray="16 12" />
      <text x="200" y="240" textAnchor="middle" fontSize="96" fontWeight="800" fill="#DCD4F7" style={FONT} className="pa-q">?</text>
    </Svg>
  );
}
