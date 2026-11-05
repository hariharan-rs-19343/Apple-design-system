import * as React from 'react';
import type { SeparatorIPadProps } from '../../components/kit/SeparatorIPad';
export interface SeparatorIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SeparatorIPad side by side. */
export declare const SeparatorIPadVariants: React.FC<SeparatorIPadVariantsProps>;
export default SeparatorIPadVariants;
/** Mode=Dark */
export declare const SeparatorIPadModeDark: React.FC<Partial<SeparatorIPadProps>>;
/** Mode=Light */
export declare const SeparatorIPadModeLight: React.FC<Partial<SeparatorIPadProps>>;
