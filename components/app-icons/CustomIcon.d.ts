import * as React from 'react';
export interface CustomIconProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "default" | "dark" | "clear light";
}
export declare const CustomIcon: React.FC<CustomIconProps>;
export default CustomIcon;
