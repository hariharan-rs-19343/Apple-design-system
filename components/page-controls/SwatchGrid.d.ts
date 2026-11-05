import * as React from 'react';
export interface SwatchGridProps {
  className?: string;
  style?: React.CSSProperties;
  group?: string;
  /** Text content; defaults to "Dark - Elevated". */
  text1?: string;
  /** Text content; defaults to "Dark - Base". */
  text2?: string;
  /** Text content; defaults to "Light". */
  text3?: string;
  /** Text content; defaults to "Quaternary". */
  text4?: string;
}
export declare const SwatchGrid: React.FC<SwatchGridProps>;
export default SwatchGrid;
