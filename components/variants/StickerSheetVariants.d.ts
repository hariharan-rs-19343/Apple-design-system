import * as React from 'react';
import type { StickerSheetProps } from '../../components/tab-bars/StickerSheet';
export interface StickerSheetVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of StickerSheet side by side. */
export declare const StickerSheetVariants: React.FC<StickerSheetVariantsProps>;
export default StickerSheetVariants;
/** Mode=Light */
export declare const StickerSheetModeLight: React.FC<Partial<StickerSheetProps>>;
/** Mode=Dark */
export declare const StickerSheetModeDark: React.FC<Partial<StickerSheetProps>>;
