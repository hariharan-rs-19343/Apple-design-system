import * as React from 'react';
export interface ControlsCenteredIPadOnlyProps {
  className?: string;
  style?: React.CSSProperties;
  config?: "symbols - 2" | "symbols - 1" | "symbols - 3" | "symbols - 4" | "symbols - 5" | "symbols - 6" | "text - 1" | "text - 2" | "text - 3";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ControlsCenteredIPadOnly: React.FC<ControlsCenteredIPadOnlyProps>;
export default ControlsCenteredIPadOnly;
