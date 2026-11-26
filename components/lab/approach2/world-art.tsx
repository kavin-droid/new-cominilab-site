import type { ReactNode } from "react";
import { Coin, Strawberry } from "./parts/art";

/**
 * "Start in their world" card pictures (owner, 2026-11-25: "replace the images with illustrations in the same style as
 * the learning has 4 parts section. Don't need characters here"). Drawn like parts/art.tsx: flat straight-on shapes, a
 * hard darker copy as the shadow, the same purple/teal/yellow/wood palette. Each scene is a 320x330 viewBox (the card's
 * picture area); the middle is kept quiet for the play button. Classes wa-* move in world-games.css.
 */

const FONT = { fontFamily: "var(--font-lab-sans), 'DM Sans', Arial, sans-serif" } as const;
const INK = "#3B3757";
const WOOD = "#D49A64";
const WOOD_SH = "#B97F4B";
const WOOD_LIP = "#E2AE7B";
const GRAIN = "#C98D57";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 320 330" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {children}
    </svg>
  );
}

/** a fraction written the school way: number, bar, number */
function Frac({ x, y, n, d, s = 1, fill = INK }: { x: number; y: number; n: number; d: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <text y="-3" textAnchor="middle" fontSize="15" fontWeight="800" style={FONT}>{n}</text>
      <rect x="-7" y="0" width="14" height="2.6" />
      <text y="15" textAnchor="middle" fontSize="15" fontWeight="800" style={FONT}>{d}</text>
    </g>
  );
}

/* ---------- Love Cooking: the counter in the middle of a recipe ---------- */

/** a measuring cup seen from the side, its size on a label */
function Cup({ x, base, w, h, body, rim, n, d }: { x: number; base: number; w: number; h: number; body: string; rim: string; n: number; d: number }) {
  const top = base - h;
  const inset = w * 0.12;
  const shape = `M${x - w / 2} ${top} H${x + w / 2} L${x + w / 2 - inset} ${base} H${x - w / 2 + inset} Z`;
  const handle = `M${x + w / 2 - 2} ${top + 4} H${x + w / 2 + w * 0.5} V${top + 13} H${x + w / 2 - 3} Z`;
  return (
    <g>
      <g fill={WOOD_SH} transform="translate(-6 7)"><path d={shape} /><path d={handle} /></g>
      <path d={handle} fill={rim} />
      <path d={shape} fill={body} />
      <rect x={x - w / 2} y={top} width={w} height="7" fill={rim} />
      <path d={`M${x - w / 2 + 7} ${top + 12} L${x - w / 2 + inset + 5} ${base - 6}`} stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" />
      <rect x={x - 12} y={top + 10} width="24" height="31" fill="#FFFFFF" />
      <Frac x={x} y={top + 25} n={n} d={d} s={0.9} />
    </g>
  );
}

