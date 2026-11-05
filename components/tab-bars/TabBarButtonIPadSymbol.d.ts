import * as React from 'react';
export interface TabBarButtonIPadSymbolProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  mode?: "dark" | "light";
  symbol?: string;
}
export declare const TabBarButtonIPadSymbol: React.FC<TabBarButtonIPadSymbolProps>;
export default TabBarButtonIPadSymbol;
