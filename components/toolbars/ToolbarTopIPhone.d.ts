import * as React from 'react';
export interface ToolbarTopIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "compact large" | "large title" | "title 2 line" | "title 2 line left";
  showSubtitle?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ToolbarTopIPhone: React.FC<ToolbarTopIPhoneProps>;
export default ToolbarTopIPhone;
