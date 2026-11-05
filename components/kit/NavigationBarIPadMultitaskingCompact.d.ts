import * as React from 'react';
export interface NavigationBarIPadMultitaskingCompactProps {
  className?: string;
  style?: React.CSSProperties;
  showBackground?: boolean;
  title?: string;
  style2?: "default" | "large";
  showPrompt?: boolean;
  showLeading?: boolean;
  showTrailing?: boolean;
  showSearch?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NavigationBarIPadMultitaskingCompact: React.FC<NavigationBarIPadMultitaskingCompactProps>;
export default NavigationBarIPadMultitaskingCompact;
