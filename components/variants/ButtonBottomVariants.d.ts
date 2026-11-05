import * as React from 'react';
import type { ButtonBottomProps } from '../../components/buttons/ButtonBottom';
export interface ButtonBottomVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonBottom side by side. */
export declare const ButtonBottomVariants: React.FC<ButtonBottomVariantsProps>;
export default ButtonBottomVariants;
/** State=Text - Primary */
export declare const ButtonBottomStateTextPrimary: React.FC<Partial<ButtonBottomProps>>;
/** State=Text */
export declare const ButtonBottomStateText: React.FC<Partial<ButtonBottomProps>>;
/** State=6 Symbols */
export declare const ButtonBottomState6Symbols: React.FC<Partial<ButtonBottomProps>>;
/** State=5 Symbols */
export declare const ButtonBottomState5Symbols: React.FC<Partial<ButtonBottomProps>>;
/** State=4 Symbols */
export declare const ButtonBottomState4Symbols: React.FC<Partial<ButtonBottomProps>>;
/** State=3 Symbols */
export declare const ButtonBottomState3Symbols: React.FC<Partial<ButtonBottomProps>>;
/** State=2 Symbols */
export declare const ButtonBottomState2Symbols: React.FC<Partial<ButtonBottomProps>>;
/** State=1 Symbol */
export declare const ButtonBottomState1Symbol: React.FC<Partial<ButtonBottomProps>>;
/** State=1 Symbol - Prominent */
export declare const ButtonBottomState1SymbolProminent: React.FC<Partial<ButtonBottomProps>>;
