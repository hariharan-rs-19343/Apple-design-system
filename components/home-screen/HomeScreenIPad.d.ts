import * as React from 'react';
export interface HomeScreenIPadProps {
  className?: string;
  style?: React.CSSProperties;
  widgets?: "none" | "sm" | "md" | "lg" | "extra large";
  showStatusBar?: boolean;
}
export declare const HomeScreenIPad: React.FC<HomeScreenIPadProps>;
export default HomeScreenIPad;
