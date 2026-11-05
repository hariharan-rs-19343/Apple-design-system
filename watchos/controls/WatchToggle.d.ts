import * as React from 'react';
export interface WatchToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "on" | "off";
  label?: string;
}
export declare const WatchToggle: React.FC<WatchToggleProps>;
export default WatchToggle;
