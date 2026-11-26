// The story home (owner, 2026-11-26: short URLs). The pages' code lives in app/_lab (a private folder, not a route);
// each route wraps its page in the CominiLab layout (fonts, nav, footer).
import CominiLabLayout from "./_lab/layout";
import Page from "./_lab/story/page";

import { metadata as pageMeta } from "./_lab/story/page";
import { withShare, SITE_TITLE } from "@/lib/lab/meta";

export const metadata = withShare(pageMeta, "/", SITE_TITLE);

export default function Home() {
  return <CominiLabLayout><Page /></CominiLabLayout>;
}
