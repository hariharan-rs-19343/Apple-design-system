import * as React from 'react';
import type { Symbol2Props } from '../../components/accessory-bars/Symbol2';
export interface Symbol2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Symbol2 side by side. */
export declare const Symbol2Variants: React.FC<Symbol2VariantsProps>;
export default Symbol2Variants;
/** Mode=Light */
export declare const Symbol2ModeLight: React.FC<Partial<Symbol2Props>>;
/** Mode=Dark */
export declare const Symbol2ModeDark: React.FC<Partial<Symbol2Props>>;
