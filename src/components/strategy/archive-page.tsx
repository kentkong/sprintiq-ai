"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { useBlueprintStore } from "@/lib/blueprint-store";

export function ArchivePage() {
  const { blueprint } = useBlueprintStore();

  return (
    <AppShell>
      <div className="relative z-10 min-h-0 flex-1 overflow-y-auto px-6 py-8 lg:px-10 lg:py-9">
        <div className="mx-auto max-w-4xl">
          <div className="workflow-page__header mx-auto max-w-3xl">
            <p className="studio-section-eyebrow">Blueprint Archive</p>
            <h2 className="studio-hero-title">Your saved generated plans</h2>
            <p className="studio-hero-lead">
              Blueprints you generate in Sprint Studio appear here. This is not the template
              library — it is your personal archive of completed plans.
            </p>
          </div>

          {blueprint ? (
            <article className="blueprint-card blueprint-card--hero mt-8">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cyan)]" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="blueprint-card__eyebrow">Current session</p>
                  <p className="blueprint-card__lead">{blueprint.objective}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/blueprint" className="studio-btn-primary studio-btn-pill">
                  Open blueprint
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/ready" className="studio-btn-new studio-btn-pill">
                  Go to Ready
                </Link>
              </div>
            </article>
          ) : (
            <div className="mt-8 rounded-xl border border-[var(--border)] bg-[rgba(5,10,20,0.35)] p-8 text-center">
              <p className="text-sm text-[var(--foreground-soft)]">No saved blueprints yet.</p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                Generate your first plan in Sprint Studio to see it here.
              </p>
              <Link href="/" className="studio-btn-primary studio-btn-pill mt-6 inline-flex">
                Start a blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
