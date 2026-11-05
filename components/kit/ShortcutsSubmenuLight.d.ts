import * as React from 'react';
export interface ShortcutsSubmenuLightProps {
  className?: string;
  style?: React.CSSProperties;
  showControl?: boolean;
  letter?: string;
  showOption?: boolean;
  showCommand?: boolean;
  showShift?: boolean;
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const ShortcutsSubmenuLight: React.FC<ShortcutsSubmenuLightProps>;
export default ShortcutsSubmenuLight;
