import * as React from 'react';
export interface ButtonText2Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "tinted" | "selected" | "disabled";
  label?: string;
}
export declare const ButtonText2: React.FC<ButtonText2Props>;
export default ButtonText2;
