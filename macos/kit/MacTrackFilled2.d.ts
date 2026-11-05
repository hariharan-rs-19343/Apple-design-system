import * as React from 'react';
export interface MacTrackFilled2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "clicked" | "disabled";
  active?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacTrackFilled2: React.FC<MacTrackFilled2Props>;
export default MacTrackFilled2;
