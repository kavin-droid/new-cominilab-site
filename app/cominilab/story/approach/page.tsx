import type { Metadata } from "next";
import { ChevronDown } from "@/components/lab/Icons";
import { SchoolArc } from "@/components/lab/story/SchoolArc";
import { FinalScene } from "@/components/lab/home/FinalScene";
import { FourParts } from "@/components/lab/approach2/FourParts";
import { WorldGames } from "@/components/lab/approach2/WorldGames";
import { AngleSlider } from "@/components/lab/approach2/AngleSlider";
import { RoadSteps } from "@/components/lab/home/RoadSteps";
import { BridgePicker } from "@/components/lab/approach2/BridgePicker";
import "../../home.css";
import "@/components/lab/next/next.css";
import "@/components/lab/motion/motion.css";
import "../story.css";
import "./approach2.css";

// The story version's approach page (owner's comments on the redesign canvas, 2026-11-25): the old page's words, kept
// as they were, made visual and interactive in the landing page's language. /cominilab/approach is left as it was.
export const metadata: Metadata = {
  title: "Our approach",
  description: "Learning has four parts, and most education flips it. How Comini starts from meaning, not mechanics.",
  robots: { index: false, follow: false },
};

const HERO_PHOTOS = ["heroColoring", "heroStories", "heroGroup", "heroMap", "heroCricket", "heroMuseum", "heroArt"].map((f) => `/images/approach/${f}.webp`);

// practice has its moment: the home page's road with the car, one stop per kind of activity, Practice last
const PRACTICE = [
  { title: "Stories", body: "Make it meaningful.", alt: "The duck story", screen: "story", img: "/lab/thumbs/story-ducks.webp" },
  { title: "Explainers", body: "Make it clear.", alt: "An addition explainer", screen: "explainer", img: "/lab/thumbs/addition-stage1.webp" },
  { title: "Games", body: "Make it familiar.", alt: "Roll Call, the sheepdog game", screen: "game", img: "/lab/thumbs/roll-call.webp" },
  { title: "Practice", body: "Make it stick.", alt: "An addition practice sheet", screen: "practice", img: "/lab/thumbs/pw-addition.webp" },
];

export default function StoryApproachPage() {
  return (
    <main className="mo nx st ap2">
      {/* hero: the line, then the photos on the arc that runs past like the school section's, a friend peeking */}
      <section className="ap2-hero" aria-labelledby="ap2-title">
        <div className="lab-wrap ap2-head">
          <h1 id="ap2-title" className="lab-h1 ap2-h1"><span className="hx-line"><span><span className="lab-mark">Meaning</span> before mechanics</span></span></h1>
          <p className="lab-lede hx-rise">Kids don&rsquo;t wake up thinking about subtraction or grammar. They wake up curious about the world. That&rsquo;s where learning should begin.</p>
          <a href="#four-parts" className="lab-btn lab-btn-white hx-rise ap2-cta">Learn more <ChevronDown size={20} /></a>
        </div>
        <div className="ap2-arc st-school"><SchoolArc imgs={[...HERO_PHOTOS, ...HERO_PHOTOS]} label="Children curious about the world" /></div>
      </section>

      {/* learning has four parts: put Mia's afternoon in order, then Coco explains */}
      <section id="four-parts" className="lab-section ap2-parts" aria-labelledby="parts-title">
        <div className="lab-wrap">
          <div className="ap2-center">
            <h2 id="parts-title" className="lab-h2">Learning has four parts.<br />And most education <span className="lab-mark">flips it.</span></h2>
          </div>
          <FourParts />
        </div>
      </section>

      {/* start in their world: press a card for a little game from that world */}
      <section className="lab-section" aria-labelledby="world-title">
        <div className="lab-wrap">
          <div className="ap2-center">
            <h2 id="world-title" className="lab-h2">Start in <span className="lab-mark">their world</span></h2>
            <p className="lab-lede">The maths is already there in what they love. Press a card to find it.</p>
          </div>
          <WorldGames />
        </div>
      </section>

      {/* keep the whole experience: drag from the bare exercise to the treasure map */}
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

      {/* every child needs a different bridge: the same addition in five worlds */}
      <section className="lab-section" aria-labelledby="bridge-title">
        <div className="lab-wrap">
          <div className="ap2-center"><h2 id="bridge-title" className="lab-h2">Every child needs a different bridge</h2></div>
          <BridgePicker />
        </div>
      </section>

      {/* the bridge can now happen seamlessly */}
      <section className="lab-section ap2-tech" aria-labelledby="tech-title">
        <div className="lab-wrap ap2-tech-in">
          <div className="ap2-tech-pics" aria-hidden="true">
            <span className="ap2-tech-photo"><img src="/images/approach/technologyImage.webp" alt="" loading="lazy" /></span>
            <span className="ap2-tech-phone"><span className="ap2-tech-screen"><img src="/lab/app/RichFairNuts.webp" alt="" loading="lazy" /></span></span>
          </div>
          <div className="ap2-tech-copy">
            <h2 id="tech-title" className="lab-h2">The bridge can now happen seamlessly</h2>
            <p className="lab-lede">Technology makes personalised learning possible at scale, without putting the work on parents and teachers. CominiLab starts by meeting each child at their own level, and more of their world comes in as the app grows.</p>
          </div>
        </div>
      </section>

      {/* closing: the home page's closing call over the day map */}
      <section className="ap2-close" aria-labelledby="final-title">
        <FinalScene
          title={<>Children don&rsquo;t need more things to do. They need things <span className="lab-mark">worth doing.</span></>}
          body="If this philosophy resonates with you, the best place to begin is by understanding where your own child is today."
          cta="Start your journey"
          link={false}
        />
      </section>
    </main>
  );
}
