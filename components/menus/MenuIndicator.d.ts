import * as React from 'react';
export interface MenuIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const MenuIndicator: React.FC<MenuIndicatorProps>;
export default MenuIndicator;
