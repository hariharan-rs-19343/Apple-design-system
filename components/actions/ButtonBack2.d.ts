import * as React from 'react';
export interface ButtonBack2Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  showLabel?: boolean;
  label?: string;
  /** Text content; defaults to "􀯶". */
  text1?: string;
}
export declare const ButtonBack2: React.FC<ButtonBack2Props>;
export default ButtonBack2;
