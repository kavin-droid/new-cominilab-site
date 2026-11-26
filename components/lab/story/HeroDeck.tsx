"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TryModal } from "./TryModal";
import { mountActivity, type Activity } from "./mfeHost";

// The hero (owner's wireframe, 2026-11-25): the heading on the left, a big landscape phone under it playing one
// activity, and the other activities floating around as polaroid cards. Drag a card into the phone (or tap it) and it
// plays; the one that was playing comes out of the phone as a card into that spot. When a recording has had its turn,
// the next card moves in by itself the same way. Tapping the phone opens what's playing to try, with sound.
// fx: which part of the 800 x 360 activity stays in view in the phone (0 left .. 1 right), where its action is
type Act = { name: string; poster: string; fx: number; act: Extract<Activity, { type: "mfe" }> };
const ACTS: Act[] = [
  { name: "Delivery Boxes", fx: 0.6, poster: "/lab/video/delivery-boxes-poster.jpg", act: { type: "mfe", id: "bus-stop", url: "/lab/games/delivery-boxes/main.js", stage: 2 } },
  { name: "Tinker's Trip", fx: 0.5, poster: "/lab/library/tinker-trip.webp", act: { type: "mfe", id: "tinker-trip", url: "/lab/try/tinker-trip/main.js" } },
  { name: "Make a Way", fx: 0.5, poster: "/lab/library/make-a-way.webp", act: { type: "mfe", id: "make-a-way", url: "/lab/try/make-a-way/main.js" } },
  { name: "Bug Feast", fx: 0.5, poster: "/lab/library/bug-feast.webp", act: { type: "mfe", id: "bug-feast", url: "/lab/try/bug-feast/main.js" } },
  { name: "Roll Call", fx: 0.6, poster: "/lab/thumbs/roll-call.webp", act: { type: "mfe", id: "roll-call", url: "/lab/try/roll-call/main.js" } },
  { name: "FrogCross", fx: 0.5, poster: "/lab/library/frog-cross.webp", act: { type: "mfe", id: "frog-cross", url: "/lab/try/frog-cross/main.js" } },
];
const TURN_MS = 15000;
const IN_MS = 520;
const OUT_MS = 560;

type Pose = { x: number; y: number; s: number; o: number };
const tf = (p: Pose) => ({ transform: `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) scale(${p.s.toFixed(3)})`, opacity: p.o });

