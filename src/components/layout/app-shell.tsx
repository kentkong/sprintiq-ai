"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppWorkspaceToolbar } from "@/components/layout/app-workspace-toolbar";
import { WorkspaceShell } from "@/components/layout/workspace-shell";
import { DesignAtmosphere } from "@/components/ui/design-atmosphere";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <WorkspaceShell className="studio-shell relative">
      <AppSidebar />
      <div className="studio-main relative z-[1] flex min-w-0 flex-1 flex-col overflow-hidden">
        <DesignAtmosphere />
        <AppWorkspaceToolbar />
        {children}
      </div>
    </WorkspaceShell>
  );
}
