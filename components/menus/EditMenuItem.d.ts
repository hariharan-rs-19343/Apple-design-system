import * as React from 'react';
export interface EditMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "destructive";
  item?: string;
}
export declare const EditMenuItem: React.FC<EditMenuItemProps>;
export default EditMenuItem;
