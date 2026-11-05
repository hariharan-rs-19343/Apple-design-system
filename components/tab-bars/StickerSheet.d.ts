import * as React from 'react';
export interface StickerSheetProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const StickerSheet: React.FC<StickerSheetProps>;
export default StickerSheet;
