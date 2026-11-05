import * as React from 'react';
export interface KeysIPhoneSpecialDarkProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "space" | "shift" | "shift (locked)" | "delete" | "keyboard#" | "keyboard abc" | "numbers";
  key?: string;
  /** Text content; defaults to "􀆞". */
  text1?: string;
}
export declare const KeysIPhoneSpecialDark: React.FC<KeysIPhoneSpecialDarkProps>;
export default KeysIPhoneSpecialDark;
