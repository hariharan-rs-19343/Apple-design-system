import * as React from 'react';
export interface TabButtonsSidebarProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "dark elevated" | "light";
  state?: "selected";
  symbol?: string;
}
export declare const TabButtonsSidebar: React.FC<TabButtonsSidebarProps>;
export default TabButtonsSidebar;
