import * as React from 'react';
export interface SidebarLeadingProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "selected";
  image?: "symbol" | "bitmap" | "collection" | "hidden";
  showEditButton?: boolean;
  showSubtitle?: boolean;
  symbol?: string;
  subtitle?: string;
  title?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SidebarLeading: React.FC<SidebarLeadingProps>;
export default SidebarLeading;
