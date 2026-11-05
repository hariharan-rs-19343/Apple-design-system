import * as React from 'react';
export interface ButtonsTop3SymbolsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ButtonsTop3Symbols: React.FC<ButtonsTop3SymbolsProps>;
export default ButtonsTop3Symbols;
