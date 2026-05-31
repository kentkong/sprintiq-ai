"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { MISSION_STEPS, MissionStepMarker } from "@/components/strategy/mission-step-icons";
import { MissionStepConnector } from "@/components/strategy/mission-step-connector";
import { useBlueprintStore } from "@/lib/blueprint-store";
import { canAccessStep, getActiveStepFromPath, getRouteForStep } from "@/lib/workflow-nav";
import { cn } from "@/lib/utils";

export function MissionProgress() {
  const pathname = usePathname();
  const { blueprint } = useBlueprintStore();
  const activeStep = getActiveStepFromPath(pathname);
  const hasBlueprint = Boolean(blueprint);

  return (
    <nav className="mission-progress-track" aria-label="Workflow progress">
        {MISSION_STEPS.map((step, index) => {
          const active = index === activeStep;
          const done = index < activeStep;
          const accessible = canAccessStep(index, hasBlueprint);
          const connectorDone = index > 0 && index <= activeStep;
          const connectorActive = index === activeStep && activeStep > 0;

          const stepContent = (
            <>
              <MissionStepMarker index={index} stepId={step.id} active={active} done={done} />
              <div className="mission-step__meta">
                <span className="mission-step__label">{step.label}</span>
                <span className="mission-step__subtitle">{step.subtitle}</span>
                <span
                  className={cn(
                    "mission-step__indicator",
                    `mission-step__indicator--${step.id}`,
                    active && "mission-step__indicator--active",
                  )}
                  aria-hidden={!active}
                />
              </div>
            </>
          );

          return (
            <Fragment key={step.id}>
              {index > 0 && (
                <MissionStepConnector done={connectorDone} active={connectorActive} />
              )}
              {accessible ? (
                <Link
                  href={getRouteForStep(index)}
                  className={cn(
                    "mission-step mission-step--link",
                    `mission-step--${step.id}`,
                    active && "mission-step--active",
                    done && "mission-step--done",
                  )}
                  aria-current={active ? "step" : undefined}
                >
                  {stepContent}
                </Link>
              ) : (
                <div
                  className={cn(
                    "mission-step mission-step--locked",
                    `mission-step--${step.id}`,
                    active && "mission-step--active",
                  )}
                  aria-disabled
                >
                  {stepContent}
                </div>
              )}
            </Fragment>
          );
        })}
    </nav>
  );
}
