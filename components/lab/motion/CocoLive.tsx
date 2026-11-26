"use client";

// Copied from cominilab-app-v3/src/components/Coco.tsx (the live Coco) for the /cominilab/motion prototype.
import React from 'react';
import './coco.css';

/**
 * Coco the coconut (the owner's "Leaf tuck" pick, 2026-10-30): an opened drinking coconut with two palm leaves
 * tucked in, one colour all over, dot eyes and the frog's smile. Drawn from MiniGamesClaude/coco-designs
 * (make-states.cjs, expression set "version 1"). `size` is the design width in px (height = size * 184/196, the
 * footprint every caller already lays out for); every screen goes through here.
 *
 * `mood` is what the moment calls for. He never holds it (owner, 2026-10-30: "staying in the same state is
 * amateurish"): he plays it for its beat (HOLD), settles back to idle, and while the mood is still asked for he plays
 * it again after a rest (REST_MIN..REST_MAX). Idle and sleepy are resting states and stay.
 *
 * The face is animated, not swapped (owner: "instead of animating the eyes, you are simply fading the states"): each
 * eye and the mouth is one shape (two cubic curves between two corners, filled and stroked with round joins, so a
 * zero-thickness shape reads as a drawn line and a fat one as a dot or an open mouth). Every pose uses the same
 * shape, so a switch bends each feature into the next one (MORPH_MS). Blinks, the wink and the glances are the same
 * morph. The small extras (white eyes, brows, tongue, z's) grow in and out. The body eases from wherever it was back
 * to rest before the next motion starts (BLEND_MS). With motion off he simply shows the mood.
 */
export type CocoMood = 'idle' | 'happy' | 'wow' | 'look' | 'think' | 'wink' | 'calm' | 'oops' | 'sad' | 'sleepy' | 'dizzy';

/** how long each mood plays before he settles back to idle */
const HOLD: Partial<Record<CocoMood, number>> = {
  happy: 2200,
  wow: 1600,
  look: 2800,
  think: 3000,
  wink: 1600,
  calm: 3400,
  oops: 1400,
  sad: 3000,
  dizzy: 2400,
};
const REST_MIN = 5000;
const REST_MAX = 9000;
const BLEND_MS = 280;
const MORPH_MS = 340;

const INK = '#2B1A10';
const E = { l: 38, r: 62, y: 60 }; // where the eyes sit
const SW = 3.2; // the line weight of eyes and mouth

// ---------- one feature = one shape ----------
/** [Lx, Ly, t1x, t1y, t2x, t2y, Rx, Ry, b2x, b2y, b1x, b1y]: left corner, the top curve to the right corner, the
 * bottom curve back */
type Shape = number[];
type P = [number, number];
const closed = (l: P, t1: P, t2: P, r: P, b2: P, b1: P): Shape => [...l, ...t1, ...t2, ...r, ...b2, ...b1];
/** a drawn line (top and bottom curves the same) */
const curve = (a: P, c1: P, c2: P, b: P): Shape => closed(a, c1, c2, b, c2, c1);
/** a quadratic line through control q */
const quad = (a: P, q: P, b: P): Shape =>
  curve(a, [a[0] + (2 / 3) * (q[0] - a[0]), a[1] + (2 / 3) * (q[1] - a[1])], [b[0] + (2 / 3) * (q[0] - b[0]), b[1] + (2 / 3) * (q[1] - b[1])], b);
/** a filled oval (the stroke adds SW/2 all round, so the drawn size is rx + 1.6 by ry + 1.6) */
const blob = (cx: number, cy: number, rx: number, ry: number): Shape => {
  const k = (4 / 3) * ry;
  return closed([cx - rx, cy], [cx - rx, cy - k], [cx + rx, cy - k], [cx + rx, cy], [cx + rx, cy + k], [cx - rx, cy + k]);
};
const toD = (s: Shape) =>
  `M${s[0]} ${s[1]} C${s[2]} ${s[3]} ${s[4]} ${s[5]} ${s[6]} ${s[7]} C${s[8]} ${s[9]} ${s[10]} ${s[11]} ${s[0]} ${s[1]} Z`;

