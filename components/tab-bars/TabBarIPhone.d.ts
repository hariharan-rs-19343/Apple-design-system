import * as React from 'react';
export interface TabBarIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  separateSearch?: boolean;
  minimized?: boolean;
  tabs?: "2" | "3" | "4" | "5";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const TabBarIPhone: React.FC<TabBarIPhoneProps>;
export default TabBarIPhone;
