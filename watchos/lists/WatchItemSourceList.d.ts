import * as React from 'react';
export interface WatchItemSourceListProps {
  className?: string;
  style?: React.CSSProperties;
  scrollState?: "full view" | "partially clipped";
  showSymbol?: boolean;
  symbol?: string;
  label?: string;
  showSubtitle?: boolean;
  largeText?: string;
  subtitle?: string;
}
export declare const WatchItemSourceList: React.FC<WatchItemSourceListProps>;
export default WatchItemSourceList;
