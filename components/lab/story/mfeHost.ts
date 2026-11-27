// Runs the app's real activity bundles on the site (copied from cominilab-app-v3/public/bundles into public/lab/try):
// the single-spa lifecycle and host props the app passes, a guest child aged 6, no saving. Each bundle keeps one root,
// so a bundle is only ever mounted in one place: mounting it somewhere new unmounts it where it was first.
export type Activity =
  | { type: "mfe"; id: string; url: string; props?: Record<string, unknown>; stage?: number }
  | { type: "frame"; src: string };

type Mfe = { bootstrap?: (p: object) => Promise<unknown>; mount: (p: object) => Promise<unknown>; unmount: (p: object) => Promise<unknown> };
type Bus = { emit: (e: string, d?: unknown) => void; on: (e: string, h: (d: unknown) => void) => () => void };

const mods = new Map<string, Promise<Mfe>>();
const load = (url: string) => {
  if (!mods.has(url)) {
    mods.set(url, (new Function("u", "return import(u)") as (u: string) => Promise<Mfe>)(url).then(async (m) => {
      await m.bootstrap?.({});
      return m;
    }));
  }
  return mods.get(url)!;
};

const live = new Map<string, { el: HTMLElement; props: object; m: Mfe }>();
let queue: Promise<unknown> = Promise.resolve();

export function makeBus(onClose?: () => void): Bus {
  const handlers = new Map<string, Set<(d: unknown) => void>>();
  return {
    emit(e, d) {
      if (onClose && (e === "mfe:close" || e === "mfe:quit-challenge")) onClose();
      handlers.get(e)?.forEach((h) => h(d));
    },
    on(e, h) {
      if (!handlers.has(e)) handlers.set(e, new Set());
      handlers.get(e)!.add(h);
      return () => handlers.get(e)?.delete(h);
    },
  };
}

/**
 * Mounts `activity` (an mfe one) into `el`; resolves once it has drawn something. Returns a function that unmounts it.
 * `autoplay` asks the bundle to play itself, silently (the same switch the app uses for its locked-card previews).
 */
export function mountActivity(
  el: HTMLElement,
  activity: Extract<Activity, { type: "mfe" }>,
  opts: { autoplay?: boolean; onClose?: () => void; onError?: () => void; onRound?: (n: number) => void; onEnd?: () => void } = {},
): { ready: Promise<void>; stop: () => void } {
  let cancelled = false;
  const base = activity.url.replace(/\/main\.js$/, "");
  const bus = makeBus(opts.onClose);
  // the site's copies of the games (comini-site-games) say when each round is done, so a try-out can end after a few
  if (opts.onRound) bus.on("mfe:round-complete", (d) => opts.onRound?.(Number((d as { round?: number })?.round) || 0));
  // and when a whole game ends (won, or out of hearts) before that
  if (opts.onEnd) { bus.on("mfe:game-complete", () => opts.onEnd?.()); bus.on("mfe:game-over", () => opts.onEnd?.()); }
  const props = {
    ...(activity.props ?? {}),
    name: activity.id,
    domElement: el,
    mfeName: activity.id,
    eventBus: bus,
    firebase: { auth: null, db: null, getCurrentUser: () => null, isAuthenticated: () => false },
    user: { isGuest: true, isTrial: false, accessTier: "guest", childId: null, childAge: 6 },
    analytics: { enabled: false },
    getAuthToken: async () => null,
    onClose: () => opts.onClose?.(),
    onNavigate: () => {},
    onRequestAuth: () => {},
    onTrackEvent: () => {},
    onError: () => opts.onError?.(),
    soundSettings: { isMusicOn: !opts.autoplay, isSoundOn: !opts.autoplay },
    assetBase: base,
    suggestedStart: { stage: activity.stage ?? 1, difficulty: 1 },
    ageBand: 1,
    // a try-out starts straight at the first round, after any intro or countdown (owner, 2026-11-25); the site's
    // copies of the games (comini-site-games) read it
    ...(opts.autoplay ? { autoplay: true } : { skipIntro: true }),
    // the try-out games ship without their voice clips (owner, 2026-11-26: a parent's try-out needs no voice), so the
    // site's copies are told to fetch and say no line; each line still shows for as long as it would be said. The
    // story keeps its voice. The hero's Delivery Boxes (/lab/games/delivery-boxes) ships none either (owner, 2026-11-27)
    ...((activity.url.startsWith("/lab/try/") && !activity.id.startsWith("coco-")) ||
    activity.url.startsWith("/lab/games/delivery-boxes/")
      ? { voice: false }
      : {}),
  };
  const ready = new Promise<void>((resolve, reject) => {
    const mo = new MutationObserver(() => {
      if (el.childElementCount > 0) { mo.disconnect(); resolve(); }
    });
    mo.observe(el, { childList: true });
    queue = queue.then(async () => {
      if (cancelled) return;
      const m = await load(activity.url);
      const was = live.get(activity.url);
      if (was) { live.delete(activity.url); await was.m.unmount(was.props).catch(() => {}); }
      if (cancelled) return;
      live.set(activity.url, { el, props, m });
      m.mount(props).then(() => resolve()).catch((e) => reject(e));
    }).catch((e) => reject(e));
  });
  const stop = () => {
    cancelled = true;
    queue = queue.then(async () => {
      const cur = live.get(activity.url);
      if (cur && cur.el === el) { live.delete(activity.url); await cur.m.unmount(cur.props).catch(() => {}); }
    });
  };
  return { ready, stop };
}
