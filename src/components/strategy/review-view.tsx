"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlueprintContent } from "@/components/strategy/blueprint-content";
import { CopilotPanel } from "@/components/copilot/copilot-panel";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";
import type { Blueprint } from "@/lib/blueprint-types";

type ReviewViewProps = {
  blueprint: Blueprint;
};

export function ReviewView({ blueprint }: ReviewViewProps) {
  return (
    <div className="review-page px-6 py-8 lg:px-10 lg:py-9">
      <div className="workflow-page__header mx-auto max-w-3xl">
        <StudioEyebrow text="Review" variant="underlined" />
        <h2 className="studio-hero-title">Refine with Copilot</h2>
        <p className="studio-hero-lead">
          Challenge your blueprint, reprioritise initiatives, and sharpen executive messaging.
        </p>
      </div>

      <div className="review-page__split mx-auto mt-8 max-w-6xl">
        <div className="review-page__blueprint">
          <p className="review-page__column-label">Blueprint</p>
          <BlueprintContent blueprint={blueprint} compact />
        </div>
        <div className="review-page__copilot">
          <p className="review-page__column-label">Copilot</p>
          <CopilotPanel blueprint={blueprint} />
        </div>
      </div>

      <div className="review-page__actions mx-auto mt-8 flex max-w-6xl justify-end">
        <Link href="/ready" className="studio-btn-primary studio-btn-pill">
          Continue to Ready
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
