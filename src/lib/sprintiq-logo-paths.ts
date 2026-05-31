type Point = { x: number; y: number };

function perpNormal(from: Point, to: Point): Point {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: -dy / len, y: dx / len };
}

function offsetPoint(p: Point, normal: Point, dist: number): Point {
  return { x: p.x + normal.x * dist, y: p.y + normal.y * dist };
}

function fmt(p: Point): string {
  return `${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
}

/** Concentric ribbon around straight → U-bend → straight hook geometry. */
export function buildHookRibbon(
  p0: Point,
  p1: Point,
  cp: Point,
  p2: Point,
  p3: Point,
  count: number,
  spacing: number,
): string[] {
  const n01 = perpNormal(p0, p1);
  const nCurve = perpNormal(p1, p3);
  const n23 = perpNormal(p2, p3);
  const paths: string[] = [];

  for (let i = 0; i < count; i++) {
    const o = (i - (count - 1) / 2) * spacing;
    const s0 = offsetPoint(p0, n01, o);
    const s1 = offsetPoint(p1, n01, o);
    const sc = offsetPoint(cp, nCurve, o);
    const s2 = offsetPoint(p2, nCurve, o);
    const s3 = offsetPoint(p3, n23, o);

    paths.push(`M ${fmt(s0)} L ${fmt(s1)} Q ${fmt(sc)} ${fmt(s2)} L ${fmt(s3)}`);
  }

  return paths;
}

/** Lower-left hook — sweeps up-right (forms lower stroke of abstract S). */
export const HOOK_LOWER = {
  p0: { x: 6, y: 176 },
  p1: { x: 66, y: 116 },
  cp: { x: 96, y: 156 },
  p2: { x: 126, y: 116 },
  p3: { x: 186, y: 56 },
} as const;

/** Upper-right hook — sweeps down-left (forms upper stroke of abstract S). */
export const HOOK_UPPER = {
  p0: { x: 194, y: 24 },
  p1: { x: 134, y: 84 },
  cp: { x: 104, y: 44 },
  p2: { x: 74, y: 84 },
  p3: { x: 14, y: 144 },
} as const;

export const RIBBON_LINE_COUNT = 10;
export const RIBBON_SPACING = 2.4;

export function buildLogoRibbons(): { lower: string[]; upper: string[] } {
  return {
    lower: buildHookRibbon(
      HOOK_LOWER.p0,
      HOOK_LOWER.p1,
      HOOK_LOWER.cp,
      HOOK_LOWER.p2,
      HOOK_LOWER.p3,
      RIBBON_LINE_COUNT,
      RIBBON_SPACING,
    ),
    upper: buildHookRibbon(
      HOOK_UPPER.p0,
      HOOK_UPPER.p1,
      HOOK_UPPER.cp,
      HOOK_UPPER.p2,
      HOOK_UPPER.p3,
      RIBBON_LINE_COUNT,
      RIBBON_SPACING,
    ),
  };
}

/** Faint background speed lines at 45°. */
export function buildLogoGhostLines(count = 5): string[] {
  const lines: string[] = [];
  for (let i = 0; i < count; i++) {
    const offset = i * 28 - 20;
    lines.push(`M ${-20 + offset} ${220} L ${220 + offset} ${-20}`);
  }
  return lines;
}
