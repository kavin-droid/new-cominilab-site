"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Coco } from "../motion/CocoLive";
import "./care-flip.css";

/**
 * "Children learn better when they care" (owner, 2026-11-26), a text-only section that holds still while you scroll:
 *  1. "Children learn when they're told." in the faint grey of "But does it actually work?"; the app's characters
 *     (plain faces) peek in at the edges of the screen, not ready to come closer.
 *  2. Coco appears on the first word and it turns black; each hop lands him on the next word, which turns black as he
 *     lands. Where the word changes, the new one slides up from below as he lands ("better" comes in, "they're"
 *     becomes "they", "told." becomes "care.", each letter of "care" in its own hand). Line one, then line two.
 *  3. The highlight lands, Coco hops off beside the line, and the characters, happy now, come in and gather round it.
 * Reduced motion shows the finished line with everyone gathered.
 */
type W = { from: string; to: string; line: 1 | 2 };
const WORDS: W[] = [
  { from: "Children", to: "Children", line: 1 },
  { from: "learn", to: "learn", line: 1 },
  { from: "", to: "better", line: 1 },
  { from: "when", to: "when", line: 2 },
  { from: "they’re", to: "they", line: 2 },
  { from: "told.", to: "care.", line: 2 },
];
const N = WORDS.length;
const HANDS = ["hand", "serif", "mono", "round"]; // "care", one hand per letter
const CAST = [
  { who: "squirrel", peek: "left", top: 18 },
  { who: "arcticFox", peek: "bottom", left: 22 },
  { who: "raccoon", peek: "right", top: 26 },
  { who: "penguin", peek: "bottom", left: 74 },
  { who: "polarBear", peek: "left", top: 66 },
  { who: "meerkat", peek: "right", top: 70 },
];

function Care() {
  return (
    <>
      {[..."care."].map((ch, i) => <span key={i} className={i < 4 ? `cf-h h-${HANDS[i]}` : undefined}>{ch}</span>)}
    </>
  );
}

export function CareFlip() {
  const box = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const coco = useRef<HTMLSpanElement>(null);
  const [p, setP] = useState(0);
  const [still, setStill] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); setP(1); return; }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = box.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);

  // the beats: Coco appears on "Children" at 0.1, lands on a new word every 0.09, hops off at 0.66, the cast gathers at 0.74
  const step = p < 0.1 ? 0 : Math.min(N, Math.floor((p - 0.1) / 0.09) + 1); // words he has landed on
  const done = step >= N;
  const off = done && p >= 0.66;
  const gather = p >= 0.74;
  const spot = step === 0 ? -1 : off ? N : step - 1; // the word he stands on (N: beside the line)

  const [hop, setHop] = useState(0);
  useLayoutEffect(() => {
    const st = stage.current, c = coco.current;
    if (!st || !c || spot === -1) return;
    const a = st.getBoundingClientRect();
    let x: number, y: number;
    if (spot === N) {
      const last = st.querySelector<HTMLElement>(`[data-w="${N - 1}"]`)!.getBoundingClientRect();
      if (a.right - last.right > 90) { x = last.right - a.left + 44; y = last.bottom - a.top - 10; }
      else { const b = st.querySelector<HTMLElement>(`[data-w="2"]`)!.getBoundingClientRect(); x = b.left - a.left + b.width / 2; y = b.top - a.top + b.height * 0.16; }
    } else {
      const r = st.querySelector<HTMLElement>(`[data-w="${spot}"]`)!.getBoundingClientRect();
      x = r.left - a.left + r.width / 2;
      y = r.top - a.top + r.height * 0.16; // the top of the letters, not of the line box
    }
    c.style.setProperty("--x", `${x}px`);
    c.style.setProperty("--y", `${y}px`);
    setHop((h) => h + 1);
  }, [spot, still]);

  const word = (i: number) => {
    const w = WORDS[i], on = i < step, swap = w.from !== w.to;
    return (
      <span key={i} className={`cf-w${on ? " on" : ""}${swap ? " swap" : ""}${w.from ? "" : " new"}`} data-w={i}>
        {swap && w.from ? <span className="cf-from">{w.from}</span> : null}
        <span className="cf-to">{i === N - 1 ? <Care /> : w.to}</span>
      </span>
    );
  };
  const line = (n: 1 | 2) => WORDS.map((w, i) => (w.line === n ? i : -1)).filter((i) => i >= 0);

  const cls = ["cf", still && "still", step > 0 && "arrived", done && "done", off && "off", gather && "gather"].filter(Boolean).join(" ");
  return (
    <section className={cls} ref={box} aria-label="Children learn better when they care.">
      <div className="cf-stick">
        <div className="cf-stage" ref={stage}>
          {CAST.map((c, i) => (
            <span
              key={c.who}
              className={`cf-cast from-${c.peek} c${i}`}
              style={{ ["--top" as string]: c.top !== undefined ? `${c.top}%` : undefined, ["--left" as string]: c.left !== undefined ? `${c.left}%` : undefined, ["--i" as string]: i }}
            >
              <img className="plain" src={`/lab/cast/roster/${c.who}Default.svg`} alt="" width={96} height={96} draggable={false} />
              <img className="happy" src={`/lab/cast/roster/${c.who}Happy.svg`} alt="" width={96} height={96} draggable={false} />
            </span>
          ))}
          <p className="cf-line" aria-hidden="true">
            {/* the highlight lands on what changed: "better" and the whole of "when they care." */}
            <span className="cf-row r1">{word(0)} {word(1)} <span className="cf-hl">{word(2)}</span></span>
            <span className="cf-row r2"><span className="cf-hl">{line(2).map((i, k) => <span key={i}>{k > 0 ? " " : null}{word(i)}</span>)}</span></span>
          </p>
          <span className="cf-coco" ref={coco} aria-hidden="true">
            <span className="cf-coco-jump" key={hop}>
              <Coco size={64} mood={done ? "happy" : step > 2 ? "wink" : "look"} />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
