import * as React from 'react';
import type { ButtonBack2Props } from '../../components/actions/ButtonBack2';
export interface ButtonBack2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonBack2 side by side. */
export declare const ButtonBack2Variants: React.FC<ButtonBack2VariantsProps>;
export default ButtonBack2Variants;
/** Mode=Dark,State=Disabled */
export declare const ButtonBack2ModeDarkStateDisabled: React.FC<Partial<ButtonBack2Props>>;
/** Mode=Dark,State=Default */
export declare const ButtonBack2ModeDarkStateDefault: React.FC<Partial<ButtonBack2Props>>;
/** Mode=Light,State=Disabled */
export declare const ButtonBack2ModeLightStateDisabled: React.FC<Partial<ButtonBack2Props>>;
/** Mode=Light,State=Default */
export declare const ButtonBack2ModeLightStateDefault: React.FC<Partial<ButtonBack2Props>>;
