import * as React from 'react';
export interface HeaderDarkProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  sectionHeading?: string;
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const HeaderDark: React.FC<HeaderDarkProps>;
export default HeaderDark;
