"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SprintIQLogo } from "@/components/brand/sprintiq-logo";
import { WORKFLOW_PATHS, WORKSPACE_NAV } from "@/lib/nav-config";
import { useBlueprintStore } from "@/lib/blueprint-store";
import { cn } from "@/lib/utils";

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { clearPlan } = useBlueprintStore();

  const handleNewPlan = () => {
    clearPlan();
    onNavigate?.();
    router.push("/");
  };

  return (
    <aside className="studio-sidebar flex shrink-0 flex-col">
      <div className="studio-sidebar-brand shrink-0">
        <SprintIQLogo size={42} showTagline />
      </div>

      <nav className="studio-sidebar-nav flex-1" aria-label="Workspace">
        <p className="studio-sidebar-section">Workspace</p>
        <ul className="studio-sidebar-nav__list">
          {WORKSPACE_NAV.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/" ||
                  WORKFLOW_PATHS.slice(1).some((path) => pathname.startsWith(path))
                : item.href
                  ? pathname.startsWith(item.href)
                  : false;

            if (item.action === "new-plan") {
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={handleNewPlan}
                    className="studio-nav-link"
                  >
                    <span className={cn("studio-nav-icon", `studio-nav-icon--${item.accent}`)}>
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="studio-nav-link__text">
                      <span className="studio-nav-link__label">{item.label}</span>
                      <span className="studio-nav-link__desc">{item.description}</span>
                    </span>
                  </button>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href!}
                  onClick={() => onNavigate?.()}
                  className={cn("studio-nav-link", active && "studio-nav-link--active")}
                >
                  <span className={cn("studio-nav-icon", `studio-nav-icon--${item.accent}`)}>
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="studio-nav-link__text">
                    <span className="studio-nav-link__label">{item.label}</span>
                    <span className="studio-nav-link__desc">{item.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
