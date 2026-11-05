import * as React from 'react';
export interface ContextMenuQuickAction { symbol?: string; label: string; selected?: boolean; destructive?: boolean; }
export interface ContextMenuItem {
  /** Defaults to an action row. */
  type?: "item" | "separator" | "section" | "submenu";
  label?: string;
  subtitle?: string;
  /** SF Symbol glyph; defaults to "􀓔". */
  symbol?: string;
  /** Keyboard shortcut glyphs, e.g. ["􀆔","A"]. */
  shortcut?: string[];
  disabled?: boolean;
  destructive?: boolean;
}
export interface ContextMenuProps {
  className?: string;
  style?: React.CSSProperties;
  alignment?: "vertical" | "horizontal (ipad only)";
  side?: "trailing" | "leading";
  /** Text content; defaults to "Content Area". */
  text1?: string;
  quickActions?: ContextMenuQuickAction[];
  items?: ContextMenuItem[];
}
export declare const ContextMenu: React.FC<ContextMenuProps>;
export default ContextMenu;
