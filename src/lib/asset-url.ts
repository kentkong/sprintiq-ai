import { basePath } from "@/lib/base-path";

/** Public asset URL — respects GitHub Pages basePath. */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const textureAssets = {
  slateSidebar: assetUrl("/textures/slate-sidebar.png"),
} as const;
