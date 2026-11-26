"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps the learning path: the heading comes in first, then the road and the car, which drives with the scroll; each
 * stop's card fades in as the car reaches it (owner, 2026-11-24). Adds .in when the section comes into view and .car a
 * moment later; story.css does the rest (RoadSteps marks the stops the car has reached).
 */
export function PathIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setIn] = useState(false);
  const [car, setCar] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setIn(true); setCar(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setIn(true);
      window.setTimeout(() => setCar(true), 700);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`pi${inView ? " in" : ""}${car ? " car" : ""}`} data-no-reveal>{children}</div>;
}
