import * as React from 'react';
export interface PopoversIPadOnlyProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "down - align leading" | "down - align center" | "down - align trailing" | "leading - align top" | "leading - align middle" | "leading - align bottom" | "trailing - align top" | "trailing - align middle" | "trailing - align bottom" | "up - align leading" | "up - align center" | "up - align trailing";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PopoversIPadOnly: React.FC<PopoversIPadOnlyProps>;
export default PopoversIPadOnly;
