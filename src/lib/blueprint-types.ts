export type BlueprintInitiative = {
  title: string;
  description: string;
  owner: string;
};

export type BlueprintStakeholder = {
  group: string;
  role: string;
  focus: string;
};

export type BlueprintRisk = {
  title: string;
  severity: "high" | "medium" | "low";
  mitigation: string;
};

export type BlueprintTimelineQuarter = {
  quarter: string;
  milestones: string[];
};

export type Blueprint = {
  objective: string;
  executiveSummary: string;
  initiatives: BlueprintInitiative[];
  stakeholders: BlueprintStakeholder[];
  risks: BlueprintRisk[];
  timeline: BlueprintTimelineQuarter[];
  executiveBrief: string;
};

export type WorkflowStep = "objective" | "blueprint" | "review" | "ready";

export const WORKFLOW_STEP_INDEX: Record<WorkflowStep, number> = {
  objective: 0,
  blueprint: 1,
  review: 2,
  ready: 3,
};

export const WORKFLOW_ROUTES: Record<WorkflowStep, string> = {
  objective: "/",
  blueprint: "/blueprint",
  review: "/review",
  ready: "/ready",
};
