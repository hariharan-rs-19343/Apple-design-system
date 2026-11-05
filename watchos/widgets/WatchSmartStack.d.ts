import * as React from 'react';
export interface WatchSmartStackProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "40mm" | "42mm" | "44mm" | "46mm" | "49mm";
  /** Text content; defaults to "􀋲". */
  text1?: string;
  /** Text content; defaults to "All Apps". */
  text2?: string;
  /** Text content; defaults to "JUN 16". */
  text3?: string;
  /** Text content; defaults to "9:41". */
  text4?: string;
}
export declare const WatchSmartStack: React.FC<WatchSmartStackProps>;
export default WatchSmartStack;
