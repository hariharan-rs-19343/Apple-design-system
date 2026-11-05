import * as React from 'react';
export interface LockScreenIPadProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "􀎡". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const LockScreenIPad: React.FC<LockScreenIPadProps>;
export default LockScreenIPad;
