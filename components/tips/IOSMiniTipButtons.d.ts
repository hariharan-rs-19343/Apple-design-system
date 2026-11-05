import * as React from 'react';
export interface IOSMiniTipButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  actionLabel1?: string;
  layout?: "stacked" | "side-by-side";
  mode?: "dark" | "light";
  /** Text content; defaults to "Action". */
  text1?: string;
}
export declare const IOSMiniTipButtons: React.FC<IOSMiniTipButtonsProps>;
export default IOSMiniTipButtons;
