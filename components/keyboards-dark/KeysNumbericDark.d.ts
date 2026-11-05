import * as React from 'react';
export interface KeysNumbericDarkProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "1 line" | "2 lines" | "delete";
  line1?: string;
  line2?: string;
}
export declare const KeysNumbericDark: React.FC<KeysNumbericDarkProps>;
export default KeysNumbericDark;
