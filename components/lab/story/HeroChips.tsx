"use client";

import { useEffect, useState, type ReactNode } from "react";

// The four facts under the hero (owner, 2026-11-24): no ads, the age band covered today, 100% safe, family friendly. Icons are drawn
// like the app's map-home header tags (cominilab-app-v3 components/HeaderTag.tsx): a thick coloured outline over a
// pale fill. Wide screens: a row that rises in once the page is scrolled. Phones: a ticker that slides on its own.
const Ico = ({ children }: { children: ReactNode }) => (
  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">{children}</svg>
);
const CHIPS: { icon: ReactNode; text: string }[] = [
  { icon: <Ico><rect x="5" y="9" width="38" height="26" fill="#F3E6FB" stroke="#A33FC9" /><path d="M17 42h14M24 35v7" stroke="#A33FC9" /><path d="M8 6l32 36" stroke="#A33FC9" /></Ico>, text: "No ads, ever" },
  { icon: <Ico><circle cx="24" cy="10" r="6" fill="#E3F7F6" stroke="#2FB5C8" /><path d="M10 22h28L24 42z" fill="#E3F7F6" stroke="#2FB5C8" /></Ico>, text: "Made for ages 5 to 7" },
  { icon: <Ico><path d="M24 4l16 6v12c0 10-7 18-16 22C15 40 8 32 8 22V10z" fill="#FFF3C4" stroke="#F2B21E" /><path d="M17 23l5 5 9-10" stroke="#F2B21E" /></Ico>, text: "100% safe" },
  { icon: <Ico><path d="M6 22L24 7l18 15" fill="none" stroke="#E0559A" /><path d="M11 19v22h26V19" fill="#FFE8F3" stroke="#E0559A" /><path d="M24 37c-6-4-9-7-9-10.5 0-2.4 1.9-4.2 4.2-4.2 2 0 3.4 1.1 4.8 2.9 1.4-1.8 2.8-2.9 4.8-2.9 2.3 0 4.2 1.8 4.2 4.2 0 3.5-3 6.5-9 10.5z" fill="#E0559A" stroke="#E0559A" strokeWidth="2" /></Ico>, text: "Family friendly" },
];

export function HeroChips() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => window.scrollY > 24 && setOn(true);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className={`hc${on ? " on" : ""}`} aria-label="Four things to know">
      <div className="hc-track">
        {[0, 1, 2].map((copy) => (
          <ul key={copy} className="hc-row" aria-hidden={copy > 0 ? true : undefined}>
            {CHIPS.map((c, i) => (
              <li key={c.text} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="hc-ico">{c.icon}</span>
                <span className="hc-tag">{c.text}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
