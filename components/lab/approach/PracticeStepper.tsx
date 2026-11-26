"use client";

import { useRef } from "react";
import { PicCard } from "../Card";
import { useAutoAdvance } from "../useAutoAdvance";

type Step = { title: string; tagline: string; image: string; dot: string; tilt: number };

/**
 * "Practice has its moment": the four kinds in order. Wide screens show all four in a row; narrower ones show a stepper
 * (1 to 4, joined by a line) over one card at a time, moving on by itself, and tapping a number jumps to it.
 */
export function PracticeStepper({ steps }: { steps: Step[] }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, pick] = useAutoAdvance(steps.length, box, 3400);
  return (
    <div className="ap-stepper" ref={box}>
      <div className="ap-stepper-nav" role="group" aria-label="Steps">
        {steps.map((c, i) => (
          <button key={c.title} type="button" className={`ap-stepper-dot${i === on ? " on" : ""}${i < on ? " done" : ""}`} aria-pressed={i === on} aria-label={`${i + 1}: ${c.title}`} onClick={() => pick(i)}>
            {i + 1}
          </button>
        ))}
      </div>
      <ol className="ap-steps" data-no-reveal>
        {steps.map((c, i) => (
          <li key={c.title} className={`ap-step${i === on ? " on" : ""}`}>
            <span className="ap-step-num" aria-hidden="true">{i + 1}</span>
            <PicCard img={c.image} alt="" name={c.title} dot={c.dot} tilt={c.tilt} picStyle={{ aspectRatio: "4 / 3" }} />
            <p className="ap-step-tag">{c.tagline}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
