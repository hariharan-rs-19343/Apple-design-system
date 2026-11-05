import * as React from 'react';
export interface HomeIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  showHomeIndicator?: boolean;
  device?: "iPad" | "iPhone";
  orientation?: "portrait" | "landscape";
}
export declare const HomeIndicator: React.FC<HomeIndicatorProps>;
export default HomeIndicator;
