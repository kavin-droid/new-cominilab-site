"use client";

import { useEffect } from "react";

/**
 * The hero's scroll (owner, 2026-11-25): for the first 60% of a screen of scroll the hero's contents move up at their
 * own speeds while the page waits (the words rise fast and fade, the phone rises steadily, the cards each at their own
 * pace), then the page scrolls on as usual.
 *
 * Smoothness: the transforms are written straight onto the few moving layers (not a CSS variable on the hero, which
 * would restyle the whole live game inside the phone every frame), and the value eases toward the scroll position so a
 * mouse wheel's jumps become a glide.
 *
 * A layer moving at speed v (1 = the page's speed) is offset by s x (1 - v); OFF holds those offsets. The hero's
 * bottom padding is kept small, since the words and phone end up a little higher than where they started.
 */
// the words and the phone rise together, a little faster than the page (owner, 2026-11-25: same speed); the cards
// each at their own pace
const PHONE = -0.3;
const OFF = { text: PHONE, slots: [-0.9, -0.15, -0.55, -0.7, -0.35] };

export function HeroParallax() {
  useEffect(() => {
    const hx = document.querySelector<HTMLElement>(".st .hx");
    if (!hx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const text = hx.querySelector<HTMLElement>(".hx-text");
    const phone = hx.querySelector<HTMLElement>(".hx-mask");
    const pars = [...hx.querySelectorAll<HTMLElement>(".hx-par")];
    const narrow = window.matchMedia("(max-width: 900px)");
    let hold = 0;
    let cur = -1;
    let raf = 0;
    let last = 0;
    const size = () => {
      hold = Math.round(window.innerHeight * 0.6);
    };
    const target = () => Math.min(hold, Math.max(0, window.scrollY));
    const paint = (raw: number) => {
      // on a phone the words sit under the phone and need reading, so the hero just scrolls
      const s = narrow.matches ? 0 : raw;
      if (text) { text.style.transform = `translate3d(0, ${(s * OFF.text).toFixed(1)}px, 0)`; text.style.opacity = String(1 - (s / hold) * 0.9); }
      if (phone) phone.style.transform = `translate3d(0, ${(s * PHONE).toFixed(1)}px, 0)`;
      pars.forEach((el, i) => { el.style.transform = `translate3d(0, ${(s * OFF.slots[i]).toFixed(1)}px, 0)`; });
    };
    const frame = (t: number) => {
      raf = 0;
      const goal = target();
      const dt = last ? Math.min(64, t - last) : 16;
      last = t;
      // ease toward the scroll position (about 90% of the way in 150ms), then settle exactly
      cur = cur < 0 ? goal : cur + (goal - cur) * (1 - Math.exp(-dt / 65));
      if (Math.abs(goal - cur) < 0.3) cur = goal;
      paint(cur);
      if (cur !== goal) raf = requestAnimationFrame(frame);
      else last = 0;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const onResize = () => { size(); on(); };
    size();
    cur = target();
    paint(cur);
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", onResize); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return null;
}
