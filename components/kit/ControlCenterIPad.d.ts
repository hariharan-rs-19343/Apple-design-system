import * as React from 'react';
export interface ControlCenterIPadProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "􀑚". */
  text1?: string;
  /** Text content; defaults to "􀊌". */
  text2?: string;
  /** Text content; defaults to "􀊄". */
  text3?: string;
  /** Text content; defaults to "􀊊". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ControlCenterIPad: React.FC<ControlCenterIPadProps>;
export default ControlCenterIPad;
