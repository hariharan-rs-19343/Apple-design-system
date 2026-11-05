import * as React from 'react';
export interface WatchTabsProps {
  className?: string;
  style?: React.CSSProperties;
  pages?: "2" | "3" | "4";
  position?: "1" | "2" | "3" | "4";
}
export declare const WatchTabs: React.FC<WatchTabsProps>;
export default WatchTabs;
