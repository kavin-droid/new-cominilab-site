// CominiLab landing map. Today's 5 activities are places on a storybook map, drawn in the games' look (flat shapes,
// a faint pastel world, bold sticker-like landmarks on white pedestals). The world is about twice the screen and has
// regions (forest, berry garden, lake and shore, flower meadow, farm, town, the home village) joined by roads with
// bridges and by sandy footpaths. The child is the little yellow car (the bear drives it; the only vehicle on the map).
// The view frames the car and the suggested place, follows the car while it drives, and can be dragged around; when
// the suggested place is off screen a small pin at the edge points to it.
// Roads are wandering sand tracks. Little toys on the map answer a tap (ducks, the fountain, the windmill, hens,
// butterflies, a fish, balloons). The red car bounces along with its wheels turning and kicks up a little dust.
// Tap a road: the car drives to that spot. Tap the car: it hops and beeps. A new tap while driving changes course.
// Pinch or scroll to zoom (out to the whole map); a "back to my car" button shows when the car is off screen; after a
// while without a tap, a hand shows what to tap next.
// Tap a place: the car drives the roads there and parks at the place's own roadside spot, the place bounces, and a
// big round Play button pops up clear of the landmark and the car. Play opens the activity (simulated here). Back on
// the map a big star rises from the place and flies into the cards button (bottom right); the place keeps its colour and
// wears a gold star; the next place is suggested. After the fifth: the car drives home, the stars are counted and a
// big star settles over the house. The screen is the 800 x 360 design frame, scaled to fit.
// Every day is its own land (lands/*.js): its own map, roads, water, scenery and toys, the slots where the day's places
// stand, an entry arch where the car comes in and an exit gate at the top. The day's places come from a day plan
// (data/days.js) of activities (data/activities.js, art in data/art.js) filling the land's slots in order; the review
// place stands by the gate. With every star collected the gate opens and the car drives through to the next land.
// ?day=N picks the day.

import { LANDS } from './lands/index.js';
import { ACTIVITIES, KIND_NOTE } from './data/activities.js';
import { DAYS, ROLES, LAND_CYCLE } from './data/days.js';
import { makeToys } from './toys.js';

const params = new URLSearchParams(location.search);
// the site's tour (?tour=1) is always silent (owner, 2026-11-25): once the visitor has tapped anything on the page the
// browser would let the map's voice, engine and toy sounds play, so here every sound source is muted at the start
if (params.get('tour') === '1') {
  const play = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () { this.muted = true; this.volume = 0; return play.call(this); };
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (Ctx) {
    class Quiet extends Ctx {
      constructor(...a) { super(...a); super.suspend().catch(() => {}); }
      resume() { return Promise.resolve(); }
    }
    window.AudioContext = Quiet;
    window.webkitAudioContext = Quiet;
  }
  if (window.speechSynthesis) window.speechSynthesis.speak = () => {};
}
const dayNo = Math.max(1, parseInt(params.get('day'), 10) || 1);
const DAY = DAYS[(dayNo - 1) % DAYS.length];
const LAND = LANDS[LAND_CYCLE[(dayNo - 1) % LAND_CYCLE.length]];
const NEXT_DAY = dayNo + 1; // the journey goes on: the lands (and here the sample plans) cycle
const ARRIVING = params.get('arrive') === '1' && !!LAND.entry;
// embedded in the CominiLab app (an iframe; the app always adds ?embed=1): Play and Back go to the app as messages
// instead of the simulated activity. Opened on its own, the page keeps the stand-in activity card.
const EMBED = window.parent !== window;
const toApp = (type, extra = {}) => {
  try {
    window.parent.postMessage({ source: 'cominilab-map', type, ...extra }, '*');
  } catch {
    /* no parent to tell */
  }
};
// round 7 (owner): the app's map home first shows its own overlay (Play, Library, Cards, stars, profile) over the map;
// meanwhile the map's own chrome (back, cards, pins, hand) stays hidden and it says nothing. The app starts us with
// ?overlay=1 and then tells us { source: 'cominilab-app', type: 'mode', focus } when Play / Back swap the two states.
let OVERLAY = EMBED && params.get('overlay') === '1';
function setOverlay(on) {
  OVERLAY = !!on;
  document.body.classList.toggle('cm-overlay', OVERLAY);
  holdStill(OVERLAY);
  if (OVERLAY) {
    stopVoice();
    if (typeof setCards === 'function') setCards(false);
  }
}
document.body.classList.toggle('cm-overlay', OVERLAY);
// round 11 (owner): while the app's overlay (Coco, the world cards) is up, the map is a still picture: every looping
// animation (birds, butterflies, the suggested place's breathing disc, clouds, water...) is paused where it is, and
// plays on from there when Play hands the map over. One-off entrances are left alone so nothing is caught invisible.
// Loops that start later (new elements) are caught by the check below while the overlay stays up.
const held = new Set();
function holdStill(on) {
  document.body.classList.toggle('cm-still', on);
  if (!on) {
    held.forEach((a) => { try { if (a.playState === 'paused') a.play(); } catch { /* gone */ } });
    held.clear();
    return;
  }
  try {
    document.getAnimations().forEach((a) => {
      const t = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null;
      if (t && t.iterations === Infinity && a.playState === 'running') { a.pause(); held.add(a); }
    });
  } catch { /* no Web Animations: the loops keep going */ }
}
if (OVERLAY) requestAnimationFrame(() => holdStill(OVERLAY));
setInterval(() => { if (OVERLAY) holdStill(true); }, 400);
window.addEventListener('message', (e) => {
  const d = e.data;
  if (!d || typeof d !== 'object' || d.source !== 'cominilab-app' || e.source !== window.parent) return;
  if (d.type === 'mode') {
    const was = OVERLAY;
    setOverlay(!d.focus);
    if (was && !OVERLAY) { lastInput = performance.now(); say('Pick a place to go!'); }
  }
  // the app's clouds have started to part over us (back from an activity): the star may land now
  if (d.type === 'reveal' && typeof onReveal === 'function') onReveal();
});
/** the app's activity kinds: stories, games, and everything else (explainers, worksheets) is a puzzle */
const APP_KIND = { story: 'Story', game: 'Game', explainer: 'Puzzle', worksheet: 'Puzzle' };

const SVGNS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('map');
const frame = document.getElementById('frame');

const WORLD = LAND.world;
const VIEW = { w: 800, h: 360 };
const TOP_BAR = 58; // the top bar covers this much of the view (back button left, the app's buttons right)
const BOTTOM_BAR = 60; // the app's nav (bottom centre) and the bottom buttons cover about this much
/** the app's nav sits bottom centre (about 300 x 60 of the frame): Play and the edge pin keep out of it */
// round 7: the app's map home no longer shows a bottom nav, so nothing is kept clear there (an empty box off the frame)
const NAV_KEEP = { l: -99, t: -99, r: -98, b: -98 };

// ---------- the world (from the land) and today's places (from the day plan) ----------

const { nodes: NODES, edges: EDGES, footpaths: FOOTPATHS } = LAND;
const WATER = { rivers: [], lakes: [], seas: [], ...LAND.water };
const ROAD_STYLE = { edge: '#D9B87C', sand: '#EED7A4', rut: '#E2C287', dots: '#F8EACB', ...LAND.road };
const SPEED = 150; // world px per second
/** today's places: each activity of the plan, in order, standing in the land's slot of the same number. `id` is the
    slot's road node (routing and the strip use it); `activity` is the activity's own id.
    Inside the app (owner, round 13) the plan is the child's own: the app sends today's activities as ?plan= (title,
    kind, id, concept, picture), each place is that activity with its own landmark, and Play hands its exact title back,
    so the place and what opens always match. Stories stay off the map until there are stories. On its own, the map
    keeps its sample day plans. */
