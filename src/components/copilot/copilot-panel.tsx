"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { StudioEyebrow } from "@/components/ui/studio-eyebrow";
import { resolveBlueprintTemplateId } from "@/lib/blueprint-templates";
import type { Blueprint } from "@/lib/blueprint-types";

const SUGGESTIONS = [
  "What risks am I missing?",
  "Which initiative should be prioritized?",
  "Create an executive update.",
  "Reduce timeline by 4 weeks.",
  "Add resource requirements.",
];

type CopilotPanelProps = {
  blueprint: Blueprint;
};

export function CopilotPanel({ blueprint }: CopilotPanelProps) {
  const templateId = resolveBlueprintTemplateId(blueprint.objective);
  const leadInitiative = blueprint.initiatives[0]?.title ?? "the first initiative";

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; text: string }[]>([
    {
      role: "assistant",
      text: `I've reviewed your blueprint for "${truncate(blueprint.objective, 80)}". Your top priority is ${leadInitiative} — ask me to challenge assumptions, reprioritise initiatives, or draft leadership-ready updates.`,
    },
  ]);

  function handleSend(text: string) {
    const prompt = text.trim();
    if (!prompt) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: prompt },
      { role: "assistant", text: stubResponse(prompt, blueprint, templateId) },
    ]);
    setInput("");
  }

  return (
    <div className="copilot-panel">
      <div className="copilot-panel__header">
        <StudioEyebrow text="SprintIQ Copilot" />
        <p className="copilot-panel__lead">
          Challenge and improve your plan before you export.
        </p>
      </div>

      <div className="copilot-panel__messages">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={
              message.role === "assistant" ? "copilot-msg copilot-msg--assistant" : "copilot-msg copilot-msg--user"
            }
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="copilot-panel__suggestions">
        {SUGGESTIONS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="studio-badge"
            onClick={() => handleSend(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="copilot-panel__input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          placeholder="Ask Copilot anything…"
          className="copilot-panel__input"
        />
        <button
          type="button"
          className="studio-btn-primary studio-btn-pill !px-4"
          aria-label="Send"
          onClick={() => handleSend(input)}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function stubResponse(prompt: string, blueprint: Blueprint, templateId: string): string {
  const lower = prompt.toLowerCase();
  const firstInitiative = blueprint.initiatives[0]?.title ?? "your first initiative";
  const secondInitiative = blueprint.initiatives[1]?.title ?? "the second workstream";

  if (lower.includes("risk")) {
    const topRisk = blueprint.risks[0]?.title ?? "execution risk";
    return `Your blueprint already flags "${topRisk}". I'd also watch for owner bandwidth — ${blueprint.initiatives.map((i) => i.owner).join(", ")} are all in motion. Consider a contingency if ${secondInitiative} slips a sprint.`;
  }

  if (lower.includes("priorit")) {
    return `Prioritise "${firstInitiative}" first — it unlocks the rest of the plan. ${secondInitiative} can run in parallel only after week 2 once foundations are stable.`;
  }

  if (lower.includes("executive") || lower.includes("update")) {
    const milestone = blueprint.timeline[0]?.milestones[0] ?? "Q1 foundations";
    return `Draft: Leadership — immediate focus is ${milestone.toLowerCase()}. ${truncate(blueprint.executiveBrief, 220)}`;
  }

  if (lower.includes("timeline") || lower.includes("weeks")) {
    if (templateId === "braze") {
      return "A 4-week compression is feasible if you parallelise event taxonomy with Canvas rebuilds and limit the first launch to welcome + activation paths only.";
    }
    if (templateId === "onboarding") {
      return "Pull forward the milestone workshop by one week and run checklist UX in parallel with instrumentation — saves ~3 weeks if analytics capacity is confirmed upfront.";
    }
    if (templateId === "expansion") {
      return "Pull the scoring model launch forward by 2 weeks and run the campaign pilot in parallel with playbook training — achievable if RevOps and Marketing share a single account tier list from day one.";
    }
    return "A 4-week compression is feasible if you parallelise discovery with build and limit the pilot scope to the highest-impact accounts or journeys first.";
  }

  if (lower.includes("resource")) {
    const owners = [...new Set(blueprint.initiatives.map((i) => i.owner))].slice(0, 3).join(", ");
    return `Based on this plan, confirm dedicated capacity across ${owners}. I'd also assign a part-time PM to run the weekly cross-functional sync and keep milestones on track.`;
  }

  return `Good question. I'd stress-test owner capacity across ${blueprint.initiatives.length} initiatives, then validate whether ${blueprint.timeline[0]?.quarter ?? "phase 1"} milestones are resourced for parallel delivery.`;
}
