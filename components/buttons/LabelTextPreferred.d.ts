import * as React from 'react';
export interface LabelTextPreferredProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "disabled";
  label?: string;
}
export declare const LabelTextPreferred: React.FC<LabelTextPreferredProps>;
export default LabelTextPreferred;
