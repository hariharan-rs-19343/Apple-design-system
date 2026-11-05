import * as React from 'react';
export interface TextField2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "placeholder" | "focused" | "typing" | "value entered";
  value?: string;
  /** Text content; defaults to "􀁡". */
  text1?: string;
}
export declare const TextField2: React.FC<TextField2Props>;
export default TextField2;
