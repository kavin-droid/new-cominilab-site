"use client";

import { useEffect, useState } from "react";
import { PolaroidArc } from "./PolaroidArc";

// "Made at a real school, with real children" (owner's wireframe, 2026-11-25): photos from Comini Microschool as
// polaroids on an arc that curves downward (the middle lowest), running past like a ticker and looping round.
// Hovering holds it. Every few seconds one of the app's characters peeks out from behind a card at random, then ducks
// back down (owner, 2026-11-25).
const CAST = ["squirrelHappy", "raccoonHappy", "penguinHappy", "giraffeHappy", "meerkatHappy", "polarBearHappy", "arcticFoxHappy", "sealHappy"];
// how far down each face its eyes sit (share of the picture's height): each one rises until its eyes and a little
// below them clear the card's top edge (owner, 2026-11-25). The bunny is left out: its tall ears hid its face
const EYES: Record<string, number> = { squirrelHappy: 0.56, bunnyHappy: 0.7, raccoonHappy: 0.55, penguinHappy: 0.53, giraffeHappy: 0.55, meerkatHappy: 0.45, polarBearHappy: 0.56, arcticFoxHappy: 0.51, sealHappy: 0.5 };

export function SchoolArc({ imgs, label = "A day at Comini Microschool" }: { imgs: string[]; label?: string }) {
  const [peek, setPeek] = useState<{ card: number; who: string; side: number; n: number } | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    const t = window.setInterval(() => {
      n += 1;
      // only a card that is on screen right now
      const slots = [...document.querySelectorAll<HTMLElement>(".sch-arc .parc-slot")];
      const onScreen = slots.map((el, i) => ({ i, r: el.getBoundingClientRect(), o: Number(el.style.opacity || 1) })).filter((x) => x.o > 0.9 && x.r.left > 0 && x.r.right < window.innerWidth).map((x) => x.i);
      if (!onScreen.length) return;
      setPeek({ card: onScreen[Math.floor(Math.random() * onScreen.length)], who: CAST[Math.floor(Math.random() * CAST.length)], side: Math.random() < 0.5 ? 0 : 1, n });
    }, 3600);
    return () => window.clearInterval(t);
  }, [imgs.length]);
  return (
    <PolaroidArc
      className="sch-arc"
      label={label}
      n={imgs.length}
      wrap
      drift={0.16}
      curve="down"
      start={0}
      render={(i) => (
        <>
          {/* the character sits behind the card (drawn first) and rises over its top edge */}
          {peek && peek.card === i ? <img key={peek.n} className={`sch-peek ${peek.side ? "r" : "l"}`} src={`/lab/cast/roster/${peek.who}.svg`} alt="" width={96} height={108} draggable={false} style={{ ["--up" as string]: `${-Math.round((EYES[peek.who] + 0.28) * 100)}%` }} /> : null}
          <figure className="pol">
            <span className="pol-pic"><img src={imgs[i]} alt={i === 0 ? label : ""} width={480} height={480} loading="lazy" draggable={false} /></span>
          </figure>
        </>
      )}
    />
  );
}
