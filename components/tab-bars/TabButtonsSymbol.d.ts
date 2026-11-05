import * as React from 'react';
export interface TabButtonsSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "dark elevated" | "light";
  state?: "selected" | "unselected";
  symbol?: string;
}
export declare const TabButtonsSymbol: React.FC<TabButtonsSymbolProps>;
export default TabButtonsSymbol;
