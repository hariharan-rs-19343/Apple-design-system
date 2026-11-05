import * as React from 'react';
export interface PageControl5Props {
  className?: string;
  style?: React.CSSProperties;
  dots?: "2" | "3" | "4" | "5" | "6" | "7" | "8+";
  selection?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const PageControl5: React.FC<PageControl5Props>;
export default PageControl5;
