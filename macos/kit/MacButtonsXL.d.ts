import * as React from 'react';
export interface MacButtonsXLProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  state?: "idle" | "selected" | "disabled";
}
export declare const MacButtonsXL: React.FC<MacButtonsXLProps>;
export default MacButtonsXL;
