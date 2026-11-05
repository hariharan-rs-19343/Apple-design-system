import * as React from 'react';
export interface LabelTextDefaultProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  label?: string;
}
export declare const LabelTextDefault: React.FC<LabelTextDefaultProps>;
export default LabelTextDefault;
