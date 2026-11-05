import * as React from 'react';
export interface TabBarButtonIPadTextProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  mode?: "dark" | "light";
  label?: string;
}
export declare const TabBarButtonIPadText: React.FC<TabBarButtonIPadTextProps>;
export default TabBarButtonIPadText;
