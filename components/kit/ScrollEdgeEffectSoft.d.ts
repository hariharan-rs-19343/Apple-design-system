import * as React from 'react';
export interface ScrollEdgeEffectSoftProps {
  className?: string;
  style?: React.CSSProperties;
  edge?: "bottom" | "top" | "leading" | "trailing";
}
export declare const ScrollEdgeEffectSoft: React.FC<ScrollEdgeEffectSoftProps>;
export default ScrollEdgeEffectSoft;
