import * as React from 'react';
export interface MacWindowTitleStandardProps {
  className?: string;
  style?: React.CSSProperties;
  showSubtitle?: boolean;
  symbol?: string;
  title?: string;
  subtitle?: string;
  showSymbol?: boolean;
  /** Text content; defaults to "— Edited". */
  text1?: string;
}
export declare const MacWindowTitleStandard: React.FC<MacWindowTitleStandardProps>;
export default MacWindowTitleStandard;
