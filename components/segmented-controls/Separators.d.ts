import * as React from 'react';
export interface SeparatorsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
}
export declare const Separators: React.FC<SeparatorsProps>;
export default Separators;
