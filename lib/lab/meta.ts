import type { Metadata } from "next";

/**
 * Share previews (owner, 2026-11-26): the meta images from cominilab-app-v3/design/meta-images-2026-11-26, copied to
 * public/og. Link previews need absolute image URLs, so they're built on SITE_URL (the current review link; change it
 * when the site moves to its own domain).
 *  - og:image: the Facebook size (1200x630) first, which WhatsApp, LinkedIn, Slack and Facebook use; then the default
 *    (1200x700) and the square LinkedIn one (1200x1200) as alternatives for platforms that pick by shape.
 *  - twitter:image: the X/Twitter size (1200x675), with the large-image card.
 */
export const SITE_URL = "https://lunar-hazel-23ad.here.now";
export const SITE_TITLE = "CominiLab: a little maths every day, picked for your child";
export const SITE_DESCRIPTION =
  "Daily maths your child looks forward to. Start with a free level check, then get a fresh plan of stories, games and practice every day. Ages 5 to 7.";

const OG_IMAGES = [
  { url: "/og/cominilab-facebook.jpg", width: 1200, height: 630, alt: "CominiLab: 15 minutes of maths your child will ask for" },
  { url: "/og/cominilab-default.jpg", width: 1200, height: 700, alt: "CominiLab: 15 minutes of maths your child will ask for" },
  { url: "/og/cominilab-linkedin.jpg", width: 1200, height: 1200, alt: "CominiLab: 15 minutes of maths your child will ask for" },
];
const TWITTER_IMAGE = { url: "/og/cominilab-twitter.jpg", width: 1200, height: 675, alt: "CominiLab: 15 minutes of maths your child will ask for" };

/** a page's metadata plus its share preview. `path` is the page's own URL path; `shareTitle` overrides the title in
 *  previews (defaults to "<page title> | CominiLab", or the site title for the home page). */
export function withShare(m: Metadata, path: string, shareTitle?: string): Metadata {
  const pageTitle = typeof m.title === "string" ? `${m.title} | CominiLab` : SITE_TITLE;
  const title = shareTitle ?? pageTitle;
  const description = (m.description as string | undefined) ?? SITE_DESCRIPTION;
  return {
    ...m,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "CominiLab", locale: "en_IN", url: path, title, description, images: OG_IMAGES },
    twitter: { card: "summary_large_image", title, description, images: [TWITTER_IMAGE] },
  };
}
