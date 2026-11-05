import * as React from 'react';
import type { SeparatorsProps } from '../../components/segmented-controls/Separators';
export interface SeparatorsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Separators side by side. */
export declare const SeparatorsVariants: React.FC<SeparatorsVariantsProps>;
export default SeparatorsVariants;
/** Mode=Dark Elevated */
export declare const SeparatorsModeDarkElevated: React.FC<Partial<SeparatorsProps>>;
/** Mode=Dark */
export declare const SeparatorsModeDark: React.FC<Partial<SeparatorsProps>>;
/** Mode=Light */
export declare const SeparatorsModeLight: React.FC<Partial<SeparatorsProps>>;
