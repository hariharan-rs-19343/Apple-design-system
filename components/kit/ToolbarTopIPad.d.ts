import * as React from 'react';
export interface ToolbarTopIPadProps {
  className?: string;
  style?: React.CSSProperties;
  showWindowControls?: boolean;
  showSearch?: boolean;
  showSubtitle?: boolean;
  style2?: "title 2 line" | "title 2 line left" | "compact large" | "large title";
  tabBar?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ToolbarTopIPad: React.FC<ToolbarTopIPadProps>;
export default ToolbarTopIPad;
