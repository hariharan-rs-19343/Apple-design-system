import * as React from 'react';
export interface ToolbarButtonTextProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  mode?: "dark" | "light";
  /** Text content; defaults to "Edit". */
  text1?: string;
}
export declare const ToolbarButtonText: React.FC<ToolbarButtonTextProps>;
export default ToolbarButtonText;
