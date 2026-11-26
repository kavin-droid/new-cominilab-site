"use client";

import { useId, useState } from "react";
import { LAB_AGE, LAB_STAGES, type LabConcept, type LabStageKey } from "@/lib/lab/curriculum-app";
import { ConceptIcon } from "@/components/curriculum/ConceptIcon";
import { ChevronDown } from "@/components/lab/Icons";

export type AgePick = LabStageKey | "all";

const covered = (concept: LabConcept) => LAB_STAGES.filter((k) => !!concept.stages[k]);

/** A short line for a concept that has nothing at the picked age: when it starts, or when it was last met. */
function notAtAgeLine(concept: LabConcept, age: LabStageKey): string {
  const have = covered(concept);
  if (!have.length) return "";
  const idx = LAB_STAGES.indexOf(age);
  const later = have.find((k) => LAB_STAGES.indexOf(k) > idx);
  if (later) return `Starts at ages ${LAB_AGE[later]}`;
  return `Covered up to ages ${LAB_AGE[have[have.length - 1]]}`;
}

/**
 * One concept, in the app's Curriculum row style: a small icon square, the name, and under it the app's headline for the
 * picked age; closed, a bar of the ages it is taught at sits beside the chevron. Opening it shows the stage picker (the ages with no goal are greyed) and the app's points for that age.
 * When the page-level age picker is set, rows that cover that age open on it.
 */
export function ConceptRow({ concept, age }: { concept: LabConcept; age: AgePick }) {
  const hasAge = age !== "all" && !!concept.stages[age];
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<LabStageKey | null>(() => (hasAge ? (age as LabStageKey) : covered(concept)[0] ?? null));
  const panelId = useId();
  const goal = stage ? concept.stages[stage] : undefined;
  const quiet = age !== "all" && !hasAge ? notAtAgeLine(concept, age) : "";
  const sub = quiet || (hasAge ? concept.stages[age as LabStageKey]!.headline : `Ages ${LAB_AGE[covered(concept)[0]]} to ${LAB_AGE[covered(concept).at(-1)!]}`);

  return (
    <li className={`cu-row${open ? " is-open" : ""}${quiet ? " is-quiet" : ""}`}>
      <button type="button" className="cu-row-head" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
        <span className="cu-row-icon">
          <ConceptIcon concept={concept.name} mark={concept.mark} className="cu-row-glyph" />
        </span>
        <span className="cu-row-text">
          <span className="cu-row-name">{concept.name}</span>
          {open && !quiet ? null : <span className="cu-row-sub">{sub}</span>}
        </span>
        {!open && (
          <span className="cu-strip" aria-hidden="true" title="Ages 5 to 13">
            {LAB_STAGES.map((k) => (
              <i key={k} className={`${concept.stages[k] ? "on" : ""}${k === age ? " at" : ""}`} />
            ))}
          </span>
        )}
        <span className="cu-row-chev">
          <ChevronDown size={22} />
        </span>
      </button>

      {open && (
        <div id={panelId} className="cu-row-panel">
          <div className="cu-stages" role="group" aria-label={`${concept.name}: pick an age`}>
            {LAB_STAGES.map((k) => {
              const label = LAB_AGE[k];
              if (!concept.stages[k]) {
                return (
                  <span key={k} className="cu-stage is-empty" title={`Ages ${label}: not covered yet`}>
                    <span className="cu-vh">Ages {label}: not covered yet</span>
                    <span aria-hidden="true">{label}</span>
                  </span>
                );
              }
              return (
                <button key={k} type="button" className="cu-stage" aria-pressed={k === stage} aria-label={`Ages ${label}`} onClick={() => setStage(k)}>
                  {label}
                </button>
              );
            })}
          </div>

          {stage && goal ? (
            <div className="cu-goal" key={stage}>
              <h3 className="cu-goal-age">Ages {LAB_AGE[stage]}</h3>
              <ul>
                <li>{goal.headline}</li>
                {goal.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </li>
  );
}
