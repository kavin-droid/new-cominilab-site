"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as RPointerEvent, type ReactNode } from "react";
import "./bridge-phone.css";

/**
 * "Every child needs a different bridge" and "Technology makes it easy" as one sticky section (owner, 2026-11-26):
 *  1. The heading alone in the middle; the five children's photos drift in round it as you scroll (like "We've been
 *     there" on the home page).
 *  2. The heading gives way to the technology line, and a phone rises in the middle; the photos stay floating.
 *  3. The stage holds still: drag a photo into the phone (or tap it) and the phone's worksheet turns into that child's
 *     world. The sum is the same every time: 3, then 2 more, make 5. The photo goes into the phone; the one that was
 *     in there floats back to its place.
 * Phones: the photos sit in a grid under the phone once it is up. Reduced motion or a very short window: the finished
 * state, scrolling normally. BridgePicker.tsx (the old ticker) is kept, unused, to go back to.
 */

type Key = "plain" | "cricket" | "space" | "blocks" | "treats" | "dino";
const CARDS: { key: Key; tag: string; caption: string; photo: string }[] = [
  { key: "cricket", tag: "Cricket", caption: "Learns addition through cricket scores.", photo: "bridgeCricket" },
  { key: "space", tag: "Space", caption: "Learns addition as an astronaut.", photo: "bridgeAstronaut" },
  { key: "blocks", tag: "Blocks", caption: "Learns addition using blocks.", photo: "bridgeBlock" },
  { key: "treats", tag: "Treats", caption: "Learns addition with treats.", photo: "bridgeTreat" },
  { key: "dino", tag: "Dinosaurs", caption: "Learns addition through dinosaurs and stories.", photo: "bridgeDinosaur" },
];
// the tilt of each floating photo; where each floats round the heading on a phone (% of the stage)
const TILT = [-3, 3, 2, -2, -2];
const SCATTER = [
  { x: 22, y: 20 },
  { x: 78, y: 16 },
  { x: 16, y: 80 },
  { x: 82, y: 76 },
  { x: 50, y: 92 },
];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (k: number) => 1 - Math.pow(1 - k, 3);
const WIDE = "(min-width: 1000px) and (min-height: 640px)";
const IDLE_MS = 6000;
// the scroll beats (0..1 through the section): photos in 0.03 to 0.30, the words change 0.36 to 0.46, the phone rises
// 0.40 to 0.52; from there the stage holds still for dragging
const inAt = (i: number) => 0.03 + i * 0.05;
const LIVE_AT = 0.53;

