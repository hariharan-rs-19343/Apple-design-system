import * as React from 'react';
export interface ButtonDoneProps {
  className?: string;
  style?: React.CSSProperties;
  bGContext?: "bright" | "dim";
  label?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ButtonDone: React.FC<ButtonDoneProps>;
export default ButtonDone;
