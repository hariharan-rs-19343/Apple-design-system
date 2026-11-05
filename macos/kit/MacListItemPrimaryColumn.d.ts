import * as React from 'react';
export interface MacListItemPrimaryColumnProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "file" | "folder";
  bG?: "none" | "selected" | "selected inactive" | "alternating gray";
  level?: "0" | "1" | "2" | "3" | "4";
  expanded?: boolean;
  /** Text content; defaults to "􀆈". */
  text1?: string;
}
export declare const MacListItemPrimaryColumn: React.FC<MacListItemPrimaryColumnProps>;
export default MacListItemPrimaryColumn;
