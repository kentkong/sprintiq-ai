"use client";

import { BlueprintView } from "@/components/strategy/blueprint-view";
import { WorkflowShell } from "@/components/strategy/workflow-shell";
import { useRequireBlueprint } from "@/lib/use-require-blueprint";

export function BlueprintPage() {
  const { blueprint, ready } = useRequireBlueprint("blueprint");

  if (!ready || !blueprint) {
    return (
      <WorkflowShell>
        <div className="flex flex-1 items-center justify-center p-8 text-sm text-[var(--muted)]">
          Loading plan…
        </div>
      </WorkflowShell>
    );
  }

  return (
    <WorkflowShell>
      <BlueprintView blueprint={blueprint} />
    </WorkflowShell>
  );
}
