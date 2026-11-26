// Shared site constants for the CominiLab pages. Kept out of the client Nav component so server pages can read them.
export const LAB_URL = "https://comini-lab-redesign.web.app/";

export const LAB_PAGES = [
  { href: "/cominilab", label: "Home" },
  { href: "/cominilab/approach", label: "Our approach" },
  { href: "/cominilab/our-story", label: "Our story" },
  { href: "/cominilab/curriculum", label: "Curriculum" },
  { href: "/cominilab/blog", label: "Blog" },
  { href: "/cominilab/contact", label: "Contact" },
];

/** the story version (/cominilab/story) is its own small site (owner, 2026-11-25): its pages live under it, so its links
 *  stay inside it. The blog is not part of it. */
export const STORY_PAGES = ["/cominilab", "/cominilab/approach", "/cominilab/our-story", "/cominilab/curriculum", "/cominilab/contact"];
export const storyHref = (href: string) => (href === "/cominilab" ? "/cominilab/story" : href.replace(/^\/cominilab\//, "/cominilab/story/"));

/** the app's store pages (owner, 2026-11-25: the closing section shows a QR to install the app). Empty until the
 *  listings are live; while empty, the QR and buttons point at the web app instead. */
export const PLAY_STORE_URL = "";
export const APP_STORE_URL = "";
