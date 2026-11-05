import * as React from 'react';
export interface SidebarEditButtonProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  type?: "delete" | "selectable" | "selected";
  /** Text content; defaults to "􀆅". */
  text1?: string;
}
export declare const SidebarEditButton: React.FC<SidebarEditButtonProps>;
export default SidebarEditButton;
