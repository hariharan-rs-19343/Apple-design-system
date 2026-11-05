import * as React from 'react';
export interface ViewContentsProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  instance?: React.ReactNode;
  /** Text content; defaults to "Edit Actions...". */
  text1?: string;
}
export declare const ViewContents: React.FC<ViewContentsProps>;
export default ViewContents;
