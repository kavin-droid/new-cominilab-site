"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The blocks that rise in. Only the outermost match is animated, so a card's own text does not rise twice.
const BLOCKS = ".lab-rise, h2, h3, p, li, figure, blockquote, form, .lab-card, .lab-btn, .lab-note, img";
// Places that move on their own or must stay put: the hero (its own load-in in lab.css), the live map, dialogs.
const SKIP = "main > section:first-child, .hm-mapstick, .hm-mapfull, dialog, [role='dialog'], [data-no-reveal]";

/**
 * Rises every content block in as it scrolls into view, a few at a time with a short stagger. Content is visible by
 * default: only blocks still below the fold are hidden, by this script, and anything left over is shown after 6s.
 * Uses the Web Animations API so it never overrides a block's own hover transitions.
 */
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.querySelector("main");
    if (!main) return;
    const all = [...main.querySelectorAll<HTMLElement>(BLOCKS)];
    const set = new Set(all);
    const els = all.filter((el) => {
      if (el.closest(SKIP)) return false;
      for (let p = el.parentElement; p && p !== main; p = p.parentElement) if (set.has(p)) return false;
      const r = el.getBoundingClientRect();
      return r.height > 0 && r.top > window.innerHeight * 0.92;
    });
    els.forEach((el) => (el.style.opacity = "0"));
    const show = (el: HTMLElement, delay: number) => {
      el.style.opacity = "";
      el.animate(
        [
          { opacity: 0, translate: "0 28px" },
          { opacity: 1, translate: "0 0" },
        ],
        { duration: 650, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
      );
    };
    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          show(e.target as HTMLElement, Math.min(i++, 6) * 70);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const t = window.setTimeout(() => {
      io.disconnect();
      els.forEach((el) => (el.style.opacity = ""));
    }, 6000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
      els.forEach((el) => (el.style.opacity = ""));
    };
  }, [path]);
  return null;
}
