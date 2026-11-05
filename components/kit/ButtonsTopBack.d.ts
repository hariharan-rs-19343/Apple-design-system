import * as React from 'react';
export interface ButtonsTopBackProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  label?: string;
  onClick?: () => void;
}
export declare const ButtonsTopBack: React.FC<ButtonsTopBackProps>;
export default ButtonsTopBack;
