import * as React from 'react';
export interface ArrowsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "disabeld" | "enabled";
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const Arrows: React.FC<ArrowsProps>;
export default Arrows;
