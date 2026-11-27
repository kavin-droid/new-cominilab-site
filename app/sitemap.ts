import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/lab/meta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/approach/", "/curriculum/", "/our-story/", "/contact/"].map((p, i) => ({ url: `${SITE_URL}${p}`, changeFrequency: "weekly", priority: i === 0 ? 1 : 0.7 }));
}
