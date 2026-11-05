import * as React from 'react';
export interface ExamplesSidebarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "list" | "list (multi-level)";
}
export declare const ExamplesSidebar: React.FC<ExamplesSidebarProps>;
export default ExamplesSidebar;
