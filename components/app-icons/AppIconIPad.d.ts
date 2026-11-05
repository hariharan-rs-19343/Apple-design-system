import * as React from 'react';
export interface AppIconIPadProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "system" | "custom";
  showAppName?: boolean;
  showBadge?: boolean;
  appName?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const AppIconIPad: React.FC<AppIconIPadProps>;
export default AppIconIPad;
