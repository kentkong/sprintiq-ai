"use client";

import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { WorkflowShell } from "@/components/strategy/workflow-shell";
import { LandingHero } from "@/components/strategy/landing-hero";
import { MissionCanvas } from "@/components/strategy/mission-canvas";
import { PopularMissions } from "@/components/strategy/popular-missions";
import { FEATURED_EXAMPLES } from "@/lib/blueprint-templates";
import { useBlueprintStore } from "@/lib/blueprint-store";
import type { MissionTemplate } from "@/lib/mission-templates";

export function SprintIQStudio() {
  const router = useRouter();
  const { objective, setObjective, generatePlan, isGenerating } = useBlueprintStore();

  const activeExampleId = useMemo(
    () => FEATURED_EXAMPLES.find((example) => example.objective === objective)?.id,
    [objective],
  );

  const runGenerate = useCallback(
    async (objectiveOverride?: string, templateId?: string) => {
      const ok = await generatePlan(objectiveOverride, templateId);
      if (ok) router.push("/blueprint");
    },
    [generatePlan, router],
  );

  const handleQuickStart = useCallback(
    (mission: MissionTemplate) => {
      runGenerate(mission.description, mission.id);
    },
    [runGenerate],
  );

  return (
    <WorkflowShell>
      <LandingHero
        value={objective}
        examples={FEATURED_EXAMPLES}
        activeExampleId={activeExampleId}
        onChange={setObjective}
        onSelectExample={(example) => runGenerate(example.objective, example.id)}
        onGenerate={() => runGenerate()}
        isGenerating={isGenerating}
      />
      {!isGenerating && (
        <>
          <MissionCanvas />
          <PopularMissions onQuickStart={handleQuickStart} disabled={isGenerating} />
        </>
      )}
    </WorkflowShell>
  );
}
