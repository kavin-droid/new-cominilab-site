"use client";

// The parent bear (cominilab-app-v3 public/img/who-parent-bear.png, the app's grown-up), redrawn as shapes so it can
// move the way Coco does (components/lab/motion/CocoLive.tsx): each eye, each brow and the mouth is one shape that bends
// from pose to pose (never a fade between pictures), blinks are the same morph, and the body plays a motion for the
// mood. A mood plays for its beat, settles back to idle, and plays again after a rest while it is still asked for.
import React from "react";
import "./parentbear.css";

export type BearMood = "idle" | "happy" | "think" | "worried" | "tired" | "wow" | "look" | "calm" | "proud" | "dizzy";

const HOLD: Partial<Record<BearMood, number>> = { happy: 2200, think: 3000, worried: 3200, tired: 3400, wow: 1600, look: 2800, calm: 3400, proud: 2600 };
const REST_MIN = 4500;
const REST_MAX = 8000;
const MORPH_MS = 340;
const INK = "#3B2516";
const PUPIL = "#2F3A4A";
const E = { l: 37, r: 63, y: 53 };

type Shape = number[];
type P = [number, number];
const closed = (l: P, t1: P, t2: P, r: P, b2: P, b1: P): Shape => [...l, ...t1, ...t2, ...r, ...b2, ...b1];
const curve = (a: P, c1: P, c2: P, b: P): Shape => closed(a, c1, c2, b, c2, c1);
const quad = (a: P, q: P, b: P): Shape => curve(a, [a[0] + (2 / 3) * (q[0] - a[0]), a[1] + (2 / 3) * (q[1] - a[1])], [b[0] + (2 / 3) * (q[0] - b[0]), b[1] + (2 / 3) * (q[1] - b[1])], b);
const blob = (cx: number, cy: number, rx: number, ry: number): Shape => {
  const k = (4 / 3) * ry;
  return closed([cx - rx, cy], [cx - rx, cy - k], [cx + rx, cy - k], [cx + rx, cy], [cx + rx, cy + k], [cx - rx, cy + k]);
};
const toD = (s: Shape) => `M${s[0]} ${s[1]} C${s[2]} ${s[3]} ${s[4]} ${s[5]} ${s[6]} ${s[7]} C${s[8]} ${s[9]} ${s[10]} ${s[11]} ${s[0]} ${s[1]} Z`;

// eyes (inside the glasses)
const eye = (x: number, dx = 0, dy = 0, r = 4.2) => blob(x + dx, E.y + dy, r, r);
const shut = (x: number) => quad([x - 5, E.y + 0.5], [x, E.y + 0.8], [x + 5, E.y + 0.5]);
const smileEye = (x: number) => quad([x - 5, E.y + 2], [x, E.y - 4.5], [x + 5, E.y + 2]);
const calmEye = (x: number) => quad([x - 5, E.y - 1], [x, E.y + 4], [x + 5, E.y - 1]);
const heavy = (x: number) => closed([x - 4.6, E.y + 0.6], [x - 3, E.y + 0.2], [x + 3, E.y + 0.2], [x + 4.6, E.y + 0.6], [x + 3, E.y + 4.6], [x - 3, E.y + 4.6]);
// squeezed-shut eyes for when it's all too much: > on the left, < on the right (a thin rounded chevron each)
const squeezeL = (x: number) => closed([x - 4, E.y - 4.6], [x + 6.2, E.y - 0.4], [x + 6.2, E.y + 0.4], [x - 4, E.y + 4.6], [x + 3, E.y + 0.5], [x + 3, E.y - 0.5]);
const squeezeR = (x: number) => closed([x + 4, E.y - 4.6], [x - 6.2, E.y - 0.4], [x - 6.2, E.y + 0.4], [x + 4, E.y + 4.6], [x - 3, E.y + 0.5], [x - 3, E.y - 0.5]);
// brows (above the glasses): side -1 = left, 1 = right; lift raises, tilt raises the inner end (+) or outer end (-)
const brow = (x: number, side: -1 | 1, lift = 0, tilt = 0): Shape => {
  const inner: P = [x - 6 * side, 38 - lift - tilt];
  const outer: P = [x + 6 * side, 38.5 - lift + tilt * 0.4];
  return quad(side < 0 ? outer : inner, [x, 36.4 - lift], side < 0 ? inner : outer);
};
// mouths (under the nose)
const smile = quad([42.5, 76.5], [50, 81], [57.5, 76.5]);
const flat = quad([44, 78], [50, 78.4], [56, 78]);
const frown = quad([43.5, 79.5], [50, 75.5], [56.5, 79.5]);
const bigSmile = closed([41.5, 75.5], [46, 75.5], [54, 75.5], [58.5, 75.5], [54.5, 83.5], [45.5, 83.5]);
const ooh = blob(50, 78.5, 2.4, 3.2);
const side = quad([45, 78.5], [52, 80.5], [57, 76.5]);
const wobble = curve([43, 78.5], [47, 75.5], [53, 81.5], [57, 78.5]);

