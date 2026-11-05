import * as React from 'react';
export type MacSizeMode = "mini" | "small" | "medium" | "large" | "xl";
export interface MacModeProps {
  className?: string;
  style?: React.CSSProperties;
  /** macOS control size mode applied to every kit component inside. Default "medium". */
  mode?: MacSizeMode;
  children?: React.ReactNode;
}
/** Scopes a macOS 26 kit size mode (mini/small/medium/large/xl) to its children via CSS custom properties. */
export declare const MacMode: React.FC<MacModeProps>;
export default MacMode;
