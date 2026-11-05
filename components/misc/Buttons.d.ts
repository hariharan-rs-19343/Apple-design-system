import * as React from 'react';
export interface ButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "destructive" | "disabled";
  label?: string;
}
export declare const Buttons: React.FC<ButtonsProps>;
export default Buttons;
