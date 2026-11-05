import * as React from 'react';
export interface SymbolProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled";
  mode?: "light" | "dark" | "dark elevated";
  symbol?: string;
}
export declare const Symbol: React.FC<SymbolProps>;
export default Symbol;
