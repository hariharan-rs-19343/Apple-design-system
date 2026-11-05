import * as React from 'react';
export interface TextFieldBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
}
export declare const TextFieldBackground: React.FC<TextFieldBackgroundProps>;
export default TextFieldBackground;
