import * as React from 'react';
export interface MacWindowProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "titlebar";
}
export declare const MacWindow: React.FC<MacWindowProps>;
export default MacWindow;
