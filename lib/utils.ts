import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Whether a nav `href` points at the page currently being viewed, for active-state highlighting.
 *  A same-page anchor (e.g. "#schools") never counts - it doesn't navigate anywhere, so it isn't
 *  "the current page" just because pathname happens to be "/". Both sides are stripped of a
 *  trailing slash before comparing, since next.config.ts sets `trailingSlash: true` - the real
 *  URL (and what `usePathname()` returns) is "/contact/", not the plain "/contact" a `href` is
 *  written as. */
export function isNavLinkActive(href: string, pathname: string | null) {
  if (href.startsWith("#") || !pathname) return false;
  const normalize = (path: string) => (path.length > 1 ? path.replace(/\/$/, "") : path);
  return normalize(href) === normalize(pathname);
}