type Extra = "drop" | "bulb" | "sparkle" | "zz";
type Pose = { l: Shape; r: Shape; bl: Shape; br: Shape; m: Shape; x?: Extra[] };
type Act = { pose: Pose; seq?: [Pose, number][]; loop?: boolean; blink?: boolean };

const BROWS = { bl: brow(E.l, -1), br: brow(E.r, 1) };
const OPEN: Pose = { l: eye(E.l), r: eye(E.r), ...BROWS, m: smile };
const ACTS: Record<BearMood, Act> = {
  idle: { pose: OPEN, blink: true },
  happy: { pose: { l: smileEye(E.l), r: smileEye(E.r), bl: brow(E.l, -1, 2), br: brow(E.r, 1, 2), m: bigSmile } },
  proud: { pose: { l: smileEye(E.l), r: smileEye(E.r), bl: brow(E.l, -1, 1.5), br: brow(E.r, 1, 1.5), m: smile, x: ["sparkle"] } },
  // eyes up and drifting, a lopsided mouth, a little bulb that comes and goes
  think: {
    pose: { l: eye(E.l, -1.6, -2.4, 3.6), r: eye(E.r, -1.6, -2.4, 3.6), bl: brow(E.l, -1, 2.5, -1), br: brow(E.r, 1, 1), m: side },
    seq: [
      [{ l: eye(E.l, -1.6, -2.4, 3.6), r: eye(E.r, -1.6, -2.4, 3.6), bl: brow(E.l, -1, 2.5, -1), br: brow(E.r, 1, 1), m: side }, 1200],
      [{ l: eye(E.l, 1.6, -2.4, 3.6), r: eye(E.r, 1.6, -2.4, 3.6), bl: brow(E.l, -1, 1), br: brow(E.r, 1, 2.5, -1), m: side }, 1200],
    ],
    loop: true,
  },
  // the brows go up in the middle, a small frown, a drop of sweat
  worried: { pose: { l: eye(E.l, 0, 0.6, 3.6), r: eye(E.r, 0, 0.6, 3.6), bl: brow(E.l, -1, 1, 3.2), br: brow(E.r, 1, 1, 3.2), m: frown, x: ["drop"] }, blink: true },
  tired: { pose: { l: heavy(E.l), r: heavy(E.r), bl: brow(E.l, -1, -1, 1.5), br: brow(E.r, 1, -1, 1.5), m: wobble, x: ["zz"] } },
  wow: { pose: { l: eye(E.l, 0, 0, 5), r: eye(E.r, 0, 0, 5), bl: brow(E.l, -1, 4.5), br: brow(E.r, 1, 4.5), m: ooh, x: ["bulb"] } },
  look: {
    pose: { l: eye(E.l, 2.6), r: eye(E.r, 2.6), ...BROWS, m: smile },
    seq: [
      [{ l: eye(E.l, 2.6), r: eye(E.r, 2.6), ...BROWS, m: smile }, 900],
      [{ l: eye(E.l, -2.6), r: eye(E.r, -2.6), ...BROWS, m: smile }, 900],
    ],
    loop: true,
  },
  calm: { pose: { l: calmEye(E.l), r: calmEye(E.r), bl: brow(E.l, -1, 0.5), br: brow(E.r, 1, 0.5), m: smile } },
  // overwhelmed: eyes squeezed into > <, brows up in the middle, a wobbly mouth, a drop of sweat
  dizzy: { pose: { l: squeezeL(E.l), r: squeezeR(E.r), bl: brow(E.l, -1, 1.5, 3.4), br: brow(E.r, 1, 1.5, 3.4), m: wobble, x: ["drop"] } },
};

