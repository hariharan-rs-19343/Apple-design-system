import * as React from 'react';
export interface WatchSpinnerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Step the dots like the system activity indicator. Default true. */
  animate?: boolean;
}
export declare const WatchSpinner: React.FC<WatchSpinnerProps>;
export default WatchSpinner;
