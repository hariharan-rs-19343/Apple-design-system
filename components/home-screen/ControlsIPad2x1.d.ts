import * as React from 'react';
export interface ControlsIPad2x1Props {
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
export declare const ControlsIPad2x1: React.FC<ControlsIPad2x1Props>;
export default ControlsIPad2x1;
