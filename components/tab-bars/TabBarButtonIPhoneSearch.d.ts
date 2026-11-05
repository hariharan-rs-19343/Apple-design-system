import * as React from 'react';
export interface TabBarButtonIPhoneSearchProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  mode?: "light" | "dark";
  symbol?: string;
}
export declare const TabBarButtonIPhoneSearch: React.FC<TabBarButtonIPhoneSearchProps>;
export default TabBarButtonIPhoneSearch;
