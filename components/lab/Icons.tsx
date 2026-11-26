// Outline icons in the app's grammar (Iconoir-style): ink, 2px stroke, round joins, never solid.
type P = { size?: number; color?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
});

export const ArrowRight = ({ size = 22, color = "currentColor" }: P) => (
  <svg {...base(size)}><path d="M4 12h15m0 0-6-6m6 6-6 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Check = ({ size = 18, color = "#2E8E8A" }: P) => (
  <svg {...base(size)}><path d="m5 12.5 4.5 4.5L19 7.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const ChevronDown = ({ size = 22, color = "currentColor" }: P) => (
  <svg {...base(size)}><path d="m6 9 6 6 6-6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Send = ({ size = 20, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M5 12h13M12 6l6 6-6 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Play = ({ size = 18, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M7 5.5v13l11-6.5z" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>
);
export const Chart = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M4 20V10m6 10V4m6 16v-8m4 8H2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
);
export const Clock = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" /><path d="M12 7v5l3 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Chat = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M4 5h16v11H9l-5 4z" stroke={color} strokeWidth="2" strokeLinejoin="round" /><path d="M8 9.5h8M8 12.5h5" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
);
export const Book = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5C4.7 20 4 19.3 4 18.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>
);
export const People = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><circle cx="9" cy="8" r="3.5" stroke={color} strokeWidth="2" /><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>
);
export const Lock = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><rect x="5" y="10.5" width="14" height="10" stroke={color} strokeWidth="2" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke={color} strokeWidth="2" /></svg>
);

export const Home = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M3.5 11 12 4l8.5 7M6 9.5V20h12V9.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 20v-5h4v5" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>
);
export const Sprout = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><path d="M12 21v-9" stroke={color} strokeWidth="2" strokeLinecap="round" /><path d="M12 12c0-4 2.5-6.5 7-6.5 0 4.5-2.5 6.5-7 6.5ZM12 14c0-3.2-2-5.2-6.5-5.2 0 3.6 2 5.2 6.5 5.2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>
);
export const Target = ({ size = 22, color = "#0D0D0D" }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" /><circle cx="12" cy="12" r="1" fill={color} /></svg>
);

/** The map's red car with the bear driving (cominilab-map/map.js CAR_ART), facing right. */
export const Car = () => (
  <svg viewBox="-24 -30 48 36" aria-hidden="true">
    <ellipse cx="1" cy="0" rx="16" ry="3.2" fill="rgba(13, 13, 13, .2)" />
    <path d="M18 -8 Q18 -14 12 -14 L6 -14 Q2 -24 -6 -24 Q-12 -24 -14 -16 L-16 -14 Q-18 -13 -18 -9 V-4 H18 Z" fill="#E8453C" />
    <path d="M8 -12.3 H14" stroke="#F47E74" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3.5 -15 Q0.5 -21 -4.5 -21 Q-9 -21 -10.5 -15 Z" fill="#BFE8EC" />
    <circle cx="-4" cy="-16" r="3.2" fill="#B07A4E" />
    <circle cx="-6" cy="-19" r="1.3" fill="#B07A4E" />
    <circle cx="-2" cy="-19" r="1.3" fill="#B07A4E" />
    <circle cx="-2.6" cy="-16.4" r=".7" fill="#1D2433" />
    <rect x="-19" y="-7" width="38" height="4" rx="2" fill="#B8322B" />
    <circle cx="17.2" cy="-10" r="1.8" fill="#FFF3C4" />
    <g transform="translate(-10 -3)"><circle r="4.4" fill="#3A3F47" /><circle r="2.3" fill="#D5D9DE" /></g>
    <g transform="translate(10 -3)"><circle r="4.4" fill="#3A3F47" /><circle r="2.3" fill="#D5D9DE" /></g>
  </svg>
);
