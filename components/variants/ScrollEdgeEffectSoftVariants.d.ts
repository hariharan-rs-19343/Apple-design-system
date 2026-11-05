import * as React from 'react';
import type { ScrollEdgeEffectSoftProps } from '../../components/kit/ScrollEdgeEffectSoft';
export interface ScrollEdgeEffectSoftVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ScrollEdgeEffectSoft side by side. */
export declare const ScrollEdgeEffectSoftVariants: React.FC<ScrollEdgeEffectSoftVariantsProps>;
export default ScrollEdgeEffectSoftVariants;
/** Edge=Leading */
export declare const ScrollEdgeEffectSoftEdgeLeading: React.FC<Partial<ScrollEdgeEffectSoftProps>>;
/** Edge=Trailing */
export declare const ScrollEdgeEffectSoftEdgeTrailing: React.FC<Partial<ScrollEdgeEffectSoftProps>>;
/** Edge=Bottom */
export declare const ScrollEdgeEffectSoftEdgeBottom: React.FC<Partial<ScrollEdgeEffectSoftProps>>;
/** Edge=Top */
export declare const ScrollEdgeEffectSoftEdgeTop: React.FC<Partial<ScrollEdgeEffectSoftProps>>;
