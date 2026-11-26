"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent } from "react";
import { ChevronDown } from "@/components/lab/Icons";
import { LOGICAL, PARTS, type PartKey } from "./parts/data";
import { MYRA, PartTag } from "./parts/scenarios";
import { useReducedMotion } from "./parts/hooks";
import "./parts/parts.css";
import "./arrange.css";

/**
 * "Can you try putting these in order?" (owner, 2026-11-26): a child's week, mixed up. The reader puts four moments
 * back in order by tapping or dragging them into four numbered slots. The section is a sticky scroll stage: the stage
 * holds still under the nav while the reader plays, then the rest of the section's scroll plays the reveal one beat at
 * a time so the eye always knows where to look:
 *   A (not scroll driven): all four placed, the heading folds away, the cards glide into the order the week went and a
 *     yellow note slaps on: "You just helped Karan learn addition!"
 *   B: the note peels off, "Learning has four parts." rises into the heading's spot
 *   C..F: the yellow part labels (#1 Meaning ... #4 Measurement) land on the cards one per step, each with its grey line
 *   G: "See how school teaches it" (and a quiet Start again)
 * Readers who just scroll on without playing are not trapped: after one step of scroll in the play zone the cards fly
 * into the story order on their own (beat A) and the beats play from there. Scrolling back up reverses B..G.
 * Reduced motion: no sticky stage, and once the cards are placed everything shows at once.
 */
const CARDS = Object.fromEntries(MYRA.logical.map((b) => [b.part, b])) as Record<PartKey, (typeof MYRA.logical)[number]>;
/** the tray's shuffled order */
const START: PartKey[] = ["mechanics", "motivation", "measurement", "meaning"];
const EMPTY: (PartKey | null)[] = [null, null, null, null];
const SETTLE = "cubic-bezier(0.34, 1.45, 0.64, 1)";
const GLIDE = "cubic-bezier(0.45, 0, 0.2, 1)";
/** one scroll step, as a share of the viewport's height (with a floor), and the play zone before the cards auto-arrange */
const STEP_VH = 0.42;
const STEP_MIN = 240;
const PLAY_STEPS = 1.2;
/** beats after A (B, C, D, E, F, G) and a little still scroll after the last one */
const BEATS_AFTER = 6;
const TAIL_STEPS = 0.6;
/** the reveal never runs faster than one beat per this, so a fast fling still plays them one by one */
const BEAT_MS = 420;
const LAST: Beat = 7;

/** 0: play. 1: A, the slap. 2: B, the four parts heading. 3..6: label 1..4. 7: G, the way on. */
type Beat = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
type Drag = { id: PartKey; el: HTMLElement; pid: number; x0: number; y0: number; touch: boolean; active: boolean; timer?: number; over: number | "tray" | null };

