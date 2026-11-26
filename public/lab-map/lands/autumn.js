// Land 6, the autumn orchard (addition): the car comes in at the bottom left. Orange and red woods, a pumpkin patch with
// a scarecrow, rows of apple trees, hay rolls, a stream running down past a water mill into a leafy pond. The exit
// gate is at the top middle; the review place is just before it.

export const LAND = {
  id: 'autumn',
  name: 'Pumpkin Patch', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#E8E2B4',
  start: 'IN',
  footpathColor: '#FFF6E2',

  nodes: {
    IN: { x: 420, y: 676 },
    J1: { x: 440, y: 520 },
    J2: { x: 700, y: 440 },
    J3: { x: 980, y: 380 },
    J4: { x: 820, y: 220 },
    J5: { x: 260, y: 360 },
    A: { x: 180, y: 520 },
    B: { x: 260, y: 220 },
    C: { x: 600, y: 600 },
    D: { x: 1120, y: 460 },
    E: { x: 1000, y: 150 },
    G: { x: 860, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M420 676 C424 620 432 570 440 520'],
    ['J1', 'A', 'M440 520 C360 520 260 515 180 520'],
    ['J1', 'J5', 'M440 520 C380 460 320 410 260 360'],
    ['J5', 'B', 'M260 360 C255 310 255 260 260 220'],
    ['J1', 'J2', 'M440 520 C520 490 620 460 700 440'],
    ['J2', 'C', 'M700 440 C670 500 630 550 600 600'],
    ['J2', 'J3', 'M700 440 C790 420 890 400 980 380'],
    ['J3', 'D', 'M980 380 C1030 400 1080 430 1120 460'],
    ['J2', 'J4', 'M700 440 C730 360 780 280 820 220'],
    ['J3', 'J4', 'M980 380 C930 320 870 260 820 220'],
    ['J4', 'E', 'M820 220 C880 200 940 175 1000 150'],
    ['J4', 'G', 'M820 220 C830 140 850 60 860 -40'],
  ],
  water: {
    rivers: ['M1300 -60 C1260 80 1320 200 1260 300 C1210 380 1200 460 1220 560'],
    lakes: [{ d: 'M1170 590 C1170 550 1230 540 1280 552 C1330 566 1330 620 1280 636 C1220 650 1170 630 1170 590 Z', shore: '#D9CF98', c: { x: 1250, y: 594 } }],
  },
  road: { edge: '#C99A62', sand: '#EDD3A2', rut: '#DDBA84', dots: '#F8E8C8' },
  footpaths: ['M60 300 C100 260 160 250 200 270', 'M1040 300 C1090 280 1140 300 1180 340', 'M620 120 C680 100 740 110 780 140'],
  regions: [
    ['woods', 'M-40 -40 H520 C540 80 450 170 300 180 C160 190 40 160 -40 170 Z', '#E9CFA6'],
    ['pumpkins', 'M350 230 C420 200 560 210 590 260 C610 310 540 340 450 336 C370 332 330 280 350 230 Z', '#E2CFA0'],
    ['orchard', 'M740 500 C860 470 1060 510 1110 570 C1140 630 1060 700 900 700 C770 700 700 600 740 500 Z', '#DCE2AA'],
    ['meadow', 'M1040 -40 H1240 C1230 80 1200 150 1120 170 C1060 180 1040 100 1040 -40 Z', '#E0E5B8'],
    ['field', 'M-40 600 C80 570 220 590 300 720 H-40 Z', '#E9D9A6'],
  ],

  /** story by the field, explainer in the woods, worksheet by the orchard, game by the stream, review by the gate */
  slots: [
    { node: 'A', at: { dx: -26, dy: -12 }, park: 24, badge: -1 },
    { node: 'B', at: { dx: 0, dy: -30 }, park: 20 },
    { node: 'C', at: { dx: -28, dy: 16 }, park: 24, badge: -1 },
    { node: 'D', at: { dx: -10, dy: 34 }, park: 24 },
    { node: 'E', at: { dx: 26, dy: -20 }, park: 22 },
  ],
  entry: { at: { x: 423, y: 640 } },
  gate: { node: 'G', at: { x: 848, y: 70 } },

  toys: [
    { name: 'squirrel', type: 'squirrel', at: { x: 560, y: 380 } },
    { name: 'owl', type: 'owl', at: { x: 110, y: 300 } },
    { name: 'hedgehog', type: 'hedgehog', at: { x: 320, y: 620 } },
    { name: 'scarecrow', type: 'scarecrow', at: { x: 470, y: 290 } },
    { name: 'leaves', type: 'leafpile', at: { x: 880, y: 520 } },
    { name: 'mill', type: 'waterwheel', at: { x: 1300, y: 340 } },
    { name: 'duck', type: 'duck', at: { x: 1250, y: 600 } },
    { name: 'birds', type: 'birds', at: { x: 1080, y: 270 }, colors: ['#2B2B33', '#4A4F57', '#2B2B33'] },
  ],
  blocks: [
    { x: 340, y: 200, w: 260, h: 140 }, // the pumpkin patch
    { x: 1270, y: 280, w: 70, h: 70 }, // the mill
  ],
  clouds: [[300, 6, 1.1, 0], [640, -10, 1, -12], [1100, 14, 1.2, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, scatter, later } = k;
    // the pumpkin patch: soil rows and pumpkins
    el('path', { d: 'M370 250 H570 M362 276 H580 M370 302 H570', stroke: '#C9A877', 'stroke-width': 5, 'stroke-linecap': 'round' }, LAYER.land);
    [[390, 252], [430, 250], [520, 254], [560, 252], [380, 278], [420, 280], [540, 280], [400, 304], [500, 306], [550, 304]].forEach(([x, y]) => later(y, (p) => {
      const pk = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 0, cy: -5, rx: 8, ry: 6, fill: '#F2802B' }, pk);
      el('ellipse', { cx: 0, cy: -5, rx: 3, ry: 6, fill: '#E5974F' }, pk);
      el('rect', { x: -1, y: -13, width: 2, height: 4, fill: '#5FAE72' }, pk);
    }));
    // hay rolls
    [[160, 640], [240, 610], [1000, 640]].forEach(([x, y]) => later(y, (p) => {
      const h = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 2, cy: 1, rx: 16, ry: 3.6, fill: 'rgba(120, 90, 40, .18)' }, h);
      el('rect', { x: -14, y: -18, width: 26, height: 18, rx: 2, fill: '#F0D27A' }, h);
      el('ellipse', { cx: 12, cy: -9, rx: 5, ry: 9, fill: '#E2BF62' }, h);
      el('path', { d: 'M12 -15 a4 6 0 1 0 0.1 0', stroke: '#C9A54A', 'stroke-width': 1.2, fill: 'none' }, h);
    }));
    // fallen leaves on the ground
    scatter(40, { x: 0, y: 120, w: 1440, h: 560 }, (x, y) => el('path', { d: `M${x.toFixed(0)} ${y.toFixed(0)} m0 -3 q3 3 0 6 q-3 -3 0 -6 Z`, fill: ['#E5974F', '#D2733A', '#F2B33D', '#C1342A'][Math.floor(rnd() * 4)], transform: `rotate(${(rnd() * 180).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})`, opacity: 0.85 }, LAYER.land), 10);
    // woods: autumn trees; the orchard: rows of apple trees; mushrooms
    scatter(36, { x: 0, y: 20, w: 520, h: 170 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.35, rnd() > 0.2 ? 'autumn' : 'pine')));
    for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) {
      const x = 780 + c * 62 + (r % 2) * 22;
      const y = 560 + r * 44;
      later(y, (p) => tree(p, x, y, 0.85, 'apple'));
    }
    scatter(16, { x: 1040, y: 120, w: 400, h: 400 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.3, 'autumn')));
    scatter(10, { x: 520, y: 80, w: 300, h: 200 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, 'autumn')));
    scatter(10, { x: 0, y: 360, w: 300, h: 140 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, rnd() > 0.5 ? 'autumn' : 'apple')));
    scatter(10, { x: 560, y: 480, w: 200, h: 200 }, (x, y) => later(y, (p) => {
      const m = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      el('rect', { x: -1.6, y: -6, width: 3.2, height: 6, fill: '#FFF1D6' }, m);
      el('path', { d: 'M-6 -5 Q0 -13 6 -5 Z', fill: '#E5574B' }, m);
      el('circle', { cx: -2, cy: -8, r: 1, fill: '#FFFFFF' }, m);
    }), 14);
    // a cottage with smoke
    later(620, (p) => {
      const c = g(p, { transform: 'translate(70 470)' });
      el('ellipse', { cx: 2, cy: 1, rx: 20, ry: 4, fill: 'rgba(120, 90, 40, .18)' }, c);
      el('rect', { x: -16, y: -22, width: 32, height: 22, rx: 2, fill: '#F6E6C8' }, c);
      el('path', { d: 'M-20 -20 L0 -36 L20 -20 Z', fill: '#C1342A' }, c);
      el('rect', { x: 8, y: -36, width: 6, height: 12, fill: '#8C6244' }, c);
      el('rect', { x: -4, y: -12, width: 8, height: 12, rx: 2, fill: '#8C6244' }, c);
      const smoke = g(c, { class: 'cm-smoke' });
      [[11, -42, 3.4], [13, -50, 4.2], [10, -59, 5]].forEach(([sx, sy, r], i) => el('circle', { cx: sx, cy: sy, r, fill: '#FFFFFF', opacity: 0.8, style: `animation-delay:${-i * 0.6}s` }, smoke));
    });
  },
};
