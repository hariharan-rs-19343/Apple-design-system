import * as React from 'react';
export interface EmptyStatesProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "title and subtitle" | "symbol in circle" | "large symbol";
  description?: string;
  message?: string;
  /** SF Symbol glyph or any character; private-use glyphs fall back to a built-in icon */
  symbol?: string;
  actionLabel?: string;
  onAction?: () => void;
}
export declare const EmptyStates: React.FC<EmptyStatesProps>;
export default EmptyStates;
