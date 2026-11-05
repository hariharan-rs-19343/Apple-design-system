import * as React from 'react';
export interface ActionProps {
  className?: string;
  style?: React.CSSProperties;
  action?: string;
  mode?: "light" | "dark";
  symbol?: string;
}
export declare const Action: React.FC<ActionProps>;
export default Action;
