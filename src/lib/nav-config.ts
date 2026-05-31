import type { LucideIcon } from "lucide-react";
import { Archive, LayoutDashboard, Library } from "lucide-react";

export type NavAccent = "studio" | "library" | "archive";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  accent: NavAccent;
  description?: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Sprint Studio", href: "/", icon: LayoutDashboard, accent: "studio" },
  {
    label: "Mission Library",
    href: "/library",
    icon: Library,
    accent: "library",
    description: "Templates, examples, and playbooks",
  },
  {
    label: "Blueprint Archive",
    href: "/archive",
    icon: Archive,
    accent: "archive",
    description: "Your saved generated plans",
  },
];

export const WORKFLOW_PATHS = ["/", "/blueprint", "/review", "/ready"];
