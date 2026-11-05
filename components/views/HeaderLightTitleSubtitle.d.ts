import * as React from 'react';
export interface HeaderLightTitleSubtitleProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subtitle?: string;
  secondaryMenu?: string;
  showMenu?: boolean;
  showSubtitle?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderLightTitleSubtitle: React.FC<HeaderLightTitleSubtitleProps>;
export default HeaderLightTitleSubtitle;
