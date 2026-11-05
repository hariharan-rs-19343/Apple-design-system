import * as React from 'react';
export interface WatchExamplePickersProps {
  className?: string;
  style?: React.CSSProperties;
  wheels?: "1" | "2" | "3" | "3 (mixed widths)";
}
export declare const WatchExamplePickers: React.FC<WatchExamplePickersProps>;
export default WatchExamplePickers;
