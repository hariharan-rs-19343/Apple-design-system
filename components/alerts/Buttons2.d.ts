import * as React from 'react';
export interface Buttons2Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  text?: string;
  type?: "secondary" | "primary" | "destructive";
}
export declare const Buttons2: React.FC<Buttons2Props>;
export default Buttons2;
