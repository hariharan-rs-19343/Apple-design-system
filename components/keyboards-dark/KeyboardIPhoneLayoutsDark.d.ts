import * as React from 'react';
export interface KeyboardIPhoneLayoutsDarkProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "letters - lowercase" | "letters - uppercase" | "numbers" | "characters";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const KeyboardIPhoneLayoutsDark: React.FC<KeyboardIPhoneLayoutsDarkProps>;
export default KeyboardIPhoneLayoutsDark;
