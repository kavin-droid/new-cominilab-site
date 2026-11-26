"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { APP_STORE_URL, LAB_URL, PLAY_STORE_URL } from "@/lib/lab/site";

/**
 * Install the app (owner, 2026-11-25): on a computer, a QR to scan with a phone, with a switch between Google Play and
 * the App Store; on a phone, the store for that phone as a button (a QR is no use on the phone that would scan it).
 * Below it, a way to start in the browser straight away. Until the store links exist, everything points at the web app.
 */
export type Store = "play" | "apple";
export const STORES: Record<Store, { name: string; url: string }> = {
  play: { name: "Google Play", url: PLAY_STORE_URL || LAB_URL },
  apple: { name: "App Store", url: APP_STORE_URL || LAB_URL },
};

export function AppDownload() {
  const [store, setStore] = useState<Store>("play");
  const [phone, setPhone] = useState<Store | null>(null);
  const [svg, setSvg] = useState("");
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) setPhone("play");
    else if (/iphone|ipad|ipod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) setPhone("apple");
  }, []);
  useEffect(() => {
    QRCode.toString(STORES[store].url, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0D0D0D", light: "#FFFFFF" } }).then(setSvg).catch(() => setSvg(""));
  }, [store]);

  if (phone) {
    const s = STORES[phone];
    return (
      <div className="ad">
        <p className="lab-body ad-lead">Download the app</p>
        <a className="lab-btn lab-btn-teal lab-btn-lg ad-store" href={s.url}>{phone === "play" ? <PlayIcon /> : <AppleIcon />}Get it on {s.name}</a>
        <a className="lab-link" href={LAB_URL}>Or start in a browser right away</a>
      </div>
    );
  }
  return (
    <div className="ad">
      <p className="lab-body ad-lead">Scan to download the app</p>
      <div className="ad-switch" role="radiogroup" aria-label="Which store">
        {(Object.keys(STORES) as Store[]).map((k) => (
          <button key={k} type="button" role="radio" aria-checked={store === k} className={store === k ? "on" : ""} onClick={() => setStore(k)}>
            {k === "play" ? <PlayIcon /> : <AppleIcon />}{STORES[k].name}
          </button>
        ))}
      </div>
      <span className="ad-qr" role="img" aria-label={`QR code for CominiLab on ${STORES[store].name}`} dangerouslySetInnerHTML={{ __html: svg }} />
      <a className="lab-link" href={LAB_URL}>Or start in a browser right away</a>
    </div>
  );
}

export const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.8v18.4c0 .6.6.9 1.1.6l15.4-9.2c.5-.3.5-1 0-1.3L5.1 2.2C4.6 1.9 4 2.2 4 2.8z" fill="currentColor" /></svg>
);
export const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" fill="currentColor" /></svg>
);
