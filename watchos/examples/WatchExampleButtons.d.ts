import * as React from 'react';
export interface WatchExampleButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const WatchExampleButtons: React.FC<WatchExampleButtonsProps>;
export default WatchExampleButtons;
