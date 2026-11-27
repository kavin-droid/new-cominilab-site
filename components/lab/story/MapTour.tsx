"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The real day map (public/lab-map) playing a day by itself (?tour=1), from the second land on (day=2): the first land
 * is the picture in the closing section, so the tour skips it (owner, 2026-11-25): the car drives to each of today's places, the
 * stars land, the gate opens and it drives on into the next land. It only starts once it is on screen, and it is
 * watched, not played (no taps reach it). Reduced motion keeps the still picture.
 */
// next dev only serves the map by its file name; the static site redirects /lab-map/index.html to /lab-map and drops the
// query (?tour=1&day=2), which turned the tour into the normal talking map, so the folder address is used there
export function MapTour() {
  const box = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  const [still, setStill] = useState(false);
  // the still picture stays over the map until the map has drawn, then fades away (owner, 2026-11-27: the map's own
  // back button showed while it loaded)
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setGo(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="hm-mapstick st-maptour" ref={box}>
      {go ? (
        <span className="cov"><iframe className="cov-in" src={`/lab-map/${process.env.NODE_ENV === "development" ? "index.html" : ""}?tour=1&day=2`} title="A day in CominiLab: the car visits today's five places and the gate opens" tabIndex={-1} style={{ pointerEvents: "none" }} onLoad={() => window.setTimeout(() => setReady(true), 350)} /></span>
      ) : null}
      <img className={`st-maptour-still${ready ? " gone" : ""}`} src="/lab/img/map-day.webp" alt={still ? "Today's map: five places along a road, and a gate to the next land" : ""} width={2120} height={960} />
    </div>
  );
}
