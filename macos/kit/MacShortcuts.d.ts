import * as React from 'react';
export interface MacShortcutsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "hover" | "disabled";
  showControl?: boolean;
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
export declare const MacShortcuts: React.FC<MacShortcutsProps>;
export default MacShortcuts;
