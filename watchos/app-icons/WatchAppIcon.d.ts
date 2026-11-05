import * as React from 'react';
export interface WatchAppIconProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "system" | "custom";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchAppIcon: React.FC<WatchAppIconProps>;
export default WatchAppIcon;
