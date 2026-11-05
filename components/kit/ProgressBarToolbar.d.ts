import * as React from 'react';
export interface ProgressBarToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  statusText?: string;
  value?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
}
export declare const ProgressBarToolbar: React.FC<ProgressBarToolbarProps>;
export default ProgressBarToolbar;
