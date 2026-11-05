import * as React from 'react';
export interface TabBarIPadProps {
  className?: string;
  style?: React.CSSProperties;
  tabs?: "2 (1 selected)" | "2 (2 selected)" | "3 (1 selected)" | "3 (2 selected)" | "3 (3 selected)" | "4 (1 selected)" | "4 (2 selected)" | "4 (3 selected)" | "4 (4 selected)" | "5 (1 selected)" | "5 (2 selected)" | "5 (3 selected)" | "5 (4 selected)" | "5 (5 selected)" | "6 (1 selected)" | "6 (2 selected)" | "6 (3 selected)" | "6 (4 selected)" | "6 (5 selected)" | "6 (6 selected)" | "7 (1 selected)" | "7 (2 selected)" | "7 (3 selected)" | "7 (4 selected)" | "7 (5 selected)" | "7 (6 selected)" | "7 (7 selected)" | "8 (1 selected)" | "8 (2 selected)" | "8 (3 selected)" | "8 (4 selected)" | "8 (6 selected)" | "8 (7 selected)" | "8 (8 selected)" | "8 (5 selected)";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TabBarIPad: React.FC<TabBarIPadProps>;
export default TabBarIPad;
