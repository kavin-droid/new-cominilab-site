"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LAB_PAGES, STORY_PAGES, storyHref } from "@/lib/lab/site";

export function LabFooter() {
  // on the story version, its own pages only, linking inside it
  const p = usePathname() || "";
  const story = p === "/" || p.startsWith("/cominilab/story");
  const pages = story ? LAB_PAGES.filter((p) => STORY_PAGES.includes(p.href)).map((p) => ({ ...p, href: storyHref(p.href) })) : LAB_PAGES;
  return (
    <footer className="lab-foot">
      <div className="lab-wrap lab-foot-in">
        <div className="lab-foot-brand">
          <img src="/lab/logo.png" alt="CominiLab" width={76} height={36} />
        </div>
        <nav aria-label="Footer">
          {pages.map((p) => (
            <Link key={p.href} href={p.href}>{p.label}</Link>
          ))}
        </nav>
        <p className="lab-foot-copy">
          © {new Date().getFullYear()} <a href="https://comini.in" target="_blank" rel="noopener">Comini Learning Pvt Ltd.</a>
        </p>
      </div>
    </footer>
  );
}
