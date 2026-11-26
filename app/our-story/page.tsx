// /our-story (owner, 2026-11-26: short URLs). The page's code lives in app/_lab/our-story.
import CominiLabLayout from "../_lab/layout";
import Page from "../_lab/our-story/page";

import { metadata as pageMeta } from "../_lab/our-story/page";
import { withShare } from "@/lib/lab/meta";

export const metadata = withShare(pageMeta, "/our-story/");

export default function Route() {
  return <CominiLabLayout><Page /></CominiLabLayout>;
}
