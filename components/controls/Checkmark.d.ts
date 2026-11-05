import * as React from 'react';
export interface CheckmarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled";
  mode?: "light";
  showCheckmark?: boolean;
  /** Text content; defaults to "􀆅". */
  text1?: string;
}
export declare const Checkmark: React.FC<CheckmarkProps>;
export default Checkmark;
