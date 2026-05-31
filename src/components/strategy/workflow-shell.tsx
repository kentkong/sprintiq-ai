"use client";

import { AppShell } from "@/components/layout/app-shell";
import { MissionProgress } from "@/components/strategy/mission-progress";

type WorkflowShellProps = {
  children: React.ReactNode;
};

export function WorkflowShell({ children }: WorkflowShellProps) {
  return (
    <AppShell>
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto">
        <MissionProgress />
        {children}
      </div>
    </AppShell>
  );
}
