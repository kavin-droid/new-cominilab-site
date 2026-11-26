"use client";

import { useEffect, useRef, useState } from "react";
import { STORES, type Store } from "./home/AppDownload";

/**
 * The app button in the story header (owner, 2026-11-25): it shows the Google Play logo and the App Store logo in turn;
 * pressing it opens a small list of the two stores, each going to that store's page (the web app until the listings
 * are live: lib/lab/site.ts).
 */
const GooglePlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.6 2.3 13.4 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#4AC1BD" />
    <path d="M16.6 8.8 13.4 12 3.6 2.3c.2-.1.6-.1.9.1l12.1 6.4z" fill="#7ED957" />
    <path d="m16.6 15.2-12.1 6.4c-.3.2-.7.2-.9.1l9.8-9.7 3.2 3.2z" fill="#FF6B6B" />
    <path d="m20.4 13.2-3.8 2-3.2-3.2 3.2-3.2 3.8 2c1 .5 1 1.9 0 2.4z" fill="#FDBE35" />
  </svg>
);
const Apple = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" fill="#0D0D0D" /></svg>
);
const ICON: Record<Store, () => React.JSX.Element> = { play: GooglePlay, apple: Apple };

export function StoreMenu() {
  const [show, setShow] = useState<Store>("play");
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  // the two logos take turns
  useEffect(() => {
    if (open || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setShow((s) => (s === "play" ? "apple" : "play")), 2600);
    return () => window.clearInterval(t);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const off = (e: PointerEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", off);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("pointerdown", off); document.removeEventListener("keydown", key); };
  }, [open]);
  return (
    <div className="lab-store" ref={box}>
      <button type="button" className="lab-store-btn" aria-expanded={open} aria-haspopup="true" aria-label="Get the app" onClick={() => setOpen((o) => !o)}>
        {(Object.keys(ICON) as Store[]).map((k) => { const I = ICON[k]; return <span key={k} className={`lab-store-ico${show === k ? " on" : ""}`}><I /></span>; })}
      </button>
      {open ? (
        <div className="lab-store-menu" role="menu">
          {(Object.keys(STORES) as Store[]).map((k) => { const I = ICON[k]; return (
            <a key={k} role="menuitem" href={STORES[k].url} onClick={() => setOpen(false)}><I />{k === "play" ? "Get it on Google Play" : "Download on the App Store"}</a>
          ); })}
        </div>
      ) : null}
    </div>
  );
}
