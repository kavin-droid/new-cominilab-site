"use client";

import type { ReactNode } from "react";
import { PARTS, type PartKey } from "./data";
import { MyraAdd, MyraCheck, MyraToy, MyraWant, SchoolBoard, SchoolNever, SchoolTest, SchoolWord } from "./art";

/** one moment of a scenario: which part it is, a picture and one short line */
export type Beat = { part: PartKey; line: string; art: () => ReactNode; alt: string };
export type Scenario = { child: string; logical: Beat[]; school: Beat[] };

/* Myra saves up her pocket money for a toy car (owner, 2026-11-26: saving up for a toy is a child's own habit). The
   lines are a few words each, like the relief cards on the home page. */
export const MYRA: Scenario = {
  child: "Karan",
  logical: [
    { part: "meaning", line: "Karan spots a ₹50 toy car.", alt: "A red toy car with a ₹50 price tag", art: () => <MyraToy /> },
    { part: "motivation", line: "He really wants it.", alt: "A piggy bank with a big heart above it", art: () => <MyraWant /> },
    { part: "mechanics", line: "He adds ₹10 each week.", alt: "A ₹10 coin dropping into the piggy bank, plus 10", art: () => <MyraAdd /> },
    { part: "measurement", line: "He counts ₹50. Enough!", alt: "A stack of five coins with a tick", art: () => <MyraCheck /> },
  ],
  school: [
    { part: "mechanics", line: "Sums on the board.", alt: "A blackboard with 30 + 20 = ?", art: () => <SchoolBoard /> },
    { part: "measurement", line: "Then a test.", alt: "A test paper marked 5 out of 10", art: () => <SchoolTest /> },
    { part: "meaning", line: "The toy is on the last page.", alt: "An open textbook with a small toy car on the last page", art: () => <SchoolWord /> },
    { part: "motivation", line: "A reason never comes.", alt: "An empty frame with a question mark", art: () => <SchoolNever /> },
  ],
};

/** the part's label: "#1 Meaning" on a yellow note (its number is its place in the order that works) */
export function PartTag({ part, n }: { part: PartKey; n?: number }) {
  const p = PARTS[part];
  return <span className={`lab-note pa-tag pa-tag-${part}`}>{n !== undefined ? `#${n}` : p.n} {p.name}</span>;
}
