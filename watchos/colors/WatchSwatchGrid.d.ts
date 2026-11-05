import * as React from 'react';
export interface WatchSwatchGridProps {
  className?: string;
  style?: React.CSSProperties;
  group?: string;
  /** Text content; defaults to "Dark". */
  text1?: string;
  /** Text content; defaults to "Light". */
  text2?: string;
  /** Text content; defaults to "Quaternary". */
  text3?: string;
  /** Text content; defaults to "Tertiary". */
  text4?: string;
}
export declare const WatchSwatchGrid: React.FC<WatchSwatchGridProps>;
export default WatchSwatchGrid;
