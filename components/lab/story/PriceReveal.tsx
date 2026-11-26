"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Coco } from "../motion/CocoLive";

/** The plan cards rise in one after the other when the pricing comes into view (owner, 2026-11-25). */
export function PlansIn({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [inView, setIn] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIn(true); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={box} className={`hm-plans pl-in${inView ? " in" : ""}`}>{children}</div>;
}

/**
 * The full plan's price (owner, 2026-11-25): it shows ₹2,988 first; Coco comes in, strikes it through, pushes it to the
 * side, and pulls in ₹1,199. The final line reads ₹1,199, ₹2,988 struck through, a year.
 */
export function PriceReveal() {
  const box = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPhase(5); return; }
    const timers: number[] = [];
    // 1 Coco comes in · 2 the strike · 3 pushed aside · 4 the new price comes in · 5 Coco goes; then, 3s later, the
    // line fades (6), snaps back to ₹2,988 (0) and it all plays again (owner, 2026-11-25: repeat every 3s)
    const run = () => {
      [[700, 1], [1500, 2], [2300, 3], [2800, 4], [4200, 5], [7200, 6], [7500, 0]].forEach(([ms, p]) => timers.push(window.setTimeout(() => setPhase(p), ms)));
      timers.push(window.setTimeout(run, 7500));
    };
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      run();
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach((t) => window.clearTimeout(t)); };
  }, []);
  return (
    <div className={`hm-price pz p${phase}${phase === 0 || phase === 6 ? " snap" : ""}`} ref={box} aria-label="₹1,199 a year, down from ₹2,988">
      <b className="pz-new" aria-hidden="true">₹1,199</b>
      <span className="pz-old" aria-hidden="true"><span>₹2,988</span><i className="pz-strike" /></span>
      <span className="hm-per">a year</span>
      <span className="pz-coco" aria-hidden="true"><Coco size={44} mood={phase >= 4 ? "happy" : phase >= 2 ? "wink" : "look"} /></span>
    </div>
  );
}
