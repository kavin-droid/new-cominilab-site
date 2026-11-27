"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { StoreMenu } from "./StoreMenu";
import { useEffect, useRef, useState } from "react";

import { LAB_PAGES, LAB_URL, storyHref } from "@/lib/lab/site";

function isCurrent(path: string, href: string) {
  const p = path.replace(/\/$/, "") || "/";
  return href === "/" ? p === href : p === href || p.startsWith(href + "/");
}

// the story version of the landing page has its own, shorter bar (owner, 2026-11-24):
// [logo] [Home | Curriculum | Contact | More] [Sign in], the rest of the pages under More
const STORY_MAIN = ["/cominilab", "/cominilab/curriculum", "/cominilab/contact"];
const STORY_MORE = ["/cominilab/approach", "/cominilab/our-story"]; // the story site has no blog

function StoryMore({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const off = (e: PointerEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("pointerdown", off);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("pointerdown", off); window.removeEventListener("keydown", key); };
  }, [open]);
  return (
    <div className="lab-more" ref={box}>
      <button type="button" className="lab-more-btn" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {open ? (
        <div className="lab-more-menu">
          {LAB_PAGES.filter((p) => STORY_MORE.includes(p.href)).map((p) => (
            <Link key={p.href} href={storyHref(p.href)} aria-current={isCurrent(path, storyHref(p.href)) ? "page" : undefined} onClick={() => setOpen(false)}>{p.label}</Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function LabNav() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [path]);
  // the phone and tablet menu opens over the page (owner, 2026-11-27): the page dims behind it and stops scrolling;
  // a tap on the dimmed page or Escape closes it, and it closes by itself if the screen grows past the menu's width
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); menuBtn.current?.focus(); } };
    const wide = window.matchMedia("(min-width: 1100px)");
    const grew = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", key);
    wide.addEventListener("change", grew);
    return () => { root.style.overflow = prev; window.removeEventListener("keydown", key); wide.removeEventListener("change", grew); };
  }, [open]);
  const story = true; // the whole site is the story version now (short URLs, owner 2026-11-26)
  if (story) {
    return (
      <header className={`lab-nav lab-nav-story${open ? " menu-open" : ""}`}>
        <div className="lab-wrap lab-nav-in">
          <Link className="lab-logo-link" href="/" aria-label="CominiLab home">
            <img className="lab-logo" src="/lab/logo.png" alt="CominiLab" width={92} height={44} />
          </Link>
          <nav className="lab-nav-links" aria-label="Main">
            {LAB_PAGES.filter((p) => STORY_MAIN.includes(p.href)).map((p) => (
              <Link key={p.href} href={storyHref(p.href)}>{p.label}</Link>
            ))}
            <StoryMore path={path} />
          </nav>
          <StoreMenu />
          <a className="lab-btn lab-btn-white lab-btn-sm lab-nav-cta" href={LAB_URL}>Sign in</a>
          <button ref={menuBtn} type="button" className="lab-menu-btn" aria-expanded={open} aria-controls="lab-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
        {/* always in the page so it can slide out as well as in; closed, it is hidden and inert */}
        <div className="lab-menu-scrim" data-open={open || undefined} aria-hidden="true" onClick={() => setOpen(false)} />
        <nav id="lab-menu" className="lab-menu" aria-label="Main" data-open={open || undefined} inert={!open}>
          {[...STORY_MAIN, ...STORY_MORE].map((h) => LAB_PAGES.find((p) => p.href === h)!).map((p) => (
            <Link key={p.href} href={storyHref(p.href)} aria-current={isCurrent(path, storyHref(p.href)) ? "page" : undefined} onClick={() => setOpen(false)}>{p.label}</Link>
          ))}
          <a className="lab-btn lab-btn-teal" href={LAB_URL}>Sign in</a>
        </nav>
      </header>
    );
  }

  return (
    <header className="lab-nav">
      <div className="lab-wrap lab-nav-in">
        <Link className="lab-logo-link" href="/cominilab" aria-label="CominiLab home">
          <img className="lab-logo" src="/lab/logo.png" alt="CominiLab" width={92} height={44} />
        </Link>
        <nav className="lab-nav-links" aria-label="Main">
          {LAB_PAGES.map((p) => (
            <Link key={p.href} href={p.href} aria-current={isCurrent(path, p.href) ? "page" : undefined}>
              {p.label}
            </Link>
          ))}
        </nav>
        <a className="lab-btn lab-btn-teal lab-btn-sm lab-nav-cta" href={LAB_URL}>Start the free check</a>
        <button
          type="button"
          className="lab-menu-btn"
          aria-expanded={open}
          aria-controls="lab-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#0D0D0D" strokeWidth="2.2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="lab-menu" className="lab-menu" aria-label="Main">
          {LAB_PAGES.map((p) => (
            <Link key={p.href} href={p.href} aria-current={isCurrent(path, p.href) ? "page" : undefined}>
              {p.label}
            </Link>
          ))}
          <a className="lab-btn lab-btn-teal" href={LAB_URL}>Start the free check</a>
        </nav>
      )}
    </header>
  );
}
