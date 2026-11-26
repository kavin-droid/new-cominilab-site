import type { ReactNode } from "react";

// The kinds of activity, drawn like cominilab-app-v3 components/HeaderTag.tsx (the map home's header tags): a thick
// coloured outline over a pale fill, no black ink.
const Ico = ({ children, size = 36 }: { children: ReactNode; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">{children}</svg>
);
export type Kind = "explain" | "story" | "game" | "practice";
export const KindIcon = ({ kind, size }: { kind: Kind; size?: number }) => {
  if (kind === "explain") return <Ico size={size}><path d="M24 5a13 13 0 0 0-8 23.3c1.6 1.3 2.5 3 2.5 5V35h11v-1.7c0-2 .9-3.7 2.5-5A13 13 0 0 0 24 5z" fill="#FFF1E0" stroke="#F28C28" /><path d="M19 41h10" stroke="#F28C28" /></Ico>;
  if (kind === "story") return <Ico size={size}><path d="M5 7H16C20.4 7 24 10.6 24 15V42C24 38.7 21.3 36 18 36H5V7Z" fill="#F3E6FB" stroke="#A33FC9" /><path d="M43 7H32C27.6 7 24 10.6 24 15V42C24 38.7 26.7 36 30 36H43V7Z" fill="#F3E6FB" stroke="#A33FC9" /></Ico>;
  if (kind === "game") return <Ico size={size}><path d="M14 14h20c5.5 0 10 4.5 10 10v4c0 4.4-3.6 8-8 8-2.7 0-5-1.3-6.5-3.5L28 30h-8l-1.5 2.5C17 34.7 14.7 36 12 36c-4.4 0-8-3.6-8-8v-4c0-5.5 4.5-10 10-10z" fill="#E3F7F6" stroke="#2FB5C8" /><path d="M14 21v8M10 25h8" stroke="#2FB5C8" /><circle cx="33" cy="23" r="1.5" fill="#2FB5C8" stroke="#2FB5C8" /><circle cx="37" cy="27" r="1.5" fill="#2FB5C8" stroke="#2FB5C8" /></Ico>;
  return <Ico size={size}><path d="M8 12h10a4 4 0 1 1 8 0h10v10a4 4 0 1 1 0 8v10H26a4 4 0 1 0-8 0H8V30a4 4 0 1 0 0-8z" fill="#FFE8F3" stroke="#E0559A" /></Ico>;
};