// eyes (x = the eye's centre)
const dot = (x: number) => blob(x, E.y, 3.2, 3.2);
const shut = (x: number) => quad([x - 5.5, E.y + 0.5], [x, E.y + 0.5], [x + 5.5, E.y + 0.5]);
const happyArc = (x: number) => quad([x - 5.5, E.y + 2], [x, E.y - 5], [x + 5.5, E.y + 2]);
const calmArc = (x: number) => quad([x - 5.5, E.y - 1.5], [x, E.y + 5], [x + 5.5, E.y - 1.5]);
const winkShut = (x: number) => quad([x - 6, E.y + 1], [x, E.y - 5.5], [x + 6, E.y + 1]);
const asleep = (x: number, side: -1 | 1) => quad([x - 5.5 * side, E.y + 1], [x, E.y + 3.4], [x + 5.5 * side, E.y + 2.6]);
const pupil = (x: number, dx = 0, dy = 0) => blob(x + dx, E.y + dy, 2.3, 2.3);
const squint = (x: number, side: -1 | 1) => curve([x - 5 * side, E.y - 4], [x + 5.7 * side, E.y], [x + 5.7 * side, E.y], [x - 5 * side, E.y + 4]);
const slash = (x: number) => curve([x - 4, E.y - 4], [x - 1.3, E.y - 1.3], [x + 1.3, E.y + 1.3], [x + 4, E.y + 4]);
// mouths
const smile = quad([39, 71], [50, 80.5], [61, 71]);
const smallSmile = quad([44, 72], [50, 77], [56, 72]);
const bigSmile = closed([38.5, 70], [46, 70], [54, 70], [61.5, 70], [54, 80.5], [46, 80.5]);
const ooh = blob(50, 74, 2.4, 3.4);
const snore = blob(50, 74, 1.1, 1.5);
const frown = quad([42, 77], [50, 70], [58, 77]);
const wavy = curve([40, 74], [46, 68.5], [54, 79.5], [60, 74]);
const sideSmile = quad([46, 74], [53, 77], [58, 71]);
const winkSmile = quad([40, 72], [51, 81], [62, 69]);

/** the extras that grow in and out with a pose */
type Extra = 'whites' | 'brows' | 'tongue' | 'zz' | 'cross' | 'cheek';
type Pose = { l: Shape; r: Shape; m: Shape; x?: Extra[] };
/** a mood: its pose, and what it does while it plays (`seq`: poses in turn, each held for ms; `loop` repeats it) */
type Act = { pose: Pose; seq?: [Pose, number][]; loop?: boolean; blink?: boolean };

const OPEN: Pose = { l: dot(E.l), r: dot(E.r), m: smile };
const ACTS: Record<CocoMood, Act> = {
  idle: { pose: OPEN, blink: true },
  happy: { pose: { l: happyArc(E.l), r: happyArc(E.r), m: bigSmile, x: ['tongue'] } },
  wow: { pose: { l: pupil(E.l), r: pupil(E.r), m: ooh, x: ['whites'] } },
  // a glance to the side and back
  look: {
    pose: { l: pupil(E.l, 2.4), r: pupil(E.r, 2.4), m: smallSmile, x: ['whites'] },
    seq: [
      [{ l: pupil(E.l, 2.4), r: pupil(E.r, 2.4), m: smallSmile, x: ['whites'] }, 900],
      [{ l: pupil(E.l, -2.4), r: pupil(E.r, -2.4), m: smallSmile, x: ['whites'] }, 900],
    ],
    loop: true,
  },
  // eyes up, drifting from one side to the other while he thinks
  think: {
    pose: { l: pupil(E.l, -1.6, -2.8), r: pupil(E.r, -1.6, -2.8), m: sideSmile, x: ['whites'] },
    seq: [
      [{ l: pupil(E.l, -1.6, -2.8), r: pupil(E.r, -1.6, -2.8), m: sideSmile, x: ['whites'] }, 1100],
      [{ l: pupil(E.l, 1.4, -2.6), r: pupil(E.r, 1.4, -2.6), m: sideSmile, x: ['whites'] }, 1100],
    ],
    loop: true,
  },
  // both eyes open, then the right one squeezes shut with a lopsided grin and opens again
  wink: {
    pose: OPEN,
    seq: [
      [OPEN, 280],
      [{ l: dot(E.l), r: winkShut(E.r), m: winkSmile, x: ['cheek'] }, 620],
      [OPEN, 0],
    ],
  },
  calm: { pose: { l: calmArc(E.l), r: calmArc(E.r), m: smile } },
  oops: { pose: { l: squint(E.l, -1), r: squint(E.r, 1), m: wavy } },
  sad: { pose: { l: dot(E.l), r: dot(E.r), m: frown, x: ['brows'] } },
  sleepy: { pose: { l: asleep(E.l, -1), r: asleep(E.r, 1), m: snore, x: ['zz'] } },
  dizzy: { pose: { l: slash(E.l), r: slash(E.r), m: wavy, x: ['cross'] } },
};

