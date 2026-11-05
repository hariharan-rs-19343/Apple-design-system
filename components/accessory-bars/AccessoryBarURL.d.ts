import * as React from 'react';
export interface AccessoryBarURLProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  mode?: "light" | "dark";
  /** Text content; defaults to "􀁡". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AccessoryBarURL: React.FC<AccessoryBarURLProps>;
export default AccessoryBarURL;
