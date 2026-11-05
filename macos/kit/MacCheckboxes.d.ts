import * as React from 'react';
export interface MacCheckboxesProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  selection?: "on" | "mixed" | "off";
  state?: "idle" | "clicked" | "disabled";
  activeWindow?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacCheckboxes: React.FC<MacCheckboxesProps>;
export default MacCheckboxes;