const Leaf = ({ x, y, rot, s }: { x: number; y: number; rot: number; s: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
    <path d="M0 0 Q10 -14 26 -12 Q16 2 0 0 Z" fill="#5FB26B" />
    <path d="M2 -1 Q12 -9 23 -10.5" stroke="#4F9D69" strokeWidth={1.4} fill="none" strokeLinecap="round" />
  </g>
);

const motionOff = () =>
  (typeof document !== 'undefined' && document.documentElement.dataset.motion === 'off') ||
  (typeof window !== 'undefined' && (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false));

/** the mood he is showing right now: the asked-for mood in beats, idle in between */
function useBeats(mood: CocoMood, still: boolean): CocoMood {
  const [shown, setShown] = React.useState(mood);
  React.useEffect(() => {
    setShown(mood);
    const hold = HOLD[mood];
    if (!hold || still) return;
    let t = 0;
    const play = () => {
      setShown(mood);
      t = window.setTimeout(rest, hold);
    };
    const rest = () => {
      setShown('idle');
      t = window.setTimeout(play, REST_MIN + Math.random() * (REST_MAX - REST_MIN));
    };
    t = window.setTimeout(rest, hold);
    return () => window.clearTimeout(t);
  }, [mood, still]);
  return shown;
}

const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const mix = (a: Shape, b: Shape, k: number) => a.map((v, i) => v + (b[i] - v) * k);

export function Coco({ size = 94, mood = 'idle' }: { size?: number; mood?: CocoMood }) {
  const h = Math.round((size * 184) / 196);
  const still = motionOff();
  const shown = useBeats(mood, still);
  const svg = React.useRef<SVGSVGElement>(null);
  const eyeL = React.useRef<SVGPathElement>(null);
  const eyeR = React.useRef<SVGPathElement>(null);
  const mouth = React.useRef<SVGPathElement>(null);

  // ---- the face: shapes bent from where they are to the next pose ----
  const cur = React.useRef<Pose>(ACTS[shown].pose);
  const raf = React.useRef(0);
  const [extras, setExtras] = React.useState<Extra[]>(ACTS[shown].pose.x ?? []);
  const draw = () => {
    eyeL.current?.setAttribute('d', toD(cur.current.l));
    eyeR.current?.setAttribute('d', toD(cur.current.r));
    mouth.current?.setAttribute('d', toD(cur.current.m));
  };
  const morph = (to: Pose, ms: number) => {
    cancelAnimationFrame(raf.current);
    setExtras(to.x ?? []);
    if (ms <= 0) {
      cur.current = to;
      draw();
      return;
    }
    const from = cur.current;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = ease(Math.min(1, (now - t0) / ms));
      cur.current = { l: mix(from.l, to.l, k), r: mix(from.r, to.r, k), m: mix(from.m, to.m, k), x: to.x };
      draw();
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  };

  React.useEffect(() => {
    const act = ACTS[shown];
    morph(act.pose, still ? 0 : MORPH_MS);
    if (still) return () => cancelAnimationFrame(raf.current);
    let alive = true;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(() => alive && fn(), ms));
    if (act.seq) {
      const seq = act.seq;
      let i = 0;
      const next = () => {
        if (i >= seq.length) {
          if (!act.loop) return;
          i = 0;
        }
        const [pose, ms] = seq[i++];
        morph(pose, MORPH_MS);
        later(next, MORPH_MS + ms);
      };
      later(next, MORPH_MS);
    }
    if (act.blink) {
      // a blink now and then: the lids come down fast and open a little slower
      const blink = () => {
        morph({ ...act.pose, l: shut(E.l), r: shut(E.r) }, 80);
        later(() => morph(act.pose, 130), 150);
        later(blink, 2600 + Math.random() * 2600);
      };
      later(blink, 1800 + Math.random() * 1800);
    }
    return () => {
      alive = false;
      timers.forEach((t) => window.clearTimeout(t));
      cancelAnimationFrame(raf.current);
    };
    // morph only touches refs and the extras' state
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown, still]);

  // ---- the body: eased from wherever its last motion left it back to rest, then the new motion starts ----
  const [body, setBody] = React.useState(shown);
  const [blending, setBlending] = React.useState(false);
  const from = React.useRef('none');
  React.useLayoutEffect(() => {
    if (shown === body) return;
    from.current = !still && svg.current ? getComputedStyle(svg.current).transform : 'none';
    setBody(shown);
    if (!still) setBlending(true);
  }, [shown, body, still]);
  React.useLayoutEffect(() => {
    if (!blending) return;
    const a = svg.current?.animate([{ transform: from.current }, { transform: 'none' }], { duration: BLEND_MS, easing: 'cubic-bezier(.22,1,.36,1)' });
    const t = window.setTimeout(() => setBlending(false), BLEND_MS);
    return () => {
      window.clearTimeout(t);
      a?.cancel();
    };
  }, [blending]);

  const on = (x: Extra) => `coco-x${extras.includes(x) ? ' on' : ''}`;
  const feature = { fill: INK, stroke: INK, strokeWidth: SW, strokeLinejoin: 'round', strokeLinecap: 'round' } as const;
  return (
    <div className={`coco coco-${body}${blending ? ' coco-blending' : ''}`} style={{ width: size, height: h, lineHeight: 0 }}>
      <svg ref={svg} width="100%" height="100%" viewBox="0 2 100 102" role="img" aria-label="Coco" style={{ overflow: 'visible' }}>
        <g className="coco-leaves">
          <Leaf x={60} y={24} rot={-40} s={1.05} />
          <Leaf x={56} y={26} rot={-78} s={0.8} />
        </g>
        <circle cx={50} cy={60} r={41} fill="#8E5D3A" />
        <circle cx={50} cy={60} r={38} fill="#B07A4E" />
        <ellipse cx={50} cy={26} rx={27} ry={8} fill="#FFFBF2" />
        <ellipse cx={50} cy={27} rx={20} ry={5} fill="#F2E8D2" />
        <ellipse className={on('whites')} cx={E.l} cy={E.y} rx={6.6} ry={7.4} fill="#FFFFFF" />
        <ellipse className={on('whites')} cx={E.r} cy={E.y} rx={6.6} ry={7.4} fill="#FFFFFF" />
        <path className={on('brows')} d={`M${E.l - 6} ${E.y - 8} L${E.l + 4} ${E.y - 11}`} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
        <path className={on('brows')} d={`M${E.r + 6} ${E.y - 8} L${E.r - 4} ${E.y - 11}`} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
        <path ref={eyeL} d={toD(cur.current.l)} {...feature} />
        <path ref={eyeR} d={toD(cur.current.r)} {...feature} />
        <path className={on('cross')} d={`M${E.l + 4} ${E.y - 4} L${E.l - 4} ${E.y + 4}`} stroke={INK} strokeWidth={SW} strokeLinecap="round" />
        <path className={on('cross')} d={`M${E.r + 4} ${E.y - 4} L${E.r - 4} ${E.y + 4}`} stroke={INK} strokeWidth={SW} strokeLinecap="round" />
        <path className={on('cheek')} d={`M${E.r - 3.5} ${E.y + 5.5} Q${E.r} ${E.y + 4} ${E.r + 3.5} ${E.y + 5.5}`} stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" strokeOpacity={0.55} />
        <path ref={mouth} d={toD(cur.current.m)} {...feature} />
        <ellipse className={on('tongue')} cx={50} cy={78.4} rx={5} ry={2.6} fill="#E5867A" />
        <g className={on('zz')}>
          <g className="coco-zz" fontFamily="DM Sans, sans-serif" fontWeight={800} fill="#6B7B86">
            <text x={80} y={30} fontSize={12}>z</text>
            <text x={88} y={20} fontSize={9}>z</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
