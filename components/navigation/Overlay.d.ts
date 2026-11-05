import * as React from 'react';
export interface OverlayProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
}
export declare const Overlay: React.FC<OverlayProps>;
export default Overlay;
