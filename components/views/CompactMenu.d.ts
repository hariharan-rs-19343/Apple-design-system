import * as React from 'react';
export interface CompactMenuProps {
  className?: string;
  style?: React.CSSProperties;
  actions?: "2" | "3" | "4" | "5" | "6";
  action6?: string;
  action1?: string;
  showArrows?: boolean;
  action5?: string;
  action2?: string;
  action4?: string;
  action3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const CompactMenu: React.FC<CompactMenuProps>;
export default CompactMenu;
