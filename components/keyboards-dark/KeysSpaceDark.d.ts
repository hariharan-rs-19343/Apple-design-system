import * as React from 'react';
export interface KeysSpaceDarkProps {
  className?: string;
  style?: React.CSSProperties;
  config?: "default" | "email" | "url";
  /** Text content; defaults to ".". */
  text1?: string;
  /** Text content; defaults to "space". */
  text2?: string;
  /** Text content; defaults to "space". */
  text3?: string;
}
export declare const KeysSpaceDark: React.FC<KeysSpaceDarkProps>;
export default KeysSpaceDark;
