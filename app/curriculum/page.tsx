// /curriculum (owner, 2026-11-26: short URLs). The page's code lives in app/_lab/curriculum.
import CominiLabLayout from "../_lab/layout";
import Page from "../_lab/curriculum/page";

import { metadata as pageMeta } from "../_lab/curriculum/page";
import { withShare } from "@/lib/lab/meta";

export const metadata = withShare(pageMeta, "/curriculum/");

export default function Route() {
  return <CominiLabLayout><Page /></CominiLabLayout>;
}
