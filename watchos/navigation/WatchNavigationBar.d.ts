import * as React from 'react';
export interface WatchNavigationBarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "status bar" | "status + title" | "status + large title" | "center aligned" | "child - status + title" | "modal - default" | "modal - 1 control" | "modal - text confirm button" | "modal - text buttons";
  time?: string;
  title?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const WatchNavigationBar: React.FC<WatchNavigationBarProps>;
export default WatchNavigationBar;
