"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import type { Blueprint } from "@/lib/blueprint-types";
import { FEATURED_EXAMPLES } from "@/lib/blueprint-templates";
import { generateBlueprint } from "@/lib/generate-blueprint";

const DEFAULT_OBJECTIVE = FEATURED_EXAMPLES[0].objective;

type BlueprintStore = {
  objective: string;
  blueprint: Blueprint | null;
  isGenerating: boolean;
  setObjective: (value: string) => void;
  generatePlan: (objectiveOverride?: string, templateId?: string) => Promise<boolean>;
  clearPlan: () => void;
};

const BlueprintContext = createContext<BlueprintStore | null>(null);

export function BlueprintProvider({ children }: { children: ReactNode }) {
  const [objective, setObjective] = useState(DEFAULT_OBJECTIVE);
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePlan = useCallback(async (objectiveOverride?: string, templateId?: string) => {
    const trimmed = (objectiveOverride ?? objective).trim();
    if (trimmed.length < 4 || isGenerating) return false;

    if (objectiveOverride) {
      setObjective(objectiveOverride);
    }

    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));

    flushSync(() => {
      setBlueprint(generateBlueprint(trimmed, templateId));
      setIsGenerating(false);
    });

    return true;
  }, [objective, isGenerating]);

  const clearPlan = useCallback(() => {
    setObjective(DEFAULT_OBJECTIVE);
    setBlueprint(null);
    setIsGenerating(false);
  }, []);

  const value = useMemo(
    () => ({
      objective,
      blueprint,
      isGenerating,
      setObjective,
      generatePlan,
      clearPlan,
    }),
    [objective, blueprint, isGenerating, generatePlan, clearPlan],
  );

  return <BlueprintContext.Provider value={value}>{children}</BlueprintContext.Provider>;
}

export function useBlueprintStore() {
  const context = useContext(BlueprintContext);
  if (!context) {
    throw new Error("useBlueprintStore must be used within BlueprintProvider");
  }
  return context;
}
