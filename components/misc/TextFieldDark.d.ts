import * as React from 'react';
export interface TextFieldDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "focused" | "text entered";
  showCursor?: boolean;
  text?: string;
}
export declare const TextFieldDark: React.FC<TextFieldDarkProps>;
export default TextFieldDark;
