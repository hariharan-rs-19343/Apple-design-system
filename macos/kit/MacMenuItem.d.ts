import * as React from 'react';
import type { MacShortcutsProps } from './MacShortcuts';
export interface MacMenuItemProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "action" | "submenu";
  /** Reserves a checkmark column (menus with selectable items). */
  menuHasSelection?: boolean;
  /** "hover" is blue for actions and gray for submenus; "hover + key" is blue. */
  state?: "idle" | "hover + key" | "hover" | "disabled";
  showCheckmark?: boolean;
  /** Checkmark glyph; defaults to "􀆅". */
  checkmark?: string;
  label?: string;
  showSymbol?: boolean;
  /** Keep the leading symbol column for alignment even when showSymbol is false. Default true. */
  showSymbolColumn?: boolean;
  showShortcuts?: boolean;
  /** Forwarded to MacShortcuts (letter, showControl, showOption, showShift, showCommand). */
  shortcut?: Omit<MacShortcutsProps, "state" | "style" | "className">;
  symbol?: string;
  /** Submenu chevron glyph; defaults to "􀆊". */
  text1?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export declare const MacMenuItem: React.FC<MacMenuItemProps>;
export default MacMenuItem;
