import * as React from 'react';
export interface LockScreenWidget2x2ClockProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "12". */
  text1?: string;
  /** Text content; defaults to "11". */
  text2?: string;
  /** Text content; defaults to "10". */
  text3?: string;
  /** Text content; defaults to "9". */
  text4?: string;
}
export declare const LockScreenWidget2x2Clock: React.FC<LockScreenWidget2x2ClockProps>;
export default LockScreenWidget2x2Clock;
