import * as React from 'react';
export interface WatchBezelsProps {
  className?: string;
  style?: React.CSSProperties;
  bezelSize?: "44mm" | "46mm" | "40mm" | "42mm" | "49mm";
}
export declare const WatchBezels: React.FC<WatchBezelsProps>;
export default WatchBezels;
