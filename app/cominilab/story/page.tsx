/*
 * /cominilab/story: the owner's page layout (TV - 26.pdf, 2026-11-24). Hero with a live activity that hands over to the
 * next like a window minimising; four facts; the library; "we've been there" with the parent bear and the "No more"
 * cards; the learning path; one idea five ways (hover to play, click to try); fast or slow; "does it actually work?"
 * with Coco's two-question walkthrough; what the parent sees; the day map with its line; then other parents, the
 * school, the price and the questions. Not indexed until the owner signs it off.
 */
import Link from "next/link";
import { LAB_URL } from "@/lib/lab/site";
import { ArrowRight, Check, ChevronDown } from "@/components/lab/Icons";
import { readFileSync } from "fs";
import path from "path";
import { STORY_PANELS } from "@/components/lab/story/StoryPanels";
import { RoadSteps } from "@/components/lab/home/RoadSteps";
import { ParentTabs } from "@/components/lab/home/ParentTabs";
import { Testimonials } from "@/components/lab/home/Testimonials";
import { FinalScene } from "@/components/lab/home/FinalScene";
import { HeroDeck } from "@/components/lab/story/HeroDeck";
import { HeroParallax } from "@/components/lab/story/HeroParallax";
import { HeroChips } from "@/components/lab/story/HeroChips";
import { LibraryGrid } from "@/components/lab/story/LibraryGrid";
import { WeGetYou, type Worry } from "@/components/lab/story/WeGetYou";
import { PathIntro } from "@/components/lab/story/PathIntro";
import { IdeaSlider } from "@/components/lab/story/IdeaSlider";
import { FastSlow } from "@/components/lab/story/FastSlow";
import { DoesItWork } from "@/components/lab/story/DoesItWork";
import { MapReveal } from "@/components/lab/story/MapReveal";
import { LIVE_STEPS } from "@/components/lab/story/LiveSteps";
import { SchoolArc } from "@/components/lab/story/SchoolArc";
import { PlansIn, PriceReveal } from "@/components/lab/story/PriceReveal";
import "../home.css";
import "@/components/lab/next/next.css";
import "@/components/lab/motion/motion.css";
import "./story.css";

export const metadata = { title: { absolute: "CominiLab (story version)" }, robots: { index: false, follow: false } };

const read = (dir: string, f: string) => readFileSync(path.join(process.cwd(), "public/lab/img", dir, f), "utf8");

const WORRIES: Worry[] = [
  { title: "Practice ends in tears", noMore: "No more bargaining", line: "They play on their own, and enjoy it.", art: read("worry-motion", "worksheet-battle.svg"), motion: "mo-ws", calm: read("worry-calm", "calm-worksheet.svg"), alt: "A worksheet scribbled over and crumpled, again and again", calmAlt: "The same desk: the worksheet folded away with a tick, and a tablet where the ducks come home one by one and three stars pop up", tilt: -2.5 },
  { title: "Not sure where they stand", noMore: "No more guessing", line: "You see where they are, and what's next.", art: read("worry-motion", "not-sure.svg"), motion: "mo-ns", calm: read("worry-calm", "calm-report.svg"), alt: "A school report with grades A, B, F and B+, and question marks around it", calmAlt: "The same report, now naming each maths idea with Can do, Getting there or Next, and a tip to try tonight", tilt: 1.5 },
  { title: "No time to plan", noMore: "No more planning", line: "Each day's plan is already made.", art: read("worry-motion", "no-time.svg"), motion: "mo-nt", calm: read("worry-calm", "calm-plan.svg"), alt: "A calendar, a laptop and a cooking pot going round in a loop, and a to-do list still to fill", calmAlt: "Today's plan already made, five activities ticking themselves off, a clock showing 15 minutes and a cup of tea still hot", tilt: -1 },
];

// The live page's four steps, each now the live app screen that comes alive when the car reaches it.
const STEPS = [
  { title: "Check", body: "Your child answers a few friendly questions. No timer, and no right or wrong.", alt: "A level-check question: share the stones equally between three", screen: "check", pic: LIVE_STEPS.check },
  { title: "Report", body: "You see what they already know and what they are ready for next.", alt: "Sara's report: counting getting there, place value and comparing advanced", screen: "report", pic: LIVE_STEPS.report },
  { title: "Daily path", body: "Every day a new plan of up to five activities, matched to your child. No planning from you.", alt: "Today's plan on counting: a counting explainer, the duck story, a sheepdog game and a counting practice sheet", screen: "plan", pic: LIVE_STEPS.plan },
  { title: "Keep up", body: "Their progress updates as they play, so you always see how far they have come.", alt: "The parent view: today's screen time, the activities covered, and counting moving up", screen: "keep", pic: LIVE_STEPS.keep },
];

