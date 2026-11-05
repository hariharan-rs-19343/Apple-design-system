import * as React from 'react';
export interface AccessoryBarIPhoneFindDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "typing" | "text entered";
  searchText?: string;
  resultCount?: string;
  /** Text content; defaults to "􀁡". */
  text1?: string;
  /** Text content; defaults to "Done". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const AccessoryBarIPhoneFindDark: React.FC<AccessoryBarIPhoneFindDarkProps>;
export default AccessoryBarIPhoneFindDark;
