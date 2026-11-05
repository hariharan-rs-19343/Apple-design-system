import * as React from 'react';
export interface MenuItemsSubmenusIPadProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  open?: boolean;
  menuHasSelection?: boolean;
  showSymbol?: boolean;
  showSubtitle?: boolean;
  label?: string;
  subtitle?: string;
  symbol?: string;
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const MenuItemsSubmenusIPad: React.FC<MenuItemsSubmenusIPadProps>;
export default MenuItemsSubmenusIPad;
