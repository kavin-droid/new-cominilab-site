// Land 4, the jungle (skip counting): the car comes in at the bottom right. A waterfall pours off a rocky cliff at the
// top and a river winds down across the land; deep jungle on both sides, a sunny clearing in the middle, a treehouse.
// The exit gate is at the top left, up past the river; the review place is just before it.

export const LAND = {
  id: 'jungle',
  name: 'Treehouse Falls', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#CBE6B8',
  start: 'IN',
  footpathColor: '#F2E8C8',

  nodes: {
    IN: { x: 1100, y: 676 },
    J1: { x: 1080, y: 520 },
    J2: { x: 860, y: 420 },
    J3: { x: 620, y: 360 },
    J4: { x: 420, y: 200 },
    A: { x: 1250, y: 600 },
    B: { x: 1180, y: 300 },
    C: { x: 900, y: 240 },
    D: { x: 560, y: 560 },
    E: { x: 120, y: 220 },
    G: { x: 320, y: -40 },
  },
  edges: [
    ['IN', 'J1', 'M1100 676 C1095 620 1090 570 1080 520'],
    ['J1', 'A', 'M1080 520 C1140 540 1200 570 1250 600'],
    ['J1', 'J2', 'M1080 520 C1000 480 930 450 860 420'],
    ['J2', 'B', 'M860 420 C960 380 1080 330 1180 300'],
    ['J2', 'C', 'M860 420 C870 340 890 280 900 240'],
    ['J2', 'J3', 'M860 420 C780 390 700 370 620 360'],
    ['J3', 'D', 'M620 360 C600 430 580 500 560 560'],
    ['J3', 'J4', 'M620 360 C560 300 480 250 420 200'],
    ['J4', 'E', 'M420 200 C340 210 220 220 120 220'],
    ['J4', 'G', 'M420 200 C400 140 340 80 320 -40'],
  ],
  water: {
    rivers: ['M800 70 C760 160 640 220 560 300 C480 380 380 420 300 520 C240 600 180 650 120 760'],
    lakes: [{ d: 'M762 72 C762 52 838 50 840 70 C842 92 762 94 762 72 Z', edge: '#CDEFF7', fill: '#9FD8EE' }],
  },
  road: { edge: '#C9A06A', sand: '#E5C893', rut: '#D6B47A', dots: '#F2E2BC' },
  footpaths: ['M980 600 C1020 640 1080 640 1120 610', 'M140 520 C200 470 240 440 260 380', 'M520 120 C580 150 640 140 700 110'],
  regions: [
    ['deep-left', 'M-40 260 C80 230 220 260 260 360 C280 460 120 480 -40 470 Z', '#B6D9A1'],
    ['deep-right', 'M1000 -40 H1480 V240 C1360 260 1180 240 1080 180 C1020 140 990 60 1000 -40 Z', '#B6D9A1'],
    ['clearing', 'M640 440 C720 400 960 420 1000 500 C1030 580 900 640 760 630 C640 620 600 520 640 440 Z', '#DCEFC9'],
    ['cliff', 'M600 -40 H990 C1000 30 960 96 880 100 H700 C630 96 596 40 600 -40 Z', '#C9C2A6'],
    ['bank', 'M-40 520 C60 500 160 560 200 680 H-40 Z', '#D3E8BE'],
  ],

  /** story by the entry, explainer up by the treehouse, worksheet under the waterfall, game in the clearing, review by
      the gate */
  slots: [
    { node: 'A', at: { dx: 30, dy: -12 }, park: 26 },
    { node: 'B', at: { dx: 34, dy: -18 }, park: 24 },
    { node: 'C', at: { dx: 10, dy: -32 }, park: 20 },
    { node: 'D', at: { dx: -30, dy: 22 }, park: 24, badge: -1 },
    { node: 'E', at: { dx: -12, dy: -30 }, park: 22, badge: -1 },
  ],
  entry: { at: { x: 1097, y: 640 } },
  gate: { node: 'G', at: { x: 338, y: 62 } },

  toys: [
    { name: 'monkey', type: 'monkey', at: { x: 1020, y: 190 } },
    { name: 'parrot', type: 'parrot', at: { x: 1330, y: 430 } },
    { name: 'elephant', type: 'elephant', at: { x: 770, y: 560 } },
    { name: 'hippo', type: 'hippo', at: { x: 430, y: 404 } },
    { name: 'fly1', type: 'butterfly', at: { x: 980, y: 560 }, colors: ['#3B8BEB', '#8CC2F5'] },
    { name: 'fly2', type: 'butterfly', at: { x: 240, y: 330 }, colors: ['#F2A541', '#FFD08A'], lift: 24 },
    { name: 'birds', type: 'birds', at: { x: 1240, y: 460 }, colors: ['#E5574B', '#FFC93C', '#6FA0D8'] },
    { name: 'fish', type: 'fish' },
  ],
  blocks: [
    { x: 600, y: -40, w: 390, h: 140 }, // the cliff
    { x: 1250, y: 100, w: 110, h: 100 }, // the treehouse
  ],
  clouds: [[200, 0, 1.1, 0], [560, -10, 1, -12], [1180, 10, 1.2, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, bush, scatter, later } = k;
    // the cliff's rock bands and the waterfall pouring into its pool
    el('path', { d: 'M610 20 H985 M620 50 H975 M640 78 H950', stroke: '#B8B092', 'stroke-width': 3, 'stroke-linecap': 'round' }, LAYER.land);
    const fall = g(LAYER.water);
    el('rect', { x: 786, y: -40, width: 28, height: 112, rx: 6, fill: '#BFE8F5' }, fall);
    [792, 800, 808].forEach((x, i) => el('path', { d: `M${x} -40 V68`, stroke: '#FFFFFF', 'stroke-width': 2.4, 'stroke-dasharray': '12 10', class: 'cm-fall', style: `animation-delay:${-i * 0.2}s` }, fall));
    [[784, 74, 7], [800, 78, 9], [818, 74, 7]].forEach(([x, y, r]) => el('circle', { cx: x, cy: y, r, fill: '#FFFFFF', opacity: 0.85, class: 'cm-ripple' }, fall));
    // big flowers, ferns, mossy rocks, bamboo
    const flower = (p, x, y, c) => {
      const f = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      [0, 72, 144, 216, 288].forEach((a) => el('ellipse', { cx: 0, cy: -5, rx: 3.4, ry: 5, fill: c, transform: `rotate(${a})` }, f));
      el('circle', { cx: 0, cy: 0, r: 2.4, fill: '#FFD45E' }, f);
    };
    const bamboo = (p, x, y) => {
      const b = g(p, { transform: `translate(${x.toFixed(0)} ${y.toFixed(0)})` });
      [-6, 0, 6].forEach((dx, i) => {
        el('rect', { x: dx - 1.6, y: -40 + i * 6, width: 3.2, height: 40 - i * 6, rx: 1.4, fill: '#7BC94F' }, b);
        el('path', { d: `M${dx - 1.6} ${-28 + i * 6} H${dx + 1.6} M${dx - 1.6} ${-14 + i * 6} H${dx + 1.6}`, stroke: '#5FAE72', 'stroke-width': 1 }, b);
        el('path', { d: `M${dx} ${-36 + i * 6} q6 -4 10 0`, stroke: '#5FBF6B', 'stroke-width': 2, fill: 'none' }, b);
      });
    };
    scatter(30, { x: 0, y: 250, w: 270, h: 240 }, (x, y) => later(y, (p) => tree(p, x, y, 0.9 + rnd() * 0.35, 'jungle')));
    scatter(26, { x: 1000, y: 20, w: 440, h: 240 }, (x, y) => later(y, (p) => tree(p, x, y, 0.9 + rnd() * 0.35, rnd() > 0.2 ? 'jungle' : 'palm')));
    scatter(14, { x: 0, y: 20, w: 560, h: 200 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85 + rnd() * 0.3, rnd() > 0.4 ? 'jungle' : 'palm')));
    scatter(10, { x: 1100, y: 360, w: 340, h: 300 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, 'jungle')));
    scatter(18, { x: 640, y: 420, w: 380, h: 220 }, (x, y) => later(y, (p) => flower(p, x, y, ['#E5574B', '#FF8FB0', '#F2A541'][Math.floor(rnd() * 3)])), 14);
    scatter(16, { x: 0, y: 480, w: 560, h: 200 }, (x, y) => later(y, (p) => bush(p, x, y, rnd() > 0.6 ? '#FF8FB0' : null)));
    scatter(8, { x: 320, y: 280, w: 340, h: 200 }, (x, y) => later(y, (p) => bamboo(p, x, y)));
    scatter(10, { x: 600, y: 120, w: 260, h: 220 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8, 'jungle')));
    // the treehouse up in a big tree
    later(196, (p) => {
      const t = g(p, { transform: 'translate(1305 196)' });
      el('ellipse', { cx: 2, cy: 1, rx: 26, ry: 6, fill: 'rgba(60, 110, 60, .18)' }, t);
      el('rect', { x: -6, y: -70, width: 12, height: 70, rx: 4, fill: '#7B5638' }, t);
      el('circle', { cx: -18, cy: -84, r: 22, fill: '#2E8A4E' }, t);
      el('circle', { cx: 18, cy: -88, r: 22, fill: '#3E9150' }, t);
      el('circle', { cx: 0, cy: -100, r: 20, fill: '#4FAE5F' }, t);
      el('rect', { x: -20, y: -62, width: 40, height: 6, fill: '#9C6A3D' }, t);
      el('rect', { x: -14, y: -82, width: 28, height: 20, fill: '#E2B479' }, t);
      el('path', { d: 'M-18 -80 L0 -94 L18 -80 Z', fill: '#C1342A' }, t);
      el('rect', { x: -4, y: -76, width: 8, height: 14, rx: 2, fill: '#8C6244' }, t);
      el('path', { d: 'M12 -56 V-8 M18 -56 V-8 M12 -46 H18 M12 -36 H18 M12 -26 H18 M12 -16 H18', stroke: '#B57C42', 'stroke-width': 1.6 }, t);
    });
  },
};
