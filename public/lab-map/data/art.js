// Landmark art for the activities: flat shapes in the games' palette, each drawn standing on y = 0 and centred on x = 0,
// inside about 64 x 56 (the strip and the edge pin show them in a -32 -54 64 60 box). Every activity gets its own
// landmark so no two places look alike.

const STAR_D = 'M0 -7 L2.1 -2.3 L7 -1.9 L3.3 1.4 L4.4 6.3 L0 3.7 L-4.4 6.3 L-3.3 1.4 L-7 -1.9 L-2.1 -2.3 Z';

// ---------- games (drawn like the games themselves) ----------

/** Delivery Boxes: a little pile of the game's blue parcels, a white band on each (no bow: parcels, not presents) */
export function boxesArt() {
  const box = (x, y, w, h) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="${-h}" width="${w}" height="${h}" rx="3" fill="#6FA0D8"/>
    <rect x="${-w / 2 - 1.5}" y="${-h}" width="${w + 3}" height="6" rx="2" fill="#5B8DCB"/>
    <rect x="-2.5" y="${-h}" width="5" height="${h}" fill="#FFFFFF"/></g>`;
  return `${box(-15, 0, 28, 24)}${box(15, 0, 28, 24)}${box(0, -24, 30, 24)}`;
}
/** Fair Nuts: the berry basket */
export function basketArt() {
  const berry = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-5 -2 Q-5 6 0 8 Q5 6 5 -2 Q0 -5 -5 -2 Z" fill="#E5574B"/><path d="M-4 -3 L0 -6 L4 -3 L0 -1.5 Z" fill="#5FBF6B"/><circle cx="-1.5" cy="1.5" r=".7" fill="#FFE29A"/><circle cx="1.8" cy="3.5" r=".7" fill="#FFE29A"/></g>`;
  return `
    <path d="M-18 -26 Q-18 -50 0 -50 Q18 -50 18 -26" stroke="#9C6A3D" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${berry(-9, -33)}${berry(1, -36)}${berry(10, -32)}${berry(-3, -29)}
    <path d="M-25 -26 L25 -26 L20 -2 Q0 1 -20 -2 Z" fill="#C98E4E"/>
    <path d="M-23 -17 H23 M-21 -9 H21" stroke="#A8733C" stroke-width="2"/>
    <path d="M-10 -25 V-1 M0 -25 V0 M10 -25 V-1" stroke="#B57C42" stroke-width="1.6"/>
    <rect x="-27" y="-30" width="54" height="7" rx="3.5" fill="#A8733C"/>`;
}
/** Roll Call: a sheep */
export function sheepArt() {
  return `
    <rect x="-13" y="-12" width="4" height="12" rx="2" fill="#2B2B33"/><rect x="-3" y="-12" width="4" height="12" rx="2" fill="#2B2B33"/>
    <rect x="6" y="-12" width="4" height="12" rx="2" fill="#2B2B33"/>
    <g fill="#FFFFFF" stroke="#C9C2B0" stroke-width="1.5">
      <circle cx="-14" cy="-22" r="9"/><circle cx="-3" cy="-28" r="10"/><circle cx="9" cy="-24" r="9"/><circle cx="-6" cy="-16" r="9"/><circle cx="6" cy="-15" r="8"/>
    </g>
    <circle cx="-3" cy="-22" r="10" fill="#FFFFFF"/><circle cx="4" cy="-19" r="8" fill="#FFFFFF"/>
    <circle cx="19" cy="-25" r="8.5" fill="#2B2B33"/>
    <ellipse cx="13.5" cy="-29" rx="4" ry="2.4" fill="#2B2B33"/>
    <circle cx="21.5" cy="-27" r="1.7" fill="#FFFFFF"/>`;
}
/** FrogCross: the frog on its lily pad */
export function frogArt() {
  return `
    <path d="M-30 -5 Q-30 -16 0 -16 Q30 -16 30 -5 Q30 4 0 4 Q-30 4 -30 -5 Z" fill="#4FAE5F"/>
    <path d="M0 -6 L22 -14" stroke="#3E9150" stroke-width="2"/>
    <ellipse cx="0" cy="-22" rx="17" ry="13" fill="#7BC94F"/>
    <ellipse cx="0" cy="-17" rx="11" ry="6" fill="#B6E39A"/>
    <circle cx="-8" cy="-34" r="6.5" fill="#7BC94F"/><circle cx="8" cy="-34" r="6.5" fill="#7BC94F"/>
    <circle cx="-8" cy="-34" r="3.4" fill="#FFFFFF"/><circle cx="8" cy="-34" r="3.4" fill="#FFFFFF"/>
    <circle cx="-7.4" cy="-34" r="1.8" fill="#1D2433"/><circle cx="8.6" cy="-34" r="1.8" fill="#1D2433"/>
    <path d="M-6 -25 Q0 -21 6 -25" stroke="#3E9150" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
}
/** Bug Feast: the chick in its nest */
export function nestArt() {
  return `
    <path d="M-12 -30 Q-12 -46 2 -46 Q14 -46 14 -32 L14 -24 H-12 Z" fill="#FFD45E"/>
    <circle cx="-3" cy="-38" r="1.8" fill="#1D2433"/><circle cx="7" cy="-38" r="1.8" fill="#1D2433"/>
    <path d="M0 -35 L4 -31 L8 -35 Z" fill="#F08A3C"/>
    <path d="M-10 -48 Q-6 -52 -4 -46" stroke="#F2B33D" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M-26 -24 Q-26 0 0 0 Q26 0 26 -24 Z" fill="#9C6A3D"/>
    <path d="M-25 -18 Q0 -10 25 -18 M-22 -9 Q0 -3 22 -9" stroke="#7B4F2B" stroke-width="2" fill="none"/>
    <path d="M-28 -26 Q0 -32 28 -26 Q28 -21 0 -20 Q-28 -21 -28 -26 Z" fill="#B57C42"/>`;
}

// ---------- stories: an open storybook standing up, its own cover colour and its own picture ----------

const STORY_PICS = {
  // a moon and stars
  stars: `<path d="M-6 -6 A7 7 0 1 0 2 4 A5.5 5.5 0 1 1 -6 -6 Z" fill="#FFC93C"/>
    <path d="${STAR_D}" transform="translate(5 -5) scale(.55)" fill="#FFC93C"/><path d="${STAR_D}" transform="translate(7 4) scale(.35)" fill="#FFC93C"/>`,
  // two ducks side by side
  ducks: [-5, 5].map((x) => `<g transform="translate(${x} 2)"><ellipse rx="4.4" ry="2.8" fill="#FFC93C"/><circle cx="2.8" cy="-2.8" r="2.2" fill="#FFC93C"/><path d="M4.6 -3 L6.8 -2.4 L4.6 -1.8 Z" fill="#F08A3C"/></g>`).join(''),
  // a cake with a slice gone
  cake: `<path d="M-8 4 V-3 H8 V4 Z" fill="#F7B5C9"/><path d="M-8 -3 H8 L8 -1 Q0 1 -8 -1 Z" fill="#FFFFFF"/>
    <path d="M2 -3 L8 -3 L8 4 L2 4 Z" fill="#FFF7EC"/><rect x="-5" y="-8" width="1.4" height="5" fill="#9E7BF0"/><circle cx="-4.3" cy="-9" r="1.3" fill="#FFC93C"/>`,
};
function storyArt(cover, pic) {
  return `
    <path d="M0 -3 L-29 -9 L-29 -13 L0 -7 L29 -13 L29 -9 Z" fill="${cover}"/>
    <path d="M0 -7 L-27 -13 L-27 -46 L0 -40 Z" fill="#FFFFFF" stroke="#E2DED4" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M0 -7 L27 -13 L27 -46 L0 -40 Z" fill="#FFFFFF" stroke="#E2DED4" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M-22 -36 L-5 -32.5 M-22 -30 L-5 -26.5 M-22 -24 L-5 -20.5 M-22 -18 L-11 -15.7" stroke="#D3CEC2" stroke-width="2" stroke-linecap="round"/>
    <g transform="translate(13.5 -25) skewY(-12)">${STORY_PICS[pic]}</g>
    <path d="M0 -40 V-7" stroke="#E2DED4" stroke-width="1.4"/>
    <path d="M17 -44 V-34 L19.5 -36.5 L22 -34 V-45" fill="${cover}"/>`;
}
export const storyStarsArt = () => storyArt('#6FA0D8', 'stars');
export const storyDucksArt = () => storyArt('#9E7BF0', 'ducks');
export const storyCakeArt = () => storyArt('#4FAE5F', 'cake');

// ---------- explainers: a thing you learn with ----------

/** Counting: an abacus */
export function abacusArt() {
  const rows = [[-38, '#E5574B', 4], [-26, '#6FA0D8', 2], [-14, '#FFC93C', 5]];
  return `
    <rect x="-27" y="-48" width="5" height="47" rx="2" fill="#B57C42"/><rect x="22" y="-48" width="5" height="47" rx="2" fill="#B57C42"/>
    ${rows.map(([y]) => `<path d="M-22 ${y} H22" stroke="#C9B08A" stroke-width="1.6"/>`).join('')}
    ${rows.map(([y, c, n]) => Array.from({ length: n }, (_, k) => `<ellipse cx="${-17.5 + k * 7.2}" cy="${y}" rx="3.6" ry="4.4" fill="${c}"/>`).join('')).join('')}
    <rect x="-30" y="-52" width="60" height="6" rx="3" fill="#9C6A3D"/><rect x="-30" y="-5" width="60" height="6" rx="3" fill="#9C6A3D"/>`;
}
/** Even and odd: socks on a washing line, in pairs, and one on its own */
export function socksArt() {
  const sock = (x, c) => `<g transform="translate(${x} -40)"><rect x="-1.2" y="-3" width="2.4" height="5" rx="1" fill="#C98E4E"/>
    <path d="M-3 1 V13 Q-3 18 2 18 H5 Q8.5 18 8.5 14.5 Q8.5 11.5 5 11.5 H3 V1 Z" fill="${c}"/><rect x="-3" y="1" width="6" height="3" fill="#FFFFFF" opacity=".7"/></g>`;
  return `
    <rect x="-29" y="-48" width="3.4" height="48" rx="1.5" fill="#9C6A3D"/><rect x="25.6" y="-48" width="3.4" height="48" rx="1.5" fill="#9C6A3D"/>
    <path d="M-27 -42 Q0 -36 27 -42" stroke="#8A8F96" stroke-width="1.2" fill="none"/>
    ${sock(-19, '#FF8FB0')}${sock(-11, '#FF8FB0')}${sock(0, '#6FA0D8')}${sock(8, '#6FA0D8')}${sock(18, '#FFC93C')}
    <ellipse cx="0" cy="0" rx="24" ry="3" fill="rgba(60, 110, 60, .14)"/>`;
}
/** Subtraction: an apple tree with some apples fallen to the ground */
export function appleTreeArt() {
  return `
    <rect x="-3.5" y="-22" width="7" height="22" rx="2" fill="#9C6A3D"/>
    <circle cx="-12" cy="-30" r="13" fill="#5FB26B"/><circle cx="12" cy="-30" r="13" fill="#5FB26B"/><circle cx="0" cy="-40" r="15" fill="#6DBE68"/>
    ${[[-14, -32], [-4, -44], [9, -38], [15, -26], [0, -28]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#E5574B"/>`).join('')}
    ${[[-20, -3], [21, -2]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#E5574B"/><path d="M${x} ${y - 3.6} l1 -2" stroke="#7B4F2B" stroke-width="1"/>`).join('')}`;
}

// ---------- worksheets: drawn like the worksheet's own game ----------

/** Fruit Catch: a tray catching falling fruit */
export function fruitTrayArt() {
  return `
    <path d="M-24 -3 L24 -3 L20 1 L-20 1 Z" fill="#9C6A3D"/><path d="M-27 -14 L27 -14 L24 -3 L-24 -3 Z" fill="#C98E4E"/>
    <circle cx="-10" cy="-17" r="5.5" fill="#E5574B"/><circle cx="1" cy="-18" r="5.5" fill="#F2A541"/><circle cx="11" cy="-17" r="5" fill="#7BC94F"/>
    <circle cx="-6" cy="-38" r="5.5" fill="#F2A541"/><path d="M-6 -44 l1 -3" stroke="#7B4F2B" stroke-width="1.2"/>
    <circle cx="9" cy="-46" r="5" fill="#E5574B"/><path d="M9 -51 l1 -3" stroke="#7B4F2B" stroke-width="1.2"/>
    <path d="M-6 -31 V-27 M9 -39 V-34" stroke="#C9CDD2" stroke-width="1.6" stroke-linecap="round"/>`;
}
/** Lost & Found: a cardboard box with mittens and a sock peeking out */
export function lostBoxArt() {
  return `
    <path d="M-20 -30 Q-24 -46 -12 -44 Q-8 -36 -10 -30 Z" fill="#9E7BF0"/>
    <path d="M-2 -30 Q-4 -48 6 -48 Q12 -46 10 -30 Z" fill="#FF8FB0"/><path d="M8 -42 Q14 -44 13 -36" stroke="#FF8FB0" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M12 -30 V-40 Q12 -44 16 -44 H19 Q22 -44 22 -40 V-30 Z" fill="#6FA0D8"/>
    <rect x="-26" y="-30" width="52" height="30" rx="2" fill="#D9AE76"/>
    <path d="M-26 -30 L-32 -38 L-6 -38 L0 -30 Z" fill="#E7C08B"/><path d="M26 -30 L32 -38 L6 -38 L0 -30 Z" fill="#E7C08B"/>
    <rect x="-8" y="-20" width="16" height="9" rx="1.5" fill="#FFFFFF" opacity=".85"/>`;
}
/** Pocket Money: a coin purse with coins */
export function purseArt() {
  const coin = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="2.6" fill="#E0A92A"/><ellipse cx="${x}" cy="${y - 1.6}" rx="6" ry="2.6" fill="#FFC93C"/>`;
  return `
    <path d="M-22 -26 Q-24 0 -2 0 Q20 0 18 -26 Z" fill="#E5574B"/>
    <path d="M-22 -26 H18" stroke="#C1342A" stroke-width="2"/>
    <circle cx="-7" cy="-31" r="3.4" fill="#E0A92A"/><circle cx="3" cy="-31" r="3.4" fill="#E0A92A"/>
    <path d="M-22 -26 Q-2 -40 18 -26" stroke="#E0A92A" stroke-width="2.2" fill="none"/>
    ${coin(22, -2)}${coin(22, -6)}${coin(23, -10)}${coin(10, 6 - 6)}`;
}


// ---------- days 4-6 ----------

STORY_PICS.bunny = `<ellipse cx="0" cy="3" rx="6" ry="4.4" fill="#ECE6DC"/><circle cx="4" cy="-2" r="3.6" fill="#ECE6DC"/>
  <ellipse cx="3" cy="-9" rx="1.3" ry="4" fill="#ECE6DC"/><ellipse cx="6" cy="-8.4" rx="1.3" ry="4" fill="#ECE6DC"/><circle cx="5.3" cy="-2.4" r=".7" fill="#1D2433"/>`;
STORY_PICS.blocks = `${Array.from({ length: 5 }, (_, k) => `<rect x="-8" y="${6 - k * 3.2}" width="3.6" height="3" fill="#6FA0D8"/><rect x="-3.6" y="${6 - k * 3.2}" width="3.6" height="3" fill="#6FA0D8"/>`).join('')}
  <rect x="2" y="6" width="3" height="3" fill="#FFC93C"/><rect x="5.4" y="6" width="3" height="3" fill="#FFC93C"/><rect x="3.7" y="2.6" width="3" height="3" fill="#FFC93C"/>`;
STORY_PICS.apples = [[-5, 3], [3, 3], [-1, -4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#E5574B"/><path d="M${x} ${y - 3.6} l1 -2" stroke="#7B4F2B" stroke-width="1"/>`).join('');
export const storyBunnyArt = () => storyArt('#FF8FB0', 'bunny');
export const storyBlocksArt = () => storyArt('#F2A541', 'blocks');
export const storyApplesArt = () => storyArt('#E5574B', 'apples');

/** Skip counting explainer: a chalk hopscotch with a beanbag */
export function hopscotchArt() {
  const sq = (x, y) => `<path d="M${x - 7} ${y} L${x + 7} ${y} L${x + 9} ${y - 7} L${x - 5} ${y - 7} Z" fill="none" stroke="#FFFFFF" stroke-width="2"/>`;
  return `
    <path d="M-30 0 L30 0 L22 -46 L-14 -46 Z" fill="#B9C2CC"/>
    ${sq(-12, -4)}${sq(4, -4)}${sq(-6, -12)}${sq(-10, -20)}${sq(6, -20)}${sq(-2, -28)}${sq(-4, -36)}
    <rect x="1" y="-17" width="7" height="5" rx="1.5" fill="#E5574B"/>
    <path d="M14 -40 l6 -4" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`;
}
/** Place value explainer: tens rods and ones cubes on a tray */
export function tensRodsArt() {
  const rod = (x) => Array.from({ length: 10 }, (_, k) => `<rect x="${x}" y="${-8 - k * 4}" width="6" height="3.6" fill="#7452D9" stroke="#5B3FB8" stroke-width=".6"/>`).join('');
  const cube = (x, y) => `<rect x="${x}" y="${y}" width="6" height="6" fill="#FFC93C" stroke="#E0A92A" stroke-width=".6"/>`;
  return `
    <rect x="-30" y="-6" width="60" height="6" rx="2" fill="#C98E4E"/>
    ${rod(-24)}${rod(-16)}${rod(-8)}
    ${cube(6, -12)}${cube(14, -12)}${cube(22, -12)}${cube(6, -19)}`;
}
/** Addition explainer: a balance with blocks in both pans */
export function balanceArt() {
  return `
    <path d="M-12 0 L12 0 L4 -6 L-4 -6 Z" fill="#8C6244"/><rect x="-2" y="-42" width="4" height="36" fill="#B57C42"/>
    <path d="M-26 -38 H26" stroke="#8C6244" stroke-width="3" stroke-linecap="round"/><circle cx="0" cy="-42" r="3.4" fill="#E0A92A"/>
    <path d="M-26 -38 L-32 -22 M-26 -38 L-20 -22 M26 -38 L20 -22 M26 -38 L32 -22" stroke="#8A8F96" stroke-width="1"/>
    <path d="M-34 -22 H-18 Q-20 -16 -26 -16 Q-32 -16 -34 -22 Z" fill="#B9C2CC"/><path d="M18 -22 H34 Q32 -16 26 -16 Q20 -16 18 -22 Z" fill="#B9C2CC"/>
    <rect x="-31" y="-28" width="5" height="5" fill="#E5574B"/><rect x="-25" y="-28" width="5" height="5" fill="#6FA0D8"/>
    <rect x="21" y="-28" width="5" height="5" fill="#FFC93C"/><rect x="27" y="-28" width="5" height="5" fill="#7BC94F"/>`;
}
/** Bunny Hop worksheet: a bunny by a row of carrots */
export function bunnyCarrotArt() {
  const carrot = (x) => `<path d="M${x - 3} -10 L${x + 3} -10 L${x} 0 Z" fill="#F2802B"/><path d="M${x} -10 l-2 -5 M${x} -10 l2 -5 M${x} -10 v-6" stroke="#5FBF6B" stroke-width="1.6" stroke-linecap="round"/>`;
  return `
    <path d="M-30 0 H30" stroke="#B5A07A" stroke-width="3" stroke-linecap="round"/>
    ${carrot(6)}${carrot(16)}${carrot(26)}
    <ellipse cx="-14" cy="-10" rx="11" ry="9" fill="#ECE6DC"/><circle cx="-6" cy="-22" r="7" fill="#ECE6DC"/>
    <ellipse cx="-9" cy="-37" rx="2.6" ry="8" fill="#ECE6DC"/><ellipse cx="-3" cy="-36" rx="2.6" ry="8" fill="#ECE6DC" transform="rotate(12 -3 -36)"/>
    <ellipse cx="-9" cy="-37" rx="1.1" ry="5.4" fill="#F6B9C4"/><circle cx="-3.6" cy="-23" r="1.2" fill="#1D2433"/><circle cx="0.6" cy="-20.6" r="1.2" fill="#F28AA0"/>
    <circle cx="-25" cy="-12" r="3.4" fill="#FFFFFF"/>`;
}
/** Carnival Toss worksheet: a little booth with a striped awning, bottles and a ball */
export function ringTossArt() {
  const cols = ['#7BC94F', '#6FA0D8', '#9E7BF0'];
  return `
    <rect x="-26" y="-24" width="52" height="24" fill="#FFF1D6"/><rect x="-26" y="-6" width="52" height="6" fill="#C98E4E"/>
    <path d="M-29 -24 L29 -24 L26 -42 L-26 -42 Z" fill="#FFFFFF"/>
    ${[-26, -13, 0, 13].map((x) => `<path d="M${x} -42 L${x + 6.5} -42 L${x + 6.5} -24 L${x} -24 Z" fill="#E5574B"/>`).join('')}
    ${[-14, -4, 6].map((x, k) => `<rect x="${x}" y="-18" width="6" height="12" rx="2" fill="${cols[k]}"/><rect x="${x + 2}" y="-21" width="2" height="4" fill="${cols[k]}"/>`).join('')}
    <circle cx="18" cy="-12" r="4" fill="#FFC93C"/>`;
}
/** Juice Stand worksheet: a stall with a jug and cups */
export function juiceStandArt() {
  return `
    <rect x="-26" y="-22" width="52" height="22" fill="#FFE08A"/><rect x="-28" y="-26" width="56" height="5" rx="2" fill="#E0A92A"/>
    <rect x="-24" y="-48" width="3" height="24" fill="#8C6244"/><rect x="21" y="-48" width="3" height="24" fill="#8C6244"/>
    <path d="M-28 -46 Q-14 -54 0 -46 Q14 -54 28 -46 L28 -42 L-28 -42 Z" fill="#7BC94F"/>
    <path d="M-12 -26 L-12 -38 Q-12 -42 -6 -42 L-2 -42 L-2 -26 Z" fill="#F2A541"/><path d="M-2 -38 Q3 -38 3 -33 Q3 -29 -2 -29" stroke="#F2A541" stroke-width="2" fill="none"/>
    ${[6, 14].map((x) => `<path d="M${x} -26 L${x + 1} -34 L${x + 6} -34 L${x + 7} -26 Z" fill="#FFFFFF"/><rect x="${x + 1.2}" y="-32" width="4.6" height="5" fill="#F2A541"/>`).join('')}
    <circle cx="0" cy="-11" r="5" fill="#F2A541"/><circle cx="-14" cy="-11" r="5" fill="#7BC94F"/><circle cx="14" cy="-11" r="5" fill="#E5574B"/>`;
}
/** At the farm game: stacked hay bales */
export function hayArt() {
  const bale = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-12" width="28" height="12" rx="3" fill="#F0D27A"/><path d="M-6 -12 V0 M6 -12 V0" stroke="#C9A54A" stroke-width="1.6"/><path d="M-12 -8 H12 M-12 -4 H12" stroke="#E2BF62" stroke-width="1"/></g>`;
  return `${bale(-15, 0)}${bale(15, 0)}${bale(0, -12)}${bale(-8, -24)}${bale(8, -24)}`;
}
/** The Cake Rush game: a layered cake with toppings */
export function cakeArt() {
  const cols = ['#6FA0D8', '#7BC94F', '#FFC93C'];
  return `
    <ellipse cx="0" cy="-1" rx="28" ry="4" fill="#E2DED4"/>
    <rect x="-22" y="-18" width="44" height="16" rx="4" fill="#F7B5C9"/><rect x="-16" y="-34" width="32" height="16" rx="4" fill="#FFF1D6"/>
    <path d="M-22 -14 Q-17 -9 -12 -14 Q-7 -9 -2 -14 Q3 -9 8 -14 Q13 -9 18 -14 Q20 -12 22 -14" stroke="#FFFFFF" stroke-width="2.4" fill="none"/>
    <path d="M-16 -30 Q-11 -25 -6 -30 Q-1 -25 4 -30 Q9 -25 16 -30" stroke="#F7B5C9" stroke-width="2.4" fill="none"/>
    <circle cx="-8" cy="-38" r="3.4" fill="#E5574B"/><circle cx="4" cy="-39" r="3.4" fill="#E5574B"/>
    ${[[-12, -36], [10, -36], [-2, -35], [14, -24], [-14, -24], [0, -22]].map(([x, y], k) => `<rect x="${x}" y="${y}" width="3" height="1.4" rx=".7" fill="${cols[k % 3]}" transform="rotate(${k * 37} ${x} ${y})"/>`).join('')}`;
}


// ---------- day 7 (comparing) ----------

STORY_PICS.kites = `<g transform="translate(-4 -2)"><path d="M0 -6 L5 0 L0 6 L-5 0 Z" fill="#E5574B"/><path d="M0 6 q2 3 -1 6" stroke="#8A8F96" stroke-width=".8" fill="none"/></g>
  <g transform="translate(5 2) scale(.7)"><path d="M0 -6 L5 0 L0 6 L-5 0 Z" fill="#6FA0D8"/><path d="M0 6 q2 3 -1 6" stroke="#8A8F96" stroke-width=".8" fill="none"/></g>`;
export const storyKitesArt = () => storyArt('#F2802B', 'kites');
/** Compare & Order explainer: a tall tower and a short tower of blocks, side by side */
export function towersArt() {
  const tower = (x, n, c, d) => Array.from({ length: n }, (_, k) => `<rect x="${x}" y="${-8 - k * 8}" width="14" height="7.4" rx="1.4" fill="${c}" stroke="${d}" stroke-width=".8"/>`).join('');
  return `
    <rect x="-28" y="-2" width="56" height="4" rx="2" fill="#C98E4E"/>
    ${tower(-22, 5, '#6FA0D8', '#5B8DCB')}${tower(8, 2, '#F2A541', '#D88A2E')}
    <path d="M-1 -30 Q3 -36 7 -30" stroke="#8A8F96" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
}
/** Piggy Banks worksheet: a big and a little piggy bank with coins */
export function piggyArt() {
  const pig = (x, s) => `<g transform="translate(${x} 0) scale(${s})"><ellipse cx="0" cy="-12" rx="14" ry="11" fill="#F7B5C9"/>
    <circle cx="13" cy="-13" r="5" fill="#FF8FB0"/><circle cx="12" cy="-14" r="1" fill="#C1527A"/><circle cx="14.6" cy="-14" r="1" fill="#C1527A"/>
    <path d="M2 -22 L6 -28 L8 -21 Z" fill="#FF8FB0"/><circle cx="6" cy="-17" r="1.2" fill="#1D2433"/>
    <rect x="-6" y="-24" width="8" height="2" rx="1" fill="#C1527A"/>
    <rect x="-9" y="-3" width="4" height="4" rx="1" fill="#FF8FB0"/><rect x="5" y="-3" width="4" height="4" rx="1" fill="#FF8FB0"/>
    <path d="M-14 -14 q-5 -2 -4 -6" stroke="#FF8FB0" stroke-width="1.6" fill="none"/></g>`;
  return `${pig(-12, 1.1)}${pig(17, 0.7)}
    <ellipse cx="4" cy="-32" rx="4" ry="1.8" fill="#E0A92A"/><ellipse cx="4" cy="-33.2" rx="4" ry="1.8" fill="#FFC93C"/>`;
}
/** Bridge Path game: a little arched plank bridge over water */
export function plankBridgeArt() {
  return `
    <path d="M-30 0 Q0 -8 30 0 L30 4 Q0 -4 -30 4 Z" fill="#9FD8EE"/>
    <path d="M-28 -2 Q0 -30 28 -2" stroke="#8C6244" stroke-width="3" fill="none"/>
    ${Array.from({ length: 9 }, (_, k) => { const t = k / 8; const x = -24 + 48 * t; const y = -2 - 26 * 4 * t * (1 - t) + 6; return `<rect x="${(x - 3).toFixed(1)}" y="${(y - 8).toFixed(1)}" width="6" height="5" rx="1" fill="${k % 2 ? '#C98E4E' : '#B57C42'}"/>`; }).join('')}
    <path d="M-24 -6 Q0 -40 24 -6" stroke="#9C6A3D" stroke-width="1.6" fill="none"/>
    <path d="M-24 -6 V-14 M24 -6 V-14 M-12 -24 V-30 M12 -24 V-30 M0 -28 V-34" stroke="#9C6A3D" stroke-width="1.6"/>`;
}


// ---------- drawn from the old challenges' own card pictures (no vector art to lift) ----------

/** At the farm: the henhouse with its shelves of eggs, and a hen by the door */
export function henhouseArt() {
  const eggs = [-13.5, -4.5, 4.5, 13.5].flatMap((x) => [-27, -18, -9].map((y) => `<ellipse cx="${x - 4}" cy="${y}" rx="3" ry="3.8" fill="#FFF8EC"/>`)).join('');
  return `
    <rect x="-28" y="-38" width="44" height="38" fill="#F2D6A2"/><path d="M-32 -36 L-6 -54 L20 -36 Z" fill="#E5974F"/>
    <circle cx="-6" cy="-43" r="3" fill="#8C5A3C"/>
    <rect x="-24" y="-33" width="36" height="31" rx="2" fill="#8C5A3C"/>
    <path d="M-24 -22.6 H12 M-24 -13.6 H12" stroke="#6E4A28" stroke-width="1.4"/>
    ${eggs}
    <g transform="translate(24 0)"><ellipse cx="0" cy="-8" rx="8" ry="6.4" fill="#FFFFFF"/><path d="M-8 -10 L-12 -15 L-6 -13 Z" fill="#FFFFFF"/>
      <circle cx="5" cy="-14" r="4.2" fill="#FFFFFF"/><path d="M3 -18.6 Q5 -21 7 -18.6 Q8 -20.6 9 -17.6" fill="#E5574B"/>
      <path d="M8.6 -14.4 L11.6 -13.2 L8.6 -12 Z" fill="#F2A541"/><circle cx="6" cy="-14.8" r=".8" fill="#1D2433"/>
      <path d="M-2 -2 v2 M2 -2 v2" stroke="#F2A541" stroke-width="1.4"/></g>`;
}
/** The Cake Rush: the chef and a raspberry tart */
export function chefTartArt() {
  const berry = (x, y) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#C73A6A"/><circle cx="${x - 1}" cy="${y - 1}" r=".8" fill="#E56B92"/>`;
  return `
    <g transform="translate(-16 0)">
      <path d="M-9 0 Q-10 -12 0 -13 Q10 -12 9 0 Z" fill="#FFFFFF"/><rect x="-2" y="-12" width="4" height="12" fill="#E5574B"/>
      <circle cx="0" cy="-22" r="9" fill="#F2C9A0"/><path d="M-9 -24 Q-10 -32 -2 -32 Q8 -33 9 -24 Q4 -27 -1 -26 Q-6 -27 -9 -24 Z" fill="#5A3A26"/>
      <circle cx="-3" cy="-22" r="1.2" fill="#1D2433"/><circle cx="3" cy="-22" r="1.2" fill="#1D2433"/>
      <path d="M-5 -17 Q-2 -19 0 -17.4 Q2 -19 5 -17 Q2 -15 0 -16 Q-2 -15 -5 -17 Z" fill="#5A3A26"/>
      <path d="M-9 -30 Q-12 -40 -5 -41 Q-2 -48 4 -44 Q11 -45 10 -37 Q12 -32 9 -30 Z" fill="#FFFFFF" stroke="#E2DED4" stroke-width="1"/></g>
    <g transform="translate(14 0)">
      <ellipse cx="0" cy="-5" rx="17" ry="6" fill="#E2A15C"/><ellipse cx="0" cy="-8" rx="15" ry="5" fill="#F7C9A0"/>
      ${berry(-8, -9)}${berry(0, -11)}${berry(8, -9)}${berry(-3, -6)}${berry(5, -6)}
      <path d="M-1 -12 l2 -3 l1.4 2.4" stroke="#7BC94F" stroke-width="1.4" fill="none"/></g>`;
}
/** Bridge Path: the monkey, a dotted path, and the treasure chest on its grassy ledge */
export function monkeyTreasureArt() {
  return `
    <path d="M6 0 V-24 H32 V0 Z" fill="#9C6A3D"/><path d="M4 -24 H34 Q34 -30 28 -30 H10 Q4 -30 4 -24 Z" fill="#6DBE68"/>
    <g transform="translate(19 -30)"><rect x="-10" y="-12" width="20" height="12" rx="2" fill="#B57C42"/><path d="M-10 -12 Q0 -20 10 -12 Z" fill="#C98E4E"/>
      <path d="M-10 -8 H10 M-4 -12 V0 M4 -12 V0" stroke="#E0A92A" stroke-width="1.4"/><rect x="-1.6" y="-9" width="3.2" height="4" rx="1" fill="#FFC93C"/></g>
    <path d="M-10 -26 Q0 -50 10 -46" stroke="#FFFFFF" stroke-width="2.2" stroke-dasharray="3 3" fill="none" stroke-linecap="round"/>
    <g transform="translate(-16 0)">
      <ellipse cx="0" cy="-9" rx="9" ry="9" fill="#8A8F96"/><circle cx="-9" cy="-24" r="3.6" fill="#B9AFA3"/><circle cx="9" cy="-24" r="3.6" fill="#B9AFA3"/>
      <circle cx="0" cy="-24" r="9" fill="#8A8F96"/><ellipse cx="0" cy="-21" rx="6" ry="5" fill="#E9C9A0"/>
      <circle cx="-2.6" cy="-25" r="1.2" fill="#1D2433"/><circle cx="2.6" cy="-25" r="1.2" fill="#1D2433"/>
      <path d="M-2 -19 Q0 -18 2 -19" stroke="#6E4A28" stroke-width="1" fill="none"/>
      <path d="M8 -30 q3 -4 6 -1 q-3 2 -2 4" stroke="#1D2433" stroke-width="1.4" fill="none"/><circle cx="12.4" cy="-23.6" r=".9" fill="#1D2433"/></g>`;
}


// ---------- old CominiLab challenges, drawn from each challenge's own card picture (flat images: nothing to lift) ----------

/** The Cake Rush: the raspberry tart on its own */
export function tartArt() {
  const berry = (x, y) => `<circle cx="${x}" cy="${y}" r="4.4" fill="#C73A6A"/><circle cx="${x - 1.4}" cy="${y - 1.4}" r="1.1" fill="#E56B92"/>`;
  return `
    <ellipse cx="0" cy="-8" rx="28" ry="10" fill="#E2A15C"/><ellipse cx="0" cy="-12" rx="25" ry="8.4" fill="#F7C9A0"/>
    <path d="M-28 -8 Q-24 -3 -20 -6 Q-16 -2 -12 -5 Q-8 -1 -4 -4 Q0 0 4 -4 Q8 -1 12 -5 Q16 -2 20 -6 Q24 -3 28 -8" stroke="#D08A45" stroke-width="2" fill="none"/>
    ${berry(-13, -13)}${berry(-2, -16)}${berry(10, -14)}${berry(-6, -9)}${berry(5, -9)}${berry(16, -10)}
    <path d="M-1 -20 l3 -4 l2 3.4" stroke="#7BC94F" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
}
/** Bridge Path: the treasure chest on its own */
export function chestArt() {
  return `
    <ellipse cx="2" cy="1" rx="24" ry="4" fill="rgba(13, 13, 13, .14)"/>
    <rect x="-22" y="-24" width="44" height="24" rx="3" fill="#B57C42"/><path d="M-22 -24 Q0 -42 22 -24 Z" fill="#C98E4E"/>
    <path d="M-22 -24 H22 M-22 -16 H22" stroke="#8C5A2C" stroke-width="1.6"/>
    <path d="M-12 -24 V0 M12 -24 V0 M-12 -35 V-24 M12 -35 V-24" stroke="#E0A92A" stroke-width="3"/>
    <rect x="-4" y="-20" width="8" height="9" rx="2" fill="#FFC93C" stroke="#E0A92A" stroke-width="1"/><circle cx="0" cy="-16" r="1.4" fill="#8C5A2C"/>
    <circle cx="-17" cy="-28" r="2.2" fill="#FFE08A"/><circle cx="17" cy="-29" r="2.4" fill="#FFE08A"/>`;
}
/** Dinner Prep: the kitchen balance with a bag of flour in each pan */
export function scaleArt() {
  const bag = (x, y, w) => `<path d="M${x - w / 2} ${y} L${x - w / 2 + 2} ${y - w} L${x + w / 2 - 2} ${y - w} L${x + w / 2} ${y} Z" fill="#E7C08B"/><path d="M${x - w / 2 + 2} ${y - w} L${x} ${y - w - 4} L${x + w / 2 - 2} ${y - w} Z" fill="#D9AE76"/>`;
  return `
    <rect x="-12" y="-4" width="24" height="4" rx="1.5" fill="#4FB3A4"/><rect x="-2" y="-46" width="4" height="42" fill="#F2B33D"/>
    <path d="M-30 -42 L30 -38" stroke="#F2B33D" stroke-width="4" stroke-linecap="round"/><circle cx="0" cy="-46" r="3" fill="#E0A92A"/>
    <path d="M-28 -42 L-36 -26 M-28 -42 L-20 -26 M28 -38 L20 -24 M28 -38 L36 -24" stroke="#4A4F57" stroke-width=".8"/>
    ${bag(-28, -27, 12)}${bag(28, -25, 8)}
    <path d="M-38 -27 H-18 Q-20 -18 -28 -18 Q-36 -18 -38 -27 Z" fill="#8CCAF2"/><path d="M18 -25 H38 Q36 -16 28 -16 Q20 -16 18 -25 Z" fill="#8CCAF2"/>`;
}
/** Garden Planning: a round garden in quarters, one quarter sown, and a bunch of grapes */
export function gardenPieArt() {
  return `
    <ellipse cx="-4" cy="-12" rx="28" ry="13" fill="#E9C066"/><ellipse cx="-4" cy="-13" rx="24" ry="10.5" fill="#F0D27A"/>
    <path d="M-28 -13 H20 M-4 -23.5 V-2.5" stroke="#E2B04F" stroke-width="3"/>
    ${[[2, -19], [8, -17], [14, -15], [4, -15], [10, -20], [16, -18]].map(([x, y]) => `<path d="M${x} ${y} l1.4 -2.4" stroke="#8A6BD8" stroke-width="1.6" stroke-linecap="round"/>`).join('')}
    <g transform="translate(22 -30)">${[[0, 0], [5, 0], [-2.5, 4.4], [2.5, 4.4], [7.5, 4.4], [0, 8.8], [5, 8.8], [2.5, 13]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#8A6BD8"/>`).join('')}
      <path d="M3 -2 V-7 Q6 -9 9 -7" stroke="#7BC94F" stroke-width="1.6" fill="none"/></g>`;
}
/** Grammy's Shopping: a green basket of strawberries, a note and coins */
export function strawberryBasketArt() {
  const sb = (x, y) => `<path d="M${x - 4} ${y - 1} Q${x - 4} ${y + 5} ${x} ${y + 6} Q${x + 4} ${y + 5} ${x + 4} ${y - 1} Q${x} ${y - 3} ${x - 4} ${y - 1} Z" fill="#E5574B"/><path d="M${x - 3} ${y - 2} L${x} ${y - 4.4} L${x + 3} ${y - 2} Z" fill="#5FBF6B"/>`;
  return `
    ${[-14, -6, 2, 10].map((x, i) => sb(x, -34 - (i % 2) * 2)).join('')}
    <path d="M-22 -32 H18 L15 -8 H-19 Z" fill="#8FC27A"/><rect x="-24" y="-35" width="44" height="5" rx="2.5" fill="#7AB065"/>
    <path d="M-18 -24 h6 M-8 -24 h6 M2 -24 h6 M-16 -16 h6 M-6 -16 h6 M4 -16 h6" stroke="#6E9E5A" stroke-width="2" stroke-linecap="round"/>
    <g transform="translate(14 0) rotate(-10)"><rect x="-6" y="-12" width="22" height="12" rx="1.5" fill="#F2802B"/><rect x="-3" y="-9.6" width="16" height="7.2" rx="1" fill="none" stroke="#FFC08A" stroke-width="1"/></g>
    <ellipse cx="-16" cy="-2" rx="6" ry="2.6" fill="#E0A92A"/><ellipse cx="-16" cy="-4" rx="6" ry="2.6" fill="#FFC93C"/><ellipse cx="-6" cy="-1" rx="5" ry="2.2" fill="#E0A92A"/><ellipse cx="-6" cy="-3" rx="5" ry="2.2" fill="#FFC93C"/>`;
}
/** Library Books: a bookshelf with bright books standing in a row */
export function bookshelfArt() {
  const book = (x, w, h, c) => `<rect x="${x}" y="${-6 - h}" width="${w}" height="${h}" rx="1.5" fill="${c}"/><rect x="${x + 1.4}" y="${-6 - h + 4}" width="${w - 2.8}" height="3" rx="1" fill="#FFFFFF" opacity=".85"/>`;
  return `
    <rect x="-30" y="-50" width="60" height="50" rx="4" fill="#A85A26"/><rect x="-26" y="-46" width="52" height="40" fill="#6E3410"/>
    <rect x="-26" y="-28" width="52" height="3" fill="#A85A26"/>
    ${book(-24, 8, 16, '#4FAE5F')}${book(-15, 7, 14, '#F2802B')}${book(-7, 9, 17, '#2F6FD0')}${book(3, 7, 13, '#FFC93C')}${book(11, 8, 15, '#E5574B')}
    <path d="M-22 -44 v12 M-14 -44 v14 M-6 -44 v10 M2 -44 v13 M10 -44 v12 M18 -44 v14" stroke="#4FB3A4" stroke-width="4" stroke-linecap="round"/>`;
}
/** The Savings Jar: a glass jar with coins and notes in it */
export function savingsJarArt() {
  const coin = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="#E0A92A"/><circle cx="${x}" cy="${y}" r="3.8" fill="#FFC93C"/>`;
  return `
    <rect x="-16" y="-50" width="32" height="6" rx="2" fill="#B9C2CC"/>
    <path d="M-18 -44 H18 Q22 -44 22 -38 V-6 Q22 0 16 0 H-16 Q-22 0 -22 -6 V-38 Q-22 -44 -18 -44 Z" fill="#DDF2FB" opacity=".9"/>
    <g transform="rotate(-12 -6 -16)"><rect x="-16" y="-20" width="20" height="10" rx="1.5" fill="#F2802B"/></g>
    <g transform="rotate(10 8 -24)"><rect x="-2" y="-30" width="20" height="10" rx="1.5" fill="#F7A25B"/></g>
    ${coin(-10, -6)}${coin(2, -7)}${coin(12, -6)}${coin(-4, -30)}${coin(10, -14)}
    <path d="M-14 -38 V-12" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    ${coin(27, -4)}`;
}
/** Snack Time: the teal snack tray in rows and columns, with little pancake stacks */
export function snackTrayArt() {
  const stack = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="3.4" ry="1.4" fill="#E0A92A"/><ellipse cx="${x}" cy="${y - 2}" rx="3.4" ry="1.4" fill="#F2B33D"/><ellipse cx="${x}" cy="${y - 4}" rx="3.4" ry="1.4" fill="#FFC93C"/>`;
  let cells = '';
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) cells += `<rect x="${-22 + c * 11.5}" y="${-46 + r * 11}" width="9.5" height="9" rx="2" fill="#3FA59E"/>${r < 3 ? stack(-17.2 + c * 11.5, -38.6 + r * 11) : ''}`;
  return `<rect x="-26" y="-50" width="52" height="50" rx="5" fill="#2E8E8A"/>${cells}`;
}
/** Big Party Order: a burger and a sandwich on plates */
export function partyFoodArt() {
  return `
    <ellipse cx="12" cy="-4" rx="18" ry="6" fill="#FFFFFF" stroke="#D9D9D9" stroke-width="1"/>
    <g transform="translate(12 -6)"><path d="M-9 -16 Q-9 -24 0 -24 Q9 -24 9 -16 Z" fill="#F2B36B" stroke="#E5974F" stroke-width="1.6"/>
      <path d="M-10 -15 H10 L9 -12 L5 -10 L1 -12 L-3 -10 L-7 -12 Z" fill="#7BC94F"/></g>
    <ellipse cx="-12" cy="-4" rx="20" ry="6.4" fill="#FFFFFF" stroke="#D9D9D9" stroke-width="1"/>
    <g transform="translate(-12 -6)">
      <path d="M-14 -4 Q-14 0 -10 0 H10 Q14 0 14 -4 Z" fill="#F2802B"/><rect x="-15" y="-9" width="30" height="4" rx="2" fill="#8C4A2A"/>
      <path d="M-15 -11 H15 L13 -8 L8 -6 L3 -9 L-2 -6 L-7 -9 L-12 -6 Z" fill="#7BC94F"/><rect x="-15" y="-14" width="30" height="4" rx="2" fill="#8C4A2A"/>
      <path d="M-14 -15 Q-14 -32 0 -32 Q14 -32 14 -15 Z" fill="#F2802B"/><path d="M-4 -27 l-1 2 M2 -28 l0 2 M6 -26 l1 2" stroke="#C8621A" stroke-width="1.4" stroke-linecap="round"/></g>`;
}
/** The School Order: a long bread loaf on its plate, and a slice of pink cake */
export function breadCakeArt() {
  return `
    <ellipse cx="-6" cy="-6" rx="26" ry="9" fill="#FFFFFF" stroke="#D9D9D9" stroke-width="1"/>
    <g transform="translate(-6 -10) rotate(-14)"><ellipse cx="0" cy="0" rx="22" ry="8" fill="#E5803A"/><ellipse cx="0" cy="-1.6" rx="21" ry="6.6" fill="#F2953F"/>
      <path d="M-12 -2 h6 M-2 -3 h6 M8 -2 h6" stroke="#C8621A" stroke-width="2.4" stroke-linecap="round"/></g>
    <g transform="translate(22 0)"><path d="M-10 0 V-14 L10 -20 V0 Z" fill="#FF8FB0"/><path d="M-10 -14 L10 -20 L4 -22 L-12 -16 Z" fill="#FFC1D3"/>
      <path d="M-10 -5 L10 -9 M-10 -10 L10 -14" stroke="#FFDDE7" stroke-width="2.4"/><circle cx="1" cy="-23" r="3" fill="#E5574B"/></g>`;
}
/** Farmers' Market: an orange crate of fruit */
export function fruitCrateArt() {
  const fruit = [['#4FAE5F', '#E5574B'], ['#F2802B'], ['#E5574B'], ['#8A6BD8'], ['#F2B33D'], ['#4FAE5F', '#E5574B'], ['#F2802B'], ['#E5574B'], ['#7BC94F']];
  let cells = '';
  fruit.forEach((f, k) => {
    const x = -20 + (k % 3) * 14;
    const y = -36 + Math.floor(k / 3) * 11;
    cells += `<rect x="${x - 6}" y="${y - 4.6}" width="12" height="9.6" rx="2" fill="#FFF1DC"/>` + (f.length > 1
      ? `<path d="M${x - 4} ${y + 2} Q${x} ${y - 6} ${x + 4} ${y + 2} Z" fill="${f[0]}"/><path d="M${x - 3} ${y + 1.4} Q${x} ${y - 4} ${x + 3} ${y + 1.4} Z" fill="${f[1]}"/>`
      : `<circle cx="${x}" cy="${y}" r="3.2" fill="${f[0]}"/>`);
  });
  return `<path d="M-30 -24 Q-36 -24 -36 -18" stroke="#E5803A" stroke-width="3" fill="none"/><rect x="-28" y="-44" width="56" height="44" rx="4" fill="#F2953F"/>${cells}
    <rect x="-28" y="-6" width="56" height="6" rx="2" fill="#E5803A"/>`;
}
/** Fair Share: a baking tray of cookies */
export function cookieTrayArt() {
  const cookie = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#7A4A2E"/><circle cx="${x - 2}" cy="${y - 2}" r="1.4" fill="#E5974F"/><circle cx="${x + 2.4}" cy="${y + 1}" r="1.2" fill="#E5974F"/><circle cx="${x - 1}" cy="${y + 3}" r="1" fill="#E5974F"/>`;
  return `
    <path d="M-28 0 L-24 -30 H24 L28 0 Z" fill="#B9C2CC"/><path d="M-25 -2 L-22 -27 H22 L25 -2 Z" fill="#E2E6EA"/>
    ${cookie(-11, -20)}${cookie(11, -20)}${cookie(-12, -8)}${cookie(12, -8)}`;
}
/** Lake Race: a little rowing boat among a shoal of fish */
export function lakeBoatArt() {
  const fish = (x, y) => `<path d="M${x - 6} ${y} Q${x} ${y - 4} ${x + 6} ${y} Q${x} ${y + 4} ${x - 6} ${y} Z" fill="#5FB7DD"/><path d="M${x + 6} ${y} L${x + 10} ${y - 3} L${x + 10} ${y + 3} Z" fill="#5FB7DD"/><circle cx="${x - 3}" cy="${y - .6}" r=".9" fill="#1D2433"/>`;
  return `
    <ellipse cx="0" cy="-14" rx="32" ry="14" fill="#9FD8EE"/>
    ${fish(-20, -20)}${fish(-4, -24)}${fish(14, -20)}${fish(-16, -9)}${fish(18, -9)}
    <g transform="translate(2 -10) rotate(-24)"><path d="M-6 -12 Q0 -16 6 -12 L5 10 Q0 14 -5 10 Z" fill="#8C4A2A"/><path d="M-4 -9 Q0 -12 4 -9 L3 8 Q0 10 -3 8 Z" fill="#B5683A"/>
      <path d="M-4 -2 H4 M-4 4 H4" stroke="#8C4A2A" stroke-width="1.4"/></g>`;
}
