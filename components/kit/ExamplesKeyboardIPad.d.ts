import * as React from 'react';
export interface ExamplesKeyboardIPadProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "email" | "emoji" | "find and replace" | "text (enter emphasized)" | "text" | "text (shift)";
}
export declare const ExamplesKeyboardIPad: React.FC<ExamplesKeyboardIPadProps>;
export default ExamplesKeyboardIPad;
