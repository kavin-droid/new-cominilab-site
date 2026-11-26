"use client";

import { useEffect, useRef, useState } from "react";
import { TryModal } from "./TryModal";
import { mountActivity, type Activity } from "./mfeHost";
import { PolaroidArc } from "./PolaroidArc";

// "One idea. Many ways to understand it." (owner, 2026-11-24): the polaroids on the app's cards-home arc. Each card is a
// picture and one word under it, nothing else. The cards play one after another (each one's real activity in its
// picture, autoplay mode: silent, playing itself), the arc turning to bring the playing card to the middle; hovering a
// card plays that one instead. Drag, swipe or wheel to turn the arc; the card it settles on plays. Clicking a card opens
// it big, to try it with sound.
// fx: which part of the 800 x 360 activity stays in view in the square picture (0 left .. 1 right)
// clip: a recording to loop instead of playing the activity live (owner, 2026-11-25: the explainer and the story are
// laid out for other shapes and looked poor cropped into the square; their clips were recorded in a square frame,
// playing themselves: public/lab/video/idea-*.mp4 / .webm)
type Card = { label: string; line: string; name: string; poster: string; fx: number; play: Activity; tryIt: Activity; clip?: string };
const DUCKS: Activity = { type: "mfe", id: "coco-m01-every-duck-home-v2", url: "/lab/try/coco-m01-every-duck-home-v2/main.js" };
const ROLL: Activity = { type: "mfe", id: "roll-call", url: "/lab/try/roll-call/main.js" };
const SHEET: Activity = { type: "mfe", id: "pw-counting", url: "/lab/try/practice-worksheets/main.js", props: { game: "counting" } };
const FRUIT: Activity = { type: "mfe", id: "cg-fruit-catch", url: "/lab/try/concept-games/main.js", props: { game: "fruit-catch" } };
// the centre card is the sheepdog game; the other game, then the worksheet, to its right (owner, 2026-11-24)
const CARDS: Card[] = [
  { label: "Explainer", line: "See how it works", name: "Count the ducks", fx: 0.5, poster: "/lab/thumbs/counting-stage1.webp", clip: "/lab/video/idea-explainer", play: { type: "frame", src: "/explainers/counting/stage1/?embed=1&autoplay=1" }, tryIt: { type: "frame", src: "/explainers/counting/stage1/?embed=1" } },
  { label: "Story", line: "Watch it in a story", name: "Every Duck Home", fx: 0.5, poster: "/lab/thumbs/story-ducks-v2.webp", clip: "/lab/video/idea-story", play: DUCKS, tryIt: DUCKS },
  { label: "Game", line: "Play with it", name: "Roll Call", fx: 0.62, poster: "/lab/thumbs/roll-call.webp", play: ROLL, tryIt: ROLL },
  { label: "Game", line: "Try it another way", name: "Fruit Catch", fx: 0.5, poster: "/lab/thumbs/fruit-catch-counting.webp", play: FRUIT, tryIt: FRUIT },
  { label: "Worksheet", line: "Practise it", name: "Counting practice", fx: 0.5, poster: "/lab/thumbs/pw-counting.webp", play: SHEET, tryIt: SHEET },
];
const START = 2;

function SlideCard({ c, i, playing, onHover, onOpen }: { c: Card; i: number; playing: boolean; onHover: (i: number | null) => void; onOpen: (c: Card) => void }) {
  const host = useRef<HTMLSpanElement>(null);
  const [live, setLive] = useState(false);
  useEffect(() => {
    setLive(false);
    if (!playing || c.clip || c.play.type !== "mfe" || !host.current) return;
    let off = false;
    const run = mountActivity(host.current, c.play, { autoplay: true });
    run.ready.then(() => !off && window.setTimeout(() => !off && setLive(true), 250)).catch(() => {});
    return () => { off = true; run.stop(); };
  }, [playing, c.play]);
  return (
    <div className={`is-item${playing ? " playing" : ""}`} onMouseEnter={() => onHover(i)} onMouseLeave={() => onHover(null)}>
      <button type="button" className="pol is-card" onClick={() => onOpen(c)} onFocus={() => onHover(i)} aria-label={`${c.label}: ${c.name}. Press to try it.`}>
        <span className="pol-pic" style={{ ["--fx" as string]: c.fx }}>
          <img className={`is-poster${live ? " gone" : ""}`} src={c.poster} alt="" width={800} height={600} draggable={false} />
          {playing && c.clip ? (
            <video className="is-clip" autoPlay muted loop playsInline preload="auto" poster={`${c.clip}-poster.jpg`} onPlaying={() => setLive(true)} aria-hidden="true">
              <source src={`${c.clip}.webm`} type="video/webm" />
              <source src={`${c.clip}.mp4`} type="video/mp4" />
            </video>
          ) : null}
          {playing && !c.clip && c.play.type === "frame" ? <span className="cov"><iframe className="cov-in" src={c.play.src} title={c.name} tabIndex={-1} onLoad={() => window.setTimeout(() => setLive(true), 400)} /></span> : null}
          <span className="cov" aria-hidden="true"><span className="cov-in" ref={host} /></span>
        </span>
        <span className="is-cap" aria-hidden="true"><b>{c.label}</b><span>{c.line}</span></span>
      </button>
    </div>
  );
}

// the arc holds the five cards twice over so the ticker loops round well out of sight
const SLOTS = CARDS.length * 2;

export function IdeaSlider() {
  const box = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [centre, setCentre] = useState(START); // the slot passing the middle of the arc
  const [seen, setSeen] = useState(false);
  const [open, setOpen] = useState<Card | null>(null);
  // a card takes over once the pointer has rested on it a moment, so sweeping across the arc doesn't start five games
  const rest = useRef(0);
  const onHover = (i: number | null) => {
    window.clearTimeout(rest.current);
    if (i === null) return setHover(null);
    rest.current = window.setTimeout(() => setHover(i), 260);
  };

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // the cards run past like a ticker (owner, 2026-11-25); the one in the middle plays, or the one hovered (which
  // holds the ticker)
  const playingSlot = open || !seen ? null : hover ?? centre;

  return (
    <div className="is" ref={box}>
      <PolaroidArc
        className="is-arc"
        label="One idea, five ways: counting"
        n={SLOTS}
        wrap
        drift={0.08}
        start={START}
        onCentre={setCentre}
        render={(i) => <SlideCard c={CARDS[i % CARDS.length]} i={i} playing={playingSlot === i} onHover={onHover} onOpen={setOpen} />}
      />
      {open ? <TryModal title={open.name} activity={open.tryIt} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
