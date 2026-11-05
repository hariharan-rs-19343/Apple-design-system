import * as React from 'react';
export interface IndexBarProps {
  className?: string;
  style?: React.CSSProperties;
  device?: "iPhone" | "iPad";
  /** Text content; defaults to "A". */
  text1?: string;
  /** Text content; defaults to "B". */
  text2?: string;
  /** Text content; defaults to "C". */
  text3?: string;
  /** Text content; defaults to "D". */
  text4?: string;
}
export declare const IndexBar: React.FC<IndexBarProps>;
export default IndexBar;
