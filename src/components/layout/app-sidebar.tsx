"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { SprintIQLogo } from "@/components/brand/sprintiq-logo";
import { MAIN_NAV, WORKFLOW_PATHS } from "@/lib/nav-config";
import { useBlueprintStore } from "@/lib/blueprint-store";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { clearPlan } = useBlueprintStore();

  const handleNewPlan = () => {
    clearPlan();
    router.push("/");
  };

  return (
    <aside className="studio-sidebar flex shrink-0 flex-col">
      <div className="studio-sidebar-brand shrink-0">
        <SprintIQLogo size={46} showTagline />
      </div>

      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {MAIN_NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/" || WORKFLOW_PATHS.slice(1).some((path) => pathname.startsWith(path))
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn("studio-nav-link", active && "studio-nav-link--active")}
            >
              <span className={cn("studio-nav-icon", `studio-nav-icon--${item.accent}`)}>
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block truncate">{item.label}</span>
                {item.description && (
                  <span className="studio-nav-link__desc block truncate">{item.description}</span>
                )}
              </span>
            </Link>
          );
        })}

        <button type="button" onClick={handleNewPlan} className="studio-nav-link w-full">
          <span className="studio-nav-icon studio-nav-icon--newplan">
            <Plus className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block truncate">New plan</span>
            <span className="studio-nav-link__desc block truncate">Start a fresh objective</span>
          </span>
        </button>
      </nav>
    </aside>
  );
}
