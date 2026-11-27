import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/lab/meta";

export const dynamic = "force-static";

// search engines may crawl everything; the sitemap lists the five pages (owner, 2026-11-26: searchable now)
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
