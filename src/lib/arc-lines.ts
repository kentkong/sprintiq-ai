export type ArcLine = {
  d: string;
  stroke: string;
  opacity: number;
  width: number;
};

function centerStroke(t: number, base: number): string {
  if (t < 0.35) return `rgba(45,212,191,${base})`;
  if (t < 0.7) return `rgba(0,229,255,${base})`;
  return `rgba(124,58,237,${base})`;
}

/**
 * Fine, evenly spaced arcs across the centre portion of the panel.
 */
function buildCenterFineArcs(width = 1000, height = 800, count = 12): ArcLine[] {
  const lines: ArcLine[] = [];
  const yStart = height * 0.22;
  const yEnd = height * 0.78;
  const xPad = width * 0.12;

  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const y = yStart + (yEnd - yStart) * t;

    const sx = xPad;
    const sy = y;
    const ex = width - xPad;
    const ey = y + Math.sin(t * Math.PI) * 8;
    const cx = width * 0.5;
    const cy = y - 14 + Math.cos(t * Math.PI * 1.5) * 5;

    const base = 0.16 + Math.sin(t * Math.PI) * 0.08;
    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: centerStroke(t, base),
      opacity: 0.2 + Math.sin(t * Math.PI) * 0.1,
      width: 0.32,
    });
  }

  return lines;
}

/** Whisper-thin edge accents — left, stays out of centre. */
function buildEdgeLeftFine(width = 1000, height = 800, count = 5): ArcLine[] {
  const lines: ArcLine[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const sx = 8 + t * 8;
    const sy = 40 + t * 24;
    const ex = width * 0.22 + t * width * 0.08;
    const ey = 100 + t * height * 0.35;
    const cx = sx + (ex - sx) * 0.45;
    const cy = sy - 40 + t * 80;

    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: centerStroke(t, 0.28),
      opacity: 0.3 + t * 0.15,
      width: 0.36,
    });
  }

  return lines;
}

/** Whisper-thin edge accents — right, stays out of centre. */
function buildEdgeRightFine(width = 1000, height = 800, count = 5): ArcLine[] {
  const lines: ArcLine[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const offset = i * 24;
    const sx = width * 0.78 + offset * 0.08;
    const sy = height + 20 - offset * 0.4;
    const ex = width - 10;
    const ey = height * 0.55 - offset * 0.22;
    const cx = width * 0.88;
    const cy = height * 0.48 - offset * 0.18;

    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: centerStroke(1 - t, 0.26),
      opacity: 0.28 + t * 0.14,
      width: 0.36,
    });
  }

  return lines;
}

export const ARC_CENTER_FINE = buildCenterFineArcs();
export const ARC_EDGE_LEFT = buildEdgeLeftFine();
export const ARC_EDGE_RIGHT = buildEdgeRightFine();
