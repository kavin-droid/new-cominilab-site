// "We've been there": six photos of a parent's struggle (owner, 2026-11-24: the scenario only, no bear in them, drawn
// flat and layered like the worry cards in public/lab/img/worry-motion). Each is one small scene on a 400 x 320 stage
// with one motion that tells the struggle; struggles.css plays them.
import type { ReactNode } from "react";
import "./struggles.css";

type Scene = { title: string; ground: string; art: ReactNode };

const W = (props: { children: ReactNode }) => <svg className="uc-svg" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{props.children}</svg>;
const FONT = { fontFamily: "var(--font-lab-sans), DM Sans, sans-serif" };
const Q = ({ x, y, r, i }: { x: number; y: number; r: number; i: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}><g className={`uc-q uc-q${i}`}><path d="M-11 -17 Q-11 -30 0 -30 Q12 -30 12 -19 Q12 -10 4 -6 Q1 -4 1 1" fill="none" stroke="#8B66C9" strokeWidth="7.5" /><circle cx="1" cy="13" r="4.6" fill="#8B66C9" /></g></g>
);
const Clock = ({ x, y, r = 40 }: { x: number; y: number; r?: number }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r={r} fill="#FFFFFF" stroke="#8B74D2" strokeWidth="7" />
    {Array.from({ length: 12 }, (_, k) => <circle key={k} cx={Math.sin((k * Math.PI) / 6) * r * 0.74} cy={-Math.cos((k * Math.PI) / 6) * r * 0.74} r={k % 3 ? 2 : 3.2} fill={k % 3 ? "#CFC6F4" : "#8B74D2"} />)}
    <g transform="rotate(125)"><path className="uc-hour" d={`M0 0 V${-r * 0.45}`} stroke="#26232F" strokeWidth="5.5" strokeLinecap="round" /></g>
    <path className="uc-min" d={`M0 0 V${-r * 0.7}`} stroke="#26232F" strokeWidth="3.5" strokeLinecap="round" />
    <circle r="4.5" fill="#26232F" />
  </g>
);

