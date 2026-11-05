import * as React from 'react';
export interface MacTrackFilledProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "disabled" | "clicked" | "idle";
  active?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacTrackFilled: React.FC<MacTrackFilledProps>;
export default MacTrackFilled;
