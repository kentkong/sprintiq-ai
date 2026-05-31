"use client";

import { ReviewView } from "@/components/strategy/review-view";
import { WorkflowShell } from "@/components/strategy/workflow-shell";
import { useRequireBlueprint } from "@/lib/use-require-blueprint";

export function ReviewPage() {
  const { blueprint, ready } = useRequireBlueprint("review");

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
      <ReviewView blueprint={blueprint} />
    </WorkflowShell>
  );
}
