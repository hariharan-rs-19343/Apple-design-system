import * as React from 'react';
export interface MacListItemSecondaryColumnProps {
  className?: string;
  style?: React.CSSProperties;
  bG?: "none" | "selected" | "selected inactive" | "alternating gray";
  lastColumn?: boolean;
  label?: string;
}
export declare const MacListItemSecondaryColumn: React.FC<MacListItemSecondaryColumnProps>;
export default MacListItemSecondaryColumn;
