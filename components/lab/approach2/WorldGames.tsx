"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./world-games.css";
import { GroundArt, KitchenArt, ShopArt } from "./world-art";

/**
 * "Start in their world" (owner's comment on the approach redesign, 2026-11-25): each card is a child's interest (drawn
 * scenes from world-art.tsx since the owner's 2026-11-25 note, in the four-parts illustrations' style);
 * pressing it opens a short version of one of the app's own games, with that game's art, layout and feedback
 * (owner, 2026-11-25: "borrow assets from our games inside the app and create short versions here"):
 * - Love Cooking: Gayathri's garden (garden-planning) made into a fruit tart: the same round bed cut into parts, the
 *   fraction card, the fruit cards and the tick. 2 tarts.
 * - Always at the ground: Lake Race's fishing race: the lake, the boats, the teammate and Sunny, the catch cards; the
 *   net brings up fish (+) and then rocks (-), and the child says the new score. 2 catches.
 * - Enjoy Shopping: Grammy's Shopping: the shelves, the basket with its price, the purse of ₹10 notes and ₹1 coins,
 *   the counter card and the tick, Grammy in her own voice. 2 baskets.
 * Each one plays on a fixed board (800 x 450 wide, 360 x 620 upright on a phone) scaled to the panel. Art and voice
 * clips are copied into public/lab/approach-games/.
 */
const WORLD = [
  { title: "Love Cooking?", body: "Fractions helps with the recipes!", Art: KitchenArt, tilt: -2, game: "tart" as const, name: "Gayathri's fruit tart" },
  { title: "Always at the ground?", body: "Addition & subtraction help with the score.", Art: GroundArt, tilt: 1, game: "race" as const, name: "The fishing race" },
  { title: "Enjoy Shopping?", body: "Adding & subtracting helps shop smart.", Art: ShopArt, tilt: 2, game: "shop" as const, name: "Grammy's shopping" },
];
type GameId = (typeof WORLD)[number]["game"];

const A = "/lab/approach-games";

export function WorldGames() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <ul className="wg3">
        {WORLD.map((w, i) => (
          <li key={w.title} className="wg3-item">
            <div className="wg3-card" style={{ rotate: `${w.tilt}deg` }}>
              <button type="button" className="wg3-face wg3-front" onClick={() => setOpen(i)} aria-label={`${w.title} Play ${w.name}`} aria-haspopup="dialog">
                <span className="wg3-pic"><w.Art /></span>
                <span className="wg3-name">{w.title}</span>
                <span className="wg3-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="#FFFFFF" /></svg></span>
              </button>
            </div>
            <p className="wg3-body">{w.body}</p>
          </li>
        ))}
      </ul>
      {open !== null ? <GameModal title={WORLD[open].name} game={WORLD[open].game} onClose={() => setOpen(null)} /> : null}
    </>
  );
}

// ---------------------------------------------------------------------------------------------------------------
// sound: the games' own right / wrong sounds and their recorded lines (one line at a time; a muted panel is silent)

const audio = { on: true, voice: null as HTMLAudioElement | null };
function playSfx(name: "correct" | "wrong" | "plant", vol = 0.5) {
  if (!audio.on) return;
  try {
    const a = new Audio(`${A}/sounds/${name}.mp3`);
    a.volume = vol;
    void a.play().catch(() => {});
  } catch {}
}
function stopVoice() {
  audio.voice?.pause();
  audio.voice = null;
}
/** speaks `text` if the game recorded it (`clips`: line -> file in `dir`) */
function speak(text: string, clips: Record<string, string>, dir: string) {
  stopVoice();
  const f = clips[text];
  if (!f || !audio.on) return;
  try {
    const a = new Audio(`${A}/${dir}/voice/${f}.mp3`);
    audio.voice = a;
    void a.play().catch(() => {});
  } catch {}
}

/** timers that die with the game */
function useClock() {
  const ts = useRef<number[]>([]);
  useEffect(() => () => ts.current.forEach((t) => window.clearTimeout(t)), []);
  return useMemo(() => ({ after: (ms: number, fn: () => void) => void ts.current.push(window.setTimeout(fn, ms)) }), []);
}

// ---------------------------------------------------------------------------------------------------------------
// the panel: the site's try-it card, centred over the dimmed page

function GameModal({ title, game, onClose }: { title: string; game: GameId; onClose: () => void }) {
  const [run, setRun] = useState(0);
  const [sound, setSound] = useState(audio.on);
  const close = useRef(onClose);
  close.current = onClose;
  const [host, setHost] = useState<Element | null>(null);
  useEffect(() => setHost(document.querySelector(".lab") ?? document.body), []);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close.current();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      stopVoice();
    };
  }, []);
  if (!host) return null;
  const props = { key: run, onAgain: () => setRun((r) => r + 1), onDone: onClose };
  return createPortal(
    <div className="wgx-modal" role="dialog" aria-modal="true" aria-label={title} onPointerDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="wgx-card">
        <div className="wgx-stage">{game === "tart" ? <TartGame {...props} /> : game === "race" ? <RaceGame {...props} /> : <ShopGame {...props} />}</div>
        <div className="wgx-bar">
          <b>{title}</b>
          <div className="wgx-bar-btns">
            <button type="button" className="wgx-sq" aria-label={sound ? "Sound off" : "Sound on"} aria-pressed={sound} onClick={() => { audio.on = !sound; if (!audio.on) stopVoice(); setSound(!sound); }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H2v6h4l5 4V5z" />
                {sound ? <><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></> : <path d="m16 9 6 6M22 9l-6 6" />}
              </svg>
            </button>
            <button type="button" className="wgx-sq" onClick={onClose} autoFocus aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="#0D0D0D" strokeWidth="2.6" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>,
    host,
  );
}

// ---------------------------------------------------------------------------------------------------------------
// the board: a fixed frame scaled to the panel (wide on a computer, upright on a phone), its scene bleeding past it

type Layout = "wide" | "tall";
const FRAME: Record<Layout, [number, number]> = { wide: [800, 450], tall: [360, 620] };

