import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, withShare } from "@/lib/lab/meta";

// The site is the CominiLab story version alone (2026-11-26); its fonts (DM Sans, Patrick Hand) are set by the
// CominiLab layout. The main Comini site and its fonts live on in kavin-droid/comini-parent-site.
export const metadata: Metadata = withShare(
  {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_TITLE, template: "%s | CominiLab" },
    description: SITE_DESCRIPTION,
  },
  "/",
  SITE_TITLE,
);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
