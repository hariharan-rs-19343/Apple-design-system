import * as React from 'react';
export interface RowButtonProps {
  className?: string;
  style?: React.CSSProperties;
  value?: "default" | "disabled" | "destructive";
  /** Text content; defaults to "Action". */
  text1?: string;
}
export declare const RowButton: React.FC<RowButtonProps>;
export default RowButton;
