import * as React from 'react';
import type { ButtonSymbolProps } from '../../components/buttons/ButtonSymbol';
export interface ButtonSymbolVariantsProps { style?: React.CSSProperties; }
/** Renders every variant of ButtonSymbol side by side. */
export declare const ButtonSymbolVariants: React.FC<ButtonSymbolVariantsProps>;
export default ButtonSymbolVariants;
/** Enabled=False */
export declare const ButtonSymbolEnabledFalse: React.FC<Partial<ButtonSymbolProps>>;
/** Enabled=True */
export declare const ButtonSymbolEnabledTrue: React.FC<Partial<ButtonSymbolProps>>;
