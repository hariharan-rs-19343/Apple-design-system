import * as React from 'react';
export interface HeaderDark2Props {
  className?: string;
  style?: React.CSSProperties;
  sectionHeading?: string;
  /** Text content; defaults to "Detail". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderDark2: React.FC<HeaderDark2Props>;
export default HeaderDark2;
