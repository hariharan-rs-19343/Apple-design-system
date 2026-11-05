import * as React from 'react';
export interface WatchWheelsProps {
  className?: string;
  style?: React.CSSProperties;
  before?: string;
  state?: "default" | "focused";
  current?: string;
  next?: string;
}
export declare const WatchWheels: React.FC<WatchWheelsProps>;
export default WatchWheels;
