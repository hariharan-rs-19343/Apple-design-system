import * as React from 'react';
export interface MacLiquidGlassMediumProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  children?: React.ReactNode;
}
/** macOS Liquid Glass, medium UI (popovers, menus). */
export declare const MacLiquidGlassMedium: React.FC<MacLiquidGlassMediumProps>;
export default MacLiquidGlassMedium;
