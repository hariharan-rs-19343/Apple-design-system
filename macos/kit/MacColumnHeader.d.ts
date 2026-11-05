import * as React from 'react';
export interface MacColumnHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  column?: "first" | "middle";
  selected?: boolean;
  sort?: "descending" | "ascending";
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const MacColumnHeader: React.FC<MacColumnHeaderProps>;
export default MacColumnHeader;
