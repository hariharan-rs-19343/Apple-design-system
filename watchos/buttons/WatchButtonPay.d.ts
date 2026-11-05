import * as React from 'react';
export interface WatchButtonPayProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "sm" | "full width";
}
export declare const WatchButtonPay: React.FC<WatchButtonPayProps>;
export default WatchButtonPay;
