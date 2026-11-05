import * as React from 'react';
export interface MacWindowTitleUtilityProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbol?: boolean;
  /** Text content; defaults to "􀈕". */
  text1?: string;
  /** Text content; defaults to "Title". */
  text2?: string;
}
export declare const MacWindowTitleUtility: React.FC<MacWindowTitleUtilityProps>;
export default MacWindowTitleUtility;
