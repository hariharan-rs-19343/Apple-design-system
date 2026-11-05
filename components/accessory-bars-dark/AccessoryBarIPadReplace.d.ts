import * as React from 'react';
export interface AccessoryBarIPadReplaceProps {
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
export declare const AccessoryBarIPadReplace: React.FC<AccessoryBarIPadReplaceProps>;
export default AccessoryBarIPadReplace;
