import * as React from 'react';
export interface WatchButtonPillProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "secondary" | "tertiary" | "destructive" | "default floating" | "primary floating" | "primary" | "destructive floating";
  label?: string;
}
export declare const WatchButtonPill: React.FC<WatchButtonPillProps>;
export default WatchButtonPill;
