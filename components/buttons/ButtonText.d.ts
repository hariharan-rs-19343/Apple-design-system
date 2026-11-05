import * as React from 'react';
export interface ButtonTextProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  emphasized?: boolean;
  enabled?: boolean;
}
export declare const ButtonText: React.FC<ButtonTextProps>;
export default ButtonText;
