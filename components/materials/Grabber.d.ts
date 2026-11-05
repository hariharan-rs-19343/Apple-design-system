import * as React from 'react';
export interface GrabberProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
}
export declare const Grabber: React.FC<GrabberProps>;
export default Grabber;
