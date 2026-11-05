import * as React from 'react';
export interface MacMenuBarAppleLogoLightProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: "on" | "off";
  mode?: "light";
  /** Text content; defaults to "􀣺". */
  text1?: string;
}
export declare const MacMenuBarAppleLogoLight: React.FC<MacMenuBarAppleLogoLightProps>;
export default MacMenuBarAppleLogoLight;
