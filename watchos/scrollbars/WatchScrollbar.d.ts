import * as React from 'react';
export interface WatchScrollbarProps {
  className?: string;
  style?: React.CSSProperties;
  scrollViewHeight?: "200%" | "300%" | "400%";
  position?: "1" | "2" | "3" | "4";
}
export declare const WatchScrollbar: React.FC<WatchScrollbarProps>;
export default WatchScrollbar;
