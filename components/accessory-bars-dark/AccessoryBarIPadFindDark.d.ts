import * as React from 'react';
export interface AccessoryBarIPadFindDarkProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "typing" | "text entered";
  searchText?: string;
  showReplaceBar?: boolean;
  resultCount?: string;
  /** Text content; defaults to "Done". */
  text1?: string;
}
export declare const AccessoryBarIPadFindDark: React.FC<AccessoryBarIPadFindDarkProps>;
export default AccessoryBarIPadFindDark;
