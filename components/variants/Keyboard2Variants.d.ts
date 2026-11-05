import * as React from 'react';
import type { Keyboard2Props } from '../../components/kit/Keyboard2';
export interface Keyboard2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Keyboard2 side by side. */
export declare const Keyboard2Variants: React.FC<Keyboard2VariantsProps>;
export default Keyboard2Variants;
/** Type=Shift */
export declare const Keyboard2TypeShift: React.FC<Partial<Keyboard2Props>>;
/** Type=Default */
export declare const Keyboard2TypeDefault: React.FC<Partial<Keyboard2Props>>;
