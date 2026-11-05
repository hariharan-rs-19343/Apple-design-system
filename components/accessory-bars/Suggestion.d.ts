import * as React from 'react';
export interface SuggestionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  email?: string;
  /** Text content; defaults to "password for this website — Passwords". */
  text1?: string;
  /** Text content; defaults to "􀟖". */
  text2?: string;
}
export declare const Suggestion: React.FC<SuggestionProps>;
export default Suggestion;
