// The app's two card styles (cominilab-app-v3/src/v3.css): the home picture card (.c8-card) and the library card
// (.v3-card), plus the gold star badge and a landmark from the day map.
import type { CSSProperties, ReactNode } from "react";
import * as ART from "@/lib/lab/art.js";

export const Star = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4L2.8 9.3l6.4-.8z" fill="#FDBE35" stroke="#E0A92A" strokeWidth={1.8} strokeLinejoin="round" />
  </svg>
);

type PicProps = {
  img: string;
  alt: string;
  name: ReactNode;
  dot?: string;
  star?: boolean;
  tilt?: number;
  className?: string;
  style?: CSSProperties;
  picStyle?: CSSProperties;
};

/** The home card: picture with a white margin, light frame, hard shadow, a name tag stuck over its bottom edge. */
export function PicCard({ img, alt, name, dot, star, tilt = 0, className = "", style, picStyle }: PicProps) {
  return (
    <span className={`lab-card ${className}`} style={{ rotate: `${tilt}deg`, ...style }}>
      <span className="lab-card-pic" style={picStyle}>
        <img src={img} alt={alt} loading="lazy" />
      </span>
      <span className="lab-card-tag">
        {dot ? <i style={{ background: dot }} /> : null}
        {name}
      </span>
      {star ? <span className="lab-card-badge"><Star size={30} /></span> : null}
    </span>
  );
}

type ArtFn = () => string;
const ARTS = ART as unknown as Record<string, ArtFn>;

/**
 * A landmark from the day map (lib/lab/art.js, copied from cominilab-map/data/art.js), standing on a white
 * pedestal like on the map. `name` is the art function, e.g. "frogArt".
 */
export function Landmark({ name, size = 96, pedestal = true, className = "", style }: { name: string; size?: number; pedestal?: boolean; className?: string; style?: CSSProperties }) {
  const fn = ARTS[name];
  const svg = fn ? fn() : "";
  return (
    <svg className={className} style={style} width={size} height={size * 0.9} viewBox="-40 -62 80 72" aria-hidden="true">
      {pedestal ? (
        <g>
          <ellipse cx="3" cy="5" rx="34" ry="8" fill="#E6E6E6" />
          <ellipse cx="0" cy="2" rx="34" ry="8" fill="#FFFFFF" stroke="#D9D9D9" strokeWidth="1.5" />
        </g>
      ) : null}
      <g dangerouslySetInnerHTML={{ __html: svg }} />
    </svg>
  );
}
