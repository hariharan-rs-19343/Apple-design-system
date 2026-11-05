import * as React from 'react';
export interface SlidersProps {
  className?: string;
  style?: React.CSSProperties;
  showSymbols?: boolean;
  showTicks?: boolean;
  symbolMin?: string;
  symbolMax?: string;
  value?: "0%" | "25%" | "50%" | "75%" | "100%";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Sliders: React.FC<SlidersProps>;
export default Sliders;
