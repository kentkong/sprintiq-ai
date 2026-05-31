"use client";

import { ArrowRight } from "lucide-react";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";
import type { BlueprintTemplateId } from "@/lib/blueprint-templates";
import { cn } from "@/lib/utils";

type ExampleOption = {
  id: BlueprintTemplateId;
  label: string;
  objective: string;
};

type LandingHeroProps = {
  value: string;
  examples: ExampleOption[];
  activeExampleId?: BlueprintTemplateId;
  onChange: (value: string) => void;
  onSelectExample: (example: ExampleOption) => void;
  onGenerate: () => void;
  isGenerating: boolean;
};

export function LandingHero({
  value,
  examples,
  activeExampleId,
  onChange,
  onSelectExample,
  onGenerate,
  isGenerating,
}: LandingHeroProps) {
  const canSubmit = value.trim().length > 3 && !isGenerating;

  return (
    <section className="studio-hero-section studio-section relative px-6 py-8 lg:px-10 lg:py-9">
      <div className="studio-hero-section__fade studio-hero-section__fade--teal" aria-hidden />
      <div className="studio-hero-section__fade studio-hero-section__fade--purple" aria-hidden />
      <div className="studio-hero-stack relative z-[1] mx-auto max-w-4xl">
        <div className="studio-hero-copy mx-auto max-w-3xl text-center">
          <StudioEyebrow text="Sprint Studio" variant="underlined" />
          <h2 className="studio-hero-title studio-hero-title--single">
            Turn objectives into{" "}
            <span className="studio-hero-gradient">delivery-ready plans</span>
          </h2>
          <p className="studio-hero-lead mx-auto max-w-xl">
            Generate a full delivery blueprint — initiatives, stakeholders, risks, and executive brief.
          </p>
        </div>

        <div className="studio-objective-box studio-objective-box--hero">
          <div className="studio-example-picker">
            <span className="studio-example-picker__label">Try an example</span>
            <div className="studio-example-picker__pills">
              {examples.map((example) => (
                <button
                  key={example.id}
                  type="button"
                  disabled={isGenerating}
                  onClick={() => onSelectExample(example)}
                  className={cn(
                    "studio-example-pill",
                    activeExampleId === example.id && "studio-example-pill--active",
                  )}
                >
                  {example.label}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            placeholder="Describe your business objective…"
            className="studio-objective-input min-h-[96px]"
          />
          <div className="studio-divider mt-3" aria-hidden />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={onGenerate}
              disabled={!canSubmit}
              className={cn("studio-btn-primary studio-btn-pill", !canSubmit && "cursor-not-allowed")}
            >
              {isGenerating ? (
                <>
                  <span className="studio-btn-spinner" aria-hidden />
                  Generating blueprint…
                </>
              ) : (
                <>
                  Generate blueprint
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
