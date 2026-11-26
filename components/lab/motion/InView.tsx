"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Adds "go" to its box the first time it comes into view (so a scene plays when the parent reaches it, not on load),
 * and "go" straight away for people who ask for reduced motion (their CSS shows the end state).
 */
export function InView({ className = "", children, threshold = 0.35 }: { className?: string; children: ReactNode; threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGo(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setGo(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return (
    <div ref={ref} className={`${className}${go ? " go" : ""}`} data-no-reveal>
      {children}
    </div>
  );
}

/** an inline SVG (markup read at build time) inside an InView box, so its parts can be animated by CSS */
export function InlineArt({ svg, className = "", label }: { svg: string; className?: string; label: string }) {
  return (
    <InView className={`mo-art ${className}`}>
      <span role="img" aria-label={label} dangerouslySetInnerHTML={{ __html: svg }} />
    </InView>
  );
}

/** a line whose words drop in one by one with a squash, the highlighted words last with their yellow sweeping in */
export function DropWords({ parts, className = "" }: { parts: { text: string; mark?: boolean }[]; className?: string }) {
  let i = 0;
  return (
    <InView className={`mo-words ${className}`} threshold={0.5}>
      <p className="hm-statement-big" aria-label={parts.map((p) => p.text).join(" ")}>
        {parts.map((p, k) => {
          const words = p.text.split(" ").map((w) => (
            <span key={`${k}-${i}`} className="mo-word" style={{ ["--i" as string]: i++ }} aria-hidden="true">
              {w}
            </span>
          ));
          const gap = k < parts.length - 1 ? " " : "";
          return p.mark ? (
            <span key={k}><span className="lab-mark mo-mark" style={{ ["--i" as string]: i }} aria-hidden="true">
              {words.reduce<ReactNode[]>((acc, w, j) => (j ? [...acc, " ", w] : [w]), [])}
            </span>{gap}</span>
          ) : (
            <span key={k}>{words.reduce<ReactNode[]>((acc, w, j) => (j ? [...acc, " ", w] : [w]), [])}{gap}</span>
          );
        })}
      </p>
    </InView>
  );
}
