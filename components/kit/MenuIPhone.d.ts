import * as React from 'react';
export interface MenuIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const MenuIPhone: React.FC<MenuIPhoneProps>;
export default MenuIPhone;
