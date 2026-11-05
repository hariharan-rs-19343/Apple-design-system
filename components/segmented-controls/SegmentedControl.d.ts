import * as React from 'react';
export interface SegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  label1?: string;
  segments?: "2" | "3" | "4" | "5";
  selected?: "1" | "2" | "3" | "4" | "5";
  label5?: string;
  label2?: string;
  label4?: string;
  label3?: string;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
