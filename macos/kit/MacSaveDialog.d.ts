import * as React from 'react';
export interface MacSaveDialogProps {
  className?: string;
  style?: React.CSSProperties;
  /** "small" (390×284 alert-style save), "large" (800×448 browser save), or "board" (both, as on the kit page). Default "board". */
  size?: "small" | "large" | "board";
  fileName?: string;
  /** Small dialog only. */
  title?: string;
  /** Small dialog only. */
  description?: string;
}
/** macOS Save dialog (Examples/Dialog/Save - Small & Large). Window radius 26, controls 24pt tall with 6pt radius. */
export declare const MacSaveDialog: React.FC<MacSaveDialogProps>;
export declare const MacSaveDialogSmall: React.FC<MacSaveDialogProps>;
export declare const MacSaveDialogLarge: React.FC<MacSaveDialogProps>;
export default MacSaveDialog;
