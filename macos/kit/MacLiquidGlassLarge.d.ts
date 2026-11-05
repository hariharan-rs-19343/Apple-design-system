import * as React from 'react';
export interface MacLiquidGlassLargeProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  children?: React.ReactNode;
}
/** macOS Liquid Glass, large UI (windows, sidebars). Translucent blurred fill; place over content. */
export declare const MacLiquidGlassLarge: React.FC<MacLiquidGlassLargeProps>;
export default MacLiquidGlassLarge;
