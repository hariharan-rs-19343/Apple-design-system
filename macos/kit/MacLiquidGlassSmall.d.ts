import * as React from 'react';
export interface MacLiquidGlassSmallProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "primary";
  children?: React.ReactNode;
}
/** macOS Liquid Glass, small UI (controls). state="primary" tints with the accent blue. */
export declare const MacLiquidGlassSmall: React.FC<MacLiquidGlassSmallProps>;
export default MacLiquidGlassSmall;
