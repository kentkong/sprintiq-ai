"use client";

import { Bell, Megaphone, Menu, Target, X } from "lucide-react";

type AppWorkspaceToolbarProps = {
  onMenuToggle?: () => void;
  navOpen?: boolean;
};

export function AppWorkspaceToolbar({ onMenuToggle, navOpen = false }: AppWorkspaceToolbarProps) {
  return (
    <header className="studio-header-band flex w-full shrink-0 items-center justify-between gap-3 px-4 sm:px-6">
      <button
        type="button"
        className="studio-icon-btn studio-menu-toggle md:hidden"
        aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={navOpen}
        onClick={onMenuToggle}
      >
        {navOpen ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
      </button>
      <div className="ml-auto flex items-center gap-2">
        <button type="button" className="studio-icon-btn hidden sm:flex" aria-label="Target">
          <Target className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button type="button" className="studio-icon-btn hidden sm:flex" aria-label="Announcements">
          <Megaphone className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button type="button" className="studio-icon-btn" aria-label="Notifications">
          <Bell className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button type="button" className="studio-user-chip" aria-label="Account menu">
          <span className="studio-avatar studio-avatar--sm">KM</span>
          <span className="studio-user-chip__text">
            <span className="studio-user-chip__name">Kevin M.</span>
            <span className="studio-user-chip__role">Workspace Owner</span>
          </span>
        </button>
      </div>
    </header>
  );
}
