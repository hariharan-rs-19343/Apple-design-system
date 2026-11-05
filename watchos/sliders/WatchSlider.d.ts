import * as React from 'react';
export interface WatchSliderProps {
  className?: string;
  style?: React.CSSProperties;
  symbolTrailing?: string;
  type?: "continuous" | "segmented";
  stops?: "3" | "4" | "5" | "6";
  value?: "1" | "3" | "6" | "5" | "4" | "2";
  symbolLeading?: string;
}
export declare const WatchSlider: React.FC<WatchSliderProps>;
export default WatchSlider;
