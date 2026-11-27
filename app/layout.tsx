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

// Served with the app (owner, 2026-11-26): on the home page only, before anything is drawn, a signed-in family (the
// app's Firebase sign-in, kept in this origin's localStorage) goes on into the app (/start: who is playing), and a guest
// with a level check saved on this device (the app's cominilab.guest.v1) to the app's landing page to finish saving it.
// (cominilab.dev.session is the stand-in sign-in of the app's dev and preview builds, so routing can be tried locally;
// a real build signs in with Firebase only.)
// Everyone else stays on the website. Plain script, no imports: it must run before the page paints.
const ROUTE_TO_APP = `(function(){try{if(location.pathname!=="/")return;var s=window.localStorage;for(var i=0;i<s.length;i++){var k=s.key(i);if(k&&k.indexOf("firebase:authUser:")===0){location.replace("/start");return}}if(s.getItem("cominilab.dev.session")||window.sessionStorage.getItem("cominilab.dev.session")){location.replace("/start");return}var g=JSON.parse(s.getItem("cominilab.guest.v1")||"null");if(g&&typeof g.expiresAt==="number"&&g.expiresAt>Date.now())location.replace("/TSplashBlue")}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: ROUTE_TO_APP }} />
      </head>
      <body className="bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
