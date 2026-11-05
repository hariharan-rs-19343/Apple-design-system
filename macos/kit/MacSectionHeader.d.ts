import * as React from 'react';
export interface MacSectionHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  showDetail?: boolean;
  showDisclosure?: boolean;
  sectionTitle?: string;
  detail?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacSectionHeader: React.FC<MacSectionHeaderProps>;
export default MacSectionHeader;
