import * as React from 'react';
export interface AccessoryBarIPhoneReplaceDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "empty" | "focused" | "typing";
  replaceText?: string;
  /** Text content; defaults to "􀈊". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
  /** Text content; defaults to "Replace". */
  text3?: string;
}
export declare const AccessoryBarIPhoneReplaceDark: React.FC<AccessoryBarIPhoneReplaceDarkProps>;
export default AccessoryBarIPhoneReplaceDark;
