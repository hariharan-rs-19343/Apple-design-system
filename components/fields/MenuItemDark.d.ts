import * as React from 'react';
export interface MenuItemDarkProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  showSymbol?: boolean;
  symbol?: string;
  type?: "default" | "destructive";
}
export declare const MenuItemDark: React.FC<MenuItemDarkProps>;
export default MenuItemDark;
