import type { ArcLine } from "@/lib/arc-lines";

function tealBlueStroke(t: number, base: number): string {
  if (t < 0.45) return `rgba(45,212,191,${base})`;
  if (t < 0.75) return `rgba(0,229,255,${base})`;
  return `rgba(124,58,237,${base * 0.88})`;
}

/** Left-origin angular triangle sweep — parallel chevron strands, widely spaced. */
export function buildLeftTriangleSweep(width = 1000, height = 800, count = 11): ArcLine[] {
  const lines: ArcLine[] = [];
  const gap = 26;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const band = (i - (count - 1) / 2) * gap;

    const sx = -45 + band * 0.08;
    const sy = 40 + i * 58 + band * 0.18;

    const p1x = sx + 175 + band * 0.22;
    const p1y = sy + 95;
    const p2x = sx + 360 + band * 0.38;
    const p2y = sy - 75;
    const p3x = sx + 545 + band * 0.48;
    const p3y = sy + 85;
    const p4x = sx + 720 + band * 0.52;
    const p4y = sy - 35;
    const p5x = sx + 990 + band * 0.58;
    const p5y = sy + 55;

    const glow = 0.32 + (1 - Math.abs(t - 0.5) * 1.05) * 0.26;

    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${p1x.toFixed(1)} ${p1y.toFixed(1)} L ${p2x.toFixed(1)} ${p2y.toFixed(1)} L ${p3x.toFixed(1)} ${p3y.toFixed(1)} L ${p4x.toFixed(1)} ${p4y.toFixed(1)} L ${p5x.toFixed(1)} ${p5y.toFixed(1)}`,
      stroke: `rgba(0,229,255,${glow.toFixed(2)})`,
      opacity: 0.3 + (1 - Math.abs(t - 0.5)) * 0.2,
      width: 0.32,
    });
  }

  return lines;
}

/** @deprecated smooth S-curve — replaced by triangle sweep */
export function buildLeftSweepAcross(width = 1000, height = 800, count = 18): ArcLine[] {
  const lines: ArcLine[] = [];

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const band = (i - (count - 1) / 2) * 12;

    const sx = -20 + band * 0.22;
    const sy = 90 + band * 0.55 + t * 22;
    const ex = width * 0.8 + band * 0.38;
    const ey = height * 0.7 + band * 0.42;

    const c1x = width * 0.1 + band * 0.35;
    const c1y = sy - 90 - band * 0.15;
    const c2x = width * 0.48 + band * 0.48;
    const c2y = height * 0.52 + band * 0.28;

    const glow = 0.3 + (1 - Math.abs(t - 0.5) * 1.1) * 0.28;
    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: `rgba(0,229,255,${glow.toFixed(2)})`,
      opacity: 0.34 + (1 - Math.abs(t - 0.5)) * 0.22,
      width: 0.34 + (1 - Math.abs(t - 0.5)) * 0.14,
    });
  }

  return lines;
}

/** Top-left chevron — reference > shape, subtle. */
export function buildChevronAccent(): ArcLine[] {
  const lines: ArcLine[] = [];
  const count = 8;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const spread = (i - (count - 1) / 2) * 10;

    const sx = 32 + spread * 0.5;
    const sy = 48 + i * 10 + spread * 0.2;
    const ex = sx + 82 + t * 12;
    const ey = sy + 64 + t * 10;

    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: tealBlueStroke(t, 0.28 + t * 0.18),
      opacity: 0.28 + t * 0.18,
      width: 0.36,
    });
  }

  return lines;
}

/** Right S-curve — reference arc, subtle fine strands. */
export function buildRightScurveAccent(width = 1000, height = 800, count = 14): ArcLine[] {
  const lines: ArcLine[] = [];
  const turnY = height * 0.42;

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const spread = (i - (count - 1) / 2) * 11;

    const sx = width * 0.78 + spread * 0.18;
    const sy = 10;
    const ex = width + 15 + spread * 0.55;
    const ey = height + 20;
    const cx = width * 0.58 + spread * 0.85;
    const cy = turnY + spread * 0.4;

    lines.push({
      d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      stroke: tealBlueStroke(t, 0.24 + t * 0.2),
      opacity: 0.26 + t * 0.16,
      width: 0.35,
    });
  }

  return lines;
}

/** Bottom-left speed lines — reference, subtle. */
export function buildSpeedLineAccent(): ArcLine[] {
  const lines: ArcLine[] = [];

  for (let i = 0; i < 4; i++) {
    const y = 728 + i * 14;
    const len = 110 - i * 20;
    lines.push({
      d: `M 40 ${y} L ${40 + len} ${y}`,
      stroke: `rgba(45,212,191,${(0.45 - i * 0.08).toFixed(2)})`,
      opacity: 0.32 - i * 0.06,
      width: 0.45 - i * 0.06,
    });
  }

  return lines;
}

export const ACCENT_LEFT_TRIANGLE = buildLeftTriangleSweep();
export const ACCENT_LEFT_SWEEP = ACCENT_LEFT_TRIANGLE;
export const ACCENT_CHEVRON = buildChevronAccent();
export const ACCENT_RIGHT_S = buildRightScurveAccent();
export const ACCENT_SPEED = buildSpeedLineAccent();
