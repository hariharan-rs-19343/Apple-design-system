import * as React from 'react';
export interface HeaderTrailingAccessoriesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "disclosure open" | "action" | "image" | "button";
  /** Text content; defaults to "Detail". */
  text1?: string;
  /** Text content; defaults to "􀆊". */
  text2?: string;
}
export declare const HeaderTrailingAccessories: React.FC<HeaderTrailingAccessoriesProps>;
export default HeaderTrailingAccessories;
