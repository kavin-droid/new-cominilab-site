"use client";

import type { ReactNode } from "react";
import { PARTS, type PartKey } from "./data";
import { SchoolDrill, SchoolTest, SchoolWord, SchoolNever, AvaBed, AvaMotivation, SeedRows } from "./art";

/** one moment of a scenario: which part it is, a picture and one line */
export type Beat = { part: PartKey; line: string; art: () => ReactNode; alt: string };
export type Scenario = { child: string; logical: Beat[]; school: Beat[] };

/* Ava plants seeds in rows  */
export const AVA: Scenario = {
  child: "Ava",
  logical: [
    { part: "meaning", line: "Grandma gives Ava 15 sunflower seeds and her own patch of garden.", alt: "A garden bed, a seed packet and 15 seeds", art: () => <AvaBed rows={[0, 0, 0]} spill={15} mood="wow" /> },
    { part: "motivation", line: "She wants sunflowers taller than her, so each seed needs room to grow.", alt: "Ava looking up at a sunflower taller than the fence", art: () => <AvaMotivation /> },
    { part: "mechanics", line: "She plants them in rows of 5 and counts: 5, 10, 15.", alt: "Seeds planted in rows of 5, with markers 5 and 10", art: () => <AvaBed rows={[5, 5, 2]} stakes={2} packet="some" spill={3} mood="think" /> },
    { part: "measurement", line: "She checks: 3 full rows, no seeds left over.", alt: "Three full rows of 5, each with a tick", art: () => <AvaBed rows={[5, 5, 5]} stakes={3} ticks packet="empty" mood="happy" /> },
  ],
  school: [
    { part: "mechanics", line: "Week one: count in 5s on a worksheet.", alt: "A worksheet of counting in 5s", art: () => <SchoolDrill big="5, 10, __, 20" sums={["15, 20,", "30, __,", "5, __,", "40, 45,", "10, __,", "25, 30,"]} /> },
    { part: "measurement", line: "Then a quiz. 5 out of 10.", alt: "A marked quiz, 5 out of 10", art: () => <SchoolTest score="5/10" rows={[{ t: "5, 10, 15", ok: true }, { t: "20, 25, 35", ok: false }, { t: "10, 15, 25", ok: false }, { t: "30, 35, 40", ok: true }, { t: "15, 20, 30", ok: false }]} /> },
    { part: "meaning", line: "The last page: a farmer plants 3 rows of 5.", alt: "A word problem about a farmer’s rows", art: () => <SchoolWord lines={["A farmer plants 3 rows", "of 5 seeds.", "How many seeds?"]} pic={<SeedRows />} /> },
    { part: "motivation", line: "A reason to care never comes.", alt: "An empty frame, and Ava asking why she needs this", art: () => <SchoolNever sp="raccoon" /> },
  ],
};

/** the part's label chip: "#1 Meaning" (its number is its place in the order that works) */
export function PartTag({ part, n }: { part: PartKey; n?: number }) {
  const p = PARTS[part];
  return (
    <span className={`pa-tag pa-tag-${part}`}>
      <b>{n !== undefined ? `${n}` : p.n}</b>
      {p.name}
    </span>
  );
}
