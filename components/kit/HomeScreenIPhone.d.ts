import * as React from 'react';
export interface HomeScreenIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  widgets?: "none" | "lg" | "md" | "sm";
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "Search". */
  text2?: string;
}
export declare const HomeScreenIPhone: React.FC<HomeScreenIPhoneProps>;
export default HomeScreenIPhone;
