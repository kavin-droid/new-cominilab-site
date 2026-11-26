// Land 3, the snowy valley (subtraction): the car comes in at the bottom left. Snowy mountains along the top, a stream
// running down from them into a frozen lake, snowy pine woods, an igloo, a sledging slope and a little village of
// cabins with smoking chimneys. Snow falls. The exit gate is at the top right, past the mountains; the review place is
// just before it.

export const LAND = {
  id: 'snowland',
  name: 'Igloo Hill', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#EAF2F7',
  start: 'IN',
  snow: true,
  footpathColor: '#C9D9E6',

  nodes: {
    IN: { x: 120, y: 676 },
    J1: { x: 200, y: 500 },
    J2: { x: 440, y: 420 },
    J3: { x: 760, y: 360 },
    J4: { x: 1040, y: 300 },
    J5: { x: 1260, y: 420 },
    A: { x: 90, y: 330 },
    B: { x: 420, y: 600 },
    C: { x: 700, y: 230 },
    D: { x: 1080, y: 540 },
    E: { x: 1390, y: 300 },
    G: { x: 1290, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M120 676 C130 600 160 540 200 500'],
    ['J1', 'A', 'M200 500 C170 440 120 380 90 330'],
    ['J1', 'J2', 'M200 500 C280 470 360 440 440 420'],
    ['J2', 'B', 'M440 420 C450 480 440 540 420 600'],
    ['J2', 'J3', 'M440 420 C560 400 660 380 760 360'],
    ['J3', 'C', 'M760 360 C740 320 720 280 700 230'],
    ['J3', 'J4', 'M760 360 C860 340 960 320 1040 300'],
    ['J4', 'D', 'M1040 300 C1060 380 1070 460 1080 540'],
    ['J4', 'J5', 'M1040 300 C1120 340 1200 380 1260 420'],
    ['J5', 'E', 'M1260 420 C1320 390 1370 350 1390 300'],
    ['J5', 'G', 'M1260 420 C1300 300 1300 160 1290 -40'],
  ],
  water: {
    lakes: [{ d: 'M520 560 C560 500 760 500 860 540 C940 580 900 660 760 670 C620 680 500 640 520 560 Z', shore: '#FFFFFF', edge: '#E4F3FA', fill: '#C7E6F4', c: { x: 710, y: 590 } }],
    rivers: ['M1180 -60 C1150 80 1220 180 1180 280 C1150 360 1060 420 960 450 C880 470 800 500 760 540'],
  },
  road: { edge: '#C3D3E0', sand: '#F4F8FB', rut: '#DCE7F0', dots: '#FFFFFF' },
  footpaths: [
    'M240 620 C300 640 360 640 420 660',
    'M880 200 C940 170 1000 180 1060 150',
    'M60 150 C120 120 200 130 260 170',
  ],
  regions: [
    ['woods', 'M-40 -40 H360 C380 120 320 260 220 290 C120 320 40 300 -40 280 Z', '#DCE9EF'],
    ['valley', 'M480 120 C620 90 860 110 960 190 C1000 260 900 300 760 300 C600 300 460 240 480 120 Z', '#F4F9FC'],
    ['village', 'M1100 520 C1180 480 1340 480 1480 500 V720 H1080 Z', '#E2ECF2'],
    ['hill', 'M880 120 C960 80 1080 90 1120 160 C1150 220 1080 250 980 240 C900 230 850 180 880 120 Z', '#F8FBFD'],
  ],

  /** story in the woods, explainer by the frozen lake, worksheet up the valley, game by the village, review by the gate */
  slots: [
    { node: 'A', at: { dx: -10, dy: -30 }, park: 22 },
    { node: 'B', at: { dx: -26, dy: 12 }, park: 24, badge: -1 },
    { node: 'C', at: { dx: 0, dy: -30 }, park: 20 },
    { node: 'D', at: { dx: 36, dy: 10 }, park: 26 },
    { node: 'E', at: { dx: 10, dy: -30 }, park: 22 },
  ],
  entry: { at: { x: 126, y: 640 } },
  gate: { node: 'G', at: { x: 1300, y: 74 } },

  toys: [
    { name: 'snowman', type: 'snowman', at: { x: 300, y: 600 } },
    { name: 'penguin1', type: 'penguin', at: { x: 640, y: 600 } },
    { name: 'penguin2', type: 'penguin', at: { x: 820, y: 630 }, flip: true },
    { name: 'deer', type: 'deer', at: { x: 230, y: 230 } },
    { name: 'sled', type: 'sled', at: { x: 1000, y: 200 } },
    { name: 'igloo', type: 'igloo', at: { x: 560, y: 300 } },
    { name: 'fish', type: 'fish', at: { x: 760, y: 600 } },
    { name: 'birds', type: 'birds', at: { x: 900, y: 260 }, colors: ['#E5574B', '#C1342A', '#E5574B'] },
  ],
  blocks: [
    { x: 160, y: -20, w: 980, h: 110 }, // the mountains
    { x: 1140, y: 520, w: 300, h: 160 }, // the village
  ],
  clouds: [[300, 0, 1.1, 0], [640, -10, 1.3, -12], [1000, 10, 1, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, scatter, later, mountains } = k;
    // the frozen lake's shine and cracks
    el('path', { d: 'M600 560 L640 580 L630 600 M720 540 L700 570 L740 590 M800 600 L780 630', stroke: '#FFFFFF', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, LAYER.water);
    el('path', { d: 'M560 590 Q600 570 640 586 M700 640 Q760 626 820 640', stroke: '#FFFFFF', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.7 }, LAYER.water);
    // snowy mountains all along the top
    mountains({
      base: 84, span: [160, 1140],
      back: [[260, 110, 100], [420, 140, 120], [600, 126, 112], [780, 150, 126], [960, 120, 110], [1090, 100, 90]],
      front: [[200, 66, 80], [340, 80, 96], [520, 70, 90], [690, 84, 98], [870, 72, 92], [1040, 64, 86]],
      backColors: ['#DCE6F2', '#C6D3E6'], frontColors: ['#EAF1F8', '#D3E0EC'], skirt: '#F2F7FB', snowFront: () => true,
    });
    // snow drifts
    const drift = (x, y, s) => el('path', { d: `M${x - 26 * s} ${y} Q${x - 14 * s} ${y - 12 * s} ${x} ${y - 8 * s} Q${x + 14 * s} ${y - 16 * s} ${x + 26 * s} ${y} Z`, fill: '#FFFFFF' }, LAYER.land);
    [[300, 330, 1.2], [620, 470, 1], [980, 420, 1.3], [1380, 460, 1], [180, 420, 0.9], [880, 290, 0.8]].forEach(([x, y, s]) => drift(x, y, s));
    // log cabins with snowy roofs and smoking chimneys
    [[1180, 600], [1290, 570], [1400, 620], [1240, 660]].forEach(([x, y]) => later(y, (p) => {
      const c = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 2, cy: 1, rx: 20, ry: 4, fill: 'rgba(90, 120, 150, .18)' }, c);
      el('rect', { x: -16, y: -22, width: 32, height: 22, rx: 2, fill: '#B57C42' }, c);
      [-17, -11, -5].forEach((yy) => el('path', { d: `M-16 ${yy} H16`, stroke: '#9C6A3D', 'stroke-width': 1.4 }, c));
      el('rect', { x: 8, y: -36, width: 6, height: 12, fill: '#8C6244' }, c);
      el('path', { d: 'M-20 -20 L0 -36 L20 -20 Z', fill: '#FFFFFF', stroke: '#D5E3EE', 'stroke-width': 1.2 }, c);
      el('rect', { x: -4, y: -12, width: 8, height: 12, rx: 2, fill: '#6E4A28' }, c);
      el('rect', { x: -13, y: -16, width: 6, height: 6, rx: 1, fill: '#FFE08A' }, c);
      const smoke = g(c, { class: 'cm-smoke' });
      [[11, -42, 3.4], [13, -50, 4.2], [10, -59, 5]].forEach(([sx, sy, r], i) => el('circle', { cx: sx, cy: sy, r, fill: '#FFFFFF', opacity: 0.8, style: `animation-delay:${-i * 0.6}s` }, smoke));
    }));
    // snowy pine woods, snowy round trees along the valley, fences with snow caps
    scatter(40, { x: 0, y: 100, w: 360, h: 200 }, (x, y) => later(y, (p) => tree(p, x, y, 0.75 + rnd() * 0.35, rnd() > 0.25 ? 'snowpine' : 'snowround')));
    scatter(14, { x: 900, y: 360, w: 360, h: 140 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.3, 'snowpine')));
    scatter(10, { x: 460, y: 120, w: 420, h: 160 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8, rnd() > 0.5 ? 'snowround' : 'snowpine')));
    scatter(10, { x: 0, y: 380, w: 360, h: 280 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, 'snowpine')));
    scatter(8, { x: 1120, y: 120, w: 300, h: 160 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8 + rnd() * 0.2, 'snowpine')));
    // the middle of the valley: snowy trees and drifts
    scatter(16, { x: 380, y: 300, w: 640, h: 220 }, (x, y) => later(y, (p) => tree(p, x, y, 0.75 + rnd() * 0.3, rnd() > 0.35 ? 'snowpine' : 'snowround')));
    [[560, 380, 0.8], [840, 470, 1], [700, 430, 0.7]].forEach(([x, y, s]) => drift(x, y, s));
    for (let x = 90; x < 230; x += 22) {
      later(612, (p) => {
        const f = g(p, { transform: `translate(${x} 612)` });
        el('rect', { x: -1.6, y: -12, width: 3.2, height: 12, fill: '#9C6A3D' }, f);
        el('ellipse', { cx: 0, cy: -12.5, rx: 3, ry: 1.6, fill: '#FFFFFF' }, f);
      });
    }
    for (let x = 1120; x < 1420; x += 28 + rnd() * 10) {
      const y = 92 + rnd() * 8;
      if (Math.abs(x - 1296) < 56) continue; // leave the gate clear
      later(y, (p) => tree(p, x, y, 0.62 + rnd() * 0.2, 'snowpine'));
    }
  },
};
