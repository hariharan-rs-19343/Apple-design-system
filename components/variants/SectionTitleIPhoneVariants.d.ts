import * as React from 'react';
import type { SectionTitleIPhoneProps } from '../../components/menus/SectionTitleIPhone';
export interface SectionTitleIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of SectionTitleIPhone side by side. */
export declare const SectionTitleIPhoneVariants: React.FC<SectionTitleIPhoneVariantsProps>;
export default SectionTitleIPhoneVariants;
/** Mode=Dark */
export declare const SectionTitleIPhoneModeDark: React.FC<Partial<SectionTitleIPhoneProps>>;
/** Mode=Light */
export declare const SectionTitleIPhoneModeLight: React.FC<Partial<SectionTitleIPhoneProps>>;