const SCHOOL_A = ["learnings1", "learnings2", "learnings3", "learnings4", "learnings5", "learnings6", "leanings7", "learnings8", "learnings9"].map((f) => `/images/from-comini/learnings/${f}.webp`);
const SCHOOL_B = ["activities1", "activities2", "activities3", "activities4", "activities5", "activities6", "activities7", "activities8"].map((f) => `/images/from-comini/activities/${f}.webp`);

const FAQ: { q: string; a: React.ReactNode }[] = [
  { q: "Who is CominiLab for?", a: "Children aged 5 to 7 today. Activities for older children are on their way." },
  { q: "Which subjects does it cover?", a: "Maths today: the check, the report and the daily plan are all maths. Reading and science are on their way." },
  { q: "Can I use it for more than one child?", a: "Yes. The free plan has one child profile; the full plan has up to four, each with their own check and daily plan." },
  { q: "Do I need to sit with my child?", a: "No. Children play on their own, and instructions are read aloud. You can see what they did in the parent side whenever you like." },
  { q: "How much screen time is it?", a: "About 15 minutes a day. Each day brings up to five short activities. On the full plan, they can keep exploring the library after that. The free plan stops at three a day." },
  { q: "What if my child is ahead or behind?", a: "The check finds the level they are at now, and the daily plan starts from there. As they play, the plan moves with them, and a level-up check places them again when they have grown." },
  { q: "What devices does it work on?", a: "It works on a phone, tablet or computer." },
  { q: "Does my child need to read?", a: "No. Instructions are read aloud, so younger children can play on their own." },
];


