import * as React from 'react';
export interface ButtonContentAreaProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "sm" | "md" | "lg";
  destructive?: boolean;
  symbol?: string;
  style2?: "bordered - prominent" | "bordered" | "bordered - secondary" | "borderless";
  enabled?: boolean;
  labelType?: "symbol + text" | "symbol" | "text";
}
export declare const ButtonContentArea: React.FC<ButtonContentAreaProps>;
export default ButtonContentArea;
