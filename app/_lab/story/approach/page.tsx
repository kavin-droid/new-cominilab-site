import type { Metadata } from "next";
import { ChevronDown } from "@/components/lab/Icons";
import { SchoolArc } from "@/components/lab/story/SchoolArc";
import { FinalScene } from "@/components/lab/home/FinalScene";
import { LazyClip } from "@/components/lab/approach2/LazyClip";
import { WorthFlip } from "@/components/lab/approach2/WorthFlip";
import { FourParts } from "@/components/lab/approach2/FourParts";
import { ArrangeIntro } from "@/components/lab/approach2/ArrangeIntro";
import { WorldGames } from "@/components/lab/approach2/WorldGames";
import { CareFlip } from "@/components/lab/approach2/CareFlip";
import { AngleSlider } from "@/components/lab/approach2/AngleSlider";
import { RoadSteps } from "@/components/lab/home/RoadSteps";
import { BridgePhone } from "@/components/lab/approach2/BridgePhone";
import "../../home.css";
import "@/components/lab/next/next.css";
import "@/components/lab/motion/motion.css";
import "../story.css";
import "./approach2.css";

// The story version's approach page (owner's comments on the redesign canvas, 2026-11-25): the old page's words, kept
// as they were, made visual and interactive in the landing page's language. /cominilab/approach is left as it was.
export const metadata: Metadata = {
  title: "Our approach",
  description: "Meaning before mechanics. How CominiLab starts maths from what your child loves, so ideas make sense before the practice begins.",
};

const HERO_PHOTOS = ["heroColoring", "heroStories", "heroGroup", "heroMap", "heroCricket", "heroMuseum", "heroArt"].map((f) => `/images/approach/${f}.webp`);

// practice has its moment: the home page's road with the car, one stop per kind of activity, Practice last; each
// stop shows a short looping preview of the real activity (owner, 2026-11-26)
// each practice stop's preview clip downloads only when it scrolls near (LazyClip)
const clip = (name: string, alt: string) => <LazyClip name={name} alt={alt} />;
const PRACTICE = [
  { title: "Stories", body: "Make it meaningful.", alt: "The duck story", screen: "story", pic: clip("idea-story", "The duck story playing") },
  { title: "Explainers", body: "Make it clear.", alt: "A counting explainer", screen: "explainer", pic: clip("idea-explainer", "A counting explainer playing") },
  { title: "Games", body: "Make it familiar.", alt: "Roll Call, the sheepdog game", screen: "game", pic: clip("practice-game", "Roll Call, the sheepdog game, playing") },
  { title: "Practice", body: "Make it stick.", alt: "An addition practice sheet", screen: "practice", pic: clip("practice-sheet", "An addition practice sheet being answered") },
];

export default function StoryApproachPage() {
  return (
    <main className="mo nx st ap2">
      {/* hero: the line, then the photos on the arc that runs past like the school section's, a friend peeking */}
      <section className="ap2-hero" aria-labelledby="ap2-title">
        <div className="lab-wrap ap2-head">
          <h1 id="ap2-title" className="lab-h1 ap2-h1"><span className="hx-line"><span><span className="lab-mark">Meaning</span> before mechanics</span></span></h1>
          <p className="lab-lede hx-rise">Kids don&rsquo;t wake up thinking about subtraction or grammar. They wake up curious about the world. That&rsquo;s where learning should begin.</p>
          <a href="#arrange" className="lab-btn lab-btn-white hx-rise ap2-cta">Learn more <ChevronDown size={20} /></a>
        </div>
        <div className="ap2-arc st-school"><SchoolArc imgs={[...HERO_PHOTOS, ...HERO_PHOTOS]} label="Children curious about the world" enter={6} /></div>
      </section>

      {/* a child's week, mixed up: the reader puts it back in order, a note slaps on ("You just helped Myra learn
          addition!"), then a sticky scroll stage lands the four parts one beat per scroll step (owner, 2026-11-26) */}
      <ArrangeIntro />

      {/* the contrast: the same four cards in school's order */}
      <section id="four-parts" className="lab-section ap2-parts" aria-labelledby="parts-title">
        <div className="lab-wrap">
          <div className="ap2-center">
            <h2 id="parts-title" className="lab-h2">And this is how school teaches the same addition.</h2>
          </div>
          <FourParts />
        </div>
      </section>

      {/* children learn better when they care: the line flips from "told" to "care" as you scroll (owner, 2026-11-26) */}
      <CareFlip />

      {/* start in their world: laid out like the home page's "Know what they're learning" section, each tab's little
          game playing itself in the panel (owner, 2026-11-26) */}
      <section className="lab-section" aria-labelledby="world-title">
        <div className="lab-wrap">
          <h2 id="world-title" className="lab-h2 hm-parents-title st-center-head wt-head">Start in <span className="lab-mark">their world</span></h2>
          <p className="lab-body hm-parents-line st-center-line">Maths makes sense faster in a world they already know.</p>
          <WorldGames />
        </div>
      </section>

      {/* keep the whole experience: one drag slider, the angles worksheet vs the treasure hunt map, redrawn in our style */}
      <section className="lab-section ap2-cmp" aria-labelledby="whole-title">
        <div className="lab-wrap">
          <div className="ap2-center">
            <h2 id="whole-title" className="lab-h2">Keep the whole experience</h2>
            <p className="lab-lede">Children remember ideas better when they understand what they&rsquo;re for.</p>
          </div>
          <AngleSlider />
        </div>
      </section>

      {/* practice has its moment: Pip hops the stepping stones, Practice comes last */}
      <section className="lab-section hm-how ap2-practice" aria-labelledby="practice-title">
        <div className="lab-wrap">
          <div className="ap2-center">
            <h2 id="practice-title" className="lab-h2">Practice has its moment</h2>
            <p className="lab-lede">Drills aren&rsquo;t the enemy. They&rsquo;re incredibly useful once the idea already makes sense.</p>
          </div>
          <RoadSteps steps={PRACTICE} />
        </div>
      </section>

      {/* every child needs a different bridge, and technology makes it easy: one sticky section; the photos float in
          round the heading, the technology line and a phone take over, then drag a photo into the phone to see the
          same sum in that child's world (owner, 2026-11-26) */}
      <section className="bph-sec" aria-labelledby="bridge-title">
        <BridgePhone />
      </section>

      {/* the last word, then the home page's closing call (owner, 2026-11-26) */}
      <WorthFlip />
      <section className="ap2-close" aria-labelledby="final-title">
        <FinalScene title="Ready to start with your child?" body={null} app link={false} />
      </section>
    </main>
  );
}
