"use client";

import { useEffect, useRef, useState } from "react";
import "./worth-flip.css";

/**
 * The approach page's last word (owner, 2026-11-26), styled like the first version of "Children learn better when they
 * care": one big line holds still while you scroll and changes WORD BY WORD (each new word turns over like a departures
 * board tile, a dropped word goes), and every step still reads:
 *   Children don't need more things to do. / They don't need more things to do. / They need more things to do. /
 *   They need things to do. / They need things worth doing.
 * The highlight then lands on "worth doing." Reduced motion shows the finished line.
 */
const STEPS: string[][] = [
  ["Children", "don’t", "need", "more", "things", "to", "do."],
  ["They", "don’t", "need", "more", "things", "to", "do."],
  ["They", "need", "more", "things", "to", "do."],
  ["They", "need", "things", "to", "do."],
  ["They", "need", "things", "worth", "doing."],
];
const LAST = STEPS.length - 1;

export function WorthFlip() {
  const box = useRef<HTMLElement>(null);
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

  // the whole sentence changes at once, on one scroll (owner, 2026-11-26): every word of the new line turns over in turn
  const step = p >= 0.3 ? LAST : 0;
  const words = STEPS[step];
  const done = step === LAST;
  const key = (w: string, i: number) => `${step}-${w}${i}`;
  const word = (w: string, i: number) => <span key={key(w, i)} className={`wf-w${done ? " turn" : ""}`} style={{ animationDelay: `${i * 70}ms` }}>{w}</span>;
  const run = (from: number, to: number) => words.slice(from, to).map((w, j) => <span key={`s${key(w, from + j)}`}>{j > 0 ? " " : null}{word(w, from + j)}</span>);
  const hlAt = done ? words.indexOf("worth") : -1;
  return (
    <section className={`wf${still ? " still" : ""}`} ref={box} aria-label="Children don’t need more things to do. They need things worth doing.">
      <div className="wf-stick">
        <p className="wf-line" aria-hidden="true">
          {hlAt < 0 ? run(0, words.length) : <>{run(0, hlAt)} <span className="wf-hl">{run(hlAt, words.length)}</span></>}
        </p>
      </div>
    </section>
  );
}
