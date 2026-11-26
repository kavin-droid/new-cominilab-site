"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { InlineArt } from "../motion/InView";
import { ParentBear, type BearMood } from "./ParentBear";
import { STRUGGLES, StrugglePhoto } from "./Struggles";

export type Worry = {
  title: string;
  noMore: string;
  line: string;
  art: string;
  motion: string;
  calm: string;
  alt: string;
  calmAlt: string;
  tilt: number;
};

const STRUGGLE_MS = 3800;
const CALM_MS = 3600;
const PAUSE_MS = 3000;

// where the four struggle photos float around the bear (centre of each, % of the stage), their tilt, and where each
// flies off to when the "No more" cards take over
const SPOTS = [
  { x: 38, y: 17, r: -2, out: [-20, -60] },
  { x: 14, y: 36, r: -4, out: [-64, -20] },
  { x: 67, y: 80, r: 3, out: [30, 60] },
  { x: 76, y: 20, r: 3, out: [50, -50] },
  { x: 25, y: 76, r: 3, out: [-50, 50] },
  { x: 88, y: 66, r: -3, out: [64, 30] },
];
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (k: number) => 1 - Math.pow(1 - k, 3);

/**
 * "We've been there. We get it." told with the scroll (owner, 2026-11-24). The parent bear alone in the middle first. The
 * six struggle photos slide up from below one at a time and the bear looks at each as it lands; by the third it is
 * worried, and by the fifth its eyes squeeze shut (> <). Then the photos go, the bear moves up to the top,
 * the heading appears under it, and the three "No more …" cards come in right below the heading one at a time; each
 * plays its worry, then resolves. The bear turns happy as it moves up, before the heading comes in. Phones and reduced motion: the same story, in
 * order, scrolling normally.
 */
