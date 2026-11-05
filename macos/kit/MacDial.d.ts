import * as React from 'react';
export interface MacDialProps {
  className?: string;
  style?: React.CSSProperties;
  /** Control size of the three specimen dials. Default medium. */
  size?: "mini" | "small" | "medium" | "large" | "xlarge";
}
export declare const MacDial: React.FC<MacDialProps>;
export default MacDial;
