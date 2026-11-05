import * as React from 'react';
export interface PageControlProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  dots?: "2" | "3" | "4" | "5" | "6" | "7" | "8+";
  selection?: "leading" | "trailing" | "n/a ( <7 dots )" | "middle";
  platter?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const PageControl: React.FC<PageControlProps>;
export default PageControl;
