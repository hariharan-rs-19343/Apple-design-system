import * as React from 'react';
export interface KeysIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  character?: string;
  mode?: "light" | "dark";
  letter?: string;
  punctuation?: string;
  type?: "uppercase" | "lowercase" | "punctuation" | "special charaters (not capitalized)" | "symbol" | "return" | "return-prominent" | "123" | "#+" | "abc" | "123 small" | "space" | "shift" | "delete";
  symbol?: string;
  /** Text content; defaults to "123". */
  text1?: string;
}
export declare const KeysIPhone: React.FC<KeysIPhoneProps>;
export default KeysIPhone;