export function KitchenArt() {
  return (
    <Svg>
      <rect width="320" height="330" fill="#FDE7EF" />
      {/* tiles */}
      <path d="M0 34 H320 M0 72 H320 M0 110 H320 M0 148 H320 M0 186 H320" stroke="#F7D4E1" strokeWidth="3" />
      <path d="M40 0 V34 M120 0 V34 M200 0 V34 M280 0 V34 M80 34 V72 M160 34 V72 M240 34 V72 M40 72 V110 M120 72 V110 M200 72 V110 M280 72 V110 M80 110 V148 M160 110 V148 M240 110 V148 M40 148 V186 M120 148 V186 M200 148 V186 M280 148 V186" stroke="#F7D4E1" strokeWidth="3" />
      {/* the recipe card, pinned up */}
      <g transform="rotate(-4 72 86)">
        <rect x="16" y="24" width="112" height="124" fill="#F2C9D8" transform="translate(-7 8)" />
        <rect x="16" y="24" width="112" height="124" fill="#FFFFFF" />
        <rect x="16" y="24" width="112" height="24" fill="#FF7EB6" />
        <text x="72" y="41" textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFFFFF" style={FONT}>Fruit tart</text>
        {[["1", "2", "flour"], ["1", "4", "sugar"], ["1", "3", "milk"]].map(([n, d, w], i) => (
          <g key={w}>
            <Frac x={34} y={76 + i * 30} n={Number(n)} d={Number(d)} s={0.78} />
            <text x="46" y={80 + i * 30} fontSize="12.5" fontWeight="700" fill={INK} style={FONT}>{`cup ${w}`}</text>
          </g>
        ))}
        <circle cx="72" cy="24" r="6" fill="#E8453C" /><circle cx="70" cy="22" r="2" fill="#FF9A90" />
      </g>
      {/* the hanging rail */}
      <rect x="182" y="30" width="126" height="7" fill="#A5A9B8" />
      <rect x="182" y="30" width="126" height="7" fill="#C4C7D2" transform="translate(0 -3)" />
      <g transform="translate(206 37)"><g className="wa-hang">
        <rect x="-2" y="0" width="4" height="54" fill="#A5A9B8" />
        <ellipse cx="0" cy="68" rx="11" ry="16" fill="none" stroke="#A5A9B8" strokeWidth="3.5" />
        <path d="M-6 56 Q0 80 6 56" stroke="#A5A9B8" strokeWidth="3" fill="none" />
        <rect x="-4" y="0" width="8" height="26" fill="#8F6CD0" />
      </g></g>
      <g transform="translate(246 37)"><g className="wa-hang wa-hang2">
        <rect x="-2.5" y="0" width="5" height="62" fill="#D49A64" />
        <ellipse cx="0" cy="74" rx="14" ry="16" fill="#D49A64" />
        <ellipse cx="2" cy="76" rx="9" ry="11" fill="#B97F4B" />
      </g></g>
      <g transform="translate(286 37)"><g className="wa-hang wa-hang3">
        <rect x="-2" y="0" width="4" height="40" fill="#A5A9B8" />
        <rect x="-6" y="40" width="12" height="30" fill="#4AC1BD" />
        <rect x="-6" y="40" width="4" height="30" fill="#7FD6D3" />
      </g></g>
      {/* counter */}
      <rect y="196" width="320" height="134" fill={WOOD} />
      <rect y="196" width="320" height="8" fill={WOOD_LIP} />
      <path d="M0 232 H48 M120 318 H210 M250 226 H320 M10 290 H40" stroke={GRAIN} strokeWidth="3" />
      {/* the mixing bowl with flour and a whisk */}
      <g transform="translate(150 232)"><g className="wa-whisk">
        <rect x="-3" y="-78" width="6" height="40" fill="#8F6CD0" transform="rotate(16)" />
        <g transform="rotate(16)" stroke="#A5A9B8" strokeWidth="3" fill="none">
          <path d="M0 -40 Q-14 -10 0 6 Q14 -10 0 -40" /><path d="M0 -40 Q-6 -10 0 6 Q6 -10 0 -40" />
        </g>
      </g></g>
      <ellipse cx="96" cy="246" rx="50" ry="22" fill="#FFFFFF" />
      <ellipse cx="82" cy="240" rx="18" ry="7" fill="#FFF8EE" />
      <path d="M34 246 H158 Q154 308 96 310 Q38 308 34 246 Z" fill={WOOD_SH} transform="translate(-7 8)" />
      <path d="M34 246 H158 Q154 308 96 310 Q38 308 34 246 Z" fill="#8F6CD0" />
      <rect x="32" y="242" width="128" height="10" fill="#B39AE6" />
      <path d="M48 262 Q52 286 70 298" stroke="#B39AE6" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* flour dust */}
      <g fill="#FFFFFF" opacity="0.85"><circle cx="20" cy="222" r="3" /><circle cx="30" cy="214" r="2" /><circle cx="172" cy="218" r="2.5" /><circle cx="14" cy="306" r="2.5" /></g>
      {/* the measuring cups, biggest to smallest */}
      <Strawberry x={292} y={238} s={0.85} r={30} />
      <Cup x={190} base={314} w={60} h={70} body="#4AC1BD" rim="#2F9C98" n={1} d={2} />
      <Cup x={240} base={318} w={46} h={54} body="#FFD34E" rim="#E0A92A" n={1} d={3} />
      <Cup x={282} base={322} w={36} h={42} body="#FF7EB6" rim="#E0559A" n={1} d={4} />
    </Svg>
  );
}

/* ---------- Always at the ground: the cricket pitch and the scoreboard ---------- */

