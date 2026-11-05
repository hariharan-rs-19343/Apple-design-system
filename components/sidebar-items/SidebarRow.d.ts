import * as React from 'react';
export interface SidebarRowProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "selected" | "disabled" | "disclosable";
  indentLevel?: "0" | "1" | "2";
  showTrailing?: boolean;
  showImage?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SidebarRow: React.FC<SidebarRowProps>;
export default SidebarRow;
