import * as React from 'react';
export interface SidebarSearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  state?: "placeholder" | "typing" | "value";
  searchTerm?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀊱". */
  text2?: string;
}
export declare const SidebarSearchField: React.FC<SidebarSearchFieldProps>;
export default SidebarSearchField;
