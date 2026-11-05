import * as React from 'react';
export interface WatchSwatchProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  type?: "label" | "color";
  mode?: "light" | "dark";
}
export declare const WatchSwatch: React.FC<WatchSwatchProps>;
export default WatchSwatch;
