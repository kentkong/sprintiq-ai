import type { LucideIcon } from "lucide-react";
import { FolderOpen, Home, Library, Plus } from "lucide-react";

export type NavAccent = "studio" | "library" | "plans" | "newplan";

export type NavItem = {
  label: string;
  href?: string;
  icon: LucideIcon;
  accent: NavAccent;
  description: string;
  action?: "new-plan";
};

export const WORKSPACE_NAV: NavItem[] = [
  {
    label: "Sprint Studio",
    href: "/",
    icon: Home,
    accent: "studio",
    description: "Create delivery plans",
  },
  {
    label: "Mission Library",
    href: "/library",
    icon: Library,
    accent: "library",
    description: "Templates & examples",
  },
  {
    label: "My Plans",
    href: "/plans",
    icon: FolderOpen,
    accent: "plans",
    description: "Saved blueprints",
  },
  {
    label: "New Plan",
    icon: Plus,
    accent: "newplan",
    description: "Start fresh",
    action: "new-plan",
  },
];

export const WORKFLOW_PATHS = ["/", "/blueprint", "/review", "/ready"];

/** @deprecated use WORKSPACE_NAV */
export const MAIN_NAV = WORKSPACE_NAV;
