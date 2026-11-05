import * as React from 'react';
export interface MacSearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  text?: boolean;
  state?: "idle" | "focused" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const MacSearchField: React.FC<MacSearchFieldProps>;
export default MacSearchField;
