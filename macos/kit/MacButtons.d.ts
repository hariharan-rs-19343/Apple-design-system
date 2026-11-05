import * as React from 'react';
export interface MacButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "destructive";
  label?: string;
  popUpButtonLabel?: string;
}
export declare const MacButtons: React.FC<MacButtonsProps>;
export default MacButtons;
