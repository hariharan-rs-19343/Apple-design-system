import * as React from 'react';
import type { Buttons2Props } from '../../components/alerts/Buttons2';
export interface Buttons2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of Buttons2 side by side. */
export declare const Buttons2Variants: React.FC<Buttons2VariantsProps>;
export default Buttons2Variants;
/** Mode=Dark, Type=Destructive */
export declare const Buttons2ModeDarkTypeDestructive: React.FC<Partial<Buttons2Props>>;
/** Mode=Dark, Type=Secondary */
export declare const Buttons2ModeDarkTypeSecondary: React.FC<Partial<Buttons2Props>>;
/** Mode=Dark, Type=Primary */
export declare const Buttons2ModeDarkTypePrimary: React.FC<Partial<Buttons2Props>>;
/** Mode=Light, Type=Destructive */
export declare const Buttons2ModeLightTypeDestructive: React.FC<Partial<Buttons2Props>>;
/** Mode=Light, Type=Secondary */
export declare const Buttons2ModeLightTypeSecondary: React.FC<Partial<Buttons2Props>>;
/** Mode=Light, Type=Primary */
export declare const Buttons2ModeLightTypePrimary: React.FC<Partial<Buttons2Props>>;
