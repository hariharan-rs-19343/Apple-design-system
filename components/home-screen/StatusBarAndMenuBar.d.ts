import * as React from 'react';
export interface StatusBarAndMenuBarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "status bar only" | "status and menu bar - windowed" | "status and menu bar - fullscreen";
  time?: string;
  date?: string;
  /** Text content; defaults to "100%". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const StatusBarAndMenuBar: React.FC<StatusBarAndMenuBarProps>;
export default StatusBarAndMenuBar;
