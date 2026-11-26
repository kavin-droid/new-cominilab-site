"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "../Icons";
import { useAutoAdvance } from "../useAutoAdvance";

// The original site's testimonial cards (components/site/home2/TestimonialsSection.tsx): tinted card, the quote, the
// parent's name in the hand font. Sample quotes for now, kept to the app's current age band (5 to 7). Here they sit on the app's card material: a light frame,
// hard card shadow and a small tilt, with the name on a sticky note.
export type Quote = { quote: string; name: string; bg: string };
const QUOTES: Quote[] = [
  { quote: "My son used to dread worksheets. Now he asks to do his ‘Comini time’ before I've even finished making breakfast. He doesn't even realise how much he's practising.", name: "Ritu, mother of a 7-year-old", bg: "#FAF7FD" },
  { quote: "What sold me was how quickly the reports actually told me something useful. Not just a score, but what she's ready for next and why.", name: "Arjun, father of a 6-year-old", bg: "#F2FBF9" },
  { quote: "He's always been the kid who finishes fast and gets bored. Comini is the first thing that's kept him genuinely curious instead of just occupied.", name: "Meera, mother of a 7-year-old", bg: "#F6F9FF" },
  { quote: "I stopped having to plan anything myself. I check in once a week, see where she stands, and the rest just shows up matched to her.", name: "Devika, mother of a 6-year-old", bg: "#FFFCE5" },
  { quote: "My daughter struggled with maths at school, but she'll happily sit through a story problem here without even noticing it's the same maths.", name: "Karan, father of a 7-year-old", bg: "#FFF5FA" },
  { quote: "The parent report is the first thing that's actually changed how we talk about learning at home. Less ‘did you finish it’, more ‘what did you figure out’.", name: "Priya, mother of two, ages 5 and 7", bg: "#FAF7FD" },
  { quote: "Halfway through a game he looked up and said, ‘Appa, this is maths!’ Then he grinned and kept playing. He's been counting in tens ever since.", name: "Sanjay, father of a 6-year-old", bg: "#F2FBF9" },
  { quote: "We tried a few apps before this. Comini's the only one where she asks to go back to something instead of me having to remind her.", name: "Aisha, mother of a 7-year-old", bg: "#F6F9FF" },
];
const TILTS = [-1.6, 1.2, -0.8, 1.8, -1.4, 0.9, -1.9, 1.3];

/** The quotes as a slideshow: it moves on by itself while on screen; the arrows and dots jump (and pause it a while). */
/** `centred`: the heading in the middle and the arrows either side of the dots (the story page, owner 2026-11-25) */
export function Testimonials({ quotes = QUOTES, title = "What our parents say", eyebrow, intro, centred = false }: { quotes?: Quote[]; title?: ReactNode; eyebrow?: string; intro?: string; centred?: boolean } = {}) {
  const QUOTES_ = quotes;
  const box = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [at, pick] = useAutoAdvance(QUOTES_.length, box, 4500);
  const step = (dir: 1 | -1) => pick((at + dir + QUOTES_.length) % QUOTES_.length);

  useEffect(() => {
    const el = track.current;
    const card = el?.children[at] as HTMLElement | undefined;
    if (!el || !card) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    el.scrollTo({ left: card.offsetLeft - pad, behavior: "smooth" });
  }, [at]);

  const prev = (
    <button type="button" className="lab-btn lab-btn-white hm-arrow" onClick={() => step(-1)} aria-label="Previous quotes">
      <span style={{ display: "inline-flex", rotate: "180deg" }}><ArrowRight /></span>
    </button>
  );
  const next = (
    <button type="button" className="lab-btn lab-btn-white hm-arrow" onClick={() => step(1)} aria-label="More quotes">
      <ArrowRight />
    </button>
  );
  return (
    <div className={`hm-quotes${centred ? " centred" : ""}`} ref={box}>
      <div className="lab-wrap hm-quotes-head">
        <div style={{ display: "grid", gap: 12 }}>
          {eyebrow ? <span className="lab-eyebrow">{eyebrow}</span> : null}
          <h2 id="quotes-title" className="lab-h2">{title}</h2>
          {intro ? <p className="lab-body">{intro}</p> : null}
        </div>
        {centred ? null : (
          <div className="hm-quotes-arrows">{prev}{next}</div>
        )}
      </div>
      <ul className="hm-quotes-track" ref={track} tabIndex={0} aria-label="Parent quotes" data-no-reveal>
        {QUOTES_.map((q, i) => (
          <li key={q.name} className="hm-quote-slot">
            <figure className="hm-quote" style={{ background: q.bg, rotate: `${TILTS[i]}deg` }}>
              <svg className="hm-quote-mark" width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
                <path d="M4 30 V18 Q4 6 16 3 L17 8 Q10 10 10 17 H16 V30 Z M24 30 V18 Q24 6 36 3 L37 8 Q30 10 30 17 H36 V30 Z" fill="#0D0D0D" opacity=".12" />
              </svg>
              <blockquote className="hm-quote-text">{q.quote}</blockquote>
              <figcaption className="lab-note hm-quote-name">{q.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className={centred ? "hm-dots-row" : undefined}>
        {centred ? prev : null}
        <div className="hm-dots" role="group" aria-label="Pick a quote">
          {QUOTES_.map((q, i) => (
            <button key={q.name} type="button" className={i === at ? "on" : ""} aria-label={`Quote ${i + 1}`} aria-pressed={i === at} onClick={() => pick(i)} />
          ))}
        </div>
        {centred ? next : null}
      </div>
    </div>
  );
}
