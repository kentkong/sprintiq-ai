"use client";

import { CheckCircle2, FileText, Presentation, Share2, Users } from "lucide-react";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";
import type { Blueprint } from "@/lib/blueprint-types";

const DELIVERABLES = [
  "Executive Summary",
  "Stakeholder Map",
  "Risks",
  "Timeline",
  "Executive Brief",
] as const;

type ReadyViewProps = {
  blueprint: Blueprint;
};

export function ReadyView({ blueprint }: ReadyViewProps) {
  return (
    <div className="ready-page px-6 py-8 lg:px-10 lg:py-9">
      <div className="workflow-page__header mx-auto max-w-3xl">
        <StudioEyebrow text="Ready" variant="underlined" />
        <h2 className="studio-hero-title">Plan complete — ready to deliver</h2>
        <p className="studio-hero-lead">{blueprint.objective}</p>
      </div>

      <div className="ready-page__checklist mx-auto mt-8 max-w-xl">
        {DELIVERABLES.map((item) => (
          <div key={item} className="ready-checklist__item">
            <CheckCircle2 className="ready-checklist__icon" strokeWidth={1.5} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="ready-page__exports mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        <button type="button" className="ready-export-btn">
          <FileText className="h-4 w-4" />
          Export PDF
        </button>
        <button type="button" className="ready-export-btn">
          <Presentation className="h-4 w-4" />
          Export PowerPoint
        </button>
        <button type="button" className="ready-export-btn">
          <Share2 className="h-4 w-4" />
          Share Plan
        </button>
        <button type="button" className="ready-export-btn ready-export-btn--primary">
          <Users className="h-4 w-4" />
          Present to Leadership
        </button>
      </div>
    </div>
  );
}
