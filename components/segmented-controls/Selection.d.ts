import * as React from 'react';
export interface SelectionProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
}
export declare const Selection: React.FC<SelectionProps>;
export default Selection;
