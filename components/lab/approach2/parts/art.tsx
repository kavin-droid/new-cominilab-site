"use client";

import type { ReactNode } from "react";

/**
 * Scene illustrations for "Learning has four parts" (FourParts) and the kit the AngleSlider borrows, drawn in the relief
 * cards' style (public/lab/img/worry-*): flat, top-down or straight-on objects, a hard darker copy as the shadow, the same purple/teal/yellow/wood palette.
 * Every scene is a 600x400 viewBox. Classes pa-* are animated in parts.css.
 */

export const FONT = { fontFamily: "var(--font-lab-sans), 'DM Sans', Arial, sans-serif" } as const;
export const INK = "#3B3757";
export const WOOD = "#D49A64";
export const WOOD_SH = "#B97F4B";

function Svg({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <svg viewBox="0 0 600 400" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} preserveAspectRatio="xMidYMid slice">
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

/* ---------- the school versions (shared by every direction) ---------- */

/** Mechanics first: a stack of drill sheets, the first sum boxed */
export function SchoolDrill({ big, sums }: { big: string; sums: string[] }) {
  return (
    <Svg>
      <rect width="600" height="400" fill="#E3E7EE" />
      <rect y="64" width="600" height="336" fill={WOOD} />
      <rect x="40" y="8" width="150" height="44" fill="#2F5D50" /><rect x="40" y="48" width="150" height="6" fill="#B97F4B" />
      <text x="115" y="38" textAnchor="middle" fontSize="20" fontWeight="700" fill="#E8F1EC" style={FONT}>Page 1 of 6</text>
      <g transform="translate(300 226) scale(1.3) translate(-305 -226) rotate(-4 300 240)">
        <rect x="170" y="86" width="270" height="300" fill="#E8E7F1" transform="rotate(5 305 236) translate(14 6)" />
        <rect x="170" y="86" width="270" height="300" fill="#F2F1F7" transform="rotate(2 305 236) translate(6 2)" />
        <rect x="170" y="86" width="270" height="300" fill={WOOD_SH} transform="translate(-10 12)" />
        <rect x="170" y="86" width="270" height="300" fill="#FFFFFF" />
        <rect x="190" y="104" width="110" height="9" fill="#CFCDDA" /><rect x="380" y="104" width="40" height="9" fill="#CFCDDA" />
        <rect x="190" y="128" width="230" height="64" fill="#EFEAFB" />
        <text x="305" y="172" textAnchor="middle" fontSize="34" fontWeight="800" fill={INK} style={FONT}>{big}</text>
        {sums.map((t, i) => (
          <g key={i}>
            <text x={i % 2 ? 318 : 196} y={232 + Math.floor(i / 2) * 40} fontSize="19" fontWeight="700" fill="#8C88A2" style={FONT}>{t}</text>
            <rect x={i % 2 ? 392 : 270} y={214 + Math.floor(i / 2) * 40} width="26" height="24" fill="none" stroke="#CFCDDA" strokeWidth="2.5" />
          </g>
        ))}
      </g>
      <Pencil x={505} y={380} r={-62} s={1.2} />
    </Svg>
  );
}

/** Measurement second: a marked test */
export function SchoolTest({ score, rows }: { score: string; rows: { t: string; ok: boolean }[] }) {
  return (
    <Svg>
      <rect width="600" height="400" fill="#E3E7EE" />
      <rect y="64" width="600" height="336" fill={WOOD} />
      <g transform="translate(270 220) scale(1.22) translate(-305 -220) rotate(3 300 240)">
        <rect x="160" y="80" width="290" height="310" fill={WOOD_SH} transform="translate(-10 12)" />
        <rect x="160" y="80" width="290" height="310" fill="#FFFFFF" />
        <rect x="160" y="80" width="290" height="40" fill="#8C88A2" />
        <text x="180" y="108" fontSize="20" fontWeight="800" fill="#FFFFFF" style={FONT}>Quiz</text>
        {rows.map((r, i) => (
          <g key={i}>
            <text x="184" y={160 + i * 44} fontSize="21" fontWeight="700" fill={INK} style={FONT}>{r.t}</text>
            <rect x="184" y={172 + i * 44} width="250" height="2.5" fill="#E8E7F1" />
            {r.ok ? (
              <path d={`M384 ${150 + i * 44} l8 8 l16 -18`} stroke="#E25A4F" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d={`M386 ${136 + i * 44} l18 18 m0 -18 l-18 18`} stroke="#E25A4F" strokeWidth="5" fill="none" strokeLinecap="round" />
            )}
          </g>
        ))}
      </g>
      <g transform="translate(508 150) rotate(-10)"><g className="pa-stamp">
        <ellipse rx="70" ry="50" cx="-5" cy="7" fill={WOOD_SH} />
        <ellipse rx="70" ry="50" fill="#FFFFFF" />
        <ellipse rx="60" ry="41" fill="none" stroke="#E25A4F" strokeWidth="6" />
        <text y="14" textAnchor="middle" fontSize="40" fontWeight="800" fill="#E25A4F" style={FONT}>{score}</text>
      </g></g>
      <g transform="translate(14 392) rotate(-24)">
        <rect x="0" y="-8" width="110" height="16" fill={WOOD_SH} transform="translate(-4 6)" />
        <rect x="0" y="-8" width="110" height="16" fill="#E25A4F" /><rect x="0" y="-8" width="30" height="16" fill="#B8322B" />
        <path d="M110 -8 L128 0 L110 8 Z" fill="#E8E7F1" />
      </g>
    </Svg>
  );
}

/** Meaning, late: the word problem on the last page of the chapter */
export function SchoolWord({ lines, pic }: { lines: string[]; pic: ReactNode }) {
  return (
    <Svg>
      <rect width="600" height="400" fill="#E3E7EE" />
      <rect y="64" width="600" height="336" fill={WOOD} />
      <g transform="translate(300 230) scale(1.16) translate(-300 -222) rotate(-2 300 230)">
        <rect x="60" y="78" width="480" height="300" fill={WOOD_SH} transform="translate(-10 12)" />
        <rect x="60" y="78" width="480" height="300" fill="#4A6FA5" />
        <rect x="70" y="84" width="226" height="286" fill="#FFFFFF" />
        <rect x="304" y="84" width="226" height="286" fill="#FFFFFF" />
        <rect x="292" y="84" width="16" height="286" fill="#E8E7F1" />
        {Array.from({ length: 11 }, (_, i) => <rect key={i} x="90" y={108 + i * 22} width={i % 4 === 3 ? 120 : 184} height="7" fill="#DAD8E4" />)}
        <text x="270" y="360" textAnchor="end" fontSize="14" fontWeight="700" fill="#A5A2B8" style={FONT}>93</text>
        <rect x="322" y="102" width="190" height="30" fill="#FDE68A" />
        <text x="334" y="123" fontSize="16" fontWeight="800" fill="#7A5A00" style={FONT}>Chapter review</text>
        <g transform="translate(330 146)">{pic}</g>
        {lines.map((t, i) => <text key={i} x="322" y={278 + i * 24} fontSize="18" fontWeight="700" fill={INK} style={FONT}>{t}</text>)}
        <text x="512" y="360" textAnchor="end" fontSize="14" fontWeight="700" fill="#A5A2B8" style={FONT}>94</text>
      </g>
    </Svg>
  );
}

/** Motivation, never: an empty frame and a child asking why */
export function SchoolNever({ sp, ask = "Why do I need this?" }: { sp: Species; ask?: string }) {
  return (
    <Svg>
      <rect width="600" height="400" fill="#F4F3F8" />
      <rect x="70" y="50" width="250" height="300" fill="none" stroke="#B9A8F2" strokeWidth="5" strokeDasharray="16 12" />
      <text x="195" y="240" textAnchor="middle" fontSize="130" fontWeight="800" fill="#D9CFF7" style={FONT} className="pa-q">?</text>
      <g className="pa-bubble">
        <rect x="322" y="40" width="262" height="96" fill="#E2E0EC" transform="translate(-6 7)" />
        <rect x="322" y="40" width="262" height="96" fill="#FFFFFF" />
        <path d="M424 136 L438 162 L452 136 Z" fill="#FFFFFF" />
        <text x="453" y="98" textAnchor="middle" fontSize="25" fontWeight="800" fill={INK} style={FONT}>{ask}</text>
      </g>
      <Kid x={452} y={290} s={1.4} sp={sp} mood="flat" />
    </Svg>
  );
}

/* ---------- Ava's rows of seeds ---------- */

function Seed({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 -9 Q7 -2 4 8 Q0 11 -4 8 Q-7 -2 0 -9 Z" fill="#3B3757" />
      <path d="M0 -6 V8 M-3 -2 V6 M3 -2 V6" stroke="#E9E6F2" strokeWidth="1.3" />
    </g>
  );
}

function Packet({ x, y, r = 0, empty = false }: { x: number; y: number; r?: number; empty?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x="-46" y="-62" width="92" height="124" fill="#5E8F44" transform="translate(-7 9)" />
      <rect x="-46" y="-62" width="92" height="124" fill="#FFFFFF" />
      <path d={empty ? "M-46 -62 L-30 -74 L30 -74 L46 -62 Z" : "M-46 -62 H46 V-50 H-46 Z"} fill="#FDE68A" />
      <g transform="translate(0 -8)">
        {Array.from({ length: 12 }, (_, i) => <ellipse key={i} cx="0" cy="-22" rx="7" ry="14" fill="#FFC93C" transform={`rotate(${i * 30})`} />)}
        <circle r="16" fill="#8A5A35" /><circle r="9" fill="#6B4226" />
      </g>
      <rect x="-12" y="16" width="5" height="40" fill="#4FA046" />
      <rect x="-34" y="42" width="68" height="10" fill="#E8E7F1" />
    </g>
  );
}

const ROW_Y = [118, 204, 290];
const COL_X = [176, 236, 296, 356, 416];
export function AvaBed({ rows, stakes = 0, ticks = false, packet = "full", mood = "look", spill = 0 }: { rows: number[]; stakes?: number; ticks?: boolean; packet?: "full" | "some" | "empty"; mood?: KidMood; spill?: number }) {
  return (
    <Svg>
      <rect width="600" height="400" fill="#9ED67F" />
      {[[30, 30], [580, 120], [24, 250], [560, 380], [250, 392], [470, 22]].map(([gx, gy]) => (
        <path key={gx + "-" + gy} d={`M${gx - 10} ${gy} L${gx - 6} ${gy - 14} L${gx} ${gy} L${gx + 4} ${gy - 16} L${gx + 8} ${gy}`} stroke="#7DBF5E" strokeWidth="4" fill="none" strokeLinejoin="round" />
      ))}
      <rect x="136" y="64" width="322" height="286" fill="#6F4A2F" transform="translate(-12 14)" />
      <rect x="136" y="64" width="322" height="286" fill="#9B6B47" />
      <rect x="136" y="64" width="322" height="12" fill="#B07D55" />
      {[[160, 340], [300, 336], [440, 160]].map(([px, py]) => <ellipse key={px} cx={px} cy={py} rx="6" ry="4" fill="#86593A" />)}
      {ROW_Y.map((ry, ri) => (
        <g key={ri}>
          <rect x="150" y={ry - 17} width="294" height="34" fill="#86593A" />
          {COL_X.map((cx, ci) => (
            <g key={ci}>
              <ellipse cx={cx} cy={ry} rx="20" ry="14" fill="#6F4A2F" />
              {ci < rows[ri] ? <g className="pa-drop-in" style={{ ["--d" as string]: `${(ri * 5 + ci) * 0.06}s` }}><Seed x={cx} y={ry - 4} r={(ci * 37) % 50 - 25} s={2.1} /></g> : null}
            </g>
          ))}
          {ri < stakes ? (
            <g className="pa-pop" style={{ ["--d" as string]: `${0.2 + ri * 0.25}s` }}>
              <rect x="497" y={ry - 8} width="12" height="34" fill="#A86E3E" />
              <rect x="472" y={ry - 42} width="62" height="44" fill="#4F8A3A" transform="translate(-5 6)" />
              <rect x="472" y={ry - 42} width="62" height="44" fill="#FFF8E6" />
              <text x="503" y={ry - 10} textAnchor="middle" fontSize="30" fontWeight="800" fill={INK} style={FONT}>{(ri + 1) * 5}</text>
            </g>
          ) : null}
          {ticks && rows[ri] === 5 ? <Tick x={556} y={ry - 22} r={17} className="pa-pop" /> : null}
        </g>
      ))}
      <Packet x={62} y={110} r={-10} empty={packet === "empty"} />
      {Array.from({ length: spill }, (_, i) => <Seed key={i} x={24 + (i % 5) * 20 + (i % 2) * 4} y={214 + Math.floor(i / 5) * 24 + (i % 3) * 3} r={i * 41} s={1.6} />)}
      <Kid x={66} y={360} s={0.7} sp="raccoon" mood={mood} />
    </Svg>
  );
}

export function AvaMotivation() {
  return (
    <Svg>
      <rect width="600" height="400" fill="#DDF1FA" />
      <circle cx="520" cy="62" r="34" fill="#FFE08A" />
      {/* fence */}
      {Array.from({ length: 13 }, (_, i) => (
        <path key={i} d={`M${i * 48 - 4} 400 V236 L${i * 48 + 16} 222 L${i * 48 + 36} 236 V400 Z`} fill={i % 2 ? "#F4DDB0" : "#ECCF98"} />
      ))}
      <rect y="262" width="600" height="12" fill="#D8B479" />
      <rect y="350" width="600" height="50" fill="#7CC46B" />
      {/* the sunflower she pictures, taller than the fence and her */}
      <g className="pa-grow">
        <rect x="394" y="118" width="12" height="240" fill="#4FA046" />
        <path d="M400 270 Q440 230 476 246 Q446 284 400 276 Z" fill="#5FB24F" />
        <path d="M400 210 Q360 172 326 186 Q352 222 400 216 Z" fill="#5FB24F" />
        <g className="pa-turn"><g transform="translate(400 108)">
          {Array.from({ length: 16 }, (_, i) => <ellipse key={i} cx="0" cy="-44" rx="13" ry="26" fill={i % 2 ? "#FFC93C" : "#FFB01F"} transform={`rotate(${i * 22.5})`} />)}
          <circle r="34" fill="#8A5A35" /><circle r="24" fill="#6B4226" />
          {Array.from({ length: 10 }, (_, i) => <circle key={i} cx={Math.cos(i * 0.63) * 14} cy={Math.sin(i * 0.63) * 14} r="3" fill="#A8774D" />)}
        </g></g>
      </g>
      {/* height marks: the sunflower against Ava */}
      <rect x="540" y="120" width="8" height="240" fill="#FFFFFF" />
      {[0, 1, 2, 3, 4, 5].map((k) => <rect key={k} x="528" y={132 + k * 40} width="20" height="5" fill="#FFFFFF" />)}
      <Kid x={180} y={300} s={1.05} sp="raccoon" mood="wow" />
      <path d="M180 196 V150" stroke="#FFFFFF" strokeWidth="5" strokeDasharray="8 8" />
      <path d="M170 160 L180 146 L190 160" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function SeedRows() {
  return (
    <g>
      {Array.from({ length: 15 }, (_, i) => <Seed key={i} x={14 + (i % 5) * 34} y={14 + Math.floor(i / 5) * 32} r={(i * 37) % 50 - 25} s={1.2} />)}
    </g>
  );
}
