import * as React from 'react';
export interface WatchExampleProgressIndicatorsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "inline table row" | "content area";
  /** Text content; defaults to "Loading message". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchExampleProgressIndicators: React.FC<WatchExampleProgressIndicatorsProps>;
export default WatchExampleProgressIndicators;
