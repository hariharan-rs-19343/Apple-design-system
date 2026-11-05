import * as React from 'react';
import type { ChevronProps } from '../../components/controls/Chevron';
export interface ChevronVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Chevron side by side. */
export declare const ChevronVariants: React.FC<ChevronVariantsProps>;
export default ChevronVariants;
/** Mode=Dark Elevated */
export declare const ChevronModeDarkElevated: React.FC<Partial<ChevronProps>>;
/** Mode=Dark */
export declare const ChevronModeDark: React.FC<Partial<ChevronProps>>;
/** Mode=Light */
export declare const ChevronModeLight: React.FC<Partial<ChevronProps>>;
