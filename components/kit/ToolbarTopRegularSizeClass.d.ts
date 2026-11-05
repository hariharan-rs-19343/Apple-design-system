import * as React from 'react';
export interface ToolbarTopRegularSizeClassProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "large title" | "document" | "document browser";
  showLeading?: boolean;
  showCenter?: boolean;
  showTrailing?: boolean;
  showSearch?: boolean;
  title?: string;
  showBackground?: boolean;
  showSidebarControl?: boolean;
  showTitle?: boolean;
  /** Text content; defaults to "Document Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ToolbarTopRegularSizeClass: React.FC<ToolbarTopRegularSizeClassProps>;
export default ToolbarTopRegularSizeClass;
