import * as React from 'react';
export interface ButtonsTop1SymbolProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Symbol content (36×36 slot); defaults to the kit's dashed placeholder */
  icon?: React.ReactNode;
  onClick?: () => void;
}
export declare const ButtonsTop1Symbol: React.FC<ButtonsTop1SymbolProps>;
export default ButtonsTop1Symbol;
