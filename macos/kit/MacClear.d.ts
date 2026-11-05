import * as React from 'react';
export interface MacClearProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "clicked";
  /** Text content; defaults to "􀁡". */
  text1?: string;
}
export declare const MacClear: React.FC<MacClearProps>;
export default MacClear;
