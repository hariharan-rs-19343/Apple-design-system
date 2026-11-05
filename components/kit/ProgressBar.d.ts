import * as React from 'react';
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  value?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
