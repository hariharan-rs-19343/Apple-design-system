import * as React from 'react';
import type { ScrollEdgeEffectHardProps } from '../../components/kit/ScrollEdgeEffectHard';
export interface ScrollEdgeEffectHardVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ScrollEdgeEffectHard side by side. */
export declare const ScrollEdgeEffectHardVariants: React.FC<ScrollEdgeEffectHardVariantsProps>;
export default ScrollEdgeEffectHardVariants;
/** Edge=Bottom */
export declare const ScrollEdgeEffectHardEdgeBottom: React.FC<Partial<ScrollEdgeEffectHardProps>>;
/** Edge=Top */
export declare const ScrollEdgeEffectHardEdgeTop: React.FC<Partial<ScrollEdgeEffectHardProps>>;
