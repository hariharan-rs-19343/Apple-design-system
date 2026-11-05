import * as React from 'react';
export interface SegmentedControlButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "default";
  mode?: "dark" | "light";
  label?: string;
  showSeparator?: boolean;
}
export declare const SegmentedControlButtons: React.FC<SegmentedControlButtonsProps>;
export default SegmentedControlButtons;
