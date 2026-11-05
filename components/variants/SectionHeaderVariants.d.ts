import * as React from 'react';
import type { SectionHeaderProps } from '../../components/sidebar-items/SectionHeader';
export interface SectionHeaderVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SectionHeader side by side. */
export declare const SectionHeaderVariants: React.FC<SectionHeaderVariantsProps>;
export default SectionHeaderVariants;
/** Mode=Dark */
export declare const SectionHeaderModeDark: React.FC<Partial<SectionHeaderProps>>;
/** Mode=Light */
export declare const SectionHeaderModeLight: React.FC<Partial<SectionHeaderProps>>;
