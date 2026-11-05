import * as React from 'react';
export interface TabButtonsTextProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "dark elevated";
  state?: "unselected" | "selected";
  label?: string;
}
export declare const TabButtonsText: React.FC<TabButtonsTextProps>;
export default TabButtonsText;
