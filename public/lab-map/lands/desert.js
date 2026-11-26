// Land 5, the desert canyon (place value): the car comes in at the bottom middle. Red flat-topped mesas along the top,
// an oasis with palms and a pool, cacti, boulders and dunes; no river here. The exit gate is at the top right, past
// the mesas; the review place is just before it.

export const LAND = {
  id: 'desert',
  name: 'Cactus Canyon', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#F1DDB0',
  start: 'IN',
  footpathColor: '#FFF6E2',

  nodes: {
    IN: { x: 720, y: 676 },
    J1: { x: 700, y: 520 },
    J2: { x: 460, y: 460 },
    J3: { x: 900, y: 400 },
    J4: { x: 1100, y: 260 },
    J5: { x: 620, y: 300 },
    A: { x: 300, y: 560 },
    B: { x: 150, y: 420 },
    C: { x: 620, y: 180 },
    D: { x: 1250, y: 480 },
    E: { x: 1340, y: 200 },
    G: { x: 1200, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M720 676 C715 620 708 570 700 520'],
    ['J1', 'J2', 'M700 520 C620 500 540 480 460 460'],
    ['J2', 'A', 'M460 460 C400 500 350 530 300 560'],
    ['J2', 'B', 'M460 460 C360 450 250 440 150 420'],
    ['J1', 'J3', 'M700 520 C780 480 840 440 900 400'],
    ['J3', 'D', 'M900 400 C1000 420 1140 450 1250 480'],
    ['J3', 'J4', 'M900 400 C960 340 1040 290 1100 260'],
    ['J2', 'J5', 'M460 460 C520 400 570 340 620 300'],
    ['J5', 'C', 'M620 300 C620 260 620 220 620 180'],
    ['J5', 'J4', 'M620 300 C760 290 960 270 1100 260'],
    ['J4', 'E', 'M1100 260 C1180 240 1270 215 1340 200'],
    ['J4', 'G', 'M1100 260 C1140 180 1180 100 1200 -40'],
  ],
  water: {
    lakes: [{ d: 'M220 330 C220 286 292 272 346 288 C400 304 392 366 340 378 C276 392 220 374 220 330 Z', shore: '#D8E7B0', c: { x: 305, y: 330 } }],
  },
  road: { edge: '#D3A66A', sand: '#F6E3B9', rut: '#E8CB93', dots: '#FFF5DE' },
  footpaths: ['M820 600 C880 630 960 640 1040 620', 'M60 560 C110 600 160 620 220 640', 'M980 160 C1020 120 1060 110 1100 120'],
  regions: [
    ['dunes', 'M-40 600 C120 560 320 600 420 720 H-40 Z', '#F6E7C6'],
    ['dunes2', 'M840 720 C900 600 1100 580 1240 640 C1300 670 1320 700 1330 720 Z', '#F6E7C6'],
    ['oasis', 'M170 330 C170 250 300 230 380 260 C450 290 440 390 350 410 C250 430 170 400 170 330 Z', '#D8E7B0'],
    ['canyon', 'M700 330 C820 300 1000 310 1040 360 C1060 420 980 450 860 450 C760 450 680 400 700 330 Z', '#EBCB98'],
    ['village', 'M1180 520 C1260 500 1400 510 1480 540 V720 H1180 Z', '#EED8AE'],
  ],

  /** story on the dunes, explainer by the oasis, worksheet under the mesas, game by the village, review by the gate */
  slots: [
    { node: 'A', at: { dx: -30, dy: 14 }, park: 24, badge: -1 },
    { node: 'B', at: { dx: -24, dy: 12 }, park: 24, badge: -1 },
    { node: 'C', at: { dx: 0, dy: -32 }, park: 20 },
    { node: 'D', at: { dx: 36, dy: -8 }, park: 26 },
    { node: 'E', at: { dx: 20, dy: -28 }, park: 22 },
  ],
  entry: { at: { x: 718, y: 640 } },
  gate: { node: 'G', at: { x: 1186, y: 70 } },

  toys: [
    { name: 'camel', type: 'camel', at: { x: 950, y: 580 } },
    { name: 'hotair', type: 'hotair', at: { x: 1000, y: 178 } },
    { name: 'meerkats', type: 'meerkat', at: { x: 490, y: 604 } },
    { name: 'tumbleweed', type: 'tumbleweed', at: { x: 1150, y: 366 } },
    { name: 'birds', type: 'birds', at: { x: 820, y: 230 }, colors: ['#FFC93C', '#F2A541', '#FFC93C'] },
    { name: 'fish', type: 'fish', at: { x: 300, y: 336 } },
    { name: 'kite', type: 'kite', at: { x: 180, y: 600 }, color: '#E5574B' },
  ],
  blocks: [
    { x: -40, y: -40, w: 1020, h: 136 }, // the mesas
    { x: 1200, y: 540, w: 240, h: 140 }, // the village
  ],
  clouds: [[260, 10, 1, 0], [760, -4, 1.2, -12], [1300, 20, 1, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, scatter, later } = k;
    // red flat-topped mesas along the top, banded
    const mesa = (x0, x1, top, base, c, band) => {
      const m = g(LAYER.land);
      el('path', { d: `M${x0} ${base} L${x0 + 18} ${top + 8} Q${x0 + 22} ${top} ${x0 + 32} ${top} H${x1 - 32} Q${x1 - 22} ${top} ${x1 - 18} ${top + 8} L${x1} ${base} Z`, fill: c }, m);
      [0.35, 0.65].forEach((f) => el('path', { d: `M${x0 + 10 + (x1 - x0) * 0.02} ${top + (base - top) * f} H${x1 - 10}`, stroke: band, 'stroke-width': 4, 'stroke-linecap': 'round' }, m));
      el('path', { d: `M${x1 - 40} ${top + 4} H${x1 - 30} L${x1 - 16} ${top + 10} L${x1} ${base} H${x1 - 30} Z`, fill: band, opacity: 0.6 }, m);
    };
    mesa(-40, 260, -10, 96, '#D98B5F', '#C47450');
    mesa(220, 520, 10, 96, '#E09A68', '#CB7F55');
    mesa(470, 760, -24, 96, '#D17E55', '#BC6A45');
    mesa(720, 980, 16, 96, '#E3A271', '#CE875C');
    el('path', { d: 'M-40 96 H990 V104 Q470 112 -40 104 Z', fill: '#E9C99A' }, LAYER.land);
    // boulders, dunes ripples, dry bushes
    const boulder = (p, x, y, s) => {
      const r = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${s.toFixed(2)})` });
      el('ellipse', { cx: 1, cy: 1, rx: 14, ry: 3.4, fill: 'rgba(150, 100, 50, .18)' }, r);
      el('path', { d: 'M-13 0 Q-14 -12 -4 -15 Q8 -17 12 -7 Q14 -2 13 0 Z', fill: '#D98B5F' }, r);
      el('path', { d: 'M-4 -15 Q8 -17 12 -7 Q4 -11 -4 -15 Z', fill: '#E8A77A' }, r);
    };
    const drybush = (p, x, y) => {
      const b = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      el('path', { d: 'M0 0 L-6 -10 M0 0 L-2 -12 M0 0 L3 -11 M0 0 L7 -8 M-3 -6 L-8 -8 M2 -6 L6 -11', stroke: '#B88A55', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, b);
    };
    el('path', { d: 'M40 640 q30 -8 60 0 M140 660 q30 -8 60 0 M900 660 q30 -8 60 0 M1020 640 q30 -8 60 0', stroke: '#E8D2A4', 'stroke-width': 2.4, fill: 'none', 'stroke-linecap': 'round' }, LAYER.land);
    // palms round the oasis, cacti everywhere else
    [[200, 300], [240, 252], [380, 272], [410, 340], [200, 380], [360, 400]].forEach(([x, y]) => later(y, (p) => tree(p, x, y, 0.95, 'palm')));
    scatter(26, { x: 0, y: 120, w: 1440, h: 520 }, (x, y) => later(y, (p) => tree(p, x, y, 0.75 + rnd() * 0.4, 'cactus')), 26);
    scatter(14, { x: 0, y: 120, w: 1440, h: 540 }, (x, y) => later(y, (p) => boulder(p, x, y, 0.6 + rnd() * 0.6)), 24);
    scatter(20, { x: 0, y: 120, w: 1440, h: 540 }, (x, y) => later(y, (p) => drybush(p, x, y)), 14);
    // a little adobe village
    [[1250, 600], [1330, 580], [1410, 620], [1290, 660]].forEach(([x, y]) => later(y, (p) => {
      const h = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 2, cy: 1, rx: 20, ry: 4, fill: 'rgba(150, 100, 50, .18)' }, h);
      el('rect', { x: -16, y: -22, width: 32, height: 22, rx: 3, fill: '#E7B987' }, h);
      el('rect', { x: -18, y: -25, width: 36, height: 5, rx: 2, fill: '#D9A06C' }, h);
      [-12, -4, 4, 12].forEach((dx) => el('circle', { cx: dx, cy: -21, r: 1.4, fill: '#8C6244' }, h));
      el('rect', { x: -4, y: -12, width: 8, height: 12, rx: 3, fill: '#8C6244' }, h);
      el('rect', { x: 7, y: -16, width: 5, height: 5, rx: 1, fill: '#6FA0D8' }, h);
    }));
  },
};
