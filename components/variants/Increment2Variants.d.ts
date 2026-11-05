import * as React from 'react';
import type { Increment2Props } from '../../components/steppers/Increment2';
export interface Increment2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Increment2 side by side. */
export declare const Increment2Variants: React.FC<Increment2VariantsProps>;
export default Increment2Variants;
/** Style=Disabled */
export declare const Increment2StyleDisabled: React.FC<Partial<Increment2Props>>;
/** Style=Pressed */
export declare const Increment2StylePressed: React.FC<Partial<Increment2Props>>;
/** Style=Default */
export declare const Increment2StyleDefault: React.FC<Partial<Increment2Props>>;
