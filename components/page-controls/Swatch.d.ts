import * as React from 'react';
export interface SwatchProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "label" | "color";
  mode?: "light" | "dark";
  color?: string;
}
export declare const Swatch: React.FC<SwatchProps>;
export default Swatch;
