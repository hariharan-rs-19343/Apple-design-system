import * as React from 'react';
export interface ButtonLiquidGlassProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbol?: boolean;
  label?: string;
  symbol?: string;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const ButtonLiquidGlass: React.FC<ButtonLiquidGlassProps>;
export default ButtonLiquidGlass;
