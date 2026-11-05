import * as React from 'react';
import type { QuickActionIPadProps } from '../../components/kit/QuickActionIPad';
export interface QuickActionIPadVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of QuickActionIPad side by side. */
export declare const QuickActionIPadVariants: React.FC<QuickActionIPadVariantsProps>;
export default QuickActionIPadVariants;
/** Mode=Dark, Destructive=True */
export declare const QuickActionIPadModeDarkDestructiveTrue: React.FC<Partial<QuickActionIPadProps>>;
/** Mode=Dark, Destructive=False */
export declare const QuickActionIPadModeDarkDestructiveFalse: React.FC<Partial<QuickActionIPadProps>>;
/** Mode=Light, Destructive=True */
export declare const QuickActionIPadModeLightDestructiveTrue: React.FC<Partial<QuickActionIPadProps>>;
/** Mode=Light, Destructive=False */
export declare const QuickActionIPadModeLightDestructiveFalse: React.FC<Partial<QuickActionIPadProps>>;
