import * as React from 'react';
export interface WatchBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "over dark background" | "solid color" | "gradient";
}
export declare const WatchBackground: React.FC<WatchBackgroundProps>;
export default WatchBackground;
