import * as React from 'react';
export interface ControlsIPhone2x1Props {
  className?: string;
  style?: React.CSSProperties;
  on?: boolean;
  type?: "toggle" | "menu";
  showDetail?: boolean;
  symbol?: string;
  detail?: string;
  title?: string;
  /** Text content; defaults to "􀆏". */
  text1?: string;
}
export declare const ControlsIPhone2x1: React.FC<ControlsIPhone2x1Props>;
export default ControlsIPhone2x1;
