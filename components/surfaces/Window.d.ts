import * as React from 'react';
export interface WindowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Window: React.FC<WindowProps>;
export default Window;
