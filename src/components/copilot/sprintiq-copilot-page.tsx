"use client";

import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";

const SUGGESTIONS = [
  "Refine my objective for clarity",
  "Suggest stakeholders for this mission",
  "What risks should I plan for?",
];

export function SprintIQCopilotPage() {
  return (
    <AppShell>
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto px-6 py-8 lg:px-10">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--cyan)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Studio
        </Link>

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="text-center">
            <StudioEyebrow text="Assistant" />
            <h2 className="studio-section-heading">SprintIQ Copilot</h2>
            <p className="studio-section-lead mt-3">
              Ask questions about your mission and delivery plan
            </p>
          </div>

          <div className="studio-objective-box">
            <p className="mb-4 text-sm leading-relaxed text-[var(--foreground-soft)]">
              Hi — I can help refine objectives, identify stakeholders, and surface risks.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask Copilot anything…"
                className="studio-objective-input min-w-0 flex-1 rounded-lg border border-[var(--border)] bg-[var(--background-deep)] px-3 py-2.5"
              />
              <button type="button" className="studio-btn-primary studio-btn-pill !px-4" aria-label="Send">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <p className="studio-section-label mb-3">Suggested prompts</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((prompt) => (
                <button key={prompt} type="button" className="studio-badge">
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
