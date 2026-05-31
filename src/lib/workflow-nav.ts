import { WORKFLOW_ROUTES, type WorkflowStep } from "@/lib/blueprint-types";

const PATH_TO_STEP: Record<string, number> = {
  [WORKFLOW_ROUTES.objective]: 0,
  [WORKFLOW_ROUTES.blueprint]: 1,
  [WORKFLOW_ROUTES.review]: 2,
  [WORKFLOW_ROUTES.ready]: 3,
};

export function getActiveStepFromPath(pathname: string): number {
  if (pathname.startsWith(WORKFLOW_ROUTES.ready)) return 3;
  if (pathname.startsWith(WORKFLOW_ROUTES.review)) return 2;
  if (pathname.startsWith(WORKFLOW_ROUTES.blueprint)) return 1;
  return 0;
}

export function getRouteForStep(step: number): string {
  const routes = Object.entries(PATH_TO_STEP).sort((a, b) => a[1] - b[1]);
  return routes[step]?.[0] ?? WORKFLOW_ROUTES.objective;
}

export function canAccessStep(step: number, hasBlueprint: boolean): boolean {
  return step === 0 || hasBlueprint;
}

export function isWorkflowPath(pathname: string): boolean {
  return Object.keys(PATH_TO_STEP).some(
    (route) => route === pathname || (route !== "/" && pathname.startsWith(route)),
  );
}

export function stepIdFromIndex(index: number): WorkflowStep {
  const ids: WorkflowStep[] = ["objective", "blueprint", "review", "ready"];
  return ids[index] ?? "objective";
}
