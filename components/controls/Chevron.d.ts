import * as React from 'react';
export interface ChevronProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const Chevron: React.FC<ChevronProps>;
export default Chevron;
