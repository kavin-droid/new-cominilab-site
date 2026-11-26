"use client";

import { useEffect, useRef, useState } from "react";
import "./whole-compare.css";

/**
 * "Keep the whole experience" (owner, 2026-11-26): the old site's ComparisonCards (archive-main,
 * components/site/ComparisonCards.tsx) in the CominiLab story look. Two sheets side by side: the bare angles worksheet,
 * faded to grey with a red cross ("Measure this angle."), and the treasure hunt map in full colour with a tick ("Use
 * angles to find the treasure."). White sheets with hard light shadows, square corners, a little tilt. When the pair
 * scrolls in, the grey sheet dims and its cross stamps on, then the map comes up in colour and its tick lands.
 * Reduced motion shows the finished state.
 */
const CARDS = [
  {
    key: "plain",
    src: "/images/approach/resourceAngle.webp",
    w: 784,
    h: 933,
    alt: "A printed worksheet of twelve angles to measure with a protractor, with a blank answer box under each",
    tag: "Just the exercise",
    caption: "Measure this angle.",
  },
  {
    key: "whole",
    src: "/images/approach/resourceTreasure.webp",
    w: 676,
    h: 1026,
    alt: "A treasure hunt map on a grid, with arrows from each start point to a treasure, measured by distance and direction",
    tag: "The whole experience",
    caption: "Use angles to find the treasure.",
  },
] as const;

function Cross() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d="M6 6 L18 18 M18 6 L6 18" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M5 12.5 L10 17.5 L19 7" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function WholeCompare() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`wc${seen ? " in" : ""}`}>
      {CARDS.map((c) => (
        <figure key={c.key} className={`wc-card lab-rise wc-${c.key}`}>
          <div className="wc-sheet">
            <div className="wc-photo">
              <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" draggable={false} />
            </div>
            <span className={`wc-badge ${c.key === "plain" ? "x" : "ok"}`} aria-hidden="true">
              {c.key === "plain" ? <Cross /> : <Tick />}
            </span>
          </div>
          <figcaption className="wc-cap">
            <span className="wc-tag">{c.tag}</span>
            <span className="wc-line">
              {c.key === "whole" ? <span className="lab-mark">{c.caption}</span> : c.caption}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
