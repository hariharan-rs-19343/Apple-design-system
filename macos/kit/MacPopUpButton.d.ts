import * as React from 'react';
export interface MacPopUpButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "idle" | "clicked" | "disabled";
  /** Size mode. Omit to inherit from a parent MacMode (root default: mini). */
  size?: "mini" | "small" | "medium" | "large" | "xl";
  /** Width in px or CSS length. Default 100. */
  width?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  /** Chevron glyph; defaults to "􀆏". */
  text1?: string;
}
export declare const MacPopUpButton: React.FC<MacPopUpButtonProps>;
export default MacPopUpButton;
