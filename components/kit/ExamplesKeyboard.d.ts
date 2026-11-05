import * as React from 'react';
export interface ExamplesKeyboardProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "emoji" | "find and replace" | "numeric" | "text" | "find";
}
export declare const ExamplesKeyboard: React.FC<ExamplesKeyboardProps>;
export default ExamplesKeyboard;
