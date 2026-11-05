import * as React from 'react';
export interface MenuItemsIPadProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbol?: boolean;
  showCheckmark?: boolean;
  label?: string;
  subtitle?: string;
  symbol?: string;
  showShortcut?: boolean;
  showControl?: boolean;
  showOption?: boolean;
  showShift?: boolean;
  showCommand?: boolean;
  letter?: string;
  mode?: "light" | "dark";
  state?: "default" | "destructive" | "disabled";
  menuHasSelection?: boolean;
  /** Text content; defaults to "􀆅". */
  text1?: string;
  /** Text content; defaults to "􀆍". */
  text2?: string;
  /** Text content; defaults to "􀆕". */
  text3?: string;
  /** Text content; defaults to "􀆝". */
  text4?: string;
}
export declare const MenuItemsIPad: React.FC<MenuItemsIPadProps>;
export default MenuItemsIPad;
