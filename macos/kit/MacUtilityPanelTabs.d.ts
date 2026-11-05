import * as React from 'react';
export interface MacUtilityPanelTabsProps {
  className?: string;
  style?: React.CSSProperties;
  symbol6?: string;
  symbol1?: string;
  symbol5?: string;
  symbol2?: string;
  symbol4?: string;
  symbol3?: string;
  tabs?: "2" | "3" | "4" | "5" | "6";
  selected?: "1" | "2" | "3" | "4" | "5" | "6";
}
export declare const MacUtilityPanelTabs: React.FC<MacUtilityPanelTabsProps>;
export default MacUtilityPanelTabs;
