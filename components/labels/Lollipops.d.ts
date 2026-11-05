import * as React from 'react';
export interface LollipopsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
}
export declare const Lollipops: React.FC<LollipopsProps>;
export default Lollipops;
