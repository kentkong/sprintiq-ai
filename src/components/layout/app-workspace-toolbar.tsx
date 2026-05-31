"use client";

import { Bell, Megaphone, Target } from "lucide-react";

export function AppWorkspaceToolbar() {
  return (
    <header className="studio-header-band flex w-full shrink-0 items-center justify-end px-6">
      <div className="flex items-center gap-2">
        <button type="button" className="studio-icon-btn" aria-label="Target">
          <Target className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button type="button" className="studio-icon-btn" aria-label="Announcements">
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
