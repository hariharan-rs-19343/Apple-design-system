import * as React from 'react';
export interface AccessoryBarIPadFindProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "typing" | "text entered";
  searchText?: string;
  showReplaceBar?: boolean;
  resultCount?: string;
  /** Text content; defaults to "Done". */
  text1?: string;
}
export declare const AccessoryBarIPadFind: React.FC<AccessoryBarIPadFindProps>;
export default AccessoryBarIPadFind;
