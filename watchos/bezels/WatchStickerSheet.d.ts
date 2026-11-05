import * as React from 'react';
export interface WatchStickerSheetProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WatchStickerSheet: React.FC<WatchStickerSheetProps>;
export default WatchStickerSheet;
