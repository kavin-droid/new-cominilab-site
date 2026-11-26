"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LOGICAL, PARTS, SCHOOL, SCHOOL_NOTE, type PartKey } from "./parts/data";
import { AVA, PartTag, type Beat } from "./parts/scenarios";
import { useReducedMotion, useSeen } from "./parts/hooks";
import "./parts/parts.css";

/**
 * "Learning has four parts. And most education flips it." One calm row of four polaroids: Ava's sunflower seeds in
 * the order that works (Meaning, Motivation, Mechanics, Measurement). The switch slides the same four cards into
 * school's order (a FLIP reorder) and swaps each picture for the school version: worksheet, quiz, word problem, and
 * the empty "never" card.
 */
type Mode = "logical" | "school";

const BEATS: Record<Mode, Record<PartKey, Beat>> = {
  logical: Object.fromEntries(AVA.logical.map((b) => [b.part, b])) as Record<PartKey, Beat>,
  school: Object.fromEntries(AVA.school.map((b) => [b.part, b])) as Record<PartKey, Beat>,
};
const TILT: Record<PartKey, number> = { meaning: -1.2, motivation: 0.8, mechanics: -0.6, measurement: 1.1 };

export function FourParts() {
  const [mode, setMode] = useState<Mode>("logical");
  const [leaving, setLeaving] = useState<Mode | null>(null);
  const [rowRef, seen] = useSeen<HTMLOListElement>(0.25);
  const rm = useReducedMotion();
  const items = useRef(new Map<PartKey, HTMLLIElement>());
  const first = useRef(new Map<PartKey, DOMRect>());
  const timer = useRef<number | undefined>(undefined);
  const school = mode === "school";
  const order = school ? SCHOOL : LOGICAL;

  const pick = (next: Mode) => {
    if (next === mode) return;
    first.current.clear();
    items.current.forEach((el, k) => first.current.set(k, el.getBoundingClientRect()));
    setLeaving(rm ? null : mode);
    setMode(next);
    window.clearTimeout(timer.current);
    if (!rm) timer.current = window.setTimeout(() => setLeaving(null), 650);
  };
  useEffect(() => () => window.clearTimeout(timer.current), []);

  // FLIP: every card starts where it was and glides to its new place
  useLayoutEffect(() => {
    if (rm || first.current.size === 0) return;
    order.forEach((k, i) => {
      const el = items.current.get(k);
      const a = first.current.get(k);
      if (!el || !a) return;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left, dy = a.top - b.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      // the card travelling furthest rides on top; on a tie, the one moving back (leftwards) does
      const z = String(2 + Math.round(Math.hypot(dx, dy) / 80) * 2 + (dx > 0 ? 1 : 0));
      el.animate(
        [
          { transform: `translate(${dx}px, ${dy}px)`, zIndex: z },
          { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 26}px) scale(1.03)`, zIndex: z, offset: 0.5 },
          { transform: "none", zIndex: z },
        ],
        { duration: 760, delay: i * 40, easing: "cubic-bezier(0.45, 0, 0.2, 1)", fill: "backwards" },
      );
    });
    first.current.clear();
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`pa pa-f is-${mode}${seen ? " is-seen" : ""}`}>
      <div className="pa-switch" role="radiogroup" aria-label="Whose way">
        <button type="button" role="radio" aria-checked={!school} className={!school ? "on" : ""} onClick={() => pick("logical")}>Ava’s way</button>
        <button type="button" role="radio" aria-checked={school} className={school ? "on" : ""} onClick={() => pick("school")}>School’s way</button>
        <span className="pa-knob" aria-hidden="true" />
      </div>

      <ol ref={rowRef} className="pa-f-row" aria-label={school ? "School’s way, in order" : "Ava’s way, in order"}>
        {order.map((key, i) => {
          const b = BEATS[mode][key];
          const never = school && key === "motivation";
          const old = leaving ? BEATS[leaving][key] : null;
          return (
            <li
              key={key}
              ref={(el) => { if (el) items.current.set(key, el); else items.current.delete(key); }}
              className={`pa-f-item${never ? " is-never" : ""}`}
              style={{ ["--i" as string]: LOGICAL.indexOf(key), ["--tilt" as string]: `${TILT[key]}deg` }}
            >
              <figure className="pa-card pa-f-card">
                <div className="pa-pic pa-f-pic">
                  {old ? <div className="pa-f-layer is-out" aria-hidden="true">{old.art()}</div> : null}
                  <div className="pa-f-layer is-in" key={mode} role="img" aria-label={b.alt}>{b.art()}</div>
                </div>
                <figcaption>
                  <PartTag part={key} />
                  <span className="pa-line" key={mode}>{b.line}</span>
                  <span className="pa-body">{PARTS[key].body}</span>
                </figcaption>
              </figure>
              {school && i === 0 ? <span className="lab-note pa-note">{SCHOOL_NOTE}</span> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
