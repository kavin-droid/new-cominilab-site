"use client";

// /story's parent panels: /next's live panels, with "See them grow" and "Ideas to try at home" redrawn
// (owner, 2026-11-23: the grow widget needed a better design; the home ideas get pictures in the worry cards' style).
import { useEffect, useRef, useState, type ReactNode } from "react";
import { LIVE_PANELS } from "../next/ParentLive";
import { CupsOfTenArt, FairShareArt, MissingCardArt } from "./HomeArt";
import { LAB_SUBJECTS } from "@/lib/lab/curriculum-app";

const LEVELS = ["Not started", "Getting there", "On track", "Advanced"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// what she played each day (kind colours), and on which day her level moved
const PLAYED = ["var(--explain)", "var(--story)", "var(--game)", "var(--game)", "var(--puzzle)", "var(--story)", "var(--game)"];
const MOVE_DAY = 4;
// what each day held (owner, 2026-11-25: the card under the week updates as the days fill)
const LOG: { kind: string; did: string }[] = [
  { kind: "Explainer", did: "Watched “Count the ducks”" },
  { kind: "Story", did: "Read “Every Duck Home”" },
  { kind: "Game", did: "Herded sheep in Roll Call" },
  { kind: "Game", did: "Caught fruit in Fruit Catch" },
  { kind: "Check", did: "Passed the counting check, and moved up" },
  { kind: "Worksheet", did: "Did a counting practice sheet" },
  { kind: "Game", did: "Fed the frogs in Bug Feast" },
];

/** See them grow: a week plays itself; each day fills, and on Friday Sara moves up a level and the next idea opens */
function Grow() {
  const box = useRef<HTMLDivElement>(null);
  const [day, setDay] = useState(0);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDay(7); return; }
    setDay(0);
    let k = 0;
    const t = window.setInterval(() => {
      k += 1;
      setDay(k);
      if (k >= 8) window.clearInterval(t);
    }, 900);
    return () => window.clearInterval(t);
  }, [run]);
  const level = day > MOVE_DAY ? 2 : 1;
  return (
    <div className="pp sg" ref={box}>
      <div className="pp-card sg-card">
        <div className="sg-top">
          <b className="pp-big">Counting</b>
          <span className={`pp-status ${level >= 2 ? "pp-good" : "pp-warm"}`}><i />{LEVELS[level]}</span>
        </div>
        <div className="sg-track" aria-label={`Sara is ${LEVELS[level]}`}>
          <span className="sg-line"><i style={{ width: `${(level / 3) * 100}%` }} /></span>
          {LEVELS.map((l, i) => (
            <span key={l} className={`sg-node${i <= level ? " on" : ""}`} style={{ left: `${(i / 3) * 100}%` }}>
              <i /><em>{l}</em>
            </span>
          ))}
          <span className="sg-kid" style={{ left: `${(level / 3) * 100}%` }}><img src="/lab/cast/koala.png" alt="" width={44} height={42} /></span>
        </div>
        <div className="sg-week" aria-label={`${Math.min(day, 7)} of 7 days played`}>
          {DAYS.map((d, i) => (
            <span key={d} className={`sg-day${i < day ? " done" : ""}${i === MOVE_DAY && day > MOVE_DAY ? " up" : ""}`}>
              <i style={{ ["--k" as string]: PLAYED[i] }}>{i === MOVE_DAY && day > MOVE_DAY ? "★" : ""}</i>
              <em>{d}</em>
            </span>
          ))}
        </div>
      </div>
      {day >= 8 ? (
        <div className="sg-next open" key="open">
          <span className="pp-tag">Opened this week</span>
          <b>Counts, reads and writes to 100</b>
          <span className="pp-muted">Her plan moves on to it from tomorrow.</span>
        </div>
      ) : (
        <div className={`sg-next sg-log${day > 0 ? " on" : ""}${day === MOVE_DAY + 1 ? " up" : ""}`} key={day} aria-live="polite">
          <span className="pp-tag">{day > 0 ? `${DAYS[day - 1]} · ${LOG[day - 1].kind}` : "This week"}</span>
          <b>{day > 0 ? LOG[day - 1].did : "Sara's week, one day at a time"}</b>
        </div>
      )}
      <button type="button" className="lab-link sg-again" onClick={() => setRun((r) => r + 1)}>Play the week again</button>
    </div>
  );
}

// ---- the home ideas' pictures, in the worry cards' flat style (600 x 600, one ground colour, layered shapes) ----
/** Ideas to try at home (owner, 2026-11-25): a flip card. The front is the set-up as a picture, playing a little; it
 *  turns over by itself after a moment to show the idea (what to set up and what to say), and can be turned back. */
