"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Car } from "../Icons";
import { Star } from "../Card";

type Step = { title: string; body: string; alt: string; screen: string; img?: string; pic?: ReactNode };

/**
 * "How it works" as a sand road from the day map: four stops, the road drawn through them, and on wide screens the
 * map's red car drives along it as the page scrolls. Each stop wins its star when the car reaches it.
 */
export function RoadSteps({ steps }: { steps: Step[] }) {
  const box = useRef<HTMLDivElement>(null);
  const stops = useRef<(HTMLSpanElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [d, setD] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [wideRoad, setWideRoad] = useState(true);
  const [car, setCar] = useState<{ x: number; y: number; a: number; flip: boolean } | null>(null);
  const [reached, setReached] = useState(0);

  // Build the road through the stops' centres, re-measured on resize.
  useLayoutEffect(() => {
    const build = () => {
      const el = box.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const pts = stops.current.filter(Boolean).map((s) => {
        const b = s!.getBoundingClientRect();
        return { x: b.left - r.left + b.width / 2, y: b.top - r.top + b.height / 2 };
      });
      if (pts.length < 2) return;
      const wide = pts[1].x - pts[0].x > 40;
      let p = `M ${wide ? -40 : pts[0].x} ${wide ? pts[0].y : pts[0].y - 60} L ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1];
        const b = pts[i];
        if (wide) {
          const mx = (a.x + b.x) / 2;
          p += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
        } else {
          const my = (a.y + b.y) / 2;
          p += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
        }
      }
      const last = pts[pts.length - 1];
      p += wide ? ` L ${r.width + 40} ${last.y}` : ` L ${last.x} ${last.y + 60}`;
      setD(p);
      setWideRoad(wide);
      setSize({ w: r.width, h: r.height });
    };
    build();
    window.addEventListener("resize", build);
    // the step pictures load late (lazy) and push the cards down, so re-measure whenever the block changes size
    const ro = new ResizeObserver(() => build());
    if (box.current) ro.observe(box.current);
    return () => {
      window.removeEventListener("resize", build);
      ro.disconnect();
    };
  }, []);

  // Drive the car with the scroll position. On a phone the road runs down the left edge, so the car drives nose down
  // and a stop counts as reached once the car is level with it.
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !d) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let lastX = -1;
    let flip = false;
    const tick = () => {
      raf = 0;
      const el = box.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const len = path.getTotalLength();
      let at: number;
      if (reduce) at = len;
      else if (wideRoad) at = Math.min(1, Math.max(0, (window.innerHeight * 0.62 - r.top) / (r.height * 0.9))) * len;
      else {
        // phones: the road runs straight down, so keep the car level with the middle of the screen (it goes down as
        // the page does), clamped to the ends of the road
        const target = window.innerHeight * 0.5 - r.top;
        let lo = 0;
        let hi = len;
        for (let k = 0; k < 18; k++) {
          const mid = (lo + hi) / 2;
          if (path.getPointAtLength(mid).y < target) lo = mid;
          else hi = mid;
        }
        at = lo;
      }
      const pt = path.getPointAtLength(at);
      const ahead = path.getPointAtLength(Math.min(len, at + 4));
      const a = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
      if (lastX >= 0 && Math.abs(pt.x - lastX) > 0.5) flip = pt.x < lastX;
      lastX = pt.x;
      // driving back (scrolling up) the car is mirrored to face left; a mirrored car already points the other way along
      // the same slope, so it takes the road's own angle (turning it by 180 as well tipped it the wrong way)
      setCar(wideRoad ? { x: pt.x, y: pt.y, a: Math.max(-35, Math.min(35, a)), flip } : { x: pt.x, y: pt.y, a: 90, flip: false });
      // a stop is reached when the car has passed its centre
      const n = stops.current.filter((s) => {
        if (!s) return false;
        const b = s.getBoundingClientRect();
        return wideRoad ? b.left - r.left + b.width / 2 <= pt.x + 2 : b.top - r.top + b.height / 2 <= pt.y + 2;
      }).length;
      setReached(n);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [d, wideRoad]);

  return (
    <div className="hm-road" ref={box}>
      <svg className="hm-road-svg" width={size.w} height={size.h} aria-hidden="true">
        <path d={d} fill="none" stroke="#D9B87C" strokeWidth="34" strokeLinecap="round" />
        <path ref={pathRef} d={d} fill="none" stroke="#EED7A4" strokeWidth="28" strokeLinecap="round" />
        <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" opacity="0.9" />
      </svg>
      {car ? (
        <div className="hm-road-car" style={{ transform: `translate(${car.x - 36}px, ${car.y - 40}px) rotate(${car.a}deg)` }} aria-hidden="true">
          <div style={{ transform: car.flip ? "scaleX(-1)" : undefined }}>
            <Car />
          </div>
        </div>
      ) : null}
      <ol className="hm-steps">
        {steps.map((s, i) => (
          <li key={s.title} className={`hm-step${i < reached ? " reached" : ""}`}>
            <span className="hm-stop" ref={(el) => { stops.current[i] = el; }}>
              <b>{i + 1}</b>
              <span className="hm-stop-star"><Star size={26} /></span>
            </span>
            <span className="lab-card hm-step-card">
              <span className="lab-card-pic hm-step-pic">
                {/* images captured from StepScreens.tsx (the square rebuilds of the app screens), so nothing is selectable */}
                {s.pic ?? <img src={s.img ?? `/lab/steps/${s.screen}.webp`} alt={s.alt} width={640} height={640} loading="lazy" draggable={false} />}
              </span>
            </span>
            <h3 className="lab-h3">{s.title}</h3>
            <p className="lab-body">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