export default function CominiLabStory() {
  return (
    <main className="mo nx st">
      {/* ---------------- 1. hero: the promise, and a real activity playing ---------------- */}
      <section className="hx" aria-labelledby="hero-title">
        <div className="lab-wrap hx-text">
          {/* each line slides up from behind a mask as the page opens */}
          <h1 id="hero-title" className="lab-h1 hx-h"><span className="hx-line"><span>15 minutes of maths</span></span><span className="hx-line"><span>your <span className="lab-mark">child will ask for</span></span></span></h1>
          <p className="lab-lede hx-rise">A daily learning path for ages 5 to 7, picked around what your child knows and what&apos;s next.</p>
          <div className="hx-ctas hx-rise">
            <a className="lab-btn lab-btn-teal" href={LAB_URL}>Start with your child <ArrowRight color="#FFFFFF" /></a>
            <a className="lab-btn lab-btn-white" href="#library">Learn more <ChevronDown size={18} /></a>
          </div>
        </div>
        <HeroDeck />
        <HeroParallax />
      </section>
      <div className="st-chips"><div className="lab-wrap"><HeroChips /></div></div>

      {/* ---------------- 2. the library ---------------- */}
      <section id="library" className="st-lib2" aria-labelledby="lib-title">
        <LibraryGrid>
          <h2 id="lib-title" className="lab-h2">A whole library to explore, and <span className="lab-mark">every page is real maths.</span></h2>
          <p className="lab-body">Your child goes on adventures with friends they love, and the maths happens along the way.</p>
        </LibraryGrid>
      </section>

      {/* ---------------- 3. we've been there ---------------- */}
      <section className="st-get-sec" aria-labelledby="get-title">
        <div className="lab-wrap">
          <WeGetYou heading={<>We&apos;ve been there.<br /><span className="lab-mark">We get it.</span></>} worries={WORRIES} />
        </div>
      </section>

      {/* ---------------- 4. start with your child, we'll handle the rest ---------------- */}
      <section id="how" className="lab-section hm-how" aria-labelledby="how-title">
        <PathIntro>
          <div className="lab-wrap">
            <div className="hm-how-copy st-how-copy">
              <h2 id="how-title" className="lab-h2 st-pathh"><span className="lab-mark">Start with your child.</span><br />We&apos;ll handle the rest!</h2>
            </div>
            <RoadSteps steps={STEPS} />
          </div>
        </PathIntro>
      </section>

      {/* ---------------- 5. one idea, many ways ---------------- */}
      <section id="day" className="lab-section st-ideas-sec" aria-labelledby="day-title">
        <div className="lab-wrap">
          <div className="st-center-head lab-rise">
            <h2 id="day-title" className="lab-h2">One idea. <span className="lab-mark">Many ways</span> to understand it.</h2>
            <p className="lab-body">Every idea comes in different forms, so your child doesn&apos;t just learn it, they understand it.</p>
          </div>
        </div>
        <IdeaSlider />
        <p className="is-tap" aria-hidden="true"><svg width="28" height="44" viewBox="0 0 28 44"><path d="M14 42 V6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M5 15 L14 5 L23 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>Tap a card to try it</p>
      </section>

      {/* ---------------- 6. fast or slow ---------------- */}
      <section className="lab-section st-fs-sec" aria-labelledby="fs-title">
        <div className="lab-wrap st-fs-in">
          <div className="st-fs-copy lab-rise">
            <h2 id="fs-title" className="lab-h2">Fast or slow, <span className="lab-mark">everyone gets there.</span></h2>
            <p className="lab-body">Some children race ahead. Some need an idea to come back another way before it clicks. CominiLab moves each child on when they&apos;re ready, and tells you when they do.</p>
          </div>
          <FastSlow />
        </div>
      </section>

      {/* ---------------- 7. but does it actually work? ---------------- */}
      <section className="st-dw-sec" aria-label="But does it actually work?">
        <DoesItWork />
      </section>

      {/* ---------------- 8. what you see ---------------- */}
      <section id="parents" className="lab-section st-know" aria-labelledby="parents-title">
        <div className="lab-wrap">
          <h2 id="parents-title" className="lab-h2 hm-parents-title lab-rise st-center-head">Know what they&apos;re learning <span className="lab-mark">and what&apos;s next.</span></h2>
          <p className="lab-body hm-parents-line lab-rise st-center-line">No need to sit beside them. One look at the parent side tells you where they are, and one thing to try at home.</p>
          <ParentTabs panels={STORY_PANELS} bodies={{ home: "Easy activities to try with your child at home, matched to what they’re learning." }} />
        </div>
      </section>

      {/* ---------------- 9. the map, then its line ---------------- */}
      <section id="map" className="st-map-sec" aria-label="Your child's day on the map">
        <MapReveal />
      </section>

      {/* ---------------- 10. other parents ---------------- */}
      <section className="lab-section hm-quotes-sec" aria-labelledby="quotes-title">
        <Testimonials centred title={<>The <span className="lab-mark">little changes</span> that make the difference.</>} />
      </section>

      {/* ---------------- 11. made at a real school ---------------- */}
      <section className="lab-section st-school" aria-labelledby="school-title">
        <div className="lab-wrap st-school-head lab-rise">
          <h2 id="school-title" className="lab-h2">Made at a real school,<br /><span className="lab-mark">with real children</span></h2>
          <p className="lab-body">We run Comini Microschool in Mumbai. CominiLab brings what works in our classroom to your home.</p>
        </div>
        <SchoolArc imgs={[...SCHOOL_A, ...SCHOOL_B]} />
      </section>

      {/* ---------------- 12. pricing ---------------- */}
      <section id="pricing" className="lab-section hm-pricing" aria-labelledby="pricing-title">
        <div className="lab-wrap">
          <h2 id="pricing-title" className="lab-h2 hm-center lab-rise">Start free. Find your child&apos;s rhythm.</h2>
          <PlansIn>
            <div className="hm-plan">
              <div className="hm-plan-head">
                <span className="hm-plan-name">Free</span>
                <div className="hm-price"><b>₹0</b> <span className="hm-per">for as long as you like</span></div>
                <p className="lab-small">Start here. See where your child stands and play a little every day.</p>
              </div>
              <ul className="hm-plan-list">
                <li><Check /> The level check and your child&apos;s levels</li>
                <li><Check /> 3 activities a day</li>
                <li><Check /> Ask Coco, 3 questions a day</li>
                <li><Check /> 1 child</li>
              </ul>
              <div className="hm-plan-foot">
                <a className="lab-btn lab-btn-white" href={LAB_URL}>Start free</a>
              </div>
            </div>
            <div className="hm-plan featured">
              <div className="hm-plan-head">
                <span className="hm-plan-name">Full plan</span>
                <PriceReveal />
                <p className="lab-small" style={{ color: "var(--ink-soft)" }}>That is about ₹100 a month. Or pay ₹249 month to month. Try it free for 7 days.</p>
              </div>
              <ul className="hm-plan-list">
                <li><Check /> 5 new activities a day, and play as much as they like</li>
                <li><Check /> Every explainer, story, game and practice sheet</li>
                <li><Check /> The map view</li>
                <li><Check /> The full report, with ideas to try at home</li>
                <li><Check /> Ask Coco as much as you like</li>
                <li><Check /> Up to 4 children</li>
              </ul>
              <div className="hm-plan-foot">
                <a className="lab-btn lab-btn-teal" href={LAB_URL}>Start the free trial <ArrowRight color="#FFFFFF" /></a>
              </div>
            </div>
          </PlansIn>
          <p className="lab-small hm-plan-note lab-rise">One plan covers the whole family. The 7-day trial needs no card on the web.</p>
        </div>
      </section>

      {/* ---------------- 13. questions ---------------- */}
      <section id="faq" className="lab-section hm-faqband" aria-labelledby="faq-title">
        <div className="lab-wrap hm-faq">
          <div className="hm-faq-side lab-rise">
            <h2 id="faq-title" className="lab-h2">Questions parents ask us</h2>
            <p className="lab-body">
              Something else? <Link className="lab-link" href="/cominilab/story/contact">Write to us</Link>
            </p>
          </div>
          <div className="hm-faq-list">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<ChevronDown /></summary>
                <div className="hm-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="final-title">
        <FinalScene title="Ready to start with your child?" body={null} app link={false} />
      </section>
    </main>
  );
}
