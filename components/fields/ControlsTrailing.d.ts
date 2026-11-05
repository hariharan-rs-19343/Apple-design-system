import * as React from 'react';
export interface ControlsTrailingProps {
  className?: string;
  style?: React.CSSProperties;
  config?: "symbols - 1" | "symbols - 2" | "symbols - 3" | "symbols - 4 (ipad only)" | "symbols - 5 (ipad only)" | "symbols - 6 (ipad only)" | "text - 1" | "text - 2" | "text - 3";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ControlsTrailing: React.FC<ControlsTrailingProps>;
export default ControlsTrailing;
