"use client";

import { SCHOOL, type PartKey } from "./parts/data";
import { MYRA, PartTag, type Beat } from "./parts/scenarios";
import { useSeen } from "./parts/hooks";
import "./parts/parts.css";

/**
 * "And this is how school teaches the same addition." The contrast to the arrange section above: the same four
 * polaroids (size, pictures, yellow part labels), in school's order (#3 Mechanics, #4 Measurement, #1 Meaning,
 * #2 Motivation) so the flipped order reads at a glance: a sum on the board, a test, the toy on the last page, the empty
 * "never" card. (Owner, 2026-11-26: no subtext, no "Most school starts here" note, no School's way / Myra's way switch, and no grey
 * line inside the cards, only the label and the card's own line.)
 */
const BEATS = Object.fromEntries(MYRA.school.map((b) => [b.part, b])) as Record<PartKey, Beat>;
const TILT: Record<PartKey, number> = { meaning: -1.2, motivation: 0.8, mechanics: -0.6, measurement: 1.1 };

export function FourParts() {
  const [rowRef, seen] = useSeen<HTMLOListElement>(0.25);
  return (
    <div className={`pa pa-f is-school${seen ? " is-seen" : ""}`}>
      <ol ref={rowRef} className="pa-f-row" aria-label="How school teaches it, in order">
        {SCHOOL.map((key, i) => {
          const b = BEATS[key];
          return (
            <li
              key={key}
              className={`pa-f-item${key === "motivation" ? " is-never" : ""}`}
              style={{ ["--i" as string]: i, ["--tilt" as string]: `${TILT[key]}deg` }}
            >
              <figure className="pa-card pa-f-card">
                <PartTag part={key} />
                <div className="pa-pic pa-f-pic">
                  <div className="pa-f-layer is-in" role="img" aria-label={b.alt}>{b.art()}</div>
                </div>
                <figcaption>
                  <span className="pa-line">{b.line}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

