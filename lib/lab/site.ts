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

/** the site is the story version alone, on short URLs (owner, 2026-11-26): "/", "/approach", "/our-story",
 *  "/curriculum", "/contact". LAB_PAGES keeps the old /cominilab paths as ids; storyHref turns one into its short URL.
 *  The blog is not part of the site. */
export const STORY_PAGES = ["/cominilab", "/cominilab/approach", "/cominilab/our-story", "/cominilab/curriculum", "/cominilab/contact"];
export const storyHref = (href: string) => (href === "/cominilab" ? "/" : href.replace(/^\/cominilab\//, "/"));

/** the app's store pages (owner, 2026-11-25: the closing section shows a QR to install the app). Empty until the
 *  listings are live; while empty, the QR and buttons point at the web app instead. */
export const PLAY_STORE_URL = "";
export const APP_STORE_URL = "";
