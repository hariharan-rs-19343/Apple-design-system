import * as React from 'react';
export interface LeadingFalseSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  showSubtitle?: boolean;
  symbol?: string;
  title?: string;
  subtitle?: string;
  /** Text content; defaults to "Title". */
  text1?: string;
}
export declare const LeadingFalseSymbol: React.FC<LeadingFalseSymbolProps>;
export default LeadingFalseSymbol;
