"use client";

import { MISSION_CANVAS } from "@/lib/mission-canvas";

export function MissionCanvas() {
  return (
    <section className="studio-section border-t border-[rgba(45,212,191,0.08)] px-6 py-8 lg:px-10">
      <div className="studio-section-header">
        <p className="studio-section-eyebrow">Your Blueprint Includes</p>
        <h3 className="studio-section-heading">What SprintIQ generates</h3>
        <p className="studio-section-lead">
          Every blueprint includes these sections — built automatically in Step 2.
        </p>
      </div>
      <div className="mission-canvas-grid">
        {MISSION_CANVAS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-center">
              {index > 0 && <div className="mission-canvas-dot hidden sm:block" />}
              <div className="mission-canvas-item">
                <div className="mission-canvas-icon">
                  <Icon className="h-5 w-5" style={{ color: item.color }} />
                </div>
                <span className="mission-canvas-label">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
