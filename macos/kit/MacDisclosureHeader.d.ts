import * as React from 'react';
export interface MacDisclosureHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  expanded?: boolean;
  /** Text content; defaults to "􀆊". */
  text1?: string;
}
export declare const MacDisclosureHeader: React.FC<MacDisclosureHeaderProps>;
export default MacDisclosureHeader;
