import * as React from 'react';
import type { Selection2Props } from '../../components/kit/Selection2';
export interface Selection2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Selection2 side by side. */
export declare const Selection2Variants: React.FC<Selection2VariantsProps>;
export default Selection2Variants;
/** Mode=Dark */
export declare const Selection2ModeDark: React.FC<Partial<Selection2Props>>;
/** Mode=Light */
export declare const Selection2ModeLight: React.FC<Partial<Selection2Props>>;
