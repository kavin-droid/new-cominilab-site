// Toys: little things on a land that answer a tap (no pedestal and no hard shadow: those mean "a place to go").
// A land lists its toys as { name, type, at, ...options }; each type below draws the toy and says what a tap does.
// `kit` comes from the engine: toy(), blip(), bubble(), moo(), replay(), el(), and the land's rivers + road points
// (for a fish that finds its own spot in the river).

const DUCK = `<g class="cm-duck"><ellipse cx="0" cy="0" rx="8" ry="5" fill="#FFFFFF"/><circle cx="5.5" cy="-4.5" r="3.8" fill="#FFFFFF"/>
  <path d="M8.8 -5 L12.6 -3.9 L8.8 -2.9 Z" fill="#F2A541"/><circle cx="6.4" cy="-5.1" r=".9" fill="#1D2433"/>
  <path d="M-6 -1.5 Q-2 -4 2 -1.5" stroke="#E3E8EC" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>`;
const HEN = `<ellipse cx="1" cy="1" rx="9" ry="3" fill="rgba(60, 110, 60, .16)"/><g class="cm-hen">
  <path d="M2 -2 L2 0 M-3 -2 L-3 0" stroke="#F2A541" stroke-width="1.6" stroke-linecap="round"/>
  <ellipse cx="0" cy="-8" rx="9" ry="7" fill="#FFFFFF"/><path d="M-9 -10 L-14 -15 L-8 -13 Z" fill="#FFFFFF"/>
  <circle cx="6" cy="-14" r="4.6" fill="#FFFFFF"/><path d="M4 -19 Q6 -22 8 -19 Q9 -21 10 -18" fill="#E5574B"/>
  <path d="M10 -14.5 L13.5 -13.2 L10 -12 Z" fill="#F2A541"/><circle cx="7" cy="-15" r=".9" fill="#1D2433"/>
  <path d="M-3 -9 Q1 -6 4 -9" stroke="#E3E8EC" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>`;
const FLY = (c1, c2) => `<g class="cm-flutter"><g class="cm-flap"><ellipse cx="-4" cy="-3" rx="4.6" ry="6" fill="${c1}"/><ellipse cx="-3.4" cy="3" rx="3.2" ry="3.8" fill="${c2}"/></g>
  <g class="cm-flap r"><ellipse cx="4" cy="-3" rx="4.6" ry="6" fill="${c1}"/><ellipse cx="3.4" cy="3" rx="3.2" ry="3.8" fill="${c2}"/></g>
  <rect x="-.8" y="-5" width="1.6" height="10" rx=".8" fill="#5A4A3A"/></g>`;
const FISH = `<ellipse class="cm-fishring" cx="0" cy="0" rx="9" ry="3.5" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
  <g class="cm-fish"><path d="M-9 0 Q0 -7 9 0 Q0 7 -9 0 Z" fill="#F2A541"/><path d="M-9 0 L-15 -5 L-14 0 L-15 5 Z" fill="#E58A2E"/><circle cx="4.5" cy="-1.2" r="1.1" fill="#1D2433"/></g>`;
const shadow = (rx, ry = 3, c = 'rgba(60, 110, 60, .16)') => `<ellipse cx="1" cy="1" rx="${rx}" ry="${ry}" fill="${c}"/>`;

