import * as React from 'react';
export interface ToolbarTopSheetProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light";
  style2?: "default" | "compact large" | "large title" | "title 2 line" | "title 2 line left";
  showSubtitle?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ToolbarTopSheet: React.FC<ToolbarTopSheetProps>;
export default ToolbarTopSheet;
