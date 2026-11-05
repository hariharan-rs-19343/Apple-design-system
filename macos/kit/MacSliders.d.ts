import * as React from 'react';
export interface MacSlidersProps {
  className?: string;
  style?: React.CSSProperties;
}
export interface MacSliderProps {
  className?: string;
  style?: React.CSSProperties;
  /** 0–100. Default 50. */
  value?: number;
  state?: "idle" | "clicked" | "disabled";
  /** true = 11 tick marks; a number sets the tick count. */
  ticks?: boolean | number;
  /** Fill grows from the centre mark instead of the leading edge. */
  centerBiased?: boolean;
  /** false = window in background: fill turns gray. */
  active?: boolean;
  /** Track width in px. Default 100. */
  width?: number;
}
/** Full kit board: default / ticked / center-biased sliders, every state and value, active and inactive window. */
export declare const MacSliders: React.FC<MacSlidersProps>;
/** macOS 26 slider: 4pt capsule track, 20×16 capsule knob (glass while clicked), tint fill. */
export declare const MacSlider: React.FC<MacSliderProps>;
export default MacSliders;
