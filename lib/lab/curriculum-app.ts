// The CominiLab app's own Curriculum content (cominilab-app-v3: the Trails content package, read the way the parent
// Curriculum screen reads it: short concept names, British spelling, a headline and its points per stage). Exported
// to curriculum-app.json from the app on 2026-11-06; export again when the app's curriculum changes.
import data from "./curriculum-app.json";

export type LabStageKey = "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8";
export type LabGoal = { headline: string; points: string[] };
export type LabConcept = { id: string; name: string; area: string; mark: string; stages: Partial<Record<LabStageKey, LabGoal>> };
export type LabSubjectId = "maths" | "reading" | "science" | "language";
export type LabSubject = { id: LabSubjectId; label: string; concepts: LabConcept[] };

export const LAB_STAGES: LabStageKey[] = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
export const LAB_AGE: Record<LabStageKey, string> = {
  s1: "5–6",
  s2: "6–7",
  s3: "7–8",
  s4: "8–9",
  s5: "9–10",
  s6: "10–11",
  s7: "11–12",
  s8: "12–13",
};
/** The app covers Maths number sense at ages 5 to 7; everything else is "coming soon" there. */
export const LAB_LIVE: { subject: LabSubjectId; stages: LabStageKey[] } = { subject: "maths", stages: ["s1", "s2"] };

export const LAB_SUBJECTS = data as LabSubject[];

/** "number-sense" -> "Number sense"; the long science area names get a short form. */
const AREA_SHORT: Record<string, string> = {
  "everyday-science-chemistry-and-physics-concepts": "Everyday science",
  "the-natural-world-around-us-biology-concepts": "The natural world",
  "scientific-process-and-methods": "Scientific method",
  "problem-solving-and-design-thinking": "Design thinking",
};
export const areaLabel = (area: string) => AREA_SHORT[area] ?? area.charAt(0).toUpperCase() + area.slice(1).replace(/-/g, " ");
