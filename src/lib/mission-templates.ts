import type { BlueprintTemplateId } from "@/lib/blueprint-templates";

export type MissionTemplate = {
  id: BlueprintTemplateId;
  title: string;
  description: string;
  duration: string;
};

export const POPULAR_MISSIONS: MissionTemplate[] = [
  {
    id: "renewal",
    title: "Renewal Uplift",
    description:
      "Increase customer renewal rates by 15% over the next two quarters while reducing churn risk in our highest-value accounts.",
    duration: "2 quarters",
  },
  {
    id: "braze",
    title: "Braze Migration",
    description:
      "Migrate lifecycle marketing to Braze and improve trial conversion by 15% within one quarter.",
    duration: "12 weeks",
  },
  {
    id: "expansion",
    title: "Cross-Sell & Upsell",
    description:
      "Increase expansion revenue by 20% over two quarters by identifying cross-sell and upsell opportunities across our existing customer base.",
    duration: "2 quarters",
  },
  {
    id: "churn",
    title: "Churn Reduction",
    description:
      "Reduce enterprise churn by 20% through health scoring, proactive outreach, and executive renewal governance.",
    duration: "8 weeks",
  },
  {
    id: "onboarding",
    title: "Onboarding Overhaul",
    description:
      "Improve trial-to-paid conversion by 12% with a redesigned onboarding lifecycle and activation playbooks.",
    duration: "6 weeks",
  },
];
