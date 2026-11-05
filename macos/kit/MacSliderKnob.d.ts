import * as React from 'react';
export interface MacSliderKnobProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "default" | "ticked";
  state?: "idle" | "clicked" | "disabled";
}
export declare const MacSliderKnob: React.FC<MacSliderKnobProps>;
export default MacSliderKnob;
