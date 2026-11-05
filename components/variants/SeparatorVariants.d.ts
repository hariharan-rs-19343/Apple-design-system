import * as React from 'react';
import type { SeparatorProps } from '../../components/lists/Separator';
export interface SeparatorVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Separator side by side. */
export declare const SeparatorVariants: React.FC<SeparatorVariantsProps>;
export default SeparatorVariants;
/** Mode=Dark */
export declare const SeparatorModeDark: React.FC<Partial<SeparatorProps>>;
/** Mode=Light */
export declare const SeparatorModeLight: React.FC<Partial<SeparatorProps>>;