export function makeToys(kit) {
  const { toy, blip, bubble, moo, replay } = kit;
  const chirp = () => { blip(1200, 1800, 0.12, 'sine', 0.05); blip(1500, 2100, 0.1, 'sine', 0.04, 0.12); };
  const splash = (d = 0) => blip(1400, 300, 0.2, 'triangle', 0.05, d);

  return {
    // ---------- meadow ----------
    duck: (s) => toy(s.name, s.at, `<g style="animation-delay:${-(s.delay || 0)}s">${DUCK}</g>`, (inner) => {
      replay(inner, 'cm-duckdive');
      bubble(s.at, 'Quack!', 26);
      blip(620, 380, 0.11, 'square', 0.05);
      blip(620, 380, 0.11, 'square', 0.05, 0.16);
    }, 16),
    fountain: (s) => toy(s.name, s.at, `<circle cx="0" cy="0" r="14" fill="#CDEFF7" stroke="#B9C2CC" stroke-width="3"/>
      <circle cx="0" cy="-2" r="4" fill="#FFFFFF" class="cm-ripple"/>
      <g class="cm-spray">${[-10, -5, 0, 5, 10].map((dx, k) => `<circle cx="0" cy="-4" r="${2.6 - Math.abs(dx) / 8}" fill="#9FD8EE" style="--dx:${dx * 1.6}px;--h:${30 - Math.abs(dx) * 1.2}px;animation-delay:${k * 0.03}s"/>`).join('')}</g>`,
    (inner) => { replay(inner, 'cm-splash'); blip(900, 260, 0.35, 'sine', 0.07); }, 20),
    windmill: (s) => toy(s.name, s.at, `${shadow(16, 4)}
      <path d="M-10 0 L-6 -42 H6 L10 0 Z" fill="#FFF4DE"/><path d="M-8 -42 L0 -52 L8 -42 Z" fill="#C1342A"/>
      <rect x="-3.5" y="-12" width="7" height="12" rx="3" fill="#8C6244"/>
      <g transform="translate(0 -44)"><g class="cm-blades">
        ${[0, 90, 180, 270].map((a) => `<g transform="rotate(${a})"><rect x="-1.2" y="-26" width="2.4" height="24" fill="#B98D5C"/><rect x="1.2" y="-25" width="7" height="17" rx="1.5" fill="#FFFFFF" stroke="#E2D3BC" stroke-width="1"/></g>`).join('')}
        <circle r="3.4" fill="#8C6244"/></g></g>`,
    (inner) => {
      const b = inner.querySelector('.cm-blades');
      b.classList.add('fast');
      clearTimeout(b._t);
      b._t = setTimeout(() => b.classList.remove('fast'), 1800);
      blip(300, 900, 0.5, 'sawtooth', 0.025);
    }, 30),
    hen: (s) => toy(s.name, s.at, s.flip ? `<g transform="scale(-1 1)">${HEN}</g>` : HEN, (inner) => {
      replay(inner.querySelector('.cm-hen'), 'cm-henhop');
      bubble(s.at, 'Cluck!', 36);
      blip(500, 820, 0.07, 'triangle', 0.08);
      blip(560, 900, 0.07, 'triangle', 0.08, 0.1);
    }, 15),
    butterfly: (s) => toy(s.name, s.at, `<g transform="translate(0 -${s.lift || 20})">${FLY(...(s.colors || ['#FF8FB0', '#FFC1D3']))}</g>`, (inner) => { replay(inner, 'cm-loop'); chirp(); }, 16),
    /** a fish: given a spot, or it finds one in the land's first river, away from the roads */
    fish: (s) => {
      let at = s.at;
      if (!at && kit.rivers[0]) {
        const riv = kit.el('path', { d: kit.rivers[0] }, kit.svg);
        const RL = riv.getTotalLength();
        for (const f of [0.3, 0.24, 0.36, 0.2, 0.42, 0.55]) {
          const q = riv.getPointAtLength(RL * f);
          if (q.y > 120 && kit.roadPts.every((p) => Math.hypot(p.x - q.x, p.y - q.y) > 60)) { at = { x: q.x, y: q.y }; break; }
        }
        riv.remove();
      }
      if (!at) return null;
      s.at = at;
      return toy(s.name, at, FISH, (inner) => { replay(inner, 'cm-leap'); blip(500, 1300, 0.18, 'sine', 0.06); splash(0.62); }, 18);
    },
    balloons: (s) => {
      const cols = [['#E5574B', '#F28A80'], ['#6FA0D8', '#A5C6EC'], ['#FFC93C', '#FFE08A']];
      const art = cols.map(([c, l], k) => {
        const x = (k - 1) * 12;
        const y = -40 - (k === 1 ? 8 : 0);
        return `<g class="cm-balloon" data-k="${k}"><path d="M${x} ${y + 9} Q${x * 0.4 + 2} ${(y + 9) / 2} 0 -4" stroke="#8A8F96" stroke-width="1" fill="none"/>
          <ellipse cx="${x}" cy="${y}" rx="8" ry="9.5" fill="${c}"/><ellipse cx="${x - 2.6}" cy="${y - 3.5}" rx="2" ry="3" fill="${l}"/>
          <path d="M${x - 1.6} ${y + 9.6} L${x + 1.6} ${y + 9.6} L${x} ${y + 7.6} Z" fill="${c}"/></g>`;
      }).join('');
      return toy(s.name, s.at, `${shadow(8, 2.5)}<rect x="-1.5" y="-6" width="3" height="6" rx="1.5" fill="#8C6244"/>${art}`, (inner) => {
        const b = [...inner.querySelectorAll('.cm-balloon')].find((x) => !x.classList.contains('cm-float'));
        if (!b) return;
        b.classList.remove('cm-regrow');
        replay(b, 'cm-float');
        blip(380, 760, 0.3, 'sine', 0.06);
        setTimeout(() => { b.classList.remove('cm-float'); replay(b, 'cm-regrow'); }, 2600);
      }, 30);
    },
    cow: (s) => toy(s.name, s.at, `${shadow(17, 3.5)}<g class="cm-cow">
      ${[-11, -5, 3, 8].map((x) => `<rect x="${x}" y="-10" width="3.4" height="10" rx="1.4" fill="#F2F2F2"/><rect x="${x}" y="-2.6" width="3.4" height="2.6" rx="1" fill="#4A4F57"/>`).join('')}
      <path d="M-15 -20 Q-21 -16 -18 -9" stroke="#CFCFCF" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <rect x="-15" y="-25" width="27" height="16" rx="7" fill="#FFFFFF" stroke="#DADADA" stroke-width="1"/>
      <ellipse cx="-7" cy="-19" rx="4.4" ry="3.2" fill="#2B2B33"/><ellipse cx="4" cy="-13.5" rx="3.2" ry="2.4" fill="#2B2B33"/>
      <g class="cm-cowhead"><rect x="9" y="-33" width="13" height="13" rx="5" fill="#FFFFFF" stroke="#DADADA" stroke-width="1"/>
        <path d="M10 -32 L8 -36 M20 -32 L22 -36" stroke="#E9C9A0" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="8.5" cy="-29" rx="3" ry="1.8" fill="#FFFFFF" stroke="#DADADA" stroke-width="1"/>
        <ellipse cx="17.5" cy="-22.5" rx="5.2" ry="3.6" fill="#F6B9C4"/><circle cx="16" cy="-22.5" r=".8" fill="#B26A78"/><circle cx="19" cy="-22.5" r=".8" fill="#B26A78"/>
        <circle cx="14" cy="-28" r="1" fill="#1D2433"/><circle cx="19" cy="-28" r="1" fill="#1D2433"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-cowhead'), 'cm-nod'); bubble({ x: s.at.x + 14, y: s.at.y }, 'Moo!', 48); moo(); }, 22),
    bunny: (s) => toy(s.name, s.at, `<ellipse cx="0" cy="0" rx="12" ry="4.2" fill="#8C6244"/><ellipse cx="0" cy="-.6" rx="9" ry="2.8" fill="#5E4129"/>
      <g class="cm-bunny"><ellipse cx="-6.5" cy="-5" rx="2.6" ry="2.4" fill="#FFFFFF"/><ellipse cx="0" cy="-7" rx="7" ry="6.4" fill="#ECE6DC"/>
        <ellipse cx="2" cy="-24" rx="1.9" ry="6" fill="#ECE6DC"/><ellipse cx="6.4" cy="-23.5" rx="1.9" ry="6" fill="#ECE6DC" transform="rotate(14 6.4 -23.5)"/>
        <ellipse cx="2" cy="-24" rx=".8" ry="4" fill="#F6B9C4"/><circle cx="4.5" cy="-15" r="5.2" fill="#ECE6DC"/>
        <circle cx="6.4" cy="-16" r=".9" fill="#1D2433"/><circle cx="9.3" cy="-14.2" r=".9" fill="#F28AA0"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-bunny'), 'cm-dig'); blip(700, 200, 0.18, 'sine', 0.06); blip(250, 900, 0.18, 'sine', 0.06, 0.95); }, 18),
    hive: (s) => toy(s.name, s.at, `${shadow(10)}<rect x="-2" y="-14" width="4" height="14" fill="#8C6244"/>
      <path d="M-11 -14 Q-12 -34 0 -35 Q12 -34 11 -14 Z" fill="#F6C64E"/>
      <path d="M-10.4 -20 H10.4 M-10 -26 H10 M-7 -31.5 H7" stroke="#E0A92A" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="0" cy="-17" rx="3" ry="2.4" fill="#7A5A3A"/>
      <g transform="translate(0 -26)"><g class="cm-bees">
        ${[[15, 0], [-14, -5], [2, -17]].map(([x, y]) => `<g transform="translate(${x} ${y})"><ellipse rx="3.4" ry="2.4" fill="#FFC93C"/><path d="M-.6 -2.2 V2.2 M1.6 -1.8 V1.8" stroke="#2B2B33" stroke-width="1"/><ellipse cx="-1" cy="-3" rx="2" ry="1.4" fill="#FFFFFF" opacity=".9"/></g>`).join('')}
        <circle r="22" fill="none"/></g></g>`,
    (inner) => {
      const b = inner.querySelector('.cm-bees');
      b.classList.add('buzz');
      clearTimeout(b._t);
      b._t = setTimeout(() => b.classList.remove('buzz'), 1600);
      blip(210, 240, 0.9, 'sawtooth', 0.02);
    }, 22),
    kite: (s) => toy(s.name, s.at, `<rect x="-1.2" y="-6" width="2.4" height="6" fill="#8C6244"/>
      <path d="M0 -5 Q-14 -34 8 -62" stroke="#8A8F96" stroke-width=".9" fill="none"/>
      <g transform="translate(8 -70)"><g class="cm-kite">
        <path d="M0 4 Q-4 14 2 20 Q8 26 3 34" stroke="#8A8F96" stroke-width=".9" fill="none"/>
        <path d="M-2 18 L2 20 L-2 22 Z M5 26 L1 28 L5 30 Z" fill="#FFC93C"/>
        <path d="M0 -12 L9 -1 L0 6 L-9 -1 Z" fill="${s.color || '#9E7BF0'}"/><path d="M0 -12 L0 6 M-9 -1 L9 -1" stroke="#FFFFFF" stroke-width="1.2"/>
        <path d="M0 -12 L9 -1 L0 -1 Z" fill="#FFFFFF" opacity=".25"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-kite'), 'cm-kiteloop'); blip(400, 1100, 0.5, 'sine', 0.04); }, 30),
    dog: (s) => toy(s.name, s.at, `${shadow(11)}<g class="cm-dog">
      <g class="cm-tail"><path d="M-7 -9 Q-13 -13 -11 -19" stroke="#C98E4E" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
      <rect x="-6" y="-5" width="3" height="5" rx="1.2" fill="#B57C42"/><rect x="3" y="-5" width="3" height="5" rx="1.2" fill="#B57C42"/>
      <ellipse cx="0" cy="-8" rx="8.5" ry="5.8" fill="#C98E4E"/>
      <circle cx="7" cy="-15" r="5.6" fill="#C98E4E"/><ellipse cx="4" cy="-15.5" rx="2.2" ry="4.4" fill="#8C6244" transform="rotate(-12 4 -15.5)"/>
      <ellipse cx="11" cy="-13.4" rx="3.4" ry="2.4" fill="#E9C9A0"/><circle cx="13.8" cy="-14" r="1.1" fill="#1D2433"/>
      <circle cx="8.6" cy="-17" r=".95" fill="#1D2433"/><rect x="2.5" y="-11.5" width="8" height="2" rx="1" fill="#E5574B"/></g>`,
    (inner) => {
      replay(inner.querySelector('.cm-dog'), 'cm-henhop');
      bubble(s.at, 'Woof!', 36);
      blip(320, 150, 0.1, 'square', 0.06);
      blip(320, 150, 0.1, 'square', 0.06, 0.18);
    }, 18),
    boat: (s) => toy(s.name, s.at, `<g class="cm-boat"><g class="cm-bob">
      <path d="M-13 -4 H13 L9 2 H-9 Z" fill="${s.color || '#E5574B'}"/><rect x="-.8" y="-27" width="1.6" height="23" fill="#8C6244"/>
      <path d="M1 -26 L1 -6 L13 -6 Z" fill="#FFFFFF"/><path d="M-1 -21 L-1 -6 L-10 -6 Z" fill="#FFF1D6"/>
      <path d="M-12 4 Q-6 2 0 4 Q6 6 12 4" stroke="#FFFFFF" stroke-width="1.4" fill="none" stroke-linecap="round"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-boat'), 'cm-sail'); blip(330, 330, 0.5, 'triangle', 0.06); }, 20),
    birds: (s) => {
      const cols = s.colors || ['#6FA0D8', '#FFC93C', '#E5574B'];
      return toy(s.name, s.at, `<g class="cm-flock">${[[-12, 0, cols[0], 60, -70], [0, -4, cols[1], -40, -80], [11, 1, cols[2], 70, -55]].map(([x, y, c, fx, fy], k) => `
        <g transform="translate(${x} ${y})"><g class="cm-bird" style="--fx:${fx}px;--fy:${fy}px;animation-delay:${k * 0.25}s">
          <ellipse cx="0" cy="-4" rx="4.6" ry="3.4" fill="${c}"/><circle cx="3.6" cy="-7.4" r="2.6" fill="${c}"/>
          <path d="M5.8 -7.8 L8.4 -7 L5.8 -6.2 Z" fill="#F2A541"/><circle cx="4.2" cy="-8" r=".7" fill="#1D2433"/>
          <path d="M-2.6 -5 Q-.6 -2.6 1.6 -5" stroke="#FFFFFF" stroke-width="1" fill="none" opacity=".7"/></g></g>`).join('')}</g>`,
      (inner) => {
        replay(inner.querySelector('.cm-flock'), 'cm-scatter');
        bubble(s.at, 'Tweet!', 30);
        [0, 0.12, 0.24].forEach((d) => blip(2100, 2900, 0.08, 'sine', 0.04, d));
      }, 22);
    },

    // ---------- seaside ----------
    /** a crab on the sand: snaps its claws; a tap and it scuttles sideways and back */
    crab: (s) => toy(s.name, s.at, `${shadow(12, 3, 'rgba(150, 120, 60, .18)')}<g class="cm-crab">
      ${[-1, 1].map((d) => `<path d="M${d * 6} -4 L${d * 13} 0 M${d * 5} -3 L${d * 11} 2" stroke="#D2483C" stroke-width="1.8" stroke-linecap="round"/>`).join('')}
      <ellipse cx="0" cy="-7" rx="10" ry="6.5" fill="#E5574B"/><ellipse cx="-2" cy="-9" rx="5" ry="2.4" fill="#F28A80"/>
      ${[-1, 1].map((d) => `<g class="cm-claw${d > 0 ? ' r' : ''}"><path d="M${d * 8} -10 Q${d * 12} -16 ${d * 13} -19" stroke="#E5574B" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M${d * 13} -19 m${-d * 3.5} -1 a4 4 0 1 0 ${d * 7} 0 L${d * 13} -18 Z" fill="#E5574B"/></g>`).join('')}
      <path d="M-3 -12 V-16 M3 -12 V-16" stroke="#D2483C" stroke-width="1.4"/><circle cx="-3" cy="-17" r="1.8" fill="#FFFFFF"/><circle cx="3" cy="-17" r="1.8" fill="#FFFFFF"/>
      <circle cx="-3" cy="-17" r=".9" fill="#1D2433"/><circle cx="3" cy="-17" r=".9" fill="#1D2433"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-crab'), 'cm-scuttle'); bubble(s.at, 'Snap!', 30); [0, 0.14, 0.28].forEach((d) => blip(1800, 900, 0.05, 'square', 0.04, d)); }, 18),
    /** a seagull on a post: a tap and it flies a loop, squawking */
    gull: (s) => toy(s.name, s.at, `<rect x="-2" y="-14" width="4" height="14" rx="1" fill="#9C6A3D"/><g class="cm-gull">
      <path d="M-9 -20 L-15 -23 L-14 -19 Z" fill="#B9C2CC"/><ellipse cx="0" cy="-19" rx="9" ry="5.6" fill="#FFFFFF"/>
      <path d="M-6 -21 Q0 -26 6 -21 Q0 -19 -6 -21 Z" fill="#B9C2CC"/><circle cx="7" cy="-25" r="4.4" fill="#FFFFFF"/>
      <path d="M10.6 -25.5 L15 -24.4 L10.6 -23.2 Z" fill="#F2A541"/><circle cx="8.2" cy="-26" r=".9" fill="#1D2433"/>
      <path d="M-2 -14 V-12 M2 -14 V-12" stroke="#F2A541" stroke-width="1.4"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-gull'), 'cm-loop'); bubble(s.at, 'Squawk!', 40); blip(1100, 700, 0.18, 'sawtooth', 0.03); blip(1200, 760, 0.16, 'sawtooth', 0.03, 0.22); }, 18),
    /** a dolphin in the sea: its fin glides about; a tap and it leaps */
    dolphin: (s) => toy(s.name, s.at, `<ellipse class="cm-fishring" cx="0" cy="0" rx="14" ry="4.5" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
      <path class="cm-fin" d="M-4 0 Q2 -10 6 -11 Q4 -5 6 0 Z" fill="#5B8DCB"/>
      <g class="cm-dolphin"><path d="M-16 0 Q-4 -12 14 -4 Q18 -2 20 0 Q14 1 10 1 Q-2 6 -16 0 Z" fill="#6FA0D8"/>
        <path d="M-2 -6 L3 -14 L5 -6 Z" fill="#5B8DCB"/><path d="M-16 0 L-23 -5 L-21 0 L-23 5 Z" fill="#5B8DCB"/>
        <path d="M-8 1 Q2 4 12 0" stroke="#D7E7F8" stroke-width="2" fill="none"/><circle cx="12" cy="-4.5" r="1" fill="#1D2433"/></g>`,
    (inner) => { replay(inner, 'cm-bigleap'); bubble(s.at, 'Splash!', 46); blip(400, 1100, 0.25, 'sine', 0.06); splash(0.85); }, 24),
    /** a sandcastle: a tap and its flag shoots up and it sparkles */
    sandcastle: (s) => toy(s.name, s.at, `${shadow(18, 3.5, 'rgba(150, 120, 60, .18)')}<g class="cm-castle">
      <rect x="-16" y="-14" width="32" height="14" fill="#E8CB8C"/><rect x="-18" y="-26" width="10" height="26" fill="#E2C07E"/><rect x="8" y="-26" width="10" height="26" fill="#E2C07E"/>
      <rect x="-6" y="-32" width="12" height="18" fill="#EBD199"/>
      ${[-18, -14, -10, 8, 12, 16].map((x) => `<rect x="${x}" y="-29" width="2.6" height="3.4" fill="#E2C07E"/>`).join('')}
      <path d="M-3 0 V-7 Q0 -10 3 -7 V0 Z" fill="#B8935A"/>
      <g class="cm-flag"><path d="M0 -32 V-44" stroke="#8C6244" stroke-width="1.2"/><path d="M0 -44 L9 -41 L0 -38 Z" fill="#E5574B"/></g>
      ${[[-12, -6], [12, -8], [-2, -22]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1" fill="#C9A86A"/>`).join('')}</g>`,
    (inner) => { replay(inner.querySelector('.cm-castle'), 'cm-castlepop'); kit.burst({ x: s.at.x, y: s.at.y - 30 }, 0.8); blip(600, 1200, 0.2, 'triangle', 0.06); }, 22),
    /** the lighthouse on the headland: its lamp glows; a tap sweeps the beam and blows the horn */
    lighthouse: (s) => toy(s.name, s.at, `${shadow(16, 4, 'rgba(60, 80, 90, .18)')}
      <path d="M-11 0 L-7 -54 H7 L11 0 Z" fill="#FFFFFF"/>
      <path d="M-10 -12 L10 -12 L9.4 -22 L-9.4 -22 Z M-8.6 -34 L8.6 -34 L8 -44 L-8 -44 Z" fill="#E5574B"/>
      <rect x="-3" y="-10" width="6" height="10" rx="2.4" fill="#6B7684"/>
      <rect x="-9" y="-58" width="18" height="4" rx="1" fill="#4A4F57"/><rect x="-6" y="-68" width="12" height="10" fill="#FFF3C4"/>
      <path d="M-8 -68 L0 -76 L8 -68 Z" fill="#E5574B"/>
      <g transform="translate(0 -63)"><g class="cm-beam"><path d="M0 0 L70 -14 L70 14 Z" fill="#FFF3C4" opacity=".55"/><path d="M0 0 L-70 -14 L-70 14 Z" fill="#FFF3C4" opacity=".55"/></g></g>
      <circle cx="0" cy="-63" r="5" fill="#FFE08A" class="cm-lamp"/>`,
    (inner) => { replay(inner.querySelector('.cm-beam'), 'cm-sweep'); blip(110, 100, 1.1, 'sawtooth', 0.05); }, 26),
    /** a beach ball: a tap and it bounces */
    ball: (s) => toy(s.name, s.at, `${shadow(9, 2.6, 'rgba(150, 120, 60, .2)')}<g class="cm-ball"><circle cx="0" cy="-9" r="9" fill="#FFFFFF"/>
      <path d="M0 -18 A9 9 0 0 1 9 -9 L0 -9 Z" fill="#E5574B"/><path d="M0 0 A9 9 0 0 1 -9 -9 L0 -9 Z" fill="#E5574B"/>
      <path d="M-9 -9 A9 9 0 0 1 0 -18 L0 -9 Z" fill="#6FA0D8"/><path d="M9 -9 A9 9 0 0 1 0 0 L0 -9 Z" fill="#FFC93C"/>
      <circle cx="0" cy="-9" r="2" fill="#FFFFFF"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-ball'), 'cm-bounce3'); [0, 0.35, 0.62].forEach((d, k) => blip(300 - k * 40, 180, 0.08, 'sine', 0.08, d)); }, 16),

    // ---------- snowy valley ----------
    /** a snowman: a tap and its hat hops off and lands again */
    snowman: (s) => toy(s.name, s.at, `${shadow(14, 3.5, 'rgba(90, 120, 150, .18)')}
      <circle cx="0" cy="-10" r="11" fill="#FFFFFF" stroke="#D5E3EE" stroke-width="1.2"/><circle cx="0" cy="-27" r="8" fill="#FFFFFF" stroke="#D5E3EE" stroke-width="1.2"/>
      <path d="M-10 -18 L-19 -24 M10 -18 L19 -25" stroke="#8C6244" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="0" cy="-13" r="1.2" fill="#4A4F57"/><circle cx="0" cy="-8" r="1.2" fill="#4A4F57"/>
      <path d="M-8 -21 Q0 -17 8 -21 L7 -18 Q0 -15 -7 -18 Z" fill="#E5574B"/><path d="M5 -20 L7 -12 L3 -12 Z" fill="#E5574B"/>
      <circle cx="-3" cy="-29" r="1" fill="#1D2433"/><circle cx="3" cy="-29" r="1" fill="#1D2433"/><path d="M0 -27 L6 -25.6 L0 -25 Z" fill="#F08A3C"/>
      <g class="cm-hat"><rect x="-6" y="-44" width="12" height="9" rx="1" fill="#2B2B33"/><rect x="-8.5" y="-36" width="17" height="2.4" rx="1" fill="#2B2B33"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-hat'), 'cm-hathop'); bubble(s.at, 'Brr!', 54); blip(500, 900, 0.15, 'triangle', 0.06); blip(900, 500, 0.15, 'triangle', 0.06, 0.45); }, 20),
    /** a penguin: waddles; a tap and it slides on its tummy across the ice and back */
    penguin: (s) => toy(s.name, s.at, `${shadow(8, 2.4, 'rgba(90, 120, 150, .2)')}<g class="cm-penguin"${s.flip ? ' transform="scale(-1 1)"' : ''}><g class="cm-waddle">
      <ellipse cx="0" cy="-10" rx="7" ry="10" fill="#2B2B33"/><ellipse cx="1" cy="-8" rx="4.6" ry="7.4" fill="#FFFFFF"/>
      <circle cx="0" cy="-21" r="5.2" fill="#2B2B33"/><circle cx="2" cy="-22" r="1.6" fill="#FFFFFF"/><circle cx="2.3" cy="-22" r=".8" fill="#1D2433"/>
      <path d="M4.6 -21 L8.4 -20 L4.6 -19 Z" fill="#F2A541"/><path d="M-6 -12 L-9 -5" stroke="#2B2B33" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M-3 0 h3 M1 0 h3" stroke="#F2A541" stroke-width="1.8" stroke-linecap="round"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-penguin'), s.flip ? 'cm-slide-l' : 'cm-slide'); bubble(s.at, 'Wheee!', 32); blip(900, 400, 0.6, 'sine', 0.05); }, 16),
    /** a deer in the trees: a tap and it lifts its head and hops */
    deer: (s) => toy(s.name, s.at, `${shadow(13, 3, 'rgba(90, 120, 150, .18)')}<g class="cm-deer">
      ${[-9, -4, 4, 9].map((x) => `<rect x="${x}" y="-12" width="2.4" height="12" rx="1" fill="#9C6A3D"/>`).join('')}
      <ellipse cx="0" cy="-15" rx="12" ry="6.4" fill="#C98E4E"/><circle cx="-7" cy="-17" r="1.2" fill="#FFFFFF"/><circle cx="-2" cy="-14" r="1.2" fill="#FFFFFF"/><circle cx="3" cy="-17" r="1.2" fill="#FFFFFF"/>
      <path d="M-12 -17 L-15 -20" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
      <g class="cm-deerhead"><path d="M8 -18 L12 -27" stroke="#C98E4E" stroke-width="4.6" stroke-linecap="round"/>
        <ellipse cx="14" cy="-29" rx="5" ry="3.6" fill="#C98E4E"/><circle cx="18.6" cy="-28.6" r="1.2" fill="#1D2433"/><circle cx="14.2" cy="-30" r=".9" fill="#1D2433"/>
        <path d="M12 -32 L10 -39 M10 -36 L7 -38 M15 -32 L17 -39 M17 -36 L20 -38" stroke="#8C6244" stroke-width="1.4" stroke-linecap="round"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-deer'), 'cm-deerhop'); blip(500, 700, 0.12, 'triangle', 0.05); }, 20),
    /** a sled at the top of a little slope: a tap and it whizzes down and is pulled back up */
    sled: (s) => toy(s.name, s.at, `<path d="M-34 6 Q-10 -2 30 -30 L34 -30 Q0 8 -34 12 Z" fill="#FFFFFF" stroke="#D5E3EE" stroke-width="1.2"/>
      <g transform="translate(24 -28) rotate(28)"><g class="cm-sledride">
        <rect x="-10" y="-7" width="20" height="6" rx="2" fill="#E5574B"/><path d="M-12 1 H11 Q14 1 14 -2" stroke="#8C6244" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M-6 -1 V1 M5 -1 V1" stroke="#8C6244" stroke-width="1.4"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-sledride'), 'cm-sledgo'); blip(900, 300, 0.9, 'sine', 0.05); }, 28),
    /** an igloo: a tap and a little penguin peeks out of the door */
    igloo: (s) => toy(s.name, s.at, `${shadow(20, 4, 'rgba(90, 120, 150, .18)')}
      <g class="cm-peek"><circle cx="13" cy="-9" r="4" fill="#2B2B33"/><circle cx="14.4" cy="-10" r="1.2" fill="#FFFFFF"/><path d="M16.6 -9 L19.4 -8.4 L16.6 -7.6 Z" fill="#F2A541"/></g>
      <path d="M-22 0 Q-22 -26 0 -26 Q22 -26 22 0 Z" fill="#FFFFFF" stroke="#D5E3EE" stroke-width="1.2"/>
      <path d="M-20 -9 H8 M-14 -18 H14 M-8 -9 V-18 M2 -18 V-25 M-4 0 V-9" stroke="#D5E3EE" stroke-width="1.2"/>
      <path d="M8 0 Q8 -12 15 -12 Q22 -12 22 0 Z" fill="#FFFFFF" stroke="#D5E3EE" stroke-width="1.2"/><path d="M11 0 Q11 -8 15 -8 Q19 -8 19 0 Z" fill="#5E6B7A"/>`,
    (inner) => { replay(inner.querySelector('.cm-peek'), 'cm-peekout'); blip(700, 1200, 0.12, 'sine', 0.05, 0.3); }, 24),


    // ---------- jungle ----------
    /** a monkey hanging from a branch: swings; a tap and it swings right round, chattering */
    monkey: (s) => toy(s.name, s.at, `${shadow(18, 4)}
      <rect x="-4" y="-60" width="8" height="60" rx="3" fill="#8C6244"/>
      <path d="M2 -48 Q20 -50 34 -46" stroke="#8C6244" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="-4" cy="-66" r="16" fill="#3E9150"/><circle cx="12" cy="-62" r="12" fill="#4FAE5F"/><circle cx="34" cy="-50" r="8" fill="#4FAE5F"/>
      <g transform="translate(26 -46)"><g class="cm-monkey">
        <path d="M0 0 V10" stroke="#9C6A3D" stroke-width="2.4" stroke-linecap="round"/>
        <ellipse cx="0" cy="16" rx="6" ry="7" fill="#9C6A3D"/><ellipse cx="0" cy="17.5" rx="3.6" ry="4.4" fill="#E9C9A0"/>
        <circle cx="0" cy="7" r="5.4" fill="#9C6A3D"/><circle cx="-5" cy="6" r="2.2" fill="#E9C9A0"/><circle cx="5" cy="6" r="2.2" fill="#E9C9A0"/>
        <ellipse cx="0" cy="8.4" rx="3.6" ry="2.8" fill="#E9C9A0"/><circle cx="-1.6" cy="6.4" r=".8" fill="#1D2433"/><circle cx="1.6" cy="6.4" r=".8" fill="#1D2433"/>
        <path d="M5 20 Q12 24 9 30" stroke="#9C6A3D" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-monkey'), 'cm-swinground'); bubble({ x: s.at.x + 26, y: s.at.y - 20 }, 'Ooh ooh!', 40); [0, 0.12, 0.24, 0.36].forEach((d) => blip(900, 1300, 0.07, 'square', 0.035, d)); }, 30),
    /** a parrot on a perch: bobs; a tap and it flaps and squawks */
    parrot: (s) => toy(s.name, s.at, `${shadow(8)}<rect x="-1.5" y="-26" width="3" height="26" fill="#8C6244"/><rect x="-10" y="-28" width="20" height="3" rx="1.5" fill="#8C6244"/>
      <g class="cm-parrot"><path d="M-2 -30 L-6 -16 L-1 -20 Z" fill="#6FA0D8"/>
        <ellipse cx="0" cy="-36" rx="6" ry="8" fill="${s.body || '#E5574B'}"/><g class="cm-pwing"><path d="M-4 -40 Q-10 -32 -6 -26 L-1 -32 Z" fill="${s.wing || '#FFC93C'}"/></g>
        <circle cx="2" cy="-44" r="5" fill="${s.body || '#E5574B'}"/><circle cx="3.6" cy="-45" r="1.6" fill="#FFFFFF"/><circle cx="3.8" cy="-45" r=".8" fill="#1D2433"/>
        <path d="M6 -45 Q10 -44 8 -40 L6 -42 Z" fill="#4A4F57"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-parrot'), 'cm-flapjump'); bubble(s.at, 'Squawk!', 58); blip(1300, 800, 0.15, 'sawtooth', 0.035); blip(1400, 900, 0.12, 'sawtooth', 0.03, 0.18); }, 18),
    /** an elephant by the water: a tap and it lifts its trunk and sprays */
    elephant: (s) => toy(s.name, s.at, `${shadow(20, 4)}<g class="cm-elephant">
      ${[-12, -5, 4, 11].map((x) => `<rect x="${x}" y="-12" width="5" height="12" rx="2" fill="#A9B4C2"/>`).join('')}
      <ellipse cx="0" cy="-18" rx="17" ry="11" fill="#B9C2CC"/><path d="M-17 -20 Q-22 -16 -20 -10" stroke="#A9B4C2" stroke-width="2" fill="none"/>
      <circle cx="15" cy="-24" r="9" fill="#B9C2CC"/><ellipse cx="9" cy="-24" rx="6" ry="8" fill="#A9B4C2"/>
      <circle cx="18" cy="-27" r="1.1" fill="#1D2433"/>
      <g class="cm-trunk"><path d="M22 -21 Q27 -14 25 -6" stroke="#B9C2CC" stroke-width="4.6" fill="none" stroke-linecap="round"/></g>
      <g class="cm-spray2">${[0, 1, 2, 3, 4].map((k) => `<circle cx="28" cy="-38" r="${2.4 - k * 0.2}" fill="#9FD8EE" style="--dx:${6 + k * 5}px;--h:${12 + k * 3}px;animation-delay:${k * 0.05}s"/>`).join('')}</g></g>`,
    (inner) => { replay(inner.querySelector('.cm-elephant'), 'cm-trumpet'); bubble({ x: s.at.x + 10, y: s.at.y }, 'Toot!', 46); blip(300, 600, 0.5, 'sawtooth', 0.04); }, 24),
    /** a hippo in the river: just its eyes and ears show; a tap and it pops up and yawns */
    hippo: (s) => toy(s.name, s.at, `<ellipse class="cm-fishring" cx="0" cy="0" rx="14" ry="4.5" fill="none" stroke="#FFFFFF" stroke-width="1.6"/>
      <g class="cm-hippo"><ellipse cx="0" cy="-2" rx="13" ry="8" fill="#B79BF0"/><ellipse cx="0" cy="2" rx="10" ry="4" fill="#C9B6F7"/>
        <circle cx="-5" cy="-7" r="2.6" fill="#FFFFFF"/><circle cx="5" cy="-7" r="2.6" fill="#FFFFFF"/><circle cx="-5" cy="-7" r="1.2" fill="#1D2433"/><circle cx="5" cy="-7" r="1.2" fill="#1D2433"/>
        <circle cx="-9" cy="-10" r="2" fill="#9E7BF0"/><circle cx="9" cy="-10" r="2" fill="#9E7BF0"/><circle cx="-3" cy="0" r="1" fill="#7C5BC9"/><circle cx="3" cy="0" r="1" fill="#7C5BC9"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-hippo'), 'cm-popup'); blip(150, 90, 0.4, 'sine', 0.08); splash(0.5); }, 18),

    // ---------- desert ----------
    /** a camel: a tap and it turns its head and grumbles */
    camel: (s) => toy(s.name, s.at, `${shadow(18, 4, 'rgba(150, 110, 60, .2)')}<g class="cm-camel">
      ${[-12, -6, 6, 12].map((x) => `<rect x="${x}" y="-14" width="3" height="14" rx="1.2" fill="#C99A5E"/>`).join('')}
      <ellipse cx="0" cy="-17" rx="16" ry="7" fill="#E2B479"/><path d="M-10 -22 Q-6 -34 0 -22 Q4 -32 9 -22 Z" fill="#E2B479"/>
      <path d="M-15 -18 Q-20 -14 -18 -8" stroke="#C99A5E" stroke-width="2" fill="none"/>
      <g class="cm-camelhead"><path d="M13 -20 Q20 -26 18 -36" stroke="#E2B479" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="22" cy="-37" rx="6" ry="3.6" fill="#E2B479"/><circle cx="21" cy="-39" r=".9" fill="#1D2433"/><path d="M17 -40 l-1 -3" stroke="#C99A5E" stroke-width="1.6"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-camelhead'), 'cm-nod'); bubble({ x: s.at.x + 16, y: s.at.y }, 'Hrrmph!', 52); blip(140, 110, 0.5, 'sawtooth', 0.05); }, 22),
    /** a hot-air balloon floating over the canyon: a tap and it puffs and rises */
    hotair: (s) => toy(s.name, s.at, `<g class="cm-hotair"><g class="cm-float2">
      <path d="M-20 -60 Q-20 -86 0 -86 Q20 -86 20 -60 Q20 -46 6 -36 H-6 Q-20 -46 -20 -60 Z" fill="#E5574B"/>
      <path d="M-8 -84 Q-12 -60 -6 -36 H-1 Q-4 -60 -2 -86 Z M2 -86 Q4 -60 1 -36 H6 Q12 -60 8 -84 Z" fill="#FFC93C"/>
      <path d="M-6 -36 L-5 -26 M6 -36 L5 -26" stroke="#8C6244" stroke-width="1"/><rect x="-6" y="-26" width="12" height="9" rx="2" fill="#B57C42"/>
      <g class="cm-flame"><path d="M0 -30 Q-3 -34 0 -40 Q3 -34 0 -30 Z" fill="#F2A541"/></g></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-hotair'), 'cm-rise'); blip(200, 120, 0.6, 'sawtooth', 0.025); }, 30),
    /** meerkats by their burrow: a tap and they duck down, then pop back up one by one */
    meerkat: (s) => toy(s.name, s.at, `<ellipse cx="0" cy="0" rx="18" ry="5" fill="#B88A55"/><ellipse cx="0" cy="-.6" rx="14" ry="3.4" fill="#7A5A3A"/>
      ${[-8, 0, 8].map((x, k) => `<g transform="translate(${x} 0)"><g class="cm-meerkat" style="animation-delay:${k * 0.12}s">
        <ellipse cx="0" cy="-9" rx="3.8" ry="8" fill="#D9B07A"/><ellipse cx="0" cy="-7" rx="2.2" ry="5" fill="#EFD3A4"/>
        <circle cx="0" cy="-19" r="3.6" fill="#D9B07A"/><circle cx="-1.4" cy="-19.6" r=".8" fill="#1D2433"/><circle cx="1.4" cy="-19.6" r=".8" fill="#1D2433"/>
        <circle cx="0" cy="-17.6" r=".7" fill="#1D2433"/></g></g>`).join('')}`,
    (inner) => { replay(inner, 'cm-duckdown'); [0, 0.9, 1.05, 1.2].forEach((d, k) => blip(k ? 1200 : 600, k ? 1600 : 300, 0.08, 'sine', 0.05, d)); }, 22),
    /** a tumbleweed: a tap and it rolls away and back */
    tumbleweed: (s) => toy(s.name, s.at, `${shadow(10, 2.6, 'rgba(150, 110, 60, .2)')}<g class="cm-tumble"><circle cx="0" cy="-10" r="10" fill="none" stroke="#B88A55" stroke-width="2.2"/>
      <path d="M-8 -14 Q0 -4 8 -16 M-9 -8 Q0 -18 7 -4 M-3 -19 Q2 -10 -4 -1 M3 -19 Q-2 -12 5 -2" stroke="#C99A5E" stroke-width="1.6" fill="none"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-tumble'), 'cm-roll'); blip(400, 200, 0.6, 'triangle', 0.03); }, 16),

    // ---------- autumn ----------
    /** a squirrel by a tree: a tap and it hops with its acorn */
    squirrel: (s) => toy(s.name, s.at, `${shadow(10)}<g class="cm-squirrel">
      <path d="M-4 -6 Q-18 -10 -14 -26 Q-10 -34 -4 -28 Q-12 -20 -2 -12 Z" fill="#D2733A"/>
      <ellipse cx="2" cy="-8" rx="6" ry="7" fill="#E08A4A"/><ellipse cx="3" cy="-7" rx="3.4" ry="4.4" fill="#F5D2AE"/>
      <circle cx="5" cy="-17" r="4.6" fill="#E08A4A"/><path d="M3 -21 L4 -25 L6 -21 Z" fill="#E08A4A"/><circle cx="6.6" cy="-17.6" r=".9" fill="#1D2433"/>
      <ellipse cx="8" cy="-10" rx="2.6" ry="3" fill="#B57C42"/><path d="M6 -12.6 H10" stroke="#7B4F2B" stroke-width="1.6" stroke-linecap="round"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-squirrel'), 'cm-henhop'); bubble(s.at, 'Chitter!', 34); [0, 0.08, 0.16, 0.24].forEach((d) => blip(2200, 2600, 0.04, 'square', 0.03, d)); }, 16),
    /** an owl on a branch: blinks; a tap and it turns its head and hoots */
    owl: (s) => toy(s.name, s.at, `<rect x="-24" y="-30" width="48" height="5" rx="2.5" fill="#8C6244"/><g class="cm-owl">
      <ellipse cx="0" cy="-42" rx="10" ry="12" fill="#9C6A3D"/><ellipse cx="0" cy="-38" rx="6" ry="7" fill="#E9C9A0"/>
      <path d="M-9 -52 L-7 -58 L-3 -53 Z M9 -52 L7 -58 L3 -53 Z" fill="#9C6A3D"/>
      <g class="cm-blink"><circle cx="-4" cy="-48" r="3.6" fill="#FFFFFF"/><circle cx="4" cy="-48" r="3.6" fill="#FFFFFF"/><circle cx="-4" cy="-48" r="1.8" fill="#1D2433"/><circle cx="4" cy="-48" r="1.8" fill="#1D2433"/></g>
      <path d="M-1.4 -45 L1.4 -45 L0 -42 Z" fill="#F2A541"/><path d="M-3 -30 v-2 M3 -30 v-2" stroke="#F2A541" stroke-width="1.6"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-owl'), 'cm-headturn'); bubble({ x: s.at.x, y: s.at.y - 20 }, 'Hoo hoo!', 46); blip(420, 380, 0.3, 'sine', 0.08); blip(420, 360, 0.4, 'sine', 0.08, 0.4); }, 22),
    /** a hedgehog: a tap and it curls into a ball and rolls a little */
    hedgehog: (s) => toy(s.name, s.at, `${shadow(11)}<g class="cm-hedgehog">
      <path d="M-12 -2 Q-14 -16 -2 -18 Q8 -18 10 -8 L13 -5 Q12 -2 8 -2 Z" fill="#8C6244"/>
      <path d="M-12 -6 l-3 -2 M-10 -12 l-3 -4 M-6 -16 l-1 -4 M-1 -18 l1 -4 M4 -17 l3 -3" stroke="#6E4A28" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M8 -8 Q12 -6 13 -5 Q12 -2 8 -2 Z" fill="#E9C9A0"/><circle cx="13" cy="-5" r="1.2" fill="#1D2433"/><circle cx="8.6" cy="-8" r=".8" fill="#1D2433"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-hedgehog'), 'cm-curl'); blip(600, 300, 0.2, 'triangle', 0.05); }, 16),
    /** a scarecrow in the pumpkin patch: a tap and it waves and the crows fly off */
    scarecrow: (s) => toy(s.name, s.at, `${shadow(12)}<rect x="-1.5" y="-46" width="3" height="46" fill="#8C6244"/>
      <g class="cm-scarearms"><path d="M-20 -32 H20" stroke="#8C6244" stroke-width="3" stroke-linecap="round"/>
        <path d="M-20 -32 l-4 3 M-20 -32 l-4 -2 M20 -32 l4 3 M20 -32 l4 -2" stroke="#F0D27A" stroke-width="2" stroke-linecap="round"/></g>
      <path d="M-9 -36 H9 L7 -16 H-7 Z" fill="#6FA0D8"/><rect x="-3" y="-30" width="6" height="5" fill="#E5574B"/>
      <circle cx="0" cy="-42" r="6" fill="#F0D27A"/><circle cx="-2" cy="-43" r=".9" fill="#1D2433"/><circle cx="2" cy="-43" r=".9" fill="#1D2433"/>
      <path d="M-9 -46 H9 L4 -54 H-4 Z" fill="#8C6244"/>
      <g class="cm-crows">${[[-16, -50], [16, -52]].map(([x, y]) => `<g transform="translate(${x} ${y})"><ellipse rx="4" ry="2.6" fill="#2B2B33"/><circle cx="3" cy="-2" r="2" fill="#2B2B33"/><path d="M4.6 -2 l2 .6 -2 .6 Z" fill="#F2A541"/></g>`).join('')}</g>`,
    (inner) => { replay(inner, 'cm-scare'); bubble(s.at, 'Caw caw!', 62); [0, 0.2].forEach((d) => blip(700, 500, 0.12, 'sawtooth', 0.04, d)); }, 24),
    /** a pile of leaves: a tap and the leaves fly up and drift down */
    leafpile: (s) => toy(s.name, s.at, `<ellipse cx="0" cy="-3" rx="20" ry="7" fill="#D2733A"/><ellipse cx="-6" cy="-6" rx="10" ry="5" fill="#E5974F"/><ellipse cx="7" cy="-7" rx="9" ry="5" fill="#C1342A" opacity=".8"/>
      <g class="cm-leaves">${[[-14, -30, '#E5974F'], [-4, -40, '#C1342A'], [6, -34, '#F2B33D'], [14, -42, '#D2733A'], [0, -26, '#E5574B'], [-10, -46, '#F2B33D']].map(([x, y, c], k) => `<path d="M0 -3 Q3 0 0 3 Q-3 0 0 -3 Z" fill="${c}" style="--dx:${x}px;--h:${-y}px;animation-delay:${k * 0.04}s"/>`).join('')}</g>`,
    (inner) => { replay(inner, 'cm-leafburst'); blip(2000, 400, 0.5, 'triangle', 0.02); }, 20),
    /** the water mill's wheel: turns; a tap and it spins fast */
    waterwheel: (s) => toy(s.name, s.at, `${shadow(18, 4)}<rect x="-6" y="-40" width="26" height="40" fill="#E8D3B0"/><path d="M-10 -40 L7 -54 L24 -40 Z" fill="#C1342A"/>
      <rect x="4" y="-16" width="8" height="16" rx="2" fill="#8C6244"/>
      <g transform="translate(-10 -16)"><g class="cm-wheel2"><circle r="15" fill="none" stroke="#8C6244" stroke-width="3"/>
        ${[0, 45, 90, 135].map((a) => `<path d="M-15 0 H15" stroke="#9C6A3D" stroke-width="2.4" transform="rotate(${a})"/>`).join('')}
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<rect x="13" y="-3" width="6" height="6" fill="#B57C42" transform="rotate(${a})"/>`).join('')}</g></g>`,
    (inner) => {
      const w = inner.querySelector('.cm-wheel2');
      w.classList.add('fast');
      clearTimeout(w._t);
      w._t = setTimeout(() => w.classList.remove('fast'), 1800);
      splash(0);
      blip(500, 300, 0.4, 'sine', 0.04, 0.2);
    }, 26),


    // ---------- india ----------
    /** a peacock: a tap and it fans out its tail */
    peacock: (s) => toy(s.name, s.at, `${shadow(16, 3.6)}<g class="cm-peacock">
      <g class="cm-pfan">${Array.from({ length: 9 }, (_, k) => {
        const a = -80 + k * 20;
        return `<g transform="rotate(${a} -4 -12)"><path d="M-4 -12 L-4 -46" stroke="#3E9150" stroke-width="5" stroke-linecap="round"/><ellipse cx="-4" cy="-44" rx="5" ry="6.4" fill="#4FAE5F"/><circle cx="-4" cy="-44" r="3.2" fill="#3B8BEB"/><circle cx="-4" cy="-44" r="1.4" fill="#1D2433"/></g>`;
      }).join('')}</g>
      <path class="cm-ptail" d="M-4 -10 Q-22 -8 -32 -2 Q-20 -2 -4 -6 Z" fill="#3E9150"/>
      <path d="M-2 -2 L-2 0 M3 -2 L3 0" stroke="#B57C42" stroke-width="1.6"/>
      <ellipse cx="0" cy="-10" rx="8" ry="7" fill="#2F6FD0"/>
      <path d="M4 -14 Q7 -22 6 -28" stroke="#2F6FD0" stroke-width="4.6" fill="none" stroke-linecap="round"/>
      <circle cx="6.4" cy="-29" r="3.6" fill="#2F6FD0"/><circle cx="7.6" cy="-29.6" r=".9" fill="#FFFFFF"/>
      <path d="M9.6 -29.4 L12.6 -28.6 L9.6 -27.8 Z" fill="#E0A92A"/>
      <path d="M5 -33 l-1 -4 M6.4 -33 l0 -4.4 M7.8 -33 l1 -4" stroke="#2F6FD0" stroke-width="1"/><circle cx="4" cy="-37" r="1" fill="#3B8BEB"/><circle cx="6.4" cy="-37.6" r="1" fill="#3B8BEB"/><circle cx="8.8" cy="-37" r="1" fill="#3B8BEB"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-peacock'), 'cm-fanout'); blip(600, 1100, 0.18, 'sawtooth', 0.035); blip(700, 1200, 0.22, 'sawtooth', 0.035, 0.25); }, 22),
    /** a lotus on its leaf in the pond: a tap and it opens wide */
    lotus: (s) => toy(s.name, s.at, `<path d="M0 0 m-14 0 a14 6 0 1 0 28 0 L0 0 Z" fill="#4FAE5F"/><g transform="translate(0 -4)"><g class="cm-lotus">
      ${[-60, -30, 0, 30, 60].map((a) => `<ellipse cx="0" cy="-8" rx="4" ry="9" fill="${Math.abs(a) > 40 ? '#F7B5C9' : '#FF8FB0'}" transform="rotate(${a} 0 0)"/>`).join('')}
      <circle cx="0" cy="-4" r="3" fill="#FFD45E"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-lotus'), 'cm-bloom'); kit.burst({ x: s.at.x, y: s.at.y - 12 }, 0.6); blip(880, 1320, 0.3, 'sine', 0.05); }, 16),
    /** a big banyan tree with a swing hanging from it: the swing sways; a tap and it swings high */
    jhoola: (s) => toy(s.name, s.at, `${shadow(40, 7)}
      <path d="M-6 0 Q-8 -40 -4 -70 L8 -70 Q10 -40 8 0 Z" fill="#8C6244"/>
      ${[-40, -30, 32, 44].map((x) => `<path d="M${x} -60 Q${x + 2} -30 ${x} 0" stroke="#9C7653" stroke-width="2" fill="none"/>`).join('')}
      <circle cx="-30" cy="-78" r="26" fill="#3E9150"/><circle cx="30" cy="-80" r="26" fill="#3E9150"/><circle cx="0" cy="-96" r="28" fill="#4FAE5F"/>
      <circle cx="-14" cy="-70" r="18" fill="#5FB26B"/><circle cx="18" cy="-72" r="18" fill="#5FB26B"/>
      <path d="M8 -58 H46" stroke="#8C6244" stroke-width="6" stroke-linecap="round"/>
      <g transform="translate(34 -58)"><g class="cm-swing">
        <path d="M-7 0 V34 M7 0 V34" stroke="#B57C42" stroke-width="1.4"/>
        <rect x="-10" y="33" width="20" height="4" rx="1.5" fill="#E5574B"/>
        <path d="M-7 4 l-2 2 l2 2 l-2 2 M7 8 l2 2 l-2 2 l2 2" stroke="#F2A541" stroke-width="2" fill="none"/></g></g>`,
    (inner) => { replay(inner.querySelector('.cm-swing'), 'cm-swinghigh'); blip(500, 800, 0.4, 'sine', 0.04); blip(800, 500, 0.4, 'sine', 0.04, 0.6); }, 34),
    /** a dhol drum on its stand: a tap and it bounces, dhum dhum */
    dhol: (s) => toy(s.name, s.at, `${shadow(14, 3)}<path d="M-12 0 L-6 -14 M12 0 L6 -14" stroke="#8C6244" stroke-width="2.4" stroke-linecap="round"/><g class="cm-dhol">
      <rect x="-14" y="-30" width="28" height="18" rx="3" fill="#E5574B"/>
      <path d="M-14 -30 L-4 -12 M-4 -30 L6 -12 M6 -30 L14 -16" stroke="#FFC93C" stroke-width="1.6"/>
      <ellipse cx="-14" cy="-21" rx="3.4" ry="9" fill="#F6E6C8" stroke="#C98E4E" stroke-width="1.4"/><ellipse cx="14" cy="-21" rx="3.4" ry="9" fill="#F6E6C8" stroke="#C98E4E" stroke-width="1.4"/>
      <path d="M-8 -34 Q0 -40 8 -34" stroke="#F2A541" stroke-width="1.6" fill="none"/></g>`,
    (inner) => { replay(inner.querySelector('.cm-dhol'), 'cm-drum'); bubble(s.at, 'Dhum dhum!', 46); [0, 0.24, 0.42].forEach((d, k) => blip(k === 1 ? 180 : 120, 50, 0.22, 'sine', 0.18, d)); }, 20),
  };
}
