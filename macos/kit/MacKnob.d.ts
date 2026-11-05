import * as React from 'react';
export interface MacKnobProps {
  className?: string;
  style?: React.CSSProperties;
  active?: "true";
  on?: "false";
  state?: "idle" | "clicked" | "disabled";
}
export declare const MacKnob: React.FC<MacKnobProps>;
export default MacKnob;
