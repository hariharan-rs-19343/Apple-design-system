import * as React from 'react';
export interface KeyboardProps {
  className?: string;
  style?: React.CSSProperties;
  showSuggestions?: boolean;
  type?: "default" | "numbers and punctuation" | "emoji" | "find" | "find and replace" | "web form" | "web";
  showAccessoryBar?: boolean;
  /** Text content; defaults to "😂". */
  text1?: string;
  /** Text content; defaults to "👊". */
  text2?: string;
  /** Text content; defaults to "😭". */
  text3?: string;
  /** Text content; defaults to "👀". */
  text4?: string;
}
export declare const Keyboard: React.FC<KeyboardProps>;
export default Keyboard;
