import * as React from 'react';
export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showSubtitle?: boolean;
  showClose?: boolean;
  showMenu?: boolean;
  title?: string;
  subtitle?: string;
  secondaryMenu?: string;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀆊". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
