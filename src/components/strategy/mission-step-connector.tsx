import { cn } from "@/lib/utils";

type MissionStepConnectorProps = {
  done?: boolean;
  active?: boolean;
};

export function MissionStepConnector({ done, active }: MissionStepConnectorProps) {
  return (
    <div
      className={cn(
        "mission-step-connector",
        !done && !active && "mission-step-connector--pending",
        done && "mission-step-connector--done",
        active && "mission-step-connector--active",
      )}
      aria-hidden
    >
      <span className="mission-step-connector__hyphens" />
    </div>
  );
}
