import * as React from 'react';
export interface AccessoryBarIPhoneFindAndReplaceProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  /** Text content; defaults to "Done". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const AccessoryBarIPhoneFindAndReplace: React.FC<AccessoryBarIPhoneFindAndReplaceProps>;
export default AccessoryBarIPhoneFindAndReplace;
