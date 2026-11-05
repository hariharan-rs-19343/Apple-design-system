import * as React from 'react';
export interface ButtonsTopSheetsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "preferred" | "default";
  symbol?: string;
}
export declare const ButtonsTopSheets: React.FC<ButtonsTopSheetsProps>;
export default ButtonsTopSheets;
