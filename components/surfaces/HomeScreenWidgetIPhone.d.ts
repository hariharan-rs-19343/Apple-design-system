import * as React from 'react';
export interface HomeScreenWidgetIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "md" | "sm";
  showPadding?: boolean;
  widgetName?: string;
}
export declare const HomeScreenWidgetIPhone: React.FC<HomeScreenWidgetIPhoneProps>;
export default HomeScreenWidgetIPhone;
