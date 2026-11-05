import * as React from 'react';
export interface PopupButtonProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "enabled" | "disabled";
  label?: string;
  /** Text content; defaults to "􀆏". */
  text1?: string;
}
export declare const PopupButton: React.FC<PopupButtonProps>;
export default PopupButton;
