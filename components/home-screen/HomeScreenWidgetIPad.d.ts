import * as React from 'react';
export interface HomeScreenWidgetIPadProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "extra large" | "lg" | "md" | "sm";
  showPadding?: boolean;
}
export declare const HomeScreenWidgetIPad: React.FC<HomeScreenWidgetIPadProps>;
export default HomeScreenWidgetIPad;
