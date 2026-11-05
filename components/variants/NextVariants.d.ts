import * as React from 'react';
import type { NextProps } from '../../components/fields/Next';
export interface NextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Next side by side. */
export declare const NextVariants: React.FC<NextVariantsProps>;
export default NextVariants;
/** Mode=Light, Enabled=False */
export declare const NextModeLightEnabledFalse: React.FC<Partial<NextProps>>;
/** Mode=Dark, Enabled=False */
export declare const NextModeDarkEnabledFalse: React.FC<Partial<NextProps>>;
/** Mode=Light, Enabled=True */
export declare const NextModeLightEnabledTrue: React.FC<Partial<NextProps>>;
/** Mode=Dark, Enabled=True */
export declare const NextModeDarkEnabledTrue: React.FC<Partial<NextProps>>;
