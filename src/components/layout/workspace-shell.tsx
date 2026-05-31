import { cn } from "@/lib/utils";

export function WorkspaceShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex h-dvh w-full overflow-hidden", className)}>{children}</div>;
}
