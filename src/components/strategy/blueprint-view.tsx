"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlueprintContent } from "@/components/strategy/blueprint-content";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";
import type { Blueprint } from "@/lib/blueprint-types";

type BlueprintViewProps = {
  blueprint: Blueprint;
};

export function BlueprintView({ blueprint }: BlueprintViewProps) {
  return (
    <div className="blueprint-page px-6 py-8 lg:px-10 lg:py-9">
      <div className="workflow-page__header mx-auto max-w-3xl">
        <StudioEyebrow text="Blueprint" variant="underlined" />
        <h2 className="studio-hero-title">Your delivery plan is ready</h2>
        <p className="studio-hero-lead">{blueprint.objective}</p>
      </div>

      <div className="blueprint-page__body mx-auto mt-8 max-w-5xl">
        <BlueprintContent blueprint={blueprint} />
      </div>

      <div className="blueprint-page__actions mx-auto mt-8 flex max-w-5xl justify-end">
        <Link href="/review" className="studio-btn-primary studio-btn-pill">
          Continue to Review
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
