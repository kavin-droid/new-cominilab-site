"use client";

import { useEffect, useRef, type MutableRefObject, type ReactNode } from "react";

/**
 * Polaroids on an arc, the way the app's cards home lays out its cards (cominilab-app-v3 components/V3.tsx, Carousel):
 * the middle card highest and straight, each card further out a little lower, a little smaller and turned a little more
 * (4° a step), all of it scaled from the app's 196px card to our polaroid. Every frame places each card directly (no
 * React render), the same as the app.
 *
 * - `drift`: cards per second the arc moves on its own (the library), looping round (`wrap`); hovering holds it.
 * - otherwise a carousel on a critically damped spring: drag, swipe or wheel and it settles on a card (`onSettle`);
 *   `api.to(i)` glides to a card.
 */
export type ArcApi = { to: (i: number) => void };

type Props = {
  n: number;
  render: (i: number) => ReactNode;
  label: string;
  drift?: number;
  wrap?: boolean;
  start?: number;
  apiRef?: MutableRefObject<ArcApi | null>;
  onSettle?: (i: number) => void;
  /** on first view the cards glide in along the curve from this many places to the right (owner, 2026-11-26) */
  enter?: number;
  /** the card passing the middle changed (a drifting arc), as its index */
  onCentre?: (i: number) => void;
  /** "down" bends the arc the other way: the middle card lowest, the outer ones higher and turned in */
  curve?: "up" | "down";
  className?: string;
};

const APP_CARD = 196; // the app's card width; its arc numbers are for this size
const K = 120; // spring stiffness (as the app's carousel)

