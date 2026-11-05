import * as React from 'react';
export interface EditMenuItemSpec { label: string; destructive?: boolean; onClick?: () => void; }
export interface EditMenuProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  items?: EditMenuItemSpec[];
  showMore?: boolean;
  onMore?: () => void;
}
export declare const EditMenu: React.FC<EditMenuProps>;
export default EditMenu;
