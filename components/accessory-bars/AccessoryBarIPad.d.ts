import * as React from 'react';
export interface AccessoryBarIPadProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  showButton2?: boolean;
  showButton3?: boolean;
}
export declare const AccessoryBarIPad: React.FC<AccessoryBarIPadProps>;
export default AccessoryBarIPad;
