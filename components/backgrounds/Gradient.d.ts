import * as React from 'react';
export interface GradientProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  position?: "top" | "bottom";
}
export declare const Gradient: React.FC<GradientProps>;
export default Gradient;
