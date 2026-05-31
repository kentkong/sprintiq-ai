import { buildLogoGhostLines, buildLogoRibbons } from "@/lib/sprintiq-logo-paths";
import { cn } from "@/lib/utils";
import { useId } from "react";

type SprintIQLogoMarkProps = {
  size?: number;
  className?: string;
};

const { lower, upper } = buildLogoRibbons();
const ghostLines = buildLogoGhostLines();

function RibbonGroup({ paths, className }: { paths: string[]; className?: string }) {
  return (
    <g className={className}>
      {paths.map((d, i) => {
        const t = i / (paths.length - 1);
        const glow = 0.55 + (1 - Math.abs(t - 0.5) * 1.2) * 0.45;
        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={`rgba(0,229,255,${glow.toFixed(2)})`}
            strokeWidth={1.15}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </g>
  );
}

/** Standalone SprintIQ symbol — twin concentric ribbon hooks forming an abstract S. */
export function SprintIQLogoMark({ size = 48, className }: SprintIQLogoMarkProps) {
  const glowId = useId();

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <defs>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity={0.22}>
        {ghostLines.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(0,120,180,0.35)"
            strokeWidth={0.8}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      <g filter={`url(#${glowId})`}>
        <RibbonGroup paths={lower} />
        <RibbonGroup paths={upper} />
      </g>
    </svg>
  );
}
