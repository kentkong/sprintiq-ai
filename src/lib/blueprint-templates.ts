import type { Blueprint } from "@/lib/blueprint-types";

export type BlueprintTemplateId =
  | "renewal"
  | "braze"
  | "churn"
  | "onboarding"
  | "expansion";

export const FEATURED_EXAMPLES: {
  id: BlueprintTemplateId;
  label: string;
  objective: string;
}[] = [
  {
    id: "renewal",
    label: "Renewal Uplift",
    objective:
      "Increase customer renewal rates by 15% over the next two quarters while reducing churn risk in our highest-value accounts.",
  },
  {
    id: "braze",
    label: "Braze Migration",
    objective:
      "Migrate lifecycle marketing to Braze and improve trial conversion by 15% within one quarter.",
  },
  {
    id: "expansion",
    label: "Cross-Sell & Upsell",
    objective:
      "Increase expansion revenue by 20% over two quarters by identifying cross-sell and upsell opportunities across our existing customer base.",
  },
];

const TEMPLATES: Record<BlueprintTemplateId, Omit<Blueprint, "objective">> = {
  renewal: {
    executiveSummary:
      "SprintIQ recommends a two-quarter renewal programme focused on high-value account retention, proactive churn intervention, and executive-ready governance. Q1 builds signal infrastructure and pilots high-touch motions on strategic accounts; Q2 scales proven playbooks with a target of 15% renewal rate uplift and measurable churn reduction in top-tier segments.",
    initiatives: [
      {
        title: "High-Touch Retention Programme",
        description:
          "Deploy tiered success motions for highest-value accounts with renewal checkpoints, executive sponsors, and 90-day health reviews.",
        owner: "Customer Success",
      },
      {
        title: "Proactive Churn Signal Engine",
        description:
          "Stand up usage, support, and sentiment signals to flag at-risk accounts 60 days before renewal with automated playbooks.",
        owner: "Product & Data",
      },
      {
        title: "Executive Renewal Playbook",
        description:
          "Align Marketing, CS, and Leadership on renewal narratives, QBR templates, and escalation paths for strategic accounts.",
        owner: "Marketing & CS",
      },
    ],
    stakeholders: [
      {
        group: "Marketing",
        role: "Renewal campaigns & messaging",
        focus: "Value proof points and expansion narratives for strategic renewals",
      },
      {
        group: "Product",
        role: "Adoption & roadmap alignment",
        focus: "Feature utilisation insights and churn-predictive product signals",
      },
      {
        group: "Customer Success",
        role: "Account health & renewal execution",
        focus: "High-touch motions, QBRs, and executive relationship coverage",
      },
      {
        group: "Leadership",
        role: "Executive sponsorship",
        focus: "Quarterly renewal forecast, risk escalation, and board-ready updates",
      },
    ],
    risks: [
      {
        title: "Data quality gaps in account health scoring",
        severity: "high",
        mitigation:
          "Audit CRM and product telemetry feeds in Q1; assign a data steward before playbooks go live.",
      },
      {
        title: "CS capacity constraints on top-tier accounts",
        severity: "medium",
        mitigation:
          "Phase rollout by account tier; add interim contractor coverage for Q1 renewal cycle.",
      },
      {
        title: "Cross-functional alignment delays",
        severity: "medium",
        mitigation:
          "Weekly renewal war room with Marketing, Product, CS, and Leadership from week two.",
      },
    ],
    timeline: [
      {
        quarter: "Q1",
        milestones: [
          "Launch churn signal dashboard & at-risk account list",
          "Pilot high-touch programme on top 20 accounts",
          "Publish executive renewal playbook",
        ],
      },
      {
        quarter: "Q2",
        milestones: [
          "Scale retention programme to full strategic portfolio",
          "Achieve 15% renewal rate improvement target",
          "Deliver board-ready executive brief & results review",
        ],
      },
    ],
    executiveBrief:
      "Leadership update: We are executing a focused two-quarter renewal programme designed to lift customer renewal rates by 15% while reducing churn risk across highest-value accounts. Q1 establishes signal infrastructure, pilot success motions, and cross-functional governance. Q2 scales proven playbooks and reports measurable outcomes. Immediate ask: confirm executive sponsors for the top 20 accounts and approve the Q1 data audit resourcing.",
  },

  braze: {
    executiveSummary:
      "SprintIQ recommends a 12-week Braze migration programme to consolidate lifecycle marketing, replace fragmented ESP journeys, and lift trial conversion by 15%. The plan sequences platform cutover, journey rebuilds in Canvas, and experimentation on activation triggers — with Marketing Ops, Product, and Data aligned on event taxonomy before launch.",
    initiatives: [
      {
        title: "Braze Platform Cutover & Event Taxonomy",
        description:
          "Migrate core user events, identity resolution, and subscription groups into Braze; publish a canonical event dictionary for Product and Data.",
        owner: "Marketing Ops",
      },
      {
        title: "Trial Lifecycle Canvas Rebuild",
        description:
          "Rebuild trial onboarding, activation nudges, and conversion sequences in Braze Canvas with A/B tests on timing and offer framing.",
        owner: "Lifecycle Marketing",
      },
      {
        title: "Conversion Experimentation Sprint",
        description:
          "Run structured tests on welcome series, feature-adoption triggers, and trial-expiry offers to hit the 15% conversion uplift target.",
        owner: "Growth Marketing",
      },
    ],
    stakeholders: [
      {
        group: "Marketing Ops",
        role: "Platform migration & deliverability",
        focus: "Braze workspace setup, sender reputation, and journey QA",
      },
      {
        group: "Product",
        role: "In-app events & activation hooks",
        focus: "Instrument trial milestones and feed real-time triggers to Braze",
      },
      {
        group: "Data",
        role: "Segmentation & attribution",
        focus: "Audience definitions, conversion tracking, and experiment readouts",
      },
      {
        group: "Leadership",
        role: "Programme sponsorship",
        focus: "Conversion target accountability and cross-team resourcing sign-off",
      },
    ],
    risks: [
      {
        title: "Event schema drift during migration",
        severity: "high",
        mitigation:
          "Freeze taxonomy changes during weeks 1–4; run daily validation jobs against legacy ESP exports.",
      },
      {
        title: "Deliverability impact from domain warm-up",
        severity: "medium",
        mitigation:
          "Stagger volume ramp over 10 days; maintain legacy ESP fallback for transactional mail until week 6.",
      },
      {
        title: "Under-resourced journey QA before launch",
        severity: "medium",
        mitigation:
          "Assign a dedicated QA owner; require sign-off checklist for all Canvas paths before go-live.",
      },
    ],
    timeline: [
      {
        quarter: "Weeks 1–4",
        milestones: [
          "Complete Braze workspace setup and event taxonomy",
          "Migrate identity & subscription groups",
          "Rebuild core trial welcome Canvas (v1)",
        ],
      },
      {
        quarter: "Weeks 5–12",
        milestones: [
          "Launch activation trigger experiments",
          "Decommission legacy ESP journeys",
          "Report 15% trial conversion uplift vs baseline",
        ],
      },
    ],
    executiveBrief:
      "Leadership update: We are migrating lifecycle marketing to Braze over 12 weeks to improve trial conversion by 15%. Weeks 1–4 focus on platform cutover and event taxonomy; weeks 5–12 rebuild journeys, run conversion experiments, and retire the legacy ESP. Immediate ask: approve Marketing Ops capacity for migration QA and confirm Product commitment on trial milestone instrumentation by week 2.",
  },

  churn: {
    executiveSummary:
      "SprintIQ recommends an 8-week enterprise churn reduction programme combining health scoring, proactive outreach, and executive renewal governance. The plan targets a 20% reduction in enterprise logo churn by instrumenting leading indicators, tiering intervention playbooks, and establishing a weekly executive risk review.",
    initiatives: [
      {
        title: "Enterprise Health Score Model",
        description:
          "Build a composite health score from product usage, support tickets, NPS, and contract signals; segment accounts into green, amber, and red tiers.",
        owner: "Customer Analytics",
      },
      {
        title: "Proactive Outreach Playbooks",
        description:
          "Define tier-specific intervention sequences for CS, including executive escalation paths for red-tier accounts 90 days pre-renewal.",
        owner: "Customer Success",
      },
      {
        title: "Executive Churn Governance Forum",
        description:
          "Institute a weekly leadership review of at-risk enterprise accounts with decision rights on concessions, roadmap commits, and sponsor engagement.",
        owner: "Revenue Leadership",
      },
    ],
    stakeholders: [
      {
        group: "Customer Success",
        role: "Intervention execution",
        focus: "Tiered outreach, QBRs, and save motions for at-risk logos",
      },
      {
        group: "Sales",
        role: "Renewal negotiation",
        focus: "Commercial terms, expansion vs save trade-offs",
      },
      {
        group: "Product",
        role: "Adoption remediation",
        focus: "Feature gaps driving churn themes and quick-win roadmap items",
      },
      {
        group: "Leadership",
        role: "Escalation & resourcing",
        focus: "Enterprise save decisions and cross-functional unblockers",
      },
    ],
    risks: [
      {
        title: "Health score false positives flooding CS",
        severity: "high",
        mitigation:
          "Calibrate model on 12 months of churn history; tune thresholds before full rollout.",
      },
      {
        title: "Sales–CS friction on save authority",
        severity: "medium",
        mitigation:
          "Document decision matrix for discounts and roadmap commits; review in week 1 governance forum.",
      },
      {
        title: "Delayed product fixes for top churn drivers",
        severity: "medium",
        mitigation:
          "Cap in-flight remediation to two P0 themes; escalate blockers in executive forum within 48 hours.",
      },
    ],
    timeline: [
      {
        quarter: "Weeks 1–3",
        milestones: [
          "Ship enterprise health score v1",
          "Launch amber/red tier outreach playbooks",
          "Hold first executive churn governance session",
        ],
      },
      {
        quarter: "Weeks 4–8",
        milestones: [
          "Scale playbooks to full enterprise book",
          "Achieve 20% churn reduction vs baseline",
          "Publish churn driver analysis & next-quarter plan",
        ],
      },
    ],
    executiveBrief:
      "Leadership update: We are targeting a 20% reduction in enterprise logo churn over eight weeks via health scoring, proactive outreach, and executive governance. Weeks 1–3 deliver the scoring model and pilot playbooks; weeks 4–8 scale across the enterprise book. Immediate ask: confirm Sales and CS participation in the weekly governance forum and approve analytics resourcing for health score calibration.",
  },

  onboarding: {
    executiveSummary:
      "SprintIQ recommends a 6-week onboarding overhaul to improve trial-to-paid conversion by 12%. The programme redesigns activation milestones, in-product guidance, and lifecycle nudges — with Product, Growth, and CS aligned on a single definition of 'activated user' before experiments launch.",
    initiatives: [
      {
        title: "Activation Milestone Redesign",
        description:
          "Define and instrument 3–5 core activation milestones tied to paid conversion; map current drop-off points in the trial funnel.",
        owner: "Product Growth",
      },
      {
        title: "In-Product Guidance & Checklists",
        description:
          "Ship contextual onboarding checklists, empty states, and progress indicators aligned to activation milestones.",
        owner: "Product Design",
      },
      {
        title: "Lifecycle Activation Playbooks",
        description:
          "Deploy email and in-app nudges triggered by milestone completion (or stall) with tested copy and timing variants.",
        owner: "Lifecycle Marketing",
      },
    ],
    stakeholders: [
      {
        group: "Product",
        role: "In-app experience",
        focus: "Checklists, milestones, and friction removal in trial UX",
      },
      {
        group: "Growth",
        role: "Funnel optimisation",
        focus: "Conversion experiments and cohort analysis",
      },
      {
        group: "Marketing",
        role: "Lifecycle comms",
        focus: "Activation emails and trial-expiry sequences",
      },
      {
        group: "Customer Success",
        role: "High-intent trial support",
        focus: "Proactive outreach for stalled trials showing expansion signals",
      },
    ],
    risks: [
      {
        title: "Milestone definition disagreement across teams",
        severity: "high",
        mitigation:
          "Facilitate a 2-day workshop in week 1; lock metrics before any UX or comms build.",
      },
      {
        title: "Instrumentation gaps delay experiments",
        severity: "medium",
        mitigation:
          "Assign an analytics owner; gate launch on event validation checklist.",
      },
      {
        title: "UX changes confuse existing trial users",
        severity: "low",
        mitigation:
          "Roll out to 50% of new trials first; monitor support ticket volume for 5 days.",
      },
    ],
    timeline: [
      {
        quarter: "Weeks 1–2",
        milestones: [
          "Agree activation milestone definition",
          "Complete funnel drop-off analysis",
          "Instrument milestone events in product analytics",
        ],
      },
      {
        quarter: "Weeks 3–6",
        milestones: [
          "Launch in-product checklists and guidance",
          "Deploy lifecycle activation playbooks",
          "Hit 12% trial-to-paid conversion uplift",
        ],
      },
    ],
    executiveBrief:
      "Leadership update: We are overhauling trial onboarding over six weeks to improve trial-to-paid conversion by 12%. Weeks 1–2 lock activation milestones and instrumentation; weeks 3–6 ship in-product guidance and lifecycle playbooks. Immediate ask: confirm Product and Growth capacity for the milestone workshop and approve analytics support for funnel instrumentation.",
  },

  expansion: {
    executiveSummary:
      "SprintIQ recommends a two-quarter expansion programme to grow revenue from existing customers by 20% through systematic cross-sell and upsell motions. The plan builds an opportunity scoring model, equips CS and Sales with playbooks by customer segment, and runs targeted campaigns for under-penetrated accounts — with Product and Marketing aligned on packaging and upgrade paths before outreach scales.",
    initiatives: [
      {
        title: "Expansion Opportunity Scoring",
        description:
          "Identify cross-sell and upsell signals from product usage, seat growth, support themes, and whitespace in current contracts; tier accounts by expansion potential.",
        owner: "Revenue Operations",
      },
      {
        title: "CS & Sales Expansion Playbooks",
        description:
          "Define segment-specific motions for land-and-expand, module cross-sell, and tier upgrades — including talk tracks, QBR prompts, and handoff rules between CS and Sales.",
        owner: "Customer Success & Sales",
      },
      {
        title: "Targeted Upsell Campaign Sprint",
        description:
          "Launch in-app prompts, lifecycle emails, and AE/CS outreach for top-scored accounts; A/B test offer framing and bundle packaging on two priority product lines.",
        owner: "Growth Marketing",
      },
    ],
    stakeholders: [
      {
        group: "Customer Success",
        role: "Expansion discovery & QBRs",
        focus: "Whitespace identification, adoption depth, and warm introductions to Sales",
      },
      {
        group: "Sales",
        role: "Upsell negotiation & close",
        focus: "Tier upgrades, multi-product deals, and commercial terms for existing logos",
      },
      {
        group: "Product",
        role: "Packaging & upgrade paths",
        focus: "Feature gates, usage limits, and in-product upgrade triggers",
      },
      {
        group: "Marketing",
        role: "Expansion campaigns",
        focus: "Segment messaging, case studies, and lifecycle nurture for cross-sell offers",
      },
    ],
    risks: [
      {
        title: "Expansion outreach perceived as pushy by strategic accounts",
        severity: "high",
        mitigation:
          "Lead with value-based QBR insights; require CS approval before Sales outreach on top 50 accounts.",
      },
      {
        title: "Incomplete usage data understates opportunity",
        severity: "medium",
        mitigation:
          "Validate scoring model against 6 months of won expansion deals before full rollout.",
      },
      {
        title: "Product packaging gaps block upsell paths",
        severity: "medium",
        mitigation:
          "Lock two priority upgrade bundles in week 2; escalate roadmap gaps in weekly expansion stand-up.",
      },
    ],
    timeline: [
      {
        quarter: "Q1",
        milestones: [
          "Launch expansion opportunity score & account tiers",
          "Publish CS/Sales cross-sell and upsell playbooks",
          "Pilot targeted campaigns on top 30 accounts",
        ],
      },
      {
        quarter: "Q2",
        milestones: [
          "Scale expansion motions to full customer base",
          "Achieve 20% expansion revenue uplift vs baseline",
          "Deliver expansion pipeline review & next-quarter targets",
        ],
      },
    ],
    executiveBrief:
      "Leadership update: We are pursuing 20% expansion revenue growth over two quarters from cross-sell and upsell across the installed base. Q1 delivers opportunity scoring, playbooks, and a pilot on top accounts; Q2 scales proven motions company-wide. Immediate ask: confirm RevOps resourcing for the scoring model and align Sales/CS leadership on expansion targets and account tier definitions by week 2.",
  },
};

