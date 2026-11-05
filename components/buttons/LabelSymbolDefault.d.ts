import * as React from 'react';
export interface LabelSymbolDefaultProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  label?: string;
}
export declare const LabelSymbolDefault: React.FC<LabelSymbolDefaultProps>;
export default LabelSymbolDefault;
