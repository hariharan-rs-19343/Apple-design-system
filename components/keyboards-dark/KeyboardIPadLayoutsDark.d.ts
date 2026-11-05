import * as React from 'react';
export interface KeyboardIPadLayoutsDarkProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "letters - lowercase" | "letters - uppercase";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const KeyboardIPadLayoutsDark: React.FC<KeyboardIPadLayoutsDarkProps>;
export default KeyboardIPadLayoutsDark;
