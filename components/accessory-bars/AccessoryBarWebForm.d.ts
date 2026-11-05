import * as React from 'react';
export interface AccessoryBarWebFormProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  mode?: "light" | "dark";
  /** Text content; defaults to "apple.com". */
  text1?: string;
  /** Text content; defaults to "􀆇". */
  text2?: string;
  /** Text content; defaults to "􀆈". */
  text3?: string;
  /** Text content; defaults to "􀆅". */
  text4?: string;
}
export declare const AccessoryBarWebForm: React.FC<AccessoryBarWebFormProps>;
export default AccessoryBarWebForm;
