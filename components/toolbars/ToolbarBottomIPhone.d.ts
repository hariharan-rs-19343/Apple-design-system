import * as React from 'react';
export interface ToolbarBottomIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "buttons" | "buttons + page dots" | "search" | "search with focus" | "search + trailing item" | "search + leading item";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ToolbarBottomIPhone: React.FC<ToolbarBottomIPhoneProps>;
export default ToolbarBottomIPhone;
