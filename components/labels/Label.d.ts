import * as React from 'react';
export interface LabelProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "destructive" | "disabled";
  mode?: "light" | "dark" | "dark elevated";
}
export declare const Label: React.FC<LabelProps>;
export default Label;
