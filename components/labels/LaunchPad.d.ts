import * as React from 'react';
export interface LaunchPadProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const LaunchPad: React.FC<LaunchPadProps>;
export default LaunchPad;
