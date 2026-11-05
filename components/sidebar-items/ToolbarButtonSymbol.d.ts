import * as React from 'react';
export interface ToolbarButtonSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  mode?: "dark" | "light";
}
export declare const ToolbarButtonSymbol: React.FC<ToolbarButtonSymbolProps>;
export default ToolbarButtonSymbol;
