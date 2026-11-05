import * as React from 'react';
export interface ButtonSymbol3Props {
  className?: string;
  style?: React.CSSProperties;
  property2?: "disabled" | "default";
  symbol?: string;
  state?: "default" | "disabled" | "_button - symbol - dark";
}
export declare const ButtonSymbol3: React.FC<ButtonSymbol3Props>;
export default ButtonSymbol3;
