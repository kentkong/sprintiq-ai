"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppWorkspaceToolbar } from "@/components/layout/app-workspace-toolbar";
import { WorkspaceShell } from "@/components/layout/workspace-shell";
import { DesignAtmosphere } from "@/components/ui/design-atmosphere";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <WorkspaceShell className={cn("studio-shell relative", navOpen && "studio-shell--nav-open")}>
      <AppSidebar onNavigate={() => setNavOpen(false)} />
      {navOpen ? (
        <button
          type="button"
          className="studio-nav-scrim"
          aria-label="Close navigation menu"
          onClick={() => setNavOpen(false)}
        />
      ) : null}
      <div className="studio-main relative z-[1] flex min-w-0 flex-1 flex-col overflow-hidden">
        <DesignAtmosphere />
        <AppWorkspaceToolbar onMenuToggle={() => setNavOpen((open) => !open)} navOpen={navOpen} />
        {children}
      </div>
    </WorkspaceShell>
  );
}
