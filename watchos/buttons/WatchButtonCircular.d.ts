import * as React from 'react';
export interface WatchButtonCircularProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "default" | "primary" | "primary floating" | "default floating";
}
export declare const WatchButtonCircular: React.FC<WatchButtonCircularProps>;
export default WatchButtonCircular;
