"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import type { Blueprint } from "@/lib/blueprint-types";
import {
  clearBlueprintSession,
  DEFAULT_OBJECTIVE,
  readBlueprintSession,
  writeBlueprintSession,
} from "@/lib/blueprint-session";
import { generateBlueprint } from "@/lib/generate-blueprint";

type BlueprintStore = {
  objective: string;
  blueprint: Blueprint | null;
  isGenerating: boolean;
  hydrated: boolean;
  setObjective: (value: string) => void;
  generatePlan: (objectiveOverride?: string, templateId?: string) => Promise<boolean>;
  clearPlan: () => void;
};

const BlueprintContext = createContext<BlueprintStore | null>(null);

export function BlueprintProvider({ children }: { children: ReactNode }) {
  const [objective, setObjectiveState] = useState(DEFAULT_OBJECTIVE);
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const session = readBlueprintSession();
    if (session) {
      setObjectiveState(session.objective);
      setBlueprint(session.blueprint);
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((nextObjective: string, nextBlueprint: Blueprint | null) => {
    writeBlueprintSession({ objective: nextObjective, blueprint: nextBlueprint });
  }, []);

  const setObjective = useCallback(
    (value: string) => {
      setObjectiveState(value);
      if (hydrated) {
        persist(value, blueprint);
      }
    },
    [blueprint, hydrated, persist],
  );

  const generatePlan = useCallback(
    async (objectiveOverride?: string, templateId?: string) => {
      const trimmed = (objectiveOverride ?? objective).trim();
      if (trimmed.length < 4 || isGenerating) return false;

      const nextObjective = objectiveOverride ?? objective;

      setIsGenerating(true);

      flushSync(() => {
        if (objectiveOverride) {
          setObjectiveState(nextObjective);
        }
      });

      await new Promise((resolve) => setTimeout(resolve, 1400));

      let generated: Blueprint | null = null;

      flushSync(() => {
        generated = generateBlueprint(trimmed, templateId);
        setBlueprint(generated);
        setIsGenerating(false);
      });

      persist(nextObjective, generated);
      return true;
    },
    [objective, isGenerating, persist],
  );

  const clearPlan = useCallback(() => {
    setObjectiveState(DEFAULT_OBJECTIVE);
    setBlueprint(null);
    setIsGenerating(false);
    clearBlueprintSession();
  }, []);

  const value = useMemo(
    () => ({
      objective,
      blueprint,
      isGenerating,
      hydrated,
      setObjective,
      generatePlan,
      clearPlan,
    }),
    [objective, blueprint, isGenerating, hydrated, setObjective, generatePlan, clearPlan],
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
