import * as React from 'react';
export interface WindowControlsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "inactive";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WindowControls: React.FC<WindowControlsProps>;
export default WindowControls;
