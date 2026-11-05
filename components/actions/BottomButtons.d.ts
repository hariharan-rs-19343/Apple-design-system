import * as React from 'react';
export interface BottomButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "emoji and mic" | "abc and mic";
  /** Text content; defaults to "ABC". */
  text1?: string;
  /** Text content; defaults to "􀊰". */
  text2?: string;
}
export declare const BottomButtons: React.FC<BottomButtonsProps>;
export default BottomButtons;
