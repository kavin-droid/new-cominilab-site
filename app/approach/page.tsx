// /approach (owner, 2026-11-26: short URLs). The page's code lives in app/_lab/story/approach.
import CominiLabLayout from "../_lab/layout";
import Page from "../_lab/story/approach/page";

import { metadata as pageMeta } from "../_lab/story/approach/page";
import { withShare } from "@/lib/lab/meta";

export const metadata = withShare(pageMeta, "/approach/");

export default function Route() {
  return <CominiLabLayout><Page /></CominiLabLayout>;
}
