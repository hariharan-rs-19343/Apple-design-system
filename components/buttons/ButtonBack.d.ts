import * as React from 'react';
export interface ButtonBackProps {
  className?: string;
  style?: React.CSSProperties;
  enabled?: boolean;
  label?: string;
  /** Text content; defaults to "􀆉". */
  text1?: string;
}
export declare const ButtonBack: React.FC<ButtonBackProps>;
export default ButtonBack;
