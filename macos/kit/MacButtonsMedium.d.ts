import * as React from 'react';
export interface MacButtonsMediumProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  state?: "idle" | "selected" | "disabled";
}
export declare const MacButtonsMedium: React.FC<MacButtonsMediumProps>;
export default MacButtonsMedium;
