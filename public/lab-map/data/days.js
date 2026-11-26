// Mock day plans (until the backend sends them). A day = one focus concept: a story, an explainer, a worksheet and a
// game on it, then one review game from another concept (picked from the child's placement). Placement can change as
// activities finish, but a day's plan only changes between days, so places never move under the child's thumb.
// Each day happens in a land; the lands cycle (LAND_CYCLE), so day 8 is back in the meadow. The sample plans repeat
// too, so the journey never runs out here. Pick a day with ?day=N.

export const ROLES = ['story', 'explainer', 'worksheet', 'game', 'review'];

/** the lands in the order a child travels them; after the last, back to the first */
export const LAND_CYCLE = ['meadow', 'seaside', 'snowland', 'jungle', 'desert', 'autumn', 'india'];

export const DAYS = [
  { concept: 'counting', items: ['story-counting', 'explainer-counting', 'ws-fruit-catch', 'game-roll-call', 'game-bug-feast'] },
  { concept: 'even-odd', items: ['story-even-odd', 'explainer-even-odd', 'ws-lost-found', 'game-fair-nuts', 'game-roll-call'] },
  { concept: 'subtraction', items: ['story-subtraction', 'explainer-subtraction', 'ws-pocket-money', 'game-delivery-boxes', 'game-frog-cross'] },
  { concept: 'skip-counting', items: ['story-skip', 'explainer-skip', 'ws-bunny-hop', 'game-frog-cross', 'game-fair-nuts'] },
  { concept: 'place-value', items: ['story-pv', 'explainer-pv', 'ws-carnival-toss', 'game-at-the-farm', 'game-bug-feast'] },
  { concept: 'addition', items: ['story-add', 'explainer-add', 'ws-juice-stand', 'game-cake-rush', 'game-delivery-boxes'] },
  { concept: 'comparing', items: ['story-compare', 'explainer-compare', 'ws-piggy-banks', 'game-bridge-path', 'game-roll-call'] },
];
