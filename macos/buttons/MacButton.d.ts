import * as React from 'react';
export interface MacButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Visual style — mirrors the iOS button set. */
  variant?: "glass" | "glassTinted" | "prominent" | "secondary" | "borderless" | "destructive" | "destructiveBorderless";
  size?: "small" | "medium" | "large";
  mode?: "light" | "dark";
  label?: string;
  /** Leading SF Symbol / glyph. */
  symbol?: string;
  /** Square symbol-only button. */
  iconOnly?: boolean;
  /** Corner shape. Default "rounded" (12px). "circle" for round icon-only buttons. */
  shape?: "rounded" | "circle";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
/** macOS button: iOS styling with a 12px RoundedRectangle in place of the capsule. */
export declare const MacButton: React.FC<MacButtonProps>;
export default MacButton;