/* ---------- the worksheet in the phone: the same 3 + 2 dressed for each world ---------- */
const Dot = () => <svg viewBox="0 0 40 40" className="ws-svg"><circle cx="20" cy="20" r="16" fill="#FA9632" stroke="#D9771C" strokeWidth="1.5" /></svg>;
const Ball = () => (
  <svg viewBox="0 0 40 40" className="ws-svg">
    <circle cx="20" cy="20" r="15" fill="#C8302C" stroke="#8E1E1B" strokeWidth="1.5" />
    <path d="M11 9 Q 20 20 11 31" fill="none" stroke="#FFF" strokeWidth="1.6" strokeDasharray="2.4 2" />
    <path d="M29 9 Q 20 20 29 31" fill="none" stroke="#FFF" strokeWidth="1.6" strokeDasharray="2.4 2" />
    <ellipse cx="14" cy="13" rx="3.5" ry="2.2" fill="#FFF" opacity="0.35" />
  </svg>
);
const Fuel = () => (
  <svg viewBox="0 0 40 40" className="ws-svg">
    <rect x="15" y="3" width="10" height="6" rx="1.5" fill="#F5C542" stroke="#B88A12" strokeWidth="1.2" />
    <rect x="9" y="8" width="22" height="29" rx="6" fill="#7CE0A0" stroke="#2E8C5A" strokeWidth="1.6" />
    <rect x="13" y="16" width="14" height="12" rx="2" fill="#FFF" opacity="0.85" />
    <path d="M21 17.5 L16.5 23 H20 L19 27 L23.5 21.5 H20 Z" fill="#F5A623" />
  </svg>
);
const BLOCK_C = [["#4D8DF7", "#2F67C9"], ["#F25C54", "#C93C35"], ["#FFC93C", "#D9A20F"], ["#5CC98A", "#33A063"], ["#A98BFF", "#7F61E0"]];
const Block = ({ n }: { n: number }) => {
  const [c, d] = BLOCK_C[n % BLOCK_C.length];
  return (
    <svg viewBox="0 0 40 34" className="ws-svg ws-block">
      <rect x="9" y="1" width="8" height="5" rx="1" fill={d} />
      <rect x="23" y="1" width="8" height="5" rx="1" fill={d} />
      <rect x="2" y="5" width="36" height="28" rx="2" fill={c} stroke={d} strokeWidth="1.5" />
    </svg>
  );
};
const Cookie = () => (
  <svg viewBox="0 0 40 40" className="ws-svg">
    <circle cx="20" cy="20" r="16" fill="#D9A066" stroke="#A8743A" strokeWidth="1.5" />
    {[[13, 14], [24, 11], [27, 23], [16, 26], [21, 19]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill="#5A3416" />)}
  </svg>
);
const Egg = () => (
  <svg viewBox="0 0 40 40" className="ws-svg">
    <ellipse cx="20" cy="22" rx="12.5" ry="16" fill="#F4EDD6" stroke="#BFAE7E" strokeWidth="1.5" />
    {[[15, 15, 2.2], [24, 20, 2.8], [17, 28, 2], [25, 31, 1.6], [21, 11, 1.4]].map(([x, y, r]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#7DBE6A" />)}
  </svg>
);

const SHEETS: Record<Key, { prompt: string; obj: (n: number) => ReactNode; label?: string; name: string }> = {
  plain: { prompt: "How many in all?", obj: () => <Dot />, name: "A plain worksheet: 3 counters and 2 more make 5" },
  cricket: { prompt: "3 runs, then 2 more. What’s the score?", obj: () => <Ball />, label: "RUNS", name: "Cricket: 3 runs and 2 more runs make 5" },
  space: { prompt: "3 fuel cans, then 2 more. How many?", obj: () => <Fuel />, name: "Space: 3 fuel cans and 2 more make 5" },
  blocks: { prompt: "3 blocks, then 2 more. How tall now?", obj: (n) => <Block n={n} />, name: "Blocks: a tower of 3 and 2 more blocks make 5" },
  treats: { prompt: "3 cookies, then 2 more. How many?", obj: () => <Cookie />, name: "Treats: 3 cookies and 2 more make 5" },
  dino: { prompt: "3 dino eggs, then 2 more. How many?", obj: () => <Egg />, name: "Dinosaurs: 3 eggs and 2 more make 5" },
};

function Sheet({ k }: { k: Key }) {
  const s = SHEETS[k];
  const o = (n: number, d: number) => <span key={n} className="ws-obj" style={{ ["--d" as string]: d }}>{s.obj(n)}</span>;
  return (
    <div className={`ws ws-${k}`} role="img" aria-label={s.name}>
      <div className="ws-q">
        <svg viewBox="0 0 24 24" className="ws-spk" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="none" stroke="#111" strokeWidth="2" strokeLinejoin="round" /><path d="M16.5 9.5q1.5 2.5 0 5M19 7q3.5 5 0 10" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" /></svg>
        <span>{s.prompt}</span>
      </div>
      <div className="ws-body">
        <div className="ws-frame">
          {s.label ? <span className="ws-label">{s.label}</span> : null}
          <span className="ws-group">{[0, 1, 2].map((n) => o(n, 0.15 + n * 0.12))}</span>
          <span className="ws-plus" style={{ ["--d" as string]: 0.55 }}>+</span>
          <span className="ws-group">{[3, 4].map((n) => o(n, 0.7 + (n - 3) * 0.12))}</span>
        </div>
        <div className="ws-side">
          <div className="ws-eq">3 + 2 = <span className="ws-ans"><i>?</i><b>5</b></span></div>
          <div className="ws-tiles"><span>4</span><span className="ok">5</span><span>6</span></div>
        </div>
      </div>
    </div>
  );
}

export function BridgePhone() {
  const wrap = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const screen = useRef<HTMLDivElement>(null);
  const cells = useRef<(HTMLDivElement | null)[]>([]);
  const [mode, setMode] = useState<"sticky" | "flow">("flow");
  const [wide, setWide] = useState(true);
  const [p, setP] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [screens, setScreens] = useState<{ id: number; k: Key }[]>([{ id: 0, k: "plain" }]);
  const [fly, setFly] = useState<Record<number, { x: number; y: number }>>({});
  const [drag, setDrag] = useState<{ i: number; x: number; y: number; over: boolean } | null>(null);
  const [scatter, setScatter] = useState(() => CARDS.map(() => ({ x: 0, y: 0 })));
  const touched = useRef(false);
  const press = useRef<{ i: number; id: number; x: number; y: number; moved: boolean } | null>(null);
  const skipClick = useRef(false);

  useEffect(() => {
    const pick = () => {
      setMode(window.innerHeight >= 520 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "sticky" : "flow");
      setWide(window.matchMedia(WIDE).matches);
    };
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
    };
    // on a phone the photos float round the heading first, then settle into the grid under the phone: how far each
    // one's resting place is from its floating spot
    const measure = () => {
      const st = stage.current;
      if (!st) return;
      const a = st.getBoundingClientRect();
      const narrow = !window.matchMedia(WIDE).matches;
      const next = CARDS.map((_, i) => {
        const c = cells.current[i];
        if (!c || !narrow) return { x: 0, y: 0 };
        const b = c.getBoundingClientRect();
        return { x: (SCATTER[i].x / 100) * a.width - (b.left - a.left + b.width / 2), y: (SCATTER[i].y / 100) * a.height - (b.top - a.top + b.height / 2) };
      });
      setScatter((s) => (s.every((v, i) => Math.abs(v.x - next[i].x) + Math.abs(v.y - next[i].y) < 1) ? s : next));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    measure();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    const ro = new ResizeObserver(measure);
    if (stage.current) ro.observe(stage.current);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); ro.disconnect(); };
  }, [mode]);

  const S = mode === "sticky";
  const inK = (i: number) => (S ? ease(clamp((p - inAt(i)) / 0.08)) : 1);
  const swapK = S ? ease(clamp((p - 0.36) / 0.1)) : 1;
  const phoneK = S ? ease(clamp((p - 0.4) / 0.12)) : 1;
  const live = !S || p >= LIVE_AT;

  // the screen that was showing stays under the new one until it has slid in
  useEffect(() => {
    if (screens.length < 2) return;
    const t = window.setTimeout(() => setScreens((s) => s.slice(-1)), 650);
    return () => window.clearTimeout(t);
  }, [screens]);

  const choose = (i: number) => {
    const c = cells.current[i], scr = screen.current;
    if (c && scr) {
      const a = c.getBoundingClientRect(), b = scr.getBoundingClientRect();
      setFly((f) => ({ ...f, [i]: { x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2) } }));
    }
    setDrag(null);
    if (sel === i) return;
    setSel(i);
    setScreens((s) => [...s.slice(-1), { id: s[s.length - 1].id + 1, k: CARDS[i].key }]);
  };

  // nobody has tried it after a few seconds: the first photo goes in by itself, to show what happens
  useEffect(() => {
    if (!live || sel !== null || touched.current) return;
    const t = window.setTimeout(() => { if (!touched.current) choose(0); }, IDLE_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [live, sel]);

  const overPhone = (x: number, y: number) => {
    const r = phone.current?.getBoundingClientRect();
    return !!r && x > r.left - 24 && x < r.right + 24 && y > r.top - 24 && y < r.bottom + 24;
  };
  const down = (i: number) => (e: RPointerEvent<HTMLButtonElement>) => {
    if (!live || e.button !== 0) return;
    press.current = { i, id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = (e: RPointerEvent<HTMLButtonElement>) => {
    const pr = press.current;
    if (!pr || pr.id !== e.pointerId) return;
    const dx = e.clientX - pr.x, dy = e.clientY - pr.y;
    if (!pr.moved && Math.hypot(dx, dy) < 6) return;
    pr.moved = true;
    setDrag({ i: pr.i, x: dx, y: dy, over: overPhone(e.clientX, e.clientY) });
  };
  const up = (e: RPointerEvent<HTMLButtonElement>) => {
    const pr = press.current;
    if (!pr || pr.id !== e.pointerId) return;
    press.current = null;
    touched.current = true;
    skipClick.current = true; // the click that follows a press is handled here
    if (!pr.moved || overPhone(e.clientX, e.clientY)) choose(pr.i);
    else setDrag(null);
  };
  const cancel = () => { press.current = null; setDrag(null); };
  const click = (i: number) => () => {
    if (skipClick.current) { skipClick.current = false; return; }
    touched.current = true;
    choose(i); // the keyboard
    screen.current?.focus({ preventScroll: true });
  };
  // tabbing onto a photo before the phone is up: jump the scroll to where the phone is waiting
  const focusCard = () => {
    const el = wrap.current;
    if (!S || !el || p >= LIVE_AT) return;
    const r = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + r.top + (LIVE_AT + 0.05) * (r.height - window.innerHeight), behavior: "auto" });
  };

  const vh = typeof window === "undefined" ? 800 : window.innerHeight;
  return (
    <div className={`bph ${S ? "sticky" : "flow"}${live ? " live" : ""}`} ref={wrap}>
      <div className="bph-stick" ref={stage}>
        <div className="bph-a" style={S ? { opacity: 1 - swapK, transform: `translate(-50%, calc(-50% - ${swapK * 40}px))`, visibility: swapK >= 1 ? "hidden" : undefined } : undefined}>
          <h2 id="bridge-title" className="lab-h2">Every child needs a <span className="lab-mark">different bridge</span></h2>
        </div>
        <div className="bph-col">
          <div className="bph-b" style={S ? { opacity: swapK, transform: `translateY(${(1 - swapK) * 28}px)` } : undefined}>
            <h2 id="tech-title" className="lab-h2">Technology makes it <span className="lab-mark">easy</span></h2>
            <p className="lab-lede">Personalised learning for every child, with no extra work for parents or teachers.</p>
          </div>
          <div className={`bph-phone${drag?.over ? " ready" : ""}`} ref={phone} style={S ? { transform: `translateY(${(1 - phoneK) * vh * 0.7}px)`, opacity: Math.min(1, phoneK * 2) } : undefined}>
            <span className="bph-keys" aria-hidden="true" />
            <div className="bph-screen" ref={screen} tabIndex={-1} aria-live="polite">
              {screens.map((s, n) => (
                <div key={s.id} className={`bph-layer${s.id > 0 ? " enter" : ""}`} aria-hidden={n < screens.length - 1}><Sheet k={s.k} /></div>
              ))}
            </div>
            <span className="bph-cam" aria-hidden="true" />
            <span className="bph-bar" aria-hidden="true" />
          </div>
          <p className={`bph-hint${live && phoneK > 0.95 ? " on" : ""}`}>
            <svg className="bph-hint-arrow" viewBox="0 0 20 40" aria-hidden="true"><path d="M10 38 V4" fill="none" stroke="#3B3F57" strokeWidth="2.5" strokeLinecap="round" /><path d="M3 11 L10 3 L17 11" fill="none" stroke="#3B3F57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="lab-note">
              {sel === null ? (
                <><span className="bph-fine">Drag a card into the phone</span><span className="bph-touch">Tap a card, or drag it into the phone</span></>
              ) : "Same maths, a new world. Try another!"}
            </span>
          </p>
          <div className="bph-cards" role="group" aria-label="Five children’s worlds: drag one into the phone, or press it, to see the same sum in that world">
            {CARDS.map((c, i) => {
              const k = inK(i);
              const settle = 1 - swapK;
              const isIn = sel === i && drag?.i !== i;
              const dragging = drag?.i === i;
              const f = fly[i] ?? { x: 0, y: 0 };
              const btn: CSSProperties = dragging
                ? { transform: `translate(${drag.x}px, ${drag.y}px) scale(1.04)`, transition: "none" }
                : isIn
                  ? { transform: `translate(${f.x}px, ${f.y}px) scale(0.3)`, opacity: 0 }
                  : {};
              return (
                <div key={c.key} className={`bph-cell c${i}${dragging ? " dragging" : ""}`} ref={(el) => { cells.current[i] = el; }}>
                  <div
                    className="bph-mover"
                    style={S ? { opacity: Math.min(1, k * 1.6), transform: `translate(${scatter[i].x * settle}px, ${scatter[i].y * settle + (1 - k) * vh * 0.6}px)` } : undefined}
                  >
                    <div className="bph-float" style={{ rotate: `${TILT[i]}deg`, animationDelay: `${-i * 1.3}s` }}>
                      <button
                        type="button"
                        className={`bph-card${isIn ? " in" : ""}`}
                        style={btn}
                        aria-pressed={sel === i}
                        aria-label={`${c.tag}: ${c.caption}`}
                        tabIndex={isIn ? -1 : 0}
                        onPointerDown={down(i)}
                        onPointerMove={move}
                        onPointerUp={up}
                        onPointerCancel={cancel}
                        onClick={click(i)}
                        onFocus={focusCard}
                      >
                        <img src={`/images/approach/${c.photo}.webp`} alt="" width={960} height={600} loading="lazy" draggable={false} />
                        <span className="bph-cap"><b>{c.tag}</b><span>{c.caption}</span></span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
