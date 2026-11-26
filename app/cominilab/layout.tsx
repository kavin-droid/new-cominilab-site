import type { Metadata } from "next";
import { DM_Sans, Patrick_Hand } from "next/font/google";
import { LabNav } from "@/components/lab/Nav";
import { LabFooter } from "@/components/lab/Footer";
import { Reveal } from "@/components/lab/Reveal";
import "./lab.css";

// The CominiLab app's own type: DM Sans for everything (numerals too), Patrick Hand only on yellow notes.
const dmSans = DM_Sans({
  variable: "--font-lab-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-lab-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: { default: "CominiLab: a little maths every day, picked for your child", template: "%s | CominiLab" },
  description:
    "A short daily maths path for ages 5 to 7. Take the free level check, see where your child is, and get a new plan of explainers, stories, games and practice every day, matched to them.",
};

export default function CominiLabLayout({ children }: LayoutProps<"/cominilab">) {
  return (
    <div className={`lab ${dmSans.variable} ${patrickHand.variable}`}>
      <LabNav />
      {children}
      <LabFooter />
      <Reveal />
    </div>
  );
}
