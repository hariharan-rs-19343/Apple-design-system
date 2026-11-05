import * as React from 'react';
export interface BGProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
}
export declare const BG: React.FC<BGProps>;
export default BG;