export function HeroDeck() {
  const box = useRef<HTMLDivElement>(null);
  const screen = useRef<HTMLButtonElement>(null);
  const host = useRef<HTMLSpanElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const [playing, setPlaying] = useState(0);
  const [slots, setSlots] = useState([1, 2, 3, 5, 4]); // the activity on each floating card (the fifth is hidden on phones); owner 2026-11-25: FrogCross top left, Roll Call bottom left
  const [live, setLive] = useState(false);
  const [seen, setSeen] = useState(false);
  const [shown, setShown] = useState(false); // the entrance: phone and cards come in once
  const [open, setOpen] = useState<Act | null>(null);
  const [still, setStill] = useState(false);
  const busy = useRef(false);
  const comeOut = useRef<number | null>(null);
  const nextSlot = useRef(0);
  const state = useRef({ playing, slots });
  state.current = { playing, slots };

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { setSeen(e.isIntersecting); if (e.isIntersecting) setShown(true); }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // the activity in the phone plays itself while the hero is on screen
  useEffect(() => {
    setLive(false);
    if (!seen || open || still || !host.current) return;
    let off = false;
    const run = mountActivity(host.current, ACTS[playing].act, { autoplay: true });
    run.ready.then(() => !off && window.setTimeout(() => !off && setLive(true), 350)).catch(() => {});
    return () => { off = true; run.stop(); };
  }, [playing, seen, open, still]);

  /** where the phone's screen is, from a card's resting place: the offset and the scale that would fill it */
  const toScreen = (k: number): Pose | null => {
    const c = cards.current[k]?.parentElement, sc = screen.current;
    if (!c || !sc) return null;
    const a = c.getBoundingClientRect(), b = sc.getBoundingClientRect();
    return { x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2), s: (b.height / a.height) * 0.9, o: 0 };
  };
  const fly = (el: HTMLElement, from: Pose, to: Pose, ms: number, easing: string) =>
    el.animate([tf(from), tf(to)], { duration: still ? 1 : ms, easing, fill: "forwards" }).finished;

  /** the card in slot k goes into the phone (from `from`, where a drag left it); its activity plays; the one that was
   *  playing comes out of the phone into slot k */
  const swap = async (k: number, from: Pose = { x: 0, y: 0, s: 1, o: 1 }) => {
    const el = cards.current[k];
    const target = toScreen(k);
    if (busy.current || !el || !target) return;
    busy.current = true;
    el.classList.add("flying");
    await fly(el, from, target, IN_MS, "cubic-bezier(.45,0,.75,.35)");
    const { playing: was, slots: now } = state.current;
    comeOut.current = k;
    setSlots(now.map((a, i) => (i === k ? was : a)));
    setPlaying(now[k]);
  };
  // after the swap, the card in that slot (now the one that was playing) comes out of the phone back to its place
  useLayoutEffect(() => {
    const k = comeOut.current;
    if (k === null) return;
    comeOut.current = null;
    const el = cards.current[k];
    const from = toScreen(k);
    if (!el || !from) { busy.current = false; return; }
    el.getAnimations().forEach((a) => a.cancel());
    fly(el, { ...from, o: 0.2 }, { x: 0, y: 0, s: 1, o: 1 }, OUT_MS, "cubic-bezier(.2,.8,.25,1)").then(() => {
      el.getAnimations().forEach((a) => a.cancel());
      el.classList.remove("flying");
      busy.current = false;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slots]);

  // each recording has its turn, then the next card moves in by itself
  useEffect(() => {
    if (!seen || open || still) return;
    const t = window.setTimeout(() => {
      // the next card that is on screen (on a phone the fifth slot is hidden)
      const n = state.current.slots.length;
      for (let i = 0; i < n; i++) {
        const k = nextSlot.current % n;
        nextSlot.current += 1;
        if (cards.current[k]?.offsetParent) { swap(k); break; }
      }
    }, TURN_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, seen, open, still]);

  // drag a card: it follows the pointer; let go over the phone and it goes in, anywhere else and it floats back
  const drag = useRef<{ k: number; id: number; x: number; y: number; dx: number; dy: number; moved: boolean } | null>(null);
  const onDown = (k: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
    if (busy.current || (e.pointerType === "mouse" && e.button !== 0)) return;
    drag.current = { k, id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    d.dx = e.clientX - d.x;
    d.dy = e.clientY - d.y;
    if (!d.moved && Math.hypot(d.dx, d.dy) > 6) { d.moved = true; e.currentTarget.classList.add("dragging"); }
    if (d.moved) e.currentTarget.style.transform = `translate(${d.dx}px, ${d.dy}px) scale(1.08)`;
  };
  const onUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    const el = e.currentTarget;
    el.classList.remove("dragging");
    el.style.transform = "";
    if (!d.moved) { swap(d.k); return; } // a tap plays it too
    const sc = screen.current?.getBoundingClientRect();
    const over = sc && e.clientX > sc.left - 30 && e.clientX < sc.right + 30 && e.clientY > sc.top - 30 && e.clientY < sc.bottom + 30;
    const at: Pose = { x: d.dx, y: d.dy, s: 1.08, o: 1 };
    if (over) swap(d.k, at);
    else fly(el, at, { x: 0, y: 0, s: 1, o: 1 }, 420, "cubic-bezier(.34,1.56,.64,1)").then(() => el.getAnimations().forEach((a) => a.cancel()));
  };

  const now = ACTS[playing];
  return (
    <div className={`hx-stage${shown ? " in" : ""}`} ref={box}>
      <div className="hx-mask"><div className="hx-phone">
        <i className="hx-keys" aria-hidden="true" />
        <button type="button" ref={screen} className="hx-screen" style={{ ["--fx" as string]: now.fx }} onClick={() => setOpen(now)} aria-label={`${now.name}, playing itself. Press to play it yourself.`}>
          <img key={now.poster} className={`hx-poster${live ? " gone" : ""}`} src={now.poster} alt="" width={960} height={540} draggable={false} />
          <span className="cov" aria-hidden="true"><span className="cov-in" ref={host} /></span>
          <i className="hx-cam" aria-hidden="true" />
          <i className="hx-bar" aria-hidden="true" />
          <span className="hx-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="32" height="32"><path d="M8 5v14l11-7z" fill="#0D0D0D" /></svg></span>
        </button>
      </div></div>
      <div className="hx-deck" role="group" aria-label="More activities: drag one into the phone, or tap it, to play it">
        {slots.map((a, k) => (
          <div key={k} className={`hx-slot s${k}`}><div className="hx-par">
            <button
              type="button"
              ref={(el) => { cards.current[k] = el; }}
              className="hx-card"
              aria-label={`Play ${ACTS[a].name}`}
              onPointerDown={onDown(k)}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); swap(k); } }}
            >
              <img src={ACTS[a].poster} alt="" width={240} height={240} draggable={false} />
            </button>
          </div></div>
        ))}
      </div>
      {open ? <TryModal title={open.name} activity={open.act} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
