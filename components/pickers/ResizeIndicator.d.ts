import * as React from 'react';
export interface ResizeIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light" | "dark elevated";
}
export declare const ResizeIndicator: React.FC<ResizeIndicatorProps>;
export default ResizeIndicator;
