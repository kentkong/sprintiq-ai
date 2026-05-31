import { textureAssets } from "@/lib/asset-url";

/** Bakes basePath-aware texture URLs into :root for CSS pseudo-elements. */
export function AssetPathStyles() {
  const css = `:root {
  --texture-slate-sidebar: url("${textureAssets.slateSidebar}");
}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
