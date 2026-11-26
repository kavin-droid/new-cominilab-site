// /contact (owner, 2026-11-26: short URLs). The page's code lives in app/_lab/contact.
import CominiLabLayout from "../_lab/layout";
import Page from "../_lab/contact/page";

import { metadata as pageMeta } from "../_lab/contact/page";
import { withShare } from "@/lib/lab/meta";

export const metadata = withShare(pageMeta, "/contact/");

export default function Route() {
  return <CominiLabLayout><Page /></CominiLabLayout>;
}