export function resolveBlueprintTemplateId(
  objective: string,
  templateHint?: string,
): BlueprintTemplateId {
  if (templateHint && templateHint in TEMPLATES) {
    return templateHint as BlueprintTemplateId;
  }

  const lower = objective.toLowerCase();

  if (
    lower.includes("cross-sell") ||
    lower.includes("cross sell") ||
    lower.includes("upsell") ||
    lower.includes("up-sell") ||
    lower.includes("expansion revenue") ||
    (lower.includes("opportunit") && (lower.includes("sell") || lower.includes("existing customer")))
  ) {
    return "expansion";
  }

  if (
    lower.includes("braze") ||
    lower.includes("migrate lifecycle") ||
    lower.includes("trial conversion") ||
    lower.includes("esp")
  ) {
    return "braze";
  }

  if (
    lower.includes("onboarding") ||
    lower.includes("trial-to-paid") ||
    lower.includes("activation playbook")
  ) {
    return "onboarding";
  }

  if (
    lower.includes("enterprise churn") ||
    (lower.includes("churn") && lower.includes("20%"))
  ) {
    return "churn";
  }

  if (lower.includes("renewal") || lower.includes("churn risk")) {
    return "renewal";
  }

  return "renewal";
}

export function buildBlueprint(objective: string, templateHint?: string): Blueprint {
  const trimmed = objective.trim();
  const templateId = resolveBlueprintTemplateId(trimmed, templateHint);
  const template = TEMPLATES[templateId];

  return {
    objective: trimmed,
    ...template,
  };
}

export function getTemplateLabel(templateId: BlueprintTemplateId): string {
  return FEATURED_EXAMPLES.find((e) => e.id === templateId)?.label ?? templateId;
}
