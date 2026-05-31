import { ACCENT_LEFT_TRIANGLE } from "@/lib/arc-accents";
import type { ArcLine } from "@/lib/arc-lines";

function ArcPaths({ lines, className }: { lines: ArcLine[]; className?: string }) {
  return (
    <g className={className}>
      {lines.map((line, i) => (
        <path
          key={i}
          d={line.d}
          fill="none"
          stroke={line.stroke}
          strokeWidth={line.width}
          opacity={line.opacity}
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </g>
  );
}

/** Centre panel — left angular triangle strands shooting across. */
export function DesignAtmosphere() {
  return (
    <div className="design-atmosphere design-atmosphere--panel" aria-hidden>
      <div className="design-atmosphere__fade design-atmosphere__fade--teal-left" />
      <div className="design-atmosphere__fade design-atmosphere__fade--purple-right" />
      <div className="design-atmosphere__fade design-atmosphere__fade--magenta-mid" />
      <div className="design-atmosphere__fade design-atmosphere__fade--cyan-accent" />

      <svg
        className="design-atmosphere__arcs"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <ArcPaths
          lines={ACCENT_LEFT_TRIANGLE}
          className="design-atmosphere__accent design-atmosphere__accent--left-triangle"
        />
      </svg>
    </div>
  );
}