const BIG = 240; // the bear alone, px
const SMALL = 104; // the bear over the heading, px
export function WeGetYou({ heading, worries }: { heading: ReactNode; worries: Worry[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const slot = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"sticky" | "flow">("flow");
  const [p, setP] = useState(0);
  const [near, setNear] = useState(false);
  const [resolved, setResolved] = useState(0);
  const row = useRef<HTMLUListElement>(null);
  const [geo, setGeo] = useState({ w: 1200, h: 800, sx: 600, sy: 120 });

  useEffect(() => {
    // the scroll sequence runs on phones too (owner, 2026-11-25); only a very short window or reduced motion gets the plain stack
    const pick = () => setMode(window.innerHeight >= 520 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "sticky" : "flow");
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  useEffect(() => {
    if (mode !== "sticky") return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(clamp(-r.top / Math.max(1, r.height - window.innerHeight)));
      if (r.top < window.innerHeight * 0.55) setNear(true); // the bear's note draws itself once the section comes up
      measure(); // the column shifts as cards come in (on a phone they replace each other), so follow the slot
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    // where the small bear ends up: the slot above the heading
    const measure = () => {
      const st = stage.current, sl = slot.current;
      if (!st || !sl) return;
      const a = st.getBoundingClientRect(), b = sl.getBoundingClientRect();
      const next = { w: a.width, h: a.height, sx: b.left - a.left + b.width / 2, sy: b.top - a.top + b.height / 2 };
      setGeo((g) => (Math.abs(g.w - next.w) + Math.abs(g.h - next.h) + Math.abs(g.sx - next.sx) + Math.abs(g.sy - next.sy) < 1 ? g : next));
    };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    const ro = new ResizeObserver(measure);
    if (stage.current) ro.observe(stage.current);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); ro.disconnect(); };
  }, [mode]);

  // the beats: the six photos rise in 0.06 apart from 0.04; they leave 0.44 to 0.52 while the bear moves up (0.44 to
  // 0.56); the heading 0.55 to 0.62; the cards at 0.66, 0.74, 0.82
  const inAt = (i: number) => 0.04 + i * 0.06;
  const inK = (i: number) => ease(clamp((p - inAt(i)) / 0.055));
  const outK = ease(clamp((p - 0.44) / 0.08));
  const shrink = ease(clamp((p - 0.44) / 0.12));
  const headK = ease(clamp((p - 0.55) / 0.07));
  const shown = mode === "sticky" ? (p >= 0.82 ? 3 : p >= 0.74 ? 2 : p >= 0.66 ? 1 : 0) : 3;
  const landed = STRUGGLES.filter((_, i) => inK(i) > 0.6).length;
  const overwhelmed = landed >= 5 && outK < 1;
  // the bear looks at the newest photo; worried at the third; > < once all four are there; brighter as cards resolve
  const look = landed > 0 && !overwhelmed && outK < 0.5 ? SPOTS[landed - 1] : null;
  const gaze: [number, number] | undefined = look ? [((look.x - 50) / 50) * 3.4, ((look.y - 50) / 50) * 2.6] : undefined;
  // after the photos clear the bear stays worried; it calms as the "No more" cards come in and turns happy only once
  // all three are there (owner, 2026-11-25)
  const relief = mode === "sticky" ? shown : resolved;
  const settled: BearMood = relief >= 3 ? "happy" : relief > 0 ? "calm" : "worried";
  const mood: BearMood = shrink > 0.3 ? settled : overwhelmed ? "dizzy" : landed >= 3 ? "worried" : "idle";
  // on a phone the cards sit in a row you can swipe; each new one slides the row along to it
  useEffect(() => {
    const ul = row.current;
    if (!ul || mode !== "sticky" || !shown || window.innerWidth >= 900) return;
    const li = ul.children[shown - 1] as HTMLElement | undefined;
    if (li) ul.scrollTo({ left: li.offsetLeft - (ul.clientWidth - li.offsetWidth) / 2, behavior: "smooth" });
  }, [shown, mode]);

  if (mode === "flow") {
    return (
      <div className="wg2 flow" ref={wrap}>
        <div className="wg2-bear-flow"><ParentBear size={150} mood={settled} label="The parent bear" /></div>
        <div className="wg2-photos-flow">{STRUGGLES.map((s, i) => <div key={s.title} className="wg2-photo-flow" style={{ rotate: `${SPOTS[i].r * 0.5}deg` }}><StrugglePhoto s={s} playing /></div>)}</div>
        <h2 id="get-title" className="lab-h2 wg2-h">{heading}</h2>
        <ul className="hm-pains wg2-row">{worries.map((w) => <WorryCard key={w.title} w={w} visible flow onResolved={() => setResolved((n) => n + 1)} />)}</ul>
      </div>
    );
  }

  // on a phone the bear is drawn smaller (it is scaled, so its drawing stays crisp)
  const big = Math.min(BIG, geo.w * 0.5);
  const cx = geo.w / 2 + (geo.sx - geo.w / 2) * shrink;
  const cy = geo.h / 2 + (geo.sy - geo.h / 2) * shrink;
  const k = (big / BIG) * (1 + (SMALL / big - 1) * shrink);
  const noteK = clamp((p - inAt(0)) / 0.03);
  return (
    <div className="wg2 sticky" ref={wrap}>
      <div className="wg2-stick" ref={stage}>
        {/* the four struggles rise in from below, around the bear */}
        {STRUGGLES.map((s, i) => {
          const kk = inK(i);
          const o = outK;
          const spot = SPOTS[i];
          return (
            <div
              key={s.title}
              className="wg2-photo"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                opacity: Math.min(1, kk * 1.6) * (1 - o),
                transform: `translate(-50%, -50%) translate(${spot.out[0] * o}vw, ${(1 - kk) * 70 + spot.out[1] * o}vh) rotate(${spot.r * (0.4 + 0.6 * kk) * (1 + o)}deg)`,
                pointerEvents: o > 0.5 ? "none" : undefined,
              }}
            >
              <div className="wg2-float" style={{ animationDelay: `${-i * 1.3}s` }}><StrugglePhoto s={s} playing={p < 0.5} /></div>
            </div>
          );
        })}
        {/* before the photos come: a hand-drawn arrow and note say the bear is a parent; it fades as the first photo
            comes in (owner, 2026-11-25) */}
        {noteK < 1 ? (
          <div className={`wg2-who${near ? " on" : ""}`} style={{ ["--l" as string]: `${cx - (big / 2) * k - 12}px`, ["--t" as string]: `${cy - (big / 2) * k + 10}px`, ["--c" as string]: `${cx}px`, ["--tt" as string]: `${cy - (big / 2) * k - 6}px`, opacity: 1 - noteK }} aria-hidden={noteK > 0.5}>
            <span className="wg2-who-t">A parent</span>
            <svg className="wg2-who-arrow" viewBox="0 0 120 90" width="120" height="90" aria-hidden="true">
              <path d="M8 14 C 46 8, 92 22, 104 70" fill="none" stroke="#3B3F57" strokeWidth="3" strokeLinecap="round" pathLength={1} />
              <path d="M92 60 L104 72 L112 56" fill="none" stroke="#3B3F57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} />
            </svg>
          </div>
        ) : null}
        {/* the bear: alone in the middle, then up over the heading */}
        <div className="wg2-bigbear" style={{ width: BIG, transform: `translate(${cx - BIG / 2}px, ${cy - BIG / 2}px) scale(${k})` }}>
          <ParentBear size={BIG} mood={mood} hold label="The parent bear" gaze={gaze} />
        </div>
        {/* then the heading, and the three "No more" cards right under it */}
        <div className="wg2-col">
          <div className="wg2-slot" ref={slot} style={{ width: SMALL, height: SMALL }} />
          <h2 id="get-title" className="lab-h2 wg2-h" style={{ opacity: headK, transform: `translateY(${(1 - headK) * 18}px)` }}>{heading}</h2>
          <ul className="hm-pains wg2-row" ref={row}>
            {worries.map((w, i) => <WorryCard key={w.title} w={w} visible={i < shown} flow={false} onResolved={() => setResolved((n) => n + 1)} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorryCard({ w, visible, flow, onResolved }: { w: Worry; visible: boolean; flow: boolean; onResolved: () => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const [seen, setSeen] = useState(false);
  const [calm, setCalm] = useState(false);
  const [round, setRound] = useState(0);
  const told = useRef(false);

  useEffect(() => {
    if (!flow) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, [flow]);

  const going = flow ? seen : visible;
  useEffect(() => {
    if (!going) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => {
      setCalm(true);
      if (!told.current) { told.current = true; onResolved(); }
    }, reduce ? 0 : STRUGGLE_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [going]);

  useEffect(() => {
    if (!calm) return;
    const t = window.setInterval(() => setRound((r) => r + 1), CALM_MS + PAUSE_MS);
    return () => window.clearInterval(t);
  }, [calm]);

  return (
    <li ref={ref} className={`wg-item${going ? " in" : ""}${calm ? " calm" : ""}`} onMouseEnter={() => calm && setRound((r) => r + 1)}>
      {/* a polaroid like the design's: the scene inside the frame, and only the "No more …" line in the strip once
          the scene has resolved (no worry title) */}
      <span className="pol wg-pol" style={{ rotate: `${w.tilt}deg` }}>
        <span className="pol-pic wg-pic">
          {going ? <InlineArt svg={w.art} className={w.motion} label={w.alt} /> : null}
          <span key={round} className={`st-calm${calm ? " go" : ""}`} role="img" aria-label={w.calmAlt} aria-hidden={!calm} dangerouslySetInnerHTML={{ __html: w.calm }} />
        </span>
        {/* the words come in half a second after the card starts playing, so they are read even if you scroll on */}
        <span className="wg-cap"><b>{w.noMore}</b><span>{w.line}</span></span>
      </span>
    </li>
  );
}
