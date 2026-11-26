"use client";

import { useEffect, useRef, useState } from "react";
import { MapTour } from "./MapTour";

/**
 * "Put it all together, it's an adventure worth exploring!" (owner, 2026-11-24): a tall frame the map fills (cover).
 * It rises into view as you scroll to it, the day map plays by itself, and it pins in the middle of the screen while
 * the line lands on it as a tilted yellow note. Phones and reduced motion: the map, then
 * the note under it.
 */
const HOLD_VH = 0.7; // how long the map stays pinned, in screen heights
export function MapReveal() {
  const wrap = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [inView, setIn] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const pick = () => setSticky(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); // phones too
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setIn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!sticky) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = wrap.current;
      if (!el) return;
      const stick = el.querySelector(".mr-stick");
      const top = stick ? parseFloat(getComputedStyle(stick).top) || 0 : 0;
      const r = el.getBoundingClientRect();
      // 0 when the map pins in the middle of the screen, 1 when it lets go
      setP(Math.min(1, Math.max(0, (top - r.top) / (window.innerHeight * HOLD_VH))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [sticky]);
  const k = Math.min(1, Math.max(0, (p - 0.15) / 0.4));
  return (
    <div className={`mr${sticky ? " sticky" : ""}${inView ? " in" : ""}`} ref={wrap}>
      <div className="mr-stick">
        <div className="mr-frame"><MapTour /></div>
        <p className={`mr-note${sticky ? (k > 0.05 ? " on" : "") : " on"}`} style={sticky ? { ["--k" as string]: k } : undefined}>
          Put it all together, it&apos;s an adventure worth exploring!
        </p>
      </div>
    </div>
  );
}
