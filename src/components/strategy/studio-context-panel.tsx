"use client";

import Link from "next/link";
import { Bot, Compass, Target, Users } from "lucide-react";

export function StudioContextPanel() {
  return (
    <aside className="hidden w-[280px] shrink-0 flex-col border-l border-[var(--vintage-cream-muted)] bg-[var(--sprintiq-navy-toolbar)] xl:flex">
      <div className="studio-parchment m-4 p-4">
        <p className="vintage-label text-[#5c4033]">Mission at a Glance</p>
        <p className="vintage-display mt-2 text-3xl text-[var(--vintage-burgundy)]">—</p>
        <p className="vintage-body mt-1 text-[12px] text-[#8b7355]">Generate a blueprint to see progress</p>
      </div>

      <div className="flex-1 px-4 pb-4">
        <p className="vintage-label mb-3">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Open Copilot", href: "/copilot", icon: Bot },
            { label: "Stakeholders", href: "/copilot", icon: Users },
            { label: "Scope check", href: "/copilot", icon: Target },
            { label: "Discovery", href: "/copilot", icon: Compass },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href} className="vintage-action-card relative">
                <Icon className="h-4 w-4 text-[var(--vintage-gold)]" />
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
