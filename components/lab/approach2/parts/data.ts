/** The four parts. body is the page's own wording (kept word for word from the old approach page); short is the few
 * words the cards show under their line (owner, 2026-11-26: the cards were too text heavy). */
export type PartKey = "meaning" | "motivation" | "mechanics" | "measurement";
export type Part = { key: PartKey; n: string; name: string; body: string; short: string };

export const PARTS: Record<PartKey, Part> = {
  meaning: { key: "meaning", n: "#1", name: "Meaning", body: "Connecting what you’re learning to something that matters in your world.", short: "Why it matters" },
  motivation: { key: "motivation", n: "#2", name: "Motivation", body: "Finding a reason to care enough to keep exploring.", short: "A reason to care" },
  mechanics: { key: "mechanics", n: "#3", name: "Mechanics", body: "Learning how something works and practising how to use it.", short: "How it works" },
  measurement: { key: "measurement", n: "#4", name: "Measurement", body: "Checking what they’ve understood and where they need to go next.", short: "Checking what they know" },
};

/** the order that works, and the order most school uses */
export const LOGICAL: PartKey[] = ["meaning", "motivation", "mechanics", "measurement"];
export const SCHOOL: PartKey[] = ["mechanics", "measurement", "meaning", "motivation"];

export const SCHOOL_NOTE = "Most school starts here";
