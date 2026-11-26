"use client";

import { useRef, useState } from "react";
import { LAB_AGE, LAB_LIVE, LAB_STAGES, LAB_SUBJECTS, areaLabel, type LabSubjectId } from "@/lib/lab/curriculum-app";
import { ChevronDown } from "@/components/lab/Icons";
import { ConceptRow, type AgePick } from "./ConceptRow";

/** The app's subject icons, the same as the parent Curriculum chips. */
const ICON: Record<LabSubjectId, string> = {
  maths: "/lab/subject-maths.png",
  reading: "/lab/subject-reading.png",
  science: "/lab/subject-science.png",
  language: "/lab/subject-language.png",
};

/** The app's Curriculum screen, opened up: subject chips, age and focus area pickers, and the concept rows. */
export function CurriculumExplorer() {
  const [subjectId, setSubjectId] = useState<LabSubjectId>("maths");
  const [focusArea, setFocusArea] = useState("all");
  const [age, setAge] = useState<AgePick>("s2");
  const top = useRef<HTMLDivElement>(null);
  // The page opens straight on Maths, ages 6 to 7, like the app.
  const subject = LAB_SUBJECTS.find((s) => s.id === subjectId) ?? LAB_SUBJECTS[0];
  const areas = [...new Set(subject.concepts.map((c) => c.area))];

  function pick(id: LabSubjectId) {
    setSubjectId(id);
    setFocusArea("all");
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start" });
  }

  const concepts = focusArea === "all" ? subject.concepts : subject.concepts.filter((c) => c.area === focusArea);
  const live = subject.id === LAB_LIVE.subject && (age === "all" || LAB_LIVE.stages.includes(age));

  return (
    <div ref={top} className="cu-explorer">
      <div className="cu-bar">
        <div className="cu-chips" role="group" aria-label="Subject">
          {LAB_SUBJECTS.map((s) => (
            <button key={s.id} type="button" className="cu-chip" aria-pressed={s.id === subject.id} onClick={() => s.id !== subject.id && pick(s.id)}>
              <img src={ICON[s.id]} alt="" width={30} height={26} />
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cu-view" key={subject.id}>
        <div className="cu-head">
          <div>
            <h2 className="lab-h2">{subject.label}</h2>
            <p className="lab-body cu-head-sub">
              Every concept, staged out from age 5 to 13.{" "}
              {live ? "In the app today." : <span className="cu-soon">Coming soon to the app.</span>}
            </p>
          </div>
          <div className="cu-filters">
            <label className="cu-select">
              <span className="cu-select-label">Age</span>
              <span className="cu-select-box">
                <select value={age} onChange={(e) => setAge(e.target.value as AgePick)}>
                  <option value="all">All ages</option>
                  {LAB_STAGES.map((k) => (
                    <option key={k} value={k}>
                      Ages {LAB_AGE[k]}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </span>
            </label>
            <label className="cu-select">
              <span className="cu-select-label">Focus area</span>
              <span className="cu-select-box">
                <select value={focusArea} onChange={(e) => setFocusArea(e.target.value)}>
                  <option value="all">All</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {areaLabel(a)}
                    </option>
                  ))}
                </select>
                <ChevronDown size={20} />
              </span>
            </label>
          </div>
        </div>

        <p className="cu-count" aria-live="polite">
          <b>
            {subject.label}
            {age !== "all" ? `, ages ${LAB_AGE[age]}` : ""}
          </b>
          <span>{concepts.length} concepts</span>
        </p>

        <ul className="cu-list">
          {concepts.map((c) => (
            <ConceptRow key={`${subject.id}|${c.id}|${age}`} concept={c} age={age} />
          ))}
        </ul>
      </div>
    </div>
  );
}
