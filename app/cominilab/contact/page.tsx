import type { Metadata } from "next";
import { ContactForm } from "@/components/lab/contact/ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Comini team - for parents, educators, and schools.",
};

export default function ContactPage() {
  return (
    <main className="ct-page">
      <div className="lab-wrap ct-grid">
        <div className="ct-copy">
          <h1 className="lab-h1">
            Let&rsquo;s <span className="lab-mark">talk</span>
          </h1>
          <p className="lab-lede">
            Whether you&rsquo;re a parent, an educator, or exploring Comini for your school, we&rsquo;d love to hear what you
            need. Send us a note and we&rsquo;ll get back to you soon.
          </p>
        </div>

        <div className="ct-box">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
