import * as React from 'react';
export interface PageControl3Props {
  className?: string;
  style?: React.CSSProperties;
  dots?: "2" | "3" | "4" | "5" | "6" | "7" | "8+";
  selection?: "1" | "7" | "2" | "3" | "4" | "5" | "6" | "8";
}
export declare const PageControl3: React.FC<PageControl3Props>;
export default PageControl3;
