import * as React from 'react';
export interface SidebarControlProps {
  className?: string;
  style?: React.CSSProperties;
  toggle?: "tab bar" | "sidebar";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SidebarControl: React.FC<SidebarControlProps>;
export default SidebarControl;
