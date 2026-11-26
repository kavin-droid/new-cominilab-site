import type { Metadata } from "next";
import "./globals.css";

// The site is the CominiLab story version alone (2026-11-26); its fonts (DM Sans, Patrick Hand) are set by the
// CominiLab layout. The main Comini site and its fonts live on in kavin-droid/comini-parent-site.
export const metadata: Metadata = {
  title: "CominiLab: a little maths every day, picked for your child",
  description:
    "A short daily maths path for ages 5 to 7. Take the free level check, see where your child is, and get a new plan of explainers, stories, games and practice every day, matched to them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
