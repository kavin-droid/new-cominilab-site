// Land 7, India: the car comes in at the bottom right along red-earth roads. A river runs down the left with stone
// bathing steps (ghats) and coconut palms, a big banyan tree with a swing, a lotus pond, a village of bright
// flat-roofed houses with rangoli and bunting, terraced rice paddies, and a pastel palace with domes at the top. The
// exit gate (hung with a marigold garland) is at the top, beside the palace; the review place is just before it.

export const LAND = {
  id: 'india',
  name: 'Banyan Village', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#E4ECC2',
  start: 'IN',
  toran: true,
  footpathColor: '#FFF3DC',

  nodes: {
    IN: { x: 1180, y: 676 },
    J1: { x: 1150, y: 520 },
    J2: { x: 900, y: 430 },
    J3: { x: 650, y: 380 },
    J4: { x: 600, y: 220 },
    J5: { x: 1080, y: 260 },
    A: { x: 1330, y: 580 },
    B: { x: 1300, y: 330 },
    C: { x: 880, y: 170 },
    D: { x: 420, y: 500 },
    E: { x: 360, y: 180 },
    G: { x: 560, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M1180 676 C1175 620 1165 570 1150 520'],
    ['J1', 'A', 'M1150 520 C1210 540 1270 560 1330 580'],
    ['J1', 'J2', 'M1150 520 C1060 490 980 460 900 430'],
    ['J2', 'J5', 'M900 430 C960 360 1020 300 1080 260'],
    ['J5', 'B', 'M1080 260 C1150 280 1230 310 1300 330'],
    ['J5', 'C', 'M1080 260 C1020 220 950 190 880 170'],
    ['J2', 'J3', 'M900 430 C820 410 730 390 650 380'],
    ['J3', 'D', 'M650 380 C580 410 500 450 420 500'],
    ['J3', 'J4', 'M650 380 C630 320 610 270 600 220'],
    ['J4', 'E', 'M600 220 C520 210 440 195 360 180'],
    ['J4', 'G', 'M600 220 C590 150 570 80 560 -40'],
  ],
  water: {
    rivers: ['M140 -60 C120 60 200 140 180 240 C160 340 80 420 120 520 C150 600 240 650 260 760'],
    lakes: [{ d: 'M600 580 C600 530 700 515 780 535 C850 552 850 620 780 640 C700 660 600 630 600 580 Z', shore: '#D9C9A0', c: { x: 720, y: 585 } }],
  },
  // red-earth (laterite) roads
  road: { edge: '#C27354', sand: '#E3A27C', rut: '#D48B67', dots: '#F2C7A8' },
  footpaths: ['M1180 380 C1220 400 1260 420 1300 460', 'M680 680 C700 660 760 670 800 690', 'M420 100 C460 120 500 120 540 110'],
  regions: [
    ['riverbank', 'M60 -40 H260 C250 100 300 200 260 320 C220 440 260 560 360 720 H120 C60 600 20 460 60 340 C80 240 40 120 60 -40 Z', '#EADFB8'],
    ['paddy', 'M1120 -40 H1480 V230 C1380 240 1220 230 1150 200 C1110 140 1110 60 1120 -40 Z', '#C9E59A'],
    ['village', 'M820 500 C900 470 1080 480 1140 540 C1180 600 1140 700 1000 700 C860 700 780 600 820 500 Z', '#F3E3C3'],
    ['palace', 'M760 -40 H1060 C1070 60 1040 120 960 130 H840 C780 120 750 60 760 -40 Z', '#EFDCC4'],
    ['grove', 'M320 260 C400 240 560 260 580 340 C600 420 520 460 420 460 C340 460 300 360 320 260 Z', '#D5E7B3'],
  ],

  /** story by the entry, explainer by the paddies, worksheet under the palace, game by the banyan, review by the gate */
  slots: [
    { node: 'A', at: { dx: 30, dy: -8 }, park: 26 },
    { node: 'B', at: { dx: 34, dy: -12 }, park: 24 },
    { node: 'C', at: { dx: -6, dy: -32 }, park: 20 },
    { node: 'D', at: { dx: -32, dy: 16 }, park: 24, badge: -1 },
    { node: 'E', at: { dx: -14, dy: -28 }, park: 22, badge: -1 },
  ],
  entry: { at: { x: 1177, y: 640 } },
  gate: { node: 'G', at: { x: 568, y: 70 } },

  toys: [
    { name: 'peacock', type: 'peacock', at: { x: 300, y: 432 } },
    { name: 'jhoola', type: 'jhoola', at: { x: 452, y: 372 } },
    { name: 'lotus1', type: 'lotus', at: { x: 652, y: 578 } },
    { name: 'lotus2', type: 'lotus', at: { x: 764, y: 602 } },
    { name: 'dhol', type: 'dhol', at: { x: 988, y: 566 } },
    { name: 'elephant', type: 'elephant', at: { x: 770, y: 300 } },
    { name: 'monkey', type: 'monkey', at: { x: 1236, y: 452 } },
    { name: 'cow', type: 'cow', at: { x: 790, y: 492 } },
    { name: 'parrot', type: 'parrot', at: { x: 250, y: 262 }, body: '#4FAE5F', wing: '#3E9150' },
    { name: 'kite', type: 'kite', at: { x: 1392, y: 476 }, color: '#F2802B' },
    { name: 'birds', type: 'birds', at: { x: 724, y: 236 }, colors: ['#8C6244', '#2B2B33', '#8C6244'] },
    { name: 'fish', type: 'fish' },
  ],
  blocks: [
    { x: 760, y: -20, w: 290, h: 140 }, // the palace
    { x: 1120, y: -20, w: 330, h: 230 }, // the paddies
    { x: 850, y: 530, w: 270, h: 150 }, // the village
    { x: 380, y: 230, w: 160, h: 150 }, // the banyan
  ],
  clouds: [[300, 4, 1.1, 0], [700, -12, 1, -12], [1240, 16, 1.2, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, scatter, later } = k;
    // terraced rice paddies: curved bands of green with water shining between
    for (let r = 0; r < 6; r++) {
      const y = 10 + r * 34;
      el('path', { d: `M${1130 + r * 6} ${y} Q1280 ${y - 10} 1450 ${y + 4} L1450 ${y + 28} Q1280 ${y + 18} ${1134 + r * 6} ${y + 28} Z`, fill: r % 2 ? '#B6DB7E' : '#A8D46C' }, LAYER.land);
      el('path', { d: `M${1140 + r * 6} ${y + 26} Q1280 ${y + 16} 1440 ${y + 26}`, stroke: '#CDEFF7', 'stroke-width': 2, fill: 'none', opacity: 0.8 }, LAYER.land);
      for (let x = 1150 + r * 6; x < 1440; x += 14) el('path', { d: `M${x} ${y + 20} l-2 -6 M${x} ${y + 20} l2 -6`, stroke: '#7FBF4F', 'stroke-width': 1.2 }, LAYER.land);
    }
    // the ghats: stone steps down to the river
    for (let i = 0; i < 6; i++) el('rect', { x: 196 - i * 4, y: 282 + i * 10, width: 70, height: 8, rx: 1.5, fill: i % 2 ? '#E2D3B4' : '#D6C49F' }, LAYER.land);
    [[214, 280], [256, 280]].forEach(([x, y]) => {
      el('rect', { x: x - 3, y: y - 16, width: 6, height: 16, fill: '#D6C49F' }, LAYER.land);
      el('path', { d: `M${x - 4} ${y - 16} Q${x} ${y - 22} ${x + 4} ${y - 16} Z`, fill: '#F2A541' }, LAYER.land);
    });
    // the palace: pastel pink with arched windows, a big onion dome, little domed pavilions and flags
    later(100, (p) => {
      const pl = g(p, { transform: 'translate(900 100)' });
      el('ellipse', { cx: 4, cy: 2, rx: 120, ry: 8, fill: 'rgba(120, 90, 60, .14)' }, pl);
      el('rect', { x: -110, y: -46, width: 220, height: 46, rx: 3, fill: '#F7C6D3' }, pl);
      el('rect', { x: -110, y: -50, width: 220, height: 6, rx: 2, fill: '#E9A7BC' }, pl);
      for (let x = -96; x <= 84; x += 20) el('path', { d: `M${x} 0 V-26 Q${x + 6} -36 ${x + 12} -26 V0 Z`, fill: x === -6 ? '#8C6244' : '#FFF1D6' }, pl);
      el('rect', { x: -40, y: -80, width: 80, height: 32, fill: '#F7C6D3' }, pl);
      for (let x = -30; x <= 18; x += 16) el('path', { d: `M${x} -54 V-68 Q${x + 6} -76 ${x + 12} -68 V-54 Z`, fill: '#FFF1D6' }, pl);
      el('path', { d: 'M-26 -80 Q-30 -106 0 -118 Q30 -106 26 -80 Z', fill: '#FFF1D6' }, pl);
      el('path', { d: 'M0 -118 V-128', stroke: '#E0A92A', 'stroke-width': 2 }, pl);
      el('circle', { cx: 0, cy: -129, r: 2.4, fill: '#E0A92A' }, pl);
      [-90, 90].forEach((x) => {
        [-8, 8].forEach((dx) => el('rect', { x: x + dx - 1.5, y: -64, width: 3, height: 14, fill: '#E9A7BC' }, pl));
        el('path', { d: `M${x - 13} -62 Q${x} -82 ${x + 13} -62 Z`, fill: '#FFF1D6' }, pl);
        el('path', { d: `M${x} -76 V-92`, stroke: '#8C6244', 'stroke-width': 1.4 }, pl);
        el('path', { d: `M${x} -92 L${x + 12} -88 L${x} -84 Z`, fill: '#F2802B' }, pl);
      });
    });
    // the village: bright flat-roofed houses, each with rangoli by the door, and bunting strung across
    const HOUSES = [[872, 566, '#F7B5C9'], [952, 626, '#7FD3CF'], [1036, 586, '#FFE08A'], [1104, 656, '#9DC3EE'], [880, 648, '#FFC6A0']];
    HOUSES.forEach(([x, y, c]) => later(y, (p) => {
      const h = g(p, { transform: `translate(${x} ${y})` });
      el('ellipse', { cx: 2, cy: 1, rx: 22, ry: 4, fill: 'rgba(120, 90, 60, .16)' }, h);
      el('rect', { x: -17, y: -26, width: 34, height: 26, rx: 2, fill: c }, h);
      el('rect', { x: -19, y: -30, width: 38, height: 5, rx: 1.5, fill: '#FFFFFF', opacity: 0.85 }, h);
      for (let dx = -17; dx <= 13; dx += 6) el('rect', { x: dx, y: -34, width: 4, height: 4, fill: '#FFFFFF', opacity: 0.85 }, h);
      el('path', { d: 'M-5 0 V-12 Q0 -18 5 -12 V0 Z', fill: '#8C6244' }, h);
      el('rect', { x: 8, y: -18, width: 6, height: 7, rx: 1, fill: '#8C6244' }, h);
      el('rect', { x: -14, y: -18, width: 6, height: 7, rx: 1, fill: '#8C6244' }, h);
      // rangoli
      const r = g(h, { transform: 'translate(0 9) scale(1 .45)' });
      el('circle', { r: 8, fill: '#FFFFFF' }, r);
      [0, 60, 120, 180, 240, 300].forEach((a, i) => el('circle', { cx: 0, cy: -5, r: 2.6, fill: ['#E5574B', '#FFC93C', '#9E7BF0'][i % 3], transform: `rotate(${a})` }, r));
      el('circle', { r: 2.4, fill: '#F2802B' }, r);
    }));
    later(540, (p) => {
      const b = g(p);
      [[846, 540], [1120, 540]].forEach(([x, y]) => el('rect', { x: x - 1.5, y: y - 40, width: 3, height: 40, fill: '#8C6244' }, b));
      el('path', { d: 'M846 502 Q983 526 1120 502', stroke: '#8A8F96', 'stroke-width': 1, fill: 'none' }, b);
      for (let i = 1; i < 16; i++) {
        const t = i / 16;
        const x = 846 + 274 * t;
        const y = 502 + 24 * 4 * t * (1 - t) * 0.5 + 0.5;
        el('path', { d: `M${x - 4} ${y} L${x + 4} ${y} L${x} ${y + 8} Z`, fill: ['#E5574B', '#FFC93C', '#4FAE5F', '#6FA0D8', '#FF8FB0'][i % 5] }, b);
      }
    });
    // trees: coconut palms along the river, mango trees, banana plants, marigold bushes
    const banana = (p, x, y) => {
      const b = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      el('ellipse', { cx: 1, cy: 1, rx: 12, ry: 3, fill: 'rgba(60, 110, 60, .16)' }, b);
      el('rect', { x: -2, y: -20, width: 4, height: 20, rx: 2, fill: '#9BC46A' }, b);
      [[-18, -30], [16, -32], [-10, -40], [10, -42]].forEach(([dx, dy]) => el('path', { d: `M0 -20 Q${dx / 2} ${dy} ${dx} ${dy + 6} Q${dx / 2 + 2} ${dy + 10} 0 -18 Z`, fill: '#6DBE68' }, b));
    };
    const marigold = (p, x, y) => {
      const m = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      el('ellipse', { cx: 0, cy: -4, rx: 9, ry: 5, fill: '#5FAE72' }, m);
      [[-5, -7], [0, -9], [5, -7], [-2, -4], [3, -4]].forEach(([dx, dy], i) => el('circle', { cx: dx, cy: dy, r: 2.4, fill: i % 2 ? '#F2802B' : '#FFC93C' }, m));
    };
    scatter(16, { x: 40, y: 20, w: 300, h: 640 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85 + rnd() * 0.3, 'palm')), 26);
    scatter(14, { x: 560, y: 120, w: 560, h: 260 }, (x, y) => later(y, (p) => {
      tree(p, x, y, 0.85 + rnd() * 0.25, 'mango');
    }), 26);
    scatter(10, { x: 1100, y: 260, w: 340, h: 200 }, (x, y) => later(y, (p) => banana(p, x, y)), 24);
    scatter(8, { x: 520, y: 420, w: 300, h: 100 }, (x, y) => later(y, (p) => banana(p, x, y)), 24);
    scatter(16, { x: 300, y: 440, w: 560, h: 240 }, (x, y) => later(y, (p) => marigold(p, x, y)), 16);
    scatter(8, { x: 1180, y: 560, w: 260, h: 120 }, (x, y) => later(y, (p) => tree(p, x, y, 0.9, 'palm')), 26);
  },
};