function Stumps({ x, base, h, gap, w }: { x: number; base: number; h: number; gap: number; w: number }) {
  const sticks = [-gap, 0, gap];
  return (
    <g>
      <g fill="#5E9E4C" transform={`translate(${-w * 0.8} ${w})`}>
        {sticks.map((dx) => <rect key={dx} x={x + dx - w / 2} y={base - h} width={w} height={h} />)}
      </g>
      {sticks.map((dx) => (
        <g key={dx}>
          <rect x={x + dx - w / 2} y={base - h} width={w} height={h} fill="#F4DDB0" />
          <rect x={x + dx - w / 2} y={base - h} width={w * 0.35} height={h} fill="#FFF1D6" />
          <rect x={x + dx - w / 2} y={base - h * 0.2} width={w} height={h * 0.2} fill="#E8C38A" />
        </g>
      ))}
      <rect x={x - gap - w / 2} y={base - h - w * 0.9} width={gap + w * 0.6} height={w * 0.7} fill="#D49A64" />
      <rect x={x + w * 0.1} y={base - h - w * 0.9} width={gap + w * 0.4} height={w * 0.7} fill="#D49A64" />
    </g>
  );
}

function Ball({ x, y, sh = "#5E9E4C" }: { x: number; y: number; sh?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="11" cx="-3" cy="4" fill={sh} />
      <circle r="11" fill="#E8453C" />
      <path d="M-9 -6 Q0 0 9 7" stroke="#FFFFFF" strokeWidth="1.8" fill="none" strokeDasharray="2.5 2.5" />
      <circle cx="-4" cy="-4.5" r="3" fill="#FF9A90" />
    </g>
  );
}

export function GroundArt() {
  return (
    <Svg>
      <rect width="320" height="330" fill="#CFEFF5" />
      <circle cx="44" cy="44" r="22" fill="#FFE08A" />
      <circle cx="44" cy="44" r="15" fill="#FFF1B8" />
      <g className="wa-drift" fill="#FFFFFF">
        <rect x="70" y="70" width="62" height="16" /><rect x="84" y="58" width="32" height="14" />
      </g>
      {/* far trees and the boundary */}
      <path d="M0 132 Q20 112 40 128 Q62 108 86 126 Q110 110 134 128 Q158 112 182 128 L182 150 H0 Z" fill="#6FB25D" />
      <path d="M150 140 Q170 120 196 134 Q222 116 246 132 Q272 118 296 134 Q310 126 320 130 V150 H150 Z" fill="#5E9E4C" />
      <rect y="146" width="320" height="184" fill="#9ED67F" />
      <path d="M0 176 H320 V198 H0 Z M0 232 H320 V262 H0 Z M0 300 H320 V330 H0 Z" fill="#8DCB6E" />
      <rect y="146" width="320" height="6" fill="#FFFFFF" />
      {/* the pitch */}
      <path d="M140 160 H180 L232 330 H88 Z" fill="#C9AE78" transform="translate(-6 0)" />
      <path d="M140 160 H180 L232 330 H88 Z" fill="#E8D3A0" />
      <path d="M134 176 H186 M97 292 H223" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M150 176 V166 M170 176 V166 M114 292 V312 M206 292 V312" stroke="#FFFFFF" strokeWidth="2.5" />
      <Stumps x={160} base={174} h={18} gap={6} w={3} />
      {/* the ball on its way */}
      <ellipse cx="146" cy="244" rx="9" ry="3.5" fill="#C9AE78" />
      <g transform="translate(150 226)"><g className="wa-bounce">
        <circle r="10" fill="#E8453C" />
        <path d="M-8 -6 Q0 0 8 6" stroke="#FFFFFF" strokeWidth="1.8" fill="none" strokeDasharray="2.5 2.5" />
        <circle cx="-3.5" cy="-4" r="2.6" fill="#FF9A90" />
      </g></g>
      <Stumps x={160} base={318} h={70} gap={18} w={8} />
      {/* the bat, leaning on the grass */}
      <g transform="rotate(22 262 316)">
        <g fill="#5E9E4C" transform="translate(-6 6)"><rect x="252" y="216" width="22" height="100" /><rect x="258" y="170" width="10" height="50" /></g>
        <rect x="258" y="170" width="10" height="50" fill="#4AC1BD" />
        <path d="M258 180 H268 M258 192 H268 M258 204 H268" stroke="#2F9C98" strokeWidth="3" />
        <rect x="252" y="216" width="22" height="100" fill="#F4DDB0" />
        <rect x="252" y="216" width="7" height="100" fill="#FFF1D6" />
        <rect x="266" y="216" width="8" height="100" fill="#E8C38A" />
      </g>
      <Ball x={42} y={308} />
      {/* the scoreboard */}
      <rect x="226" y="96" width="8" height="52" fill="#8A6A4A" /><rect x="286" y="96" width="8" height="52" fill="#8A6A4A" />
      <rect x="196" y="20" width="114" height="86" fill="#1F4239" transform="translate(-6 7)" />
      <rect x="196" y="20" width="114" height="86" fill="#2F5D50" />
      <text x="253" y="40" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9FD3C0" letterSpacing="1.5" style={FONT}>RUNS</text>
      <rect x="208" y="48" width="58" height="46" fill="#1F4239" />
      <text x="237" y="85" textAnchor="middle" fontSize="36" fontWeight="800" fill="#FFE08A" style={FONT}>48</text>
      <g transform="translate(288 71)"><g className="wa-pulse">
        <rect x="-16" y="-14" width="32" height="28" fill="#FFD34E" />
        <text y="7" textAnchor="middle" fontSize="18" fontWeight="800" fill={INK} style={FONT}>+4</text>
      </g></g>
      <rect x="300" y="0" width="3" height="20" fill="#8A6A4A" />
      <path className="wa-flag" d="M303 2 L320 8 L303 15 Z" fill="#FF7EB6" />
    </Svg>
  );
}

