import * as React from 'react';
export interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  symbol?: string;
  state?: "disabled" | "default";
}
export declare const Toolbar: React.FC<ToolbarProps>;
export default Toolbar;
