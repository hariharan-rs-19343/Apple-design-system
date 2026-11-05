import * as React from 'react';
export interface LaunchPadIconProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const LaunchPadIcon: React.FC<LaunchPadIconProps>;
export default LaunchPadIcon;
