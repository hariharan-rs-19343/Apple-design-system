import * as React from 'react';
export interface ShortcutsProps {
  className?: string;
  style?: React.CSSProperties;
  showControl?: boolean;
  mode?: "light" | "dark" | "dark elevated";
  letter?: string;
  showOption?: boolean;
  showCommand?: boolean;
  showShift?: boolean;
  /** Text content; defaults to "􀆍". */
  text1?: string;
  /** Text content; defaults to "􀆕". */
  text2?: string;
  /** Text content; defaults to "􀆝". */
  text3?: string;
  /** Text content; defaults to "􀆔". */
  text4?: string;
}
export declare const Shortcuts: React.FC<ShortcutsProps>;
export default Shortcuts;
