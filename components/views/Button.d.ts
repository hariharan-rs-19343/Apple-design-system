import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀎘". */
  text1?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
