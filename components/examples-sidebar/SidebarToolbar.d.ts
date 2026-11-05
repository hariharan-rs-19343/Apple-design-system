import * as React from 'react';
export interface SidebarToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  showSidebarButton?: boolean;
  showButton2?: boolean;
  showEdit?: boolean;
  showButton1?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const SidebarToolbar: React.FC<SidebarToolbarProps>;
export default SidebarToolbar;
