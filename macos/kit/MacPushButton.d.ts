import * as React from 'react';
export interface MacPushButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  style2?: "bordered neutral" | "bordered colored" | "bordered secondary" | "bordered destructive" | "default / preferred" | "borderless" | "borderless (bezel shows on)";
  on?: boolean;
  state?: "idle" | "clicked" | "disabled";
  activeWindow?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacPushButton: React.FC<MacPushButtonProps>;
export default MacPushButton;
