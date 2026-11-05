import * as React from 'react';
import type { SlidersProps } from '../../components/sliders/Sliders';
export interface SlidersVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Sliders side by side. */
export declare const SlidersVariants: React.FC<SlidersVariantsProps>;
export default SlidersVariants;
/** Value=100% */
export declare const SlidersValue100: React.FC<Partial<SlidersProps>>;
/** Value=75% */
export declare const SlidersValue75: React.FC<Partial<SlidersProps>>;
/** Value=50% */
export declare const SlidersValue50: React.FC<Partial<SlidersProps>>;
/** Value=25% */
export declare const SlidersValue25: React.FC<Partial<SlidersProps>>;
/** Value=0% */
export declare const SlidersValue0: React.FC<Partial<SlidersProps>>;
