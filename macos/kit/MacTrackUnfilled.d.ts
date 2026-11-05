import * as React from 'react';
export interface MacTrackUnfilledProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "clicked" | "disabled";
  showTicks?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacTrackUnfilled: React.FC<MacTrackUnfilledProps>;
export default MacTrackUnfilled;
