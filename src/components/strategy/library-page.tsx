"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { POPULAR_MISSIONS, type MissionTemplate } from "@/lib/mission-templates";
import { useBlueprintStore } from "@/lib/blueprint-store";

export function LibraryPage() {
  const router = useRouter();
  const { generatePlan, isGenerating } = useBlueprintStore();

  const handleTemplate = async (mission: MissionTemplate) => {
    const ok = await generatePlan(mission.description, mission.id);
    if (ok) router.push("/blueprint");
  };

  return (
    <AppShell>
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto px-6 py-8 lg:px-10 lg:py-9">
        <div className="mx-auto max-w-4xl">
          <div className="workflow-page__header mx-auto max-w-3xl">
            <p className="studio-section-eyebrow">Mission Library</p>
            <h2 className="studio-hero-title">Templates, examples, and playbooks</h2>
            <p className="studio-hero-lead">
              Pick a template to generate a full blueprint — each example produces initiatives,
              stakeholders, risks, and a timeline tailored to that mission.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {POPULAR_MISSIONS.map((mission) => (
              <button
                key={mission.id}
                type="button"
                disabled={isGenerating}
                onClick={() => handleTemplate(mission)}
                className="mission-card text-left"
              >
                <p className="mission-card__title">{mission.title}</p>
                <p className="mission-card__body">{mission.description}</p>
                <span className="mission-card__duration">{mission.duration}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="studio-btn-primary studio-btn-pill"
            >
              Or write your own objective
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
