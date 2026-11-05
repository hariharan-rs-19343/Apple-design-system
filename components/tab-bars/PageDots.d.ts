import * as React from 'react';
export interface PageDotsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  selected?: boolean;
}
export declare const PageDots: React.FC<PageDotsProps>;
export default PageDots;
