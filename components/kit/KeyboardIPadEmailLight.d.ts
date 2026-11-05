import * as React from 'react';
export interface KeyboardIPadEmailLightProps {
  className?: string;
  style?: React.CSSProperties;
  showBar?: boolean;
  showReplace?: boolean;
  email2?: string;
  email1?: string;
  /** Text content; defaults to "for this website". */
  text1?: string;
  /** Text content; defaults to "for this website". */
  text2?: string;
  /** Text content; defaults to "􀟖". */
  text3?: string;
}
export declare const KeyboardIPadEmailLight: React.FC<KeyboardIPadEmailLightProps>;
export default KeyboardIPadEmailLight;
