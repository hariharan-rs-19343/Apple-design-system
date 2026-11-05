import * as React from 'react';
export interface PickerProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "middle" | "last";
  aMPM?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
}
export declare const Picker: React.FC<PickerProps>;
export default Picker;
