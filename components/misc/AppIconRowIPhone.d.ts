import * as React from 'react';
export interface AppIconRowIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  icon1?: React.ReactNode;
  appName1?: string;
  icons?: "1" | "2" | "3" | "4";
  showBadge1?: boolean;
  icon4?: React.ReactNode;
  icon2?: React.ReactNode;
  appName4?: string;
  appName2?: string;
  showBadge4?: boolean;
  showBadge2?: boolean;
  icon3?: React.ReactNode;
  appName3?: string;
  showBadge3?: boolean;
  /** Text content; defaults to "2". */
  text1?: string;
  /** Text content; defaults to "2". */
  text2?: string;
  /** Text content; defaults to "2". */
  text3?: string;
  /** Text content; defaults to "2". */
  text4?: string;
}
export declare const AppIconRowIPhone: React.FC<AppIconRowIPhoneProps>;
export default AppIconRowIPhone;
