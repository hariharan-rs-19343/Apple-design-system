import * as React from 'react';
export interface HeaderLightProps {
  className?: string;
  style?: React.CSSProperties;
  width?: "full" | "inset";
  type?: "default" | "plain" | "prominent";
  text?: string;
  showDescription?: boolean;
  description?: string;
  showDisclosure?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderLight: React.FC<HeaderLightProps>;
export default HeaderLight;
