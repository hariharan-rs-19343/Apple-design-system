import * as React from 'react';
export interface IOSMiniTipProps {
  className?: string;
  style?: React.CSSProperties;
  showCloseButton?: boolean;
  symbol?: string;
  style2?: "popover" | "annotation" | "hint";
  title?: string;
  content?: "symbol" | "text only" | "image";
  description?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IOSMiniTip: React.FC<IOSMiniTipProps>;
export default IOSMiniTip;
