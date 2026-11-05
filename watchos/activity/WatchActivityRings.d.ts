import * as React from 'react';
export interface WatchActivityRingsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Rendered diameter in px; the design is 66. */
  size?: number;
  /** Move ring progress 0–1 (red). Default 0.75. */
  move?: number;
  /** Exercise ring progress 0–1 (green). Default 0.6. */
  exercise?: number;
  /** Stand ring progress 0–1 (cyan). Default 0.85. */
  stand?: number;
}
export declare const WatchActivityRings: React.FC<WatchActivityRingsProps>;
export default WatchActivityRings;
