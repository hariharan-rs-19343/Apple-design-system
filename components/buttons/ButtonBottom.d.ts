import * as React from 'react';
export interface ButtonBottomProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "1 symbol - prominent" | "1 symbol" | "2 symbols" | "3 symbols" | "4 symbols" | "5 symbols" | "6 symbols" | "text" | "text - primary";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const ButtonBottom: React.FC<ButtonBottomProps>;
export default ButtonBottom;
