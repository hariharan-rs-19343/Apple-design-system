import * as React from 'react';
export interface AccessoryBarIPadReplaceDarkProps {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  state?: "empty" | "focused" | "typing";
  replaceText?: string;
  /** Text content; defaults to "􀈊". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
  /** Text content; defaults to "Replace". */
  text3?: string;
}
export declare const AccessoryBarIPadReplaceDark: React.FC<AccessoryBarIPadReplaceDarkProps>;
export default AccessoryBarIPadReplaceDark;
