import * as React from 'react';
export interface ControlsLockScreenProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ControlsLockScreen: React.FC<ControlsLockScreenProps>;
export default ControlsLockScreen;
