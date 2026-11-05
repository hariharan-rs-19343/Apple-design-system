import * as React from 'react';
export interface MacTextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  text?: boolean;
  state?: "idle" | "focused" | "disabled";
}
export declare const MacTextField: React.FC<MacTextFieldProps>;
export default MacTextField;