const motionOff = () => typeof window !== "undefined" && (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const mix = (a: Shape, b: Shape, k: number) => a.map((v, i) => v + (b[i] - v) * k);

function useBeats(mood: BearMood, still: boolean): BearMood {
  const [shown, setShown] = React.useState(mood);
  React.useEffect(() => {
    setShown(mood);
    const hold = HOLD[mood];
    if (!hold || still) return;
    let t = 0;
    const play = () => { setShown(mood); t = window.setTimeout(rest, hold); };
    const rest = () => { setShown("idle"); t = window.setTimeout(play, REST_MIN + Math.random() * (REST_MAX - REST_MIN)); };
    t = window.setTimeout(rest, hold);
    return () => window.clearTimeout(t);
  }, [mood, still]);
  return shown;
}

/** `size` = width in px; `hold`: keep the mood instead of resting between beats (for a scene that is the mood) */
export type BearArm = "rest" | "chin" | "brow" | "hold";

/** `body`: draw the bear with its sweater and paws (scenes), `arm` says where the paws are */
/** `gaze` [dx, dy] (about -3 to 3) turns the open eyes towards something (idle and worried looks) */
export function ParentBear({ size = 120, mood = "idle", hold = false, label = "A parent bear", body = false, arm = "rest", sweater = "#8B74D2", gaze }: { size?: number; mood?: BearMood; hold?: boolean; label?: string; body?: boolean; arm?: BearArm; sweater?: string; gaze?: [number, number] }) {
  const still = motionOff();
  const beat = useBeats(mood, still || hold);
  const shown = hold ? mood : beat;
  const refs = { l: React.useRef<SVGPathElement>(null), r: React.useRef<SVGPathElement>(null), bl: React.useRef<SVGPathElement>(null), br: React.useRef<SVGPathElement>(null), m: React.useRef<SVGPathElement>(null) };
  const cur = React.useRef<Pose>(ACTS[shown].pose);
  const raf = React.useRef(0);
  const [extras, setExtras] = React.useState<Extra[]>(ACTS[shown].pose.x ?? []);
  const draw = () => (Object.keys(refs) as (keyof typeof refs)[]).forEach((k) => refs[k].current?.setAttribute("d", toD(cur.current[k])));
  const morph = (to: Pose, ms: number) => {
    cancelAnimationFrame(raf.current);
    setExtras(to.x ?? []);
    if (ms <= 0) { cur.current = to; draw(); return; }
    const from = cur.current;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = ease(Math.min(1, (now - t0) / ms));
      cur.current = { l: mix(from.l, to.l, k), r: mix(from.r, to.r, k), bl: mix(from.bl, to.bl, k), br: mix(from.br, to.br, k), m: mix(from.m, to.m, k), x: to.x };
      draw();
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };

  const gx = gaze?.[0] ?? 0, gy = gaze?.[1] ?? 0;
  React.useEffect(() => {
    const base = ACTS[shown];
    // a gaze moves the open eyes of the everyday and worried looks
    const act: Act = (gx || gy) && (shown === "idle" || shown === "worried")
      ? { ...base, pose: { ...base.pose, l: eye(E.l, gx, gy + (shown === "worried" ? 0.6 : 0), shown === "worried" ? 3.6 : 4.2), r: eye(E.r, gx, gy + (shown === "worried" ? 0.6 : 0), shown === "worried" ? 3.6 : 4.2) } }
      : base;
    morph(act.pose, still ? 0 : MORPH_MS);
    if (still) return () => cancelAnimationFrame(raf.current);
    let alive = true;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(() => alive && fn(), ms));
    if (act.seq) {
      const seq = act.seq;
      let i = 0;
      const next = () => {
        if (i >= seq.length) { if (!act.loop) return; i = 0; }
        const [pose, ms] = seq[i++];
        morph(pose, MORPH_MS);
        later(next, MORPH_MS + ms);
      };
      later(next, MORPH_MS);
    }
    if (act.blink) {
      const blink = () => {
        morph({ ...act.pose, l: shut(E.l), r: shut(E.r) }, 80);
        later(() => morph(act.pose, 130), 150);
        later(blink, 2400 + Math.random() * 2600);
      };
      later(blink, 1500 + Math.random() * 1800);
    }
    return () => { alive = false; timers.forEach((t) => window.clearTimeout(t)); cancelAnimationFrame(raf.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown, still, gx, gy]);

  const on = (x: Extra) => `pb-x${extras.includes(x) ? " on" : ""}`;
  const feat = { fill: INK, stroke: INK, strokeWidth: 2.6, strokeLinejoin: "round", strokeLinecap: "round" } as const;
  return (
    <div className={`pb pb-${shown}${body ? " pb-full" : ""}`} style={{ width: size, height: body ? size * 1.5 : size, lineHeight: 0 }}>
      <svg width="100%" height="100%" viewBox={body ? "0 0 100 150" : "0 0 100 100"} role="img" aria-label={label} style={{ overflow: "visible" }}>
        <ellipse className="pb-shadow" cx="50" cy={body ? 147 : 96} rx="27" ry="3.6" fill="#000" opacity=".12" />
        {body ? (
          <g className="pb-torso">
            {/* the sweater, its collar and the arms that stay down */}
            <path d="M16 150 C16 116 30 98 50 98 C70 98 84 116 84 150 Z" fill={sweater} />
            <path d="M16 150 C16 116 30 98 50 98 C70 98 84 116 84 150 Z" fill="#000" opacity=".06" transform="translate(0 6) scale(1 .96)" />
            <path d="M37 99.5 Q50 111 63 99.5" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="3.2" strokeLinecap="round" />
            {arm !== "chin" && arm !== "brow" ? <path d="M77 112 C84 124 82 132 72 134" fill="none" stroke={sweater} strokeWidth="13" strokeLinecap="round" /> : null}
            <path d="M23 112 C16 124 18 132 28 134" fill="none" stroke={sweater} strokeWidth="13" strokeLinecap="round" />
            <path d="M23 112 C16 124 18 132 28 134" fill="none" stroke="#000" strokeOpacity=".08" strokeWidth="13" strokeLinecap="round" transform="translate(1 1)" />
            {arm === "hold" ? null : <circle cx="30" cy="134" r="7" fill="#6F4529" />}
            {arm === "rest" ? <circle cx="70" cy="134" r="7" fill="#6F4529" /> : null}
            {arm === "chin" ? <path d="M78 112 C88 104 74 92 60 92" fill="none" stroke={sweater} strokeWidth="13" strokeLinecap="round" /> : null}
            {arm === "brow" ? <path d="M78 112 C94 96 92 60 82 44" fill="none" stroke={sweater} strokeWidth="13" strokeLinecap="round" /> : null}
          </g>
        ) : null}
        <g className="pb-body">
          {/* ears */}
          <circle cx="24.5" cy="27" r="13.5" fill="#93603B" />
          <circle cx="75.5" cy="27" r="13.5" fill="#93603B" />
          <circle cx="25.5" cy="28" r="7.5" fill="#B57D52" />
          <circle cx="74.5" cy="28" r="7.5" fill="#B57D52" />
          {/* head */}
          <ellipse cx="50" cy="56" rx="36" ry="35" fill="#93603B" />
          <ellipse cx="50" cy="53" rx="33" ry="30" fill="#9C6841" opacity=".5" />
          <ellipse cx="50" cy="73" rx="19.5" ry="13.5" fill="#E3BC8D" />
          {/* glasses: the temples, the lenses, the bridge */}
          <path d="M14.5 48.5 L27.2 51.5 M85.5 48.5 L72.8 51.5" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <circle cx={E.l} cy={E.y} r="10.5" fill="#A87249" stroke={INK} strokeWidth="3.2" />
          <circle cx={E.r} cy={E.y} r="10.5" fill="#A87249" stroke={INK} strokeWidth="3.2" />
          <path d="M47.5 52 Q50 49.5 52.5 52" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d={`M${E.l - 6} ${E.y - 5.5} q3 -2.4 6 -1.6`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".45" />
          <path d={`M${E.r - 6} ${E.y - 5.5} q3 -2.4 6 -1.6`} stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".45" />
          {/* eyes and brows (morphed) */}
          <path ref={refs.l} d={toD(cur.current.l)} fill={PUPIL} stroke={PUPIL} strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round" />
          <path ref={refs.r} d={toD(cur.current.r)} fill={PUPIL} stroke={PUPIL} strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round" />
          <path ref={refs.bl} d={toD(cur.current.bl)} {...feat} strokeWidth={3.4} />
          <path ref={refs.br} d={toD(cur.current.br)} {...feat} strokeWidth={3.4} />
          {/* nose and the line down to the mouth */}
          <ellipse cx="50" cy="67.5" rx="5.4" ry="4.2" fill="#1F2636" />
          <ellipse cx="48.6" cy="66.4" rx="1.6" ry="1" fill="#fff" opacity=".35" />
          <path d="M50 71.5 V76" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <path ref={refs.m} d={toD(cur.current.m)} {...feat} />
          {/* paws that come up to the face move with the head */}
          {body && arm === "chin" ? <g><circle cx="58" cy="90" r="8.4" fill="#6F4529" /><ellipse cx="58" cy="91.5" rx="4.2" ry="3.2" fill="#C9966A" /><circle cx="54" cy="85.8" r="1.6" fill="#C9966A" /><circle cx="58" cy="84.8" r="1.6" fill="#C9966A" /><circle cx="62" cy="85.8" r="1.6" fill="#C9966A" /></g> : null}
          {body && arm === "brow" ? <g><circle cx="80" cy="40" r="8.4" fill="#6F4529" /><ellipse cx="80" cy="41.5" rx="4.2" ry="3.2" fill="#C9966A" /><circle cx="76" cy="35.8" r="1.6" fill="#C9966A" /><circle cx="80" cy="34.8" r="1.6" fill="#C9966A" /><circle cx="84" cy="35.8" r="1.6" fill="#C9966A" /></g> : null}
          {/* extras */}
          <path className={`${on("drop")} pb-drop`} d="M85 36 q4 6 0 9 q-4 -3 0 -9 Z" fill="#7FC6EE" stroke="#4AA3D6" strokeWidth="1" />
          <g className={on("bulb")}><path d="M86 14 l3 -6 M93 18 l6 -3 M80 9 l-1 -6" stroke="#E0A92A" strokeWidth="2.4" strokeLinecap="round" /></g>
          <g className={on("sparkle")}><path d="M84 18 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#FFC93C" /></g>
          <g className={on("zz")}><g className="pb-zz" fontFamily="DM Sans, sans-serif" fontWeight={800} fill="#6B7B86"><text x="82" y="22" fontSize="11">z</text><text x="90" y="13" fontSize="8">z</text></g></g>
        </g>
      </svg>
    </div>
  );
}
