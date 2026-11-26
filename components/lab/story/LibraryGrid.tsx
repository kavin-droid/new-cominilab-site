"use client";

import { useEffect, useRef, type ReactNode } from "react";

// "A library of resources with real maths in each" (owner, 2026-11-25): a wall of the library's activity cards in rows
// that slide sideways as you scroll, each row the other way, so it reads as a big library at a glance rather than one
// card at a time. The heading and its line come up over the wall in a white card as you scroll into it.
// every activity picture we have, each used once across the wall (owner, 2026-11-25: less repetition)
const PICS = [
  "/lab/library/bug-feast.webp",
  "/lab/library/bunny-hop.webp",
  "/lab/library/carnival-toss.webp",
  "/lab/library/fair-nuts.webp",
  "/lab/library/firefly-lantern.webp",
  "/lab/library/frog-cross.webp",
  "/lab/library/garden-rows.webp",
  "/lab/library/glow-grid.webp",
  "/lab/library/hop-home.webp",
  "/lab/library/juice-stand.webp",
  "/lab/library/lost-and-found.webp",
  "/lab/library/make-a-way.webp",
  "/lab/library/number-match.webp",
  "/lab/library/piggy-banks.webp",
  "/lab/library/pizza-chef.webp",
  "/lab/library/pw-addition.webp",
  "/lab/library/pw-compare-order.webp",
  "/lab/library/pw-place-value.webp",
  "/lab/library/pw-skip-counting.webp",
  "/lab/library/pw-subtraction.webp",
  "/lab/library/snack-share.webp",
  "/lab/library/tinker-trip.webp",
  "/lab/library/x-addition-stage1.webp",
  "/lab/library/x-compare-order-stage1.webp",
  "/lab/library/x-even-odd-stage1.webp",
  "/lab/library/x-skip-counting-stage1.webp",
  "/lab/library/x-subtraction-stage1.webp",
  "/lab/thumbs/counting-stage1.webp",
  "/lab/thumbs/fruit-catch-counting.webp",
  "/lab/thumbs/picnic-peek.webp",
  "/lab/thumbs/pw-counting.webp",
  "/lab/thumbs/pw-subitizing.webp",
  "/lab/thumbs/roll-call.webp",
  "/lab/thumbs/story-ducks-v2.webp",
  "/lab/thumbs/story-shells.webp",
  "/lab/thumbs/subitizing-stage1.webp",
];
const ROWS = 4;
const PER_ROW = Math.ceil(PICS.length / ROWS);
const SHIFT = 260; // how far a row slides across the section's scroll, px

export function LibraryGrid({ children }: { children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const rows = useRef<(HTMLDivElement | null)[]>([]);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 as the section's top enters at the bottom of the screen, 1 as its bottom leaves at the top
      const p = still ? 0.5 : Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      rows.current.forEach((row, i) => {
        if (row) row.style.transform = `translate3d(${((p - 0.5) * SHIFT * (i % 2 ? -1 : 1) - (i % 2 ? 60 : 0)).toFixed(1)}px, 0, 0)`;
      });
      const k = still ? 1 : Math.min(1, Math.max(0, (p - 0.28) / 0.14));
      const c = card.current;
      if (c) {
        c.style.opacity = String(k);
        c.style.transform = `translate(-50%, -50%) translateY(${((1 - k) * 36).toFixed(1)}px) scale(${(0.92 + 0.08 * k).toFixed(3)})`;
      }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="lg" ref={box}>
      <div className="lg-wall" aria-hidden="true">
        {Array.from({ length: ROWS }, (_, r) => (
          <div key={r} className="lg-row" ref={(el) => { rows.current[r] = el; }}>
            {Array.from({ length: PER_ROW }, (_, k) => {
              const src = PICS[(r * PER_ROW + k) % PICS.length];
              return <span key={k} className="lg-card"><img src={src} alt="" width={240} height={240} loading="lazy" draggable={false} /></span>;
            })}
          </div>
        ))}
      </div>
      <div className="lg-head" ref={card}>{children}</div>
    </div>
  );
}