/* ---------- Enjoy Shopping: the shop counter, the basket and the money ---------- */

function Jar({ x, base, lid, dots }: { x: number; base: number; lid: string; dots: string }) {
  return (
    <g>
      <rect x={x - 17} y={base - 42} width="34" height="42" fill={WOOD_SH} transform="translate(-4 4)" />
      <rect x={x - 17} y={base - 42} width="34" height="42" fill="#E6F6F8" />
      <g fill={dots}><circle cx={x - 8} cy={base - 10} r="5" /><circle cx={x + 5} cy={base - 8} r="5" /><circle cx={x - 2} cy={base - 20} r="5" /><circle cx={x + 9} cy={base - 20} r="4" /><circle cx={x - 10} cy={base - 24} r="4" /></g>
      <rect x={x - 12} y={base - 38} width="5" height="22" fill="#FFFFFF" />
      <rect x={x - 19} y={base - 50} width="38" height="10" fill={lid} />
    </g>
  );
}

function Box({ x, base, w, h, c, band }: { x: number; base: number; w: number; h: number; c: string; band: string }) {
  return (
    <g>
      <rect x={x} y={base - h} width={w} height={h} fill={WOOD_SH} transform="translate(-4 4)" />
      <rect x={x} y={base - h} width={w} height={h} fill={c} />
      <rect x={x} y={base - h * 0.62} width={w} height={h * 0.26} fill={band} />
      <circle cx={x + w / 2} cy={base - h * 0.49} r={Math.min(w, h) * 0.14} fill="#FFFFFF" />
    </g>
  );
}

function Apple({ x, y, s = 1, c = "#E8453C", hi = "#FF7A6B" }: { x: number; y: number; s?: number; c?: string; hi?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r="13" fill={c} /><circle cx="-5" cy="-4" r="4" fill={hi} />
      <rect x="-1.5" y="-19" width="3" height="8" fill="#7B482B" /><path d="M1 -15 Q9 -20 12 -12 Q4 -10 1 -15 Z" fill="#4FA046" />
    </g>
  );
}

function Note({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x="-38" y="-19" width="76" height="38" fill={WOOD_SH} transform="translate(-5 6)" />
      <rect x="-38" y="-19" width="76" height="38" fill="#E9A06F" />
      <rect x="-32" y="-13" width="64" height="26" fill="none" stroke="#C97A48" strokeWidth="2" />
      <circle cx="12" cy="0" r="8" fill="#F6C29C" />
      <text x="-14" y="6" textAnchor="middle" fontSize="15" fontWeight="800" fill="#7A3F1E" style={FONT}>10</text>
    </g>
  );
}

