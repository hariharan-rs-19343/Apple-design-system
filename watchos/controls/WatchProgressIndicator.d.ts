import * as React from 'react';
export interface WatchProgressIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "small (status bar)" | "medium (table row)" | "large (content area)";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchProgressIndicator: React.FC<WatchProgressIndicatorProps>;
export default WatchProgressIndicator;
