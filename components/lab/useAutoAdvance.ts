"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/**
 * A slideshow index that moves on by itself while its block is on screen: every `ms` it steps to the next of `count`
 * items and wraps. A tap or key press (`pick`) jumps there and holds still for a while before moving on again.
 * Paused off screen, in a hidden tab, and for people who ask for reduced motion.
 */
export function useAutoAdvance(count: number, ref: RefObject<HTMLElement | null>, ms = 3600) {
  const [index, setIndex] = useState(0);
  const holdUntil = useRef(0);
  const seen = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => (seen.current = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    const t = window.setInterval(() => {
      if (!seen.current || document.hidden || Date.now() < holdUntil.current) return;
      setIndex((i) => (i + 1) % count);
    }, ms);
    return () => {
      io.disconnect();
      window.clearInterval(t);
    };
  }, [count, ms, ref]);

  const pick = useCallback((i: number) => {
    holdUntil.current = Date.now() + 9000;
    setIndex(i);
  }, []);

  return [index, pick] as const;
}
