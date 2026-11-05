import * as React from 'react';
export interface CloseButtonProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  /** Text content; defaults to "􀅾". */
  text1?: string;
}
export declare const CloseButton: React.FC<CloseButtonProps>;
export default CloseButton;
