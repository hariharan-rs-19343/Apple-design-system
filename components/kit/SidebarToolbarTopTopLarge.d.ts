import * as React from 'react';
export interface SidebarToolbarTopTopLargeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SidebarToolbarTopTopLarge: React.FC<SidebarToolbarTopTopLargeProps>;
export default SidebarToolbarTopTopLarge;
