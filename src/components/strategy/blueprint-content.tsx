import type { Blueprint, BlueprintRisk } from "@/lib/blueprint-types";
import { cn } from "@/lib/utils";

function severityClass(severity: BlueprintRisk["severity"]) {
  if (severity === "high") return "blueprint-risk--high";
  if (severity === "medium") return "blueprint-risk--medium";
  return "blueprint-risk--low";
}

type BlueprintContentProps = {
  blueprint: Blueprint;
  compact?: boolean;
};

export function BlueprintContent({ blueprint, compact = false }: BlueprintContentProps) {
  return (
    <div className={cn("blueprint-content", compact && "blueprint-content--compact")}>
      <section className="blueprint-card blueprint-card--hero">
        <p className="blueprint-card__eyebrow">Executive Summary</p>
        <p className="blueprint-card__lead">{blueprint.executiveSummary}</p>
      </section>

      <section className="blueprint-section">
        <h3 className="blueprint-section__title">Initiatives</h3>
        <div className="blueprint-initiatives">
          {blueprint.initiatives.map((initiative) => (
            <article key={initiative.title} className="blueprint-card blueprint-card--initiative">
              <h4 className="blueprint-card__heading">{initiative.title}</h4>
              <p className="blueprint-card__body">{initiative.description}</p>
              <p className="blueprint-card__meta">{initiative.owner}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blueprint-section">
        <h3 className="blueprint-section__title">Stakeholders</h3>
        <div className="blueprint-stakeholders">
          {blueprint.stakeholders.map((stakeholder) => (
            <article key={stakeholder.group} className="blueprint-card blueprint-card--stakeholder">
              <h4 className="blueprint-card__heading">{stakeholder.group}</h4>
              <p className="blueprint-card__role">{stakeholder.role}</p>
              <p className="blueprint-card__body">{stakeholder.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blueprint-section">
        <h3 className="blueprint-section__title">Risks</h3>
        <div className="blueprint-risks">
          {blueprint.risks.map((risk) => (
            <article
              key={risk.title}
              className={cn("blueprint-card blueprint-card--risk", severityClass(risk.severity))}
            >
              <div className="blueprint-card__risk-header">
                <h4 className="blueprint-card__heading">{risk.title}</h4>
                <span className="blueprint-risk__badge">{risk.severity}</span>
              </div>
              <p className="blueprint-card__body">{risk.mitigation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blueprint-section">
        <h3 className="blueprint-section__title">Timeline</h3>
        <div className="blueprint-timeline">
          {blueprint.timeline.map((period) => (
            <article key={period.quarter} className="blueprint-card blueprint-card--timeline">
              <h4 className="blueprint-card__heading">{period.quarter}</h4>
              <ul className="blueprint-timeline__list">
                {period.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="blueprint-card blueprint-card--brief">
        <p className="blueprint-card__eyebrow">Executive Brief</p>
        <p className="blueprint-card__lead">{blueprint.executiveBrief}</p>
      </section>
    </div>
  );
}
