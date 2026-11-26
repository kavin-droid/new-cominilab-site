import { conceptIconPath, markForConcept } from "@/lib/curriculum/icons";
import { cn } from "@/lib/utils";

/*
 * Ported from Comini Trails' own ConceptIcon.tsx (apps/web/components/ConceptIcon.tsx), which
 * draws each mark against two inks - `currentColor` for the line work and `--ci-tint` for a
 * process-blue accent stroke/fill/wash. Recolored to a single ink here: every class draws in
 * `currentColor` (the `.a` accent class needs no override at all - it just inherits the
 * default stroke), keeping only the original opacity layering (`.f` wash, `.q` quiet) for
 * depth instead of a second hue.
 */
const CSS = `
.concept-icon { display: inline-flex; line-height: 0; }
.concept-icon svg { display: block; width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
.concept-icon .f { fill: currentColor; stroke: none; opacity: 0.26; }
.concept-icon .k { fill: currentColor; stroke: none; }
.concept-icon .q { opacity: 0.4; }
`;

/** `mark` names the drawing directly (the app hands one per concept); otherwise it is looked up from the concept name. */
export function ConceptIcon({ concept, mark: given, className }: { concept: string; mark?: string; className?: string }) {
  const mark = given ?? markForConcept(concept);

  return (
    <>
      <style href="comini-concept-icon" precedence="default">
        {CSS}
      </style>
      <span
        className={cn("concept-icon", className)}
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<svg viewBox="0 0 24 24" stroke-width="1.6" aria-hidden="true">${conceptIconPath(mark)}</svg>`,
        }}
      />
    </>
  );
}
