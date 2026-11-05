import * as React from 'react';
import type { PreviousProps } from '../../components/accessory-bars/Previous';
export interface PreviousVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Previous side by side. */
export declare const PreviousVariants: React.FC<PreviousVariantsProps>;
export default PreviousVariants;
/** Mode=Light, Enabled=False */
export declare const PreviousModeLightEnabledFalse: React.FC<Partial<PreviousProps>>;
/** Mode=Dark, Enabled=False */
export declare const PreviousModeDarkEnabledFalse: React.FC<Partial<PreviousProps>>;
/** Mode=Light, Enabled=True */
export declare const PreviousModeLightEnabledTrue: React.FC<Partial<PreviousProps>>;
/** Mode=Dark, Enabled=True */
export declare const PreviousModeDarkEnabledTrue: React.FC<Partial<PreviousProps>>;
