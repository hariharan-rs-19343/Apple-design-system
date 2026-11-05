import * as React from 'react';
export interface SectionHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  showDisclosure?: boolean;
  mode?: "light" | "dark";
  showDetail?: boolean;
  /** Text content; defaults to "Section Heading". */
  text1?: string;
  /** Text content; defaults to "Detail". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SectionHeader: React.FC<SectionHeaderProps>;
export default SectionHeader;
