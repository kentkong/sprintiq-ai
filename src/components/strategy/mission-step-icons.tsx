import { cn } from "@/lib/utils";

export type StepIconId = "objective" | "blueprint" | "review" | "ready";

type MissionStepMarkerProps = {
  index: number;
  stepId: StepIconId;
  active?: boolean;
  done?: boolean;
};

export function MissionStepMarker({ index, stepId, active, done }: MissionStepMarkerProps) {
  return (
    <div
      className={cn(
        "mission-step-marker",
        `mission-step-marker--${stepId}`,
        active && "mission-step-marker--active",
        done && "mission-step-marker--done",
      )}
    >
      <span className="mission-step-marker__num">{index + 1}</span>
    </div>
  );
}

export const MISSION_STEPS = [
  { id: "objective" as const, label: "Objective", subtitle: "Define the goal" },
  { id: "blueprint" as const, label: "Blueprint", subtitle: "Build the plan" },
  { id: "review" as const, label: "Review", subtitle: "Copilot & refine" },
  { id: "ready" as const, label: "Ready", subtitle: "Export & deliver" },
];
