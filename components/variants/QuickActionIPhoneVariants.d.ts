import * as React from 'react';
import type { QuickActionIPhoneProps } from '../../components/menus/QuickActionIPhone';
export interface QuickActionIPhoneVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of QuickActionIPhone side by side. */
export declare const QuickActionIPhoneVariants: React.FC<QuickActionIPhoneVariantsProps>;
export default QuickActionIPhoneVariants;
/** Mode=Dark, Destructive=True */
export declare const QuickActionIPhoneModeDarkDestructiveTrue: React.FC<Partial<QuickActionIPhoneProps>>;
/** Mode=Dark, Destructive=False */
export declare const QuickActionIPhoneModeDarkDestructiveFalse: React.FC<Partial<QuickActionIPhoneProps>>;
/** Mode=Light, Destructive=True */
export declare const QuickActionIPhoneModeLightDestructiveTrue: React.FC<Partial<QuickActionIPhoneProps>>;
/** Mode=Light, Destructive=False */
export declare const QuickActionIPhoneModeLightDestructiveFalse: React.FC<Partial<QuickActionIPhoneProps>>;
