import * as React from 'react';
export interface QuickActionIPadProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  destructive?: boolean;
  symbol?: string;
  showSelection?: boolean;
  label?: string;
}
export declare const QuickActionIPad: React.FC<QuickActionIPadProps>;
export default QuickActionIPad;
