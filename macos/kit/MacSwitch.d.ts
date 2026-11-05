import * as React from 'react';
export interface MacSwitchProps {
  className?: string;
  style?: React.CSSProperties;
  /** "disabeld" is the kit's spelling; "disabled" also works. */
  state?: "idle" | "clicked" | "disabled" | "disabeld";
  selection?: "off" | "on" | "mixed";
  /** false = window in background: the on-track turns neutral gray. */
  activeWindow?: boolean;
  /** Accessibility on/off glyph (O, I, –). */
  showAXLabel?: boolean;
  /** Kit control size: mini 36×16, small 44×20, medium 54×24 (default), large 64×28, xl 80×36. */
  size?: "mini" | "small" | "medium" | "large" | "xl";
}
/** macOS 26 switch: capsule track, knob = 1.6× its height, glass knob while clicked, tinted only in the active window. */
export declare const MacSwitch: React.FC<MacSwitchProps>;
export default MacSwitch;
