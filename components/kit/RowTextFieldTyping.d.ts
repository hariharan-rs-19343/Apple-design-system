import * as React from 'react';
export interface RowTextFieldTypingProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  title?: string;
  /** Text content; defaults to "􀁡". */
  text1?: string;
}
export declare const RowTextFieldTyping: React.FC<RowTextFieldTypingProps>;
export default RowTextFieldTyping;
