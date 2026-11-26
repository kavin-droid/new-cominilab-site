"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Book, Chart, Chat, Home, Sprout, Target } from "../Icons";
import { PANELS } from "./ParentPanels";

export type Tab = { id: string; icon: ReactNode; title: string; body: string; alt: string };

// Each row is a real part of the parent side of cominilab-app-v3: the report, a concept page's Overview (where the
// child is now and what comes next), its Support and Reflect tabs (written from the Comini Guides), Ask Coco and the
// Curriculum.
const DEFAULT_TABS: Tab[] = [
  { id: "report", icon: <Chart />, title: "A clear report", body: "Each idea is marked as Getting there, On track or Advanced, along with what they can do now.", alt: "Sara's report: maths on track for ages 6 to 7, and what she can do now" },
  { id: "progress", icon: <Sprout />, title: "See them grow", body: "Where your child is now and what comes next. Their level moves up as they play.", alt: "Counting for Sara: getting there. Now she counts, reads and writes to 20; next, to 100" },
  { id: "home", icon: <Home />, title: "Ideas to try at home", body: "Simple things to set up and say together, for every idea.", alt: "Things to try together: put out 100 acorns and 10 paper cups, then ask how to be sure there are 100" },
  { id: "reflect", icon: <Target />, title: "Know when they've got it", body: "Clear signs it's going well, or that they need more time.", alt: "Sara has got this when she counts aloud from 1 to 100 smoothly, with signs it is going well and signs she needs more time" },
  { id: "ask", icon: <Chat />, title: "Ask Coco", body: "Ask about their learning and get a short, clear answer.", alt: "Ask Coco: how is Sara doing in maths? Coco answers with her level and strengths" },
  { id: "curriculum", icon: <Book />, title: "The full curriculum", body: "Every maths idea for their age, with their level on each.", alt: "The curriculum: maths ideas for ages 6 to 7, each with Sara's level, and more below" },
];

/** "Everything you need to know": the rows are tabs, and the app's UI pieces on the right follow the chosen one. */
/** `bodies` replaces a row's line by its id (the story page's own wording, owner 2026-11-25) */
export function ParentTabs({ tabs = DEFAULT_TABS, panels = PANELS, bodies }: { tabs?: Tab[]; panels?: Record<string, ReactNode>; bodies?: Record<string, string> } = {}) {
  const TABS = bodies ? tabs.map((t) => (bodies[t.id] ? { ...t, body: bodies[t.id] } : t)) : tabs;
  const [on, setOn] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = on >= 0 ? TABS[on] : null;

  const onKey = (e: KeyboardEvent, i: number) => {
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? i + 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? i - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const n = (next + TABS.length) % TABS.length;
    setOn(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="hm-tabs">
      <div className="hm-tablist" role="tablist" aria-label="What parents get" aria-orientation="vertical">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={on === i}
            aria-controls="parent-panel"
            tabIndex={(on < 0 ? i === 0 : on === i) ? 0 : -1}
            className="hm-tab"
            style={{ order: i * 2 }}
            // on a phone the open row closes again when tapped (the panel sits right under it there)
            onClick={() => setOn(on === i && window.innerWidth < 1024 ? -1 : i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="hm-tab-ic">{tab.icon}</span>
            <span>
              <b>{tab.title}</b>
              <span className="hm-tab-body">{tab.body}</span>
            </span>
          </button>
        ))}
      </div>
      {t ? (
        <div className="hm-panel" id="parent-panel" role="tabpanel" aria-labelledby={`tab-${t.id}`} style={{ order: on * 2 + 1 }}>
          <div className="hm-panel-stage" key={t.id} role="img" aria-label={t.alt}>
            {panels[t.id]}
          </div>
        </div>
      ) : null}
    </div>
  );
}
