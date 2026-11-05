import * as React from 'react';
export interface ToolbarIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ToolbarIPhone: React.FC<ToolbarIPhoneProps>;
export default ToolbarIPhone;
