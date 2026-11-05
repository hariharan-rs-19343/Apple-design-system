import * as React from 'react';
export interface ButtonSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  enabled?: boolean;
  symbol?: string;
}
export declare const ButtonSymbol: React.FC<ButtonSymbolProps>;
export default ButtonSymbol;
