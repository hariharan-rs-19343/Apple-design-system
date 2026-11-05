import * as React from 'react';
export interface KeysIPadLowercaseProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "2 storey lower" | "2 storey punctuation" | "1 story punctuation" | "2 storey upper";
  alt?: string;
  punctuation?: string;
  key?: string;
  punctuationBottom?: string;
  punctuationTop?: string;
}
export declare const KeysIPadLowercase: React.FC<KeysIPadLowercaseProps>;
export default KeysIPadLowercase;
