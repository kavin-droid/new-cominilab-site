"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Coco, type CocoMood } from "../motion/CocoLive";

// "But does it actually work?" (owner's wireframes, 2026-11-25): huge faded words and, over them, a polaroid of Coco on
// pale green with "Tap to see how" under it. The words rise in and the card slides up with the scroll. Tapping the
// card grows it into Coco's walkthrough (the card itself scales into the modal and back):
//   1. a sum in symbols ($ + & = ?) with 15 seconds;
//   2. the same sum with cookies (2 + 3 = ?);
//   3. they were the same sum: each symbol gets its number;
//   4. "See? How you learn matters too", and the approach page.
// The symbols stand in for digits on purpose: that is how a sum looks before the numerals mean anything.
const LIMIT = 15;
const SYM = { a: "$", b: "&", ans: "%", wrong: ["#", "@"] };

// the counters are cookies: the app's own chocolate-chip cookie (cominilab-app-v3 bundles/fair-share treats)
const Counters = ({ n }: { n: number }) => (
  <span className={`dw2-dots n${n}`}>{Array.from({ length: n }, (_, k) => <i key={k} style={{ ["--i" as string]: k }}><img src="/lab/img/cookie.svg" alt="" width={98} height={98} draggable={false} style={{ rotate: `${(k * 47) % 40 - 20}deg` }} /></i>)}</span>
);

function useCountdown(run: boolean, onEnd: () => void) {
  const [left, setLeft] = useState(LIMIT);
  const end = useRef(onEnd);
  end.current = onEnd;
  useEffect(() => {
    if (!run) return;
    setLeft(LIMIT);
    const t0 = Date.now();
    const iv = window.setInterval(() => {
      const l = Math.max(0, LIMIT - Math.floor((Date.now() - t0) / 1000));
      setLeft(l);
      if (l <= 0) { window.clearInterval(iv); end.current(); }
    }, 200);
    return () => window.clearInterval(iv);
  }, [run]);
  return left;
}

type Rect = { left: number; top: number; width: number; height: number };

