"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "../Icons";
import { LAB_URL } from "@/lib/lab/site";
import { AppDownload } from "./AppDownload";

/**
 * The closing call over the app's own day map (a still of cominilab-app-v3/public/map, day 1: Duck Pond Village).
 * The map drifts slowly once the section is in view, and the card with the call to start sits on it like the
 * map's place cards.
 */
export function FinalScene({
  title = "Find out where your child is today.",
  body = "A few friendly questions. It feels like a game, and it is free.",
  cta = "Take the free check",
  note,
  link = true,
  app = false,
}: { title?: ReactNode; body?: ReactNode; cta?: string; note?: string; link?: boolean; app?: boolean } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGo(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true), { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`hm-final${go ? " go" : ""}`}>
      <img className="hm-final-map" src="/lab/img/map-day.webp" alt="" loading="lazy" />
      <div className="lab-wrap hm-final-in">
        <div className="hm-final-card">
          <h2 id="final-title" className="lab-h2">{title}</h2>
          {body ? <div className="lab-body">{body}</div> : null}
          {/* app: a QR (or, on a phone, the store button) to install the app, instead of the button (owner, 2026-11-25) */}
          {app ? <AppDownload /> : (
            <a className="lab-btn lab-btn-teal lab-btn-lg" href={LAB_URL}>
              {cta} <ArrowRight color="#FFFFFF" />
            </a>
          )}
          {note ? <p className="lab-small">{note}</p> : null}
          {link ? <a className="lab-link" href="/curriculum">Or see what they learn at each age</a> : null}
        </div>
      </div>
    </div>
  );
}
