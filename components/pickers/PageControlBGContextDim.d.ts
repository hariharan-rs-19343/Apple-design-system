import * as React from 'react';
export interface PageControlBGContextDimProps {
  className?: string;
  style?: React.CSSProperties;
  dots?: "2" | "3" | "4" | "5" | "6" | "7" | "8+";
  selection?: "1" | "7" | "2" | "3" | "4" | "5" | "6" | "8";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PageControlBGContextDim: React.FC<PageControlBGContextDimProps>;
export default PageControlBGContextDim;
