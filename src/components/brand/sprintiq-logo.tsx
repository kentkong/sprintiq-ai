import { SprintIQLogoMark } from "@/components/brand/sprintiq-logo-mark";
import { cn } from "@/lib/utils";

type SprintIQLogoProps = {
  size?: number;
  className?: string;
  variant?: "mark" | "lockup";
  showTagline?: boolean;
};

/** SprintIQ brand — neon ribbon mark with optional wordmark lockup. */
export function SprintIQLogo({
  size = 48,
  className,
  variant = "lockup",
  showTagline = false,
}: SprintIQLogoProps) {
  if (variant === "mark") {
    return <SprintIQLogoMark size={size} className={className} />;
  }

  const markSize = Math.round(size * 0.85);

  return (
    <div className={cn("sprintiq-logo-lockup", className)}>
      <SprintIQLogoMark size={markSize} className="sprintiq-logo-lockup__mark" />
      <div className="sprintiq-logo-lockup__text">
        <div className="studio-wordmark sprintiq-logo-lockup__wordmark">
          <span className="studio-wordmark__primary">Sprint</span>
          <span className="studio-wordmark__accent">IQ</span>
        </div>
        {showTagline && <p className="studio-wordmark__tagline">Delivery Strategist</p>}
      </div>
    </div>
  );
}
