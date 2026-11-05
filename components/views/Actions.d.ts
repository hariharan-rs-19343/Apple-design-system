import * as React from 'react';
export interface ActionsProps {
  className?: string;
  style?: React.CSSProperties;
  action?: string;
  mode?: "dark" | "light";
  symbol?: string;
}
export declare const Actions: React.FC<ActionsProps>;
export default Actions;
