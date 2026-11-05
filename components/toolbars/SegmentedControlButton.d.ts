import * as React from 'react';
export interface SegmentedControlButtonProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  selected?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
}
export declare const SegmentedControlButton: React.FC<SegmentedControlButtonProps>;
export default SegmentedControlButton;
