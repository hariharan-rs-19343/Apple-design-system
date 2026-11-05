import * as React from 'react';
export interface ActionSheetButtonsDarkProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "default" | "destructive" | "disabled";
}
export declare const ActionSheetButtonsDark: React.FC<ActionSheetButtonsDarkProps>;
export default ActionSheetButtonsDark;
