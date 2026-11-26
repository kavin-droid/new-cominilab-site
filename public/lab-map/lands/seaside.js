// Land 2, the seaside (even and odd): the car comes in at the bottom through the dunes. Sea all down the right with a
// sandy beach, a rocky headland with a lighthouse, a pier and a little island; a stream runs down to the sea; a palm
// grove and grassy cliffs on the left. The exit gate is at the top, up the cliff road; the review place is on the
// cliff top just before it.

const SEA = 'M1000 -60 C990 40 1040 110 1100 140 C1180 150 1270 140 1320 180 C1350 215 1320 260 1260 280 C1180 300 1110 310 1080 360 C1040 420 1060 480 1040 540 C1020 600 1000 650 1010 760 H1520 V-60 Z';

export const LAND = {
  id: 'seaside',
  name: 'Lighthouse Bay', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#E3EFCB',
  start: 'IN',
  footpathColor: '#FFFFFF',

  nodes: {
    IN: { x: 300, y: 676 },
    J1: { x: 330, y: 540 },
    J2: { x: 600, y: 470 },
    J3: { x: 880, y: 360 },
    J4: { x: 620, y: 250 },
    A: { x: 130, y: 470 },
    B: { x: 640, y: 620 },
    C: { x: 930, y: 580 },
    D: { x: 1150, y: 245 },
    E: { x: 330, y: 170 },
    G: { x: 470, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M300 676 C310 620 320 580 330 540'],
    ['J1', 'A', 'M330 540 C270 520 200 490 130 470'],
    ['J1', 'J2', 'M330 540 C420 520 520 500 600 470'],
    ['J2', 'B', 'M600 470 C620 520 630 570 640 620'],
    ['J2', 'J3', 'M600 470 C700 440 800 400 880 360'],
    ['J3', 'C', 'M880 360 C900 430 920 500 930 580'],
    ['J3', 'D', 'M880 360 C980 330 1070 270 1150 245'],
    ['J2', 'J4', 'M600 470 C620 400 610 320 620 250'],
    ['J4', 'E', 'M620 250 C540 220 420 190 330 170'],
    ['J4', 'G', 'M620 250 C600 180 520 110 470 -40'],
    ['J1', 'E', 'M330 540 C260 440 250 300 330 170'],
  ],
  water: {
    seas: [{ d: SEA, shore: '#F6E7C4', shoreW: 90, edge: '#BFE9F5', fill: '#7FCBEB' }],
    rivers: ['M560 -60 C580 60 700 140 760 200 C820 260 860 300 940 300 C1000 300 1040 320 1130 345'],
  },
  road: { edge: '#D9B87C', sand: '#F1DDAE', rut: '#E6C891', dots: '#FBF0D6' },
  footpaths: [
    'M60 640 C120 600 180 610 240 660',
    'M760 560 C820 520 880 640 960 650',
    'M120 300 C160 250 220 240 260 260',
    'M700 120 C760 90 840 110 900 150',
  ],
  regions: [
    ['cliffs', 'M-40 -40 H420 C430 60 380 120 260 130 C140 140 60 100 -40 110 Z', '#D6E6C4'],
    ['grove', 'M-40 190 C80 160 210 210 240 320 C250 410 120 430 -40 400 Z', '#D3EBBE'],
    ['dunes', 'M-40 600 C100 560 240 590 270 720 H-40 Z', '#EEE6C2'],
    ['huts', 'M440 560 C520 540 760 540 840 600 C880 650 800 720 640 720 C500 720 420 640 440 560 Z', '#EEE9CC'],
  ],

  /** story by the palm grove, explainer by the beach huts, worksheet on the beach, game on the lighthouse headland,
      review on the cliff top by the gate */
  slots: [
    { node: 'A', at: { dx: -20, dy: -10 }, park: 26, badge: -1 },
    { node: 'B', at: { dx: 34, dy: 8 }, park: 24 },
    { node: 'C', at: { dx: -36, dy: 8 }, park: 26, badge: -1 },
    { node: 'D', at: { dx: 44, dy: -14 }, park: 26 },
    { node: 'E', at: { dx: -30, dy: -24 }, park: 24, badge: -1 },
  ],
  entry: { at: { x: 303, y: 640 } },
  gate: { node: 'G', at: { x: 512, y: 70 } },

  toys: [
    { name: 'crab1', type: 'crab', at: { x: 985, y: 640 } },
    { name: 'crab2', type: 'crab', at: { x: 1010, y: 420 } },
    { name: 'gull', type: 'gull', at: { x: 1196, y: 468 } },
    { name: 'dolphin', type: 'dolphin', at: { x: 1300, y: 400 } },
    { name: 'sandcastle', type: 'sandcastle', at: { x: 990, y: 500 } },
    { name: 'lighthouse', type: 'lighthouse', at: { x: 1300, y: 232 } },
    { name: 'ball', type: 'ball', at: { x: 780, y: 560 } },
    { name: 'boat', type: 'boat', at: { x: 1250, y: 620 }, color: '#6FA0D8' },
    { name: 'kite', type: 'kite', at: { x: 190, y: 600 }, color: '#FF8FB0' },
    { name: 'dog', type: 'dog', at: { x: 470, y: 600 } },
    { name: 'birds', type: 'birds', at: { x: 150, y: 320 }, colors: ['#FFFFFF', '#B9C2CC', '#FFFFFF'] },
    { name: 'fish', type: 'fish', at: { x: 1180, y: 80 } },
  ],
  blocks: [
    { x: 1030, y: 440, w: 180, h: 60 }, // the pier
    { x: 1330, y: 520, w: 110, h: 90 }, // the island
    { x: 480, y: 600, w: 360, h: 60 }, // the beach huts
  ],
  clouds: [[200, 10, 1.1, 0], [700, -6, 1.2, -10], [1250, 20, 1, -20]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, flowers, scatter, later } = k;
    // waves on the sea, a pier, a little island with a palm
    el('path', { d: 'M1120 420 q12 -6 24 0 M1260 470 q12 -6 24 0 M1180 560 q12 -6 24 0 M1340 330 q12 -6 24 0 M1120 40 q12 -6 24 0 M1300 80 q12 -6 24 0', stroke: '#FFFFFF', 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', class: 'cm-ripple' }, LAYER.water);
    const pier = g(LAYER.water);
    el('rect', { x: 1036, y: 456, width: 168, height: 14, fill: '#C98E4E' }, pier);
    for (let x = 1040; x < 1204; x += 10) el('path', { d: `M${x} 456 V470`, stroke: '#A8733C', 'stroke-width': 1.4 }, pier);
    [1050, 1100, 1150, 1198].forEach((x) => el('rect', { x: x - 2, y: 468, width: 4, height: 10, fill: '#8C6244' }, pier));
    el('ellipse', { cx: 1385, cy: 572, rx: 52, ry: 22, fill: '#F6E7C4' }, LAYER.water);
    el('ellipse', { cx: 1385, cy: 568, rx: 40, ry: 15, fill: '#CFE8B4' }, LAYER.water);
    later(570, (p) => tree(p, 1390, 570, 1, 'palm'));
    // rock pools and rocks on the beach and the headland
    [[1000, 590, 14], [1050, 360, 12], [1210, 300, 10]].forEach(([x, y, r]) => {
      el('ellipse', { cx: x, cy: y, rx: r + 4, ry: (r + 4) * 0.55, fill: '#B9C2CC' }, LAYER.land);
      el('ellipse', { cx: x, cy: y, rx: r, ry: r * 0.5, fill: '#9FD8EE' }, LAYER.land);
    });
    const rock = (p, x, y, s) => {
      const r = g(p, { transform: `translate(${x} ${y}) scale(${s})` });
      el('ellipse', { cx: 1, cy: 1, rx: 12, ry: 3, fill: 'rgba(60, 80, 60, .15)' }, r);
      el('path', { d: 'M-11 0 Q-12 -10 -3 -12 Q6 -14 10 -6 Q12 -1 11 0 Z', fill: '#B9C2CC' }, r);
      el('path', { d: 'M-3 -12 Q6 -14 10 -6 Q4 -9 -3 -12 Z', fill: '#D3D9DF' }, r);
    };
    // beach huts in a row, striped
    [[500, 640, '#6FA0D8'], [560, 650, '#FF8FB0'], [740, 650, '#FFC93C'], [800, 636, '#7BC94F']].forEach(([x, y, c]) => later(y, (p) => {
      const h = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 2, cy: 1, rx: 16, ry: 3.5, fill: 'rgba(150, 120, 60, .18)' }, h);
      el('rect', { x: -12, y: -26, width: 24, height: 26, fill: '#FFFFFF' }, h);
      [-12, -4, 4].forEach((sx) => el('rect', { x: sx, y: -26, width: 4, height: 26, fill: c }, h));
      el('path', { d: 'M-15 -24 L0 -36 L15 -24 Z', fill: c }, h);
      el('rect', { x: -4, y: -14, width: 8, height: 14, rx: 2, fill: '#8C6244' }, h);
    }));
    // beach umbrellas
    [[1000, 540, '#E5574B'], [960, 470, '#6FA0D8']].forEach(([x, y, c]) => later(y, (p) => {
      const u = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 4, cy: 2, rx: 16, ry: 4, fill: 'rgba(150, 120, 60, .2)' }, u);
      el('rect', { x: -1, y: -30, width: 2, height: 30, fill: '#8C6244' }, u);
      el('path', { d: 'M-18 -26 Q0 -44 18 -26 Z', fill: c }, u);
      el('path', { d: 'M-6 -26 Q-4 -38 0 -40 Q4 -38 6 -26 Z', fill: '#FFFFFF' }, u);
    }));
    // palms in the grove and along the beach, rocks, grass tufts in the dunes, shells
    scatter(14, { x: 0, y: 200, w: 240, h: 210 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85 + rnd() * 0.3, 'palm')));
    scatter(7, { x: 880, y: 360, w: 140, h: 300 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.2, 'palm')));
    scatter(10, { x: 0, y: 20, w: 420, h: 110 }, (x, y) => later(y, (p) => tree(p, x, y, 0.75 + rnd() * 0.2, rnd() > 0.5 ? 'round' : 'tall')));
    scatter(8, { x: 1080, y: 160, w: 200, h: 120 }, (x, y) => later(y, (p) => rock(p, x, y, 0.7 + rnd() * 0.5)));
    scatter(6, { x: 20, y: 560, w: 260, h: 110 }, (x, y) => later(y, (p) => rock(p, x, y, 0.6 + rnd() * 0.4)));
    scatter(22, { x: 0, y: 560, w: 440, h: 120 }, (x, y) => later(y, (p) => {
      const t = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      el('path', { d: 'M-5 0 Q-6 -8 -8 -11 M0 0 Q0 -9 1 -13 M5 0 Q6 -7 9 -10', stroke: '#8DBA5A', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, t);
    }), 12);
    scatter(16, { x: 640, y: 160, w: 260, h: 140 }, (x, y) => later(y, (p) => flowers(p, x, y, rnd() > 0.5 ? '#FF8FB0' : '#FFFFFF')), 14);
    scatter(14, { x: 900, y: 380, w: 140, h: 280 }, (x, y) => later(y, (p) => el('path', { d: `M${x} ${y} m-4 0 q4 -7 8 0 q-4 2 -8 0 Z`, fill: rnd() > 0.5 ? '#F7B5C9' : '#FFF1D6' }, p)), 10);
    // the middle of the road loop: palms, round trees, flowers and grass
    scatter(12, { x: 360, y: 200, w: 300, h: 300 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.3, rnd() > 0.5 ? 'palm' : 'round')));
    scatter(18, { x: 340, y: 200, w: 340, h: 300 }, (x, y) => later(y, (p) => flowers(p, x, y, ['#FF8FB0', '#FFFFFF', '#FFC93C'][Math.floor(rnd() * 3)])), 14);
    scatter(10, { x: 680, y: 60, w: 300, h: 200 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, rnd() > 0.4 ? 'palm' : 'tall')));
    // the stream's mouth: a little sandbar
    el('ellipse', { cx: 1100, cy: 340, rx: 30, ry: 10, fill: '#F6E7C4' }, LAYER.land);
  },
};
