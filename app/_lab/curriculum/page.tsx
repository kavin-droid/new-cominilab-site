import type { Metadata } from "next";
import { LAB_URL } from "@/lib/lab/site";
import { ArrowRight } from "@/components/lab/Icons";
import { CurriculumExplorer } from "@/components/lab/curriculum/CurriculumExplorer";
import "./curriculum.css";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "The full CominiLab curriculum by age: what your child can do now and what comes next, across maths, reading, language and science.",
};

export default function CurriculumPage() {
  return (
    <main>
      <section className="cu-hero">
        <div className="lab-wrap cu-hero-in">
          <div className="cu-hero-copy">
            <h1 className="lab-h1">
              <span className="lab-mark">Curriculum</span>
            </h1>
            <p className="lab-lede cu-hero-lede">Every idea your child learns, mapped out stage by stage. Ages 5 to 7 are in the app today.</p>
            <a href="#explore" className="lab-btn lab-btn-white cu-hero-btn">
              See every idea
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M5 12l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" /></svg>
            </a>
          </div>
          <figure className="cu-hero-phone">
            <div className="lab-phone">
              <div className="lab-phone-screen">
                <img src="/lab/app/PCurriculum.webp" alt="The Curriculum screen in the CominiLab app: Maths picked, ages 6 to 7, each concept with the child's level" />
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="cu-band" id="explore">
        <div className="lab-wrap">
          <CurriculumExplorer />
        </div>
      </section>

      <section className="cu-end">
        <div className="lab-wrap cu-end-in lab-rise">
          <h2 className="lab-h2">Ready to start with your child?</h2>
          <a className="lab-btn lab-btn-teal lab-btn-lg" href={LAB_URL}>
            Sign up
            <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
