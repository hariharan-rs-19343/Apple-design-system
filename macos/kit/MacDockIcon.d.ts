import * as React from 'react';
export interface MacDockIconProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const MacDockIcon: React.FC<MacDockIconProps>;
export default MacDockIcon;
