// The four "how it works" screens, live instead of the still captures (same markup and ss-* styles as
// components/lab/home/StepScreens.tsx), with a little motion that shows what each step does. The motion runs when
// the road's car reaches the step (RoadSteps marks the step .reached), so each screen comes alive as you get to it.
import type { ReactNode } from "react";

const Speaker = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="8" width="5" height="8" fill="#4AC1BD" stroke="#0D0D0D" strokeWidth="1.6" />
    <path d="M7 8 L13 3.5 V20.5 L7 16Z" fill="#FFFFFF" stroke="#0D0D0D" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
const Meter = ({ at }: { at: number }) => (
  <span className="ss-meter ls-meter" aria-hidden="true" style={{ ["--at" as string]: at }}>
    {Array.from({ length: 9 }, (_, i) => <i key={i} />)}
    <b className="ls-pin" />
  </span>
);

// check: nine stones in the pile; once the car arrives they move three to a plate, and the answer goes from 0 to 3
const STONES = [[14, 22], [30, 14], [22, 40], [40, 32], [10, 58], [34, 54], [18, 76], [42, 72], [28, 88]];

export const LIVE_STEPS: Record<string, ReactNode> = {
  check: (
    <span className="ss ss-check ls-check" role="img" aria-label="A level-check question: share nine stones equally between three plates; three go on each plate">
      <span className="ss-bubble"><Speaker />Share these equally between three. How many does each one get?</span>
      <span className="ss-play">
        <span className="ss-pile">
          {STONES.map(([x, y], i) => <i key={i} style={{ left: `${x}%`, top: `${y}%`, ["--i" as string]: i }} />)}
        </span>
        <span className="ss-plates">
          {[0, 1, 2].map((p) => (
            <i key={p}>{[0, 1, 2].map((k) => <b key={k} className="ls-stone" style={{ ["--i" as string]: p + k * 3 }} />)}</i>
          ))}
        </span>
      </span>
      <span className="ss-stepper"><b>−</b><span className="ls-count"><em>0</em><em>3</em></span><b>+</b></span>
    </span>
  ),
  report: (
    <span className="ss ss-report ls-report" role="img" aria-label="Sara's report: counting getting there, place value and comparing advanced, and what she can do now">
      <span className="lab-note ss-note">Sara&apos;s Report</span>
      <span className="ss-sub">Maths (6 to 7 yrs)</span>
      {([["Counting", "Getting there", 3, "warm"], ["Place value", "Advanced", 6, "blue"], ["Comparing", "Advanced", 6, "blue"]] as const).map(([n, st, at, tone], i) => (
        <span key={n} className="ss-level ls-level" style={{ ["--i" as string]: i }}>
          <span className="ss-row"><b>{n}</b><span className={`ss-${tone}`}>{st}</span></span>
          <Meter at={at} />
        </span>
      ))}
      <span className="ss-can ls-can"><b className="ss-teal-t">What Sara can do now</b><span>✓ Counts to 100</span><span>✓ Puts numbers in order</span></span>
    </span>
  ),
  plan: (
    <span className="ss ss-plan ls-plan" role="img" aria-label="Today's plan on counting: a counting explainer, the duck story, a sheepdog game and a practice sheet">
      <span className="ss-top"><img src="/lab/img/coco-talk.svg" alt="" /><b>Today&apos;s plan</b></span>
      <span className="ss-cards">
        {[["/lab/thumbs/counting-stage1.webp", "Counting"], ["/lab/thumbs/story-ducks.webp", "Every Duck Home"], ["/lab/thumbs/roll-call.webp", "Roll Call"], ["/lab/thumbs/pw-counting.webp", "Practice"]].map(([src, name], i) => (
          <span key={name} className="ss-card ls-card" style={{ rotate: `${[-2, 1.5, 1, -1.5][i]}deg`, ["--i" as string]: i }}>
            <img src={src} alt="" />
            <b>{name}</b>
          </span>
        ))}
      </span>
    </span>
  ),
  keep: (
    <span className="ss ss-keep ls-keep" role="img" aria-label="Today: 16 minutes of screen time across stories, games and practice, two activities done, and counting moving up">
      <b className="ss-h">Today</b>
      <span className="ss-box">
        <span className="ss-row"><b>Screen time</b><b>16 min</b></span>
        <span className="ss-bar"><i style={{ width: "38%", background: "var(--story)", ["--i" as string]: 0 }} /><i style={{ width: "44%", background: "var(--game)", ["--i" as string]: 1 }} /><i style={{ width: "18%", background: "var(--puzzle)", ["--i" as string]: 2 }} /></span>
        <span className="ss-key"><span><i style={{ background: "var(--story)" }} />Stories</span><span><i style={{ background: "var(--game)" }} />Games</span><span><i style={{ background: "var(--puzzle)" }} />Practice</span></span>
      </span>
      <span className="ss-box">
        <b>Activities covered</b>
        <span className="ss-done ls-done" style={{ ["--i" as string]: 0 }}>✓ Every Duck Home</span>
        <span className="ss-done ls-done" style={{ ["--i" as string]: 1 }}>✓ Roll Call</span>
      </span>
      <span className="ss-box ss-grow ls-grow"><b className="ss-blue">Moving up</b><span>Counting is getting there</span></span>
    </span>
  ),
};
