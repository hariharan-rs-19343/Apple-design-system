import * as React from 'react';
export interface MaterialsModeOptionsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark" | "ic - light" | "ic - dark";
  style2?: "ultrathin" | "thin" | "regular" | "thick" | "chrome";
}
export declare const MaterialsModeOptions: React.FC<MaterialsModeOptionsProps>;
export default MaterialsModeOptions;
