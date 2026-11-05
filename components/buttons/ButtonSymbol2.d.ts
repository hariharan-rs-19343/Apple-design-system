import * as React from 'react';
export interface ButtonSymbol2Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "tinted" | "selected" | "disabled";
  symbol?: string;
}
export declare const ButtonSymbol2: React.FC<ButtonSymbol2Props>;
export default ButtonSymbol2;
