import * as React from 'react';
import type { ButtonText2Props } from '../../components/buttons/ButtonText2';
export interface ButtonText2VariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonText2 side by side. */
export declare const ButtonText2Variants: React.FC<ButtonText2VariantsProps>;
export default ButtonText2Variants;
/** Mode=Dark, State=Disabled */
export declare const ButtonText2ModeDarkStateDisabled: React.FC<Partial<ButtonText2Props>>;
/** Mode=Dark, State=Tinted */
export declare const ButtonText2ModeDarkStateTinted: React.FC<Partial<ButtonText2Props>>;
/** Mode=Dark, State=Selected */
export declare const ButtonText2ModeDarkStateSelected: React.FC<Partial<ButtonText2Props>>;
/** Mode=Dark, State=Default */
export declare const ButtonText2ModeDarkStateDefault: React.FC<Partial<ButtonText2Props>>;
/** Mode=Light,State=Tinted */
export declare const ButtonText2ModeLightStateTinted: React.FC<Partial<ButtonText2Props>>;
/** Mode=Light,State=Disabled */
export declare const ButtonText2ModeLightStateDisabled: React.FC<Partial<ButtonText2Props>>;
/** Mode=Light, State=Selected */
export declare const ButtonText2ModeLightStateSelected: React.FC<Partial<ButtonText2Props>>;
/** Mode=Light,State=Default */
export declare const ButtonText2ModeLightStateDefault: React.FC<Partial<ButtonText2Props>>;
