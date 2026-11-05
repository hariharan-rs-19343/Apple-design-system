import * as React from 'react';
import type { SectionTitleIPadProps } from '../../components/kit/SectionTitleIPad';
export interface SectionTitleIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SectionTitleIPad side by side. */
export declare const SectionTitleIPadVariants: React.FC<SectionTitleIPadVariantsProps>;
export default SectionTitleIPadVariants;
/** Mode=Dark */
export declare const SectionTitleIPadModeDark: React.FC<Partial<SectionTitleIPadProps>>;
/** Mode=Light */
export declare const SectionTitleIPadModeLight: React.FC<Partial<SectionTitleIPadProps>>;