const PLAN = (() => {
  try {
    const v = JSON.parse(params.get('plan') || 'null');
    return Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
})();
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
/** the app's concept ids where they differ from the map's */
const MAP_CONCEPT = { 'place-values': 'place-value', 'comparing-numbers': 'comparing' };
/** an activity the map has no landmark for: its own picture in a little frame on the pedestal */
const pictureArt = (img) => () =>
  `<rect x="-29" y="-50" width="58" height="46" fill="#FFFFFF" stroke="#D9D9D9" stroke-width="1.5"/>` +
  `<image href="${String(img).replace(/"/g, '')}" x="-26" y="-47" width="52" height="40" preserveAspectRatio="xMidYMid slice"/>`;
function planPlace(item) {
  const bank = Object.entries(ACTIVITIES).filter(([, a]) => !a.placeholder && a.kind !== 'story');
  const concept = MAP_CONCEPT[item.c] || item.c;
  const hit =
    bank.find(([, a]) => norm(a.name) === norm(item.t)) ||
    (item.ref && bank.find(([, a]) => a.ref && (a.ref === item.ref || item.ref.startsWith(`${a.ref}-`)))) ||
    (item.k === 'explainer' && bank.find(([, a]) => a.kind === 'explainer' && a.concept === concept));
  const base = hit
    ? { ...hit[1], activity: hit[0] }
    : { kind: item.k, concept, say: '', art: pictureArt(item.img || ''), activity: `app-${norm(item.t)}` };
  return { ...base, name: item.t, doneInApp: !!item.d };
}
const TODAY = (PLAN ? PLAN.filter((it) => it.k !== 'story').map(planPlace) : DAY.items.filter((aid) => ACTIVITIES[aid] && ACTIVITIES[aid].kind !== 'story').map((aid) => ({ ...ACTIVITIES[aid], activity: aid })))
  .slice(0, LAND.slots.length);
const PLACES = TODAY.map((a, i) => {
  const slot = LAND.slots[i];
  return { ...a, role: ROLES[i], id: slot.node, at: slot.at, park: slot.park, badge: slot.badge };
});

// ---------- helpers ----------

function el(tag, attrs = {}, parent) {
  const e = document.createElementNS(SVGNS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (parent) parent.appendChild(e);
  return e;
}
function g(parent, attrs = {}) {
  return el('g', attrs, parent || undefined);
}
/** the line: there is no bubble in the app; the line is only spoken (a quiet line is not read out) */
const say = (s, quiet = false) => {
  if (!quiet) speak(s);
};
// The map's voice (owner, round 13): recorded clips in the storyteller voice (data/voice-lines.mjs, recorded by
// comini-voice into voice/, looked up by their exact words in data/voice-manifest.json), never the browser's speech.
// A line with no clip stays silent; its words stay in the bubble. One line at a time and never cut off: a line asked
// for while another plays waits, and only the newest waiting line is kept (the map's lines are about what is on screen
// now). Browsers refuse sound before the first tap, so a line asked for before that waits for it.
const VOICE = { clips: null, now: null, next: null, unlocked: false };
fetch(new URL('./data/voice-manifest.json', import.meta.url))
  .then((r) => (r.ok ? r.json() : {}))
  .then((m) => { VOICE.clips = m; })
  .catch(() => { VOICE.clips = {}; });
function playNext() {
  if (VOICE.now || !VOICE.next || !VOICE.unlocked || OVERLAY) return;
  const clip = VOICE.clips && VOICE.clips[VOICE.next];
  VOICE.next = null;
  if (!clip) return;
  const a = new Audio(new URL(`./voice/${clip.file}`, import.meta.url).href);
  VOICE.now = a;
  const done = () => { if (VOICE.now === a) VOICE.now = null; playNext(); };
  a.addEventListener('ended', done);
  a.addEventListener('error', done);
  a.play().catch(done);
}
function stopVoice() {
  VOICE.next = null;
  const a = VOICE.now;
  VOICE.now = null;
  try { a && a.pause(); } catch { /* gone */ }
}
['pointerdown', 'keydown'].forEach((ev) => window.addEventListener(ev, () => { VOICE.unlocked = true; playNext(); }, { capture: true }));
function speak(s) {
  if (OVERLAY || !s) return; // the app's overlay is up: the map stays quiet
  VOICE.next = s;
  playNext();
}
/** restart a CSS animation class on an element */
function replay(node, cls) {
  node.classList.remove(cls);
  void (node.getBBox ? node.getBBox() : node.offsetWidth);
  node.classList.add(cls);
}
const STAR_D = 'M0 -7 L2.1 -2.3 L7 -1.9 L3.3 1.4 L4.4 6.3 L0 3.7 L-4.4 6.3 L-3.3 1.4 L-7 -1.9 L-2.1 -2.3 Z';
/** a small seeded random, so the scattered scenery is the same every time */
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

// ---------- scenery ----------

function tree(parent, x, y, s = 1, kind = 'round') {
  const t = g(parent, { transform: `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${s.toFixed(2)})` });
  el('ellipse', { cx: 2, cy: 1, rx: 13, ry: 4, fill: 'rgba(60, 110, 60, .18)' }, t);
  const sway = g(t, { class: 'cm-sway', style: `animation-delay:${-((x * 7 + y) % 40) / 10}s` });
  el('rect', { x: -2.5, y: -14, width: 5, height: 14, rx: 2, fill: '#9C6A3D' }, sway);
  if (kind === 'round') {
    el('circle', { cx: 0, cy: -22, r: 13, fill: '#7CC576' }, sway);
    el('circle', { cx: 4, cy: -18, r: 8, fill: '#63B05E' }, sway);
  } else if (kind === 'tall') {
    el('ellipse', { cx: 0, cy: -27, rx: 8.5, ry: 18, fill: '#5FB26B' }, sway);
    el('ellipse', { cx: 2.5, cy: -22, rx: 5, ry: 11, fill: '#4F9D69' }, sway);
  } else if (kind === 'palm') {
    el('path', { d: 'M-1 0 Q-4 -18 3 -40 L6 -39 Q0 -18 3 0 Z', fill: '#B57C42' }, sway);
    [[-24, -40, -8], [24, -38, 8], [-14, -50, -3], [16, -52, 4], [0, -30, 0]].forEach(([dx, dy, tw]) => el('path', { d: `M4 -40 Q${dx / 2 + 4} ${dy - 8} ${dx + 4} ${dy + 4} Q${dx / 2 + 4 + tw} ${dy - 2} 4 -40 Z`, fill: '#4FAE5F' }, sway));
    el('circle', { cx: 2, cy: -38, r: 2.4, fill: '#8C6244' }, sway);
    el('circle', { cx: 6, cy: -37, r: 2.4, fill: '#8C6244' }, sway);
  } else if (kind === 'jungle') {
    el('rect', { x: -3, y: -26, width: 6, height: 26, rx: 2, fill: '#7B5638' }, sway);
    el('circle', { cx: -9, cy: -30, r: 12, fill: '#2E8A4E' }, sway);
    el('circle', { cx: 9, cy: -32, r: 13, fill: '#3E9150' }, sway);
    el('circle', { cx: 0, cy: -42, r: 13, fill: '#4FAE5F' }, sway);
    el('path', { d: 'M-12 -24 Q-14 -14 -11 -6 M11 -26 Q13 -18 10 -10', stroke: '#5FBF6B', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, sway);
  } else if (kind === 'cactus') {
    el('rect', { x: -4.5, y: -34, width: 9, height: 34, rx: 4.5, fill: '#5FAE72' }, sway);
    el('path', { d: 'M-4 -16 H-10 Q-13 -16 -13 -20 V-26', stroke: '#5FAE72', 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' }, sway);
    el('path', { d: 'M4 -20 H10 Q13 -20 13 -24 V-30', stroke: '#5FAE72', 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' }, sway);
    el('path', { d: 'M0 -32 V-4 M-2 -26 v2 M2 -18 v2', stroke: '#4F9D69', 'stroke-width': 1.2 }, sway);
    if (s > 0.85) el('circle', { cx: 0, cy: -35, r: 2.4, fill: '#FF8FB0' }, sway);
  } else if (kind === 'autumn' || kind === 'apple' || kind === 'mango') {
    const leaf = kind === 'apple' ? ['#6DBE68', '#5DAF5C'] : kind === 'mango' ? ['#3E9150', '#2E8A4E'] : [['#E5974F', '#D2733A'], ['#F2B33D', '#E0A92A'], ['#E5574B', '#C1342A']][Math.floor(((x * 13 + y * 7) % 30) / 10)];
    el('circle', { cx: 0, cy: -22, r: 13, fill: leaf[0] }, sway);
    el('circle', { cx: 4, cy: -18, r: 8, fill: leaf[1] }, sway);
    if (kind !== 'autumn') [[-6, -24], [4, -28], [6, -16], [-3, -15]].forEach(([dx, dy]) => (kind === 'mango' ? el('ellipse', { cx: dx, cy: dy, rx: 2, ry: 2.8, fill: '#F2B33D' }, sway) : el('circle', { cx: dx, cy: dy, r: 2.2, fill: '#E5574B' }, sway)));
  } else if (kind === 'snowpine') {
    el('path', { d: 'M0 -46 L13 -20 H-13 Z', fill: '#4F8F78' }, sway);
    el('path', { d: 'M0 -34 L15 -10 H-15 Z', fill: '#5C9E86' }, sway);
    el('path', { d: 'M0 -46 L6 -34 Q0 -31 -6 -34 Z M-9 -20 Q-4 -24 0 -22 Q5 -25 10 -20 L7 -24 L-7 -24 Z M-10 -12 Q-3 -16 3 -13 Q8 -15 12 -11 L10 -14 L-9 -15 Z', fill: '#FFFFFF' }, sway);
  } else if (kind === 'snowround') {
    el('circle', { cx: 0, cy: -22, r: 13, fill: '#6FA68C' }, sway);
    el('path', { d: 'M-12 -27 Q-6 -37 2 -35 Q10 -36 12 -27 Q6 -30 0 -28 Q-6 -31 -12 -27 Z', fill: '#FFFFFF' }, sway);
  } else {
    // pine
    el('path', { d: 'M0 -46 L13 -20 H-13 Z', fill: '#4F9D69' }, sway);
    el('path', { d: 'M0 -34 L15 -10 H-15 Z', fill: '#5FAE72' }, sway);
  }
}
function bush(parent, x, y, berries) {
  const b = g(parent, { transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})` });
  el('ellipse', { cx: 1, cy: 1, rx: 12, ry: 3.5, fill: 'rgba(60, 110, 60, .16)' }, b);
  el('circle', { cx: -6, cy: -8, r: 8, fill: '#6DBE68' }, b);
  el('circle', { cx: 6, cy: -9, r: 8.5, fill: '#5DAF5C' }, b);
  el('circle', { cx: 0, cy: -14, r: 8, fill: '#78C673' }, b);
  if (berries) [[-6, -10], [4, -15], [7, -6], [-2, -5]].forEach(([dx, dy]) => el('circle', { cx: dx, cy: dy, r: 2.1, fill: berries }, b));
}
function house(parent, x, y, wall, roof, s = 1, opacity = 0.6) {
  const h = g(parent, { transform: `translate(${x} ${y}) scale(${s})`, opacity });
  el('ellipse', { cx: 2, cy: 1, rx: 20, ry: 4, fill: 'rgba(60, 110, 60, .16)' }, h);
  el('rect', { x: -15, y: -22, width: 30, height: 22, rx: 4, fill: wall }, h);
  el('path', { d: 'M-19 -20 Q-19 -24 -15 -26 L0 -36 L15 -26 Q19 -24 19 -20 Z', fill: roof }, h);
  el('rect', { x: -4, y: -12, width: 8, height: 12, rx: 3, fill: '#8C6244' }, h);
  el('rect', { x: -12, y: -16, width: 6, height: 6, rx: 1.5, fill: '#E9F6FB' }, h);
  el('rect', { x: 6, y: -16, width: 6, height: 6, rx: 1.5, fill: '#E9F6FB' }, h);
  return h;
}
function flowers(parent, x, y, c = '#FF8FB0') {
  const f = g(parent, { transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})` });
  [[-6, 0], [0, -3], [6, 1]].forEach(([dx, dy], i) => el('circle', { cx: dx, cy: dy, r: 2.6, fill: i === 1 ? '#FFD45E' : c }, f));
}
/** a field: a soft rounded patch with rows */
function field(parent, x, y, w, h, base, row, rot = 0) {
  const f = g(parent, { transform: `translate(${x} ${y}) rotate(${rot})` });
  el('rect', { x: 0, y: 0, width: w, height: h, rx: 18, fill: base }, f);
  for (let k = 12; k < h - 6; k += 12) el('path', { d: `M14 ${k} H${w - 14}`, stroke: row, 'stroke-width': 5, 'stroke-linecap': 'round' }, f);
}

// ---------- build the map ----------

const LAYER = {
  land: g(svg),
  paths: g(svg),
  water: g(svg),
  bridges: g(svg),
  roads: g(svg),
  scenery: g(svg),
  toys: g(svg),
  route: g(svg),
  places: g(svg),
  car: g(svg),
  sky: g(svg, { class: 'cm-sky' }),
  fx: g(svg),
};

// roads and footpaths wander: each gets a gentle wiggle along its length (the ends stay put, so junctions and the
// places' spurs still meet)
function wander(d, amp, every, phase) {
  const p = el('path', { d }, svg);
  const L = p.getTotalLength();
  const waves = Math.max(1, Math.round(L / every));
  const a = Math.min(amp, L * 0.06);
  const pts = [];
  for (let s = 0; s <= L; s += 5) {
    const q = p.getPointAtLength(s);
    const q0 = p.getPointAtLength(Math.max(0, s - 1));
    const q1 = p.getPointAtLength(Math.min(L, s + 1));
    const len = Math.hypot(q1.x - q0.x, q1.y - q0.y) || 1;
    const off = a * Math.sin((Math.PI * 2 * waves * s) / L + phase) * Math.sin((Math.PI * s) / L);
    pts.push({ x: q.x - ((q1.y - q0.y) / len) * off, y: q.y + ((q1.x - q0.x) / len) * off });
  }
  const e = p.getPointAtLength(L);
  pts.push({ x: e.x, y: e.y });
  p.remove();
  return pts.map((q, i) => `${i ? 'L' : 'M'}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join(' ');
}
EDGES.forEach((e, k) => { e[2] = wander(e[2], 15, 140, k * 1.7); });
FOOTPATHS.forEach((d, k) => { FOOTPATHS[k] = wander(d, 10, 110, k * 2.3); });

// the ground and its regions: soft patches, each its own shade
el('rect', { x: -800, y: -800, width: WORLD.w + 1600, height: WORLD.h + 1600, fill: LAND.ground || '#DFF0D2' }, LAYER.land);
const REGIONS = LAND.regions;
REGIONS.forEach(([, d, c]) => el('path', { d, fill: c }, LAYER.land));

// footpaths: a trail of pale stepping stones (the roads are the tracks)
FOOTPATHS.forEach((d) => {
  el('path', { d, stroke: LAND.footpathColor || '#FFFFFF', 'stroke-width': 6, 'stroke-dasharray': '4 9', fill: 'none', 'stroke-linecap': 'round', opacity: 0.75 }, LAYER.paths);
});

/** a range of mountains (a land asks for it in decorate): a pale back row, a front row, a soft skirt; a tap echoes
    and sends birds up off the highest peak */
function mountains({ base, back = [], front = [], backColors = ['#CBD7E8', '#B5C3DA'], frontColors = ['#B4D2A2', '#9EC28D'], skirt = '#C7E2B6', snowFront = (h) => h > 70, span }) {
  const grp = g(LAYER.land, { class: 'cm-toy cm-mountains', 'data-toy': 'mountains' });
  const peak = (x, h, w, fill, shade, snow) => {
    const b = base;
    el('path', { d: `M${x - w} ${b} L${x - w * 0.14} ${b - h + 7} Q${x} ${b - h - 3} ${x + w * 0.14} ${b - h + 7} L${x + w} ${b} Z`, fill }, grp);
    el('path', { d: `M${x} ${b - h - 1} Q${x + w * 0.1} ${b - h + 1} ${x + w * 0.14} ${b - h + 7} L${x + w} ${b} L${x + w * 0.15} ${b} Z`, fill: shade }, grp);
    if (snow) {
      const sy = b - h + h * 0.3;
      el('path', { d: `M${x - w * 0.25} ${sy} L${x - w * 0.12} ${b - h + 5} Q${x} ${b - h - 3} ${x + w * 0.12} ${b - h + 5} L${x + w * 0.25} ${sy} L${x + w * 0.1} ${sy - 5} L${x} ${sy + 2} L${x - w * 0.1} ${sy - 5} Z`, fill: '#FFFFFF' }, grp);
    }
  };
  back.forEach(([x, h, w]) => peak(x, h, w, backColors[0], backColors[1], true));
  front.forEach(([x, h, w]) => peak(x, h, w, frontColors[0], frontColors[1], snowFront(h)));
  el('path', { d: `M${span[0]} ${base} H${span[1]} V${base + 6} Q${(span[0] + span[1]) / 2} ${base + 14} ${span[0]} ${base + 6} Z`, fill: skirt }, grp);
  const top = back.concat(front).reduce((a, p) => (p[1] > a[1] ? p : a), [0, 0]);
  grp.addEventListener('click', (e) => {
    e.stopPropagation();
    if (justDragged()) return;
    [0, 0.42, 0.84].forEach((d, k) => blip(520, 470, 0.32, 'sine', 0.08 / (k * 1.6 + 1), d));
    const f = g(LAYER.sky, { transform: `translate(${top[0]} ${base - top[1] - 12})` });
    const inner = g(f, { class: 'cm-launch' });
    [[0, 0], [-12, 8], [12, 7], [-22, 15]].forEach(([x, y]) => inner.appendChild(skyBird(x, y, 1)));
    setTimeout(() => f.remove(), 2600);
  });
  return grp;
}
/** a little flying bird/** a little flying bird (side on, flying right, like the birds on the ground): round body and head, a beak, a tail,
    a far wing and a near wing that flap; the whole bird bobs a little as it flies */
const SKY_BIRDS = [['#6FA0D8', '#A5C6EC', '#5B8DCB'], ['#FFC93C', '#FFE08A', '#E0A92A'], ['#E5574B', '#F28A80', '#C1342A'], ['#9E7BF0', '#C9B6F7', '#7C5BC9']];
let skyBirdN = 0;
function skyBird(x, y, s = 1) {
  const [c, light, dark] = SKY_BIRDS[skyBirdN++ % SKY_BIRDS.length];
  const phase = `animation-delay:${(-((skyBirdN * 0.137) % 0.5)).toFixed(2)}s`;
  const b = g(null, { transform: `translate(${x} ${y}) scale(${s})` });
  const bob = g(b, { class: 'cm-skybob', style: phase });
  el('path', { class: 'cm-wing-far', d: 'M-1 -2 Q2 -13 9 -12 Q6 -6 4 -2 Z', fill: dark, style: phase }, bob);
  el('path', { d: 'M-6 -1 L-13 -5 L-12 0 L-13 4 Z', fill: dark }, bob);
  el('ellipse', { cx: 0, cy: 0, rx: 7.5, ry: 4.8, fill: c }, bob);
  el('ellipse', { cx: 1, cy: 1.8, rx: 5, ry: 2.6, fill: light }, bob);
  el('circle', { cx: 6.4, cy: -2.6, r: 3.8, fill: c }, bob);
  el('path', { d: 'M9.6 -3.3 L13.4 -2.2 L9.6 -1.1 Z', fill: '#F2A541' }, bob);
  el('circle', { cx: 7.6, cy: -3.4, r: 0.9, fill: '#1D2433' }, bob);
  el('path', { class: 'cm-wing-near', d: 'M-4 -1 Q-2 -14 6 -12 Q4 -6 3 -1 Z', fill: light, stroke: dark, 'stroke-width': 0.8, style: phase }, bob);
  return b;
}

// water: lakes and seas (a shore, a light edge, the water; ice for a frozen lake) and rivers (a light edge, the blue,
// a shimmer)
[...WATER.seas, ...WATER.lakes].forEach((w) => {
  if (w.shore) el('path', { d: w.d, fill: w.shore, stroke: w.shore, 'stroke-width': w.shoreW || 18, 'stroke-linejoin': 'round' }, LAYER.water);
  el('path', { d: w.d, fill: w.edge || '#CDEFF7', stroke: w.edge || '#CDEFF7', 'stroke-width': 6 }, LAYER.water);
  el('path', { d: w.d, fill: w.fill || '#9FD8EE', transform: w.c ? `translate(${w.c.x} ${w.c.y}) scale(.94) translate(${-w.c.x} ${-w.c.y})` : '' }, LAYER.water);
});
WATER.rivers.forEach((d) => {
  el('path', { d, stroke: '#CDEFF7', 'stroke-width': 40, fill: 'none', 'stroke-linecap': 'round' }, LAYER.water);
  el('path', { d, stroke: '#9FD8EE', 'stroke-width': 30, fill: 'none', 'stroke-linecap': 'round' }, LAYER.water);
  el('path', { d, stroke: '#FFFFFF', 'stroke-width': 2, 'stroke-dasharray': '10 18', fill: 'none', 'stroke-linecap': 'round', class: 'cm-ripple' }, LAYER.water);
});

// roads: tracks in the land's own style (sand, packed snow): a darker edge, the track, and two faint wheel ruts
const ROAD_W = 16;
const rd = (d, attrs) => el('path', { d, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attrs }, LAYER.roads);
EDGES.forEach(([, , d]) => rd(d, { stroke: ROAD_STYLE.edge, 'stroke-width': ROAD_W + 5 }));
EDGES.forEach(([, , d]) => rd(d, { stroke: ROAD_STYLE.sand, 'stroke-width': ROAD_W }));
EDGES.forEach(([, , d]) => rd(d, { stroke: ROAD_STYLE.rut, 'stroke-width': ROAD_W - 7 }));
EDGES.forEach(([, , d]) => rd(d, { stroke: ROAD_STYLE.sand, 'stroke-width': ROAD_W - 11 }));
EDGES.forEach(([, , d]) => rd(d, { stroke: ROAD_STYLE.dots, 'stroke-width': 2.4, 'stroke-dasharray': '1 10', opacity: 0.9 }));

// ---------- road graph: sample each road so the car can follow it ----------

const sampler = g(svg, { visibility: 'hidden' });
const ROADS = EDGES.map(([a, b, d]) => {
  const p = el('path', { d }, sampler);
  const len = p.getTotalLength();
  const pts = [];
  for (let s = 0; s <= len; s += 3) {
    const q = p.getPointAtLength(s);
    pts.push({ x: q.x, y: q.y });
  }
  const end = p.getPointAtLength(len);
  pts.push({ x: end.x, y: end.y });
  return { a, b, len, pts };
});
sampler.remove();

// the exit gate (at the top of the land) and the entry arch (where the car comes in from the last land): each stands on
// its road at the spot the land names
function onRoad(at) {
  let best = null;
  ROADS.forEach((r) => r.pts.forEach((q, i) => {
    const d = Math.hypot(q.x - at.x, q.y - at.y);
    if (!best || d < best.d) best = { r, i, d, x: q.x, y: q.y };
  }));
  return best;
}
const GATE = LAND.gate ? onRoad(LAND.gate.at) : null;
const ENTRY = LAND.entry ? onRoad(LAND.entry.at) : null;

// bridges: wherever a road runs over the river, a wooden deck the full width of the road with rails and posts
const geo = document.createElement('canvas').getContext('2d');
const riverPaths = WATER.rivers.map((d) => new Path2D(d));
const poolPaths = [...WATER.lakes, ...WATER.seas].map((w) => new Path2D(w.d));
ROADS.forEach((r) => {
  let run = null;
  const flush = () => {
    if (!run || run.length < 2) return;
    const s = Math.max(0, run[0] - 3);
    const e = Math.min(r.pts.length - 1, run[run.length - 1] + 3);
    const pts = r.pts.slice(s, e + 1);
    const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    el('path', { d, stroke: '#8C6244', 'stroke-width': ROAD_W + 14, fill: 'none' }, LAYER.bridges);
    el('path', { d, stroke: '#C98E4E', 'stroke-width': ROAD_W + 8, fill: 'none' }, LAYER.bridges);
    el('path', { d, stroke: '#A8733C', 'stroke-width': ROAD_W + 8, 'stroke-dasharray': '2 5', fill: 'none' }, LAYER.bridges);
    [[pts[0], pts[1]], [pts[pts.length - 1], pts[pts.length - 2]]].forEach(([p, q]) => {
      const ang = Math.atan2(q.y - p.y, q.x - p.x);
      const nx = -Math.sin(ang) * (ROAD_W / 2 + 7);
      const ny = Math.cos(ang) * (ROAD_W / 2 + 7);
      [[nx, ny], [-nx, -ny]].forEach(([ox, oy]) => el('circle', { cx: p.x + ox, cy: p.y + oy, r: 3.2, fill: '#6E4A28' }, LAYER.bridges));
    });
  };
  geo.lineWidth = 30;
  r.pts.forEach((p, i) => {
    if (riverPaths.some((rp) => geo.isPointInStroke(rp, p.x, p.y))) (run = run || []).push(i);
    else {
      flush();
      run = null;
    }
  });
  flush();
});

// ---------- scenery: scattered by region, kept off roads, water, fields and places ----------

const roadPts = ROADS.flatMap((r) => r.pts.filter((_, i) => i % 3 === 0));
const pathPts = [];
{
  const s = g(svg, { visibility: 'hidden' });
  FOOTPATHS.forEach((d) => {
    const p = el('path', { d }, s);
    const L = p.getTotalLength();
    for (let k = 0; k <= L; k += 10) pathPts.push(p.getPointAtLength(k));
  });
  s.remove();
}
const TOY_AT = Object.fromEntries((LAND.toys || []).filter((t) => t.at).map((t) => [t.name, t.at]));
const BLOCKS = LAND.blocks || [];
const freeSpot = (x, y, clear = 22) => {
  if (x < 6 || y < 30 || x > WORLD.w - 6 || y > WORLD.h - 4) return false;
  geo.lineWidth = 56;
  if (riverPaths.some((rp) => geo.isPointInStroke(rp, x, y))) return false;
  geo.lineWidth = 30;
  if (poolPaths.some((pp) => geo.isPointInPath(pp, x, y) || geo.isPointInStroke(pp, x, y))) return false;
  if (roadPts.some((p) => Math.hypot(p.x - x, p.y - y) < clear)) return false;
  if (pathPts.some((p) => Math.hypot(p.x - x, p.y - y) < 12)) return false;
  if (BLOCKS.some((b) => x > b.x && x < b.x + b.w && y > b.y && y < b.y + b.h)) return false;
  if (Object.values(TOY_AT).some((t) => Math.hypot(t.x - x, t.y - y) < 36)) return false;
  if (PLACES.some((pl) => Math.hypot(NODES[pl.id].x + pl.at.dx - x, NODES[pl.id].y + pl.at.dy - y + 18) < 64)) return false;
  if (GATE && Math.hypot(GATE.x - x, GATE.y - 20 - y) < 60) return false;
  if (ENTRY && Math.hypot(ENTRY.x - x, ENTRY.y - 20 - y) < 50) return false;
  return true;
};
const scatter = (n, box, put, clear) => {
  let tries = 0;
  for (let k = 0; k < n && tries < n * 30; tries++) {
    const x = box.x + rnd() * box.w;
    const y = box.y + rnd() * box.h;
    if (freeSpot(x, y, clear)) {
      put(x, y);
      k++;
    }
  }
};
const sceneItems = [];
const later = (y, fn) => sceneItems.push({ y, fn });
// the land draws its own scenery (fields, houses, mountains, trees, flowers...) with these helpers
LAND.decorate({ el, g, LAYER, WORLD, rnd, tree, bush, house, flowers, field, scatter, later, mountains, freeSpot });
// draw scenery back to front
sceneItems.sort((a, b) => a.y - b.y).forEach((it) => it.fn(LAYER.scenery));

// ---------- routes ----------

/** the shortest way along the roads from node `from` to node `to`, as a list of points */
function routePoints(from, to) {
  const dist = { [from]: 0 };
  const prev = {};
  const todo = new Set(Object.keys(NODES));
  while (todo.size) {
    let u = null;
    todo.forEach((k) => { if (dist[k] !== undefined && (u === null || dist[k] < dist[u])) u = k; });
    if (u === null || u === to) break;
    todo.delete(u);
    ROADS.forEach((r) => {
      const v = r.a === u ? r.b : r.b === u ? r.a : null;
      if (!v || !todo.has(v)) return;
      const nd = dist[u] + r.len;
      if (dist[v] === undefined || nd < dist[v]) { dist[v] = nd; prev[v] = { u, r }; }
    });
  }
  const legs = [];
  for (let v = to; v !== from; v = prev[v].u) legs.unshift({ r: prev[v].r, fromNode: prev[v].u });
  const pts = [];
  legs.forEach(({ r, fromNode }) => {
    const seg = r.a === fromNode ? r.pts : r.pts.slice().reverse();
    pts.push(...(pts.length ? seg.slice(1) : seg));
  });
  return pts;
}
const plen = (pts) => pts.reduce((s, p, i) => (i ? s + Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y) : 0), 0);
function trimEnd(pts, d) {
  if (d <= 0) return pts;
  let acc = 0;
  for (let i = pts.length - 1; i > 0; i--) {
    acc += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    if (acc >= d) return pts.slice(0, i);
  }
  return pts.slice(0, 1);
}
const trimStart = (pts, d) => trimEnd(pts.slice().reverse(), d).reverse();
const toD = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');

/** the nearest point on any road to `p`: the road, the sample's index and the distance */
function nearestOnRoad(p) {
  let best = null;
  ROADS.forEach((r) => r.pts.forEach((q, i) => {
    const d = Math.hypot(q.x - p.x, q.y - p.y);
    if (!best || d < best.d) best = { r, i, d };
  }));
  return best;
}
const nodeLen = {};
const nodeDist = (a, b) => (a === b ? 0 : (nodeLen[`${a}>${b}`] ??= plen(routePoints(a, b))));
/** the shortest drive from the point `pos` (the car can be anywhere on a road) to a node ({ node }) or to a spot on
    a road ({ r, i }) */
function routeFrom(pos, target) {
  const s = nearestOnRoad(pos);
  const starts = [
    { node: s.r.a, pts: s.r.pts.slice(0, s.i + 1).reverse() },
    { node: s.r.b, pts: s.r.pts.slice(s.i) },
  ];
  const ends = target.node
    ? [{ node: target.node, pts: [] }]
    : [{ node: target.r.a, pts: target.r.pts.slice(0, target.i + 1) }, { node: target.r.b, pts: target.r.pts.slice(target.i).reverse() }];
  let best = null;
  const consider = (pts, cost) => { if (!best || cost < best.cost) best = { pts, cost }; };
  if (!target.node && target.r === s.r) {
    consider(target.i >= s.i ? s.r.pts.slice(s.i, target.i + 1) : s.r.pts.slice(target.i, s.i + 1).reverse(), Math.abs(target.i - s.i) * 3);
  }
  starts.forEach((a) => ends.forEach((b) => {
    const mid = a.node === b.node ? [] : routePoints(a.node, b.node);
    consider([...a.pts, ...mid.slice(1), ...b.pts.slice(1)], plen(a.pts) + nodeDist(a.node, b.node) + plen(b.pts));
  }));
  return [{ x: pos.x, y: pos.y }, ...best.pts];
}

// ---------- the view (a window onto the world) ----------

// zoom: 1 = the design scale; all the way out shows the whole map
const ZMIN = VIEW.w / WORLD.w;
const ZMAX = 1.6;
const cam = { x: 0, y: 0, z: 1 };
const clampCam = (c) => {
  const z = Math.max(ZMIN, Math.min(ZMAX, c.z ?? cam.z));
  return {
    x: Math.max(0, Math.min(WORLD.w - VIEW.w / z, c.x)),
    // the view can go a little past the bottom edge so places there can be dragged up clear of the app's nav
    // at the end of the day the view may rise past the top edge (into the clouds) so the gate shows clear of the top bar
    y: Math.max((-TOP_BAR + (state.finale ? -110 : 20)) / z, Math.min(WORLD.h - VIEW.h / z + (BOTTOM_BAR + 40) / z, c.y)),
    z,
  };
};
function setCam(c) {
  const k = clampCam(c);
  const zoomed = k.z !== cam.z;
  cam.x = k.x;
  cam.y = k.y;
  cam.z = k.z;
  svg.setAttribute('viewBox', `${cam.x.toFixed(1)} ${cam.y.toFixed(1)} ${(VIEW.w / cam.z).toFixed(1)} ${(VIEW.h / cam.z).toFixed(1)}`);
  if (zoomed && state.playFor) state.playFor.playAt = playSpot(state.playFor);
  positionPlay();
  updateEdgePin();
  updateFindCar();
}
const toScreen = (p) => ({ x: (p.x - cam.x) * cam.z, y: (p.y - cam.y) * cam.z });
/** a client (pointer) position in the frame's own 800 x 360 px */
function framePx(clientX, clientY) {
  const fs = frameScale();
  const fr = frame.getBoundingClientRect();
  return { x: (clientX - fr.left) / fs, y: (clientY - fr.top) / fs };
}
const toWorld = (f) => ({ x: cam.x + f.x / cam.z, y: cam.y + f.y / cam.z });
/** zoom to `z`, keeping the world point under the frame point `f` where it is */
function zoomAt(f, z) {
  const w = toWorld(f);
  const nz = Math.max(ZMIN, Math.min(ZMAX, z));
  glide = null;
  setCam({ x: w.x - f.x / nz, y: w.y - f.y / nz, z: nz });
}
/** the view that shows all these points (as well as it can), a little below the top bar */
function framing(points, z = cam.z) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  let x = cx - VIEW.w / (2 * z);
  let y = cy - (VIEW.h + TOP_BAR - BOTTOM_BAR) / (2 * z);
  // when not everything fits, the last point (where we're going) wins: its landmark stays clear of the top bar and
  // the bottom edge, and away from the sides
  const t = points[points.length - 1];
  y = Math.min(y, t.y - 50 / z - (TOP_BAR + 8) / z);
  y = Math.max(y, t.y + 14 / z - (VIEW.h - BOTTOM_BAR) / z);
  x = Math.min(Math.max(x, t.x + 60 / z - VIEW.w / z), t.x - 60 / z);
  return clampCam({ x, y, z });
}
let glide = null;
function glideTo(target, ms = 800) {
  const from = { ...cam };
  const tz = target.z ?? cam.z;
  const t0 = performance.now();
  const id = {};
  glide = id;
  const step = (now) => {
    if (glide !== id) return;
    const t = Math.min(1, (now - t0) / ms);
    const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    setCam({ x: from.x + (target.x - from.x) * e, y: from.y + (target.y - from.y) * e, z: from.z + (tz - from.z) * e });
    if (t < 1) requestAnimationFrame(step);
    else glide = null;
  };
  requestAnimationFrame(step);
}

// drag to look around (a tap stays a tap: only a move of more than 8 px is a drag); two fingers pinch to zoom;
// the mouse wheel zooms too
const drag = { on: false, moved: false, sx: 0, sy: 0, cx: 0, cy: 0, until: 0 };
const ptrs = new Map();
let pinch = null;
let lastInput = performance.now();
const startDrag = (x, y) => {
  drag.on = true;
  drag.sx = x;
  drag.sy = y;
  drag.cx = cam.x;
  drag.cy = cam.y;
};
svg.addEventListener('pointerdown', (e) => {
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2) {
    const [a, b] = [...ptrs.values()];
    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, z: cam.z };
    drag.moved = true;
    glide = null;
    return;
  }
  if (ptrs.size > 2) return;
  drag.moved = false;
  startDrag(e.clientX, e.clientY);
});
window.addEventListener('pointermove', (e) => {
  if (ptrs.has(e.pointerId)) ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pinch && ptrs.size >= 2) {
    const [a, b] = [...ptrs.values()];
    zoomAt(framePx((a.x + b.x) / 2, (a.y + b.y) / 2), (pinch.z * Math.hypot(a.x - b.x, a.y - b.y)) / pinch.d);
    return;
  }
  if (!drag.on) return;
  const s = frameScale();
  const dx = (e.clientX - drag.sx) / s;
  const dy = (e.clientY - drag.sy) / s;
  if (!drag.moved && Math.hypot(dx, dy) < 8) return;
  drag.moved = true;
  glide = null;
  setCam({ x: drag.cx - dx / cam.z, y: drag.cy - dy / cam.z });
});
const pointerEnd = (e) => {
  ptrs.delete(e.pointerId);
  if (ptrs.size < 2) pinch = null;
  if (ptrs.size === 1) {
    // one finger left after a pinch: it pans from here, without a jump
    const [a] = [...ptrs.values()];
    startDrag(a.x, a.y);
    return;
  }
  if (ptrs.size) return;
  if (drag.on && drag.moved) drag.until = performance.now() + 60;
  drag.on = false;
};
window.addEventListener('pointerup', pointerEnd);
window.addEventListener('pointercancel', pointerEnd);
svg.addEventListener('wheel', (e) => {
  e.preventDefault();
  lastInput = performance.now();
  zoomAt(framePx(e.clientX, e.clientY), cam.z * Math.exp(-e.deltaY * 0.0015));
}, { passive: false });
const justDragged = () => performance.now() < drag.until;

/** an element's box in frame px (grown by `pad`) */
function boxOf(node, pad = 0) {
  const fs = frameScale();
  const fr = frame.getBoundingClientRect();
  const r = node.getBoundingClientRect();
  return { l: (r.left - fr.left) / fs - pad, t: (r.top - fr.top) / fs - pad, r: (r.right - fr.left) / fs + pad, b: (r.bottom - fr.top) / fs + pad };
}
const grow = (r, pad) => ({ l: r.l - pad, t: r.t - pad, r: r.r + pad, b: r.b + pad });
/** what Play and the edge pin keep clear of: the app's nav (bottom centre), the cards button and its open panel */
function keepOuts(pad = 0) {
  const rs = [grow(NAV_KEEP, pad), boxOf(cardsBtn, pad)];
  if (!cardsPanel.hidden) rs.push(boxOf(cardsPanel, pad));
  return rs;
}
const inRect = (p, r) => p.x > r.l && p.x < r.r && p.y > r.t && p.y < r.b;
const inKeepOut = (p, pad) => keepOuts(pad).find((r) => inRect(p, r)) || null;

// ---------- the places ----------

const state = { car: LAND.start, carPos: { ...NODES[LAND.start] }, driving: false, target: null, at: null, done: new Set(), playFor: null, finale: false, starring: false, trip: 0 };
/** run `fn` after `ms` only if nothing new has started since (a newer tap, drive or Play makes it stale) */
function later2(ms, fn) {
  const trip = state.trip;
  setTimeout(() => { if (trip === state.trip) fn(); }, ms);
}
const placeEls = {};
PLACES.forEach((pl) => {
  const n = NODES[pl.id];
  pl.x = n.x + pl.at.dx;
  pl.y = n.y + pl.at.dy;
  const root = g(LAYER.places, { class: 'cm-place', role: 'button', tabindex: 0, 'aria-label': pl.name, transform: `translate(${pl.x} ${pl.y})` });
  const halo = el('circle', { class: 'cm-halo', cx: 0, cy: -16, r: 48, fill: 'rgba(74, 193, 189, .16)', stroke: 'rgba(58, 156, 152, .45)', 'stroke-width': 2, visibility: 'hidden' }, root);
  el('circle', { cx: 0, cy: -18, r: 44, fill: 'transparent' }, root); // a big, forgiving tap area
  const lift = g(root, { class: 'cm-lift' });
  el('ellipse', { class: 'cm-ped-shadow', cx: 5, cy: 6, rx: 36, ry: 12, fill: 'rgba(13, 13, 13, .16)' }, lift);
  el('ellipse', { cx: 0, cy: 4, rx: 36, ry: 12, fill: '#E6E6E6' }, lift);
  el('ellipse', { class: 'cm-ped-top', cx: 0, cy: 0, rx: 36, ry: 12, fill: '#FFFFFF', stroke: '#D9D9D9', 'stroke-width': 1.5 }, lift);
  const bounce = g(lift, { class: 'cm-bounce' });
  g(bounce, { class: 'cm-art', transform: 'translate(0 2)' }).innerHTML = pl.art();
  // the badge sits on the pedestal's side away from where the car parks
  const star = g(lift, { transform: `translate(${26 * (pl.badge || 1)} -4)`, visibility: 'hidden' });
  el('circle', { cx: 0, cy: 0, r: 11, fill: '#FFFFFF', stroke: '#E0A92A', 'stroke-width': 1.5 }, star);
  el('path', { d: STAR_D, fill: '#FFC93C', stroke: '#E0A92A', 'stroke-width': 1, 'stroke-linejoin': 'round' }, star);
  const go = () => { if (!justDragged()) onPlace(pl); };
  root.addEventListener('click', go);
  root.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPlace(pl); } });
  placeEls[pl.id] = { root, halo, star };
});

// today's places (bottom right, by the thumb): a square button opens a row of small cards, one per place, in order,
// each with the place's own picture. A tap on a card closes the row and drives the car there, the same as tapping the
// place on the map. A done place keeps its picture and wears a star; the suggested one has a teal outline.
const cardsBtn = document.getElementById('cards');
const cardsPanel = document.getElementById('cards-panel');
function setCards(open) {
  cardsPanel.hidden = !open;
  cardsBtn.setAttribute('aria-expanded', String(open));
  updateEdgePin();
}
cardsBtn.addEventListener('click', () => {
  lastInput = performance.now();
  setCards(cardsPanel.hidden);
});
// a tap anywhere else on the map closes the row
svg.addEventListener('pointerdown', () => { if (!cardsPanel.hidden) setCards(false); });
PLACES.forEach((pl) => {
  const s = document.createElement('button');
  s.type = 'button';
  s.className = 'cm-card';
  s.dataset.id = pl.id;
  s.setAttribute('aria-label', `Go to ${pl.say}`);
  s.innerHTML = `<svg width="44" height="42" viewBox="-32 -54 64 60" aria-hidden="true">${pl.art()}</svg>`;
  s.addEventListener('click', () => {
    lastInput = performance.now();
    setCards(false);
    onPlace(pl);
  });
  cardsPanel.appendChild(s);
});
function fillSlot(id) {
  const s = cardsPanel.querySelector(`[data-id="${id}"]`);
  s.classList.remove('next');
  if (!s.querySelector('.cm-card-star')) s.insertAdjacentHTML('beforeend', `<span class="cm-card-star"><svg width="14" height="14" viewBox="-8 -8 16 16" aria-hidden="true"><path d="${STAR_D}" fill="#FFC93C" stroke="#E0A92A" stroke-width="1" stroke-linejoin="round"/></svg></span>`);
  replay(cardsBtn, 'cm-pop');
  cardsBtn.setAttribute('aria-label', `Today's places: ${state.done.size} of ${PLACES.length} done`);
}
cardsBtn.setAttribute('aria-label', `Today's places: 0 of ${PLACES.length} done`);

// ---------- the car ----------

const car = g(LAYER.car, { class: 'cm-car' });
const carFlip = g(car);
const carTilt = g(carFlip);
const carHop = g(carTilt, { class: 'cm-car-hop' });
el('ellipse', { cx: 1, cy: 0, rx: 23, ry: 7, fill: 'rgba(74, 193, 189, .22)', stroke: '#3A9C98', 'stroke-width': 1.5 }, carFlip);
// the body bounces (CSS) inside the scale group; the wheels sit outside the bounce so they stay on the road
const wheel = (x) => `<g transform="translate(${x} -3)"><g class="cm-wheel"><circle r="4.4" fill="#3A3F47"/><circle r="2.3" fill="#D5D9DE"/>
  <path d="M0 -2.3 V2.3 M-2.3 0 H2.3" stroke="#8A9099" stroke-width=".9"/></g></g>`;
const CAR_ART = `
  <ellipse cx="1" cy="0" rx="16" ry="3.2" fill="rgba(13, 13, 13, .2)"/>
  <g class="cm-car-body">
    <path d="M18 -8 Q18 -14 12 -14 L6 -14 Q2 -24 -6 -24 Q-12 -24 -14 -16 L-16 -14 Q-18 -13 -18 -9 V-4 H18 Z" fill="#E8453C"/>
    <path d="M8 -12.3 H14" stroke="#F47E74" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M3.5 -15 Q0.5 -21 -4.5 -21 Q-9 -21 -10.5 -15 Z" fill="#BFE8EC"/>
    <circle cx="-4" cy="-16" r="3.2" fill="#B07A4E"/><circle cx="-6" cy="-19" r="1.3" fill="#B07A4E"/><circle cx="-2" cy="-19" r="1.3" fill="#B07A4E"/>
    <circle cx="-2.6" cy="-16.4" r=".7" fill="#1D2433"/><circle cx="-1.2" cy="-15" r=".8" fill="#5A3E28"/>
    <rect x="-19" y="-7" width="38" height="4" rx="2" fill="#B8322B"/>
    <circle cx="17.2" cy="-10" r="1.8" fill="#FFF3C4"/>
    <rect x="-18.6" y="-12" width="1.8" height="3" rx=".9" fill="#B8322B"/>
  </g>
  ${wheel(-10)}${wheel(10)}`;
g(carHop, { class: 'cm-car-art', transform: 'scale(1.25)' }).innerHTML = CAR_ART;
const wheels = [...car.querySelectorAll('.cm-wheel')];
let wheelTurn = 0;
/** turn the wheels by the distance driven (world px): radius 4.4 x 1.25 */
function rollWheels(dist) {
  wheelTurn = (wheelTurn + (dist / 5.5) * (180 / Math.PI)) % 360;
  wheels.forEach((w) => w.setAttribute('transform', `rotate(${wheelTurn.toFixed(1)})`));
}
/** the car's engine: a low buzzy note that putt-putts (a wobble in its loudness), plus a soft crunch of sand. It revs
    as the car sets off, its pitch and the crunch follow the car's speed, and it winds down when the car stops. */
let engine = null;
function engineStart() {
  try {
    actx ??= new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const t = actx.currentTime;
    if (engine) {
      engine.master.gain.cancelScheduledValues(t);
      engine.master.gain.setTargetAtTime(1, t, 0.05);
      return;
    }
    const master = actx.createGain();
    master.gain.setValueAtTime(0.0001, t);
    master.gain.setTargetAtTime(1, t, 0.05);
    master.connect(actx.destination);
    // the engine
    const o = actx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(60, t);
    o.frequency.linearRampToValueAtTime(150, t + 0.22);
    o.frequency.linearRampToValueAtTime(95, t + 0.55);
    const f = actx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 520;
    f.Q.value = 3;
    const amp = actx.createGain();
    amp.gain.value = 0.045;
    const lfo = actx.createOscillator();
    lfo.frequency.value = 13;
    const lfoAmt = actx.createGain();
    lfoAmt.gain.value = 0.025;
    lfo.connect(lfoAmt).connect(amp.gain);
    o.connect(f).connect(amp).connect(master);
    // the sand
    const buf = actx.createBuffer(1, actx.sampleRate, actx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let k = 0; k < ch.length; k++) ch[k] = Math.random() * 2 - 1;
    const noise = actx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;
    const bp = actx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1400;
    bp.Q.value = 0.7;
    const sand = actx.createGain();
    sand.gain.value = 0.0001;
    noise.connect(bp).connect(sand).connect(master);
    [o, lfo, noise].forEach((n) => n.start(t));
    engine = { o, lfo, noise, sand, master, f };
  } catch {
    engine = null;
  }
}
/** follow the car's speed (world px per second) */
function engineSpeed(v) {
  if (!engine) return;
  const t = actx.currentTime;
  engine.o.frequency.setTargetAtTime(78 + Math.min(1, v / 260) * 70, t, 0.12);
  engine.lfo.frequency.setTargetAtTime(9 + Math.min(1, v / 260) * 10, t, 0.12);
  engine.sand.gain.setTargetAtTime(0.004 + Math.min(1, v / 260) * 0.03, t, 0.12);
}
function engineStop() {
  if (!engine) return;
  const e = engine;
  engine = null;
  try {
    const t = actx.currentTime;
    e.o.frequency.setTargetAtTime(55, t, 0.15);
    e.master.gain.setTargetAtTime(0.0001, t, 0.12);
    [e.o, e.lfo, e.noise].forEach((n) => n.stop(t + 0.8));
    // a little two-note "we're here" toot
    blip(660, 660, 0.09, 'triangle', 0.05, 0.08);
    blip(880, 880, 0.12, 'triangle', 0.05, 0.2);
  } catch {
    /* no sound */
  }
}
/** a puff of sand behind the car */
function dust(p) {
  const back = { x: p.x - facing * 20, y: p.y };
  const d = el('circle', { class: 'cm-dust', cx: back.x.toFixed(1), cy: back.y.toFixed(1), r: 3 + Math.random() * 2.5, fill: '#EBD39E', style: `--dx:${(-facing * (6 + Math.random() * 8)).toFixed(1)}px` }, LAYER.fx);
  setTimeout(() => d.remove(), 700);
}
let facing = 1;
let tilt = 0;
/** put the car at `p`. It faces the way it's driving (dx, dy: the road's direction there): left or right, and it
    leans up or down with the road (eased, so bends don't snap) */
function placeCar(p, dx = 0, dy = 0) {
  const len = Math.hypot(dx, dy);
  if (len > 0.01 && Math.abs(dx) / len > 0.25) facing = dx > 0 ? 1 : -1;
  const want = len > 0.01 ? Math.max(-32, Math.min(32, (Math.atan2(dy, Math.abs(dx) || 0.001) * 180) / Math.PI)) : 0;
  tilt += (want - tilt) * (len > 0.01 ? 0.18 : 1);
  car.setAttribute('transform', `translate(${p.x.toFixed(1)} ${(p.y + 3).toFixed(1)})`);
  carFlip.setAttribute('transform', `scale(${facing} 1)`);
  carTilt.setAttribute('transform', `rotate(${tilt.toFixed(1)} 0 -8)`);
}
placeCar(state.carPos, -1, 0);
el('circle', { cx: 2, cy: -12, r: 26, fill: 'transparent' }, carFlip); // a forgiving tap area
let actx = null;
function beep() {
  try {
    actx ??= new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime;
    [0, 0.17].forEach((d) => {
      const o = actx.createOscillator();
      const gn = actx.createGain();
      o.type = 'square';
      o.frequency.value = 520;
      gn.gain.setValueAtTime(0.0001, t + d);
      gn.gain.exponentialRampToValueAtTime(0.08, t + d + 0.02);
      gn.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.12);
      o.connect(gn).connect(actx.destination);
      o.start(t + d);
      o.stop(t + d + 0.14);
    });
  } catch {
    /* no sound */
  }
}
car.style.cursor = 'pointer';
car.addEventListener('click', (e) => {
  e.stopPropagation();
  if (justDragged()) return;
  beep();
  replay(carHop, 'cm-hop');
});

// the back button (top left): the app takes the child back
document.getElementById('back').addEventListener('click', () => toApp('back'));

// ---------- the suggested place, its route, and the edge pin ----------

const routePath = el('path', { class: 'cm-route', d: '', stroke: '#2E8E8A', 'stroke-width': 4.5, fill: 'none', 'stroke-linecap': 'round' }, LAYER.route);
const routeArrow = el('path', { d: 'M-6 -5 L5 0 L-6 5 Z', fill: '#2E8E8A', stroke: '#2E8E8A', 'stroke-width': 1.5, 'stroke-linejoin': 'round', visibility: 'hidden' }, LAYER.route);
const suggested = () => PLACES.find((p) => !state.done.has(p.id)) || null;
const placeById = (id) => PLACES.find((p) => p.id === id);
const routeTo = (pl) => trimEnd(routeFrom(state.carPos, { node: pl.id }), pl.park);
function drawRoute(pts) {
  if (!pts || pts.length < 2) {
    routePath.setAttribute('d', '');
    routeArrow.setAttribute('visibility', 'hidden');
    return;
  }
  routePath.setAttribute('d', toD(pts));
  const a = pts[pts.length - 1];
  const b = pts[Math.max(0, pts.length - 4)];
  const ang = (Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI;
  routeArrow.setAttribute('transform', `translate(${a.x.toFixed(1)} ${a.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
  routeArrow.setAttribute('visibility', 'visible');
}
function setHalo(id, still = false) {
  PLACES.forEach((p) => {
    const h = placeEls[p.id].halo;
    h.setAttribute('visibility', p.id === id ? 'visible' : 'hidden');
    h.classList.toggle('still', still);
  });
}
function showSuggestion() {
  const s = suggested();
  setHalo(s ? s.id : null);
  cardsPanel.querySelectorAll('.cm-card').forEach((b) => b.classList.toggle('next', !!s && b.dataset.id === s.id));
  drawRoute(s && s.id !== state.at ? routeTo(s) : null);
  updateEdgePin();
}

/** a small pin at the edge of the view pointing to the suggested place when it's off screen; a tap shows it */
const edgePin = document.createElement('button');
edgePin.type = 'button';
edgePin.className = 'cm-edgepin';
edgePin.hidden = true;
frame.appendChild(edgePin);
let edgeFor = null;
function updateEdgePin() {
  const s = suggested();
  if (!s || state.driving || state.finale) {
    edgePin.hidden = true;
    return;
  }
  const p = toScreen({ x: s.x, y: s.y - 22 });
  const inside = p.x > 30 && p.x < VIEW.w - 30 && p.y > TOP_BAR + 20 && p.y < VIEW.h - 20;
  if (inside) {
    edgePin.hidden = true;
    return;
  }
  // where the line from the view's centre to the place leaves the view
  const c = { x: VIEW.w / 2, y: (VIEW.h + TOP_BAR) / 2 };
  const dx = p.x - c.x;
  const dy = p.y - c.y;
  const box = { l: 40, r: VIEW.w - 40, t: TOP_BAR + 34, b: VIEW.h - 34 };
  const k = Math.min(dx > 0 ? (box.r - c.x) / dx : dx < 0 ? (box.l - c.x) / dx : Infinity, dy > 0 ? (box.b - c.y) / dy : dy < 0 ? (box.t - c.y) / dy : Infinity);
  const x = c.x + dx * k;
  const y = c.y + dy * k;
  const ang = (Math.atan2(dy, dx) * 180) / Math.PI;
  if (edgeFor !== s.id) {
    edgeFor = s.id;
    edgePin.innerHTML = `<span class="cm-edgepin-arrow"></span><svg width="34" height="34" viewBox="-32 -56 64 62" aria-hidden="true">${s.art()}</svg>`;
    edgePin.setAttribute('aria-label', `Show ${s.say}`);
  }
  // never under the app's nav or the cards button: slide up above it
  const keep = inKeepOut({ x, y }, 28);
  const pinAt = keep ? { x, y: keep.t } : { x, y };
  edgePin.style.left = `${pinAt.x}px`;
  edgePin.style.top = `${pinAt.y}px`;
  edgePin.style.setProperty('--ang', `${ang}deg`);
  edgePin.hidden = false;
}
edgePin.addEventListener('click', () => {
  const s = suggested();
  if (s) glideTo(framing([state.carPos, { x: s.x, y: s.y - 30 }]));
});

// ---------- driving ----------

const playBtn = document.getElementById('play');
function hidePlay() {
  state.playFor = null;
  if (playBtn.hidden) return;
  playBtn.classList.remove('cm-play-in');
  replay(playBtn, 'cm-play-out');
  setTimeout(() => { if (!state.playFor) playBtn.hidden = true; playBtn.classList.remove('cm-play-out'); }, 180);
}
/** Play beside the landmark, on the side away from the car, clear of the art, the top bar and the edges */
function playSpot(pl) {
  const carLeft = state.carPos.x < pl.x;
  const side = (sgn) => ({ x: pl.x + sgn * (48 + 38 / cam.z), y: pl.y - 20 });
  for (const sp of [side(carLeft ? 1 : -1), side(carLeft ? -1 : 1), { x: pl.x, y: pl.y - 60 - 44 / cam.z }]) {
    const s = toScreen(sp);
    const nearCar = Math.hypot(sp.x - state.carPos.x, sp.y - state.carPos.y) * cam.z < 52;
    if (!nearCar && s.x > 44 && s.x < VIEW.w - 44 && s.y > TOP_BAR + 40 && s.y < VIEW.h - 36 && !inKeepOut(s, 36)) return sp;
  }
  return side(carLeft ? 1 : -1);
}
function positionPlay() {
  if (!state.playFor) return;
  const s = toScreen(state.playFor.playAt);
  playBtn.style.left = `${s.x}px`;
  playBtn.style.top = `${s.y}px`;
}
function showPlay(pl) {
  pl.playAt = playSpot(pl);
  state.playFor = pl;
  positionPlay();
  playBtn.hidden = false;
  replay(playBtn, 'cm-play-in');
}

function onPlace(pl) {
  if (state.finale) {
    // the day is done: the place still answers
    replay(placeEls[pl.id].root, 'nudge');
    if (!state.driving) say('See you tomorrow!');
    return;
  }
  if (state.starring || (state.driving && state.target === pl.id)) {
    // a star is on its way, or the car is already going there: the place wiggles, so the tap still shows
    replay(placeEls[pl.id].root, 'nudge');
    return;
  }
  state.trip++;
  if (state.at === pl.id && !state.driving) {
    showPlay(pl);
    say('Tap play!');
    return;
  }
  hidePlay();
  drive(routeTo(pl), () => arrive(pl), pl);
  say(pl.say ? `Off to ${pl.say}!` : 'Off we go!');
}

/** drive along `pts` (the view follows the car); the dotted route ahead shrinks as it goes */
let driveSeq = 0;
function drive(pts, done, pl) {
  const id = ++driveSeq;
  const rolling = state.driving; // already moving: no slow start
  engineStart();
  const total = plen(pts);
  const dur = Math.max(rolling ? 500 : 900, (total / SPEED) * 1000 * (rolling ? 0.75 : 1));
  state.driving = true;
  state.target = pl ? pl.id : null;
  state.at = null;
  glide = null;
  car.classList.add('driving');
  const sg = suggested();
  setHalo(pl ? pl.id : sg && !state.finale ? sg.id : null);
  if (!pl) drawRoute(null);
  updateEdgePin();
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const t0 = performance.now();
  const ease = rolling ? (t) => 1 - (1 - t) * (1 - t) : (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const end = pl ? { x: pl.x, y: pl.y - 24 } : pts[pts.length - 1];
  let i = 0;
  let lastD = 0;
  let lastPuff = 0;
  let lastNow = performance.now();
  const step = (now) => {
    if (id !== driveSeq) return; // a newer drive took over
    const t = Math.min(1, (now - t0) / dur);
    const d = ease(t) * total;
    while (i < pts.length - 2 && cum[i + 1] < d) i++;
    const seg = cum[i + 1] - cum[i] || 1;
    const k = Math.min(1, Math.max(0, (d - cum[i]) / seg));
    const p = { x: pts[i].x + (pts[i + 1].x - pts[i].x) * k, y: pts[i].y + (pts[i + 1].y - pts[i].y) * k };
    // look a little ahead along the road for the direction, so tiny wiggles don't flip the car
    const ahead = pts[Math.min(pts.length - 1, i + 4)];
    placeCar(p, ahead.x - pts[i].x, ahead.y - pts[i].y);
    rollWheels(d - lastD);
    engineSpeed(((d - lastD) / Math.max(1, now - lastNow)) * 1000);
    lastNow = now;
    lastD = d;
    if (now - lastPuff > 110 && t > 0.05 && t < 0.92) {
      lastPuff = now;
      dust(p);
    }
    state.carPos = p;
    if (pl) drawRoute([p, ...pts.slice(i + 1)]);
    // the view follows the car, leaning towards where it's going (unless the child is dragging)
    if (!drag.moved || !drag.on) {
      const want = framing([p, { x: p.x + (end.x - p.x) * 0.35, y: p.y + (end.y - p.y) * 0.35 }]);
      setCam({ x: cam.x + (want.x - cam.x) * 0.08, y: cam.y + (want.y - cam.y) * 0.08 });
    }
    if (t < 1) requestAnimationFrame(step);
    else {
      state.driving = false;
      state.target = null;
      car.classList.remove('driving');
      placeCar(state.carPos);
      replay(carHop, 'cm-settle');
      engineStop();
      drawRoute(null);
      done();
    }
  };
  requestAnimationFrame(step);
}

function arrive(pl) {
  state.car = pl.id;
  state.at = pl.id;
  setHalo(pl.id, true);
  replay(placeEls[pl.id].root, 'arrive');
  glideTo(framing([state.carPos, { x: pl.x, y: pl.y - 40 }]), 500);
  later2(300, () => {
    showPlay(pl);
    say(state.done.has(pl.id) ? 'Play again?' : 'Tap play!');
  });
}

// ---------- tapping the map: a road spot is somewhere to drive; anywhere else just ripples ----------

function ripple(at) {
  const r = el('circle', { class: 'cm-tapring', cx: at.x, cy: at.y, r: 14 / cam.z, fill: 'none', stroke: '#FFFFFF', 'stroke-width': 3 / cam.z }, LAYER.fx);
  setTimeout(() => r.remove(), 600);
}
svg.addEventListener('click', (e) => {
  if (justDragged() || e.target.closest('.cm-place') || e.target.closest('.cm-car') || e.target.closest('.cm-toy')) return;
  if (state.finale || state.starring || !activity.hidden) return;
  const w = toWorld(framePx(e.clientX, e.clientY));
  ripple(w);
  const n = nearestOnRoad(w);
  if (n.d > 34 / Math.min(1, cam.z)) return; // not near a road: only the ripple
  const pts = routeFrom(state.carPos, { r: n.r, i: n.i });
  if (plen(pts) < 14) return;
  state.trip++;
  hidePlay();
  say('Pick a place to go!', true); // the line stays true without being read out on every road tap
  drive(pts, () => showSuggestion(), null);
});

/** "back to my car": a button that shows when the car is off screen; a tap brings the view (and zoom) back to it */
const findCar = document.createElement('button');
findCar.type = 'button';
findCar.className = 'cm-sq cm-findcar';
findCar.setAttribute('aria-label', 'Back to my car');
findCar.hidden = true;
findCar.innerHTML = `<svg width="34" height="26" viewBox="-19 -26 40 30" aria-hidden="true">${CAR_ART}</svg>`;
frame.appendChild(findCar);
function updateFindCar() {
  const p = toScreen(state.carPos);
  findCar.hidden = !(p.x < -16 || p.x > VIEW.w + 16 || p.y < TOP_BAR - 10 || p.y > VIEW.h + 30);
}
findCar.addEventListener('click', () => {
  glideTo(framing([state.carPos], 1), 700);
  setTimeout(() => replay(carHop, 'cm-hop'), 700);
});

/** after a while without a tap, a hand shows what to tap next: Play if it's up, else the suggested place (or its
    edge pin when the place is off screen). The quiet time is the only trigger; what's on screen only decides
    whether and where the hand shows. */
const hand = document.createElement('div');
hand.className = 'cm-hand';
hand.innerHTML = '<svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true"><path d="M18 30V10a3.5 3.5 0 0 1 7 0v13l2-1.2a3.5 3.5 0 0 1 4.6 1l9 9.5c2 2.2 2 5.5 0 7.6l-3 3a7 7 0 0 1-5 2H22a7 7 0 0 1-5.3-2.4l-7-8.2a3.4 3.4 0 0 1 4.9-4.7z" fill="#FFFFFF" stroke="#0D0D0D" stroke-width="2.5" stroke-linejoin="round"/></svg>';
frame.appendChild(hand);
frame.addEventListener('pointerdown', () => { lastInput = performance.now(); hand.classList.remove('cm-hand-tap'); }, true);
setInterval(() => {
  if (performance.now() - lastInput < 8000) return;
  lastInput = performance.now();
  if (OVERLAY || state.driving || state.finale || state.starring || !activity.hidden) return;
  let at = null;
  if (state.playFor && !playBtn.hidden) at = toScreen(state.playFor.playAt);
  else {
    const s = suggested();
    if (!s) return;
    const p = toScreen({ x: s.x, y: s.y - 20 });
    if (p.x > 30 && p.x < VIEW.w - 30 && p.y > TOP_BAR + 20 && p.y < VIEW.h - 20) at = p;
    else if (!edgePin.hidden) at = { x: parseFloat(edgePin.style.left), y: parseFloat(edgePin.style.top) };
  }
  if (!at) return;
  hand.style.left = `${at.x}px`;
  hand.style.top = `${at.y}px`;
  replay(hand, 'cm-hand-tap');
}, 500);

// ---------- the sky: clouds drift over the mountains; flocks of birds cross the map now and then (never in the way) ----------

(LAND.clouds || []).forEach(([x, y, sc, delay]) => {
  const c = g(LAYER.sky, { transform: `translate(${x} ${y}) scale(${sc})` });
  const inner = g(c, { class: 'cm-cloud', style: `animation-delay:${delay}s` });
  [[-14, 2, 10], [0, -4, 14], [15, 1, 11], [5, 5, 10]].forEach(([dx, dy, r]) => el('circle', { cx: dx, cy: dy, r, fill: '#FFFFFF', opacity: 0.92 }, inner));
});
[[180, 40, 0, 0.9], [420, 34, -22, 0.75]].forEach(([y, dur, delay, sc]) => {
  const f = g(LAYER.sky, { transform: `translate(0 ${y})` });
  const inner = g(f, { class: 'cm-flyacross', style: `animation-duration:${dur}s;animation-delay:${delay}s` });
  [[0, 0], [-14, 9], [-13, -9], [-28, 15]].forEach(([x, yy]) => inner.appendChild(skyBird(x, yy, sc)));
});

if (LAND.snow) {
  // snow falling all over the land: flakes drift down and fade, each on its own beat
  for (let k = 0; k < 140; k++) {
    const f = g(LAYER.sky, { transform: `translate(${(rnd() * WORLD.w).toFixed(0)} ${(rnd() * WORLD.h - 40).toFixed(0)})` });
    el('circle', { class: 'cm-flake', r: (1.2 + rnd() * 1.8).toFixed(1), fill: '#FFFFFF', style: `animation-delay:${(-rnd() * 6).toFixed(2)}s;animation-duration:${(4.5 + rnd() * 3).toFixed(1)}s` }, f);
  }
}

// ---------- toys: little things that answer a tap. No pedestal and no hard shadow: those mean "a place to go" ----------

function blip(f0, f1, len, type = 'sine', vol = 0.08, delay = 0) {
  try {
    actx ??= new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime + delay;
    const o = actx.createOscillator();
    const gn = actx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + len);
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + len);
    o.connect(gn).connect(actx.destination);
    o.start(t);
    o.stop(t + len + 0.03);
  } catch {
    /* no sound */
  }
}
/** a cow's moo: a low buzzy note through a filter that opens and closes like a mouth */
function moo() {
  try {
    actx ??= new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime;
    const o = actx.createOscillator();
    const o2 = actx.createOscillator();
    const f = actx.createBiquadFilter();
    const gn = actx.createGain();
    o.type = 'sawtooth';
    o2.type = 'sawtooth';
    o.frequency.setValueAtTime(112, t);
    o.frequency.linearRampToValueAtTime(148, t + 0.28);
    o.frequency.linearRampToValueAtTime(100, t + 1.1);
    o2.frequency.setValueAtTime(113.5, t);
    o2.frequency.linearRampToValueAtTime(150, t + 0.28);
    o2.frequency.linearRampToValueAtTime(101, t + 1.1);
    f.type = 'lowpass';
    f.Q.value = 7;
    f.frequency.setValueAtTime(320, t);
    f.frequency.linearRampToValueAtTime(950, t + 0.32);
    f.frequency.linearRampToValueAtTime(380, t + 1.1);
    gn.gain.setValueAtTime(0.0001, t);
    gn.gain.exponentialRampToValueAtTime(0.16, t + 0.12);
    gn.gain.setValueAtTime(0.14, t + 0.8);
    gn.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
    o.connect(f);
    o2.connect(f);
    f.connect(gn).connect(actx.destination);
    [o, o2].forEach((x) => { x.start(t); x.stop(t + 1.25); });
  } catch {
    /* no sound */
  }
}
/** a word bubble that pops over an animal ("Moo!") and floats away */
function bubble(at, word, dy = 44) {
  const b = g(LAYER.fx, { transform: `translate(${at.x} ${at.y - dy})` });
  const inner = g(b, { class: 'cm-wordbub' });
  const w = word.length * 8 + 18;
  el('rect', { x: -w / 2, y: -14, width: w, height: 24, rx: 12, fill: '#FFFFFF', stroke: '#D9D9D9', 'stroke-width': 1.5 }, inner);
  el('path', { d: 'M-5 9 L0 16 L5 9 Z', fill: '#FFFFFF' }, inner);
  const t = el('text', { x: 0, y: 4, 'text-anchor': 'middle', 'font-family': 'Patrick Hand, cursive', 'font-size': 16, fill: '#0D0D0D' }, inner);
  t.textContent = word;
  setTimeout(() => b.remove(), 1400);
}
/** a toy at `at`: `draw` is its art (standing on y = 0); a tap runs `tap(inner)` */
function toy(name, at, draw, tap, hit = 22) {
  const t = g(LAYER.toys, { class: 'cm-toy', transform: `translate(${at.x} ${at.y})`, 'data-toy': name });
  el('circle', { cx: 0, cy: -hit * 0.6, r: hit, fill: 'transparent' }, t);
  const inner = g(t, { class: 'cm-toy-in' });
  inner.innerHTML = draw;
  t.addEventListener('click', (e) => {
    e.stopPropagation();
    if (justDragged()) return;
    tap(inner, t);
  });
  return inner;
}
const TOY_KINDS = makeToys({ toy, blip, bubble, moo, replay, el, svg, burst, rivers: WATER.rivers, roadPts });
(LAND.toys || []).forEach((t) => TOY_KINDS[t.type](t));

// ---------- the activity (simulated) ----------

const activity = document.getElementById('activity');
playBtn.addEventListener('click', () => {
  const pl = state.playFor;
  if (!pl) return;
  state.trip++;
  hidePlay();
  if (EMBED) {
    // the app opens the real activity
    toApp('play', { name: pl.name, kind: APP_KIND[pl.kind] || pl.kind, activity: pl.activity, mapKind: pl.kind, place: pl.id });
    return;
  }
  document.getElementById('activity-art').innerHTML = `<svg width="200" height="120" viewBox="-60 -66 120 72" aria-hidden="true">
    <ellipse cx="0" cy="2" rx="46" ry="9" fill="#EEF4E6"/><g>${pl.art()}</g></svg>`;
  document.querySelector('.cm-activity-note').textContent = KIND_NOTE[pl.kind] || 'The activity opens here.';
  activity.hidden = false;
  speak(pl.say.replace(/^the /, ''));
});
document.getElementById('finish').addEventListener('click', () => {
  const pl = placeById(state.at);
  activity.hidden = true;
  if (!pl) return;
  if (state.done.has(pl.id)) {
    state.trip++;
    later2(400, () => { showSuggestion(); say('Pick a place to go!'); });
    return;
  }
  state.done.add(pl.id);
  state.starring = true;
  state.trip++;
  setHalo(null);
  say('You got a star!');
  later2(300, () => flyStar(pl));
});

/** a big star rises from the place and flies into the cards button (which pops as it lands); then the
    place wears its own small star, and the view glides to show the car and the next place */
function flyStar(pl) {
  const fs = frameScale();
  const fr = frame.getBoundingClientRect();
  const slot = cardsBtn.getBoundingClientRect();
  const to = { x: (slot.left + slot.width / 2 - fr.left) / fs, y: (slot.top + slot.height / 2 - fr.top) / fs };
  const from = toScreen({ x: pl.x, y: pl.y - 30 });
  const star = document.createElement('div');
  star.className = 'cm-flystar';
  star.innerHTML = `<svg width="44" height="44" viewBox="-8 -8 16 16" aria-hidden="true"><path d="${STAR_D}" fill="#FFC93C" stroke="#E0A92A" stroke-width=".8" stroke-linejoin="round"/></svg>`;
  star.style.left = `${from.x}px`;
  star.style.top = `${from.y}px`;
  frame.appendChild(star);
  burst({ x: pl.x, y: pl.y - 30 }, 1.6);
  const mid = { x: (from.x + to.x) / 2, y: Math.max(30, Math.min(from.y, to.y) - 50) };
  const anim = star.animate(
    [
      { transform: 'translate(-50%, -50%) scale(.4)', opacity: 0, offset: 0 },
      { transform: 'translate(-50%, -50%) scale(1.4)', opacity: 1, offset: 0.25 },
      { transform: `translate(calc(-50% + ${mid.x - from.x}px), calc(-50% + ${mid.y - from.y}px)) scale(1.1)`, opacity: 1, offset: 0.62 },
      { transform: `translate(calc(-50% + ${to.x - from.x}px), calc(-50% + ${to.y - from.y}px)) scale(.45)`, opacity: 1, offset: 1 },
    ],
    { duration: 1300, easing: 'ease-in-out', fill: 'forwards' },
  );
  let landed = false;
  const land = () => {
    if (landed) return;
    landed = true;
    star.remove();
    fillSlot(pl.id);
    placeEls[pl.id].star.setAttribute('visibility', 'visible');
    replay(placeEls[pl.id].star, 'cm-badge-in');
    if (state.done.size === PLACES.length) setTimeout(finale, 700);
    else {
      setTimeout(() => {
        state.starring = false;
        const s = suggested();
        glideTo(framing([state.carPos, { x: s.x, y: s.y - 30 }]));
        showSuggestion();
        say('Pick a place to go!');
      }, 600);
    }
  };
  anim.onfinish = land;
  setTimeout(land, 1450); // never wait on the animation alone
}

function burst(at, size = 1) {
  const f = g(LAYER.fx, { transform: `translate(${at.x} ${at.y})` });
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    el('path', {
      class: 'cm-spark',
      d: 'M0 -5 L1.5 -1.6 L5 -1.4 L2.4 1 L3.1 4.5 L0 2.7 L-3.1 4.5 L-2.4 1 L-5 -1.4 L-1.5 -1.6 Z',
      fill: k % 2 ? '#FFC93C' : '#4AC1BD',
      transform: `scale(${size})`,
      style: `--dx:${Math.round(Math.cos(a) * 60 * size)}px;--dy:${Math.round(Math.sin(a) * 46 * size)}px;animation-delay:${(k % 3) * 0.05}s`,
    }, f);
  }
  setTimeout(() => f.remove(), 1300);
}

// ---------- the gate: closed until every star is in; then it opens, and the car drives through to the next land ----------

/** an arch over the road: two posts, a sign board with a star, two little doors that swing open; clouds beyond */
function drawArch(at, { doors, beyond }) {
  const grp = g(LAYER.toys, { class: 'cm-toy cm-gate', 'data-toy': doors ? 'gate' : 'entry', transform: `translate(${at.x.toFixed(1)} ${(at.y + 8).toFixed(1)})` });
  const half = ROAD_W / 2 + 9;
  el('ellipse', { cx: 2, cy: 2, rx: half + 10, ry: 4, fill: 'rgba(60, 80, 60, .16)' }, grp);
  let doorL = null;
  let doorR = null;
  if (doors) {
    const door = (sx) => {
      const d = g(grp, { class: `cm-door ${sx < 0 ? 'l' : 'r'}` });
      el('rect', { x: sx < 0 ? -half + 3 : 0, y: -26, width: half - 3, height: 24, fill: '#C98E4E', rx: 1.5 }, d);
      [0.25, 0.5, 0.75].forEach((f) => { const x = sx < 0 ? -half + 3 + (half - 3) * f : (half - 3) * f; el('path', { d: `M${x} -24 V-4`, stroke: '#A8733C', 'stroke-width': 1.6 }, d); });
      el('path', { d: sx < 0 ? `M${-half + 3} -16 H0` : `M0 -16 H${half - 3}`, stroke: '#A8733C', 'stroke-width': 2 }, d);
      return d;
    };
    doorL = door(-1);
    doorR = door(1);
  }
  [-1, 1].forEach((sx) => {
    el('rect', { x: sx * half - 4, y: -46, width: 8, height: 46, rx: 2.5, fill: '#B08A62' }, grp);
    el('rect', { x: sx * half - 5.5, y: -50, width: 11, height: 6, rx: 2, fill: '#8C6244' }, grp);
  });
  el('path', { d: `M${-half - 6} -44 Q0 ${-62} ${half + 6} -44 L${half + 6} -38 Q0 -55 ${-half - 6} -38 Z`, fill: '#8C6244' }, grp);
  if (LAND.toran) {
    // a marigold garland (toran) swagged across the arch, with leaves between the flowers
    const tor = g(grp, { class: 'cm-toran' });
    el('path', { d: `M${-half - 2} -40 Q0 -26 ${half + 2} -40`, stroke: '#5FAE72', 'stroke-width': 1.6, fill: 'none' }, tor);
    for (let k = 0; k <= 8; k++) {
      const t = k / 8;
      const x = (-half - 2) * (1 - t) + (half + 2) * t;
      const y = -40 + 14 * 4 * t * (1 - t) * 0.5;
      el('circle', { cx: x.toFixed(1), cy: (y + 1).toFixed(1), r: 2.6, fill: k % 2 ? '#F2802B' : '#FFC93C' }, tor);
    }
    [-half + 4, -half / 3, half / 3, half - 4].forEach((x) => el('path', { d: `M${x} -36 l-2 7 l2 2 l2 -2 Z`, fill: '#4FAE5F' }, tor));
  }
  el('circle', { cx: 0, cy: -52, r: 9, fill: '#FFFFFF', stroke: '#E0A92A', 'stroke-width': 1.6 }, grp);
  el('path', { d: STAR_D, transform: 'translate(0 -52) scale(.95)', fill: '#FFC93C', stroke: '#E0A92A', 'stroke-width': 0.8 }, grp);
  // clouds hiding what lies beyond (the next land)
  const fog = g(LAYER.sky, { class: 'cm-fog', transform: `translate(${at.x.toFixed(1)} ${(at.y + beyond * 46).toFixed(1)})` });
  [[-46, 0, 20], [-20, beyond * 10, 26], [10, -beyond * 4, 24], [40, beyond * 8, 20], [-6, beyond * 30, 22], [28, beyond * 32, 18], [-34, beyond * 28, 16]].forEach(([dx, dy, r]) => el('circle', { cx: dx, cy: dy, r, fill: '#FFFFFF', opacity: 0.96 }, fog));
  return { grp, doorL, doorR, fog };
}
const gateArt = GATE ? drawArch(GATE, { doors: true, beyond: -1 }) : null;
const entryArt = ENTRY ? drawArch(ENTRY, { doors: false, beyond: 1 }) : null;
if (entryArt) entryArt.fog.classList.add('cm-fog-thin');
gateArt?.grp.addEventListener('click', (e) => {
  e.stopPropagation();
  if (justDragged() || state.gateOpen) return;
  replay(gateArt.grp, 'cm-gate-rattle');
  say('Get all the stars to open the gate!');
});
/** the drive from where the car is to just in front of the gate, and on through it to the land's edge */
function toGate(through) {
  const pts = routeFrom(state.carPos, { node: LAND.gate.node });
  if (through) return [...pts, { x: NODES[LAND.gate.node].x, y: NODES[LAND.gate.node].y - 90 }];
  // stop a little before the arch
  let k = 0;
  let best = Infinity;
  pts.forEach((p, i) => { const d = Math.hypot(p.x - GATE.x, p.y - GATE.y); if (d < best) { best = d; k = i; } });
  return trimEnd(pts.slice(0, k + 1), 46);
}

function finale() {
  state.finale = true;
  hidePlay();
  setHalo(null);
  drawRoute(null);
  updateEdgePin();
  say('All done! The gate is opening!');
  state.starring = false;
  PLACES.forEach((_, k) => setTimeout(() => replay(cardsBtn, 'cm-pop'), k * 300));
  drive(toGate(false), () => {
    state.at = null;
    glideTo(framing([state.carPos, { x: GATE.x, y: GATE.y - 90 }]), 600);
    setTimeout(() => {
      state.gateOpen = true;
      gateArt.grp.classList.add('open');
      gateArt.fog.classList.add('part');
      blip(300, 600, 0.5, 'triangle', 0.06);
      for (let k = 0; k < 3; k++) setTimeout(() => burst({ x: GATE.x + (k - 1) * 30, y: GATE.y - 50 + (k % 2) * 12 }, 1.8), k * 200);
      say(NEXT_DAY ? 'A new land for tomorrow!' : 'See you tomorrow!');
      if (NEXT_DAY) setTimeout(driveThrough, 2200);
    }, 600);
  });
}
/** through the open gate and into the clouds; the clouds cover the screen, and the next land opens */
function driveThrough() {
  drive(toGate(true), () => {
    const wipe = document.createElement('div');
    wipe.className = 'cm-cloudwipe';
    frame.appendChild(wipe);
    setTimeout(() => { location.href = `?day=${NEXT_DAY}&arrive=1${params.get('tour') === '1' ? '&tour=1' : ''}`; }, 900);
  });
}

// ---------- scale to fit ----------

function frameScale() {
  return Math.min(window.innerWidth / VIEW.w, window.innerHeight / VIEW.h);
}
function fit() {
  frame.style.transform = `translate(-50%, -50%) scale(${frameScale()})`;
}
window.addEventListener('resize', fit);
setInterval(fit, 500);
fit();

// ---------- back from an activity (the app reloads us with ?at=, ?done= and ?star=) ----------
// done: today's places already played (they wear their stars from the start); at: the place the child just played
// (the car is parked at it); star: that place's new star, which drops onto it once the app's clouds part.
const REDUCED = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { return false; } })();
let onReveal = null;
const RETURN_AT = placeById(params.get('at') || '') || null;
const STAR_FOR = placeById(params.get('star') || '') || null;
// done: the places the app says were finished today (?plan= d), and those this map visit already starred (?done=)
[...PLACES.filter((pl) => pl.doneInApp).map((pl) => pl.id), ...(params.get('done') || '').split(',')].forEach((id) => {
  const pl = placeById(id);
  if (!pl) return;
  state.done.add(pl.id);
  placeEls[pl.id].star.setAttribute('visibility', 'visible');
  const s = cardsPanel.querySelector(`[data-id="${pl.id}"]`);
  if (s && !s.querySelector('.cm-card-star')) s.insertAdjacentHTML('beforeend', `<span class="cm-card-star"><svg width="14" height="14" viewBox="-8 -8 16 16" aria-hidden="true"><path d="${STAR_D}" fill="#FFC93C" stroke="#E0A92A" stroke-width="1" stroke-linejoin="round"/></svg></span>`);
});
cardsBtn.setAttribute('aria-label', `Today's places: ${state.done.size} of ${PLACES.length} done`);
/** the car parked at a place's roadside spot, as if it had just driven there */
function parkAt(pl) {
  const pts = routeTo(pl);
  const end = pts[pts.length - 1] || { x: pl.x, y: pl.y - 24 };
  const prev = pts[Math.max(0, pts.length - 4)] || end;
  state.carPos = { ...end };
  state.car = pl.id;
  state.at = pl.id;
  placeCar(end, end.x - prev.x, end.y - prev.y);
}
/** a big star appears over the place, hangs a beat, then drops onto the place's badge (which pops in with a burst);
    the places button gets the star too. A star for a place already done just pops its badge again. */
function landStar(pl) {
  const again = state.done.has(pl.id);
  state.done.add(pl.id);
  const at = { x: pl.x + 26 * (pl.badge || 1), y: pl.y - 4 };
  const to = toScreen(at);
  const rise = Math.min(120, Math.max(50, to.y - TOP_BAR - 30)); // the star hangs this far above the badge
  const star = document.createElement('div');
  star.className = 'cm-flystar';
  star.innerHTML = `<svg width="44" height="44" viewBox="-8 -8 16 16" aria-hidden="true"><path d="${STAR_D}" fill="#FFC93C" stroke="#E0A92A" stroke-width=".8" stroke-linejoin="round"/></svg>`;
  star.style.left = `${to.x}px`;
  star.style.top = `${to.y}px`;
  frame.appendChild(star);
  say(again ? 'Another star!' : 'You got a star!');
  const up = `translate(-50%, calc(-50% - ${rise}px))`;
  const anim = REDUCED
    ? star.animate([{ transform: 'translate(-50%, -50%) scale(.5)', opacity: 0 }, { transform: 'translate(-50%, -50%) scale(.5)', opacity: 1 }], { duration: 300, easing: 'ease-out', fill: 'forwards' })
    : star.animate(
      [
        // appears big above the place (ease-out), hangs, then drops onto the badge (ease-in-out, as a camera move)
        { transform: `${up} scale(.6)`, opacity: 0, offset: 0, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
        { transform: `${up} scale(1.5)`, opacity: 1, offset: 0.3 },
        { transform: `${up} scale(1.4)`, opacity: 1, offset: 0.5, easing: 'cubic-bezier(0.77, 0, 0.175, 1)' },
        { transform: 'translate(-50%, -50%) scale(.5)', opacity: 1, offset: 1 },
      ],
      { duration: 1500, fill: 'forwards' },
    );
  let landed = false;
  const land = () => {
    if (landed) return;
    landed = true;
    star.remove();
    if (!REDUCED) burst(at, 1.4);
    placeEls[pl.id].star.setAttribute('visibility', 'visible');
    replay(placeEls[pl.id].star, 'cm-badge-in');
    replay(placeEls[pl.id].root, 'arrive');
    fillSlot(pl.id);
    if (state.done.size === PLACES.length && !again) setTimeout(finale, 900);
    else {
      setTimeout(() => {
        state.starring = false;
        const s = suggested();
        if (s) glideTo(framing([state.carPos, { x: s.x, y: s.y - 30 }]));
        showSuggestion();
        say('Pick a place to go!');
      }, 900);
    }
  };
  anim.onfinish = land;
  setTimeout(land, (REDUCED ? 300 : 1500) + 150); // never wait on the animation alone
}

// ---------- start: the view shows the car and the first place ----------

if (ARRIVING) {
  const wipe = document.createElement('div');
  wipe.className = 'cm-cloudwipe out';
  frame.appendChild(wipe);
  setTimeout(() => wipe.remove(), 1200);
  const from = { x: NODES[LAND.start].x, y: NODES[LAND.start].y + 90 };
  state.carPos = { ...from };
  placeCar(from, 0, -1);
  setCam(framing([NODES[LAND.start], { x: NODES[LAND.start].x, y: NODES[LAND.start].y - 120 }]));
  setTimeout(() => {
    say('A new land!');
    drive([from, { ...NODES[LAND.start] }], () => {
      const s = suggested();
      glideTo(framing([state.carPos, { x: s.x, y: s.y - 30 }]), 700);
      showSuggestion();
      setTimeout(() => say('Pick a place to go!'), 900);
    }, null);
  }, 700);
} else if (RETURN_AT) {
  // back from an activity: the view opens on the place, the car parked at it (the app's clouds part over this)
  parkAt(RETURN_AT);
  setCam(framing([state.carPos, { x: RETURN_AT.x, y: RETURN_AT.y - 40 }]));
  setHalo(null);
  if (STAR_FOR) {
    state.starring = true;
    // the star waits for the clouds to open (the app says so), never for ever
    let started = false;
    const go = () => { if (started) return; started = true; setTimeout(() => landStar(STAR_FOR), REDUCED ? 100 : 380); };
    onReveal = go;
    setTimeout(go, 2600);
  } else {
    showSuggestion();
    setTimeout(() => say('Pick a place to go!'), 700);
  }
} else {
  const s = suggested();
  setCam(framing([state.carPos, { x: s.x, y: s.y - 30 }]));
  showSuggestion();
  setTimeout(() => say('Pick a place to go!'), 500);
}
// a hook for tests, and for the app (its map home reads LAND, LANDS and LAND_CYCLE for the world cards)
window.__map = { engine: () => engine, state, landStar, parkAt, PLACES, DAY, dayNo, LAND, LANDS, LAND_CYCLE, GATE, ENTRY, onPlace, routePoints, routeFrom, nearestOnRoad, cam, setCam, toScreen, zoomAt };

// ---------- tour (?tour=1, the CominiLab site only): the day plays itself ----------
// The site's landing page shows what a child's day looks like without anyone tapping: the car drives to each of
// today's places in turn, the place's star lands, and after the last one the gate opens and the car drives on into
// the next land (which tours again). Silent (sound needs a tap, and nothing is tapped), no buttons or hints.
if (params.get('tour') === '1') {
  document.body.classList.add('cm-tour');
  const tourNext = () => {
    if (state.finale) return;
    const pl = suggested() || PLACES.find((p) => !state.done.has(p.id));
    if (!pl) return;
    drive(routeTo(pl), () => {
      arrive(pl);
      setTimeout(() => {
        hidePlay();
        state.starring = true;
        landStar(pl);
        setTimeout(tourNext, 2700);
      }, 1300);
    }, pl);
  };
  setTimeout(tourNext, ARRIVING ? 2800 : 1500);
}
