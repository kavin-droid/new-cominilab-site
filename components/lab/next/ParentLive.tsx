"use client";

// The parent tabs' app pieces, made usable (owner, 2026-11-19: "let the parent interact with it"). Same look as
// home/ParentPanels.tsx (pp-* classes); sample family Sara, 6 to 7; wording from the app's Counting guide.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Coco, type CocoMood } from "../motion/CocoLive";

const Meter = ({ on, at }: { on: number; at: number }) => (
  <span className="pp-meter" aria-hidden="true">
    {Array.from({ length: 11 }, (_, i) => (
      <i key={i} className={i < on ? (i === at ? "on at" : "on") : ""} />
    ))}
  </span>
);

/** Report: tap an idea to see what she can do now, and what comes next */
function Report() {
  const rows = [
    { n: "Counting", st: "Getting there", tone: "warm", now: ["Counts to 100 with a few slips after 29 and 39"], next: "Counting past 100" },
    { n: "Place value", st: "Advanced", tone: "blue", now: ["Knows 67 is 6 tens and 7 ones", "Puts numbers to 100 in order"], next: "Regroups 3-digit numbers using hundreds, tens and ones" },
    { n: "Comparing", st: "Advanced", tone: "blue", now: ["Says which of two numbers is bigger, and why"], next: "Ordering three-digit numbers" },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="pp">
      <span className="lab-note pp-title">Sara&apos;s Report</span>
      <div className="pp-card pp-rise">
        <b>Maths (6 to 7 yrs)</b>
        {rows.map((r, i) => (
          <div key={r.n} className={`nx-rep${open === i ? " on" : ""}`}>
            <button type="button" className="nx-rep-row" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <b>{r.n}</b>
              <span className={`pp-status pp-${r.tone}`}><i />{r.st}</span>
              <span className="nx-chev" aria-hidden="true">▾</span>
            </button>
            {open === i ? (
              <div className="nx-rep-more">
                <span className="pp-tag">Can do now</span>
                <ul className="pp-list">{r.now.map((x) => <li key={x}>{x}</li>)}</ul>
                <span className="pp-tag">Next</span>
                <p className="pp-p">{r.next}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/** See them grow: play a week of activities and watch the level move up */
function Grow() {
  const [step, setStep] = useState(0); // 0 = start of the week, 7 = end
  const timer = useRef(0);
  const levels = ["Getting there", "Getting there", "Getting there", "Getting there", "On track", "On track", "On track", "On track"];
  const play = () => {
    window.clearInterval(timer.current);
    setStep(0);
    let k = 0;
    timer.current = window.setInterval(() => {
      k += 1;
      setStep(k);
      if (k >= 7) window.clearInterval(timer.current);
    }, 420);
  };
  useEffect(() => () => window.clearInterval(timer.current), []);
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="pp">
      <div className="pp-card pp-rise">
        <div className="pp-row"><b className="pp-big">Counting</b><span className={`pp-status ${step >= 4 ? "pp-good" : "pp-warm"}`}><i />{levels[step]}</span></div>
        <Meter on={3 + Math.round(step / 2)} at={2 + Math.round(step / 2)} />
        <div className="nx-week" aria-label={`${step} of 7 days played`}>
          {days.map((d, i) => <span key={i} className={i < step ? "done" : ""}><i />{d}</span>)}
        </div>
      </div>
      <div className="pp-steps">
        <div className="pp-step"><span className="pp-tag">Now · ages 5 to 6</span><b>Counts, reads and writes to 20</b></div>
        <div className={`pp-step pp-next${step >= 7 ? " nx-reached" : ""}`}><span className="pp-tag">Next · ages 6 to 7</span><b>Counts, reads and writes to 100</b></div>
      </div>
      <button type="button" className="lab-btn lab-btn-teal lab-btn-sm nx-act" onClick={play}>{step >= 7 ? "Play the week again" : "Play a week of activities"}</button>
    </div>
  );
}

/** Ideas to try at home: tick it off when you've tried it, or get another one */
function AtHome() {
  const ideas = [
    { set: "Put out a basket of 100 acorns and 10 small paper cups.", say: "“We need exactly 100 acorns for the winter store. How can we be sure there are 100?”" },
    { set: "Pour out a big pile of about 70 buttons or pasta shapes.", say: "“That's a big pile to count one by one. Can we put them into small cups so we don't lose our place?”" },
    { set: "Lay number cards 1 to 30 in a path, with one card missing.", say: "“Which number is missing? What comes just before it?”" },
  ];
  const [i, setI] = useState(0);
  const [tried, setTried] = useState<number[]>([]);
  const done = tried.includes(i);
  return (
    <div className="pp">
      <span className="lab-note pp-title">Things to try together</span>
      <div className="pp-card pp-rise" key={i}>
        <span className="pp-tag">Set up</span>
        <p className="pp-p">{ideas[i].set}</p>
        <span className="pp-tag">Say this</span>
        <p className="pp-p pp-say">{ideas[i].say}</p>
      </div>
      <div className="nx-acts">
        <button type="button" className={`lab-btn lab-btn-sm ${done ? "lab-btn-teal" : "lab-btn-white"}`} aria-pressed={done} onClick={() => setTried((t) => (done ? t.filter((x) => x !== i) : [...t, i]))}>
          {done ? "✓ We tried it" : "We tried it"}
        </button>
        <button type="button" className="lab-btn lab-btn-white lab-btn-sm" onClick={() => setI((i + 1) % ideas.length)}>Another idea</button>
      </div>
      <p className="nx-try">{tried.length ? `${tried.length} of ${ideas.length} tried this week` : "Idea " + (i + 1) + " of " + ideas.length}</p>
    </div>
  );
}

/** Know when they've got it: tick the signs you've seen */
function Signs() {
  const signs = ["Counts aloud from 1 to 100 smoothly", "Reads any two-digit number shown to her", "Writes two-digit numbers without extra zeros", "Counts out 50 things from a bigger pile"];
  const [seen, setSeen] = useState<number[]>([]);
  const got = seen.length >= 3;
  return (
    <div className="pp">
      <div className="pp-card pp-rise">
        <b className="pp-big">Sara has got this when…</b>
        <span className="nx-try" style={{ margin: 0 }}>Tick what you&apos;ve seen.</span>
        {signs.map((s, i) => {
          const on = seen.includes(i);
          return (
            <button key={s} type="button" className={`nx-sign${on ? " on" : ""}`} aria-pressed={on} onClick={() => setSeen((x) => (on ? x.filter((k) => k !== i) : [...x, i]))}>
              <span className="nx-box" aria-hidden="true">{on ? "✓" : ""}</span>{s}
            </button>
          );
        })}
      </div>
      <div className={`pp-card nx-verdict${got ? " got" : ""}`} aria-live="polite">
        <b className={got ? "pp-good" : "pp-warm"}>{got ? "Sounds like she's got it" : seen.length ? "On the way" : "Not ticked yet"}</b>
        <span>{got ? "Time to move on: CominiLab will bring in counting past 100." : "Keep playing; these signs show up a little at a time."}</span>
      </div>
    </div>
  );
}

/** Ask Coco: pick a question and Coco answers */
function Ask() {
  const qa = [
    { q: "How is Sara doing in maths?", a: "Sara is on track in Maths for ages 6 to 7. She's strong at place value, and counting past 100 is next." },
    { q: "Is she behind?", a: "No. She's getting there with counting and ahead on place value and comparing. A little play each day helps a lot." },
    { q: "What can we do at home tonight?", a: "Share 12 acorns or pasta shapes between three toys together, one at a time, then ask: does every toy have the same? How do you know?" },
  ];
  const [asked, setAsked] = useState<number | null>(null);
  const [shown, setShown] = useState("");
  const [mood, setMood] = useState<CocoMood>("idle");
  useEffect(() => {
    if (asked === null) return;
    const full = qa[asked].a;
    setShown("");
    setMood("think");
    let k = 0;
    let t = 0;
    const start = window.setTimeout(() => {
      setMood("happy");
      t = window.setInterval(() => {
        k += 3;
        setShown(full.slice(0, k));
        if (k >= full.length) window.clearInterval(t);
      }, 30);
    }, 700);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asked]);
  return (
    <div className="pp">
      <div className="nx-ask-head"><span aria-hidden="true"><Coco size={70} mood={mood} /></span><p className="pp-bub" style={{ margin: 0 }}>Hi! I&apos;m Coco. What would you like to know about Sara?</p></div>
      {asked !== null ? (
        <>
          <p className="pp-bub pp-me">{qa[asked].q}</p>
          <p className="pp-bub nx-coco-answer" aria-live="polite">{shown || "…"}</p>
        </>
      ) : null}
      <div className="nx-chips">
        {qa.map((x, i) => (
          <button key={x.q} type="button" className={`nx-chip${asked === i ? " on" : ""}`} onClick={() => setAsked(i)}>{x.q}</button>
        ))}
      </div>
    </div>
  );
}

/** Curriculum: switch subjects (maths is live), tap an idea to see where she is */
function Curriculum() {
  const [subj, setSubj] = useState("Maths");
  const [open, setOpen] = useState<string | null>(null);
  const list = [
    ["Counting", "Getting there", "warm", "Now: counts to 100. Next: counting past 100."],
    ["Place value", "Advanced", "blue", "Now: tens and ones. Next: hundreds."],
    ["Comparing", "Advanced", "blue", "Now: bigger and smaller to 100. Next: three-digit numbers."],
    ["Subitising", "Not placed yet", "grey", "Coming up in a level check soon."],
  ];
  return (
    <div className="pp">
      <div className="pp-chips">
        {["Maths", "Reading", "Science"].map((s) => (
          <button key={s} type="button" className={`nx-subj${subj === s ? " on" : ""}`} aria-pressed={subj === s} onClick={() => setSubj(s)}>{s}</button>
        ))}
      </div>
      {subj === "Maths" ? (
        <>
          <b className="pp-sub">Maths, 6 to 7 years</b>
          {list.map(([n, st, tone, more], i) => (
            <button key={n} type="button" className={`pp-concept pp-rise nx-concept${open === n ? " on" : ""}`} style={{ animationDelay: `${i * 0.08}s` }} aria-expanded={open === n} onClick={() => setOpen(open === n ? null : n)}>
              <span className="nx-concept-top"><b>{n}</b><span className={`pp-status pp-${tone}`}><i />{st}</span></span>
              {open === n ? <span className="nx-concept-more">{more}</span> : null}
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

export const LIVE_PANELS: Record<string, ReactNode> = {
  report: <Report />,
  progress: <Grow />,
  home: <AtHome />,
  reflect: <Signs />,
  ask: <Ask />,
  curriculum: <Curriculum />,
};
