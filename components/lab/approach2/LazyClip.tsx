"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A short looping preview clip that downloads only when it scrolls near (owner, 2026-11-26: the approach page's
 * practice clips were loading as soon as the page opened). `autoPlay` would make the browser fetch the video at once
 * whatever `preload` says, so the sources are added, and play starts, only when the clip is within ~600px of view.
 * Until then the poster shows. Paused again off screen. Reduced motion: the poster only.
 */
export function LazyClip({ name, alt, className = "ap2-clip" }: { name: string; alt: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setNear(true); v.play().catch(() => {}); }
      else v.pause();
    }, { rootMargin: "600px 0px" });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  // once the sources are in, load and play
  useEffect(() => {
    const v = ref.current;
    if (near && v) { v.load(); v.play().catch(() => {}); }
  }, [near]);
  return (
    <video ref={ref} className={className} muted loop playsInline preload="none" poster={`/lab/video/${name}-poster.jpg`} aria-label={alt}>
      {near ? <source src={`/lab/video/${name}.webm`} type="video/webm" /> : null}
      {near ? <source src={`/lab/video/${name}.mp4`} type="video/mp4" /> : null}
    </video>
  );
}
