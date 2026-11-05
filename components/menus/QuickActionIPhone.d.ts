import * as React from 'react';
export interface QuickActionIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  mode?: "light" | "dark";
  destructive?: boolean;
  showSelection?: boolean;
  label?: string;
}
export declare const QuickActionIPhone: React.FC<QuickActionIPhoneProps>;
export default QuickActionIPhone;
