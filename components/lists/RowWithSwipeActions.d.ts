import * as React from 'react';
export interface RowWithSwipeActionsProps {
  className?: string;
  style?: React.CSSProperties;
  height?: "regular" | "tall";
  swipe?: "right" | "left";
  title?: string;
  showAction1?: boolean;
  showSubtitle?: boolean;
  showAction2?: boolean;
  showAction3?: boolean;
  subtitle?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const RowWithSwipeActions: React.FC<RowWithSwipeActionsProps>;
export default RowWithSwipeActions;
