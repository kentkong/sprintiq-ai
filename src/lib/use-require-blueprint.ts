"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useBlueprintStore } from "@/lib/blueprint-store";
import type { WorkflowStep } from "@/lib/blueprint-types";
import { WORKFLOW_ROUTES } from "@/lib/blueprint-types";

export function useRequireBlueprint(step: WorkflowStep) {
  const router = useRouter();
  const { blueprint, isGenerating, hydrated } = useBlueprintStore();
  const blueprintRef = useRef(blueprint);

  blueprintRef.current = blueprint;

  useEffect(() => {
    if (!hydrated) return;
    if (step === "objective") return;
    if (isGenerating) return;
    if (blueprint) return;

    const timer = window.setTimeout(() => {
      if (!blueprintRef.current) {
        router.replace(WORKFLOW_ROUTES.objective);
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, [blueprint, hydrated, isGenerating, router, step]);

  return {
    blueprint,
    ready: hydrated && (step === "objective" || Boolean(blueprint)),
  };
}
