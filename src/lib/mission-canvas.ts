import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Calendar,
  FileText,
  Flag,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

export type MissionCanvasItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
};

export const MISSION_CANVAS: MissionCanvasItem[] = [
  { id: "objective", label: "Objective", icon: Rocket, color: "#00e5ff" },
  { id: "opportunities", label: "Opportunities", icon: Lightbulb, color: "#e040fb" },
  { id: "initiatives", label: "Initiatives", icon: Flag, color: "#7c3aed" },
  { id: "stakeholders", label: "Stakeholders", icon: Users, color: "#00e5ff" },
  { id: "risks", label: "Risks", icon: AlertTriangle, color: "#ff6b9d" },
  { id: "roadmap", label: "Roadmap", icon: Calendar, color: "#e040fb" },
  { id: "brief", label: "Executive Brief", icon: FileText, color: "#7c3aed" },
];
