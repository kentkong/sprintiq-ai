import type { Blueprint } from "@/lib/blueprint-types";
import { buildBlueprint } from "@/lib/blueprint-templates";

export function generateBlueprint(objective: string, templateHint?: string): Blueprint {
  return buildBlueprint(objective, templateHint);
}
