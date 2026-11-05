import * as React from 'react';
export interface SubmenuIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const SubmenuIndicator: React.FC<SubmenuIndicatorProps>;
export default SubmenuIndicator;
