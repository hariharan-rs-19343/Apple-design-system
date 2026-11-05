import * as React from 'react';
import type { Decrement2Props } from '../../components/sliders/Decrement2';
export interface Decrement2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Decrement2 side by side. */
export declare const Decrement2Variants: React.FC<Decrement2VariantsProps>;
export default Decrement2Variants;
/** Style=Disabled */
export declare const Decrement2StyleDisabled: React.FC<Partial<Decrement2Props>>;
/** Style=Pressed */
export declare const Decrement2StylePressed: React.FC<Partial<Decrement2Props>>;
/** Style=Default */
export declare const Decrement2StyleDefault: React.FC<Partial<Decrement2Props>>;
