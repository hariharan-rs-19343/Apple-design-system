import * as React from 'react';
import type { WatchStickerSheetProps } from '../../watchos/bezels/WatchStickerSheet';
export interface WatchStickerSheetVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of WatchStickerSheet side by side. */
export declare const WatchStickerSheetVariants: React.FC<WatchStickerSheetVariantsProps>;
export default WatchStickerSheetVariants;
/** Mode=Light */
export declare const WatchStickerSheetModeLight: React.FC<Partial<WatchStickerSheetProps>>;
/** Mode=Dark */
export declare const WatchStickerSheetModeDark: React.FC<Partial<WatchStickerSheetProps>>;
