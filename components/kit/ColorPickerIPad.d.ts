import * as React from 'react';
export interface ColorPickerIPadProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Opacity". */
  text1?: string;
  /** Text content; defaults to "100%". */
  text2?: string;
}
export declare const ColorPickerIPad: React.FC<ColorPickerIPadProps>;
export default ColorPickerIPad;
