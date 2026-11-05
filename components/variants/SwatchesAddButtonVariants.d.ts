import * as React from 'react';
import type { SwatchesAddButtonProps } from '../../components/accessory-bars/SwatchesAddButton';
export interface SwatchesAddButtonVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SwatchesAddButton side by side. */
export declare const SwatchesAddButtonVariants: React.FC<SwatchesAddButtonVariantsProps>;
export default SwatchesAddButtonVariants;
/** Mode=Light */
export declare const SwatchesAddButtonModeLight: React.FC<Partial<SwatchesAddButtonProps>>;
/** Mode=Dark */
export declare const SwatchesAddButtonModeDark: React.FC<Partial<SwatchesAddButtonProps>>;
