import type { Metadata } from "next";
import { PicCard, Star } from "@/components/lab/Card";
import { PracticeStepper } from "@/components/lab/approach/PracticeStepper";
import { ArrowRight, ChevronDown } from "@/components/lab/Icons";
import { LAB_URL } from "@/lib/lab/site";
import "./approach.css";

// Copy is carried over word for word from app/approach/page.tsx (the old site's approach page). Only the design changed.
export const metadata: Metadata = {
  title: "Our approach",
  description:
    "Learning has four parts, and most education flips it. How Comini starts from meaning, not mechanics.",
};

const HERO_PHOTOS = [
  "/images/approach/heroColoring.webp",
  "/images/approach/heroStories.webp",
  "/images/approach/heroGroup.webp",
  "/images/approach/heroMap.webp",
  "/images/approach/heroCricket.webp",
  "/images/approach/heroMuseum.webp",
  "/images/approach/heroArt.webp",
];
const HERO_TILTS = [-2.5, 1.5, -1, 2.5, -2, 1, -1.5];

const FOUR_PARTS = [
  { tag: "#1 Meaning", body: "Connecting what you're learning to something that matters in your world.", image: "/images/approach/fourPartsMeaning.webp", alt: "", tilt: -1.2 },
  { tag: "#2 Motivation", body: "Finding a reason to care enough to keep exploring.", image: "/images/approach/fourPartsMotivation.webp", alt: "", tilt: 1 },
  { tag: "#3 Mechanics", body: "Learning how something works and practising how to use it.", image: "/images/approach/fourPartsMechanics.webp", alt: "", tilt: -0.8 },
  { tag: "#4 Measurement", body: "Checking what they've understood and where they need to go next.", image: "/images/approach/fourPartsMeasurement.webp", alt: "", tilt: 1.2 },
];

const WORLD = [
  { title: "Love Cooking?", body: "Fractions helps with the recipes!", image: "/images/approach/philosophyCooking.webp", art: "cakeArt", tilt: -2 },
  { title: "Always at the ground?", body: "Addition & subtraction help with the score.", image: "/images/approach/philosophyGround.webp", art: "ringTossArt", tilt: 1 },
  { title: "Enjoy Shopping?", body: "Adding & subtracting helps shop smart.", image: "/images/approach/philosophyShopping.webp", art: "purseArt", tilt: 2 },
];

// Kind colours from the app, and its current activities: Every Duck Home, the addition explainer, Roll Call and the
// addition practice worksheet (the app's own thumbnails; the story card is a frame from the story).
const PRACTICE = [
  { title: "Stories", tagline: "Make it meaningful.", image: "/lab/thumbs/story-ducks.webp", dot: "#A98BFF", tilt: -1.5 },
  { title: "Explainers", tagline: "Make it clear.", image: "/lab/thumbs/addition-stage1.webp", dot: "#FFA94D", tilt: 1 },
  { title: "Games", tagline: "Make it familiar.", image: "/lab/thumbs/roll-call.webp", dot: "#4AC1BD", tilt: -1 },
  { title: "Practice", tagline: "Make it stick.", image: "/lab/thumbs/pw-addition.webp", dot: "#FF7EB6", tilt: 1.5 },
];

const BRIDGES = [
  { image: "/images/approach/bridgeDinosaur.webp", tag: "Dinosaurs", caption: "Learns addition through dinosaurs and stories.", tilt: -3 },
  { image: "/images/approach/bridgeCricket.webp", tag: "Cricket", caption: "Learns the same addition through cricket scores.", tilt: 2 },
  { image: "/images/approach/bridgeAstronaut.webp", tag: "Space", caption: "Learns the same addition as an astronaut.", tilt: -1.5 },
  { image: "/images/approach/bridgeBlock.webp", tag: "Blocks", caption: "Learns the same addition using blocks.", tilt: 2.5 },
  { image: "/images/approach/bridgeTreat.webp", tag: "Treats", caption: "Learns the same addition with treats.", tilt: -2 },
];

const XMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function ApproachPage() {
  return (
    <main className="ap">
      {/* HERO */}
      <section className="ap-hero">
        <div className="lab-wrap ap-hero-head">
          <h1 className="lab-h1">
            <span className="lab-mark">Meaning</span> before mechanics
          </h1>
        </div>

        <div className="ap-ticker ap-ticker-hero" aria-hidden="true">
          <div className="ap-ticker-track" style={{ animationDuration: "48s" }}>
            {[0, 1].map((copy) =>
              HERO_PHOTOS.map((src, i) => (
                <span key={`${copy}-${src}`} className={`lab-card ap-hero-card${copy ? " ap-dup" : ""}`} style={{ rotate: `${HERO_TILTS[i]}deg` }}>
                  <span className="lab-card-pic">
                    <img src={src} alt="" loading={i < 3 && !copy ? "eager" : "lazy"} />
                  </span>
                </span>
              )),
            )}
          </div>
        </div>

        <div className="lab-wrap ap-hero-foot">
          <p className="lab-lede">
            Kids don&rsquo;t wake up thinking about subtraction or grammar. They wake up curious about the world.
            That&rsquo;s where learning should begin.
          </p>
          <a href="#four-parts" className="lab-btn lab-btn-white">
            Learn more <ChevronDown size={20} />
          </a>
        </div>
      </section>

      {/* LEARNING HAS FOUR PARTS */}
      <section id="four-parts" className="lab-section ap-band">
        <div className="lab-wrap">
          <h2 className="lab-h2 ap-center lab-rise">
            Learning has four parts.
            <br />
            And most education <span className="lab-mark">flips it.</span>
          </h2>
          <ol className="ap-parts">
            {FOUR_PARTS.map((p, i) => (
              <li key={p.tag} className="ap-part lab-rise" style={{ transitionDelay: `${i * 80}ms` }}>
                {i === 2 ? <span className="lab-note ap-part-note">Most school starts here</span> : null}
                <PicCard img={p.image} alt={p.alt} name={p.tag} tilt={p.tilt} picStyle={{ aspectRatio: "16 / 9" }} />
                <p className="ap-part-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* START IN THEIR WORLD */}
      <section className="lab-section">
        <div className="lab-wrap">
          <h2 className="lab-h2 ap-center lab-rise">Start in their world</h2>
          <ul className="ap-world">
            {WORLD.map((c, i) => (
              <li key={c.title} className="ap-world-item lab-rise" style={{ transitionDelay: `${i * 80}ms` }}>
                <PicCard img={c.image} alt="" name={c.title} tilt={c.tilt} picStyle={{ aspectRatio: "4 / 3" }} />
                <p className="ap-world-body">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* KEEP THE WHOLE EXPERIENCE */}
      <section className="lab-section ap-band">
        <div className="lab-wrap">
          <div className="ap-center lab-rise">
            <h2 className="lab-h2">Keep the whole experience</h2>
            <p className="lab-lede ap-lede-c">Children remember ideas better when they understand what they&rsquo;re for.</p>
          </div>
          <div className="ap-compare">
            <figure className="ap-cmp ap-cmp-plain lab-rise">
              <span className="lab-card" style={{ rotate: "-1.5deg" }}>
                <span className="lab-card-pic ap-cmp-pic">
                  <img src="/images/approach/resourceAngle.webp" alt="A plain worksheet with an angle to measure" loading="lazy" />
                </span>
                <span className="ap-cmp-badge ap-cmp-x" role="img" aria-label="Not this">
                  <XMark />
                </span>
              </span>
              <figcaption>Measure this angle.</figcaption>
            </figure>
            <figure className="ap-cmp ap-cmp-good lab-rise" style={{ transitionDelay: "100ms" }}>
              <span className="lab-card" style={{ rotate: "1.5deg" }}>
                <span className="lab-card-pic ap-cmp-pic">
                  <img src="/images/approach/resourceTreasure.webp" alt="A treasure map where angles show the way" loading="lazy" />
                </span>
                <span className="ap-cmp-badge ap-cmp-star" role="img" aria-label="This one">
                  <Star size={44} />
                </span>
              </span>
              <figcaption>Use angles to find the treasure.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PRACTICE HAS ITS MOMENT */}
      <section className="lab-section">
        <div className="lab-wrap">
          <div className="ap-center lab-rise">
            <h2 className="lab-h2">Practice has its moment</h2>
            <p className="lab-lede ap-lede-c">
              Drills aren&rsquo;t the enemy. They&rsquo;re incredibly useful once the idea already makes sense.
            </p>
          </div>
          <PracticeStepper steps={PRACTICE} />
        </div>
      </section>

      {/* EVERY CHILD NEEDS A DIFFERENT BRIDGE */}
      <section className="lab-section ap-band ap-bridge">
        <div className="lab-wrap ap-bridge-head lab-rise">
          <h2 className="lab-h2">Every child needs a different bridge</h2>
        </div>
        <div className="ap-ticker ap-ticker-bridge">
          <ul className="ap-ticker-track" style={{ animationDuration: "40s" }}>
            {[0, 1].map((copy) =>
              BRIDGES.map((b) => (
                <li key={`${copy}-${b.image}`} className={`ap-bridge-item${copy ? " ap-dup" : ""}`} aria-hidden={copy ? true : undefined}>
                  <PicCard img={b.image} alt="" name={b.tag} tilt={b.tilt} picStyle={{ aspectRatio: "16 / 10" }} />
                  <p>{b.caption}</p>
                </li>
              )),
            )}
          </ul>
        </div>
      </section>

      {/* THE BRIDGE CAN NOW HAPPEN SEAMLESSLY */}
      <section className="lab-section">
        <div className="lab-wrap ap-tech">
          <div className="ap-tech-pics lab-rise">
            <span className="lab-card ap-tech-card" style={{ rotate: "-1.5deg" }}>
              <span className="lab-card-pic" style={{ aspectRatio: "16 / 9" }}>
                <img src="/images/approach/technologyImage.webp" alt="" loading="lazy" />
              </span>
            </span>
            <div className="lab-tablet ap-tech-tablet" aria-hidden="true">
              <div className="lab-tablet-screen">
                <img src="/lab/app/RichFairNuts.webp" alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="ap-tech-copy lab-rise">
            <h2 className="lab-h2">The bridge can now happen seamlessly</h2>
            <p className="lab-lede">
              Technology makes personalised learning possible at scale, without putting the work on parents and
              teachers. CominiLab starts by meeting each child at their own level, and more of their world comes in as the
              app grows.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CALL */}
      <section className="lab-section ap-close">
        <div className="lab-wrap ap-center">
          <h2 className="lab-h2 ap-close-h lab-rise">
            Children don&rsquo;t need more things to do. They need things <span className="lab-mark">worth doing.</span>
          </h2>
          <p className="lab-lede ap-lede-c lab-rise">
            If this philosophy resonates with you, the best place to begin is by understanding where your own child is
            today.
          </p>
          <a href={LAB_URL} className="lab-btn lab-btn-teal lab-btn-lg ap-close-btn lab-rise">
            Start your journey <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </main>
  );
}
