import * as React from 'react';
import type { ArrowsProps } from '../../components/controls/Arrows';
export interface ArrowsVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Arrows side by side. */
export declare const ArrowsVariants: React.FC<ArrowsVariantsProps>;
export default ArrowsVariants;
/** State=Enabled */
export declare const ArrowsStateEnabled: React.FC<Partial<ArrowsProps>>;
/** State=Disabeld */
export declare const ArrowsStateDisabeld: React.FC<Partial<ArrowsProps>>;