export function PolaroidArc({ n, render, label, drift = 0, wrap = false, start = 0, apiRef, onSettle, onCentre, curve = "up", enter = 0, className = "" }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const settle = useRef(onSettle);
  settle.current = onSettle;
  const centre = useRef(onCentre);
  centre.current = onCentre;
  const lastCentre = useRef(-1);
  const s = useRef({ off: 0, enterT0: 0, entered: !enter, p: start, target: start, vel: 0, hover: false, seen: false, resting: true, justDragged: false, drag: null as null | { id: number; x: number; p0: number; moved: boolean; samples: { t: number; x: number }[] } });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const st = s.current;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clampP = (p: number) => (wrap ? p : Math.max(0, Math.min(n - 1, p)));
    const geo = () => {
      const cw = cards.current[0]?.offsetWidth || 332;
      return { cw, u: cw / APP_CARD, step: (cw * 370) / 332, mid: el.clientWidth / 2 };
    };
    const place = () => {
      const { cw, u, step, mid } = geo();
      const vis = mid / step + 0.85;
      cards.current.forEach((c, i) => {
        if (!c) return;
        let t = i - (st.p + st.off);
        if (wrap) { t = ((t % n) + n) % n; if (t > n / 2) t -= n; }
        const a = Math.abs(t);
        const x = mid + t * step - cw / 2;
        const dip = (9 * a + 5 * a * a) * u;
        // a downward curve (a smile): the middle card lowest, the outer ones rising
        const y = curve === "down" ? 26 * u - dip : dip; // the cards just off-centre sit level with the top
        const r = (curve === "down" ? -1 : 1) * Math.sign(t) * (a <= 1 ? 4 * a : 4 + 4 * (a - 1));
        const k = a <= 1 ? 1 - 0.02 * a : Math.max(0.9, 0.98 - 0.04 * (a - 1));
        const o = Math.max(0, Math.min(1, (vis - a) / 0.5));
        c.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(3)}deg) scale(${k.toFixed(4)})`;
        c.style.opacity = String(o);
        c.style.zIndex = String(100 - Math.round(a * 10));
        c.style.visibility = o <= 0 ? "hidden" : "";
        c.style.pointerEvents = o < 0.4 ? "none" : "";
      });
    };

    let raf = 0;
    let last = 0;
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      // the entrance: an offset that eases from `enter` places back to none, so every card travels along the curve
      if (!st.entered) {
        if (still) { st.off = 0; st.entered = true; }
        else {
          if (!st.enterT0) st.enterT0 = now;
          const k = Math.min(1, (now - st.enterT0) / 1700);
          st.off = -enter * Math.pow(1 - k, 3);
          if (k >= 1) { st.off = 0; st.entered = true; }
        }
      }
      if (!st.drag) {
        if (drift && !st.hover && !still) {
          st.p += drift * dt;
          st.target = st.p;
          st.vel = 0;
        } else if (!st.resting) {
          const acc = K * (st.target - st.p) - 2 * Math.sqrt(K) * st.vel;
          st.vel += acc * dt;
          st.p += st.vel * dt;
          if (Math.abs(st.target - st.p) < 0.0008 && Math.abs(st.vel) < 0.002) {
            st.p = st.target;
            st.vel = 0;
            st.resting = true;
            if (!drift) settle.current?.(Math.round(st.p));
          }
        }
      }
      place();
      const ci = ((Math.round(st.p) % n) + n) % n;
      if (ci !== lastCentre.current) { lastCentre.current = ci; centre.current?.(ci); }
      raf = requestAnimationFrame(frame);
    };
    const run = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } };
    const halt = () => { cancelAnimationFrame(raf); raf = 0; };
    if (!st.entered) st.off = -enter; // until it's on screen the cards wait off to the right
    place();
    const io = new IntersectionObserver(([e]) => { st.seen = e.isIntersecting; if (st.seen) run(); else halt(); });
    io.observe(el);
    const ro = new ResizeObserver(() => place());
    ro.observe(el);

    const glide = (target: number) => {
      st.target = clampP(target);
      st.resting = false;
      if (still) { st.p = st.target; st.resting = true; place(); settle.current?.(Math.round(st.p)); }
    };
    if (apiRef) apiRef.current = { to: (i) => glide(i) };

    // drag: the arc follows the pointer 1:1, then settles on the nearest card (or drifts on)
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      st.drag = { id: e.pointerId, x: e.clientX, p0: st.p, moved: false, samples: [{ t: performance.now(), x: e.clientX }] };
    };
    const onMove = (e: PointerEvent) => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      const dx = e.clientX - d.x;
      if (!d.moved && Math.abs(dx) > 6) { d.moved = true; el.classList.add("dragging"); try { el.setPointerCapture(e.pointerId); } catch {} }
      if (!d.moved) return;
      const { step } = geo();
      let p = d.p0 - dx / step;
      if (!wrap) p = p < 0 ? p * 0.35 : p > n - 1 ? n - 1 + (p - n + 1) * 0.35 : p;
      st.p = p;
      d.samples.push({ t: performance.now(), x: e.clientX });
      if (d.samples.length > 6) d.samples.shift();
    };
    const onUp = (e: PointerEvent) => {
      const d = st.drag;
      if (!d || e.pointerId !== d.id) return;
      st.drag = null;
      el.classList.remove("dragging");
      if (!d.moved) return;
      st.justDragged = true;
      window.setTimeout(() => { st.justDragged = false; }, 0);
      const a = d.samples[0], b = d.samples[d.samples.length - 1];
      const v = b.t > a.t ? (b.x - a.x) / (b.t - a.t) : 0; // px per ms
      const { step } = geo();
      if (!drift) glide(Math.round(st.p - (v * 220) / step));
    };
    let wheelT = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      const { step } = geo();
      st.p = clampP(st.p + e.deltaX / step);
      st.target = st.p;
      st.resting = true;
      window.clearTimeout(wheelT);
      if (!drift) wheelT = window.setTimeout(() => glide(Math.round(st.p)), 140);
    };
    const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") st.hover = true; };
    const onLeave = () => { st.hover = false; };
    const onClickCap = (e: MouseEvent) => { if (st.justDragged) { e.stopPropagation(); e.preventDefault(); } };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("click", onClickCap, true);
    return () => {
      halt();
      io.disconnect();
      ro.disconnect();
      window.clearTimeout(wheelT);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("click", onClickCap, true);
      if (apiRef) apiRef.current = null;
    };
  }, [n, wrap, drift, apiRef, curve]);

  return (
    <div className={`parc ${className}`} ref={box} role="group" aria-label={label}>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="parc-slot" ref={(el) => { cards.current[i] = el; }}>{render(i)}</div>
      ))}
    </div>
  );
}