function AtHome() {
  // the pictures are the owner's picks from the design canvas (HomeArt.tsx), each card named, with what to look for
  const ideas: { art: ReactNode; name: string; alt: string; set: string; say: string; listen: string }[] = [
    { art: <FairShareArt />, name: "Fair shares", alt: "From above: a basket of acorns on a wooden table and three plates for a squirrel, a bunny and a raccoon, the acorns being dealt out one at a time", set: "Put 12 acorns (or pebbles) in a bowl, and three plates for three toys.", say: "“Our three friends want the same number of acorns. How can we share them fairly?”", listen: "dealing them out one at a time, then checking every plate has the same." },
    { art: <CupsOfTenArt />, name: "Cups of ten", alt: "A bunny peeks over a table with a heap of pasta and buttons, and cups of ten being filled", set: "Pour out a big pile of about 70 buttons or pasta shapes.", say: "“That's a big pile to count one by one. Can we put them into cups of ten so we don't lose our place?”", listen: "counting the full cups as 10, 20, 30, then counting on the loose ones." },
    { art: <MissingCardArt />, name: "The missing card", alt: "Three big number cards: 16, a dashed card with a question mark, and 18", set: "Lay number cards 1 to 30 in a path, with one card missing.", say: "“Which number is missing? What comes just before it?”", listen: "counting on from the card before the gap, not starting again at 1." },
  ];
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const it = ideas[i];
  useEffect(() => {
    setFlip(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setFlip(true), 2600);
    return () => window.clearTimeout(t);
  }, [i]);
  return (
    <div className="pp sh3">
      <button type="button" className={`sh3-card${flip ? " flipped" : ""}`} key={i} onClick={() => setFlip((f) => !f)} aria-label={flip ? "Show the picture" : "Show the idea"}>
        <span className="sh3-face sh3-front">
          <span className="sh3-pic" role="img" aria-label={it.alt}>{it.art}</span>
          <span className="sh3-strip">{it.name} <em>Tap to turn over</em></span>
        </span>
        <span className="sh3-face sh3-back">
          <span className="pp-tag">Set up</span>
          <span className="pp-p">{it.set}</span>
          <span className="pp-tag">Say this</span>
          <span className="pp-p pp-say">{it.say}</span>
          <span className="pp-p sh3-listen"><b>Look for:</b> {it.listen}</span>
          <em className="sh3-hint">Tap to see the picture</em>
        </span>
      </button>
      {/* another idea: a plain refresh icon, no button look (owner, 2026-11-25) */}
      <button type="button" className="sh3-refresh" key={`r${i}`} onClick={() => setI((i + 1) % ideas.length)} aria-label="Another idea">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 3h5v5" /><path d="M4 20 21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" /></svg>
      </button>
    </div>
  );
}

/** The full curriculum, with the benchmarks the curriculum page shows (lib/lab/curriculum-app: the app's own content) */
const MATHS = LAB_SUBJECTS.find((x) => x.id === "maths")!;
const benchmark = (name: string, stage: "s2" | "s3") => MATHS.concepts.find((c) => c.name === name)?.stages[stage]?.headline ?? "";
function Curriculum() {
  const [subj, setSubj] = useState("Maths");
  const [open, setOpen] = useState<string | null>("Counting");
  const list: [string, string, string][] = [
    ["Counting", "Getting there", "warm"],
    ["Place value", "Advanced", "blue"],
    ["Comparing", "On track", "good"],
    ["Subitising", "Not placed yet", "grey"],
  ];
  return (
    <div className="pp">
      <div className="pp-chips">
        {["Maths", "Reading", "Science"].map((x) => (
          <button key={x} type="button" className={`nx-subj${subj === x ? " on" : ""}`} aria-pressed={subj === x} onClick={() => setSubj(x)}>{x}</button>
        ))}
      </div>
      {subj === "Maths" ? (
        <>
          <b className="pp-sub">Maths, 6 to 7 years</b>
          {list.map(([n, st, tone], k) => (
            <button key={n} type="button" className={`pp-concept pp-rise nx-concept${open === n ? " on" : ""}`} style={{ animationDelay: `${k * 0.08}s` }} aria-expanded={open === n} onClick={() => setOpen(open === n ? null : n)}>
              <span className="nx-concept-top"><b>{n}</b><span className={`pp-status pp-${tone}`}><i />{st}</span></span>
              {open === n ? (
                <span className="nx-concept-more">
                  {tone === "grey" ? `Coming up in a level check: ${benchmark(n, "s2")}.` : `This stage: ${benchmark(n, "s2")}. Next: ${benchmark(n, "s3")}.`}
                </span>
              ) : null}
            </button>
          ))}
          <span className="pp-more" aria-hidden="true"><i /><i /><i /></span>
        </>
      ) : (
        <div className="pp-card pp-rise nx-soon" key={subj}>
          <b>{subj} is on its way</b>
          <span className="pp-muted">Maths is in the app today. {subj} joins next, with the same check and daily plan.</span>
        </div>
      )}
    </div>
  );
}

export const STORY_PANELS: Record<string, ReactNode> = { ...LIVE_PANELS, progress: <Grow />, home: <AtHome />, curriculum: <Curriculum /> };
