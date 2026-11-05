import * as React from 'react';
export interface SwipeActionsProps {
  className?: string;
  style?: React.CSSProperties;
  actions?: "1" | "2" | "3";
  type?: "symbol" | "text" | "symbol + text";
  /** Text content; defaults to "􀓔". */
  text1?: string;
  /** Text content; defaults to "Label". */
  text2?: string;
  /** Text content; defaults to "􀓔". */
  text3?: string;
  /** Text content; defaults to "Label". */
  text4?: string;
}
export declare const SwipeActions: React.FC<SwipeActionsProps>;
export default SwipeActions;
