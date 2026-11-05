import * as React from 'react';
export interface MenuItemsSubmenusIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbol?: boolean;
  showSubtitle?: boolean;
  symbol?: string;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  open?: boolean;
  menuHasSelection?: boolean;
  label?: string;
  subtitle?: string;
  /** Text content; defaults to "􀆈". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MenuItemsSubmenusIPhone: React.FC<MenuItemsSubmenusIPhoneProps>;
export default MenuItemsSubmenusIPhone;
