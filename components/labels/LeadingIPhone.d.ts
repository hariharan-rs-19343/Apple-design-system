import * as React from 'react';
export interface LeadingIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbol?: boolean;
  mode?: "light";
  state?: "disabled" | "destructive";
  showSubtitle?: boolean;
  /** Text content; defaults to "􀓔". */
  text1?: string;
  /** Text content; defaults to "Label". */
  text2?: string;
  /** Text content; defaults to "Subtitle". */
  text3?: string;
}
export declare const LeadingIPhone: React.FC<LeadingIPhoneProps>;
export default LeadingIPhone;
