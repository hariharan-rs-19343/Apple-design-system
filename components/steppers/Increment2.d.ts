import * as React from 'react';
export interface Increment2Props {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "pressed" | "disabled";
  /** Text content; defaults to "􀅼". */
  text1?: string;
}
export declare const Increment2: React.FC<Increment2Props>;
export default Increment2;
