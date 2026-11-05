import * as React from 'react';
export interface BackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
}
export declare const Background: React.FC<BackgroundProps>;
export default Background;
