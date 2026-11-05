import * as React from 'react';
export interface MacTrackUnfilledCenterBiasedProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "clicked" | "disabled";
  showTicks?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacTrackUnfilledCenterBiased: React.FC<MacTrackUnfilledCenterBiasedProps>;
export default MacTrackUnfilledCenterBiased;
