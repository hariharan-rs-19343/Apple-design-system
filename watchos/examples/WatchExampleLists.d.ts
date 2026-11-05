import * as React from 'react';
export interface WatchExampleListsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "grouped list items" | "colorful" | "menu" | "workout";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchExampleLists: React.FC<WatchExampleListsProps>;
export default WatchExampleLists;
