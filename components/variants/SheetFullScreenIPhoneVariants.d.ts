import * as React from 'react';
import type { SheetFullScreenIPhoneProps } from '../../components/kit/SheetFullScreenIPhone';
export interface SheetFullScreenIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SheetFullScreenIPhone side by side. */
export declare const SheetFullScreenIPhoneVariants: React.FC<SheetFullScreenIPhoneVariantsProps>;
export default SheetFullScreenIPhoneVariants;
/** Stacked=True */
export declare const SheetFullScreenIPhoneStackedTrue: React.FC<Partial<SheetFullScreenIPhoneProps>>;
/** Stacked=False */
export declare const SheetFullScreenIPhoneStackedFalse: React.FC<Partial<SheetFullScreenIPhoneProps>>;
