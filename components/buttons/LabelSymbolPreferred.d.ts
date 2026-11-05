import * as React from 'react';
export interface LabelSymbolPreferredProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  label?: string;
}
export declare const LabelSymbolPreferred: React.FC<LabelSymbolPreferredProps>;
export default LabelSymbolPreferred;
