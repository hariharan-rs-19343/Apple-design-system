import * as React from 'react';
export interface ModeLabelProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Text content; defaults to "Light". */
  text1?: string;
}
export declare const ModeLabel: React.FC<ModeLabelProps>;
export default ModeLabel;
