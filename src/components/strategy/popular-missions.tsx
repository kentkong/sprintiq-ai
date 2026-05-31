"use client";

import { POPULAR_MISSIONS, type MissionTemplate } from "@/lib/mission-templates";

type PopularMissionsProps = {
  onQuickStart: (mission: MissionTemplate) => void;
  disabled?: boolean;
};

export function PopularMissions({ onQuickStart, disabled }: PopularMissionsProps) {
  return (
    <section className="studio-section relative border-t border-[rgba(45,212,191,0.08)] px-6 py-8 lg:px-10">
      <div className="studio-section-header">
        <p className="studio-section-eyebrow">Quick Start</p>
        <h3 className="studio-section-heading">Pick an example objective</h3>
        <p className="studio-section-lead">
          Each example generates a tailored blueprint — initiatives, risks, and timeline matched to
          the mission.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {POPULAR_MISSIONS.map((mission) => (
          <button
            key={mission.id}
            type="button"
            disabled={disabled}
            onClick={() => onQuickStart(mission)}
            className="mission-card"
          >
            <p className="mission-card__title">{mission.title}</p>
            <p className="mission-card__body">{mission.description}</p>
            <span className="mission-card__duration">{mission.duration}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