export function ShopArt() {
  const scallops = Array.from({ length: 9 }, (_, i) => i * 40);
  return (
    <Svg>
      <rect width="320" height="330" fill="#FFF1CC" />
      {/* awning */}
      {scallops.map((x, i) => <rect key={x} x={x - 20} y="0" width="40" height="30" fill={i % 2 ? "#FFFFFF" : "#FF7EB6"} />)}
      {scallops.map((x, i) => <path key={x} d={`M${x - 20} 30 Q${x} 50 ${x + 20} 30 Z`} fill={i % 2 ? "#FFFFFF" : "#FF7EB6"} />)}
      {/* shelves */}
      <rect x="10" y="116" width="300" height="10" fill={WOOD} />
      <rect x="10" y="126" width="300" height="5" fill={WOOD_SH} />
      <rect x="10" y="196" width="300" height="10" fill={WOOD} />
      <rect x="10" y="206" width="300" height="5" fill={WOOD_SH} />
      <Jar x={36} base={116} lid="#8F6CD0" dots="#FF7EB6" />
      <Jar x={80} base={116} lid="#4AC1BD" dots="#FFD34E" />
      <Box x={206} base={116} w={34} h={52} c="#FFD34E" band="#FF8C2A" />
      <Box x={244} base={116} w={30} h={44} c="#4AC1BD" band="#2F9C98" />
      <Box x={278} base={116} w={26} h={38} c="#B39AE6" band="#8F6CD0" />
      <Apple x={28} y={182} /><Apple x={54} y={182} c="#7CC46B" hi="#A6DD8F" /><Apple x={41} y={160} />
      {/* milk bottles and a loaf */}
      {[200, 226].map((x) => (
        <g key={x}>
          <path d={`M${x - 9} 196 V166 L${x - 5} 156 V148 H${x + 5} V156 L${x + 9} 166 V196 Z`} fill={WOOD_SH} transform="translate(-4 3)" />
          <path d={`M${x - 9} 196 V166 L${x - 5} 156 V148 H${x + 5} V156 L${x + 9} 166 V196 Z`} fill="#FFFFFF" />
          <rect x={x - 9} y="172" width="18" height="12" fill="#9C80D8" />
          <rect x={x - 6} y="144" width="12" height="6" fill="#4AC1BD" />
        </g>
      ))}
      <path d="M252 196 V180 Q252 160 276 160 Q300 160 300 180 V196 Z" fill={WOOD_SH} transform="translate(-4 3)" />
      <path d="M252 196 V180 Q252 160 276 160 Q300 160 300 180 V196 Z" fill="#E8A55A" />
      <path d="M264 168 L270 176 M278 166 L284 174 M290 170 L294 176" stroke={WOOD_SH} strokeWidth="3" strokeLinecap="round" />
      {/* counter */}
      <rect y="226" width="320" height="104" fill={WOOD} />
      <rect y="226" width="320" height="8" fill={WOOD_LIP} />
      <path d="M0 262 H20 M210 318 H320 M160 300 H186" stroke={GRAIN} strokeWidth="3" />
      {/* the basket, full, with its price */}
      <path d="M38 262 Q38 196 92 196 Q146 196 146 262" stroke="#8A5A35" strokeWidth="7" fill="none" />
      <Apple x={70} y={256} s={1.1} />
      <rect x="88" y="222" width="22" height="40" fill="#FFFFFF" /><rect x="88" y="222" width="22" height="9" fill="#4AC1BD" /><rect x="88" y="240" width="22" height="10" fill="#9C80D8" />
      <Apple x={124} y={258} s={0.95} c="#7CC46B" hi="#A6DD8F" />
      <path d="M28 258 H156 L146 314 H38 Z" fill={WOOD_SH} transform="translate(-7 8)" />
      <path d="M28 258 H156 L146 314 H38 Z" fill="#C08A5B" />
      <rect x="26" y="254" width="132" height="10" fill="#8A5A35" />
      <path d="M38 276 H148 M40 294 H146" stroke="#8A5A35" strokeWidth="3" />
      <path d="M58 264 V312 M82 264 V314 M106 264 V314 M130 264 V312" stroke="#A87648" strokeWidth="3" />
      <g transform="translate(146 236)"><g className="wa-swing">
        <path d="M0 0 V24" stroke="#8C88A2" strokeWidth="2.5" />
        <rect x="-26" y="24" width="52" height="36" fill="rgba(0,0,0,0.12)" transform="translate(-4 5)" />
        <rect x="-26" y="24" width="52" height="36" fill="#FFFFFF" />
        <circle cx="0" cy="30" r="2.5" fill="#E8E7F1" />
        <Coin x={-11} y={46} r={8} sh="rgba(0,0,0,0)" />
        <text x="10" y="54" textAnchor="middle" fontSize="20" fontWeight="800" fill={INK} style={FONT}>25</text>
      </g></g>
      {/* the money on the counter */}
      <Note x={222} y={262} r={-8} />
      <Note x={272} y={278} r={7} />
      <Coin x={196} y={308} r={12} />
      <Coin x={230} y={318} r={12} />
      <g className="wa-coin"><Coin x={292} y={316} r={12} /></g>
    </Svg>
  );
}
