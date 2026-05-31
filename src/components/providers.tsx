"use client";

import { BlueprintProvider } from "@/lib/blueprint-store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <BlueprintProvider>{children}</BlueprintProvider>;
}