function Board({ bg, children, frameRef }: { bg: string; children: (l: Layout) => ReactNode; frameRef?: React.RefObject<HTMLDivElement | null> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ l: Layout; k: number } | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const l: Layout = w / h < 1 ? "tall" : "wide";
      setBox({ l, k: Math.min(w / FRAME[l][0], h / FRAME[l][1]) });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="wgx-board" style={{ background: bg }}>
      {box ? (
        <div ref={frameRef} className={`wgx-frame wgx-${box.l}`} style={{ width: FRAME[box.l][0], height: FRAME[box.l][1], transform: `translate(-50%, -50%) scale(${box.k})` }}>
          {children(box.l)}
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------------------------------------------
// the games' shared pieces (the CominiLab mini-game shell: bubble, tick, score note, final card)

function SpeakerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style={{ flex: "none" }}>
      <rect x="2" y="8" width="5" height="8" fill="#4AC1BD" stroke="#0D0D0D" strokeWidth="1.6" />
      <path d="M7 8 L13 3.5 V20.5 L7 16Z" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M17 8.5h1.2M17 12h1.6M17 15.5h1.2" stroke="#0D0D0D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** the line in a white bubble; a tap says it again */
function Bubble({ text, onHear, className = "", style, tail }: { text: string; onHear: () => void; className?: string; style?: CSSProperties; tail?: CSSProperties }) {
  return (
    <button type="button" className={`wgx-bub ${className}`} style={style} onClick={onHear} aria-label={`${text} Hear it again`} aria-live="polite">
      {tail ? <span className="wgx-bub-tail" style={tail} /> : null}
      <SpeakerIcon />
      <span key={text} className="wgx-bub-text">{text}</span>
    </button>
  );
}

/** the check: a round push button, asleep (grey, sunk) until there is something to check */
function Tick({ awake, onPress, style }: { awake: boolean; onPress: () => void; style?: CSSProperties }) {
  return (
    <button type="button" aria-label="Check" disabled={!awake} className={`wgx-go${awake ? " awake" : ""}`} onClick={onPress} style={style}>
      <svg width="68" height="68" viewBox="0 0 68 68" aria-hidden="true">
        <circle cx="34" cy="35" r="32" fill="#F4F1EA" />
        <circle cx="34" cy="35" r="27" fill="#DCD6CB" />
        <circle className="wgx-go-side" cx="34" cy="38" r="23" />
        <g className="wgx-go-top">
          <circle className="wgx-go-face" cx="34" cy="33" r="23" />
          <path d="M19 27 Q22 17 32 14" fill="none" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" />
          <path className="wgx-go-mark" d="M24 33.5 L31 40.5 L44 26.5" fill="none" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </button>
  );
}

function ScoreNote({ icon, n, label, style }: { icon: ReactNode; n: number; label: string; style?: CSSProperties }) {
  return (
    <div key={n} className={`wgx-note${n ? " pop" : ""}`} style={style} aria-label={label}>
      {icon}
      <span>{n}</span>
    </div>
  );
}

function Star({ on, i }: { on: boolean; i: number }) {
  return (
    <svg className="wgx-pop" style={{ animationDelay: `${0.3 + i * 0.35}s` }} width="46" height="46" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.6l2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 16.9l-5.8 3.2 1.4-6.4-4.9-4.4 6.5-.7z" fill={on ? "#FFC93C" : "#EDEDED"} stroke={on ? "#E0A92A" : "#D9D9D9"} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/** the final card, as the games end: praise, stars, Done / Play again */
function EndCard({ title, line, stars, face, onAgain, onDone }: { title: string; line: string; stars: number; face?: string; onAgain: () => void; onDone: () => void }) {
  return (
    <div className="wgx-veil">
      <section className="wgx-end" role="dialog" aria-label={`${title} ${line} ${stars} of 3 stars`}>
        {face ? <img className="wgx-end-face" src={face} alt="" /> : null}
        <h3>{title}</h3>
        <p>{line}</p>
        <div className="wgx-stars">{[0, 1, 2].map((i) => <Star key={i} i={i} on={i < stars} />)}</div>
        <div className="wgx-end-btns">
          <button type="button" className="wgx-btn ghost" onClick={onDone}>Done</button>
          <button type="button" className="wgx-btn primary" onClick={onAgain} autoFocus>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></svg>
            Play again
          </button>
        </div>
      </section>
    </div>
  );
}

const starsFor = (missed: number) => (missed === 0 ? 3 : missed === 1 ? 2 : 1);

/** the hand that shows the next helpful tap (the games' idle hint) */
function Hand({ at }: { at: [number, number] | null }) {
  if (!at) return null;
  return <img className="wgx-hand" src={`${A}/cooking/hand.svg`} alt="" aria-hidden="true" style={{ left: at[0], top: at[1] }} />;
}

/** shows the hand after a few quiet seconds; any tap hides it and starts the count again */
function useIdleHand(target: () => [number, number] | null, active: boolean, deps: unknown[]) {
  const [at, setAt] = useState<[number, number] | null>(null);
  const t = useRef(0);
  const tgt = useRef(target);
  tgt.current = target;
  const poke = useCallback(() => {
    setAt(null);
    window.clearTimeout(t.current);
    if (active) t.current = window.setTimeout(() => setAt(tgt.current()), 5000);
  }, [active]);
  useEffect(() => {
    poke();
    return () => window.clearTimeout(t.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poke, ...deps]);
  return [at, poke] as const;
}

// ===============================================================================================================
// Love Cooking: Gayathri's fruit tart (Gayathri's garden, garden-planning). The bed is the tart, the seeds are fruit.

type Fruit = "grapes" | "watermelon";
const FRUIT_IMG: Record<Fruit, string> = { grapes: `${A}/cooking/grapes-new.svg`, watermelon: `${A}/cooking/watermelon-new.svg` };
const TARTS: { parts: number; fruits: Fruit[]; want: Record<Fruit, number> }[] = [
  { parts: 2, fruits: ["grapes"], want: { grapes: 1, watermelon: 0 } },
  { parts: 4, fruits: ["grapes", "watermelon"], want: { grapes: 1, watermelon: 2 } },
];
const OFF: Record<Fruit, { overLittle: string; overLot: string; underLittle: string; underLot: string }> = {
  grapes: {
    overLittle: "A bit too many grapes! Tap a grape part to clear it.",
    overLot: "Far too many grapes! Tap grape parts to clear them.",
    underLittle: "Almost! The grapes need a bit more.",
    underLot: "Not yet! The grapes need a lot more.",
  },
  watermelon: {
    overLittle: "A bit too many watermelons! Tap a watermelon part to clear it.",
    overLot: "Far too many watermelons! Tap watermelon parts to clear them.",
    underLittle: "Almost! The watermelons need a bit more.",
    underLot: "Not yet! The watermelons need a lot more.",
  },
};
// the garden's recorded lines that fit the tart word for word
const TART_CLIPS: Record<string, string> = {
  [OFF.grapes.overLittle]: "024dafa655b89262", [OFF.grapes.overLot]: "6fdd1b4b6e2b701e", [OFF.grapes.underLittle]: "c04779d197f572dd", [OFF.grapes.underLot]: "21b96ec04ea3182c",
  [OFF.watermelon.overLittle]: "df18b2d88b431587", [OFF.watermelon.overLot]: "9d96d4c29ec06684", [OFF.watermelon.underLittle]: "8d8ff8a84a2c914f", [OFF.watermelon.underLot]: "a9b4cc0bbcac84dd",
  "Perfect!": "7c1391b6f45ada9c", "Spot on!": "bc8c4ada3a5e355d", "Wonderful!": "6da15057c0686fa5", "Great job!": "3ab93e67a838f289", "Excellent!": "cf74fd3a4d82452d",
};
const TART_LINES = {
  ask: "Let's top Gayathri's tart! Tap the parts the card asks for.",
  both: "Now use both fruits! Tap a fruit, then its parts.",
  fruitFirst: "Tap a fruit first!",
  nowRight: "Now the tart is just right!",
};

type Pt = [number, number];
/** the round bed in equal slices, in a 100 x 100 box (garden-planning's geometry) */
function slices(parts: number): Pt[][] {
  const R = 46;
  const steps = Math.max(4, Math.ceil(64 / parts));
  return Array.from({ length: parts }, (_, i) => {
    const a0 = -Math.PI / 2 + (i * 2 * Math.PI) / parts;
    const pts: Pt[] = [[50, 50]];
    for (let s = 0; s <= steps; s++) {
      const a = a0 + ((2 * Math.PI) / parts) * (s / steps);
      pts.push([50 + R * Math.cos(a), 50 + R * Math.sin(a)]);
    }
    return pts;
  });
}
const pathOf = (pts: Pt[]) => "M" + pts.map(([x, y]) => x.toFixed(2) + " " + y.toFixed(2)).join("L") + "Z";
const inside = (p: Pt, poly: Pt[]) => {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
};
const edgeDist = (p: Pt, poly: Pt[]) => {
  let d = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const [ax, ay] = poly[i];
    const [bx, by] = poly[(i + 1) % poly.length];
    const vx = bx - ax;
    const vy = by - ay;
    const t = Math.max(0, Math.min(1, ((p[0] - ax) * vx + (p[1] - ay) * vy) / (vx * vx + vy * vy || 1)));
    d = Math.min(d, Math.hypot(p[0] - ax - t * vx, p[1] - ay - t * vy));
  }
  return d;
};
const areaOf = (poly: Pt[]) => Math.abs(poly.reduce((s, [x, y], i) => s + x * poly[(i + 1) % poly.length][1] - poly[(i + 1) % poly.length][0] * y, 0)) / 2;
/** where a topped part's fruits sit: a few, evenly spread, clear of the part's edges (garden-planning's fruitSpots) */
function fruitSpots(poly: Pt[]): { spots: Pt[]; size: number } {
  const xs = poly.map((p) => p[0]);
  const ys = poly.map((p) => p[1]);
  let s = Math.sqrt(areaOf(poly) / 10);
  for (let tries = 0; tries < 10; tries++) {
    const spots: Pt[] = [];
    for (let y = Math.min(...ys) + s / 2; y < Math.max(...ys); y += s)
      for (let x = Math.min(...xs) + s / 2; x < Math.max(...xs); x += s) {
        const p: Pt = [x, y];
        if (inside(p, poly) && edgeDist(p, poly) >= s * 0.42) spots.push(p);
      }
    if (spots.length >= 4) return { spots, size: s * 0.92 };
    s *= 0.88;
  }
  return { spots: [[xs.reduce((a, b) => a + b, 0) / xs.length, ys.reduce((a, b) => a + b, 0) / ys.length]], size: s * 0.92 };
}
const centroid = (poly: Pt[]): Pt => {
  const inner = poly.slice(1);
  const mid = inner[Math.floor(inner.length / 2)];
  return [(50 + mid[0] * 2) / 3, (50 + mid[1] * 2) / 3];
};

const PRAISE = ["Perfect!", "Spot on!", "Wonderful!", "Great job!", "Excellent!"];

/** where things sit on each board */
const TART_AT = {
  wide: { plot: { cx: 400, cy: 258, P: 384 }, seed: (i: number, n: number) => [800 - 46, 238 - ((n - 1) * 108) / 2 + i * 108] as Pt, tick: [748, 402] as Pt },
  tall: { plot: { cx: 180, cy: 330, P: 350 }, seed: (i: number, n: number) => [360 - 12 - 40 - (n - 1 - i) * 92, 552] as Pt, tick: [50, 572] as Pt },
};

function TartGame({ onAgain, onDone }: { onAgain: () => void; onDone: () => void }) {
  const clock = useClock();
  const [r, setR] = useState(0);
  const tart = TARTS[r];
  const [plots, setPlots] = useState<(Fruit | null)[]>(() => Array(TARTS[0].parts).fill(null));
  const order = useRef<number[]>([]);
  const [seed, setSeed] = useState<Fruit | null>("grapes");
  const [errors, setErrors] = useState<number[]>([]);
  const [line, setLine] = useState(TART_LINES.ask);
  const [phase, setPhase] = useState<"in" | "idle" | "out">("in");
  const [full, setFull] = useState(false);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const missed = useRef({ now: false, total: 0 });
  const [end, setEnd] = useState(false);
  const layoutRef = useRef<Layout>("wide");
  const parts = useMemo(() => slices(tart.parts), [tart.parts]);
  const spots = useMemo(() => parts.map(fruitSpots), [parts]);
  const say = (t: string) => { setLine(t); speak(t, TART_CLIPS, "cooking"); };

  const right = tart.fruits.every((f) => plots.filter((p) => p === f).length === tart.want[f]);
  const [hand, poke] = useIdleHand(() => {
    const at = TART_AT[layoutRef.current];
    if (right) return at.tick;
    const short = tart.fruits.find((f) => plots.filter((p) => p === f).length < tart.want[f]);
    const over = tart.fruits.find((f) => plots.filter((p) => p === f).length > tart.want[f]);
    if (over) {
      const i = plots.findIndex((p) => p === over);
      return partAt(i);
    }
    if (short && seed !== short) return at.seed(tart.fruits.indexOf(short), tart.fruits.length);
    const i = plots.findIndex((p) => !p);
    return i >= 0 ? partAt(i) : at.tick;
  }, !locked && !end, [r, plots, seed]);

  function partAt(i: number): Pt {
    const { cx, cy, P } = TART_AT[layoutRef.current].plot;
    const [x, y] = centroid(parts[i]);
    return [cx - P / 2 + 0.2 * P + (x / 100) * 0.6 * P, cy - P / 2 + 0.2 * P + (y / 100) * 0.6 * P];
  }

  const tapPart = (i: number) => {
    if (locked) return;
    poke();
    const ps = [...plots];
    if (ps[i]) {
      ps[i] = null;
      order.current = order.current.filter((j) => j !== i);
    } else {
      if (!seed) { say(TART_LINES.fruitFirst); return; }
      ps[i] = seed;
      order.current = [...order.current, i];
      playSfx("plant", 0.4);
    }
    setPlots(ps);
    setErrors([]);
  };

  const check = () => {
    if (locked) return;
    poke();
    const planted = { grapes: plots.filter((p) => p === "grapes").length, watermelon: plots.filter((p) => p === "watermelon").length };
    const off = tart.fruits.filter((f) => planted[f] !== tart.want[f]);
    if (off.length) {
      if (!missed.current.now) missed.current.total += 1;
      missed.current.now = true;
      playSfx("wrong", 0.45);
      const rings: number[] = [];
      off.forEach((f) => {
        const over = planted[f] - tart.want[f];
        if (over > 0) rings.push(...order.current.filter((i) => plots[i] === f).slice(-over));
      });
      setErrors(rings);
      const f = off[0];
      const d = planted[f] - tart.want[f];
      const little = Math.abs(d) === 1;
      say(d > 0 ? (little ? OFF[f].overLittle : OFF[f].overLot) : little ? OFF[f].underLittle : OFF[f].underLot);
      return;
    }
    setLocked(true);
    setFull(true);
    playSfx("correct", 0.5);
    const first = !missed.current.now;
    if (first) setScore((s) => s + 1);
    say(first ? PRAISE[r === 0 ? 0 : 2] : TART_LINES.nowRight);
    clock.after(1700, () => setPhase("out"));
    clock.after(2300, () => {
      if (r + 1 >= TARTS.length) {
        setEnd(true);
        playSfx("correct", 0.4);
        return;
      }
      const n = r + 1;
      setR(n);
      setPlots(Array(TARTS[n].parts).fill(null));
      order.current = [];
      setSeed(null);
      setFull(false);
      setErrors([]);
      missed.current.now = false;
      setPhase("in");
      setLocked(false);
      say(TART_LINES.both);
    });
  };

  useEffect(() => {
    const t = window.setTimeout(() => setPhase("idle"), 600);
    return () => window.clearTimeout(t);
  }, [r]);

  return (
    <Board bg="#E7B477">
      {(l) => {
        layoutRef.current = l;
        const at = TART_AT[l];
        const { cx, cy, P } = at.plot;
        return (
          <div className="wgc" onPointerDown={() => poke()}>
            <div className="wgc-table" aria-hidden="true" />
            <div key={r} className={`wgc-plot${phase === "in" ? " in" : phase === "out" ? " out" : ""}${full ? " full" : ""}${seed ? " holding" : ""}`} style={{ left: cx - P / 2, top: cy - P / 2, width: P, height: P }}>
              <span className="wgc-plate" aria-hidden="true" />
              <img className="wgc-crust" src={`${A}/cooking/sun-stonetrap.svg`} alt="" draggable={false} />
              <svg className="wgc-bed" viewBox="0 0 100 100" role="group" aria-label={`A tart in ${tart.parts} equal parts`}>
                <defs><clipPath id={`wgc-clip-${r}`}><circle cx="50" cy="50" r="46" /></clipPath></defs>
                <circle className="wgc-bedfill" cx="50" cy="50" r="46" />
                <g clipPath={`url(#wgc-clip-${r})`}>
                  {parts.map((pts, i) => {
                    const f = plots[i];
                    return (
                      <g key={i}>
                        <path d={pathOf(pts)} role="button" aria-label={f ? `Part ${i + 1}: ${f}. Tap to clear` : `Part ${i + 1}: empty`} className={`wgc-part${f ? " planted" : ""}`} onClick={() => tapPart(i)} />
                        {f ? (
                          <g className="wgc-fruits">
                            {spots[i].spots.map(([x, y], j) => <image key={j} href={FRUIT_IMG[f]} x={x - spots[i].size / 2} y={y - spots[i].size / 2} width={spots[i].size} height={spots[i].size} />)}
                          </g>
                        ) : null}
                      </g>
                    );
                  })}
                  <g className="wgc-lines">{parts.map((pts, i) => <path key={i} d={pathOf(pts)} />)}</g>
                </g>
                <circle className="wgc-bedline" cx="50" cy="50" r="46" />
                {errors.map((i) => (
                  <g key={`e${i}`}>
                    <clipPath id={`wgc-e-${r}-${i}`}><path d={pathOf(parts[i])} /></clipPath>
                    <path d={pathOf(parts[i])} className="wgc-err" clipPath={`url(#wgc-e-${r}-${i})`} />
                  </g>
                ))}
              </svg>
            </div>

            {/* the card: each fruit = its share of the tart */}
            <div key={`c${r}`} className="wgc-target" aria-label={tart.fruits.map((f) => `${f}: ${tart.want[f]} of ${tart.parts} parts`).join(", ")}>
              {tart.fruits.map((f, i) => (
                <div key={f} className={`wgc-target-row${i ? " ruled" : ""}`}>
                  <img src={FRUIT_IMG[f]} alt="" />
                  <span className="wgc-eq">=</span>
                  <span className="wgc-frac"><b>{tart.want[f]}</b><i /><b>{tart.parts}</b></span>
                </div>
              ))}
            </div>

            {/* the fruit cards: tap one to hold it */}
            <div key={`s${r}`} className="wgc-seeds">
              {tart.fruits.map((f) => (
                <button key={f} type="button" aria-label={`${f}`} aria-pressed={seed === f} className={`wgc-seed${seed === f ? " on" : ""}`} onClick={() => { poke(); setSeed(f); if (line === TART_LINES.fruitFirst) setLine(TART_LINES.both); }}>
                  <img src={FRUIT_IMG[f]} alt="" draggable={false} />
                </button>
              ))}
            </div>

            {!end ? <Bubble text={line} onHear={() => speak(line, TART_CLIPS, "cooking")} className="wgc-bub" /> : null}
            <ScoreNote n={score} label={`${score} tarts right`} icon={<img src={FRUIT_IMG.grapes} alt="" width={24} height={24} />} style={l === "wide" ? { right: 16, top: 16 } : { right: 12, top: 96 }} />
            <Tick awake={plots.some(Boolean) && !locked} onPress={check} style={{ left: at.tick[0] - 34, top: at.tick[1] - 34 }} />
            <Hand at={hand} />
            {end ? <EndCard title={missed.current.total ? "Nice work!" : "Excellent!"} line="The tart is ready to share!" stars={starsFor(missed.current.total)} onAgain={onAgain} onDone={onDone} /> : null}
          </div>
        );
      }}
    </Board>
  );
}

// ===============================================================================================================
// Always at the ground: the fishing race (Lake Race). The net brings up fish and then rocks; say the new score.

const RACE_CLIPS: Record<string, string> = {
  "It's a fishing race! Let's catch more fish than them.": "0447c6544adfb622",
  "Spot on! The fish are ours!": "7e1ba1b69c0e709f",
  "We won the race! Great fishing!": "37e6efe6a5549e80",
};
const CATCHES = [
  { kind: "fish" as const, n: 3, from: 5, keys: [7, 8, 9], ask: "Our net caught 3 more fish!", hint: "Not yet! Count on 3 from 5.", praise: "Spot on! The fish are ours!" },
  { kind: "rock" as const, n: 2, from: 8, keys: [5, 6, 7], ask: "Oh no, 2 rocks! Rocks take fish away.", hint: "Not yet! Take 2 away from 8.", praise: "Yes! We still have more than Sunny!" },
];
const SUNNY = 4;
const RACE_INTRO = "It's a fishing race! Let's catch more fish than them.";

const WATER = { sky: "linear-gradient(#BEE8F2,#A9E0EF 60%,#98D6E9)", sand: "#F3CD91", sandDk: "#E7B871", pad: "#57A63A", padHi: "#69BB49" };
const PAD_SVG = `<svg viewBox="0 0 64 64" width="100%" height="100%"><circle cx="32" cy="32" r="27" fill="${WATER.pad}"/><circle cx="32" cy="32" r="27" fill="${WATER.padHi}" opacity=".45"/><g stroke="#3E8A28" stroke-width="1.4" opacity=".7"><line x1="32" y1="32" x2="32" y2="7"/><line x1="32" y1="32" x2="54" y2="20"/><line x1="32" y1="32" x2="55" y2="42"/><line x1="32" y1="32" x2="34" y2="58"/><line x1="32" y1="32" x2="10" y2="46"/><line x1="32" y1="32" x2="9" y2="22"/></g></svg>`;
const FLOWER_SVG = `<svg viewBox="0 0 40 40" width="100%" height="100%"><g fill="#F6A8CB"><ellipse cx="20" cy="9" rx="5" ry="8"/><ellipse cx="31" cy="20" rx="8" ry="5"/><ellipse cx="20" cy="31" rx="5" ry="8"/><ellipse cx="9" cy="20" rx="8" ry="5"/></g><circle cx="20" cy="20" r="5" fill="#FFD23F"/></svg>`;
const REEDS_SVG = `<svg viewBox="0 0 70 104" width="100%" height="100%"><g stroke="#4F9E37" stroke-width="4" stroke-linecap="round"><line x1="18" y1="102" x2="14" y2="34"/><line x1="34" y1="102" x2="35" y2="16"/><line x1="50" y1="102" x2="55" y2="40"/></g><g fill="#8A5A2B"><rect x="30" y="12" width="9" height="26" rx="4.5"/><rect x="9" y="30" width="8" height="22" rx="4"/><rect x="51" y="36" width="8" height="22" rx="4"/></g></svg>`;
const ROCKS_SVG = `<svg viewBox="0 0 90 46" width="100%" height="100%"><ellipse cx="26" cy="34" rx="24" ry="12" fill="#7D838A"/><ellipse cx="26" cy="30" rx="24" ry="12" fill="#A2A8AE"/><ellipse cx="62" cy="37" rx="18" ry="9" fill="#6E747B"/><ellipse cx="62" cy="34" rx="18" ry="9" fill="#969CA2"/></svg>`;
const RIPPLE_SVG = `<svg viewBox="0 0 40 12" width="100%" height="100%"><path d="M2 6 Q10 1 18 6 T38 6" fill="none" stroke="#7FCBDD" stroke-width="2.5" stroke-linecap="round"/></svg>`;
const SAND_TR = `<svg viewBox="0 0 300 210" width="100%" height="100%"><path d="M300 0 L300 210 C210 200 150 150 140 90 C132 42 180 6 240 2 Z" fill="${WATER.sand}"/><path d="M300 30 L300 150 C240 145 196 118 190 84 C185 54 214 34 252 32 Z" fill="${WATER.sandDk}"/><circle cx="196" cy="150" r="7" fill="#B8945A"/></svg>`;
const SAND_BL = `<svg viewBox="0 0 240 150" width="100%" height="100%"><path d="M0 150 L0 30 C70 34 130 66 140 106 C146 132 116 150 76 150 Z" fill="${WATER.sand}"/><path d="M0 150 L0 74 C48 78 92 100 100 124 C104 140 82 150 54 150 Z" fill="${WATER.sandDk}"/></svg>`;
/** Lake Race's first decor preset, on its 1024 x 576 lake */
const DECOR: { kind: "pad" | "fl" | "reed" | "rock" | "rip"; x: number; y: number; w: number; h: number }[] = [
  { kind: "pad", x: 20, y: 300, w: 72, h: 72 }, { kind: "pad", x: 116, y: 452, w: 50, h: 50 }, { kind: "fl", x: 34, y: 314, w: 34, h: 34 },
  { kind: "pad", x: 916, y: 138, w: 66, h: 66 }, { kind: "pad", x: 950, y: 328, w: 48, h: 48 }, { kind: "fl", x: 930, y: 152, w: 32, h: 32 },
  { kind: "reed", x: 838, y: -10, w: 82, h: 118 }, { kind: "reed", x: 118, y: 452, w: 78, h: 112 }, { kind: "rock", x: 900, y: 470, w: 92, h: 46 },
  { kind: "rip", x: 250, y: 344, w: 46, h: 14 }, { kind: "rip", x: 748, y: 372, w: 46, h: 14 }, { kind: "rip", x: 176, y: 132, w: 40, h: 12 },
  { kind: "rip", x: 852, y: 232, w: 40, h: 12 }, { kind: "rip", x: 470, y: 314, w: 42, h: 13 },
];
const DECOR_SVG = { pad: PAD_SVG, fl: FLOWER_SVG, reed: REEDS_SVG, rock: ROCKS_SVG, rip: RIPPLE_SVG };

function svgBox(html: string, style?: CSSProperties) {
  return <div style={{ lineHeight: 0, ...style }} dangerouslySetInnerHTML={{ __html: html }} />;
}
function boatSvg(side: "child" | "opp", label: string) {
  const out = side === "child" ? "#7C3AED" : "#D6890F";
  const deck = side === "child" ? "#A78BFA" : "#F6AE3C";
  const trim = side === "child" ? "#EDE4FF" : "#FFE7C2";
  return `<svg viewBox="0 0 96 152" width="100%" height="100%" style="overflow:visible">
    <path d="M48 6 C70 20 82 60 78 108 C76 132 64 146 48 146 C32 146 20 132 18 108 C14 60 26 20 48 6 Z" fill="${out}"/>
    <path d="M48 17 C66 29 74 60 71 104 C69 124 60 136 48 136 C36 136 27 124 25 104 C22 60 30 29 48 17 Z" fill="${deck}"/>
    <rect x="26" y="54" width="44" height="9" rx="4" fill="${trim}"/><rect x="28" y="86" width="40" height="9" rx="4" fill="${trim}"/>
    <rect x="0" y="70" width="30" height="6" rx="3" fill="#9A6534" transform="rotate(-22 15 73)"/><rect x="66" y="70" width="30" height="6" rx="3" fill="#9A6534" transform="rotate(22 81 73)"/>
    <text x="48" y="128" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="900" font-size="13" fill="${out}">${label}</text></svg>`;
}
function netSvg() {
  const cx = 100, cy = 100;
  let lines = "", weights = "";
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2, x = cx + Math.cos(a) * 94, y = cy + Math.sin(a) * 94;
    lines += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`;
    weights += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#EAD9A6" stroke="#C9AE6A" stroke-width="1"/>`;
  }
  const rings = [24, 46, 68, 88].map((r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`).join("");
  return `<svg viewBox="0 0 200 200" width="100%" height="100%"><circle cx="${cx}" cy="${cy}" r="92" fill="rgba(255,255,255,.22)"/><g fill="none" stroke="#123C4A" stroke-width="2.1" opacity="0.82">${lines}${rings}</g>${weights}<circle cx="${cx}" cy="${cy}" r="6.5" fill="#0E4C63"/></svg>`;
}
const NET_HTML = netSvg();

const RACE_AT = {
  wide: { net: [400, 150] as Pt, netSize: 230, cell: 58, boats: { x: 400, y: 268, k: 0.62 }, char: 150, you: [178, 438] as Pt, opp: [622, 438] as Pt },
  tall: { net: [180, 200] as Pt, netSize: 210, cell: 54, boats: { x: 180, y: 322, k: 0.45 }, char: 112, you: [130, 610] as Pt, opp: [230, 610] as Pt },
};

function RaceGame({ onAgain, onDone }: { onAgain: () => void; onDone: () => void }) {
  const clock = useClock();
  const [r, setR] = useState(0);
  const c = CATCHES[r];
  const [step, setStep] = useState<"intro" | "net" | "ask" | "right" | "out">("intro");
  const [you, setYou] = useState(CATCHES[0].from);
  const [picked, setPicked] = useState<number[]>([]);
  const [line, setLine] = useState(RACE_INTRO);
  const [mood, setMood] = useState<"default" | "happy" | "confused">("default");
  const [won, setWon] = useState(0);
  const missed = useRef({ now: false, total: 0 });
  const [end, setEnd] = useState(false);
  const [sail, setSail] = useState(false);
  const layoutRef = useRef<Layout>("wide");
  const say = (t: string) => { setLine(t); speak(t, RACE_CLIPS, "score"); };

  useEffect(() => {
    speak(RACE_INTRO, RACE_CLIPS, "score");
    clock.after(1800, () => setStep("net"));
    clock.after(3200, () => { setStep("ask"); setLine(CATCHES[0].ask); });
  }, [clock]);

  const answer = c.kind === "fish" ? c.from + c.n : c.from - c.n;
  const pick = (k: number) => {
    if (step !== "ask" || picked.includes(k)) return;
    setPicked((p) => [...p, k]);
    if (k !== answer) {
      if (!missed.current.now) missed.current.total += 1;
      missed.current.now = true;
      playSfx("wrong", 0.45);
      setMood("confused");
      say(c.hint);
      return;
    }
    setStep("right");
    playSfx("correct", 0.5);
    setMood("happy");
    if (!missed.current.now) setWon((w) => w + 1);
    say(c.praise);
    // the token lands on our catch card, then the score counts up (or down) to the answer one at a time
    const dir = c.kind === "fish" ? 1 : -1;
    for (let i = 1; i <= c.n; i++) clock.after(800 + i * 260, () => setYou(c.from + dir * i));
    clock.after(2900, () => {
      if (r + 1 >= CATCHES.length) {
        setStep("out");
        setSail(true);
        clock.after(1300, () => { setEnd(true); say("We won the race! Great fishing!"); });
        return;
      }
      setStep("out");
      clock.after(500, () => {
        setR(r + 1);
        setPicked([]);
        setMood("default");
        missed.current.now = false;
        setStep("net");
        clock.after(1300, () => { setStep("ask"); setLine(CATCHES[r + 1].ask); });
      });
    });
  };

  const showNet = step === "net" || step === "ask" || step === "right";
  return (
    <Board bg="#A9E0EF">
      {(l) => {
        layoutRef.current = l;
        const at = RACE_AT[l];
        const [W, H] = FRAME[l];
        const sx = W / 1024;
        const sy = H / 576;
        const sz = Math.min(sx, sy) * (l === "tall" ? 1.25 : 1);
        const n = c.n;
        const gridW = n * at.cell;
        const tokenGo = step === "right" || step === "out";
        const tokenFrom: Pt = [at.net[0], at.net[1] + at.netSize / 2 - 6];
        return (
          <div className="wgr">
            {/* the lake (Lake Race's backdrop and its first decor preset) */}
            <div className="wgr-sky" style={{ background: WATER.sky }} />
            <div style={{ position: "absolute", top: -70 * sz, right: -60 * sz, width: 300 * sz, height: 210 * sz }}>{svgBox(SAND_TR)}</div>
            <div style={{ position: "absolute", bottom: -40 * sz, left: -50 * sz, width: 240 * sz, height: 150 * sz }}>{svgBox(SAND_BL)}</div>
            {DECOR.map((d, i) => (
              <div key={i} aria-hidden="true" style={{ position: "absolute", left: d.x * sx, top: d.y * sy, width: d.w * sz, height: d.h * sz, opacity: d.kind === "rip" ? 0.55 : 0.95, pointerEvents: "none" }}>{svgBox(DECOR_SVG[d.kind], { width: "100%", height: "100%" })}</div>
            ))}

            {/* the two boats bob; at the end they sail up to the finish */}
            <div className={`wgr-boats${sail ? " sail" : ""}`} style={{ left: at.boats.x, top: at.boats.y, transform: `translate(-50%, 0) scale(${at.boats.k})` }} aria-hidden="true">
              <div className="wgr-boat">{svgBox(boatSvg("child", "YOU"))}</div>
              <div className="wgr-boat b2">{svgBox(boatSvg("opp", "SUN"))}</div>
            </div>

            {/* the net comes up with the catch: fish in green squares, or rocks in orange ones, and its +/- card */}
            {showNet ? (
              <div key={`n${r}`} className="wgr-catch">
                <div className="wgr-net" style={{ left: at.net[0] - at.netSize / 2, top: at.net[1] - at.netSize / 2, width: at.netSize, height: at.netSize }}>{svgBox(NET_HTML, { width: "100%", height: "100%" })}</div>
                <div className="wgr-grid" style={{ left: at.net[0] - gridW / 2, top: at.net[1] - at.cell / 2, width: gridW, height: at.cell }}>
                  {Array.from({ length: n }, (_, i) => (
                    <div key={i} className={`wgr-cell ${c.kind}`} style={{ width: at.cell, height: at.cell, animationDelay: `${0.5 + i * 0.18}s` }}>
                      {c.kind === "fish" ? <img src={`${A}/score/blueFish.svg`} alt="" /> : <span className="wgr-rock" />}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {showNet || step === "out" ? (
              <div
                key={`t${r}`}
                className={`wgr-token ${c.kind}${tokenGo ? " go" : ""}`}
                style={{ left: tokenFrom[0] - 46, top: tokenFrom[1] - 24, transform: tokenGo ? `translate(${at.you[0] - tokenFrom[0]}px, ${at.you[1] - 40 - tokenFrom[1]}px) scale(.7)` : undefined, opacity: step === "out" ? 0 : undefined }}
              >
                {c.kind === "fish" ? <img src={`${A}/score/blueFish.svg`} alt="" /> : <span className="wgr-rock sm" />}
                <b>{(c.kind === "fish" ? "+" : "-") + c.n}</b>
              </div>
            ) : null}

            {/* the two catch cards */}
            <CatchCard label="You" value={you} color="#7C3AED" fish={`${A}/score/blueFish.svg`} style={{ left: at.you[0], top: at.you[1] }} bump={step === "right"} />
            <CatchCard label="Sunny" value={SUNNY} color="#D6890F" fish={`${A}/score/orangeFish.svg`} style={{ left: at.opp[0], top: at.opp[1] }} />

            {/* the teammate (he talks) and Sunny */}
            <img className="wgr-char" src={`${A}/score/delivery-boy-${mood}.png`} alt="Your teammate" style={{ left: 8, height: at.char }} />
            <img className="wgr-char flip" src={`${A}/score/sunny-${end ? "confused" : mood === "confused" ? "happy" : "default"}.png`} alt="Sunny" style={{ right: 8, height: at.char }} />

            {/* the question: how many now? three keys */}
            {step === "ask" || step === "right" ? (
              <div key={`q${r}`} className="wgr-panel">
                <span className="wgr-panel-q">What is our score now?</span>
                <div className="wgr-keys">
                  {c.keys.map((k) => {
                    const st = picked.includes(k) ? (k === answer ? " right" : " wrong") : "";
                    return <button key={k} type="button" className={`wgr-key${st}`} onClick={() => pick(k)} disabled={step !== "ask" || picked.includes(k)} aria-label={`${k} fish`}>{k}</button>;
                  })}
                </div>
              </div>
            ) : null}

            {!end ? (
              <Bubble
                text={line}
                onHear={() => speak(line, RACE_CLIPS, "score")}
                className="wgr-bub"
                style={l === "wide" ? { left: 16, bottom: at.char * 0.98 + 4 } : undefined}
                tail={l === "wide" ? { left: 34, bottom: -6, transform: "rotate(-45deg)" } : undefined}
              />
            ) : null}
            <ScoreNote n={won} label={`${won} catches right`} icon={<img src={`${A}/score/blueFish.svg`} alt="" width={26} height={8} style={{ height: "auto" }} />} style={l === "wide" ? { right: 16, top: 16 } : { right: 10, top: 110 }} />
            {end ? <EndCard title="We won the race!" line={`Our score is ${you}. Sunny has ${SUNNY}.`} stars={starsFor(missed.current.total)} face={`${A}/score/delivery-boy-happy.png`} onAgain={onAgain} onDone={onDone} /> : null}
          </div>
        );
      }}
    </Board>
  );
}

function CatchCard({ label, value, color, fish, style, bump }: { label: string; value: number; color: string; fish: string; style: CSSProperties; bump?: boolean }) {
  return (
    <div className="wgr-pill" style={{ ...style, borderColor: color }} aria-label={`${label}: ${value} fish`}>
      <span className="wgr-pill-l">{label}</span>
      <span className="wgr-pill-v">
        <img src={fish} alt="" />
        <b key={value} className={bump ? "tick" : ""} style={{ color }}>{value}</b>
      </span>
    </div>
  );
}

// ===============================================================================================================
// Enjoy Shopping: Grammy's Shopping. Pay the price on the basket with ₹10 notes and ₹1 coins, then the tick.

const SHOP_CLIPS: Record<string, string> = {
  "Please help me pay for my shopping!": "485773ef966da80b",
  "Pay the price on the basket.": "6b3a2951cb495ed0",
  "Now it is right. Thank you!": "7491845fc107272c",
  "Almost! Add a little more.": "56920da203e28e84",
  "Not yet! Add a lot more.": "8d30900193aca3ad",
  "Almost! Take a little back.": "068386beb5ec0bd9",
  "Oops! Take a lot back.": "0139cd93f76157fa",
  "All done! Thank you for your help!": "263824f228f8e465",
  "Great!": "8f18902413bf965e",
  "Just right! Thank you!": "52aae3c59bbe9303",
};
const BASKETS = [
  { price: 12, color: "#94BF84", dark: "#79AC65", item: "🍓", praise: "Great!" },
  { price: 21, color: "#E8A855", dark: "#D49440", item: "🍊", praise: "Just right! Thank you!" },
];
type Money = "note" | "coin";

/** Grammy's basket (Basket.tsx): the woven basket in its colour, the fruit peeking over the rim, the price card */
function Basket({ price, color, dark, item }: { price: number; color: string; dark: string; item: string }) {
  const rows: [number, number[]][] = [[242, [25, 121, 73, 169, 217]], [263, [39, 145, 93, 199]], [283, [18, 75, 130, 185, 240]], [306, [32, 128, 80, 176, 224]]];
  const fruit = [[15, 0, -15], [55, 5, 5], [95, 2, -8], [135, 7, 12], [175, 1, -5], [210, 5, 8], [240, -2, 22]];
  return (
    <div className="wgs-basket" aria-label={`A basket of fruit. It costs ₹${price}`}>
      <div className="wgs-basket-fruit" aria-hidden="true">
        {fruit.map(([x, b, rot], i) => <span key={i} style={{ left: x, bottom: b, rotate: `${rot}deg` }}>{item}</span>)}
      </div>
      <svg viewBox="0 0 306 325" aria-hidden="true">
        <path d="M8.75778 223.621C7.81092 211.974 17.0073 202 28.692 202H238.308C249.993 202 259.189 211.974 258.242 223.621L251.494 306.621C250.65 317.004 241.977 325 231.56 325H35.44C25.0227 325 16.3499 317.004 15.5057 306.621L8.75778 223.621Z" fill={color} />
        <path opacity="0.1" d="M9.50038 231L257.5 231.134L258 222L9.00005 222L9.50038 231Z" fill="black" />
        <rect y="194" width="270" height="29" rx="9" fill={color} />
        <g stroke={dark} strokeWidth="7" strokeLinecap="round">
          {rows.map(([y, xs]) => xs.map((x) => <path key={`${y}-${x}`} d={`M${x} ${y}H${x + 18.5}`} />))}
        </g>
        <rect x="68" y="242" width="133" height="52" rx="10" fill="white" />
      </svg>
      <span className="wgs-price">₹{price}</span>
    </div>
  );
}

const SHOP_AT = {
  wide: { purse: { x: 400, top: 300, k: 0.94 }, counterY: 225, money: 262 },
  tall: { purse: { x: 180, top: 470, k: 0.9 }, counterY: 300, money: 372 },
};

function ShopGame({ onAgain, onDone }: { onAgain: () => void; onDone: () => void }) {
  const clock = useClock();
  const frame = useRef<HTMLDivElement>(null);
  const [r, setR] = useState(0);
  const b = BASKETS[r];
  const [items, setItems] = useState<{ id: number; kind: Money }[]>([]);
  const nextId = useRef(1);
  const [line, setLine] = useState("Please help me pay for my shopping!");
  const [shake, setShake] = useState(0);
  const [basketState, setBasketState] = useState<"in" | "idle" | "out">("in");
  const [moneyOut, setMoneyOut] = useState(false);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [happy, setHappy] = useState(false);
  const missed = useRef({ now: false, total: 0 });
  const [end, setEnd] = useState(false);
  const [drag, setDrag] = useState<{ kind: Money; x: number; y: number; moved: boolean; sx: number; sy: number } | null>(null);
  const layoutRef = useRef<Layout>("wide");
  const say = (t: string) => { setLine(t); speak(t, SHOP_CLIPS, "shopping"); };

  useEffect(() => {
    speak("Please help me pay for my shopping!", SHOP_CLIPS, "shopping");
    clock.after(2300, () => say("Pay the price on the basket."));
    clock.after(600, () => setBasketState("idle"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock]);

  const notes = items.filter((i) => i.kind === "note").length;
  const coins = items.filter((i) => i.kind === "coin").length;
  const paid = notes * 10 + coins;

  const [hand, poke] = useIdleHand(() => {
    const at = SHOP_AT[layoutRef.current];
    if (paid === b.price) return layoutRef.current === "wide" ? [748, 402] : [316, 320];
    const k = at.purse.k;
    const left = at.purse.x - (373 * k) / 2;
    if (paid > b.price) return [at.purse.x, at.money + 30];
    return b.price - paid >= 10 ? [left + 90 * k, at.purse.top + 110 * k] : [left + 270 * k, at.purse.top + 120 * k];
  }, !locked && !end, [r, paid]);

  const add = (kind: Money) => {
    if (locked) return;
    poke();
    if (items.length >= 14) return;
    setItems((xs) => [...xs, { id: nextId.current++, kind }]);
  };
  const remove = (id: number) => {
    if (locked) return;
    poke();
    setItems((xs) => xs.filter((x) => x.id !== id));
  };

  // a note or coin from the purse: a tap puts it on the counter, and so does a drag let go above the purse
  const toFrame = (e: React.PointerEvent) => {
    const el = frame.current;
    if (!el) return { x: 0, y: 0 };
    const box = el.getBoundingClientRect();
    const k = box.width / FRAME[layoutRef.current][0];
    return { x: (e.clientX - box.left) / k, y: (e.clientY - box.top) / k };
  };
  const down = (kind: Money) => (e: React.PointerEvent) => {
    if (locked) return;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const p = toFrame(e);
    setDrag({ kind, x: p.x, y: p.y, sx: p.x, sy: p.y, moved: false });
  };
  const move = (e: React.PointerEvent) => {
    if (!drag) return;
    const p = toFrame(e);
    setDrag({ ...drag, x: p.x, y: p.y, moved: drag.moved || Math.hypot(p.x - drag.sx, p.y - drag.sy) > 8 });
  };
  const up = (e: React.PointerEvent) => {
    if (!drag) return;
    const p = toFrame(e);
    const purseTop = SHOP_AT[layoutRef.current].purse.top + 40;
    if (!drag.moved || p.y < purseTop) add(drag.kind);
    setDrag(null);
  };

  const check = () => {
    if (locked || !items.length) return;
    poke();
    if (paid !== b.price) {
      if (!missed.current.now) missed.current.total += 1;
      missed.current.now = true;
      playSfx("wrong", 0.45);
      setShake((s) => s + 1);
      const d = Math.abs(paid - b.price);
      say(paid < b.price ? (d < 10 ? "Almost! Add a little more." : "Not yet! Add a lot more.") : d < 10 ? "Almost! Take a little back." : "Oops! Take a lot back.");
      return;
    }
    setLocked(true);
    setHappy(true);
    playSfx("correct", 0.5);
    const first = !missed.current.now;
    if (first) setScore((s) => s + 1);
    say(first ? b.praise : "Now it is right. Thank you!");
    clock.after(1500, () => { setMoneyOut(true); setBasketState("out"); });
    clock.after(2300, () => {
      setHappy(false);
      if (r + 1 >= BASKETS.length) {
        setEnd(true);
        say("All done! Thank you for your help!");
        return;
      }
      setR(r + 1);
      setItems([]);
      setMoneyOut(false);
      missed.current.now = false;
      setBasketState("in");
      setLocked(false);
      say("Pay the price on the basket.");
      clock.after(700, () => setBasketState("idle"));
    });
  };

  return (
    <Board bg="#E0EBF7" frameRef={frame}>
      {(l) => {
        layoutRef.current = l;
        const at = SHOP_AT[l];
        const wide = l === "wide";
        return (
          <div className="wgs" onPointerMove={move} onPointerUp={up} onPointerDown={() => poke()}>
            <img className="wgs-shelves" src={`${A}/shopping/shelves.svg`} alt="" draggable={false} />
            <div className="wgs-counter" style={{ top: at.counterY }} />

            <div key={`b${r}`} className={`wgs-basket-slot ${basketState}${shake ? " shake" : ""}`} data-shake={shake}>
              <div key={shake} className={shake ? "wgs-shaker" : ""}><Basket {...b} /></div>
            </div>

            {/* the counter card: how many notes and coins are down, and the total paid */}
            <div className="wgs-card" aria-live="polite">
              <div className="wgs-row"><img src={`${A}/shopping/note-icon.png`} alt="₹10 notes" className="wgs-ic-note" /><span className="wgs-eq">=</span><b>{notes}</b></div>
              <div className="wgs-row"><img src={`${A}/shopping/coin.svg`} alt="₹1 coins" className="wgs-ic-coin" /><span className="wgs-eq">=</span><b>{coins}</b></div>
              <div className="wgs-rule" />
              <div className="wgs-row"><span className="wgs-paid">Paid</span><span className="wgs-eq">=</span><b>₹{paid}</b></div>
            </div>

            {/* the money on the counter: tap one to take it back */}
            <div key={`m${r}-${shake}`} className={`wgs-money${moneyOut ? " out" : ""}${shake ? " shake" : ""}`} style={{ top: at.money }}>
              {notes ? (
                <div className="wgs-stack" style={{ width: 45 + (notes - 1) * 18, height: 62 }}>
                  {items.filter((i) => i.kind === "note").map((it, i) => (
                    <button key={it.id} type="button" className="wgs-down note" style={{ left: i * 18, rotate: `${(i % 3) * 4 - 4}deg` }} onClick={() => remove(it.id)} aria-label="Take back a ₹10 note">
                      <img src={`${A}/shopping/note.svg`} alt="" draggable={false} />
                    </button>
                  ))}
                </div>
              ) : null}
              {coins ? (
                <div className="wgs-stack" style={{ width: 30 + (coins - 1) * 16, height: 44 }}>
                  {items.filter((i) => i.kind === "coin").map((it, i) => (
                    <button key={it.id} type="button" className="wgs-down coin" style={{ left: i * 16, top: (i % 2) * 10 }} onClick={() => remove(it.id)} aria-label="Take back a ₹1 coin">
                      <img src={`${A}/shopping/coin.svg`} alt="" draggable={false} />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* the purse: ₹10 notes on the left, ₹1 coins on the right */}
            <div className="wgs-purse" style={{ left: at.purse.x - 373 / 2, top: at.purse.top, transform: `scale(${at.purse.k})` }}>
              <img className="wgs-tray" src={`${A}/shopping/purse-tray.svg`} alt="" draggable={false} />
              <button type="button" className="wgs-take notes" onPointerDown={down("note")} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), add("note"))} aria-label="Put a ₹10 note on the counter">
                {[[-8, 5, 20], [-5, 25, 25], [-2, 45, 22], [1, 65, 28], [4, 85, 21], [7, 105, 26]].map(([rot, x, y], i) => (
                  <img key={i} src={`${A}/shopping/note.svg`} alt="" draggable={false} style={{ left: x, bottom: y, rotate: `${rot}deg` }} />
                ))}
              </button>
              <button type="button" className="wgs-take coins" onPointerDown={down("coin")} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), add("coin"))} aria-label="Put a ₹1 coin on the counter">
                {[[200, 35], [230, 45], [260, 38], [290, 48], [235, 5], [265, 10], [310, 25]].map(([x, y], i) => (
                  <img key={i} src={`${A}/shopping/coin.svg`} alt="" draggable={false} style={{ left: x - 190, bottom: y }} />
                ))}
              </button>
            </div>
            {drag?.moved ? <img className={`wgs-ghost ${drag.kind}`} src={`${A}/shopping/${drag.kind}.svg`} alt="" style={{ left: drag.x, top: drag.y }} /> : null}

            <img className={`wgs-grammy${happy ? " happy" : ""}`} src={`${A}/shopping/grammy-neutral.svg`} alt="Grammy" />
            {!end ? <Bubble text={line} onHear={() => speak(line, SHOP_CLIPS, "shopping")} className="wgs-bub" tail={wide ? { left: -6, bottom: 14 } : { left: -6, top: 18 }} /> : null}
            <ScoreNote n={score} label={`${score} baskets paid`} icon={<span className="wgs-note-ic" aria-hidden="true">🧺</span>} style={wide ? { right: 16, top: 16 } : { right: 10, top: 100 }} />
            <Tick awake={items.length > 0 && !locked} onPress={check} style={wide ? { right: 18, bottom: 14 } : { right: 10, top: 286 }} />
            <Hand at={hand} />
            {end ? <EndCard title={missed.current.total ? "Nice work!" : "Excellent!"} line="All done! Thank you for your help!" stars={starsFor(missed.current.total)} face={`${A}/shopping/grammy-neutral.svg`} onAgain={onAgain} onDone={onDone} /> : null}
          </div>
        );
      }}
    </Board>
  );
}