function Walkthrough({ from, onClosed }: { from: () => Rect | null; onClosed: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [shown, setShown] = useState(false); // the content, once the card has grown
  const [leaving, setLeaving] = useState(false);

  // the card grows into the panel (owner, 2026-11-25): the panel opens out from the card's rect (a clip, so nothing
  // stretches), Coco flies from the middle of the card to his place at the top left, then the rest animates in
  const [flyer, setFlyer] = useState<{ from: Rect; to: Rect } | null>(null);
  const morph = (reverse: boolean) => {
    const el = panel.current;
    const a = from();
    if (!el || !a || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return Promise.resolve();
    const b = el.getBoundingClientRect();
    const clip = `inset(${a.top - b.top}px ${b.right - (a.left + a.width)}px ${b.bottom - (a.top + a.height)}px ${a.left - b.left}px)`;
    const frames = reverse ? [{ clipPath: "inset(0px 0px 0px 0px)" }, { clipPath: clip }] : [{ clipPath: clip }, { clipPath: "inset(0px 0px 0px 0px)" }];
    return el.animate(frames, { duration: reverse ? 420 : 600, easing: reverse ? "cubic-bezier(.4,0,.6,1)" : "cubic-bezier(.2,.85,.25,1)", fill: "both" }).finished.then(() => {});
  };
  useLayoutEffect(() => {
    const src = document.querySelector(".dwk2-pic .coco, .dwk2-pic svg")?.getBoundingClientRect();
    const dst = panel.current?.querySelector(".dw2-coco-img")?.getBoundingClientRect();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (src && dst && !still) setFlyer({ from: { left: src.left, top: src.top, width: src.width, height: src.height }, to: { left: dst.left, top: dst.top, width: dst.width, height: dst.height } });
    morph(false).then(() => setShown(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fly = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const el = fly.current;
    if (!el || !flyer) return;
    const { from: f, to: t } = flyer;
    const k = t.width / f.width;
    el.animate([{ transform: "translate(0, 0) scale(1)" }, { transform: `translate(${t.left - f.left}px, ${t.top - f.top}px) scale(${k})` }], { duration: 620, delay: 80, easing: "cubic-bezier(.3,.9,.3,1)", fill: "both" })
      .finished.then(() => setFlyer(null)).catch(() => setFlyer(null));
  }, [flyer]);
  const close = () => {
    if (leaving) return;
    setLeaving(true);
    setShown(false);
    window.setTimeout(() => morph(true).then(onClosed), 160);
  };
  const closeRef = useRef(close);
  closeRef.current = close;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeRef.current();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, []);

  const next = () => { setPick(null); setStep((s) => s + 1); };
  const choose = (i: number) => {
    if (pick !== null) return;
    setPick(i);
    window.setTimeout(next, step === 1 ? 1600 : 900);
  };
  const left = useCountdown(shown && step < 2 && pick === null, next);
  // the matching plays, then moves on
  useEffect(() => {
    if (step !== 2) return;
    const t = window.setTimeout(next, 6400);
    return () => window.clearTimeout(t);
  }, [step]);

  const say: [string, string, CocoMood][] = [
    ["Can you try solving this?", `You have ${left}s`, "look"],
    ["How about this one?", pick !== null ? "Easy, right?" : `You have ${left}s`, "wink"],
    ["What if I told you", "both are the same sum?", "wow"],
    ["Yes, it works.", "Seeing it first makes it stick.", "happy"],
  ];
  const [l1, l2, mood] = say[step];

  return createPortal(
    <>
    {flyer ? <span ref={fly} className="dw2-fly" style={{ left: flyer.from.left, top: flyer.from.top, width: flyer.from.width }} aria-hidden="true"><Coco size={150} mood="look" /></span> : null}
    <div className={`dw2-modal${leaving ? " out" : ""}`} role="dialog" aria-modal="true" aria-label="Does it work? A two-question try" onPointerDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="dw2-panel" ref={panel}>
        <div className={`dw2-in s${step}${shown ? " shown" : ""}`}>
          <button type="button" className="dw2-x" onClick={close} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="#0D0D0D" strokeWidth="2.6" strokeLinecap="round" /></svg>
          </button>
          <div className={`dw2-coco${step === 3 ? " big" : ""}`}>
            <span className="dw2-coco-img" style={flyer ? { visibility: "hidden" } : undefined}><Coco size={step === 3 ? 150 : 96} mood={mood} /></span>
            <p className="dw2-bubble" key={step} aria-live="polite">{l1}<br />{l2}</p>
          </div>

          {step === 0 ? (
            <div className="dw2-board" key="q1">
              <div className="dw2-sum" role="img" aria-label="Two unfamiliar symbols added together: what do they make?">
                <span className="dw2-g">{SYM.a}</span><span className="dw2-g op">+</span><span className="dw2-g">{SYM.b}</span><span className="dw2-g op">=</span><span className="dw2-box">{pick !== null ? <b className="dw2-g sm">{[SYM.wrong[0], SYM.ans, SYM.wrong[1]][pick]}</b> : null}</span>
              </div>
              <div className="dw2-opts" role="group" aria-label="Answers">
                {[SYM.wrong[0], SYM.ans, SYM.wrong[1]].map((g, i) => (
                  <button key={g} type="button" className={`dw2-opt${pick === i ? " picked" : ""}`} onClick={() => choose(i)} aria-label={`Answer ${i + 1}`}><span className="dw2-g sm">{g}</span></button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="dw2-board" key="q2">
              <div className="dw2-sum" role="img" aria-label="Two cookies and three cookies: how many altogether?">
                <Counters n={2} /><span className="dw2-g op">+</span><Counters n={3} /><span className="dw2-g op">=</span><span className="dw2-box">{pick !== null ? <b>5</b> : null}</span>
              </div>
              <div className="dw2-opts" role="group" aria-label="Answers">
                {[4, 5, 6].map((n, i) => (
                  <button key={n} type="button" className={`dw2-opt num${pick !== null && n === 5 ? " right" : pick === i ? " picked" : ""}`} onClick={() => choose(i)}>{n}</button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="dw2-board dw2-match" key="match">
              <div className="dw2-row">
                <span className="dw2-cell"><span className="dw2-g">{SYM.a}</span><em style={{ ["--i" as string]: 0 }}>2</em></span>
                <span className="dw2-g op">+</span>
                <span className="dw2-cell"><span className="dw2-g">{SYM.b}</span><em style={{ ["--i" as string]: 1 }}>3</em></span>
                <span className="dw2-g op">=</span>
                <span className="dw2-cell"><span className="dw2-g">{SYM.ans}</span><em style={{ ["--i" as string]: 2 }}>5</em></span>
              </div>
              <div className="dw2-links" aria-hidden="true"><i style={{ ["--i" as string]: 0 }} /><i style={{ ["--i" as string]: 1 }} /><i style={{ ["--i" as string]: 2 }} /></div>
              <div className="dw2-row">
                <span className="dw2-cell"><Counters n={2} /></span>
                <span className="dw2-g op">+</span>
                <span className="dw2-cell"><Counters n={3} /></span>
                <span className="dw2-g op">=</span>
                <span className="dw2-cell"><Counters n={5} /></span>
              </div>
              <p className="dw2-say">The first sum was 2 + 3 = 5 too, in symbols you&apos;d never met. That&apos;s how a sum looks to a five-year-old.</p>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="dw2-end">
              <p className="lab-body">Your child sees and counts first, then meets the symbols once they mean something.</p>
              <div className="dw2-end-ctas">
                <Link className="lab-btn lab-btn-teal" href="/cominilab/story/approach">Learn more</Link>
                <button type="button" className="lab-btn lab-btn-white" onClick={() => { setStep(0); setPick(null); }}>Try it again</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    </>,
    document.querySelector(".lab") ?? document.body,
  );
}

export function DoesItWork() {
  const [open, setOpen] = useState(false);
  const card = useRef<HTMLButtonElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState(false);
  // the words come in first; the card only slides up once they have been read (owner, 2026-11-25: it hid them)
  const [cardIn, setCardIn] = useState(false);
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setWords(true); setCardIn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setWords(true); io.disconnect(); } }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!words || cardIn) return;
    const t = window.setTimeout(() => setCardIn(true), 1900);
    return () => window.clearTimeout(t);
  }, [words, cardIn]);
  const rect = () => {
    const r = card.current?.getBoundingClientRect();
    return r ? { left: r.left, top: r.top, width: r.width, height: r.height } : null;
  };
  return (
    <div className="dwk2" ref={stage}>
      <span className={`dwk2-words${words ? " in" : ""}`} aria-hidden="true"><span>But does it</span><span>actually</span><span>work?</span></span>
      <span className={`dwk2-slide${cardIn ? " in" : ""}`}>
        <button type="button" ref={card} className={`dwk2-card${open ? " away" : ""}`} onClick={() => setOpen(true)} aria-label="But does it actually work? Tap to see how">
          <span className="dwk2-pic"><Coco size={150} mood={cardIn ? "think" : "look"} /></span>
          <span className="dwk2-cap">Tap to see how</span>
        </button>
      </span>
      {open ? <Walkthrough from={rect} onClosed={() => setOpen(false)} /> : null}
    </div>
  );
}
