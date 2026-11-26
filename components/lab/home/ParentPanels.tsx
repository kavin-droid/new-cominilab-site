// The parent tabs' right side: the app's own UI pieces for each row (rebuilt from the parent screens of
// cominilab-app-v3, demo family Sara and Mia), instead of a device frame. Wording from the demo family (Sara, 7)
// and the Counting guide (src/data/guides.json), shortened. Sample data.
import type { ReactNode } from "react";

const Meter = ({ on, at }: { on: number; at: number }) => (
  <span className="pp-meter" aria-hidden="true">
    {Array.from({ length: 11 }, (_, i) => (
      <i key={i} className={i < on ? (i === at ? "on at" : "on") : ""} />
    ))}
  </span>
);

const Down = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4v15m0 0-6-6m6 6 6-6" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PANELS: Record<string, ReactNode> = {
  report: (
    <div className="pp">
      <span className="lab-note pp-title">Sara&apos;s Report</span>
      <div className="pp-card pp-rise">
        <div className="pp-row"><b>Maths (6 to 7 yrs)</b><span className="pp-good">On track <i className="pp-dot" /></span></div>
        <Meter on={6} at={5} />
        <div className="pp-part">
          <b className="pp-good">What Sara can do now</b>
          <ul className="pp-list">
            <li>Adds 2-digit numbers fluently</li>
            <li>Puts numbers to 100 in order</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  progress: (
    <div className="pp">
      <div className="pp-card pp-rise">
        <div className="pp-row"><b className="pp-big">Counting</b><span className="pp-status pp-warm"><i />Getting there</span></div>
        <p className="pp-q"><b>Is my child fine?</b> Yes. Sara is on the way, and a little play helps a lot.</p>
      </div>
      <div className="pp-steps">
        <div className="pp-step pp-rise" style={{ animationDelay: ".12s" }}>
          <span className="pp-tag">Now · ages 5 to 6</span>
          <b>Counts, reads and writes to 20</b>
          <span className="pp-muted">17 = seventeen</span>
        </div>
        <Down />
        <div className="pp-step pp-next pp-rise" style={{ animationDelay: ".24s" }}>
          <span className="pp-tag">Next · ages 6 to 7</span>
          <b>Counts, reads and writes to 100</b>
          <span className="pp-muted">67 = sixty-seven</span>
        </div>
      </div>
    </div>
  ),
  home: (
    <div className="pp">
      <span className="lab-note pp-title">Things to try together</span>
      <div className="pp-card pp-rise">
        <span className="pp-tag">Set up</span>
        <p className="pp-p">Put out a basket of 100 acorns and 10 small paper cups.</p>
        <span className="pp-tag">Say this</span>
        <p className="pp-p pp-say">&ldquo;We need exactly 100 acorns for the winter store. How can we arrange them so we are sure there are 100?&rdquo;</p>
        <div className="pp-part pp-tip">
          <b>Before you start</b>
          <span className="pp-muted">Counting aloud often goes wrong after 29, 39 and 49. Listen to how your child moves to the next ten.</span>
        </div>
      </div>
    </div>
  ),
  reflect: (
    <div className="pp">
      <div className="pp-card pp-rise">
        <b className="pp-big">Sara has got this when…</b>
        <ul className="pp-list">
          <li>Counts aloud from 1 to 100 smoothly</li>
          <li>Reads any two-digit number shown to her</li>
        </ul>
      </div>
      <div className="pp-pair">
        <div className="pp-card pp-rise" style={{ animationDelay: ".12s" }}>
          <b className="pp-good">Going well</b>
          <ul className="pp-list"><li>Finds numbers on a 100 chart without counting from 1</li></ul>
        </div>
        <div className="pp-card pp-rise" style={{ animationDelay: ".24s" }}>
          <b className="pp-warm">Needs more time</b>
          <ul className="pp-list"><li>Writes 508 for <span style={{ whiteSpace: "nowrap" }}>fifty-eight</span></li><li>Loses track when counting past 30</li></ul>
        </div>
      </div>
    </div>
  ),
  ask: (
    <div className="pp">
      <p className="pp-bub pp-rise">Hi! I&apos;m Coco. Ask me anything about Sara&apos;s learning.</p>
      <p className="pp-bub pp-me pp-rise" style={{ animationDelay: ".15s" }}>How is Sara doing in maths?</p>
      <div className="pp-bub pp-rise" style={{ animationDelay: ".3s" }}>
        Sara is on track in Maths, around ages 6 to 7.
        <ul className="pp-list">
          <li>Strong at place value</li>
          <li>Counting past 100 is next</li>
        </ul>
      </div>
      <div className="pp-ask pp-rise" style={{ animationDelay: ".4s" }}>
        <span>Ask about Sara&apos;s learning</span>
        <b aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h13M12 6l6 6-6 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></b>
      </div>
    </div>
  ),
  curriculum: (
    <div className="pp">
      <div className="pp-chips"><span className="on">Maths</span><span>Reading</span><span>Science</span></div>
      <b className="pp-sub">Maths, 6 to 7 years</b>
      {[["Counting", "Getting there", "warm"], ["Place value", "Advanced", "blue"], ["Comparing", "Advanced", "blue"], ["Subitising", "Not placed yet", "grey"]].map(([n, st, tone], i) => (
        <div key={n} className="pp-concept pp-rise" style={{ animationDelay: `${i * 0.1}s` }}>
          <b>{n}</b><span className={`pp-status pp-${tone}`}><i />{st}</span>
        </div>
      ))}
      <span className="pp-more" aria-hidden="true"><i /><i /><i /></span>
    </div>
  ),
};
