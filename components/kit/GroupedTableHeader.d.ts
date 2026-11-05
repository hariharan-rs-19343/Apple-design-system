import * as React from 'react';
export interface GroupedTableHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "plain" | "prominent";
  text?: string;
  showDescription?: boolean;
  description?: string;
  showDisclosure?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const GroupedTableHeader: React.FC<GroupedTableHeaderProps>;
export default GroupedTableHeader;
