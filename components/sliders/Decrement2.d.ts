import * as React from 'react';
export interface Decrement2Props {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "pressed" | "disabled";
  /** Text content; defaults to "􀅽". */
  text1?: string;
}
export declare const Decrement2: React.FC<Decrement2Props>;
export default Decrement2;