export function ArrangeIntro() {
  const [slots, setSlots] = useState<(PartKey | null)[]>(EMPTY);
  const [tick, setTick] = useState(0);
  /** settling: all four placed, the cards are finding the story order (before the slap) */
  const [settling, setSettling] = useState(false);
  /** the beat on screen; it chases the beat the scroll asks for, one at a time */
  const [shown, setShown] = useState<Beat>(0);
  const [want, setWant] = useState<Beat>(0);
  const [lifted, setLifted] = useState<PartKey | null>(null);
  const [over, setOver] = useState<number | "tray" | null>(null);
  const [run, setRun] = useState(0);
  /** the tray has gone: the stage re-fits (cards may grow) as the cards glide into the story order */
  const [packed, setPacked] = useState(false);
  const rm = useReducedMotion();
  const cards = useRef(new Map<PartKey, HTMLElement>());
  const slotEls = useRef<(HTMLElement | null)[]>([]);
  const trayEl = useRef<HTMLDivElement>(null);
  const boxEl = useRef<HTMLElement>(null);
  const pinEl = useRef<HTMLDivElement>(null);
  const innerEl = useRef<HTMLDivElement>(null);
  const first = useRef(new Map<PartKey, DOMRect>());
  const flung = useRef<PartKey | null>(null);
  const storyMove = useRef(false);
  const drag = useRef<Drag | null>(null);
  /** a drag just ended: the click a touch screen may send after it is not a tap */
  const swallowUntil = useRef(0);
  const timers = useRef<number[]>([]);
  /** scroll (px into the section) where beat A started; beats B.. are steps after it */
  const base = useRef(0);
  /** the auto-arrange only arms once the reader has been inside the play zone (not when coming back from below) */
  const armed = useRef(false);
  const lastBeatAt = useRef(0);
  const slotsRef = useRef(slots);
  slotsRef.current = slots;
  const shownRef = useRef(shown);
  shownRef.current = shown;
  const settlingRef = useRef(settling);
  settlingRef.current = settling;

  const sticky = !rm;
  const tray = START.filter((k) => !slots.includes(k));
  const full = slots.every(Boolean);
  const parts = shown >= 2;

  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };
  const clearTimers = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };
  useEffect(() => clearTimers, []);

  const snapshot = () => {
    first.current.clear();
    cards.current.forEach((el, k) => first.current.set(k, el.getBoundingClientRect()));
  };
  const commit = (next: (PartKey | null)[], moved: PartKey | null) => {
    flung.current = moved;
    setSlots(next);
    setTick((t) => t + 1);
  };

  /** put a card somewhere: a slot (swapping with whatever is there), back in the tray, or nowhere (it goes home) */
  const place = (id: PartKey, target: number | "tray" | null) => {
    const cur = slotsRef.current;
    const from = cur.indexOf(id);
    const next = [...cur];
    if (typeof target === "number") {
      if (from >= 0) next[from] = cur[target];
      next[target] = id;
    } else if (target === "tray" && from >= 0) next[from] = null;
    commit(next, id);
  };

  const step = () => Math.max(STEP_MIN, window.innerHeight * STEP_VH);
  const nav = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 68;
  /** how far (px) the reader has scrolled into the section's run */
  const into = () => {
    const r = boxEl.current?.getBoundingClientRect();
    return r ? nav() - r.top : -1;
  };

  /* ---------- beat A: all four placed (by the reader or by the auto-arrange) ---------- */
  const beginA = (auto: boolean) => {
    if (settlingRef.current || shownRef.current > 0) return;
    base.current = Math.max(0, Math.min(into(), step() * PLAY_STEPS));
    const cur = slotsRef.current;
    const right = cur.every((k, i) => k === LOGICAL[i]);
    if (rm) {
      if (!right) commit([...LOGICAL], null);
      setPacked(true);
      setShown(LAST);
      setWant(LAST);
      return;
    }
    setSettling(true);
    // the stage on screen whole (it is pinned once the section's top reaches the nav)
    const y = into();
    if (!auto && y < 0 && y > -window.innerHeight) window.scrollBy({ top: -y, behavior: "smooth" });
    // the tray goes and the cards glide into the order the week went (or, if already in it, just into the stage's middle)
    later(() => {
      snapshot();
      storyMove.current = true;
      setPacked(true);
      commit([...LOGICAL], null);
    }, auto ? 120 : right ? 300 : 450);
    // the last card lands at delay + 3 * 90 + 460 ms; a breath on the story order, then the slap
    later(() => {
      setSettling(false);
      lastBeatAt.current = performance.now() + 250; // the slap plays a moment before the next beat may come
      setShown(1);
    }, auto ? 1150 : right ? 1300 : 1450);
  };

  // the reader placed the fourth card
  useEffect(() => {
    if (full && shown === 0 && !settling) beginA(false);
  }, [full]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---------- the scroll: how long the section is, and which beat it asks for ---------- */
  useEffect(() => {
    if (!sticky) return;
    let raf = 0;
    const size = () => setRun(Math.round(step() * (PLAY_STEPS + BEATS_AFTER + TAIL_STEPS)));
    const tick = () => {
      raf = 0;
      const y = into();
      const s = step();
      if (shownRef.current === 0 && !settlingRef.current) {
        if (y < s * PLAY_STEPS * 0.8) armed.current = true;
        if (armed.current && y >= s * PLAY_STEPS) beginA(true);
        return;
      }
      if (settlingRef.current) return;
      const n = y < base.current + s ? 1 : Math.min(LAST, 1 + Math.floor((y - base.current) / s));
      setWant(n as Beat);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const resize = () => { size(); on(); };
    size();
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", resize); if (raf) cancelAnimationFrame(raf); };
  }, [sticky]); // eslint-disable-line react-hooks/exhaustive-deps

  // the beat on screen follows the scroll one beat at a time (forwards with a breath between, backwards quickly)
  useEffect(() => {
    if (!sticky || shown === 0 || settling || want === shown) return;
    const fwd = want > shown;
    const wait = fwd ? Math.max(0, lastBeatAt.current + BEAT_MS - performance.now()) : 90;
    const t = window.setTimeout(() => {
      lastBeatAt.current = performance.now();
      setShown((b) => (fwd ? Math.min(LAST, b + 1) : Math.max(1, b - 1)) as Beat);
    }, wait);
    return () => window.clearTimeout(t);
  }, [want, shown, settling, sticky]);

  // while a card is held on a touch screen, the finger moves the card, not the page
  useEffect(() => {
    const tmove = (e: TouchEvent) => { if (drag.current?.active && e.cancelable) e.preventDefault(); };
    document.addEventListener("touchmove", tmove, { passive: false });
    return () => document.removeEventListener("touchmove", tmove);
  }, []);

  /* ---------- the stage fits the screen: cards shrink if the stage is too short ---------- */
  useLayoutEffect(() => {
    const pin = pinEl.current, inner = innerEl.current, box = boxEl.current;
    if (!pin || !inner || !box) return;
    // the widest card at which the stage's content fits. Captions rewrap as cards narrow, so the height does not even
    // fall steadily with the width: scan down from the natural width (coarse, then fine) and keep the shortest if none fit.
    const fit = () => {
      box.style.removeProperty("--fit-w");
      if (!sticky) return;
      const avail = pin.clientHeight;
      if (inner.scrollHeight <= avail) return;
      const fits = (w: number) => { box.style.setProperty("--fit-w", `${w}px`); return inner.scrollHeight; };
      const top = Math.round(slotEls.current[0]?.getBoundingClientRect().width ?? 300);
      let best = 72, bestH = Infinity;
      for (let w = top - 8; w >= 72; w -= 8) {
        const h = fits(w);
        if (h <= avail) {
          // found a fit: try the few widths just above it
          let ok = w;
          for (let v = w + 2; v < w + 8 && v < top; v += 2) if (fits(v) <= avail) ok = v;
          box.style.setProperty("--fit-w", `${ok}px`);
          return;
        }
        if (h < bestH) { bestH = h; best = w; }
      }
      box.style.setProperty("--fit-w", `${best}px`);
    };
    fit();
    let alive = true;
    document.fonts?.ready.then(() => { if (alive) fit(); });
    const ro = new ResizeObserver(() => fit());
    ro.observe(pin);
    return () => { alive = false; ro.disconnect(); };
  }, [sticky, packed]);

  // FLIP: each card glides (and grows or shrinks) from where it was to its new place and settles with a little spring
  useLayoutEffect(() => {
    if (first.current.size === 0) return;
    if (!rm) {
      const story = storyMove.current;
      cards.current.forEach((el, k) => {
        const a = first.current.get(k);
        if (!a) return;
        const b = el.getBoundingClientRect();
        const dx = a.left - b.left, dy = a.top - b.top;
        const s = b.width > 0 ? a.width / b.width : 1;
        const isFlung = flung.current === k;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(s - 1) < 0.01 && !isFlung) return;
        if (story) {
          // the story order: one card after another, each lifting a little as it travels
          const z = String(10 + Math.round(Math.hypot(dx, dy) / 60));
          el.animate(
            [
              { transform: `translate(${dx}px, ${dy}px) scale(${s})`, zIndex: z },
              { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 22}px) rotate(-1.5deg) scale(${(1 + s) / 2 + 0.04})`, zIndex: z, offset: 0.5 },
              { transform: "none", zIndex: z },
            ],
            { duration: 460, delay: LOGICAL.indexOf(k) * 90, easing: GLIDE, fill: "backwards" },
          );
          return;
        }
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px) scale(${s})${isFlung ? " rotate(-2deg)" : ""}`, zIndex: isFlung ? 30 : 10 },
            { transform: "none", zIndex: isFlung ? 30 : 10 },
          ],
          { duration: isFlung ? 460 : 400, easing: SETTLE },
        );
      });
    }
    first.current.clear();
    flung.current = null;
    storyMove.current = false;
  }, [tick]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---------- tap ---------- */
  const locked = () => shownRef.current > 0 || settlingRef.current || slotsRef.current.every(Boolean);
  const onTap = (id: PartKey) => {
    if (performance.now() < swallowUntil.current) return;
    if (locked()) return;
    snapshot();
    const cur = slotsRef.current;
    if (cur.includes(id)) place(id, "tray");
    else {
      const free = cur.indexOf(null);
      if (free >= 0) place(id, free);
    }
  };

  /* ---------- drag (mouse right away, touch after a short hold so the page still scrolls) ---------- */
  const hit = (x: number, y: number): number | "tray" | null => {
    for (let i = 0; i < 4; i++) {
      const r = slotEls.current[i]?.getBoundingClientRect();
      if (r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return i;
    }
    const t = trayEl.current?.getBoundingClientRect();
    if (t && x >= t.left - 20 && x <= t.right + 20 && y >= t.top - 20 && y <= t.bottom + 20) return "tray";
    return null;
  };

  const activate = (d: Drag) => {
    d.active = true;
    setLifted(d.id);
    try { d.el.setPointerCapture(d.pid); } catch { /* the pointer may already be gone */ }
  };

  const end = (e: PointerEvent, cancelled: boolean) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.pid) return;
    window.clearTimeout(d.timer);
    drag.current = null;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", cancel);
    if (!d.active) return;
    swallowUntil.current = performance.now() + 400;
    snapshot();
    d.el.style.transform = "";
    setLifted(null);
    setOver(null);
    place(d.id, cancelled ? null : d.over);
  };
  const move = (e: PointerEvent) => {
    const d = drag.current;
    if (!d || e.pointerId !== d.pid) return;
    const dx = e.clientX - d.x0, dy = e.clientY - d.y0;
    if (!d.active) {
      if (d.touch) {
        // moved before the hold finished: this is a scroll, not a drag
        if (Math.hypot(dx, dy) > 10) end(e, true);
        return;
      }
      if (Math.hypot(dx, dy) < 5) return;
      activate(d);
    }
    d.el.style.transform = `translate(${dx}px, ${dy}px) rotate(-2deg) scale(1.04)`;
    const o = hit(e.clientX, e.clientY);
    if (o !== d.over) {
      d.over = o;
      setOver(o);
    }
  };
  const up = (e: PointerEvent) => end(e, false);
  const cancel = (e: PointerEvent) => end(e, true);

  const onDown = (id: PartKey) => (e: RPointerEvent<HTMLButtonElement>) => {
    if (drag.current || (e.pointerType === "mouse" && e.button !== 0)) return;
    if (locked()) return;
    const d: Drag = { id, el: e.currentTarget, pid: e.pointerId, x0: e.clientX, y0: e.clientY, touch: e.pointerType !== "mouse", active: false, over: null };
    drag.current = d;
    if (d.touch) d.timer = window.setTimeout(() => { if (drag.current === d) activate(d); }, 170);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", cancel);
  };

  const reset = () => {
    clearTimers();
    armed.current = false;
    setSettling(false);
    setPacked(false);
    setShown(0);
    setWant(0);
    snapshot();
    commit(EMPTY, null);
    // back to the start of the stage, where the play zone is
    const y = into();
    if (sticky && y > 0) window.scrollBy({ top: -y, behavior: "smooth" });
  };

  const card = (id: PartKey, n: number | null) => {
    const b = CARDS[id];
    const i = LOGICAL.indexOf(id);
    const tagged = shown >= 3 + i;
    const label = tagged
      ? `${PARTS[id].n} ${PARTS[id].name}: ${b.line} ${PARTS[id].short}.`
      : n === null ? `${b.line} Place it next.` : full ? `Number ${n}: ${b.line}` : `Number ${n}: ${b.line} Press to take it back out.`;
    return (
      <button
        key={id}
        type="button"
        ref={(el) => { if (el) cards.current.set(id, el); else cards.current.delete(id); }}
        className={`ar-card${lifted === id ? " is-lifted" : ""}${tagged ? " is-tagged" : ""}`}
        onClick={() => onTap(id)}
        onPointerDown={onDown(id)}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        aria-label={label}
        aria-disabled={full || undefined}
      >
        {tagged ? <PartTag part={id} /> : null}
        <span className="ar-pic" aria-hidden="true">{b.art()}</span>
        <span className="ar-cap">
          <span className="ar-line">{b.line}</span>
          {/* always there so the card never changes size; it shows with the label */}
          <span className="ar-short" aria-hidden="true">{PARTS[id].short}</span>
        </span>
      </button>
    );
  };

  const stage = settling ? "is-settle" : shown === 0 ? "is-play" : shown === 1 ? "is-slap" : "is-parts";
  return (
    <section
      id="arrange"
      ref={boxEl}
      className={`lab-section ar ${stage}${full ? " is-full" : ""}${packed ? " is-packed" : ""}${sticky ? " is-sticky" : ""}`}
      style={sticky && run ? ({ "--ar-run": `${run}px` } as CSSProperties) : undefined}
      aria-labelledby={parts ? "arrange-parts-title" : "arrange-title"}
    >
      <div ref={pinEl} className="ar-pin">
        <div ref={innerEl} className="lab-wrap ar-inner">
          {/* the two headings share one spot, so nothing below moves when one gives way to the other */}
          <div className="ar-head">
            <div className="ar-h ar-h-ask" aria-hidden={shown > 0 || settling}>
              <h2 id="arrange-title" className="lab-h2">Can you try putting these in order?</h2>
              <p className="lab-lede">Tap a card or drag it into place.</p>
            </div>
            <div className="ar-h ar-h-parts" aria-hidden={!parts}>
              <h2 id="arrange-parts-title" className="lab-h2">Learning has <span className="lab-mark">four parts.</span></h2>
            </div>
          </div>

          <div className={`ar-board${lifted ? " is-dragging" : ""}`}>
            <div className="ar-stage">
              <ol className="ar-slots" aria-label="The week, in order">
                {slots.map((id, i) => (
                  <li key={i} ref={(el) => { slotEls.current[i] = el; }} className={`ar-slot${id ? " is-full" : ""}${over === i ? " is-over" : ""}${shown >= 3 + i ? " is-tagged" : ""}`} style={{ "--i": i } as CSSProperties}>
                    <span className="ar-num" aria-hidden="true">{i + 1}</span>
                    {/* a hidden stand-in as tall as the tallest card (every caption stacked in one cell), so a slot never
                        changes height when a card lands in it and the stage keeps its size */}
                    <span className="ar-ghost" aria-hidden="true">
                      <span className="ar-pic" />
                      <span className="ar-cap ar-stack">
                        {LOGICAL.map((k) => <span key={k}><span className="ar-line">{CARDS[k].line}</span><span className="ar-short">{PARTS[k].short}</span></span>)}
                      </span>
                    </span>
                    {id ? card(id, i + 1) : (
                      <span className="ar-empty" aria-label={`Place ${i + 1}, empty`}>
                        <span className="ar-big" aria-hidden="true">{i + 1}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              {shown >= 1 && !rm ? (
                <p className="ar-slap" role="status" aria-hidden={parts || undefined}><span>You just helped Karan learn addition!</span></p>
              ) : null}
            </div>

            {/* the foot: the tray while playing, over a hidden full tray so the foot keeps its height as cards leave it
                (nothing jumps); once all four are placed, the way on appears in the same spot */}
            <div className="ar-foot">
              <div className="ar-tray is-ghost" aria-hidden="true">
                {START.map((id) => (
                  <span key={id} className="ar-card"><span className="ar-pic" /><span className="ar-cap"><span className="ar-line">{CARDS[id].line}</span></span></span>
                ))}
              </div>
              {!full ? (
                <div ref={trayEl} className={`ar-tray${over === "tray" ? " is-over" : ""}`} aria-label="Cards to place">
                  {tray.map((id) => card(id, null))}
                </div>
              ) : null}
              {/* once packed the way on keeps its room (hidden) so nothing moves when it appears at the last beat */}
              {packed ? (
                <div className={`ar-btns${shown >= LAST ? " is-on" : ""}`} aria-hidden={shown < LAST || undefined}>
                  <a href="#four-parts" className="lab-btn lab-btn-teal">See how school teaches it <ChevronDown size={20} /></a>
                  <button type="button" className="ar-again" onClick={reset}>Start again</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
