import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Landmark } from "@/components/lab/Card";
import { ArrowRight } from "@/components/lab/Icons";
import { LAB_URL } from "@/lib/lab/site";
import "./our-story.css";

// The letter's words are carried over word for word from app/our-story/page.tsx (the old site). Only the design changed:
// the story is set as a real letter on a sheet of paper, with the photos taped on and the founders' signature.
export const metadata: Metadata = {
  title: "Our story",
  description: "Why we started Comini Microschool, and how that became CominiLab.",
};

/** The phrases the letter leans on, marked with the yellow highlighter. */
function Hi({ children }: { children: ReactNode }) {
  return <strong className="lab-mark st-hi">{children}</strong>;
}

type Photo = { src: string; alt: string; pos?: string };

function Photos({ photos, wide }: { photos: Photo[]; wide?: boolean }) {
  const tilts = [-3, 2, -1.5];
  return (
    <div className={`st-photos${wide ? " st-photos-wide" : ""}`}>
      {photos.map((p, i) => (
        <figure key={p.src} className="st-photo" style={{ rotate: `${tilts[i % 3]}deg` } as CSSProperties}>
          <img src={p.src} alt={p.alt} loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} />
        </figure>
      ))}
    </div>
  );
}

/** The opened envelope the letter came in, with a stamp (a landmark from the day map) and a postmark. */
function Envelope() {
  return (
    <div className="st-env" aria-hidden="true">
      <svg className="st-env-flap" viewBox="0 0 200 70" preserveAspectRatio="none">
        <path d="M1 1 L100 68 L199 1 Z" fill="#FFF4CC" stroke="#EFE3B4" strokeWidth="1.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="st-env-body">
        <svg className="st-env-lines" viewBox="0 0 200 130" preserveAspectRatio="none">
          <path d="M1 129 L82 62 M199 129 L118 62" stroke="#D9D9D9" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="st-stamp">
          <Landmark name="appleTreeArt" size={46} pedestal={false} />
        </span>
        <svg className="st-postmark" viewBox="0 0 120 60">
          <circle cx="30" cy="30" r="24" fill="none" stroke="#9A9A9A" strokeWidth="1.6" />
          <circle cx="30" cy="30" r="18" fill="none" stroke="#9A9A9A" strokeWidth="1" />
          <text x="30" y="28" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#8A8A8A" letterSpacing="0.6">MUMBAI</text>
          <text x="30" y="38" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#8A8A8A">2026</text>
          <path d="M58 20 q8 -5 16 0 t16 0 t16 0 M58 30 q8 -5 16 0 t16 0 t16 0 M58 40 q8 -5 16 0 t16 0 t16 0" stroke="#9A9A9A" strokeWidth="1.4" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export default function OurStoryPage() {
  return (
    <main className="st">
      <div className="st-wrap">
        <header className="st-head">
          <h1 className="lab-h1">Our story</h1>
          <Envelope />
        </header>

        <div className="st-sheet">
          <span className="st-under" aria-hidden="true" />
          <article className="st-letter">
            <p className="st-date">Mumbai, 2026</p>

            <p className="st-open">We didn&rsquo;t set out to build an app for kids!</p>

            <p>
              We actually started a school,{" "}
              <a href="http://comini.in/" target="_blank" rel="noreferrer" className="st-a">
                Comini Microschool
              </a>
              , in Mumbai in early 2022, for our own kids, who are now 6 and 10. We started it because we felt it was time
              for school to look less like an institution and more like a home, a place where play and meaning happen
              naturally.
            </p>
            <p>
              Along the way, a few things happened. First, we realised that <Hi>children learn from each other</Hi>, from
              every experience, and on their own. And <Hi>they are wildly different</Hi>.
            </p>

            <Photos
              photos={[
                { src: "/images/our-story/classroom-craft.webp", alt: "Two children weaving a paper placemat together at Comini Microschool" },
                { src: "/images/our-story/reading-together.webp", alt: "A child reading The Cat in the Hat aloud to a sibling" },
                { src: "/images/our-story/group-craft.webp", alt: "A group of children showing off their paper craft projects" },
              ]}
            />

            <p>
              To do justice to each child&rsquo;s pace and path, we knew early on that learning had to be truly
              personalised. That doesn&rsquo;t mean picking a different textbook for each child.{" "}
              <Hi>
                It means understanding where they are, who they are and how they learn, and then designing a learning
                environment around them. That&rsquo;s how we started building technology tools.
              </Hi>
            </p>
            <p>
              And then, barely ten months after we opened our doors, ChatGPT launched. Within a few years,{" "}
              <Hi>it became clear</Hi>{" "}
              <Hi>
                that the cognitive skills schools have celebrated as the most important for the last hundred years had
                become very, very cheap
              </Hi>
              . We found ourselves asking:{" "}
              <Hi>
                what should learning look like when learning, as schools define it today, costs nothing and is available on
                tap?
              </Hi>
            </p>
            <p>
              Both of these helped us put words to an evergreen idea that AI has only made more urgent. We must put{" "}
              <Hi>meaning before mechanics.</Hi> <Hi>We must put the child before the curriculum</Hi>. Because the
              curriculum now comes on your phone! That doesn&rsquo;t mean reading and maths matter less. It means{" "}
              <Hi>children need to understand why they matter, and what to do with them.</Hi>
            </p>
            <p>
              That&rsquo;s why we&rsquo;re more certain than ever that the approach we take at <strong>Comini Microschool</strong>{" "}
              is the right one for now and for the future we&rsquo;re hurtling towards. <strong>CominiLab</strong> is how we
              bring what happens at our school to children everywhere: the same stories, games and hands-on work, in a
              learning world that understands and adapts to each child.
            </p>

            <Photos
              wide
              photos={[
                { src: "/lab/thumbs/story-ducks.webp", alt: "A CominiLab story, Every Duck Home: Zara and her friends count the ducks at the door" },
                { src: "/lab/thumbs/roll-call.webp", alt: "A CominiLab game, Roll Call: a sheepdog brings sheep into a pen while the farmer counts" },
                { src: "/lab/thumbs/pw-addition.webp", alt: "A CominiLab practice worksheet: adding the apples and lemons on two plates" },
              ]}
            />

            <p>Let&rsquo;s all play, and let children find their purpose that way.</p>

            <div className="st-sign">
              <p className="st-sign-name">Awesome Mami &amp; Captain Chimbai</p>
              <p className="st-sign-note">These are the names that our kids gave us :)</p>
            </div>
          </article>
        </div>

        <div className="st-cta">
          <p className="st-cta-q">Ready to start with your child?</p>
          <a href={LAB_URL} className="lab-btn lab-btn-teal lab-btn-lg">
            Get Started <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </main>
  );
}
