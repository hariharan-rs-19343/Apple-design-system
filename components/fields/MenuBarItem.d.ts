import * as React from 'react';
export interface MenuBarItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "deselected" | "selected";
  menuName?: string;
}
export declare const MenuBarItem: React.FC<MenuBarItemProps>;
export default MenuBarItem;
