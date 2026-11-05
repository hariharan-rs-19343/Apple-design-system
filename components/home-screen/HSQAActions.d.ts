import * as React from 'react';
export interface HSQAActionsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "destructive" | "default";
  symbol?: string;
  label?: string;
}
export declare const HSQAActions: React.FC<HSQAActionsProps>;
export default HSQAActions;
