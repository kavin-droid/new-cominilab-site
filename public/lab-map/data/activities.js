// The activity bank the map knows about. Each activity: its kind (story, explainer, worksheet, game), its concept, the
// name (for grown-ups and screen readers), what the line calls it (`say`, a thing the child can see, never a title), its
// landmark art, and (later) how the app opens it. Stories marked `placeholder` stand in until maths-themed stories exist.
import * as A from './art.js';
import { LANDMARKS as L } from './landmarks.js';

/** a landmark lifted from the activity's own app thumbnail (data/landmarks.js) */
const lifted = (id) => () => L[id];

/** art = the landmark on the map; was = the first, hand-drawn guess (kept for the review page); ref = the app
    thumbnail it was lifted from (cominilab-app-v3 public/img/thumbs), refUrl = the old challenge's card picture */
export const ACTIVITIES = {
  // counting
  'story-counting': { kind: 'story', concept: 'counting', name: 'Story: counting (placeholder)', say: 'the story', art: A.storyStarsArt, placeholder: true },
  'explainer-counting': { kind: 'explainer', concept: 'counting', name: 'Counting explainer', say: 'the ducks', art: lifted('explainer-counting'), was: A.abacusArt, ref: 'explainers/counting-stage1', open: '/explain/counting-1' },
  'ws-fruit-catch': { kind: 'worksheet', concept: 'counting', name: 'Fruit Catch', say: 'the fruit', art: lifted('ws-fruit-catch'), was: A.fruitTrayArt, ref: 'fruit-catch' },
  'game-roll-call': { kind: 'game', concept: 'counting', name: 'Roll Call', say: 'the sheep', art: lifted('game-roll-call'), was: A.sheepArt, ref: 'roll-call' },
  // subitizing
  'game-bug-feast': { kind: 'game', concept: 'subitizing', name: 'Bug Feast', say: 'the chicks', art: lifted('game-bug-feast'), was: A.nestArt, ref: 'bug-feast' },
  // even and odd
  'story-even-odd': { kind: 'story', concept: 'even-odd', name: 'Story: even and odd (placeholder)', say: 'the story', art: A.storyDucksArt, placeholder: true },
  'explainer-even-odd': { kind: 'explainer', concept: 'even-odd', name: 'Even & Odd explainer', say: 'the pairs', art: lifted('explainer-even-odd'), was: A.socksArt, ref: 'explainers/even-odd-stage1' },
  'ws-lost-found': { kind: 'worksheet', concept: 'even-odd', name: 'Lost & Found', say: 'the socks', art: lifted('ws-lost-found'), was: A.lostBoxArt, ref: 'lost-and-found' },
  'game-fair-nuts': { kind: 'game', concept: 'even-odd', name: 'Fair Nuts', say: 'the raccoons', art: lifted('game-fair-nuts'), was: A.basketArt, ref: 'fair-nuts' },
  // skip counting
  'game-frog-cross': { kind: 'game', concept: 'skip-counting', name: 'FrogCross', say: 'the frog', art: lifted('game-frog-cross'), was: A.frogArt, ref: 'frog-cross' },
  // subtraction
  'story-subtraction': { kind: 'story', concept: 'subtraction', name: 'Story: subtraction (placeholder)', say: 'the story', art: A.storyCakeArt, placeholder: true },
  'explainer-subtraction': { kind: 'explainer', concept: 'subtraction', name: 'Subtraction explainer', say: 'the apples', art: lifted('explainer-subtraction'), was: A.appleTreeArt, ref: 'explainers/subtraction-stage1' },
  'ws-pocket-money': { kind: 'worksheet', concept: 'subtraction', name: 'Pocket Money', say: 'the toys', art: lifted('ws-pocket-money'), was: A.purseArt, ref: 'pocket-money' },
  'game-delivery-boxes': { kind: 'game', concept: 'subtraction', name: 'Delivery Boxes', say: 'the van', art: lifted('game-delivery-boxes'), was: A.boxesArt, ref: 'bus-stop' },
  // skip counting
  'story-skip': { kind: 'story', concept: 'skip-counting', name: 'Story: skip counting (placeholder)', say: 'the story', art: A.storyBunnyArt, placeholder: true },
  'explainer-skip': { kind: 'explainer', concept: 'skip-counting', name: 'Skip Counting explainer', say: 'the jumps', art: lifted('explainer-skip'), was: A.hopscotchArt, ref: 'explainers/skip-counting-stage1' },
  'ws-bunny-hop': { kind: 'worksheet', concept: 'skip-counting', name: 'Bunny Hop', say: 'the bunny', art: lifted('ws-bunny-hop'), was: A.bunnyCarrotArt, ref: 'bunny-hop' },
  // place value
  'story-pv': { kind: 'story', concept: 'place-value', name: 'Story: place value (placeholder)', say: 'the story', art: A.storyBlocksArt, placeholder: true },
  'explainer-pv': { kind: 'explainer', concept: 'place-value', name: 'Place Value explainer', say: 'the blocks', art: lifted('explainer-pv'), was: A.tensRodsArt, ref: 'explainers/place-value-stage2' },
  'ws-carnival-toss': { kind: 'worksheet', concept: 'place-value', name: 'Carnival Toss', say: 'the ball', art: lifted('ws-carnival-toss'), was: A.ringTossArt, ref: 'carnival-toss' },
  'game-at-the-farm': { kind: 'game', old: true, concept: 'place-value', name: 'At the farm', say: 'the eggs', art: A.henhouseArt, was: A.hayArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/at-the-farm.png', drawn: true },
  // addition
  'story-add': { kind: 'story', concept: 'addition', name: 'Story: addition (placeholder)', say: 'the story', art: A.storyApplesArt, placeholder: true },
  'explainer-add': { kind: 'explainer', concept: 'addition', name: 'Addition explainer', say: 'the dots', art: lifted('explainer-add'), was: A.balanceArt, ref: 'explainers/addition-stage1' },
  'ws-juice-stand': { kind: 'worksheet', concept: 'addition', name: 'Juice Stand', say: 'the juice', art: lifted('ws-juice-stand'), was: A.juiceStandArt, ref: 'juice-stand' },
  'game-cake-rush': { kind: 'game', old: true, concept: 'addition', name: 'The Cake Rush', say: 'the tart', art: A.tartArt, was: A.cakeArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/cake-rush.png', drawn: true },
  // comparing
  'story-compare': { kind: 'story', concept: 'comparing', name: 'Story: comparing (placeholder)', say: 'the story', art: A.storyKitesArt, placeholder: true },
  'explainer-compare': { kind: 'explainer', concept: 'comparing', name: 'Compare & Order explainer', say: 'the dots', art: lifted('explainer-compare'), was: A.towersArt, ref: 'explainers/compare-order-stage1' },
  'ws-piggy-banks': { kind: 'worksheet', concept: 'comparing', name: 'Piggy Banks', say: 'the piggy banks', art: lifted('ws-piggy-banks'), was: A.piggyArt, ref: 'piggy-banks' },
  'game-bridge-path': { kind: 'game', old: true, concept: 'comparing', name: 'Bridge Path', say: 'the treasure', art: A.chestArt, was: A.plankBridgeArt, refUrl: 'https://storage.googleapis.com/ripple-assets-audio/bridge-path/challenge-card-images/bridge-path.png', drawn: true },
  // ---------- the rest of the app's bank (not in a sample day yet) ----------
  // mini games
  'game-farm-time': { kind: 'game', concept: 'multiplication', name: 'Farm Time', say: 'the flowers', art: lifted('game-farm-time'), ref: 'glow-grid' },
  'game-missing-pieces': { kind: 'game', concept: 'addition', name: 'Missing Pieces', say: 'the dice', art: lifted('game-missing-pieces'), ref: 'equation-quest' },
  // worksheets
  'ws-picnic-peek': { kind: 'worksheet', concept: 'subitizing', name: 'Picnic Peek', say: 'the cookies', art: lifted('ws-picnic-peek'), ref: 'picnic-peek' },
  'ws-firefly-lantern': { kind: 'worksheet', concept: 'estimation', name: 'Firefly Lantern', say: 'the lantern', art: lifted('ws-firefly-lantern'), ref: 'firefly-lantern' },
  'ws-delivery-route': { kind: 'worksheet', concept: 'rounding', name: 'Delivery Route', say: 'the van', art: lifted('ws-delivery-route'), ref: 'delivery-route' },
  'ws-garden-rows': { kind: 'worksheet', concept: 'multiplication', name: 'Garden Rows', say: 'the flowers', art: lifted('ws-garden-rows'), ref: 'garden-rows' },
  'ws-snack-share': { kind: 'worksheet', concept: 'division', name: 'Snack Share', say: 'the cupcakes', art: lifted('ws-snack-share'), ref: 'snack-share' },
  'ws-pizza-chef': { kind: 'worksheet', concept: 'fractions', name: 'Pizza Chef', say: 'the pizza', art: lifted('ws-pizza-chef'), ref: 'pizza-chef' },
  // explainers (the other stages)
  'explainer-counting-stage2': { kind: 'explainer', concept: 'counting', name: 'Count in tens and ones', say: 'the blocks', art: lifted('explainer-counting-stage2'), ref: 'explainers/counting-stage2' },
  'explainer-subitizing-stage1': { kind: 'explainer', concept: 'subitizing', name: 'How many at a glance?', say: 'the dots', art: lifted('explainer-subitizing-stage1'), ref: 'explainers/subitizing-stage1' },
  'explainer-subitizing-stage2': { kind: 'explainer', concept: 'subitizing', name: 'Spot the parts', say: 'the dots', art: lifted('explainer-subitizing-stage2'), ref: 'explainers/subitizing-stage2' },
  'explainer-estimating-stage1': { kind: 'explainer', concept: 'estimation', name: 'A good guess up to 20', say: 'the stars', art: lifted('explainer-estimating-stage1'), ref: 'explainers/estimating-stage1' },
  'explainer-estimating-stage2': { kind: 'explainer', concept: 'estimation', name: 'A good guess up to 100', say: 'the stars', art: lifted('explainer-estimating-stage2'), ref: 'explainers/estimating-stage2' },
  'explainer-compare-order-stage2': { kind: 'explainer', concept: 'comparing', name: 'Put numbers in order', say: 'the blocks', art: lifted('explainer-compare-order-stage2'), ref: 'explainers/compare-order-stage2' },
  'explainer-addition-stage2': { kind: 'explainer', concept: 'addition', name: 'Add tens and ones', say: 'the blocks', art: lifted('explainer-addition-stage2'), ref: 'explainers/addition-stage2' },
  'explainer-subtraction-stage2': { kind: 'explainer', concept: 'subtraction', name: 'Take away tens and ones', say: 'the blocks', art: lifted('explainer-subtraction-stage2'), ref: 'explainers/subtraction-stage2' },
  'explainer-subtraction-stage3': { kind: 'explainer', concept: 'subtraction', name: 'Take away hundreds', say: 'the blocks', art: lifted('explainer-subtraction-stage3'), ref: 'explainers/subtraction-stage3' },
  'explainer-skip-counting-stage2': { kind: 'explainer', concept: 'skip-counting', name: 'Jumps on the hundred chart', say: 'the chart', art: lifted('explainer-skip-counting-stage2'), ref: 'explainers/skip-counting-stage2' },
  'explainer-even-odd-stage2': { kind: 'explainer', concept: 'even-odd', name: 'Even and odd up to 100', say: 'the pairs', art: lifted('explainer-even-odd-stage2'), ref: 'explainers/even-odd-stage2' },
  'explainer-rounding-stage2': { kind: 'explainer', concept: 'rounding', name: 'The nearest ten', say: 'the flag', art: lifted('explainer-rounding-stage2'), ref: 'explainers/rounding-stage2' },
  'explainer-multiplication-stage2': { kind: 'explainer', concept: 'multiplication', name: 'Equal groups', say: 'the dots', art: lifted('explainer-multiplication-stage2'), ref: 'explainers/multiplication-stage2' },
  'explainer-division-stage1': { kind: 'explainer', concept: 'division', name: 'Share the sweets', say: 'the sweets', art: lifted('explainer-division-stage1'), ref: 'explainers/division-stage1' },
  'explainer-division-stage2': { kind: 'explainer', concept: 'division', name: 'Share or make groups', say: 'the sweets', art: lifted('explainer-division-stage2'), ref: 'explainers/division-stage2' },
  'explainer-fractions-stage1': { kind: 'explainer', concept: 'fractions', name: 'Wholes and halves', say: 'the chocolate', art: lifted('explainer-fractions-stage1'), ref: 'explainers/fractions-stage1' },
  'explainer-fractions-stage2': { kind: 'explainer', concept: 'fractions', name: 'Halves and quarters', say: 'the pizza', art: lifted('explainer-fractions-stage2'), ref: 'explainers/fractions-stage2' },
  // the old CominiLab challenges
  'old-dinner-prep': { kind: 'game', old: true, concept: 'addition', name: 'Dinner Prep', say: 'the scales', art: A.scaleArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/THE%20DINNER%20PREP.png', drawn: true },
  'old-garden-planning': { kind: 'game', old: true, concept: 'fractions', name: 'Garden Planning', say: 'the garden', art: A.gardenPieArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/GARDEN%20PLANNING.png', drawn: true },
  'old-grammys-shopping': { kind: 'game', old: true, concept: 'addition', name: 'Grammy\'s Shopping', say: 'the strawberries', art: A.strawberryBasketArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/GRAMMY%27S%20SHOPPING.png', drawn: true },
  'old-library-books': { kind: 'game', old: true, concept: 'place-value', name: 'Library Books', say: 'the books', art: A.bookshelfArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/LIBRARY%20BOOKS.png', drawn: true },
  'old-the-savings-jar': { kind: 'game', old: true, concept: 'addition', name: 'The Savings Jar', say: 'the jar', art: A.savingsJarArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/SAVINGS%20JAR.png', drawn: true },
  'old-snack-time': { kind: 'game', old: true, concept: 'multiplication', name: 'Snack Time', say: 'the snacks', art: A.snackTrayArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/SNACK%20TIME.png', drawn: true },
  'old-big-party-order': { kind: 'game', old: true, concept: 'comparing', name: 'Big Party Order', say: 'the burger', art: A.partyFoodArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/BIG%20PARTY%20ORDER.png', drawn: true },
  'old-the-school-order': { kind: 'game', old: true, concept: 'comparing', name: 'The School Order', say: 'the bread', art: A.breadCakeArt, refUrl: 'https://pub-b324fb95eb624222b02410470b787838.r2.dev/challenge-card-images/THE%20SCHOOL%20ORDER.png', drawn: true },
  'old-farmers-market': { kind: 'game', old: true, concept: 'addition', name: 'Farmers\' Market', say: 'the fruit', art: A.fruitCrateArt, refUrl: 'https://storage.googleapis.com/ripple-assets-audio/farmers-market/challenge-card-images/farmers-market.png', drawn: true },
  'old-fair-share': { kind: 'game', old: true, concept: 'division', name: 'Fair Share', say: 'the cookies', art: A.cookieTrayArt, refUrl: 'https://storage.googleapis.com/ripple-assets-audio/fair-share/challenge-card-images/fair-share.png', drawn: true },
  'old-lake-race': { kind: 'game', old: true, concept: 'estimation', name: 'Lake Race', say: 'the boat', art: A.lakeBoatArt, refUrl: 'https://storage.googleapis.com/ripple-assets-audio/lake-race/challenge-card-images/lake-race.png', drawn: true },
};

/** what the stand-in card says while the real activity isn't wired in yet */
export const KIND_NOTE = {
  story: 'The story opens here.',
  explainer: 'The explainer opens here.',
  worksheet: 'The worksheet opens here.',
  game: 'The game opens here.',
};
