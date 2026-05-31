"use client";

import { ReadyView } from "@/components/strategy/ready-view";
import { WorkflowShell } from "@/components/strategy/workflow-shell";
import { useRequireBlueprint } from "@/lib/use-require-blueprint";

export function ReadyPage() {
  const { blueprint, ready } = useRequireBlueprint("ready");

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
      <ReadyView blueprint={blueprint} />
    </WorkflowShell>
  );
}
