import * as React from 'react';
export interface MacDialCircularSliderProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "idle" | "clicked" | "disabled";
  /** Control size: mini 16, small 20, medium 24, large 28, xlarge 36 (pt diameter). Default medium. */
  size?: "mini" | "small" | "medium" | "large" | "xlarge";
  /** Indicator rotation in degrees, 0 = 12 o'clock. */
  angle?: number;
}
export declare const MacDialCircularSlider: React.FC<MacDialCircularSliderProps>;
export default MacDialCircularSlider;
