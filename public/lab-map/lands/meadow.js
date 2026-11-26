// Land 1, the meadow (counting): forest, berry garden, lake, flower meadow under the mountains, farm, town, and the
// child's home village. The car starts at home. The exit gate stands where a road climbs out between the river and the
// farm fields at the top; the review place is the farm, just before it.

export const LAND = {
  id: 'meadow',
  name: 'Duck Pond Village', // the world's name on the app's world cards
  world: { w: 1440, h: 680 },
  ground: '#DFF0D2',
  start: 'H',

  nodes: {
    H: { x: 690, y: 562 },
    J1: { x: 470, y: 470 },
    J2: { x: 690, y: 330 },
    J3: { x: 980, y: 420 },
    J4: { x: 1050, y: 230 },
    A: { x: 200, y: 386 },
    B: { x: 1205, y: 176 },
    C: { x: 332, y: 520 },
    D: { x: 640, y: 156 },
    E: { x: 1262, y: 540 },
    G: { x: 1040, y: -40 },
    IN: { x: 696, y: 676 },
  },
  edges: [
    ['H', 'J1', 'M690 562 C620 550 530 520 470 470'],
    ['J1', 'A', 'M470 470 C400 432 300 400 200 386'],
    ['J1', 'C', 'M470 470 C440 500 392 518 332 520'],
    ['J1', 'J2', 'M470 470 C540 420 620 360 690 330'],
    ['J2', 'D', 'M690 330 C686 272 664 206 640 156'],
    ['J2', 'J3', 'M690 330 C790 322 900 360 980 420'],
    ['H', 'J3', 'M690 562 C800 564 900 488 980 420'],
    ['J2', 'J4', 'M690 330 C800 262 950 214 1050 230'],
    ['J3', 'J4', 'M980 420 C990 344 1012 274 1050 230'],
    ['J4', 'B', 'M1050 230 C1100 204 1150 184 1205 176'],
    ['J3', 'E', 'M980 420 C1060 452 1170 506 1262 540'],
    ['J4', 'G', 'M1050 230 C1056 160 1030 90 1040 -40'],
    ['IN', 'H', 'M696 676 C696 640 694 600 690 562'],
  ],
  water: {
    rivers: ['M940 -40 C900 60 980 120 965 200 C952 270 1010 320 1062 362 C1115 404 1150 440 1185 468 C1230 500 1330 486 1480 506'],
    lakes: [{ d: 'M70 574 C92 532 200 536 282 542 C372 548 436 588 418 630 C398 672 250 690 156 676 C76 664 48 614 70 574 Z', shore: '#F2E4C4', c: { x: 240, y: 610 } }],
  },
  footpaths: [
    'M40 330 C110 250 190 190 290 140 C330 120 350 104 340 92',
    'M150 60 C210 110 280 120 330 200',
    'M592 618 C540 650 470 650 430 630',
    'M1080 132 C1180 146 1290 146 1450 162',
    'M1300 610 C1340 588 1390 606 1450 594',
    'M860 610 C930 572 1010 552 1100 600',
    'M780 300 C800 250 830 200 870 170',
  ],
  regions: [
    ['forest', 'M-40 -40 H440 C452 110 410 250 300 300 C200 340 60 330 -40 300 Z', '#CDE6BC'],
    ['garden', 'M70 336 C140 300 310 310 352 360 C384 412 300 466 196 464 C100 462 40 404 70 336 Z', '#E6F2D6'],
    ['meadow', 'M470 30 C560 -6 790 14 830 116 C858 214 770 280 640 274 C520 268 440 140 470 30 Z', '#E9F4D8'],
    ['farm', 'M1066 -40 H1480 V330 C1380 350 1200 330 1110 290 C1060 250 1040 120 1066 -40 Z', '#E8EFC9'],
    ['town', 'M1100 560 C1150 510 1300 520 1480 530 V720 H1080 Z', '#ECEEE6'],
    ['village', 'M560 470 C640 450 790 470 830 540 C860 610 780 690 650 690 C540 690 500 560 560 470 Z', '#E4F1D9'],
  ],

  /** the day's places, in the day's order (story, explainer, worksheet, game, review): lake, berry garden, meadow,
      town, and the farm by the gate */
  slots: [
    { node: 'C', at: { dx: -26, dy: 44 }, park: 22 },
    { node: 'A', at: { dx: -32, dy: -6 }, park: 30, badge: -1 },
    { node: 'D', at: { dx: 4, dy: -30 }, park: 18 },
    { node: 'E', at: { dx: 40, dy: 4 }, park: 30 },
    { node: 'B', at: { dx: 36, dy: -16 }, park: 26 },
  ],
  gate: { node: 'G', at: { x: 1040, y: 74 } },
  /** coming home after the last land: the car arrives up the lane to the house */
  entry: { at: { x: 695, y: 642 } },

  toys: [
    { name: 'duck1', type: 'duck', at: { x: 140, y: 640 } },
    { name: 'duck2', type: 'duck', at: { x: 236, y: 656 }, delay: 3 },
    { name: 'fountain', type: 'fountain', at: { x: 592, y: 618 } },
    { name: 'windmill', type: 'windmill', at: { x: 1165, y: 300 } },
    { name: 'hen1', type: 'hen', at: { x: 1300, y: 352 } },
    { name: 'hen2', type: 'hen', at: { x: 1338, y: 364 }, flip: true },
    { name: 'fly1', type: 'butterfly', at: { x: 560, y: 236 } },
    { name: 'fly2', type: 'butterfly', at: { x: 770, y: 212 }, colors: ['#9E7BF0', '#C9B6F7'], lift: 24 },
    { name: 'fish', type: 'fish' },
    { name: 'balloons', type: 'balloons', at: { x: 905, y: 662 } },
    { name: 'cow', type: 'cow', at: { x: 1232, y: 372 } },
    { name: 'bunny', type: 'bunny', at: { x: 330, y: 232 } },
    { name: 'hive', type: 'hive', at: { x: 842, y: 138 } },
    { name: 'kite', type: 'kite', at: { x: 520, y: 150 } },
    { name: 'dog', type: 'dog', at: { x: 640, y: 668 } },
    { name: 'boat', type: 'boat', at: { x: 118, y: 600 } },
    { name: 'birds', type: 'birds', at: { x: 1222, y: 440 } },
  ],
  blocks: [
    { x: 320, y: -20, w: 600, h: 104 }, // the mountains
    { x: 1080, y: 10, w: 380, h: 130 }, { x: 1255, y: 225, w: 200, h: 100 }, // fields
    { x: 1250, y: 560, w: 170, h: 90 }, // the town square
    { x: 540, y: 560, w: 120, h: 100 }, // the fountain
    { x: 700, y: 520, w: 70, h: 50 }, // home
  ],
  clouds: [[430, 4, 1, 0], [700, -8, 1.3, -12], [860, 20, 0.9, -24]],

  decorate(k) {
    const { el, g, LAYER, rnd, tree, bush, house, flowers, field, scatter, later, mountains } = k;
    // the farm: fields and a fence; the town: a little square; the village: the fountain's plaza
    field(LAYER.land, 1090, 26, 150, 76, '#F0E2A8', '#E2CD7E', -4);
    field(LAYER.land, 1268, 40, 170, 84, '#D3E7A6', '#B9D886', 3);
    field(LAYER.land, 1270, 240, 160, 70, '#F1D3B2', '#E2B489', -3);
    el('path', { d: 'M1100 200 H1170 M1100 214 H1170 M1104 196 V220 M1124 196 V220 M1144 196 V220 M1164 196 V220', stroke: '#C79B6A', 'stroke-width': 3, 'stroke-linecap': 'round' }, LAYER.land);
    el('ellipse', { cx: 1330, cy: 600, rx: 70, ry: 26, fill: '#E2E4DA' }, LAYER.land);
    el('circle', { cx: 592, cy: 618, r: 30, fill: '#ECE6D6' }, LAYER.land);
    // the lake's ripples and lily pads
    el('path', { d: 'M120 600 Q140 596 160 600 M330 632 Q350 628 370 632 M200 650 Q220 646 240 650', stroke: '#FFFFFF', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round', class: 'cm-ripple' }, LAYER.water);
    [[150, 628], [372, 600], [226, 588]].forEach(([x, y]) => el('path', { d: `M${x} ${y} m-10 0 a10 6 0 1 0 20 0 L${x} ${y} Z`, fill: '#6DBE68' }, LAYER.water));
    // mountains along the top, between the forest and the river
    mountains({ base: 76, span: [330, 910], back: [[470, 112, 105], [600, 138, 118], [735, 120, 110], [845, 100, 90]], front: [[400, 62, 78], [525, 74, 92], [665, 66, 88], [790, 76, 92], [880, 52, 62]] });

    // forest: lots of trees, pines among them
    scatter(46, { x: 0, y: 30, w: 430, h: 280 }, (x, y) => later(y, (p) => tree(p, x, y, 0.75 + rnd() * 0.35, ['round', 'tall', 'pine', 'pine'][Math.floor(rnd() * 4)])));
    // garden: rows of berry bushes
    scatter(16, { x: 80, y: 330, w: 270, h: 120 }, (x, y) => later(y, (p) => bush(p, x, y, rnd() > 0.35 ? '#E5574B' : '#7C5BC9')));
    // meadow: flowers, a few round trees
    scatter(26, { x: 470, y: 40, w: 360, h: 230 }, (x, y) => later(y, (p) => flowers(p, x, y, ['#FF8FB0', '#9E7BF0', '#FFFFFF'][Math.floor(rnd() * 3)])), 14);
    scatter(6, { x: 480, y: 50, w: 340, h: 220 }, (x, y) => later(y, (p) => tree(p, x, y, 0.9, 'round')));
    // along the river and the lake: tall trees and bushes
    scatter(12, { x: 830, y: 30, w: 230, h: 620 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, rnd() > 0.5 ? 'tall' : 'round')));
    scatter(8, { x: 40, y: 480, w: 420, h: 200 }, (x, y) => later(y, (p) => bush(p, x, y, null)));
    // farm and town edges
    scatter(10, { x: 1060, y: 120, w: 380, h: 220 }, (x, y) => later(y, (p) => tree(p, x, y, 0.8, 'round')));
    scatter(8, { x: 1080, y: 360, w: 360, h: 160 }, (x, y) => later(y, (p) => tree(p, x, y, 0.85, rnd() > 0.5 ? 'pine' : 'round')));
    // village gardens
    scatter(10, { x: 500, y: 450, w: 340, h: 230 }, (x, y) => later(y, (p) => flowers(p, x, y, rnd() > 0.5 ? '#FF8FB0' : '#9E7BF0')), 14);
    // houses: village, farm, town (faint, rounded)
    [[620, 520, '#F6E6C8', '#E8A07A'], [790, 610, '#E6EEF6', '#9DB6D6'], [520, 640, '#F6E6C8', '#C9A0D8'], [800, 520, '#FDEBD8', '#E5574B']].forEach(([x, y, w, r]) => later(y, (p) => house(p, x, y, w, r, 0.85)));
    later(236, (p) => {
      // the barn
      const b = g(p, { transform: 'translate(1384 236)', opacity: 0.8 });
      el('rect', { x: -26, y: -30, width: 52, height: 30, rx: 4, fill: '#E5574B' }, b);
      el('path', { d: 'M-30 -28 L0 -50 L30 -28 Z', fill: '#C1342A' }, b);
      el('path', { d: 'M-9 0 V-18 H9 V0 M-9 -18 L9 0 M9 -18 L-9 0', stroke: '#FFFFFF', 'stroke-width': 2.5, fill: 'none' }, b);
    });
    [[1150, 610, '#E6EEF6', '#9DB6D6'], [1420, 600, '#F6E6C8', '#E8A07A'], [1360, 650, '#FDEBD8', '#9E7BF0'], [1210, 660, '#F6E6C8', '#C9A0D8']].forEach(([x, y, w, r]) => later(y, (p) => house(p, x, y, w, r, 0.9)));
    // pines and round trees along the foot of the mountains
    for (let x = 350; x < 900; x += 30 + rnd() * 18) {
      const y = 80 + rnd() * 8;
      later(y, (p) => tree(p, x, y, 0.62 + rnd() * 0.2, rnd() > 0.4 ? 'pine' : 'round'));
    }
    // home: the child's own house, beside where the car starts, bigger and in full colour
    later(552, (p) => house(p, 736, 552, '#FFF1D6', '#4AC1BD', 1.15, 1));
  },
};
