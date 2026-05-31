"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useBlueprintStore } from "@/lib/blueprint-store";
import type { WorkflowStep } from "@/lib/blueprint-types";
import { WORKFLOW_ROUTES } from "@/lib/blueprint-types";

export function useRequireBlueprint(step: WorkflowStep) {
  const router = useRouter();
  const { blueprint, isGenerating } = useBlueprintStore();

  useEffect(() => {
    if (step === "objective") return;
    if (isGenerating) return;
    if (blueprint) return;

    const timer = window.setTimeout(() => {
      if (!blueprint) {
        router.replace(WORKFLOW_ROUTES.objective);
      }
    }, 50);

    return () => window.clearTimeout(timer);
  }, [blueprint, isGenerating, router, step]);

  return { blueprint, ready: Boolean(blueprint) };
}
