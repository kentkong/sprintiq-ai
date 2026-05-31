# SprintIQ AI

Turn business objectives into delivery-ready plans — initiatives, stakeholders, risks, timeline, and executive brief — through a guided four-step studio workflow.

## Overview

SprintIQ AI is a **portfolio demo** that shows how an AI-assisted strategy studio could help operators and leaders move from a raw business objective to a structured delivery blueprint. The UI is fully interactive; generation uses curated templates so each example produces credible, mission-specific output.

### Workflow

| Step | Route | Purpose |
|------|-------|---------|
| 1. Objective | `/` | Define or pick an example objective |
| 2. Blueprint | `/blueprint` | Review the generated delivery plan |
| 3. Review | `/review` | Refine with Copilot alongside the blueprint |
| 4. Ready | `/ready` | Checklist and export actions |

### Also in the app

| Route | Purpose |
|-------|---------|
| `/library` | Mission templates — click to generate |
| `/plans` | Saved blueprints from the current session |
| `/copilot` | Redirects to Review |

## Demo examples

Each example generates a **distinct blueprint** (not the same template every time):

- **Renewal Uplift** — retention, churn signals, executive renewal governance
- **Braze Migration** — platform cutover, Canvas rebuilds, conversion experiments
- **Cross-Sell & Upsell** — expansion scoring, CS/Sales playbooks, upsell campaigns
- **Churn Reduction** — enterprise health scoring and governance
- **Onboarding Overhaul** — activation milestones and lifecycle playbooks

Use **Try an example** on the home page, **Quick Start** cards, or **Mission Library** to run each demo path.

## Quick start

```bash
git clone https://github.com/kentkong/sprintiq-ai.git
cd sprintiq-ai
npm install
npm run dev
```

Open **http://127.0.0.1:3001/sprintiq-ai/** (local dev uses the same `/sprintiq-ai` base path as GitHub Pages)

## Live demo (GitHub Pages)

**https://kentkong.github.io/sprintiq-ai/**

Same static export setup as [Pulse-Ops AI](https://kentkong.github.io/pulse-ops-ai/architecture/) — deploys automatically on push to `main`.

## Tech stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4, custom studio design system
- **Icons:** Lucide React
- **State:** React context (session-scoped blueprint store)

## Project structure

```
src/
├── app/                    # App Router pages
├── components/
│   ├── brand/              # SprintIQ logo
│   ├── copilot/            # Copilot panel (Review step)
│   ├── layout/             # Shell, sidebar, toolbar
│   └── strategy/           # Workflow views & stepper
├── lib/
│   ├── blueprint-templates.ts   # Demo blueprint content
│   ├── blueprint-store.tsx      # Session state
│   └── workflow-nav.ts          # Step routing & gating
└── styles/
    └── studio-page.css     # Studio UI styles
```

## Demo scope

**Included in this demo**

- Full 4-step workflow with step gating and navigation
- Five mission-specific blueprint templates
- Copilot panel with context-aware stub responses
- Mission Library and Quick Start generation

**Not included (future work)**

- Real LLM / API integration
- Persistent archive or user accounts
- Working PDF / PowerPoint export
- Production auth

---

## About the project

SprintIQ AI explores what a **strategy-to-delivery studio** could feel like for customer lifecycle and GTM operators — people who need to turn ambiguous goals (“improve renewals”, “migrate to Braze”, “grow expansion revenue”) into plans their teams can actually execute.

The demo prioritises **trust through specificity**: when you pick Cross-Sell & Upsell vs Braze Migration, you see different initiatives, stakeholders, risks, and timelines — not a generic slide deck with your objective pasted on top.

It sits alongside other portfolio work (e.g. [Pulse-Ops AI](https://github.com/kentkong/pulse-ops-ai)) as a complementary view: Pulse-Ops focuses on operational intelligence and lifecycle orchestration; SprintIQ focuses on **planning and blueprinting** upstream of execution.

---

## About the author

**Kevin M.** — product and lifecycle operations practitioner building interactive demos that show how AI, data, and orchestration tools can work together in real GTM and CS workflows.

These projects are hands-on prototypes: designed to be walked through live, shared with stakeholders, and used to stress-test product narratives before production build-out.

- GitHub: [@kentkong](https://github.com/kentkong)
- Related demo: [Pulse-Ops AI](https://github.com/kentkong/pulse-ops-ai)

---

## License

Portfolio / demo project — not intended for production use.