export const STRUGGLES: Scene[] = [
  {
    // late in the evening at the desk: the clock runs on, the answer gets scribbled out, the crumpled tries pile up
    title: "The homework standoff",
    ground: "#FDE7EF",
    art: (
      <W>
        <rect width="400" height="320" fill="#FDE7EF" />
        {/* the window: it's dark out already */}
        <rect x="26" y="30" width="104" height="78" fill="#FFFFFF" />
        <rect x="32" y="36" width="92" height="66" fill="#3A3F6B" />
        <circle cx="98" cy="58" r="12" fill="#FFF1B8" /><circle cx="104" cy="54" r="11" fill="#3A3F6B" />
        <circle cx="50" cy="52" r="2" fill="#FFF1B8" /><circle cx="66" cy="78" r="1.6" fill="#FFF1B8" /><circle cx="44" cy="88" r="1.4" fill="#FFF1B8" />
        <path d="M78 36 V102 M32 69 H124" stroke="#FFFFFF" strokeWidth="5" />
        <Clock x={326} y={70} />
        {/* the desk */}
        <rect y="214" width="400" height="106" fill="#D49A64" />
        <rect y="214" width="400" height="10" fill="#C2864F" />
        {/* the worksheet */}
        <g transform="rotate(-4 200 228)">
          <rect x="112" y="150" width="176" height="150" fill="#B97F4B" transform="translate(7 7)" />
          <rect x="112" y="150" width="176" height="150" fill="#FFFFFF" />
          <rect x="126" y="162" width="80" height="8" fill="#CFCDDA" />
          {["3 + 4 =", "5 + 2 =", "6 + 3 ="].map((t, r) => (
            <g key={t}>
              <text x="128" y={198 + r * 32} fontSize="17" fontWeight="800" fill="#3B3F57" style={FONT}>{t}</text>
              <rect x="208" y={180 + r * 32} width="40" height="25" fill="none" stroke="#CFCDDA" strokeWidth="2.5" strokeDasharray="5 4" />
            </g>
          ))}
          <path className="uc-scrib" d="M206 184 l40 6 -38 6 40 6 -36 6 38 5" stroke="#F0524A" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
          <ellipse cx="228" cy="226" rx="20" ry="7" fill="#ECE7F3" opacity=".8" />
        </g>
        {/* the pencil, tapping; the eraser */}
        <g className="uc-pencil"><g transform="rotate(-28 92 262)"><rect x="40" y="256" width="96" height="12" fill="#FFC93C" /><rect x="30" y="256" width="11" height="12" fill="#F49AB3" /><path d="M136 256 L152 262 L136 268 Z" fill="#F3D6A8" /><path d="M147 260 L152 262 L147 264 Z" fill="#3B3F57" /></g></g>
        <rect x="310" y="276" width="34" height="18" rx="3" fill="#7FC6EE" transform="rotate(10 327 285)" />
        {/* the crumpled tries */}
        <g className="uc-ball1"><circle cx="344" cy="232" r="17" fill="#FFFFFF" stroke="#DCD5C5" strokeWidth="2.5" /><path d="M334 228 l8 4 7 -7 M336 240 l10 -3" stroke="#DCD5C5" strokeWidth="2.2" fill="none" /></g>
        <g className="uc-ball2"><circle cx="372" cy="250" r="14" fill="#FFFFFF" stroke="#DCD5C5" strokeWidth="2.5" /><path d="M364 247 l6 3 6 -5" stroke="#DCD5C5" strokeWidth="2.2" fill="none" /></g>
        <g className="uc-ball3"><circle cx="64" cy="236" r="13" fill="#FFFFFF" stroke="#DCD5C5" strokeWidth="2.5" /><path d="M57 233 l6 4 5 -5" stroke="#DCD5C5" strokeWidth="2.2" fill="none" /></g>
      </W>
    ),
  },
  {
    // the report on the board says "Good": the stamp lands, and the questions it leaves pop up one by one
    title: "“Good”… at what?",
    ground: "#FDF1D4",
    art: (
      <W>
        <rect width="400" height="320" fill="#FDF1D4" />
        <rect y="270" width="400" height="50" fill="#F1DFB0" />
        {/* the cork board */}
        <rect x="76" y="22" width="248" height="252" fill="#C98F5A" />
        <rect x="86" y="32" width="228" height="232" fill="#E7B984" />
        {[[104, 60], [290, 230], [110, 238], [292, 52]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2.2" fill="#C98F5A" />)}
        <g transform="rotate(3 200 150)">
          <rect x="122" y="46" width="156" height="206" fill="#B5814E" transform="translate(-8 8)" />
          <rect x="122" y="46" width="156" height="206" fill="#FFFFFF" />
          <circle cx="200" cy="54" r="6.5" fill="#F0524A" />
          <rect x="136" y="68" width="128" height="24" fill="#9478D6" />
          <text x="200" y="85" fontSize="12.5" fontWeight="800" textAnchor="middle" fill="#FFFFFF" style={FONT}>REPORT CARD</text>
          {["Maths", "Reading", "Science"].map((t, k) => (
            <g key={t}>
              <text x="138" y={128 + k * 42} fontSize="13" fontWeight="700" fill="#3B3F57" style={FONT}>{t}</text>
              <rect x="138" y={134 + k * 42} width="58" height="5" fill="#ECEAF4" />
            </g>
          ))}
          <g className="uc-stamp"><rect x="206" y="108" width="58" height="30" fill="#DCEBB0" /><text x="235" y="129" fontSize="15" fontWeight="800" textAnchor="middle" fill="#26232F" style={FONT}>Good</text></g>
          <rect x="206" y="150" width="58" height="30" fill="#FDE68A" /><text x="235" y="171" fontSize="15" fontWeight="800" textAnchor="middle" fill="#26232F" style={FONT}>B</text>
          <rect x="206" y="192" width="58" height="30" fill="#ECEAF4" /><text x="235" y="213" fontSize="15" fontWeight="800" textAnchor="middle" fill="#8B8B8B" style={FONT}>?</text>
        </g>
        <Q x={60} y={92} r={-14} i={1} /><Q x={350} y={70} r={12} i={2} /><Q x={346} y={232} r={8} i={3} />
      </W>
    ),
  },
  {
    // the day's jobs (work, cooking, the calendar, the phone) go round and round; the list in the middle stays empty
    title: "No time to plan",
    ground: "#DCF1EF",
    art: (
      <W>
        <rect width="400" height="320" fill="#DCF1EF" />
        <circle cx="200" cy="164" r="116" fill="#C7E9E5" />
        <circle cx="200" cy="164" r="116" fill="none" stroke="#A9DCD6" strokeWidth="3" strokeDasharray="6 10" />
        {/* the list that never gets made */}
        <g transform="rotate(-3 200 166)">
          <rect x="160" y="112" width="80" height="108" fill="#B5814E" />
          <rect x="166" y="120" width="68" height="94" fill="#FFFFFF" />
          <rect x="186" y="106" width="28" height="12" rx="3" fill="#8B74D2" />
          <text x="174" y="138" fontSize="11" fontWeight="800" fill="#3B3F57" style={FONT}>To do</text>
          {[0, 1, 2, 3].map((r) => <g key={r}><rect x="174" y={148 + r * 15} width="9" height="9" fill="none" stroke="#C9C9C9" strokeWidth="2" /><rect x="188" y={150 + r * 15} width={36 - r * 5} height="5" fill="#ECEAF4" /></g>)}
          <rect className="uc-cursor" x="188" y="148" width="2" height="9" fill="#8B74D2" />
        </g>
        <g className="uc-orbit">
          <g transform="translate(200 48)"><g className="uc-keep"><rect x="-30" y="-20" width="60" height="40" fill="#FFFFFF" stroke="#8B74D2" strokeWidth="4" /><rect x="-22" y="-12" width="44" height="22" fill="#CDE7F7" /><rect x="-36" y="20" width="72" height="7" fill="#8B74D2" /></g></g>
          <g transform="translate(316 164)"><g className="uc-keep"><path d="M-28 -6 H28 L22 24 H-22 Z" fill="#FCEBBE" stroke="#8B74D2" strokeWidth="4" strokeLinejoin="round" /><rect x="-32" y="-12" width="64" height="8" fill="#8B74D2" /><path d="M-8 -20 q4 -6 0 -10 M6 -20 q4 -6 0 -10" stroke="#8B74D2" strokeWidth="3" fill="none" strokeLinecap="round" /></g></g>
          <g transform="translate(200 280)"><g className="uc-keep"><rect x="-24" y="-22" width="48" height="44" fill="#FFFFFF" stroke="#8B74D2" strokeWidth="4" /><rect x="-24" y="-22" width="48" height="11" fill="#8B74D2" />{[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={-17 + c * 12} y={-6 + r * 9} width="8" height="5" fill="#E0F0CC" />))}</g></g>
        </g>
      </W>
    ),
  },
  {
    // the tablet that's meant to help: coins rain, the ad wants another tap, the play timer keeps refilling
    title: "Is screen time even learning?",
    ground: "#E8F0FB",
    art: (
      <W>
        <rect width="400" height="320" fill="#E8F0FB" />
        <rect y="266" width="400" height="54" fill="#CFE0F4" />
        <g transform="rotate(-4 200 160)">
          <rect x="94" y="46" width="212" height="206" rx="18" fill="#1F2326" />
          <rect x="106" y="58" width="188" height="182" rx="6" fill="#2B2F45" />
          {Array.from({ length: 6 }, (_, k) => <circle key={k} className={`uc-coin uc-c${k}`} cx={128 + k * 29} cy="84" r="9" fill="#FFC93C" stroke="#E0A92A" strokeWidth="2.5" />)}
          <g className="uc-ad"><rect x="120" y="116" width="160" height="70" fill="#F0524A" /><text x="200" y="146" textAnchor="middle" fontSize="18" fontWeight="800" fill="#FFFFFF" style={FONT}>BUY GEMS!</text><text x="200" y="170" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#FFE3E0" style={FONT}>Watch 1 more ad</text><g transform="translate(270 124)"><circle r="8" fill="#FFFFFF" /><path d="M-3 -3 L3 3 M3 -3 L-3 3" stroke="#F0524A" strokeWidth="2.4" /></g></g>
          <rect x="120" y="202" width="160" height="22" rx="11" fill="#3B4060" /><rect className="uc-timer" x="120" y="202" width="160" height="22" rx="11" fill="#7FC6EE" />
        </g>
        <g className="uc-plus"><rect x="300" y="40" width="58" height="26" rx="13" fill="#FFC93C" /><text x="329" y="58" textAnchor="middle" fontSize="13" fontWeight="800" fill="#26232F" style={FONT}>+50</text></g>
      </W>
    ),
  },
  {
    // every app says it teaches: the badges keep flashing, the magnifier goes from one to the next, none tells you
    title: "Which app actually teaches?",
    ground: "#F1ECFB",
    art: (
      <W>
        <rect width="400" height="320" fill="#F1ECFB" />
        <rect x="128" y="22" width="144" height="276" rx="20" fill="#26232F" />
        <rect x="138" y="40" width="124" height="240" rx="6" fill="#FFFFFF" />
        <rect x="186" y="28" width="28" height="5" rx="2.5" fill="#4B4A57" />
        {Array.from({ length: 9 }, (_, k) => {
          const c = k % 3, r = Math.floor(k / 3);
          const x = 148 + c * 38, y = 58 + r * 56;
          const col = ["#FF8C2A", "#4AC1BD", "#9478D6", "#F0524A", "#4FA046", "#FFC93C", "#7FC6EE", "#E0559A", "#3B4060"][k];
          return (
            <g key={k}>
              <rect x={x} y={y} width="28" height="28" rx="7" fill={col} />
              {k % 3 === 0 ? <text x={x + 14} y={y + 20} textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFFFFF" style={FONT}>{["1", "A", "+"][r]}</text> : <circle cx={x + 14} cy={y + 14} r="6" fill="#FFFFFF" opacity=".85" />}
              <g className={`uc-badge uc-b${k}`}><circle cx={x + 27} cy={y + 2} r="7" fill="#FFC93C" stroke="#FFFFFF" strokeWidth="2" /><path d={`M${x + 27} ${y - 2} l1.2 2.6 2.8 .3 -2.1 1.9 .6 2.8 -2.5 -1.4 -2.5 1.4 .6 -2.8 -2.1 -1.9 2.8 -.3 Z`} fill="#FFFFFF" /></g>
              <rect x={x} y={y + 33} width="28" height="4" fill="#ECEAF4" />
            </g>
          );
        })}
        {/* what every app says */}
        <g className="uc-say uc-s1"><rect x="20" y="60" width="96" height="30" rx="15" fill="#FFFFFF" stroke="#9478D6" strokeWidth="2.5" /><text x="68" y="80" textAnchor="middle" fontSize="13" fontWeight="800" fill="#5A3FC0" style={FONT}>Educational!</text></g>
        <g className="uc-say uc-s2"><rect x="286" y="110" width="94" height="30" rx="15" fill="#FFFFFF" stroke="#4AC1BD" strokeWidth="2.5" /><text x="333" y="130" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1F6F6C" style={FONT}>Smarter kids!</text></g>
        <g className="uc-say uc-s3"><rect x="26" y="210" width="88" height="30" rx="15" fill="#FFFFFF" stroke="#FF8C2A" strokeWidth="2.5" /><text x="70" y="230" textAnchor="middle" fontSize="13" fontWeight="800" fill="#B4560B" style={FONT}>Top rated!</text></g>
        {/* the magnifier, looking from one to the next */}
        <g className="uc-mag"><circle cx="0" cy="0" r="17" fill="#FFFFFF" fillOpacity=".35" stroke="#26232F" strokeWidth="5" /><path d="M12 12 L28 28" stroke="#26232F" strokeWidth="7" strokeLinecap="round" /></g>
        <Q x={340} y={244} r={10} i={1} />
      </W>
    ),
  },
  {
    // the parents' group chat: one message after another about what everyone else's child can already do
    title: "The parents’ group chat",
    ground: "#E3F3E6",
    art: (
      <W>
        <rect width="400" height="320" fill="#E3F3E6" />
        <g transform="rotate(3 200 160)">
          <rect x="112" y="14" width="176" height="300" rx="22" fill="#26232F" />
          <rect x="122" y="30" width="156" height="270" rx="6" fill="#ECE5DA" />
          <rect x="122" y="30" width="156" height="34" fill="#2F8F6B" />
          <circle cx="140" cy="47" r="9" fill="#BDE6D3" />
          <text x="156" y="45" fontSize="10.5" fontWeight="800" fill="#FFFFFF" style={FONT}>Class 1 parents</text>
          <text x="156" y="57" fontSize="8.5" fontWeight="600" fill="#CFEFE0" style={FONT}>32 members</text>
          <g className="uc-msg uc-m1"><rect x="130" y="76" width="128" height="34" rx="8" fill="#FFFFFF" /><text x="138" y="90" fontSize="8.5" fontWeight="800" fill="#E0559A" style={FONT}>Ria&apos;s mum</text><text x="138" y="103" fontSize="9.5" fontWeight="600" fill="#26232F" style={FONT}>Ria can count to 100 now!</text></g>
          <g className="uc-msg uc-m2"><rect x="130" y="118" width="134" height="34" rx="8" fill="#FFFFFF" /><text x="138" y="132" fontSize="8.5" fontWeight="800" fill="#2F7FCB" style={FONT}>Kabir&apos;s dad</text><text x="138" y="145" fontSize="9.5" fontWeight="600" fill="#26232F" style={FONT}>Kabir does times tables!</text></g>
          <g className="uc-msg uc-m3"><rect x="130" y="160" width="120" height="34" rx="8" fill="#FFFFFF" /><text x="138" y="174" fontSize="8.5" fontWeight="800" fill="#8B5CF6" style={FONT}>Anya&apos;s mum</text><text x="138" y="187" fontSize="9.5" fontWeight="600" fill="#26232F" style={FONT}>Is yours reading yet?</text></g>
          <g className="uc-msg uc-m4"><rect x="130" y="202" width="46" height="24" rx="8" fill="#FFFFFF" /><circle className="uc-dot uc-d1" cx="143" cy="214" r="3.2" fill="#9CA3AF" /><circle className="uc-dot uc-d2" cx="153" cy="214" r="3.2" fill="#9CA3AF" /><circle className="uc-dot uc-d3" cx="163" cy="214" r="3.2" fill="#9CA3AF" /></g>
          <rect x="122" y="268" width="156" height="32" fill="#F6F2EA" />
          <rect x="130" y="274" width="112" height="20" rx="10" fill="#FFFFFF" />
          <circle cx="260" cy="284" r="10" fill="#2F8F6B" />
        </g>
        <g className="uc-badge2"><circle cx="300" cy="34" r="16" fill="#F0524A" /><text x="300" y="40" textAnchor="middle" fontSize="15" fontWeight="800" fill="#FFFFFF" style={FONT}>12</text></g>
      </W>
    ),
  },
];

/** one struggle photo: the scene and the caption under it */
export function StrugglePhoto({ s, playing }: { s: Scene; playing: boolean }) {
  return (
    <figure className={`uc${playing ? " go" : ""}`} aria-label={s.title}>
      <span className="uc-pic" style={{ background: s.ground }}>{s.art}</span>
      <figcaption className="uc-cap">{s.title}</figcaption>
    </figure>
  );
}
