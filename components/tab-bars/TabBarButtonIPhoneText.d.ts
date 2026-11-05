import * as React from 'react';
export interface TabBarButtonIPhoneTextProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  mode?: "light" | "dark";
  symbol?: string;
  label?: string;
}
export declare const TabBarButtonIPhoneText: React.FC<TabBarButtonIPhoneTextProps>;
export default TabBarButtonIPhoneText;
