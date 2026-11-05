import * as React from 'react';
export interface EditButtonsDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "unselected" | "add" | "remove";
  /** Text content; defaults to "􀅽". */
  text1?: string;
}
export declare const EditButtonsDark: React.FC<EditButtonsDarkProps>;
export default EditButtonsDark;
