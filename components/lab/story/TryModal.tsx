"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Coco } from "../motion/CocoLive";
import { mountActivity, type Activity } from "./mfeHost";
import { LAB_URL } from "@/lib/lab/site";
import { ArrowRight } from "../Icons";

/** a try-out of a game ends after this many rounds with a closing card (owner, 2026-11-25) */
const ROUNDS = 3;

export type { Activity };

/** One of the app's real activities, big, for the parent to try (with sound, taking taps). */
export function TryModal({ title, activity, onClose }: { title: string; activity: Activity; onClose: () => void }) {
  const host = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">(activity.type === "frame" ? "ready" : "loading");
  const close = useRef(onClose);
  close.current = onClose;
  const [done, setDone] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close.current();
    // an explainer in the frame says "close" (its back button) and "complete" (its last step's tick, owner 2026-11-27:
    // the closing card then shows, as after a game's third round)
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.data?.source !== "explainer") return;
      if (e.data.type === "close") close.current();
      else if (e.data.type === "complete") setDone(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("message", onMsg);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMsg);
    };
  }, []);

  // the game says when each round is done; after the third it stops (a beat later, so its own "well done" shows) and
  // the closing card takes its place. "Play again" mounts it afresh.
  const [round, setRound] = useState(0);
  const [whole, setWhole] = useState(false); // it ended as a whole game, not after three rounds
  useEffect(() => {
    if (activity.type !== "mfe" || !host.current || done) return;
    let off = false;
    let endT = 0;
    const run = mountActivity(host.current, activity, {
      onClose: () => close.current(),
      onError: () => !off && setState("error"),
      onRound: (n) => { if (!off && n >= ROUNDS && !endT) endT = window.setTimeout(() => !off && setDone(true), 1400); },
      // a game that ends before three rounds (won early, or out of hearts) closes the same way; a story is left to finish
      onEnd: () => { if (!off && !endT && !activity.id.startsWith("coco-")) { setWhole(true); endT = window.setTimeout(() => !off && setDone(true), 1800); } },
    });
    run.ready.then(() => !off && setState("ready")).catch(() => !off && setState("error"));
    return () => { off = true; window.clearTimeout(endT); run.stop(); };
  }, [activity, done, round]);

  // the closing card can need more room than a game's short 800 x 360 stage (a phone held upright): the stage grows to
  // fit it, from the height it had, and never past the screen (owner, 2026-11-27)
  useLayoutEffect(() => {
    const st = stage.current, en = end.current;
    if (!done || !st || !en) return;
    const from = st.getBoundingClientRect().height;
    const fit = () => {
      const card = st.parentElement!;
      const room = window.innerHeight - 2 * parseFloat(getComputedStyle(card.parentElement!).paddingTop) - (card.getBoundingClientRect().height - st.getBoundingClientRect().height);
      st.style.height = `${Math.max(from, Math.min(en.scrollHeight, room))}px`;
    };
    st.style.height = `${from}px`;
    const raf = requestAnimationFrame(() => { st.classList.add("fitting"); fit(); });
    window.addEventListener("resize", fit);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", fit); st.classList.remove("fitting"); st.style.height = ""; };
  }, [done]);

  // one card in the site's polaroid style, centred over the dimmed page: the activity at the app's own 800 x 360 shape
  // and a close button in the strip over it, top right (owner, 2026-11-27: no name). A click on the dimmed page closes it too.
  return createPortal(
    <div className="st-try-modal" role="dialog" aria-modal="true" aria-label={title} onPointerDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {/* an explainer needs more height than a game's 800 x 360, and a story is a tall comic: on a phone both open
          upright (owner, 2026-11-25) */}
      <div className={`st-try-card${activity.type === "frame" ? " k-explainer" : activity.id.startsWith("coco-") ? " k-story" : ""}${done ? " is-done" : ""}`}>
        <div className="st-try-bar">
          <button type="button" className="st-try-x" onClick={onClose} autoFocus aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="#0D0D0D" strokeWidth="2.6" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className="st-try-stage" ref={stage}>
          {activity.type === "frame" ? (
            <iframe src={activity.src} title={title} allow="autoplay; fullscreen" />
          ) : (
            <div className="st-try-host"><div className="st-try-mount" ref={host} /></div>
          )}
          {state === "loading" ? <div className="st-try-cover"><Coco size={96} mood="think" /><p className="lab-body">Getting it ready…</p></div> : null}
          {state === "error" ? <div className="st-try-cover"><p className="lab-body">This one didn&apos;t load. Please try again.</p></div> : null}
          {done ? (
            <div className="st-try-cover st-try-end" ref={end}>
              <Coco size={110} mood="happy" />
              <p className="st-try-end-h">Enjoyed that? There&apos;s a new plan every day.</p>
              <div className="st-try-end-ctas">
                <a className="lab-btn lab-btn-teal" href={LAB_URL}>Start with your child <ArrowRight color="#FFFFFF" /></a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.querySelector(".lab") ?? document.body,
  );
}
