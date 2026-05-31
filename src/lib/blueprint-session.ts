import type { Blueprint } from "@/lib/blueprint-types";
import { FEATURED_EXAMPLES } from "@/lib/blueprint-templates";

export const DEFAULT_OBJECTIVE = FEATURED_EXAMPLES[0].objective;

const SESSION_KEY = "sprintiq-blueprint-session";

export type BlueprintSession = {
  objective: string;
  blueprint: Blueprint | null;
};

export function readBlueprintSession(): BlueprintSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as BlueprintSession;
    if (typeof parsed.objective !== "string") return null;
    if (parsed.blueprint !== null && typeof parsed.blueprint !== "object") return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeBlueprintSession(session: BlueprintSession): void {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Ignore quota or privacy-mode errors in demo mode.
  }
}

export function clearBlueprintSession(): void {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Ignore storage errors in demo mode.
  }
}
