import * as React from 'react';
export interface WatchPickerProps {
  className?: string;
  style?: React.CSSProperties;
  values?: "1" | "2" | "3" | "3 (mixed widths)";
  selected?: "1" | "2" | "3" | "none";
  showLabel?: boolean;
  /** Text content; defaults to ":". */
  text1?: string;
  /** Text content; defaults to ":". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchPicker: React.FC<WatchPickerProps>;
export default WatchPicker;
