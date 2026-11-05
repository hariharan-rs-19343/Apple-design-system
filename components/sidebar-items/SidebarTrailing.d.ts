import * as React from 'react';
export interface SidebarTrailingProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  state?: "default" | "selected";
  type?: "checkmark" | "info" | "disclosure" | "symbol" | "toggle" | "detail";
  detail?: string;
  symbol?: string;
  showDetail?: boolean;
  /** Text content; defaults to "􀆅". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SidebarTrailing: React.FC<SidebarTrailingProps>;
export default SidebarTrailing;
