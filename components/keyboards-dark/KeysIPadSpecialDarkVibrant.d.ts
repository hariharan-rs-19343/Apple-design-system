import * as React from 'react';
export interface KeysIPadSpecialDarkVibrantProps {
  className?: string;
  style?: React.CSSProperties;
  align?: "left" | "right";
  type?: "emoji" | "dictation" | "keyboard close" | "text" | "text (selected)";
  label?: string;
  /** Text content; defaults to "􀓖". */
  text1?: string;
}
export declare const KeysIPadSpecialDarkVibrant: React.FC<KeysIPadSpecialDarkVibrantProps>;
export default KeysIPadSpecialDarkVibrant;
