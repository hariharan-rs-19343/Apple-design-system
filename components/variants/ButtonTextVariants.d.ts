import * as React from 'react';
import type { ButtonTextProps } from '../../components/buttons/ButtonText';
export interface ButtonTextVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonText side by side. */
export declare const ButtonTextVariants: React.FC<ButtonTextVariantsProps>;
export default ButtonTextVariants;
/** Emphasized=true,Enabled=false */
export declare const ButtonTextEmphasizedTrueEnabledFalse: React.FC<Partial<ButtonTextProps>>;
/** Emphasized=false,Enabled=false */
export declare const ButtonTextEmphasizedFalseEnabledFalse: React.FC<Partial<ButtonTextProps>>;
/** Emphasized=true,Enabled=true */
export declare const ButtonTextEmphasizedTrueEnabledTrue: React.FC<Partial<ButtonTextProps>>;
/** Emphasized=false,Enabled=true */
export declare const ButtonTextEmphasizedFalseEnabledTrue: React.FC<Partial<ButtonTextProps>>;
