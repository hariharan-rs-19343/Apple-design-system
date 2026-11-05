import * as React from 'react';
export interface HeaderDarkTitleSubtitleProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  /** Text content; defaults to "􀅾". */
  text1?: string;
}
export declare const HeaderDarkTitleSubtitle: React.FC<HeaderDarkTitleSubtitleProps>;
export default HeaderDarkTitleSubtitle;
